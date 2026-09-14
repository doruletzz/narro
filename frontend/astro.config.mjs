import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Static site only — deployed to Cloudflare Pages.
// The Keystatic admin lives in ../cms (deployed to Netlify at keystatic.narro.co)
// and shares this project's keystatic.config.ts (GitHub storage).
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
});
