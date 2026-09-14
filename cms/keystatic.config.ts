// The Keystatic config is shared with the static site — the single source of
// truth is frontend/keystatic.config.ts (GitHub storage, doruletzz/narro).
// Re-export it here so the astro integration in this app picks it up.
export { default } from '../frontend/keystatic.config';
