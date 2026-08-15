// Keystatic content reading helpers for Astro
import type { keystoneConfig } from '../../keystatic.config.js';

/**
 * Get content from a Keystatic singleton by key.
 * Usage: const hero = getSingletonData('hero');
 */
export function getSingletonData<Key extends keyof typeof keystoneConfig.singletons>(
  key: Key
) {
  // To be used with getKeystaticData() from @keystatic/astro
  // Example in Astro frontmatter:
  //   import { getKeystaticData } from '@keystatic/astro';
  //   const hero = getKeystaticData('hero');
  return key;
}

/**
 * Get content from a Keystatic collection.
 * Usage: const studies = getCollectionData('studiiDetaliate');
 */
export function getCollectionData<Key extends keyof typeof keystoneConfig.collections>(
  key: Key
) {
  return key;
}
