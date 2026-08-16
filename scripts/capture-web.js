#!/usr/bin/env node
/**
 * Narro — Web Implementation Capture Script
 * 
 * Launches a headless Chromium instance, navigates to each local page,
 * and saves screenshots for cross-checking against Figma screenshots.
 * 
 * Usage:
 *   node scripts/capture-web.js             # Capture all pages
 *   node scripts/capture-web.js index        # Capture a single page
 *   node scripts/capture-web.js --full       # Full page captures (long pages)
 * 
 * Make sure `astro dev` is running at http://localhost:4321 before running.
 * 
 * Run from project root: cd /Users/dorletz/projects/narro && node scripts/capture-web.js
 */

import pkg from '../frontend/node_modules/playwright/index.js';
const { chromium } = pkg;
import { resolve, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

// ─── Config ────────────────────────────────────────────────────────────────
const BASE_URL = 'http://localhost:4321';
const VIEWPORT = { width: 1440, height: 900 };
const OUTPUT_DIR = resolve(process.cwd(), 'frontend/screenshots');
const FIGMA_SCREENSHOTS_DIR = resolve(process.cwd(), 'figma-screenshots');
const FULL_PAGE = process.argv.includes('--full') || process.argv.includes('-f');
const TARGET_PAGE = process.argv[2]; // optional: page slug (e.g. "index", "servicii")

// All pages to capture
const PAGES = [
  { slug: '/', label: 'index', description: 'Hero / Landing' },
  { slug: '/servicii', label: 'servicii', description: 'Services' },
  { slug: '/studii-de-caz', label: 'studii-de-caz', description: 'Case Studies List' },
  { slug: '/studiu-de-caz/startupx', label: 'studiu-de-caz-startupx', description: 'Case Study Detail (StartupX)' },
  { slug: '/studiu-de-caz/brandy', label: 'studiu-de-caz-brandy', description: 'Case Study Detail (Brandy)' },
  { slug: '/program-social', label: 'program-social', description: 'Social Program' },
  { slug: '/contact', label: 'contact', description: 'Contact' },
  { slug: '/story-time', label: 'story-time', description: 'Story Time' },
];

// ─── Helpers ───────────────────────────────────────────────────────────────
function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function slugToFileName(slug) {
  return slug.replace(/\//g, '-').replace(/^\-+/, '').replace(/\?.*$/, '') || 'index';
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── Main ──────────────────────────────────────────────────────────────────
(async () => {
  console.log('🚀 Narro Web Capture — Starting...\n');
  console.log(`   Viewport: ${VIEWPORT.width}x${VIEWPORT.height}`);
  console.log(`   Web output:   ${OUTPUT_DIR}`);
  console.log(`   Figma refs:   ${FIGMA_SCREENSHOTS_DIR}/`);
  console.log(`   Full page:    ${FULL_PAGE}`);
  console.log(`   Pages:        ${TARGET_PAGE ? TARGET_PAGE : 'all (' + PAGES.length + ')'}`);
  console.log('');

  ensureDir(OUTPUT_DIR);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: 'ro-RO',
  });
  const page = await context.newPage();

  // Block favicon requests for speed
  page.on('request', (req) => {
    if (req.resourceType() === 'image' && req.url().includes('favicon')) {
      req.abort();
    }
  });

  let successCount = 0;
  let failCount = 0;

  // Filter pages if a specific slug was requested
  const pagesToCapture = TARGET_PAGE
    ? PAGES.filter((p) => p.label === TARGET_PAGE || p.slug === '/' + TARGET_PAGE)
    : PAGES;

  if (pagesToCapture.length === 0 && TARGET_PAGE) {
    console.error(`❌ No pages found matching "${TARGET_PAGE}". Available: ${PAGES.map(p => p.label).join(', ')}`);
    await browser.close();
    process.exit(1);
  }

  for (const pageInfo of pagesToCapture) {
    const url = `${BASE_URL}${pageInfo.slug}`;
    const fileName = `${pageInfo.label}.png`;
    const webFilePath = join(OUTPUT_DIR, fileName);
    const figmaFileName = `gUoTx1XuP2c6onlGeREnkt_${slugToFileName(pageInfo.slug)}.png`;
    const figmaFilePath = join(FIGMA_SCREENSHOTS_DIR, figmaFileName);
    const figmaExists = existsSync(figmaFilePath);

    console.log(`📸 Capturing: ${pageInfo.description}`);
    console.log(`   URL:            ${url}`);
    console.log(`   Web output:     ${join('frontend/screenshots', fileName)}`);
    if (figmaExists) {
      console.log(`   Figma compare:  ${figmaFileName}`);
    } else {
      console.log(`   Figma compare:  ⚠️  ${figmaFileName} not found in figma-screenshots/`);
    }
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      
      // Small delay to ensure animations settle
      await delay(500);

      await page.screenshot({
        path: webFilePath,
        fullPage: FULL_PAGE,
        type: 'png',
      });

      console.log(`   ✅ Saved: frontend/screenshots/${fileName}`);
      successCount++;
    } catch (err) {
      console.log(`   ⚠️  Failed: ${err.message}`);
      failCount++;
    }
    console.log('');

    // Small cooldown between captures
    await delay(200);
  }

  await browser.close();

  // Summary
  console.log('═══════════════════════════════════════════════════════════');
  console.log('📊 Capture Summary');
  console.log(`   Pages captured: ${successCount}`);
  console.log(`   Failed:         ${failCount}`);
  console.log(`   Web output:     ${OUTPUT_DIR}/`);
  console.log(`   Figma refs:     ${FIGMA_SCREENSHOTS_DIR}/`);
  console.log('');
  if (successCount > 0) {
    console.log('💡 Cross-check: Compare frontend/screenshots/*.png with figma-screenshots/*.png');
  }
  console.log('═══════════════════════════════════════════════════════════');

  process.exit(failCount > 0 ? 1 : 0);
})().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(2);
});
