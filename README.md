# Narro

Monorepo for the Narro website.

## Architecture

```
cms/                  ← Keystatic Cloud admin (your client edits content here via magic link)
frontend/             ← Astro static site (reads content at build time)
scripts/
  cms-to-frontend.mjs ← Syncs latest content from CMS before build
```

### How it works

1. **CMS** (`cms/`) runs with Keystatic Cloud storage. Your client accesses the admin UI, logs in with a magic link (no passwords, no GitHub tokens), and edits content.

2. **Keystatic Cloud** writes the edited content directly to your GitHub repo (to `frontend/src/content/`).

3. **Frontend** (`frontend/`) reads the YAML/MD files from the repo at build time and generates static HTML.

## Commands

```bash
# Open the CMS admin (Keystatic Cloud)
npm run cms

# Sync latest content from remote (pulls Git)
npm run cms:sync

# Build the static site (syncs content + builds)
npm run build

# Start frontend dev server
npm run dev
```

## Environment Variables

Copy `frontend/.env.example` to `frontend/.env`:

- `CMS_AUTH_TOKEN` — Access token for the CMS admin UI
- `KEYSTATIC_SECRET` — Random string for session cookies

No GitHub OAuth credentials needed — the frontend reads files at build time.
