import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// The Keystatic admin server — deployed to Netlify at keystatic.narro.co.
//
// - `output: 'server'` makes the whole app server-rendered; Netlify runs it
//   as a serverless function (the entire site IS the admin).
// - The keystatic integration injects:
//     /keystatic/*        → the admin UI
//     /api/keystatic/*    → the API (cloud mode — no OAuth handshake)
// - The react integration is required to render the Keystatic UI component.
// - Content is read/written via Keystatic Cloud (see keystatic.config.ts).
//   Cloudflare Pages rebuilds narro.co on push.
//
// `server.fs.allow` permits Vite to resolve cross-package imports from
// `../frontend/keystatic.config` into the workspace root.
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [react(), keystatic()],
  vite: {
    server: {
      fs: {
        allow: [resolve(__dirname, '..')],
      },
    },
    optimizeDeps: {
      // Exclude @keystar packages from Vite pre-bundling 
      // (prevents Vite from looking for a non-existent root "." entry point)
      exclude: ['@keystar/ui'],
    },
    ssr: {
      noExternal: ['@keystar/ui', '@keystatic/core'],
    },
  },
});
