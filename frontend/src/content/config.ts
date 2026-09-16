import { defineCollection, z } from 'astro:content';

// Case study detail pages. The entry files are markdown files managed by
// Keystatic (see `studiiDeCaz` collection in keystatic.config.ts) — the
// frontmatter holds the fields below, the file body is the page content.
const studiiDeCaz = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    bannerImage: z.string(),
    bannerImageAlt: z.string(),
  }),
});

export const collections = {
  'studii-de-caz': studiiDeCaz,
};
