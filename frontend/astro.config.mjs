import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// https://astro.build/config
// Pure static output — all pages prerendered, no server needed.
// Content is managed by editing YAML files in src/content/ and committing.
// (Keystatic admin removed: it requires a server. Editorial changes go through Git.)
export default defineConfig({
  integrations: [tailwind(), react(), keystatic()],
  output: 'static',
});
