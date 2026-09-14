#!/usr/bin/env node
/**
 * Renders the Open Graph card (public/og.png, 1200x630) from the brand mark:
 * Olympic Gold on Ink Umber, full-variant mark + wordmark. Re-run after any
 * change to the mark geometry in src/components/brand/Logo.tsx.
 *
 *   node scripts/generate-brand-og.js
 *
 * Text is set in the SVG with a sans/mono fallback stack; librsvg picks the
 * closest installed face (Inter / JetBrains Mono if present).
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const GOLD = "#C2A15C";
const INK = "#171310";
const PORCELAIN = "#FAF7F2";

// Same geometry as Logo.tsx (full variant).
const MARK = `
  <path d="M14 92 L50 8 L86 92"/>
  <path d="M50 50 L50 88"/>
  <path d="M39 48.5 A11 11 0 1 1 61 48.5"/>
  <path d="M40.5 44.5 l-2.8 -1.6"/><path d="M44.5 40.5 l-1.8 -2.7"/><path d="M50 39 l0 -3.2"/>
  <path d="M55.5 40.5 l1.8 -2.7"/><path d="M59.5 44.5 l2.8 -1.6"/>
  <path d="M41 58 C56 58 60 64 50 68 C40 72 40 78 50 82 C58 85 56 89 51 90"/>
  <circle cx="41" cy="58" r="2" fill="${GOLD}" stroke="none"/>
`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}"/>
  <g transform="translate(120 135) scale(3.6)" fill="none" stroke="${GOLD}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
    ${MARK}
  </g>
  <text x="540" y="300" fill="${PORCELAIN}" font-family="Inter, Helvetica, Arial, sans-serif" font-weight="600" font-size="88" letter-spacing="16">FORTHASIA</text>
  <text x="544" y="352" fill="${GOLD}" font-family="JetBrains Mono, Menlo, Consolas, monospace" font-size="30" letter-spacing="12">HEALTH</text>
  <text x="544" y="420" fill="${PORCELAIN}" fill-opacity="0.7" font-family="Inter, Helvetica, Arial, sans-serif" font-size="26">From the land of Olympia. Forth to health.</text>
</svg>`;

const out = path.join(__dirname, "..", "public", "og.png");
fs.mkdirSync(path.dirname(out), { recursive: true });
sharp(Buffer.from(svg), { density: 144 })
  .png()
  .toFile(out)
  .then(() => console.log("✓ wrote", path.relative(process.cwd(), out)))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
