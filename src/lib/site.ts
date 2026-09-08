/** Canonical origin for metadata, sitemap, robots, llms.txt and JSON-LD. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://forthasiahealth.com";

export const ORG_NAME = "Forthasia Health";
export const CONCIERGE_EMAIL = "concierge@forthasiahealth.com";
export const PARTNERS_EMAIL = "partners@forthasiahealth.com";

/** Repeated verbatim on every facilitation page — see Blueprint §6. */
export const FACILITATOR_DISCLAIMER =
  "Forthasia Health is a facilitation and care-coordination company. We do not diagnose, treat, or prescribe. All clinical decisions rest with licensed hospitals and your own physicians. Prices are illustrative public data; hospitals are named as examples only.";
