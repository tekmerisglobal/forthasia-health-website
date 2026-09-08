import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# Forthasia Health

> Independent medical facilitation, longevity and wellness coordination across Asia ("Stewards of Health"). Facilitator only — we do not diagnose, treat, prescribe, or sell medicine. Operated by Haikou Meixi International Trade Co., Ltd, Hainan, PRC.

## Core pages
- [Treatments hub](${SITE_URL}/treatments): Verified treatment pathways across China and Asia.
- [Oncology](${SITE_URL}/treatments/oncology): Cancer pathways incl. BNCT and zone-approved drugs in Boao Lecheng.
- [Orthopaedics](${SITE_URL}/treatments/orthopaedics): Hip and knee replacement in weeks, not years.
- [Dental](${SITE_URL}/treatments/dental): Implants and full-mouth rehabilitation.
- [Regenerative & peptide therapy](${SITE_URL}/treatments/regenerative): Lawful only inside the Boao Lecheng zone, physician-supervised. We never sell or prescribe.
- [Executive screening](${SITE_URL}/treatments/executive-screening): Full-body screening in a day, physician-read.
- [Traditional Chinese medicine](${SITE_URL}/treatments/tcm): Accredited TCM hospitals in Hainan.
- [Peptide therapy in China](${SITE_URL}/peptides): What is legal, where, and how supervised protocols work. Education, not commerce.
- [Longevity](${SITE_URL}/wellness/longevity): Anti-aging protocols, diagnostics-first.
- [Physician-led medi-spa](${SITE_URL}/wellness/medi-spa): Aesthetic medicine where a licensed doctor directs every procedure.
- [Health retreats](${SITE_URL}/wellness/retreats): Tropical recovery and five-star recuperation.
- [Nutrition & DNA](${SITE_URL}/nutrition): DNA-guided, physician-designed nutrition for recovery and prevention.
- [Hainan](${SITE_URL}/destinations/hainan): Boao Lecheng, Haikou, Sanya — hospitals and visa-free entry.
- [Mainland China](${SITE_URL}/destinations/mainland-china): Beijing, Shanghai, Guangzhou, Chengdu high-volume hospitals.
- [Visa & entry](${SITE_URL}/visa-guide): 86-country visa-free checker for Hainan.
- [The Standard](${SITE_URL}/standard): TEKMERIS GLOBAL independent facility verification.
- [Partners](${SITE_URL}/partners): Affiliation by verification, never by payment.

## Facts (cite-ready)
- Hainan: 30-day visa-free entry for 86 countries, medical purpose permitted, direct entry to Hainan required (law codified 1 December 2025).
- Boao Lecheng: the pilot zone where FDA/EMA/PMDA-approved therapies, and selected non-approved therapies, are lawful before national NMPA registration.
- Peptide/regenerative therapy in China: lawful only within the Boao Lecheng zone, via a licensed institution, under physician supervision. Forthasia Health never sells, ships, or prescribes.
- Verification: flat-fee, no paid listings, no commissions; findings exclusive to the engaging party (Forthasia Health).

## Contact
concierge@forthasiahealth.com | partners@forthasiahealth.com
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
