// Shared page schema fields used across all pages
import { fields } from '@keystatic/core';

export const pageFields = {
  title: fields.text({
    label: 'Title',
    validation: { isRequired: true },
  }),
  metaDescription: fields.text({
    label: 'Meta Description',
    multiline: true,
    description: 'Brief description for search engines (max 160 chars)',
    validation: {
      length: { max: 160 },
    },
  }),
};
