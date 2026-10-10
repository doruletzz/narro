/**
 * scripts/cms-to-frontend.mjs
 * 
 * Synchronizes content bidirectionally between frontend and CMS directories.
 * 
 * 1. Pulls latest changes from Git.
 * 2. Copies frontend/src/content/ to cms/src/content/.
 * 3. Copies cms/src/content/ back to frontend/src/content/ to ensure complete synchronization.
 * 
 * Usage: npm run cms:sync
 */

import { execSync } from 'child_process';
import { resolve, join } from 'path';
import fs from 'fs/promises';

const ROOT = resolve(process.cwd());

// Attempt to pull the latest content from the remote repo.
try {
  console.log('⏳ Pulling latest content from remote...');
  execSync('git pull origin main --no-rebase --ff-only', {
    cwd: ROOT,
    stdio: 'pipe',  // quiet on success
  });
  console.log('✅ Repo is up to date.');
} catch (err) {
  console.log('ℹ️  No remote changes to pull (using local files).');
}

const frontendContentDir = join(ROOT, 'frontend', 'src', 'content');
const cmsContentDir = join(ROOT, 'cms', 'src', 'content');

// Validate that the frontend content directory exists
try {
  const stat = await fs.stat(frontendContentDir);
  if (!stat.isDirectory()) {
    throw new Error();
  }
} catch {
  console.error('❌ frontend/src/content/ does not exist.');
  process.exit(1);
}

// Ensure CMS content directory exists
await fs.mkdir(cmsContentDir, { recursive: true });

// Step 1: Copy frontend -> CMS
try {
  console.log('⏳ Copying frontend/src/content/ to cms/src/content/...');
  await fs.cp(frontendContentDir, cmsContentDir, { recursive: true });
  console.log('✅ Content successfully copied to CMS directory.');
} catch (err) {
  console.error('❌ Failed to copy content to CMS:', err.message);
  process.exit(1);
}

// Step 2: Copy CMS -> frontend
try {
  console.log('⏳ Copying cms/src/content/ to frontend/src/content/...');
  await fs.cp(cmsContentDir, frontendContentDir, { recursive: true });
  console.log('✅ Content successfully copied back to frontend directory.');
} catch (err) {
  console.error('❌ Failed to copy content to frontend:', err.message);
  process.exit(1);
}

console.log('\n✨ Synchronization complete. Ready for build!\n');