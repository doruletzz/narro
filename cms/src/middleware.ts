import { defineMiddleware } from 'astro:middleware';
import { createHash, timingSafeEqual } from 'node:crypto';

/**
 * Secret-token guard for the Keystatic admin.
 *
 * Access model (see CMS-SETUP.md):
 *   - The admin URL is https://keystatic.narro.co/keystatic?token=<CMS_AUTH_TOKEN>
 *   - On the first request with a valid ?token=, we remember it in an
 *     HttpOnly cookie (hashed, never the raw secret). This is required so the
 *     GitHub OAuth sign-in flow keeps working — GitHub redirects back
 *     without the ?token= query param.
 *   - Without a valid token (query or cookie) → 403.
 *   - If CMS_AUTH_TOKEN is not set (local dev), the guard is disabled.
 */

const TOKEN_COOKIE = 'cms_auth';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days



function sha256(value: string): string {
  return createHash('sha256').update(value, 'utf8').digest('hex');
}

function safeEqualHex(a: string, b: string): boolean {
  const ab = Buffer.from(a, 'hex');
  const bb = Buffer.from(b, 'hex');
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

function isProtected(pathname: string): boolean {
  // The GitHub OAuth handshake must stay reachable without ?token:
  // GitHub redirects back to these routes without the query param.
  // They only perform the OAuth exchange — content is never served here
  // (in github storage mode the browser talks to api.github.com directly).
  if (pathname === '/api/keystatic/github' || pathname.startsWith('/api/keystatic/github/')) {
    return false;
  }
  return (
    pathname === '/keystatic' ||
    pathname.startsWith('/keystatic/') ||
    pathname === '/api/keystatic' ||
    pathname.startsWith('/api/keystatic/')
  );
}

export const onRequest = defineMiddleware((context, next) => {
  const { url } = context;

  // The whole site is the admin — send the root to it.
  if (url.pathname === '/') {
    return new Response(null, {
      status: 302,
      headers: { Location: '/keystatic' },
    });
  }

  if (!isProtected(url.pathname)) {
    return next();
  }

  const expected = import.meta.env.CMS_AUTH_TOKEN;
  if (!expected) {
    // Local dev: no secret configured → open access.
    return next();
  }

  const expectedHash = sha256(expected);
  const queryToken = url.searchParams.get('token');
  const cookie = context.cookies.get(TOKEN_COOKIE);
  const cookieHash = cookie ? cookie.value : undefined;

  const okFromQuery = queryToken !== null && safeEqualHex(sha256(queryToken), expectedHash);
  const okFromCookie = cookieHash !== undefined && safeEqualHex(cookieHash, expectedHash);

  console.log({expected, okFromQuery})
  if (!okFromQuery && !okFromCookie) {
    return new Response(
      '403 — Forbidden. This is the Narro CMS admin. ' +
        'You need the secret token: open /keystatic?token=<token> with the token provided by the site owner.',
      { status: 403 }
    );
  }

  if (okFromQuery && !okFromCookie) {
    // Remember the (hashed) secret so OAuth redirects without ?token still pass.
    context.cookies.set(TOKEN_COOKIE, expectedHash, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: COOKIE_MAX_AGE,
    });
  }

  return next();
});
