# Deep Kumar Sadhukhan — Portfolio

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · framer-motion (LazyMotion) · next-themes · react-icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Edit content

**All text lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).** Components only read from it.

| What | Where in `portfolio.ts` |
|---|---|
| Name, tagline, email, socials, photo, resume path | `profile` |
| SEO title, description, keywords | `seo` |
| About paragraphs + stat counters | `about` |
| Skills (Simple Icons `slug`, or `icon` for concepts) | `skillGroups` |
| M.Tech thesis card + three-tier diagram | `thesis` |
| Projects (category, impact line, bullets, links) | `projects` |
| Education timeline | `education` |
| Teaching / Research / Labs chips | `interests` |
| Section headings & page intros | `sections`, `pages` |
| Hobbies — adding any enables `/hobbies` in the nav | `hobbies` |

Files:

- `public/assets/profile.jpg` — hero photo
- `public/assets/resume.pdf` — "Download resume" button (**add this file**)
- `public/logos/ju.png`, `public/logos/ciem.png` — institution logos; an initials badge is shown until they exist (restart `npm run dev` / rebuild after adding)

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com → **Add New… → Project** → import the repo → **Deploy** (defaults are correct).
3. Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.com`) if you use a custom domain; otherwise the Vercel production URL is used automatically for the sitemap, robots and Open Graph URLs.
