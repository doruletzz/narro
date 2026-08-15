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
- [x] Navigation structure from Figma (8 links)
- [x] Mobile hamburger menu with toggle animation
- [x] Logo (text-based, from Figma)
- [x] Responsive navigation links with hover states
- [x] Desktop contact info (phone, email) + social icons
- [x] Sticky header with z-50
- [x] Keyboard-accessible mobile menu

### Task 1.2: Footer
- [x] Build Footer component (desktop + mobile)
- [x] Footer links, contact info, social icons
- [x] Copyright line with dynamic year
- [x] Responsive 3-column layout
- [x] Purple bg matching header

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

### Task 2.1: Hero / Landing Page
- **Figma frames:** `Hero Landing Page` (Desktop), `Hero Landing Page` variants, `"Hero" Wireframe Mobile`
- [ ] Create `src/pages/index.astro`
- [ ] Build hero section — headline, subheadline, CTA button(s)
- [ ] Implement any hero background (image, gradient, or illustration)
- [ ] Extract all content into Keystatic schema (`src/content/schemas/hero.ts`)
- [ ] Ensure responsive layout (desktop → mobile)
- [ ] Match spacing, typography, and colors from Figma exactly

### Task 2.2: Servicii (Services) Page
- **Figma frames:** `Servicii Page`, `"Servicii" Wireframe Desktop`, `"Servicii" Wireframe Mobile`
- [ ] Create `src/pages/servicii.astro`
- [ ] Build services grid / listing section
- [ ] Add service cards with icons, titles, descriptions
- [ ] Extract content into Keystatic schema (`src/content/schemas/servicii.ts`)
- [ ] Ensure responsive layout (desktop → mobile)

### Task 2.3: Studii de Caz (Case Studies) — List Page
- **Figma frames:** `Studii de Caz Page`, `"Studii de caz" Wireframe Desktop`, `"Studii de caz" Wireframe Mobile`
- [ ] Create `src/pages/studii-de-caz.astro`
- [ ] Build case studies grid/list
- [ ] Add case study cards (image, title, brief description, link)
- [ ] Link to individual case study detail pages
- [ ] Extract content into Keystatic schema (`src/content/schemas/studii-de-caz.ts`)
- [ ] Ensure responsive layout (desktop → mobile)

### Task 2.4: Studiu de Caz Detaliat — Individual Case Study Page
- **Figma frames:** `Studiu de Caz Page`, `"Studiu de caz detaliat" Wireframe Desktop`, `"Studiu de caz detaliat" Wireframe Mobile`
- [ ] Create `src/pages/studiu-de-caz/[slug].astro` (dynamic route)
- [ ] Build detailed case study layout — hero image, challenge, solution, results
- [ ] Support rich text content blocks (text, images, stats)
- [ ] Extract content into Keystatic schema (`src/content/schemas/studiu-detaliat.ts`)
- [ ] Ensure responsive layout (desktop → mobile)
- [ ] Add navigation back to list page

### Task 2.5: Program Social Page
- **Figma frames:** `Program Social Page` (ID: `216:2024`) on Page 2 — Desktop (1728×2960)
  - Wireframes also available: `"Program Social" Wireframe Desktop` (ID: `7:1079`), `"Program Social" Wireframe Mobile` (ID: `7:1135`)
- [ ] Create `src/pages/program-social.astro`
- [ ] Build program description section
- [ ] Add program details, benefits, or features
- [ ] Include CTA section with "APLICA ACUM" heading (Bristol, 48px, `#ff99d8`, letter-spacing 4px)
- [ ] Implement purple header bar (#2200d8) with logo, navigation, and contact info
- [ ] Add social media links (@narro.co, narro.co, narrobranding)
- [ ] Add footer with Politique Cookies, Confidentialitate, and copyright
- [ ] Extract content into Keystatic schema (`src/content/schemas/program-social.ts`)
- [ ] Ensure responsive layout (desktop → mobile)

### Task 2.6: Contact Page
- **Figma frames:** `Contact Page` (ID: `216:625`) on Page 2 — Desktop (1728×1823)
  - Wireframes also available: `"Contact" Wireframe Desktop` (ID: `7:1336`), `"Contact" Wireframe Mobile` (ID: `7:1400`)
- [ ] Create `src/pages/contact.astro`
- [ ] Build purple header bar (#2200d8) with logo, navigation, and contact info
  - Navigation: LINKURI, DESPRE, ACASA, PROGRAM SOCIAL, SERVICII, STORY TIME, PORTOFOLIU, CONTACT
  - Phone: +40 729 729 695 | Email: contact@narro.co
  - Social: @narro.co, narro.co, narrobranding (Instagram, Facebook, TikTok icons)
- [ ] Build main CTA section with "DA-NE UN BEEP" heading (Bristol, 48px, `#ff99d8`, letter-spacing 4px)
- [ ] Build contact form (name, email, message, etc.) — two-column layout in Frame 41
- [ ] Add footer with "Politica Cookies", "Confidentialitate", and "2026© NARRO BRANDING SRL" copyright
- [ ] Extract form labels and contact info into Keystatic schema (`src/content/schemas/contact.ts`)
- [ ] Form validation (client-side)
- [ ] Ensure responsive layout (desktop → mobile)

### Task 2.7: Story Time Page
- **Figma frames:** `"Story Time" Wireframe Desktop`, `"Story Time" Wireframe Mobile`
- [ ] Create `src/pages/story-time.astro`
- [ ] Build Story Time layout (content blocks, images, timeline/flow)
- [ ] Extract content into Keystatic schema (`src/content/schemas/story-time.ts`)
- [ ] Ensure responsive layout (desktop → mobile)

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

### Task 4.3: Accessibility
- [ ] Add proper ARIA labels and roles
- [ ] Ensure keyboard navigation works
- [ ] Verify contrast ratios match design
- [ ] Test focus states

### Task 4.4: SEO
- [ ] Add meta tags per page
- [ ] Add Open Graph tags
- [ ] Add structured data if needed
- [ ] Verify sitemap and robots.txt

### Task 4.5: Build & Deploy Prep
- [ ] Verify `astro build` runs cleanly
- [ ] Test production build output
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

## 🔄 Workflow Notes

- Each task references the Figma frames by name and ID for easy lookup
- Use `figma_get_implementation_context` on each frame to get detailed specs before coding
- Use `figma_render_nodes` to generate screenshots for visual comparison
- Content should always flow through Keystatic — avoid hardcoded text in components
- Start with Task 0.1 and work sequentially — each phase depends on the previous one
