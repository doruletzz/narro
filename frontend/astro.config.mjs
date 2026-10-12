import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Single Cloudflare Pages deployment.
// The Keystatic admin has been moved to cms/ (deployed to Netlify).
// This frontend reads content at build time via @keystatic/core/reader.
export default defineConfig({
  adapter: cloudflare({
    // Cloudflare Pages automatically detects this.
  }),
  integrations: [tailwind(), react()],
});
