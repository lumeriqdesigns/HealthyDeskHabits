# HealthyDeskHabits

Premium editorial publication for remote workers: health, technology and lifestyle.

## Current build

- Next.js + TypeScript + Tailwind CSS
- Editorial homepage hierarchy (Featured, Editors' picks, Categories, 10-Minute Fix, Latest)
- 28 SEO-targeted articles with sources and quick answers
- Named editors (Maya Chen, Jordan Reed, Samira Okonkwo) with author pages
- FAQ sections and FAQPage JSON-LD on key articles
- Full trust pages: About, Editorial policy, Health disclaimer, Privacy, Terms, Affiliate disclosure, Contact
- Article, BreadcrumbList, WebSite and CollectionPage JSON-LD
- Reading progress, table of contents, related articles
- Header/footer navigation covering all five categories and legal links

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content model

`lib/content.ts` holds authors, articles and categories. Article fields include `sources`, `faq`, `quickAnswer`, `featured`, `editorsPick` and `series`.

## Notes

Unsplash image URLs are used for editorial imagery. Wire the newsletter form to your email provider before launch. Replace the contact email domain if you use a different production inbox.

## Deploy on Vercel

1. Push this project so **package.json is at the repository root** (or set Root Directory in Vercel to the folder that contains package.json).
2. Framework Preset: Next.js
3. Build Command: `npm run build`
4. Output: default (Next.js)

If your GitHub repo has a nested folder like `healthydeskhabits/`, set **Settings → General → Root Directory** to `healthydeskhabits`.

The `@/*` path alias is defined in `tsconfig.json` and is required for the build.
