# Launch checklist

## A. Information the business must supply

- [ ] Final brand name (English and Arabic) and logo files → `src/config/site.ts`, set `brand.isPlaceholder: false`
- [ ] Production domain → `NEXT_PUBLIC_SITE_URL` (removes noindex and enables the sitemap in robots.txt)
- [ ] Verified business email and phone → `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE`
- [ ] Verified WhatsApp Business number → `NEXT_PUBLIC_WHATSAPP_NUMBER`
- [ ] Licensed company name, trade licence number and registered address → `src/content/legal.ts` and `site.contact.address`
- [ ] Social profile URLs
- [ ] Enquiry delivery: CRM webhook or Resend credentials (see README)
- [ ] Analytics IDs and a decision on cookie consent
- [ ] Real case studies with written client permission, to replace or sit beside the concept projects

## B. Legal and compliance

- [ ] UAE legal adviser reviews and completes the privacy notice and terms (currently templates, `noindex`)
- [ ] Confirm PDPL position for enquiry data, retention period and processors (hosting, email, CRM)
- [ ] If analytics or ad pixels are enabled, add a consent banner where required
- [ ] Review industry compliance notes (real estate, healthcare, finance, influencer) with the relevant specialists; they are general guidance only

## C. Content

- [ ] Native Arabic copy review by a UAE-based editor (written in Modern Standard Arabic; tone check recommended)
- [ ] Validate keyword themes with a keyword tool (Google Keyword Planner, Semrush or Ahrefs) and adjust titles where useful
- [ ] Confirm the "reply within one business day" promise is operationally true
- [ ] Confirm the promises on the About page and in "Why choose us" (written plan with cost before work starts, everything in the client's name, monthly reviews) match how the business will actually operate
- [ ] Re-check the "4 of 11" research figure before launch; competitor sites change
- [ ] Optional: commissioned photography of the real team or office, if desired (avoid stock photos of people)

## D. Technical

- [ ] Set environment variables in hosting; build and deploy
- [ ] Submit `https://<domain>/sitemap.xml` in Google Search Console and Bing Webmaster Tools
- [ ] Test the enquiry form end to end on production (success, and failure if the webhook is down)
- [ ] Replace the in-memory rate limiter with a shared store if hosting is serverless or multi-instance
- [ ] Re-run Lighthouse on the production domain (real CDN and HTTP/2 change the results)
- [ ] Set up uptime monitoring and error logging

## Verification done in this build (15 Oct 2026)

| Check | Result |
| --- | --- |
| `tsc --noEmit` | Pass |
| `eslint` | Pass |
| `next build` | Pass: 85 routes prerendered (2 languages × 40 pages, plus OG images, sitemap and robots) |
| Browser smoke test (Playwright, Chromium) | 17 of 17 checks pass: client validation and focus; typed details kept after a failed send; "not sent" message when delivery isn't configured; success via webhook (Arabic); error when the webhook fails; too-fast bot submission rejected; language switch keeps the equivalent page; `lang`/`dir` correct; explorer keyboard navigation; journey demo; directory filter and search; reduced motion; skip link; content visible without JavaScript. No console errors |
| Lighthouse 13 (local production server, `NEXT_PUBLIC_SITE_URL` set) | Mobile home EN: performance 81, accessibility 100, best practices 100, SEO 100. Mobile home AR: 78 / 100 / 100 / 100. Mobile industry page AR: 84 / 100 / 100 / 100. Mobile service page EN: 98 performance. Desktop home EN: 100 / 100 / 100 / 100 |
| Visual review | Desktop (1440px) and mobile (390px), English and Arabic, via screenshots |

**Known limitations**

- Mobile homepage performance (78–88 across runs) is held back by simulated mid-range CPU parsing a long, animated page. Measured on the real CDN this usually improves; further gains would come from lazy-loading the below-the-fold interactive sections.
- Lighthouse was run locally, not on the production host.
- Tested in Chromium only. Safari and Firefox should be checked before launch, especially the RTL horizontal gallery and scroll-linked sections.
- Arabic copy has not been reviewed by a native editor.
