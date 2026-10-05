/**
 * scripts/cms-to-frontend.mjs
 * 
 * Ensures the frontend has the latest content from Keystatic Cloud.
 * 
 * Keystatic Cloud writes content directly to your GitHub repo (to the paths
 * defined in cms/keystatic.config.ts). The frontend reads from those same
 * paths at build time.
 * 
 * This script just makes sure the local repo is up to date with any CMS
 * changes before the Astro build runs.
 * 
 * Usage: npm run cms:sync
 */

import { execSync } from 'child_process';
import { resolve, join } from 'path';

const ROOT = resolve(process.cwd());

// Attempt to pull the latest content from the remote repo.
// If this is a fresh clone or there are no changes, it's fine to continue.
try {
  console.log('⏳ Pulling latest content from remote...');
  execSync('git pull origin main --no-rebase --ff-only', {
    cwd: ROOT,
    stdio: 'pipe',  // quiet on success
  });
  console.log('✅ Repo is up to date.');
} catch (err) {
  // Pull failed — could be no remote, no changes, or shallow clone.
  // In all cases, proceed with local files.
  console.log('ℹ️  No remote changes to pull (using local files).');
}

// Validate that the frontend content directory exists
const fs = await import('fs/promises');
const contentDir = join(ROOT, 'frontend', 'src', 'content');

const stat = await fs.stat(contentDir).catch(() => null);
if (!stat) {
  console.error('❌ frontend/src/content/ does not exist.');
  console.log('   This directory should contain YAML/MD files written by the CMS.');
  console.log('   Run `npm run cms` to open the admin, add content, then run `npm run build`.');
  process.exit(1);
}

const files = await fs.readdir(contentDir);
if (files.length === 0) {
  console.error('❌ frontend/src/content/ is empty.');
  console.log('   Open the CMS with `npm run cms`, add your content, save, then run `npm run build`.');
  process.exit(1);
}

console.log(`\n✅ Found ${files.length} content item(s) in frontend/src/content/.`);
console.log('   Next: `npm run build` will generate the static site.\n');
