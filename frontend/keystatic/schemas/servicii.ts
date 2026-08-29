// Services page content schema
import { singleton, fields } from '@keystatic/core';
import { pageFields } from './page.js';

export const servicii = singleton({
  label: 'Servicii',
  path: 'src/content/servicii.yaml',
  schema: {
    ...pageFields,
    intro: fields.text({
      label: 'Intro Text',
      multiline: true,
    }),
    services: fields.array(
      fields.object({
        icon: fields.image({
          label: 'Icon',
        }),
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        link: fields.text({
          label: 'Link (optional)',
        }),
        linkText: fields.text({
          label: 'Link Text',
        }),
      }),
      {
        label: 'Services',
        itemLabel: () => 'Service',
      }
    ),
    ctaText: fields.text({
      label: 'CTA Text',
    }),
    ctaLink: fields.text({
      label: 'CTA Link',
    }),
  },
});
