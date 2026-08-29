// Navigation / Menu schema for Header component
import { singleton, fields } from '@keystatic/core';

export const navigation = singleton({
  label: 'Navigation',
  path: 'src/content/navigation.yaml',
  schema: {
    links: fields.array(
      fields.object({
        label: fields.text({
          label: 'Label',
          validation: { isRequired: true },
        }),
        href: fields.text({
          label: 'URL / Path',
          validation: { isRequired: true },
        }),
      }),
      {
        label: 'Navigation Links',
        itemLabel: () => 'Link',
      }
    ),
    logoText: fields.text({
      label: 'Logo Text',
      defaultValue: 'NARRO',
    }),
    logoImage: fields.text({
      label: 'Logo Image URL (optional)',
    }),
  },
});
