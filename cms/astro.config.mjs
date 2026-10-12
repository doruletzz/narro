import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

/*
 * The Keystatic admin server — deployed to Netlify at keystatic.narro.co.
 *
 * - `output: 'server'` makes the whole app server-rendered; Netlify runs it
 *   as a serverless function (the entire site IS the admin).
 * - The keystatic integration reads `./keystatic.config.ts` (inlined schemas,
 *   no cross-package imports) and injects:
 *     /keystatic/*        → the admin UI
 *     /api/keystatic/*    → the API (cloud mode — no OAuth handshake)
 * - The react integration is required to render the Keystatic UI components.
 * - Content is written to Keystatic Cloud (api.keystatic.cloud).
 *   Cloudflare Pages rebuilds narro.co on push from Keystatic's GitHub webhook.
 *
 * The `keystatic.config.ts` file is fully self-contained (no cross-package
 * imports). See cms/keystatic.config.ts for details.
 */

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [react(), keystatic()],
  ssr: {
    // Bundle @keystar and @keystatic inside the server bundle (they're ESM
    // CJS hybrids that Vite may mishandle if treated as external).
    noExternal: ['@keystar/ui', '@keystatic/core'],
  },
});
