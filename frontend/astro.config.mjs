import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// Single Cloudflare Pages deployment.
// The Keystatic admin runs as a serverless route (/keystatic) inside
// the same deployment as the static site — it's never shipped to visitors.
export default defineConfig({
  adapter: cloudflare({
    // Cloudflare Pages automatically detects this.
  }),
  integrations: [tailwind(), react(), keystatic()],
});
