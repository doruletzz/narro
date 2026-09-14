import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// The Keystatic admin server — deployed to Netlify at keystatic.narro.co.
//
// - `output: 'server'` makes the whole app server-rendered; Netlify runs it
//   as a serverless function (the entire site IS the admin).
// - The keystatic integration injects:
//     /keystatic/*        → the admin UI
//     /api/keystatic/*    → the API (GitHub OAuth handshake in github mode)
// - The react integration is required to render the Keystatic UI component.
// - src/middleware.ts guards both with the CMS_AUTH_TOKEN secret (?token=…).
// - Content is read/written in the doruletzz/narro repo (GitHub storage,
//   see keystatic.config.ts). Cloudflare Pages rebuilds narro.co on push.
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [react(), keystatic()],
});
