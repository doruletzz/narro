// Keystatic content reading helpers for Astro
// Use createReader directly in Astro page frontmatter:
//   import { createReader } from '@keystatic/core';
//   const reader = createReader(process.cwd(), (await import('../../keystatic.config.ts')).default);
//   const content = await reader.singletons.landing.read();
