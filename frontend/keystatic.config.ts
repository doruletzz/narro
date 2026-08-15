// Keystatic configuration
// https://keystatic.com/docs
import { config } from '@keystatic/core';
import { hero } from './src/content/schemas/hero.js';
import { servicii } from './src/content/schemas/servicii.js';
import { studiiDeCaz } from './src/content/schemas/studii-de-caz.js';
import { studiiDetaliate } from './src/content/schemas/studiu-detaliat.js';
import { programSocial } from './src/content/schemas/program-social.js';
import { contact } from './src/content/schemas/contact.js';
import { storyTime } from './src/content/schemas/story-time.js';
import { navigation } from './src/content/schemas/navigation.js';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Narro CMS',
    },
  },
  singletons: {
    hero,
    servicii,
    studiiDeCaz,
    programSocial,
    contact,
    storyTime,
    navigation,
  },
  collections: {
    studiiDetaliate,
  },
});
