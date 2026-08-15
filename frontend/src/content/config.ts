// Re-export Keystatic content types for use in Astro pages
// This file provides typed access to CMS content

// Import types from the Keystatic config
// Use getKeystaticData() from @keystatic/astro to read content in Astro pages

// Type-safe content reading helpers
export function getSingletonContent<T>(content: Record<string, T>) {
  return content as T;
}
