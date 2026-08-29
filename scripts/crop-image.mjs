#!/usr/bin/env node
/**
 * Crop a region out of a PNG (no Python/ImageMagick needed — uses Playwright Chromium).
 *
 * Usage:
 *   node scripts/crop-image.mjs <src.png> <x> <y> <w> <h> <out.png> [scale]
 *
 * Coordinates are in the source image's pixels. `scale` downsizes the output.
 * Example (from project root):
 *   node scripts/crop-image.mjs figma-screenshots/xxx.png 0 0 1728 1200 /tmp/hero.png
 */
import pkg from '../frontend/node_modules/playwright/index.js';
const { chromium } = pkg;
import { resolve } from 'path';
import { writeFileSync, unlinkSync } from 'fs';
import { fileURLToPath } from 'url';

const [src, x, y, w, h, out, scaleArg] = process.argv.slice(2);
if (!src || !x || !y || !w || !h || !out) {
  console.error('Usage: node scripts/crop-image.mjs <src.png> <x> <y> <w> <h> <out.png> [scale]');
  process.exit(1);
}
const scale = scaleArg ? Math.min(4, Math.max(0.01, Number(scaleArg))) : 1;
const sx = Number(x), sy = Number(y), sw = Number(w), sh = Number(h);

const srcPath = resolve(process.cwd(), src);
const outPath = resolve(process.cwd(), out);

// Wrap the image in a temp HTML page so Chromium renders it at natural size.
const htmlPath = `${srcPath}.crop-tmp.html`;
writeFileSync(
  htmlPath,
  `<html><head><style>html,body{margin:0;padding:0;background:#fff}</style></head><body><img src="${srcPath.replace(/\\/g, '/')}" style="display:block"></body></html>`
);

try {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: sw, height: sh } });
  if (scale !== 1) {
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: sw, height: sh, deviceScaleFactor: scale, mobile: false,
    });
  }
  await page.goto(`file://${htmlPath}`, { waitUntil: 'load' });
  await page.evaluate(
    ([xx, yy]) => window.scrollTo(xx, yy),
    [sx, sy]
  );
  await page.waitForTimeout(150);
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: sw, height: sh }, scale: 'css' });
  await browser.close();
  console.log(`saved ${outPath} (${Math.round(sw * scale)}x${Math.round(sh * scale)})`);
} finally {
  try { unlinkSync(htmlPath); } catch {}
}
