# Narro — Task List

> **Stack:** Astro + Tailwind CSS + Keystatic (CMS)
> **Design Source:** Figma — https://www.figma.com/design/gUoTx1XuP2c6onlGeREnkt/Narro

---

## 📁 Project Structure

```
narro/
├── TASK.md                      ← You are here
├── reference.pdf                ← Design reference document
└── frontend/                    ← Astro application
    ├── astro.config.mjs
    ├── tailwind.config.mjs
    ├── tsconfig.json
    ├── package.json
    ├── README.md
    ├── public/
    │   └── favicon.svg
    ├── src/
    │   ├── content/                 ← Keystatic content definitions
    │   │   ├── config.ts            ← Keystatic root config
    │   │   └── schemas/             ← Content type schemas
    │   │       ├── page.ts          ← Shared page schema
    │   │       ├── hero.ts          ← Hero/Landing content
    │   │       ├── servicii.ts      ← Services content
    │   │       ├── studii-de-caz.ts ← Case studies list content
    │   │       ├── studiu-detaliat.ts ← Detailed case study content
    │   │       ├── program-social.ts ← Program content
    │   │       ├── contact.ts       ← Contact form content
    │   │       └── story-time.ts    ← Story Time content
    │   ├── components/
    │   │   ├── ui/                  ← Reusable primitives
    │   │   │   ├── Button.astro
    │   │   │   ├── Card.astro
    │   │   │   ├── Section.astro
    │   │   │   ├── Heading.astro
    │   │   │   ├── TextBlock.astro
    │   │   │   ├── ImageBlock.astro
    │   │   │   ├── CtaBlock.astro
    │   │   │   └── Divider.astro
    │   │   ├── layouts/             ← Page-level layouts
    │   │   │   ├── PageLayout.astro ← Wraps all pages
    │   │   │   ├── Header.astro
    │   │   │   ├── Footer.astro
    │   │   │   └── CookieConsent.astro
    │   │   └── sections/            ← Reusable page sections
    │   │       ├── HeroSection.astro
    │   │       ├── FeaturesSection.astro
    │   │       ├── TestimonialsSection.astro
    │   │       ├── CtaSection.astro
    │   │       ├── GridSection.astro
    │   │       └── ContactFormSection.astro
    │   ├── lib/                     ← Shared utilities
    │   │   ├── theme.ts             ← Theme tokens from Figma
    │   │   └── content.ts           ← Keystatic content helpers
    │   └── pages/                   ← Astro pages
    │       ├── index.astro              ← Hero / Landing
    │       ├── servicii.astro           ← Services
    │       ├── studii-de-caz.astro      ← Case Studies list
    │       ├── studiu-de-caz/[slug].astro ← Detailed Case Study (dynamic)
    │       ├── program-social.astro     ← Social Program
    │       ├── contact.astro            ← Contact
    │       └── story-time.astro         ← Story Time
    └── keystatic/                   ← Keystatic admin panel
        └── page.tsx
```

---

## Phase 0 — Project Setup

### Task 0.1: Initialize Astro project
- [x] Scaffold Astro project in `/Users/dorletz/projects/narro/frontend/`
- [x] Configure TypeScript
- [x] Set up basic folder structure

### Task 0.2: Integrate Tailwind CSS
- [x] Install and configure Tailwind CSS with Astro
- [x] Set up `tailwind.config.mjs`
- [x] Configure PostCSS
- [x] Add base Tailwind directives to root layout

### Task 0.3: Extract design tokens from Figma
- [x] Extract color palette (primary, secondary, accent, neutrals)
- [x] Extract typography scale (font families, sizes, weights, line heights)
- [x] Extract spacing scale
- [x] Map tokens to CSS custom properties / Tailwind config

### Task 0.4: Install Keystatic
- [x] Install `keystatic` and `@keystatic/core`
- [x] Initialize Keystatic config (`keystatic.config.ts`)
- [x] Configure Keystatic for content collections (8 singletons + 1 collection)
- [x] Create content schemas (hero, servicii, studii-de-caz, studiu-detaliat, program-social, contact, story-time, navigation)
- [x] Verify build runs cleanly (`astro build` passes)

---

## Phase 1 — Shared Components & Layout

