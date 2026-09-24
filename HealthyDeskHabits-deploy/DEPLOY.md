# Deploy HealthyDeskHabits to Vercel

## What’s in this folder

This is the full Next.js app. `package.json` is at the **root of this folder**.

```
HealthyDeskHabits-deploy/
  app/
  components/
  lib/
  public/
  package.json
  tsconfig.json
  next.config.ts
  ...
```

## Option A — Recommended: GitHub + Vercel

### 1. Put the code in GitHub

**If this folder becomes the whole repo** (simplest):

1. Create or open repo `HealthyDeskHabits` on GitHub.
2. Copy **everything inside** `HealthyDeskHabits-deploy` to the **root** of the repo  
   (so `package.json` is next to `.git`, not inside another folder).
3. Commit and push to `main`.

**If you keep a subfolder** named `healthydeskhabits` in the repo:

1. Put these files inside `healthydeskhabits/`.
2. In Vercel, set **Root Directory** to `healthydeskhabits`.

### 2. Import the project in Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New…** → **Project**.
2. Import `lumeriqdesigns/HealthyDeskHabits` (or your repo).
3. Settings:
   - **Framework Preset:** Next.js
   - **Root Directory:**
     - Leave **empty** if `package.json` is at the repo root
     - Or set to `healthydeskhabits` if the app is in that subfolder
   - **Build Command:** `npm run build` (default)
   - **Install Command:** `npm install` (default)
4. Click **Deploy**.

### 3. Confirm success

In the deployment log you should see:

```text
✓ Compiled successfully
✓ Generating static pages
```

Status should be **Ready**. Open the URL with **Visit**.

Homepage: `/`  
Example article: `/article/fix-neck-pain-working-laptop`  
Category: `/desk-health`

## Option B — Vercel CLI

```bash
cd HealthyDeskHabits-deploy
npm install
npm run build
npx vercel
```

Follow the prompts, then `npx vercel --prod` for production.

## Local test before deploy

```bash
cd HealthyDeskHabits-deploy
npm install
npm run dev
```

Open http://localhost:3000

## Common fixes

| Problem | Fix |
|--------|-----|
| `Module not found: @/...` | Root Directory wrong, or missing `paths` in `tsconfig.json` |
| `Expected ',', got 'faq'` | Use this folder’s `lib/content.ts` (syntax fixed) |
| Vercel **404 NOT_FOUND** | Build failed or Root Directory empty/wrong — check Deployments → latest log |
| Nested folder confusion | Prefer app at **repo root**; otherwise set Root Directory to that folder name |

## After go-live

- Point domain in Vercel → Project → Settings → Domains
- Update contact email in `app/contact/page.tsx` if needed
- Connect newsletter form to your email provider when ready
