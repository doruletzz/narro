// Contact page content schema
import { singleton, fields } from '@keystatic/core';
import { pageFields } from './page.js';

export const contact = singleton({
  label: 'Contact',
  path: 'src/content/contact.yaml',
  schema: {
    ...pageFields,
    ctaHeading: fields.text({
      label: 'CTA Heading',
      defaultValue: 'DA-NE UN BEEP',
    }),
    introText: fields.text({
      label: 'Intro Text',
      multiline: true,
    }),
    phone: fields.text({
      label: 'Phone Number',
      defaultValue: '+40 729 729 695',
    }),
    email: fields.text({
      label: 'Email',
      defaultValue: 'contact@narro.co',
    }),
    address: fields.text({
      label: 'Address',
      multiline: true,
    }),
    socialLinks: fields.array({
      label: 'Social Links',
      item: fields.object({
        label: 'Social Link',
        schema: {
          platform: fields.text({
            label: 'Platform (e.g. Instagram, Facebook, TikTok)',
          }),
          handle: fields.text({
            label: 'Handle / Username',
          }),
          url: fields.text({
            label: 'URL',
          }),
        },
      }),
    }),
    formEnabled: fields.checkbox({
      label: 'Enable Contact Form',
      defaultValue: true,
    }),
    formFields: fields.array({
      label: 'Form Fields',
      item: fields.object({
        label: 'Form Field',
        schema: {
          name: fields.text({
            label: 'Field Name (internal)',
          }),
          label: fields.text({
            label: 'Label (displayed)',
          }),
          type: fields.text({
            label: 'Type (text, email, textarea, etc.)',
          }),
          required: fields.checkbox({
            label: 'Required',
            defaultValue: false,
          }),
        },
      }),
    }),
    submitButtonText: fields.text({
      label: 'Submit Button Text',
      defaultValue: 'Trimite mesajul',
    }),
  },
});
