# Forthasia Health — Public Site

Phase A of the Master Website Build blueprint: the public marketing site.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · `@fontsource` (Marcellus, Karla)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## What's built (Phase A)

| Route | Page |
| --- | --- |
| `/` | Home — hero, "Why Forthasia" trust band, regulatory-oasis stats, journey teaser |
| `/philosophy` | The Greek lineage (Elis, Olympia, Sparta, Epidaurus) + Eastern integration, the Creed, Two Oaths |
| `/standard` | The Forthasia Standard — TEKMERIS GLOBAL verification (5 checks, independence band, cross-link to the sibling TEKMERIS GLOBAL supply-chain site) |
| `/destinations` | Boao Lecheng, Dental & Oral Health (price table), Anti-Aging & Longevity, TCM & Rehabilitation, the network ecosystem, market facts, secondary pathways (Bangkok, Mumbai) |
| `/journey` | The 4-Phase Journey |
| `/recovery` | Recovery & Tourism — the 8-Route program, curated pairings, recovery-friendly activities |
| `/wellness` | The Wellness Continuum — medi-spa, longevity protocols, health retreats, lifestyle/prevention (V-14) |
| `/visa-guide` | Law citation (1 Dec 2025) + interactive visa & entry checker (`src/data/visa.ts`, `src/components/VisaChecker.tsx`) |
| `/nutrition` | The Neurogenomics Protocol |
| `/compliance` | Compliance & ethics boundaries (text-only, deliberately) |
| `/founder` | Konstantino "Tino" Dimitropoulos |
| `/consultation` | Contact / intake form → `POST /api/intake` |
| `/partners` | Affiliations & Partners — "Stewards of Health, together." network scope, verification-not-payment terms, `partners@` apply CTA |
| `/treatments` | Treatments hub — links the six spoke pages |
| `/treatments/[slug]` | SEO spokes: `oncology`, `orthopaedics`, `dental`, `regenerative`, `executive-screening`, `tcm` (`src/content/treatments.ts`) |
| `/wellness/[slug]` | SEO spokes: `longevity`, `medi-spa`, `retreats` (`src/content/wellness.ts`) |
| `/destinations/[slug]` | SEO spokes: `hainan`, `mainland-china`, `thailand`, `india` (`src/content/destinations.ts`) |
| `/peptides` | Peptide therapy in China — education + facilitation, never commerce |
| `/peptides/legal` | Regulatory-position reference / legal notice — **noindex**, not in the sitemap, reached only from the footer + `/peptides` |
| `/llms.txt` | Plain-text AI-search index (`app/llms.txt/route.ts`) |
| `/privacy` | Privacy Policy (14 clauses) — effective 4 September 2026 |
| `/terms` | Terms & Conditions (15 clauses) — effective 4 September 2026 |

## Brand identity (locked 2026-09-10)

Private-bank / Aman register: restrained, institutional, one accent. Retired
Inter Tight / Inter / JetBrains Mono / Fraunces and the Rod of Asclepius icon
entirely — **the wordmark is the logo; there is no symbol beside it.**

**Palette** — nine colours, `src/app/globals.css` `@theme`, no others allowed:
`--basalt #12181A` (primary ground) · `--basalt-2 #1B2325` · `--pentelic
#E9E6DC` (light ground) · `--pentelic-2 #F4F2EC` (lightest surface) ·
`--bronze #A98D5F` (the one accent) · `--bronze-lift #C4A876` (bronze on dark
grounds) · `--aegean #1F3A3D` (secondary depth, panels/dividers only) ·
`--text-2 #565C58` · `--text-3 #868B84`. No blue, no green, no purple.

Every existing `--color-*` token (porcelain, ink-umber, ink-soft, bronze,
olympic-gold, ionian, olive, terracotta, parchment, hairline-dark) is aliased
to one of the nine above in the same `@theme` block, so the whole site
re-themes from one place. Notably: `--color-ionian` (was blue; every link and
active-nav-state use) and `--color-olympic-gold` (was a brighter gold; every
"lifted" accent use) both now resolve into the bronze pair; `--color-olive`
(was green; "verified" tone) → aegean; `--color-terracotta` (was red/orange;
"alert" tone) → basalt, i.e. serious/dark rather than another hue.

