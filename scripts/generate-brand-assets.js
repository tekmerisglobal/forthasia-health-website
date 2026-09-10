#!/usr/bin/env node
/**
 * Regenerates every file in public/brand/ plus the favicon set in public/
 * from the brand spec locked 2026-09-10. Run after any change to the
 * palette hexes, the wordmark spec (tracking/size ratio), or the meander
 * path — nothing here should otherwise need to change.
 *
 *   node scripts/generate-brand-assets.js
 *
 * Wordmark/lockup text is rendered to real outlined SVG paths (via
 * opentype.js reading the @fontsource glyph files directly) so the files
 * work anywhere without the fonts installed. The favicon set is rasterised
 * from an SVG source with sharp.
 */
const opentype = require("opentype.js");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT_BRAND = path.join(ROOT, "public/brand");
const OUT_PUBLIC = path.join(ROOT, "public");
fs.mkdirSync(OUT_BRAND, { recursive: true });

// ---- Palette (must match the --basalt/--pentelic/--bronze/--aegean
// custom properties in src/app/globals.css) ----
const BASALT = "#12181A";
const PENTELIC_2 = "#F4F2EC";
const BRONZE = "#A98D5F";
const BRONZE_LIFT = "#C4A876";

// ============================================================
// 1. Wordmark + lockup — outlined text, no font dependency
// ============================================================

function loadFont(p) {
  const buf = fs.readFileSync(p);
  const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  return opentype.parse(ab);
}

const marcellus = loadFont(
  path.join(ROOT, "node_modules/@fontsource/marcellus/files/marcellus-latin-400-normal.woff")
);
const karla600 = loadFont(
  path.join(ROOT, "node_modules/@fontsource/karla/files/karla-latin-600-normal.woff")
);

const FORTHASIA_SIZE = 120;
const HEALTH_SIZE = FORTHASIA_SIZE * 0.36; // spec: 0.36x FORTHASIA
const FORTHASIA_LS = 0.3; // em, spec: 0.30em
const HEALTH_LS = 0.55; // em, spec: 0.55em
const GAP = HEALTH_SIZE * 2.2; // "generous space" between the two lines

function translatePath(p, dx, dy) {
  const clone = new opentype.Path();
  for (const cmd of p.commands) {
    const c = { ...cmd };
    if (c.x !== undefined) c.x += dx;
    if (c.y !== undefined) c.y += dy;
    if (c.x1 !== undefined) c.x1 += dx;
    if (c.y1 !== undefined) c.y1 += dy;
    if (c.x2 !== undefined) c.x2 += dx;
    if (c.y2 !== undefined) c.y2 += dy;
    clone.commands.push(c);
  }
  return clone;
}

function glyphPath(font, text, fontSize, letterSpacing) {
  // Glyph-by-glyph, bypassing opentype's Bidi/GSUB feature layer (it throws
  // on an unsupported chained-contextual lookup in these particular fonts,
  // and plain uppercase Latin needs no ligature/composition handling).
  // opentype's own letterSpacing option adds space AFTER each glyph
  // (matching CSS letter-spacing); we start one letterSpacing unit in, to
  // match the spec's "margin-left ... to compensate for the trailing space".
  const scale = fontSize / font.unitsPerEm;
  const marginLeft = letterSpacing * fontSize;
  const combined = new opentype.Path();
  let x = marginLeft;
  for (const ch of text) {
    const glyph = font.charToGlyph(ch);
    combined.extend(glyph.getPath(x, 0, fontSize));
    x += glyph.advanceWidth * scale + letterSpacing * fontSize;
  }
  return combined;
}

function svgWrap(width, height, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width.toFixed(2)} ${height.toFixed(2)}" role="img" aria-label="Forthasia Health">\n${inner}\n</svg>\n`;
}

function buildWordmarkOnly(color) {
  const p = glyphPath(marcellus, "FORTHASIA", FORTHASIA_SIZE, FORTHASIA_LS);
  const b = p.getBoundingBox();
  const padX = FORTHASIA_SIZE * 0.08;
  const padY = FORTHASIA_SIZE * 0.16;
  const w = b.x2 - b.x1 + padX * 2;
  const h = b.y2 - b.y1 + padY * 2;
  const shifted = translatePath(p, -b.x1 + padX, -b.y1 + padY);
  return svgWrap(w, h, `  <path d="${shifted.toPathData(2)}" fill="${color}"/>`);
}

