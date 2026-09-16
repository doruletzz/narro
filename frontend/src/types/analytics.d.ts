// Google Tag Manager / Consent Mode globals (see src/components/analytics/Gtm.astro)
interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