**Typography** — Marcellus (display/headings, inscriptional capitals, weight
400 only — it has no bold, so `.font-monument`/`.text-h3` don't request one)
and Karla (body 400, labels/eyebrows/buttons Karla 600 uppercase, 0.19em
tracking). Both **self-hosted via `@fontsource`** (`@fontsource/marcellus`,
`@fontsource/karla`, imported in `src/app/layout.tsx`) — never linked from
Google Fonts, which is blocked in mainland China. No monospace anywhere.

**The wordmark** — `src/components/Wordmark.tsx`: "FORTHASIA" in Marcellus,
0.30em tracking + a matching 0.30em left margin; "HEALTH" beneath in Karla
600, 0.36× the size, 0.55em tracking, bronze (bronze-lift on a dark/`onDark`
ground). `align="left"` in the header, `align="center"` in the footer — the
only two variants, per the rollout. Static, colour-explicit copies (text
converted to outlined paths, so they render without the fonts installed)
live in `public/brand/` — `forthasia-wordmark-*` (name only) and
`forthasia-lockup-{centred,left}-*` (full two-line lockup) — for `-basalt`
(dark-on-light) and `-pentelic` (light-on-dark) grounds.

**The device** — a single Greek-meander turn, `public/brand/forthasia-meander-*.svg`
(regular, stroke-width 10) and `forthasia-meander-heavy-*.svg` (stroke-width
14, for anything under ~20px — favicon, embroidery). **Never placed beside
the wordmark** — it's a substitute for it, used only where a wordmark
physically can't fit. No circle, frame, or rounded joins on the device asset
itself; the rounded-square favicon background is the one place it gets a
container. No monogram, shield, caduceus, leaf, helix, or heartbeat line
anywhere — there is no symbol beyond the meander.

**Favicon** — the heavy meander in `--bronze-lift` on a `--basalt` square,
6% corner radius: `public/favicon.svg` + `favicon-{16,32,48}.png`,
`apple-touch-icon.png` (180), `icon-{192,512}.png`, `public/site.webmanifest`,
all wired via `metadata.icons`/`metadata.manifest` in `layout.tsx`, plus
`viewport.themeColor = "#12181A"`.

**Regenerating the assets** — `node scripts/generate-brand-assets.js` rebuilds
everything in `public/brand/` plus the favicon set from the palette/spec
constants at the top of that script (it renders the wordmark text to real
glyph outlines via `opentype.js` reading the `@fontsource` files directly, and
rasterises the favicon with `sharp`). Run it after changing a hex, the
tracking/size ratios, or the meander path — nothing else should need to.

- Container: 1160px max-width, 24px gutter (`--page-max`, `--gutter`).
- Section rhythm: 64px mobile / 88px desktop (`Section`, `PageHero` in `src/components/ui.tsx`).
- Cards: 8px radius, 24px/22px padding, 16px grid gap; dark-section cards use
  a hairline border derived from pentelic (`Card`, `--color-hairline-dark`).
- Buttons: 44px height, full radius, Karla 600 12px uppercase (`.btn-label`).
- Nav: single line ≥1240px (first six + "More"); 768–1239px collapses to the
  first four + "Menu"; <768px is the hamburger (`src/components/SiteHeader.tsx`).

The mandatory entity line renders site-wide from `src/components/SiteFooter.tsx`:
centred lockup (generous space above/below) → nav + Secure Inquiries/Corporate
HQ/Client Portal → compliance block → legal links (Privacy / Terms /
Compliance & Ethics / Peptide Legal Notice) → entity line → master close.

**Flagged, not touched** (brand assets/tokens only — content and layout were
off-limits): the warm/cool placeholder gradients on `ImageSlot`/`DiptychPanel`
(`src/components/ui.tsx`, e.g. `#efe4cf`/`#d9c49a`, `#dfe6ee`/`#b9c7d8`) sit
outside the nine-colour palette — they're stand-ins for real photography, not
brand marks, so they were left as-is pending real imagery.

## Imagery

Every image slot in the code (`Diptych`, `ImageSlot` in `src/components/ui.tsx`)
carries a caption, alt text, and an `[OWN]` / `[STOCK]` / `[OWN/STOCK]` tag per
the imagery & content manifest — `[OWN]` needs an asset from the client,
`[STOCK]` needs sourcing. Nothing is a real photo yet; every slot is a
gradient placeholder standing in for the brief. Global imagery rules baked
into the copy: no doctors in white coats, no caduceus or any medical symbol
(the brand has no icon at all — see "Brand identity" above), no before/after
or efficacy imagery.

`/compliance` and `/consultation` are intentionally image-free per the manifest.

### Hero backdrop (`src/components/HeroBackdrop.tsx`)

The porcelain-dim bands (`PageHero`, and `Section tone="dim"` at half strength)
carry a faint decorative layer — a radial haze plus a brand-coloured line
composition (distant Hainan coastline + ridge line + a hint of a glass
facade), radial-masked so it dissolves before the text column.

To swap the line-art for a real photo on a given page: pass `image` to
`PageHero` — e.g. `<PageHero … image="/hero/hainan-coast.webp" />`. It renders
at ~16% opacity behind a porcelain scrim (no code change needed, just drop the
file in `public/hero/`). Good candidates, all findable as CC0 / public-domain
stock (Unsplash, Wikimedia Commons, Pexels):

| Page | Suggested photo |
| --- | --- |
| `/` hero (dark) | Hainan coastline at golden hour — slow drone/wide, low horizon |
| `/philosophy` | Greek mountain light, or a calm sea horizon |
| `/standard` | Clean modern hospital corridor / atrium, no people |
| `/destinations` | Boao Lecheng / Hainan modern medical architecture, glass + palms |
| `/journey` | Aircraft window over tropical coast |
| `/recovery` | Sanya bay, rainforest canopy (Jianfengling), or hot-spring steam |
| `/nutrition` | Overhead market produce / olive-free Mediterranean table |
| `/founder` | Hainan beach, soft |
| `/visa-guide` | (keep institutional — line-art only) |

Rules unchanged: no faces/white coats, no caduceus, no before/after.

## Known TODOs before launch

- **Visa country list** (`src/data/visa.ts`) ships indicative, with the
  disclaimer, per ruling. Source of truth: the current official NIA / Hainan
  FTP 86-country list — have Libby/VA transcribe it in verbatim. Don't point
  any live intake/portal CTA at it until that's done.
- **`/api/intake`** is wired for Resend (email to the concierge desk),
  Airtable (interim CRM log), and Cloudflare Turnstile — all behind env vars
  (`.env.example`); unset, it falls back to a console log. A honeypot field
  and a best-effort per-IP rate limit are already active regardless of config.
- **Imagery**: replace every `[OWN]`/`[STOCK]` placeholder with real assets
  per the manifest above; swap the hero gradient for the coastline → Boao
  Lecheng video loop.
- Headless CMS and i18n are **deliberately deferred** (ruling): static
  content is correct while copy is still moving; add a CMS only once
  non-technical staff need to edit directly. English-only launch; Mandarin
  (简体中文) then Spanish/French scaffolding comes later.

## Market facts & compliance guardrails (Addendum)

Every third-party stat (pricing, capacity, dates) renders through the shared
`FactsBand` component (`src/components/ui.tsx`) so the disclosure label —
"illustrative public data" or "…hospital-published" — is never dropped from a
number. Additional guardrails applied to all Addendum copy:

- Facilitation language only — no diagnose/treat/cure claims.
- No "official partner" language until agreements are signed.
- No absolute "only" claims about Forthasia without substantiation; the
  claim set used is foreign-owned · practitioner-founded · physically based
  in Hainan.
- **No competitor names anywhere in `src/app`.** The competitor matrix from
  the Addendum lives at `internal/competitor-matrix.md` — outside `src/app`,
  so Next.js never routes it, and gitignored. Do not move it in.
- Every new page still carries the entity line + compliance footer (it's
  global, from `SiteFooter.tsx` — nothing page-specific to remember here).

- "Stewards of Health" positioning rewrite: Home gains a "More than medical
  tourism." band + a six-card service-divisions grid (Medical Journeys ·
  Longevity & Executive Screening · Regenerative & Peptide Therapy · Medi-Spa,
  Retreats & Recovery · Nutrition & The Longevity Plate · Integrative, TCM &
  Care at Home), and a new `/partners` page. Peptide/regenerative therapy is
  referenced only as a Boao-Lecheng-zone pathway delivered by licensed
  institutions under physician supervision — never as something Forthasia
  administers, and with no link to the separate TEKMERIS GLOBAL business. No
  olive-oil content (that's the separate Havarion Gold project).

## SEO / AI-search spine

Hub-and-spoke: one search intent per spoke page, the query phrasing repeated
in the H1, the 40–60-word answer-first paragraph (`answerFirst`, which AI
engines quote), and the FAQ. Content lives as `PageEntry[]` data in
`src/content/{treatments,wellness,destinations}.ts` (`PageEntry` type in
`src/content/types.ts`); `src/components/seo/SpokePage.tsx` renders every spoke
from that data plus `BreadcrumbList` + `MedicalWebPage` JSON-LD, and
`FaqBlock.tsx` emits the `FAQPage` schema alongside the visible accordion.
`JsonLd.tsx` is the escaped `<script type="application/ld+json">` helper;
the homepage carries `Organization` JSON-LD.

- `src/lib/site.ts` — `SITE_URL` (from `NEXT_PUBLIC_SITE_URL`), org constants,
  and the verbatim `FACILITATOR_DISCLAIMER` repeated at the foot of every spoke.
- `app/robots.ts` explicitly allows the AI crawlers (OAI-SearchBot,
  ChatGPT-User, PerplexityBot, Google-Extended, ClaudeBot, Applebot-Extended,
  Baiduspider) and points at the sitemap.
- `app/llms.txt/route.ts` — cite-ready page list + facts, force-static.
- `app/sitemap.ts` includes every spoke; `/peptides/legal` is deliberately
  excluded and `noindex` (it's a reference/disclaimer page).
- Not nav-linked: the spokes surface through the `/treatments` hub, the
  `/destinations` and `/wellness` hub "go deeper" sections, the homepage
  divisions grid, hub-and-spoke `related` links, breadcrumbs and the footer.
- Post-deploy: submit `sitemap.xml` to Google Search Console + Bing Webmaster
  (Bing feeds ChatGPT search) + Baidu; add a `NEXT_PUBLIC_GSC_TOKEN` env var to
  emit the Search Console verification tag. E-E-A-T: add "Medically reviewed by"
  to the treatment/peptide pages once a named medical director's bio + consent
  land — the single biggest AI-search trust lever for YMYL health content.

## Not in this phase

Client Portal (`app.forthasiahealth.com` — HIIC Vault) and Ops Dashboard
(`ops.forthasiahealth.com`) are Phases B and C: separate apps. Recommended
stack per ruling: Supabase (auth + Postgres + storage) or Clerk + Cloudflare
R2, Stripe + Alipay for payments, Dropbox Sign (HelloSign) for e-sign, and an
immutable audit-log table from day one.

## Source documents

- `FORTHASIA HEALTH — MASTER WEBSITE BUILD & EXECUTION BLUEPRINT.pages`
- Document V-7: Design Correction Patch (type system, nav, density) — applied.
- Imagery & Content Manifest + deferred-item rulings — applied.
- Addendum: Dental, Tourism, Market Facts & Positioning — applied (`/recovery`
  added, `/destinations` expanded, Home trust band added, visa law delta
  added; competitor matrix kept internal-only).
- Document V-10, superseded mid-turn by an interrupt with the final spec —
  applied: `/standard` renamed TEKMERIS → TEKMERIS GLOBAL site-wide, 5 checks,
  dark ethos band, independence band, cross-link to the (not-yet-live) sibling
  TEKMERIS GLOBAL site.
- Document V-9 (revised for privacy): `/destinations` Dental pathway expanded
  with a Western-vs-China price table, new Anti-Aging & Longevity pathway
  added; footer rebuilt to the locked order above; `/privacy` and `/terms`
  added (send both to counsel — placeholder effective date 4 Sept 2026).
- Document V-11 (Email Architecture & "Velvet Rope" copy): superseded V-9's
  generic `office@kdtino.com` with the dedicated aliases below, site-wide.
  `/consultation` rewritten (Secure Clinical Intake framing + departmental
  routing section); pathway-specific mailto CTAs added to `/destinations`
  (Dental, Anti-Aging) and `/standard`; `/privacy` §1/§10/§14 and `/terms`
  §15 updated to `privacy@` / `legal@`. Every address is a real
  `<a href="mailto:">` (verified via build grep). IT setup (alias/catch-all
  config, the auto-responder copy) lives in `internal/email-setup.md` —
  operational, not website content, gitignored like the competitor matrix.

  | Alias | Where it's used |
  | --- | --- |
  | `concierge@forthasiahealth.com` | Footer, `/consultation`, Dental CTA |
  | `longevity@forthasiahealth.com` | `/consultation`, Anti-Aging CTA |
  | `partners@forthasiahealth.com` | Footer, `/consultation`, `/standard` CTA |
  | `intake@forthasiahealth.com` | `/consultation` (signed consent forms only) |
  | `privacy@forthasiahealth.com` | `/privacy` (DPO contact) |
  | `legal@forthasiahealth.com` | `/terms` (legal/compliance contact) |
