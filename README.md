# Digital growth agency website (English + Arabic)

A bilingual marketing site for a Dubai digital growth studio that combines growth marketing, digital product development and AI automation. Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

> **Brand:** Viral Digital Labs / فايرال ديجيتال لابز. Name, contact email and WhatsApp number live in `src/config/site.ts` (environment variables override them). Logo files are in `public/brand/` (`logo.svg`, `logo-white.svg`, `logo-mark.svg`); the site renders the same mark inline from `src/components/brand-mark.tsx`.

## Quick start

```bash
npm install
cp .env.example .env.local   # optional; every value can stay empty
npm run dev                  # http://localhost:3000 → redirects to /en or /ar
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (type-checks and prerenders all 85 pages) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type check |
| `node scripts/smoke-test.mjs` | Browser smoke test (see the file header for setup) |

## Routes

All pages exist in both languages under `/en/...` and `/ar/...`. `/` redirects using the browser's `Accept-Language` (`src/proxy.ts`).

| Route | Page |
| --- | --- |
| `/{locale}` | Homepage (12 sections, including Why choose us, How we compare and How it works) |
| `/{locale}/services`, `/{locale}/services/{slug}` | Services index and 10 service pages |
| `/{locale}/industries`, `/{locale}/industries/{slug}` | Filterable directory and 20 industry pages |
| `/{locale}/work` | Concept projects (clearly labelled as concepts) |
| `/{locale}/about` | About us: story, mission and vision, team model, comparison and promises |
| `/{locale}/approach` | Principles, process, and what we will not do |
| `/{locale}/contact` | Enquiry form |
| `/{locale}/privacy`, `/{locale}/terms` | Legal **templates** (noindex until reviewed) |
| `/sitemap.xml`, `/robots.txt`, `/{locale}/opengraph-image` | Generated SEO files |

## Project structure

```
src/
  app/[locale]/        Pages; the root layout sets lang/dir, fonts, header and footer
  app/sitemap.ts       Sitemap with hreflang alternates for every page
  app/robots.ts        Blocks crawlers until NEXT_PUBLIC_SITE_URL is a real domain
  actions/enquiry.ts   Server action: validation, spam checks, rate limit, delivery
  components/          Shared UI; components/home/* are homepage sections
  config/site.ts       Brand, contact, social and analytics configuration
  content/             Typed content: services/*, industries/*, legal.ts, types.ts
  i18n/                Locale config and the English/Arabic UI dictionaries
  lib/                 SEO helpers, structured data, routes, enquiry schema
docs/                  Research, strategy and launch checklist
```

## Editing content

- **UI copy and homepage text:** `src/i18n/dictionaries/en.ts` and `ar.ts`. The Arabic file is typed against the English one, so a missing key fails the build.
- **Services:** one file per service in `src/content/services/`. Each has full `en` and `ar` copy, related services and industries.
- **Industries:** one file per industry in `src/content/industries/`. `tier: 1` puts an industry in the homepage explorer and footer; `motif` and `hue` drive its original SVG artwork.
- **Concept projects:** `work.projects` in the dictionaries. Replace them with real case studies when you have permission to publish them.

## Configuration

Business details live in `src/config/site.ts`; most can be set through environment variables (see `.env.example`). Anything left empty is **hidden**, never shown as a fake value:

- No email/phone → the contact block says details will be published at launch.
- WhatsApp: every WhatsApp button (floating button, hero, contact block, footer) opens a chat with `contact.whatsapp` and a prefilled greeting in the visitor's language.
- No `NEXT_PUBLIC_SITE_URL` → every page is `noindex` and `robots.txt` disallows crawling.
- No analytics ID → no tracking script loads.
- `contact.address` stays `undefined` until a verified, licensed address is confirmed; it then also appears in structured data.

## Enquiry form

The form validates in the browser for instant feedback and again on the server with Zod (`src/lib/enquiry-schema.ts`). Spam protection: a hidden honeypot field, a minimum fill time and a per-IP rate limit.

Delivery (`src/actions/enquiry.ts`), configure at least one:

1. **Webhook:** `ENQUIRY_WEBHOOK_URL` (optional `ENQUIRY_WEBHOOK_SECRET` sent as a Bearer token). Works with HubSpot, Zoho, Make, Zapier, n8n and similar.
2. **Email via Resend:** `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL`.

If nothing is configured, the visitor is told plainly that the enquiry was **not** sent. A success message only appears after a configured channel accepts the enquiry. For local testing, `ENQUIRY_DEV_LOG=true` logs enquiries to the console in development only.

The rate limiter is in memory. On serverless or multi-instance hosting, swap it for a shared store such as Upstash Redis, and consider adding Cloudflare Turnstile if spam appears.

## Design and motion system

See `docs/STRATEGY.md` for the creative direction. In code:

- **Tokens:** `src/app/globals.css` (`@theme`). Light theme: `ink` is the page surface (white) and `paper` the foreground (deep navy), so `surface-paper` sections are the dark bands. One accent per capability family: growth = violet (`ember`), build = pink (`sky`), intelligence = teal (`lagoon`); each `-deep` variant is the light tint used on dark bands. `src/lib/families.ts` maps families to colours.
- **Type:** Inter Tight (Latin), Instrument Serif italic for accent words, IBM Plex Sans Arabic for Arabic. Arabic never receives letter-spacing.
- **Motion:** CSS handles reveals (`data-reveal="up|start|end|scale|mask"` and `WordReveal`), driven by one shared IntersectionObserver (`components/reveal-observer.tsx`). Motion for React is used only where it adds understanding: the scroll-linked positioning story, industry explorer transitions, the journey demo and the process progress line. `start`/`end` directions flip automatically in RTL through the `--dir` variable.
- **Reduced motion:** travel distances drop to zero, continuous animations stop, and scroll-linked sections render in their final state.
- **No-JS safety:** reveal styles only apply when `html.js` is present, so content is always visible to crawlers and if scripts fail. The hero headline animates with CSS only so it never delays LCP.

## Deployment

Any Node.js host that supports Next.js 16 works (Vercel, Netlify, AWS Amplify, a container). Set the environment variables, run `npm run build`, then `npm run start`. Security headers are set in `next.config.ts`.

See `docs/LAUNCH-CHECKLIST.md` before going live.