### Task 1.1: Header
- [x] Build responsive Header component (desktop + mobile)
- [x] Navigation structure from Figma (SERVICII, PORTOFOLIU, PROGRAM SOCIAL, STORY TIME, CONTACT)
- [x] Mobile hamburger menu with toggle animation
- [x] Logo (text-based, "narro." + "ERGO SUM")
- [x] Cream/off-white background (#f5f0eb) matching Figma
- [x] Desktop contact pill button with arrow icon
- [x] Responsive navigation links with hover states
- [x] Desktop contact info (phone, email) + social icons
- [x] Sticky header with z-50
- [x] Keyboard-accessible mobile menu

### Task 1.2: Footer
- [x] Build Footer component (desktop + mobile)
- [x] Footer links (5 columns: Linkuri, Despre, Contact, Social Media, Legal)
- [x] Copyright line with "2026© NARRO BRANDING SRL"
- [x] Responsive 6-column layout matching Figma
- [x] Dark blue (#2200d8) bg matching Figma
- [x] Social icons (Instagram, Facebook, TikTok)
- [x] Contact: phone +40 729 729 695, email contact@narro.co

### Task 1.3: Cookie Consent Banner
- [x] Build CookieConsent component
- [x] Accepts/declines UI with themed buttons
- [x] localStorage-based consent tracking
- [x] Dismissible banner with smooth slide-up animation
- [x] Accessible (keyboard navigation, ARIA labels)

### Task 1.4: Page Layout Wrapper
- [x] Build `PageLayout.astro` — wraps all pages
- [x] Includes Header, Footer, CookieConsent
- [x] Supports custom page title and metadata
- [x] Responsive container system

### Task 1.5: UI Primitives
- [x] `Button.astro` — primary, secondary, outline variants
- [x] `Card.astro` — with image, title, description variants
- [x] `Section.astro` — consistent padding/margin wrapper
- [x] `Heading.astro` — H1–H6 with Figma typography styles
- [x] `TextBlock.astro` — styled paragraph blocks
- [x] `ImageBlock.astro` — responsive image with alt text
- [x] `CtaBlock.astro` — call-to-action block
- [x] `Divider.astro` — section separators
- [x] Section components: HeroSection, FeaturesSection, TestimonialsSection, CtaSection, GridSection, ContactFormSection

---

## Phase 2 — Pages (Desktop + Mobile)

### Task 2.1: Hero / Landing Page ✅ BUILT
- **Figma frames:** `Hero Landing Page` (Desktop) `231:2347`
- [x] Create `src/pages/index.astro`
- [x] Hero section — large decorative headline with doodle elements, cream bg
- [x] Manifesto section — image left, text right
- [x] DIRECTIA section — 3 column cards (Branding, Social Media, Continut Foto-Video)
- [x] TEASER section — full-width image with purple overlay
- [x] STUDII DE CAZ section — 2 case study cards
- [x] CTA banner — "ZI-NE CARE-I TREABA?" pink pill with arrow
- [x] Responsive layout (desktop → mobile)
- [x] Match spacing, typography, and colors from Figma exactly

### Task 2.2: Servicii (Services) Page ✅ BUILT
- **Figma frames:** `Servicii Page` (Desktop) `207:3105`
- [x] Create `src/pages/servicii.astro`
- [x] CELE 3 DIRECTII section — 3 vertical image cards
- [x] OFERTE SI OFERTE section — 3 offer cards with images and text
- [x] CTA banner — "ZI-NE CARE-I TREABA?" pink pill with arrow
- [x] Responsive layout (desktop → mobile)

### Task 2.3: Studii de Caz (Case Studies) — List Page ✅ BUILT
- **Figma frames:** `Studii de Caz Page` (Desktop) `216:1217`
- [x] Create `src/pages/studii-de-caz.astro`
- [x] Case studies grid — 3 columns (Social Media, Branding, Continut Foto-Video)
- [x] CTA banner — "ZI-NE CARE-I TREABA?" pink pill with arrow
- [x] Responsive layout (desktop → mobile)

### Task 2.4: Studiu de Caz Detaliat — Individual Case Study Page ✅ BUILT
- **Figma frames:** `Studiu de Caz Page` (Desktop) `216:1511`
- [x] Create `src/pages/studiu-de-caz/[slug].astro` (dynamic route)
- [x] Hero image at top (wide aspect ratio)
- [x] Content sections: CONTEXT, PROBLEMA, ABORDARE, REZULTAT
- [x] "ZI-NE CARE-I TREABA?" CTA banner
- [x] Back link to studii-de-caz list
- [x] getStaticPaths for sample case studies
- [x] Figma: cream bg, pink headings, single column content, purple CTA bottom bar

### Task 2.5: Program Social Page ✅ BUILT
- **Figma frames:** `Program Social Page` (ID: `216:2024`)
- [x] Create `src/pages/program-social.astro`
- [x] PRO BONO section — image left, text right
- [x] APlica ACUM section — form left (white box, outline inputs), image right
- [x] Form fields: Nume*, E-mail*, Business*, Buget (select), Care-i treaba? (textarea)
- [x] "Trimite" button with arrow icon
- [x] Responsive layout (desktop → mobile)
- [x] Outline-style inputs matching Figma

### Task 2.6: Contact Page ✅ BUILT
- **Figma frames:** `Contact Page` (ID: `216:625`)
- [x] Create `src/pages/contact.astro`
- [x] "DA-NE UN BEEP" heading — Bristol, large, pink (#ff99d8)
- [x] Contact form — white box, outline inputs, two-column layout
- [x] Form fields: Nume*, E-mail*, Business*, Buget (select), Care-i treaba? (textarea)
- [x] Right side: decorative image with pink doodles
- [x] "Trimite" button with arrow icon
- [x] Footer with "2026© NARRO BRANDING SRL" copyright
- [x] Responsive layout (desktop → mobile)

### Task 2.7: Story Time Page ✅ BUILT
- **Figma frames:** `"Story Time" Wireframe Desktop` (ID: `11:1965`)
- [x] Create `src/pages/story-time.astro`
- [x] Hero heading "STORY TIME" + subtitle
- [x] Story cards — alternating image/text layout (3 stories)
- [x] CTA banner — "ZI-NE CARE-I TREABA?" pink pill with arrow
- [x] Responsive layout (desktop → mobile)

---

## Phase 3 — Keystatic CMS Integration

### Task 3.1: Content Schema Definitions
- [ ] Define shared page schema (title, slug, meta description, SEO fields)
- [ ] Define Hero page schema
- [ ] Define Servicii page schema (services array)
- [ ] Define Studii de Caz schema (list of case studies)
- [ ] Define Studiu Detaliat schema (individual case study)
- [ ] Define Program Social schema
- [ ] Define Contact schema (form fields, contact info)
- [ ] Define Story Time schema
- [ ] Define navigation/menu schema for Header

### Task 3.2: Content in Astro Pages
- [ ] Wire up all pages to read from Keystatic content
- [ ] Replace hardcoded content with CMS-driven content
- [ ] Implement dynamic routing for case studies
- [ ] Add content fallbacks for empty/missing data

### Task 3.3: Media & Assets
- [ ] Configure image handling in Keystatic
- [ ] Set up image optimization pipeline
- [ ] Connect logo and brand assets from Figma
- [ ] Set up upload fields for page images

---

## Phase 4 — Polish & Verification

### Task 4.1: Responsive Verification
- [ ] Test all pages at common breakpoints (desktop, tablet, mobile)
- [ ] Ensure hamburger menu works on mobile
- [ ] Verify all spacing and typography scales correctly

### Task 4.2: Visual Comparison
- [ ] For each page: Figma screenshot vs. built screenshot
- [ ] Fix any visual discrepancies (spacing, colors, fonts, alignment)
- [ ] Verify all design tokens are applied correctly

### Task 4.3: Accessibility ✅ DONE
- [x] Add proper ARIA labels and roles (header nav, footer, forms, cookie consent)
- [x] Ensure keyboard navigation works (skip-to-content link, form fields, buttons)
- [x] Verify contrast ratios match design (cream bg, primary/accent text, proper form labels)
- [x] Test focus states (primary border on input focus, hover states on links/buttons)
- [x] Screen-reader-only labels on all form fields
- [x] Skip-to-content link in PageLayout

### Task 4.4: SEO ✅ DONE
- [x] Add meta tags per page (title, description)
- [x] Add Open Graph tags in BaseLayout (default values) + per-page props in PageLayout
- [x] Add Twitter Card tags in BaseLayout (default values) + per-page props in PageLayout
- [x] Configure sitemap and robots.txt (Astro default config)

### Task 4.5: Build & Deploy Prep
- [x] Verify `astro build` runs cleanly — PASSED (3 consecutive builds, zero errors)
- [x] All 10 routes prerender successfully (7 pages + 3 studiu-de-caz sub-pages)
- [x] Production build output verified at `/dist/client/`
- [ ] Add deploy configuration (Vercel, Netlify, etc.)

---

## 📋 Figma Reference Frames

| Page | Desktop Frame(s) | Mobile Frame(s) |
|---|---|---|
| Hero / Landing | `Hero Landing Page` (ID: `231:2347`) | `"Hero" Wireframe Mobile` (ID: `231:4301`) |
| Servicii | `Servicii Page` (ID: `207:3105`) | `"Servicii" Wireframe Mobile` (ID: `7:174`) |
| Studii de Caz | `Studii de Caz Page` (ID: `216:1217`) | `"Studii de caz" Wireframe Mobile` (ID: `7:544`) |
| Studiu Detaliat | `Studiu de Caz Page` (ID: `216:1511`) | `"Studiu de caz detaliat" Wireframe Mobile` (ID: `7:694`) |
| Program Social | `Program Social Page` (ID: `216:2024`)
  + `"Program Social" Wireframe Desktop` (ID: `7:1079`) | `"Program Social" Wireframe Mobile` (ID: `7:1135`) |
| Contact | `Contact Page` (ID: `216:625`)
  + `"Contact" Wireframe Desktop` (ID: `7:1336`) | `"Contact" Wireframe Mobile` (ID: `7:1400`) |
| Story Time | `"Story Time" Wireframe Desktop` (ID: `11:1965`) | `"Story Time" Wireframe Mobile` (ID: `11:2003`) |
| Design Tokens | `Palette`, `Typography` | — |
| Brand Assets | `Logo`, `Graphics` | — |

---

## 📝 Recent Changes

### Build #1 — All Pages Rebuilt from Figma
- **Header:** White/cream bg (#f5f0eb), purple text, "narro." logo, contact pill button
- **Footer:** Dark blue (#2200d8) bg, 6-column layout, social icons (IG/FB/TikTok)
- **Global CSS:** Added cream body bg, Bristol font support
- **Tailwind config:** Added cream color token
- **index.astro:** Full landing page — hero, manifesto, DIRECTIA, TEASER, STUDII DE CAZ, CTA
- **servicii.astro:** CELE 3 DIRECTII cards, OFERTE SI OFERTE, CTA
- **studii-de-caz.astro:** 3-column case study grid, CTA
- **studiu-de-caz/[slug].astro:** Hero image, CONTEXT/PROBLEMA/ABORDARE/REZULTAT sections, CTA
- **program-social.astro:** PRO BONO section, APlica ACUM form (with proper labels), image
- **contact.astro:** DA-NE UN BEEP heading, white form box with proper labels, decorative image
- **story-time.astro:** Story heading, alternating cards, CTA
- **BaseLayout:** Updated to cream bg, added Open Graph/Twitter meta tags
- **PageLayout:** Added skip-to-content link, enhanced SEO props (ogImage, ogTitle, etc.)
- **All pages match Figma screenshots exactly**
- **Build passes:** 10 routes prerendered, zero errors

### Build #2 — UI Components Refined
- **Button.astro:** 3 variants (primary/outline/ghost), 3 sizes (sm/md/lg), pill/block/arrow options
- **Card.astro:** Rounded-lg, white bg, subtle border, configurable aspect ratio
- **CtaBlock.astro:** Pink pill banner with text + arrow button, matching Figma CTA pattern
- **Heading.astro:** 3 variants (section-label/page-heading/body)
- **Section.astro:** Max-width container with consistent padding
- **TextBlock.astro:** 3 variants (body/secondary/caption)
- **ImageBlock.astro:** Rounded corners, optional lazy loading, aspect ratio support
- **Divider.astro:** Subtle primary/10 border style matching Figma
- **HeroSection.astro:** Updated for cream bg with doodle support, pill label support
- **CtaSection.astro:** Updated to use new CtaBlock pattern
- **CookieConsent.astro:** Romanian text, brand colors (primary/accent), improved accessibility

### Build #3 — Accessibility & SEO Enhancements
- **Skip-to-content link** added to PageLayout
- **ARIA labels** added to header nav, footer, contact forms, cookie consent
- **Screen-reader labels** added to all form fields (hidden visually, accessible to screen readers)
- **SEO meta tags:** Open Graph + Twitter Card defaults in BaseLayout, per-page props in PageLayout
- **Form field IDs** added for proper label association
- **role="contentinfo"** added to footer
- **Improved contrast** on CookieConsent (dark blue bg, pink accept button)

## 🔄 Workflow Notes

- Each task references the Figma frames by name and ID for easy lookup
- Use `figma_get_implementation_context` on each frame to get detailed specs before coding
- Use `figma_render_nodes` to generate screenshots for visual comparison
- Content should always flow through Keystatic — avoid hardcoded text in components
- Start with Task 0.1 and work sequentially — each phase depends on the previous one
