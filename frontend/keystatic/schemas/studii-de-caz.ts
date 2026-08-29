// Case Studies list page content schema
import { singleton, fields } from '@keystatic/core';
import { pageFields } from './page.js';

export const studiiDeCaz = singleton({
  label: 'Studii de Caz (List)',
  path: 'src/content/studii-de-caz.yaml',
  schema: {
    ...pageFields,
    intro: fields.text({
      label: 'Intro Text',
      multiline: true,
    }),
    featuredStudies: fields.array(
      fields.object({
        thumbnail: fields.image({
          label: 'Thumbnail',
        }),
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        briefDescription: fields.text({
          label: 'Brief Description',
          multiline: true,
        }),
        slug: fields.text({
          label: 'Slug (links to detail page)',
        }),
      }),
      {
        label: 'Featured Studies',
        itemLabel: () => 'Featured Study',
      }
    ),
  },
});
