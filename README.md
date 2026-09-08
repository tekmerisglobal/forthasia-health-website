# Forthasia Health — Public Site

Phase A of the Master Website Build blueprint: the public marketing site.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · `next/font` (Inter Tight, Inter, JetBrains Mono, Fraunces)

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
| `/visa-guide` | Law citation (1 Dec 2025) + interactive visa & entry checker (`src/data/visa.ts`, `src/components/VisaChecker.tsx`) |
| `/nutrition` | The Neurogenomics Protocol |
| `/compliance` | Compliance & ethics boundaries (text-only, deliberately) |
| `/founder` | Konstantino "Tino" Dimitropoulos |
| `/consultation` | Contact / intake form → `POST /api/intake` |
| `/privacy` | Privacy Policy (14 clauses) — effective 4 September 2026 |
| `/terms` | Terms & Conditions (15 clauses) — effective 4 September 2026 |

## Design system (V-7 correction, current)

Cinzel is retired site-wide. The type skeleton is now Inter Tight for
headings, Inter for body/UI, JetBrains Mono for eyebrows/tags/buttons, and
**Fraunces italic only on `/philosophy`** (the Creed pull-quote and the Two
Oaths). See `src/app/globals.css` (`@theme` block + `.font-monument` /
`.font-editorial` / `.font-card-title` / `.eyebrow` / `.btn-label`).

- Container: 1160px max-width, 24px gutter (`--page-max`, `--gutter`).
- Section rhythm: 64px mobile / 88px desktop (`Section`, `PageHero` in `src/components/ui.tsx`).
- Cards: 8px radius, 24px/22px padding, 16px grid gap; dark-section cards use
  the `rgba(233,226,216,.14)` hairline border (`Card`, `--color-hairline-dark`).
- Buttons: 44px height, full radius, JetBrains Mono 12px uppercase (`.btn-label`).
- Nav: single line ≥1100px; 768–1099px collapses to the first four items +
  a "Menu" dropdown; <768px is the existing hamburger (`src/components/SiteHeader.tsx`).

The mandatory entity line renders site-wide from `src/components/SiteFooter.tsx`,
in a fixed order (V-9): logo/nav/Client Login → contact block → compliance
block → legal links (Privacy / Terms / Compliance & Ethics) → entity line →
master close. Per V-9's privacy revision, the footer publishes only
`office@kdtino.com` and the corporate HQ line — no personal phone/WeChat/
WhatsApp, and the public Ops Dashboard link was dropped from the footer
(Client Login only).

## Imagery

Every image slot in the code (`Diptych`, `ImageSlot` in `src/components/ui.tsx`)
carries a caption, alt text, and an `[OWN]` / `[STOCK]` / `[OWN/STOCK]` tag per
the imagery & content manifest — `[OWN]` needs an asset from the client,
`[STOCK]` needs sourcing. Nothing is a real photo yet; every slot is a
gradient placeholder standing in for the brief. Global imagery rules baked
into the copy: no doctors in white coats, no caduceus (single-serpent Rod
only, see `RodOfAsclepius.tsx`), no before/after or efficacy imagery.

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
