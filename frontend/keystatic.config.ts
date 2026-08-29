import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage/index',
      format: { data: 'yaml' },
      schema: {
        hero: fields.object(
          {
            title: fields.text({ label: 'Titlu Hero', multiline: true }),
            ctaLabel: fields.text({ label: 'Text buton CTA', defaultValue: 'ZI-NE CARE-I TREABA' }),
            ctaHref: fields.text({ label: 'Link buton CTA', defaultValue: '/contact' }),
          },
          { label: 'Hero' }
        ),

        manifesto: fields.object(
          {
            label: fields.text({ label: 'Etichetă secțiune', defaultValue: 'MANIFESTO' }),
            image: fields.image({
              label: 'Imagine',
              directory: 'public/images/manifesto',
              publicPath: '/images/manifesto/',
            }),
            imageAlt: fields.text({ label: 'Text alternativ imagine' }),
            paragraphs: fields.array(
              fields.text({ label: 'Paragraf', multiline: true }),
              {
                label: 'Paragrafe',
                itemLabel: (props) => props.value?.slice(0, 50) || 'Paragraf',
              }
            ),
          },
          { label: 'Manifesto' }
        ),

        directia: fields.object(
          {
            label: fields.text({ label: 'Etichetă secțiune', defaultValue: 'DIRECTIA' }),
            cards: fields.array(
              fields.object({
                eyebrow: fields.text({ label: 'Text mic deasupra titlului' }),
                title: fields.text({ label: 'Titlu' }),
                description: fields.text({ label: 'Descriere', multiline: true }),
                image: fields.image({
                  label: 'Imagine',
                  directory: 'public/images/directia',
                  publicPath: '/images/directia/',
                }),
                imageAlt: fields.text({ label: 'Text alternativ imagine' }),
                href: fields.text({ label: 'Link', defaultValue: '/portofolio' }),
              }),
              {
                label: 'Carduri',
                itemLabel: (props) => props.fields.title.value || 'Card',
              }
            ),
          },
          { label: 'Direcția' }
        ),

        teaser: fields.object(
          {
            label: fields.text({ label: 'Etichetă secțiune', defaultValue: 'TEASER' }),
            youtubeId: fields.text({ label: 'ID video YouTube', defaultValue: 'dQw4w9WgXcQ' }),
            description: fields.text({ label: 'Descriere', multiline: true }),
            ctaLabel: fields.text({ label: 'Text buton', defaultValue: 'Află mai multe' }),
            ctaHref: fields.text({ label: 'Link buton', defaultValue: '/contact' }),
          },
          { label: 'Teaser' }
        ),

        studiiDeCaz: fields.object(
          {
            label: fields.text({ label: 'Etichetă secțiune', defaultValue: 'STUDII DE CAZ' }),
            description: fields.text({ label: 'Descriere', multiline: true }),
            items: fields.array(
              fields.object({
                title: fields.text({ label: 'Titlu' }),
                description: fields.text({ label: 'Descriere', multiline: true }),
                image: fields.image({
                  label: 'Imagine',
                  directory: 'public/images/studii-de-caz',
                  publicPath: '/images/studii-de-caz/',
                }),
                imageAlt: fields.text({ label: 'Text alternativ imagine' }),
                ctaLabel: fields.text({ label: 'Text buton', defaultValue: 'Află mai multe' }),
                href: fields.text({ label: 'Link', defaultValue: '/contact' }),
              }),
              {
                label: 'Studii de caz',
                itemLabel: (props) => props.fields.title.value || 'Studiu de caz',
              }
            ),
          },
          { label: 'Studii de caz' }
        ),

        ctaBanner: fields.object(
          {
            image: fields.image({
              label: 'Imagine fundal',
              directory: 'public/images/cta-banner',
              publicPath: '/images/cta-banner/',
            }),
            imageAlt: fields.text({ label: 'Text alternativ imagine' }),
            text: fields.text({ label: 'Text CTA', multiline: true, defaultValue: 'ZI-NE CARE-I TREABA' }),
            href: fields.text({ label: 'Link', defaultValue: '/contact' }),
          },
          { label: 'CTA Banner' }
        ),
      },
    }),
  },
});