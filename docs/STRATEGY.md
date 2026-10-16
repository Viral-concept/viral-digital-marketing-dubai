# Strategy, creative direction and site map

Companion to `RESEARCH.md` (competitor audit, sources, regulations). This document records the decisions made from that research. Anything not marked as a sourced finding is design interpretation.

## 1. Positioning

**Core idea:** the gaps between suppliers are where leads go missing. Most UAE businesses buy ads, websites and automation from different vendors, and nobody owns the journey from first click to signed contract. We design that journey as one system.

**Line:** Marketing, software and AI, engineered as one growth system.

Three capability families organise everything (navigation, colour, content):

| Family | Role | Services | Accent |
| --- | --- | --- | --- |
| Growth | Find and win demand | Performance ads, SEO, social, branding | Ember `#ff6a3d` |
| Build | Products that convert | Websites, web apps, mobile apps, e-commerce | Sky `#8fb2ff` |
| Intelligence | AI that scales the work | AI automation and agents, AI chatbots | Lagoon `#5fe0c6` |

## 2. How we improve on competitor patterns

From the research (see `RESEARCH.md` §3):

| Common pattern | What this site does instead |
| --- | --- |
| Arabic missing or partial on most audited sites | Every page fully written in both languages, with RTL layout, typography and motion considered separately |
| "Best agency in Dubai" superlatives and conflicting stats | No superlatives, no invented numbers. Concept work is labelled as concept work |
| Long undifferentiated service lists | Ten services under three families, each with deliverables, process, fit and FAQs |
| Generic industry pages | Each of 20 industries has its own challenges, enquiry journey, solutions, FAQs and, where relevant, a careful compliance note (DLD/RERA, DHA, CBUAE/DFSA, UAE Media Council, PDPL) |
| AI as a buzzword | An explained AI architecture (channels, AI layer, systems, human review) and a step-through demo labelled as illustrative |
| Autoplay video heroes, "0+" counters without JS | A lightweight SVG hero; all content renders without JavaScript |
| WhatsApp impersonation scams in the market | A note on the contact block listing official channels only |

## 3. Audience

- Owners, founders and marketing leads of small to mid-sized UAE businesses, often bilingual, often deciding on mobile.
- Priority (tier 1) industries, chosen for fit with a combined marketing, development and AI offer: real estate, HVAC/MEP, healthcare clinics, dental and aesthetic clinics, e-commerce and retail, technology/SaaS. Tiers are a business-fit judgement, not market-size claims.

## 4. Site map

```
/{en|ar}
├── Services (index)
│   └── 10 service pages
├── Industries (filterable directory)
│   └── 20 industry pages
├── Work (concept projects)
├── Approach (principles, process, what we won't do)
├── Contact (enquiry form)
└── Privacy, Terms (templates, noindex)
```

**Homepage narrative:** opening statement → why connected (scroll story) → services index → industry explorer → step-through enquiry demo → concept work gallery → process → technology and AI diagram → FAQs → enquiry form → footer.

## 5. Visual identity

- **Foundation:** deep ink (`#0c111c`) for immersive sections; warm paper (`#f4efe7`) for reading-heavy sections. Alternating surfaces pace the page instead of decorative gradients. Deliberately not black and gold.
- **Type:** Inter Tight for confident, tightly set headlines and body; Instrument Serif italic for one accent phrase per headline. Arabic uses IBM Plex Sans Arabic at heavier weight with more line height, since Arabic has no italic tradition.
- **Imagery:** no stock photos of people and no generated office scenes. Each industry has original, generated SVG artwork built from one of six motifs (grid, arc, wave, stack, orbit, route), tinted by industry. Concept projects use code-built interface compositions. This keeps the site fast and avoids implying a team or clients that don't exist.
- **Logo:** placeholder typographic wordmark with a three-arc glyph (the three families converging).

## 6. Motion system

| Token | Value | Use |
| --- | --- | --- |
| `--dur-micro` | 180ms | Hover colour changes |
| `--dur-ui` | 320ms | Menus, underlines |
| `--dur-reveal` | 900ms | Section entrances |
| `--dur-hero` | 1200ms | Headline word rise |
| `--ease-out-expo` | `cubic-bezier(.16,1,.3,1)` | Default easing |
| `--stagger` | 70ms | Word and list stagger |
| `--dist-reveal` / `--dist-panel` | 28px / 72px | Vertical / horizontal travel |

Rules:

1. Motion explains something: rings converge to show "one system", the demo advances a lead, the process line fills as you read.
2. Horizontal motion uses logical directions. `start`/`end` flip in Arabic; meaning-bearing sequences (journey rails, timelines) follow reading order.
3. Continuous motion is limited to slow ambient details in focal artwork: the hero orbits (paused when off-screen) and the signal dashes on diagrams. No cursor trails, particles or autoplay video.
4. Nothing important is hidden behind hover. Hover adds emphasis (colour wash, arrow motion, image scale).
5. Reduced motion removes travel and continuous animation and shows scroll-linked states in their final form.

## 7. SEO approach

- Unique bilingual titles and descriptions per page; canonical plus `hreflang` (`en-AE`, `ar-AE`, `x-default`) in both page metadata and the sitemap.
- Structured data: `ProfessionalService` (built only from configured details), `Service`, `BreadcrumbList`, `FAQPage`.
- Keyword themes in both languages (from `RESEARCH.md` §4) are reflected in page titles, headings and FAQs. They are hypotheses to validate with a keyword tool. No search volumes are claimed.
- Local SEO (address, `LocalBusiness` details, Google Business Profile) waits for a verified, licensed address.
