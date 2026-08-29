// Landing / Home page content schema
import { singleton, fields } from '@keystatic/core';
import { pageFields } from './page.js';

export const landing = singleton({
  label: 'Landing / Home',
  path: 'src/content/landing.yaml',
  schema: {
    ...pageFields,
    hero: fields.object({
      headline: fields.text({
        label: 'Headline',
        description: 'Main hero headline text',
        validation: { isRequired: true },
        multiline: true,
      }),
      ctaText: fields.text({
        label: 'CTA Button Text',
        defaultValue: 'ZI-NE CARE-I TREABA',
      }),
      ctaLink: fields.text({
        label: 'CTA Link',
        defaultValue: '/contact',
      }),
    }),
    manifesto: fields.object({
      sectionTitle: fields.text({
        label: 'Section Title',
        defaultValue: 'MANIFESTO',
      }),
      image: fields.image({
        label: 'Image',
        description: 'Image for manifesto section (e.g. 3 women on rocket)',
      }),
      alt: fields.text({
        label: 'Image Alt Text',
        defaultValue: 'Echipa Narro — Branding manifest',
      }),
      paragraphs: fields.array(
        fields.object({
          content: fields.text({
            label: 'Content',
            validation: { isRequired: true },
            multiline: true,
          }),
        }),
        {
          label: 'Paragraphs',
          description: 'Each paragraph becomes a <p> in the manifesto text',
          itemLabel: () => 'Paragraph',
        }
      ),
    }),
    directia: fields.object({
      sectionTitle: fields.text({
        label: 'Section Title',
        defaultValue: 'DIRECTIA',
      }),
      cards: fields.array(
        fields.object({
          image: fields.image({
            label: 'Image',
            validation: { isRequired: true },
          }),
          alt: fields.text({
            label: 'Image Alt Text',
          }),
          tagline: fields.text({
            label: 'Tagline',
            description: 'Small uppercase text above the title (e.g. "viața-i grea")',
          }),
          title: fields.text({
            label: 'Title',
            validation: { isRequired: true },
          }),
          description: fields.text({
            label: 'Description',
            multiline: true,
            validation: { isRequired: true },
          }),
          link: fields.text({
            label: 'Link',
            defaultValue: '/portofolio',
          }),
        }),
        {
          label: 'Cards',
          description: 'Each card: image, tagline, title, description, link',
          itemLabel: () => 'Card',
          validation: {
            length: { min: 3, max: 3 },
          },
        }
      ),
    }),
    teaser: fields.object({
      sectionTitle: fields.text({
        label: 'Section Title',
        defaultValue: 'TEASER',
      }),
      image: fields.image({
        label: 'Image',
        description: 'Full-width image for teaser section',
      }),
      alt: fields.text({
        label: 'Image Alt Text',
      }),
      description: fields.text({
        label: 'Description',
        multiline: true,
        validation: { isRequired: true },
      }),
      ctaText: fields.text({
        label: 'CTA Button Text',
        defaultValue: 'Află mai multe',
      }),
      ctaLink: fields.text({
        label: 'CTA Link',
        defaultValue: '/contact',
      }),
    }),
    studiiDeCaz: fields.object({
      sectionTitle: fields.text({
        label: 'Section Title',
        defaultValue: 'STUDII DE CAZ',
      }),
      introText: fields.text({
        label: 'Intro Text',
        multiline: true,
        validation: { isRequired: true },
      }),
      caseStudies: fields.array(
        fields.object({
          image: fields.image({
            label: 'Image',
            validation: { isRequired: true },
          }),
          alt: fields.text({
            label: 'Image Alt Text',
          }),
          title: fields.text({
            label: 'Title',
            validation: { isRequired: true },
          }),
          description: fields.text({
            label: 'Description',
            multiline: true,
            validation: { isRequired: true },
          }),
          ctaText: fields.text({
            label: 'CTA Button Text',
            defaultValue: 'Află mai multe',
          }),
          ctaLink: fields.text({
            label: 'CTA Link',
            defaultValue: '/contact',
          }),
        }),
        {
          label: 'Case Studies',
          description: 'Each case study: image, title, description, link',
          itemLabel: () => 'Case Study',
          validation: {
            length: { min: 2, max: 2 },
          },
        }
      ),
    }),
    ctaBanner: fields.object({
      image: fields.image({
        label: 'Banner Image',
        description: 'Full-width banner background image',
      }),
      alt: fields.text({
        label: 'Image Alt Text',
      }),
      buttonText: fields.text({
        label: 'Button Text',
        defaultValue: 'ZI-NE CARE-I TREABA',
      }),
      buttonLink: fields.text({
        label: 'Button Link',
        defaultValue: '/contact',
      }),
    }),
  },
});
