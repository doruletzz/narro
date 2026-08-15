// Program Social page content schema
import { singleton, fields } from '@keystatic/core';
import { pageFields } from './page.js';

export const programSocial = singleton({
  label: 'Program Social',
  path: 'src/content/program-social.yaml',
  schema: {
    ...pageFields,
    description: fields.text({
      label: 'Program Description',
      multiline: true,
    }),
    benefits: fields.array({
      label: 'Benefits / Features',
      item: fields.object({
        label: 'Benefit',
        schema: {
          icon: fields.image({
            label: 'Icon (optional)',
          }),
          title: fields.text({
            label: 'Title',
            validation: { isRequired: true },
          }),
          description: fields.text({
            label: 'Description',
            multiline: true,
          }),
        },
      }),
    }),
    ctaHeading: fields.text({
      label: 'CTA Heading',
      defaultValue: 'APLICA ACUM',
    }),
    ctaButtonText: fields.text({
      label: 'CTA Button Text',
    }),
    ctaLink: fields.text({
      label: 'CTA Link',
    }),
    additionalContent: fields.text({
      label: 'Additional Content',
      multiline: true,
    }),
  },
});
