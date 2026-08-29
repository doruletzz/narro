// Individual detailed case study schema (collection with slug)
import { collection, fields } from '@keystatic/core';

export const studiiDetaliate = collection({
  label: 'Studii Detaliate',
  path: 'src/content/case-studies/*',
  slugField: 'slug',
  schema: {
    slug: fields.slug({
      name: { label: 'Slug' },
    }),
    title: fields.text({
      label: 'Title',
      validation: { isRequired: true },
    }),
    metaDescription: fields.text({
      label: 'Meta Description',
      multiline: true,
      validation: {
        length: { max: 160 },
      },
    }),
    heroImage: fields.image({
      label: 'Hero Image',
    }),
    client: fields.text({
      label: 'Client',
    }),
    industry: fields.text({
      label: 'Industry',
    }),
    challenge: fields.text({
      label: 'Challenge',
      multiline: true,
    }),
    solution: fields.text({
      label: 'Solution',
      multiline: true,
    }),
    results: fields.array(
      fields.object({
        metric: fields.text({
          label: 'Metric (e.g. 95%)',
        }),
        description: fields.text({
          label: 'Description',
        }),
      }),
      {
        label: 'Results',
        itemLabel: () => 'Result',
      }
    ),
    content: fields.mdx({
      label: 'Content',
      extension: 'mdx',
    }),
  },
});
