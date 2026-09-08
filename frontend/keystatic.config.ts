import { config, fields, singleton } from '@keystatic/core';

 
export const servicii = singleton({
  label: 'Servicii',
  path: 'src/content/servicii/index',
  format: { data: 'yaml' },
  schema: {
    cele3Directii: fields.object(
      {
        label: fields.text({ label: 'Titlu secțiune', defaultValue: 'CELE 3 DIRECTII' }),
        cards: fields.array(
          fields.object({
            title: fields.text({ label: 'Titlu' }),
            description: fields.text({ label: 'Descriere', multiline: true }),
            image: fields.image({
              label: 'Imagine',
              directory: 'public',
              publicPath: '/',
            }),
            imageAlt: fields.text({ label: 'Text alternativ imagine' }),
          }),
          {
            label: 'Carduri (exact 3)',
            itemLabel: (props) => props.fields.title.value || 'Card nou',
            validation: { length: { min: 3, max: 3 } },
          }
        ),
      },
      { label: 'Cele 3 direcții' }
    ),
    oferte: fields.object(
      {
        label: fields.text({ label: 'Titlu secțiune', defaultValue: 'OFERTE SI OFERTE' }),
        items: fields.array(
          fields.object({
            title: fields.text({ label: 'Titlu' }),
            paragraphs: fields.array(fields.text({ label: 'Paragraf', multiline: true }), {
              label: 'Paragrafe',
              itemLabel: (props) => (props.value || '').slice(0, 50) || 'Paragraf nou',
            }),
            image: fields.image({
              label: 'Imagine',
              directory: 'public',
              publicPath: '/',
            }),
            ctaLabel: fields.text({ label: 'Text buton', defaultValue: 'Afla mai multe' }),
            ctaHref: fields.text({ label: 'Link buton', defaultValue: '/contact' }),
          }),
          {
            label: 'Oferte',
            itemLabel: (props) => props.fields.title.value || 'Ofertă nouă',
          }
        ),
      },
      { label: 'Oferte' }
    ),
  },
});
 
export const studiiDeCazPage = singleton({
  label: 'Studii de Caz (pagină)',
  path: 'src/content/studii-de-caz/index',
  format: { data: 'yaml' },
  schema: {
    label: fields.text({ label: 'Titlu secțiune', defaultValue: 'STUDII DE CAZ' }),
    items: fields.array(
      fields.object({
        title: fields.text({ label: 'Titlu' }),
        tag: fields.text({ label: 'Etichetă suprapusă pe imagine' }),
        image: fields.image({
          label: 'Imagine',
          directory: 'public',
          publicPath: '/',
        }),
        imageAlt: fields.text({ label: 'Text alternativ imagine' }),
      }),
      {
        label: 'Studii de caz',
        itemLabel: (props) => props.fields.title.value || 'Studiu de caz nou',
      }
    ),
  },
});

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

    contact: singleton({
      label: 'Contact',
      path: 'src/content/contact/index',
      format: { data: 'yaml' },
      schema: {
        title: fields.text({ label: 'Titlu pagină', defaultValue: 'Contact — Narro' }),
        description: fields.text({
          label: 'Meta descriere',
          multiline: true,
          defaultValue: 'Contactează-ne pentru proiecte de branding, design și comunicare vizuală. Da-ne un beep!',
        }),
        heading: fields.text({ label: 'Titlu secțiune', defaultValue: 'DA-NE UN BEEP' }),
        intro: fields.text({
          label: 'Text introducere',
          multiline: true,
          defaultValue: 'Lorem ipsum dolor sit amet consectetur. Ut adipiscing risus mi quis magna etiam sem nunc. Magnis volutpat amet diam natoque nunc mattis amet bibendum risus.',
        }),
        form: fields.object(
          {
            submitLabel: fields.text({ label: 'Text buton', defaultValue: 'Trimite' }),
            fields: fields.array(
              fields.object({
                id: fields.text({
                  label: 'ID / name (ex: nume, email)',
                  description: 'Folosit pentru id și name-ul elementului HTML',
                }),
                label: fields.text({
                  label: 'Etichetă',
                  description: 'Folosită ca placeholder și text vizibil pentru select',
                }),
                type: fields.select({
                  label: 'Tip câmp',
                  options: [
                    { label: 'Input', value: 'input' },
                    { label: 'Select', value: 'select' },
                    { label: 'Textarea', value: 'textarea' },
                  ],
                  defaultValue: 'input',
                }),
                inputType: fields.select({
                  label: 'Tip input (pentru câmpuri input)',
                  options: [
                    { label: 'text', value: 'text' },
                    { label: 'email', value: 'email' },
                    { label: 'number', value: 'number' },
                    { label: 'tel', value: 'tel' },
                    { label: 'url', value: 'url' },
                    { label: 'date', value: 'date' },
                  ],
                  defaultValue: 'text',
                }),
                required: fields.checkbox({ label: 'Obligatoriu', defaultValue: false }),
                options: fields.array(
                  fields.object({
                    label: fields.text({ label: 'Text opțiune' }),
                    value: fields.text({ label: 'Valoare' }),
                  }),
                  {
                    label: 'Opțiuni (pentru select)',
                    itemLabel: (props) => props.fields.label.value || 'Opțiune',
                  }
                ),
              }),
              {
                label: 'Câmpuri formular',
                itemLabel: (props) => props.fields.label.value || 'Câmp nou',
              }
            ),
          },
          { label: 'Formular' }
        ),
        image: fields.url({
          label: 'Imagine (URL)',
          defaultValue: 'https://images.unsplash.com/photo-1558618666-fcd25c85f32e?w=700&q=80',
        }),
        imageAlt: fields.text({ label: 'Text alternativ imagine', defaultValue: 'Contact — Da-ne un beep' }),
      },
    }),
    servicii,
    studiiDeCazPage
  },
  
});