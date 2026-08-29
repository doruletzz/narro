// Hero / Landing page content schema
import { singleton, fields } from '@keystatic/core';
import { pageFields } from './page.js';

export const hero = singleton({
  label: 'Hero / Landing',
  path: 'src/content/hero.yaml',
  schema: {
    ...pageFields,
    headline: fields.text({
      label: 'Headline',
      validation: { isRequired: true },
      multiline: true,
    }),
    subheadline: fields.text({
      label: 'Subheadline',
      multiline: true,
    }),
    ctaText: fields.text({
      label: 'CTA Button Text',
    }),
    ctaLink: fields.text({
      label: 'CTA Link',
    }),
    ctaVariant: fields.select({
      label: 'CTA Button Variant',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Outline', value: 'outline' },
      ],
      defaultValue: 'primary',
    }),
    backgroundImage: fields.image({
      label: 'Background Image',
    }),
    backgroundType: fields.select({
      label: 'Background Type',
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Gradient', value: 'gradient' },
        { label: 'Solid', value: 'solid' },
      ],
      defaultValue: 'gradient',
    }),
  },
});