function buildLockup(align, forthasiaColor, healthColor) {
  const p1 = glyphPath(marcellus, "FORTHASIA", FORTHASIA_SIZE, FORTHASIA_LS);
  const p2 = glyphPath(karla600, "HEALTH", HEALTH_SIZE, HEALTH_LS);
  const b1 = p1.getBoundingBox();
  const b2 = p2.getBoundingBox();
  const w1 = b1.x2 - b1.x1;
  const w2 = b2.x2 - b2.x1;
  const contentW = Math.max(w1, w2);
  const padX = FORTHASIA_SIZE * 0.1;
  const padTop = FORTHASIA_SIZE * 0.14;
  const padBottom = HEALTH_SIZE * 0.3;

  const x1 = align === "centred" ? (contentW - w1) / 2 : 0;
  const x2 = align === "centred" ? (contentW - w2) / 2 : 0;

  const line1Y = padTop - b1.y1;
  const line2Y = padTop + (b1.y2 - b1.y1) + GAP - b2.y1;

  const shifted1 = translatePath(p1, x1 - b1.x1 + padX, line1Y);
  const shifted2 = translatePath(p2, x2 - b2.x1 + padX, line2Y);

  const totalW = contentW + padX * 2;
  const totalH = padTop + (b1.y2 - b1.y1) + GAP + (b2.y2 - b2.y1) + padBottom;

  const inner = [
    `  <path d="${shifted1.toPathData(2)}" fill="${forthasiaColor}"/>`,
    `  <path d="${shifted2.toPathData(2)}" fill="${healthColor}"/>`,
  ].join("\n");

  return svgWrap(totalW, totalH, inner);
}

fs.writeFileSync(path.join(OUT_BRAND, "forthasia-wordmark-basalt.svg"), buildWordmarkOnly(BASALT));
fs.writeFileSync(path.join(OUT_BRAND, "forthasia-wordmark-pentelic.svg"), buildWordmarkOnly(PENTELIC_2));
fs.writeFileSync(path.join(OUT_BRAND, "forthasia-lockup-centred-basalt.svg"), buildLockup("centred", BASALT, BRONZE));
fs.writeFileSync(path.join(OUT_BRAND, "forthasia-lockup-centred-pentelic.svg"), buildLockup("centred", PENTELIC_2, BRONZE_LIFT));
fs.writeFileSync(path.join(OUT_BRAND, "forthasia-lockup-left-basalt.svg"), buildLockup("left", BASALT, BRONZE));
fs.writeFileSync(path.join(OUT_BRAND, "forthasia-lockup-left-pentelic.svg"), buildLockup("left", PENTELIC_2, BRONZE_LIFT));
console.log("✓ wordmark + lockup SVGs");

// ============================================================
// 2. The meander device — pure geometry, both weights, both grounds
// ============================================================

const MEANDER_D = "M36,164 L36,36 L164,36 L164,128 L100,128 L100,92 L136,92";
function meanderSvg(color, width) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Forthasia Health">
  <path d="${MEANDER_D}"
        fill="none" stroke="${color}" stroke-width="${width}"
        stroke-linejoin="miter" stroke-linecap="butt"/>
</svg>
`;
}
fs.writeFileSync(path.join(OUT_BRAND, "forthasia-meander-bronze.svg"), meanderSvg(BRONZE, 10));
fs.writeFileSync(path.join(OUT_BRAND, "forthasia-meander-pentelic.svg"), meanderSvg("#E9E6DC", 10));
fs.writeFileSync(path.join(OUT_BRAND, "forthasia-meander-heavy-bronze.svg"), meanderSvg(BRONZE, 14));
fs.writeFileSync(path.join(OUT_BRAND, "forthasia-meander-heavy-pentelic.svg"), meanderSvg("#E9E6DC", 14));
console.log("✓ meander SVGs");

// ============================================================
// 3. Favicon set — heavy meander, bronze-lift on a basalt rounded square
// ============================================================

const CANVAS = 512;
const RADIUS = CANVAS * 0.06; // 6% corner radius, per spec
const GLYPH_FRACTION = 0.74; // meander footprint as a share of the canvas
const S = (CANVAS * GLYPH_FRACTION) / 200;
const OFFSET = (CANVAS - 200 * S) / 2;
const STROKE = 14 * S; // heavy variant

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CANVAS} ${CANVAS}">
  <rect x="0" y="0" width="${CANVAS}" height="${CANVAS}" rx="${RADIUS.toFixed(2)}" fill="${BASALT}"/>
  <g transform="translate(${OFFSET.toFixed(2)},${OFFSET.toFixed(2)}) scale(${S.toFixed(4)})">
    <path d="${MEANDER_D}" fill="none" stroke="${BRONZE_LIFT}" stroke-width="${(STROKE / S).toFixed(2)}" stroke-linejoin="miter" stroke-linecap="butt"/>
  </g>
</svg>
`;

fs.writeFileSync(path.join(OUT_BRAND, "favicon-source.svg"), faviconSvg);
fs.writeFileSync(path.join(OUT_PUBLIC, "favicon.svg"), faviconSvg);

const sizes = [
  { size: 16, name: "favicon-16.png" },
  { size: 32, name: "favicon-32.png" },
  { size: 48, name: "favicon-48.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "icon-192.png" },
  { size: 512, name: "icon-512.png" },
];

(async () => {
  for (const { size, name } of sizes) {
    await sharp(Buffer.from(faviconSvg), { density: 384 })
      .resize(size, size)
      .png()
      .toFile(path.join(OUT_PUBLIC, name));
  }
  console.log("✓ favicon set (" + sizes.map((s) => s.size).join(", ") + ") + favicon.svg");
})();
