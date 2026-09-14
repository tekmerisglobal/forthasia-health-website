# Forthasia Health — repo rules

## Brand mark (locked)

- The mark is `src/components/brand/Logo.tsx`: **one** serpent on a rod that
  is an olive-tree trunk, the kotinos as canopy, enclosed in a Spartan lambda.
  Stroke-based, `currentColor`. Two colourways only: Olympic Gold on Ink
  Umber, Ink Umber on Porcelain.
- **The caduceus is banned repo-wide.** Two serpents, wings, or any
  Hermes/commerce staff must never appear — in SVG, imagery briefs, alt text,
  or copy. Single-serpent Rod of Asclepius only. `/compliance` states this
  publicly; keep the code consistent with it.
- Lint note: before merging anything touching brand assets, run
  `grep -rin "caduceus" src/ public/` — the only permitted hits are sentences
  that say we *never* use it.
- Use `variant="compact"` (or let size pick it) at or below 32px; the full
  mark's leaf ticks and coil close up below ~40px.

## Other standing rules (see memory for the why)

- No competitor names anywhere in `src/app`; competitor notes live in
  `internal/` (gitignored).
- Facilitator-only voice: coordinate, translate, verify, accompany. No
  diagnose/treat/prescribe claims, no outcome guarantees, no efficacy
  testimonials or before/after imagery. Third-party numbers carry the
  "illustrative public data" label.
- TEKMERIS GLOBAL appears only as the independent verification partner —
  nothing about its own business.
- No olive-oil / EVOO / grove *product* content — the kotinos in the mark is
  Olympia's victor's crown, not the Havarion Gold product line.
