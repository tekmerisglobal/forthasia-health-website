import type { PageEntry } from "./types";

export const wellness: PageEntry[] = [
  {
    slug: "longevity",
    title: "Longevity Clinic in Asia — Diagnostics-First Anti-Aging Protocols",
    h1: "Longevity and anti-aging protocols in Asia, diagnostics-first",
    metaDescription:
      "Longevity clinics in Asia: biomarker panels, advanced imaging and genomic screening first, then physician-supervised protocols — NAD+, metabolic and regenerative therapies where lawful at the destination. Verified before we recommend.",
    keywords: [
      "longevity clinic Asia",
      "anti-aging protocol",
      "NAD+ therapy Asia",
      "longevity medicine China",
    ],
    answerFirst:
      "A longevity programme in Asia begins with measurement — biomarker panels, advanced imaging, VO2 and body-composition testing, genomic screening — and only then moves to physician-supervised protocols such as metabolic optimisation, NAD+ and regenerative therapies, where lawful at the destination. Forthasia Health verifies the clinic and physician oversight, and coordinates the diagnostics-to-protocol sequence.",
    blocks: [
      {
        h2: "Diagnostics before protocol",
        body: "What some call biohacking, we treat as protocol: measured, supervised, and honest about the evidence. The baseline panel defines what is worth doing and what is not.",
      },
      {
        h2: "Where protocols are delivered",
        body: "Regenerative and non-approved therapies are facilitated only inside licensed facilities and only where lawful — in China, within the Boao Lecheng pilot zone under physician supervision. Elsewhere in Asia, only where the local regulator permits.",
      },
    ],
    bullets: [
      "Baseline biomarker, imaging and genomic panel",
      "Physician-supervised protocols only",
      "Regenerative therapies only where lawful at the destination",
    ],
    faqs: [
      {
        q: "What does a longevity protocol actually involve?",
        a: "A diagnostic baseline, a physician consultation, and then a targeted plan — which may include nutrition, training, sleep and stress work, metabolic support, and, where indicated and lawful, supervised therapies. It is individualised, not a fixed package.",
      },
      {
        q: "Is this medical treatment?",
        a: "Elements are clinical and are delivered by licensed physicians and facilities. Forthasia Health coordinates and verifies; it does not diagnose, prescribe or treat.",
      },
    ],
    lastReviewed: "2026-09-08",
  },
  {
    slug: "medi-spa",
    title: "Physician-Led Medi-Spa in Asia — Bangkok, Phuket, Hainan",
    h1: "Physician-led medi-spa and aesthetic medicine in Asia",
    metaDescription:
      "Physician-led medi-spa and aesthetic medicine in Bangkok, Phuket, Hainan and a growing Asian partner network: skin health, energy-based rejuvenation, non-surgical lifting and hair restoration. We facilitate only where a licensed physician directs every procedure.",
    keywords: [
      "medi-spa Bangkok",
      "aesthetic clinic Phuket",
      "physician-led medspa Asia",
      "non-surgical aesthetics Hainan",
    ],
    answerFirst:
      "A physician-led medi-spa is one where a licensed doctor directs every procedure — skin health, laser and energy-based rejuvenation, non-surgical lifting, hair restoration. Forthasia Health facilitates aesthetic medicine in Bangkok, Phuket, Hainan and a growing Asian partner network, and only at facilities that meet that bar. It is the line we will not cross, and the reason our list is short.",
    blocks: [
      {
        h2: "What we verify",
        body: "Practitioner licensing, device authenticity and servicing, consent practice, hygiene, and emergency readiness — the same TEKMERIS GLOBAL discipline used for hospitals, adapted to aesthetic scope.",
      },
      {
        h2: "How it pairs with a journey",
        body: "Aesthetic work is often added to a recovery or longevity trip. We sequence it so nothing compromises healing from another procedure.",
      },
    ],
    bullets: [
      "A licensed physician directs every procedure",
      "Device authenticity and servicing verified",
      "No paid listings, no commissions",
    ],
    faqs: [
      {
        q: "Why is the medi-spa list so short?",
        a: "Because we only facilitate facilities where a licensed physician directs care and the verification holds up on site. Most do not, so most are not on the list.",
      },
      {
        q: "Can I combine aesthetics with surgery or a longevity protocol?",
        a: "Usually, with sequencing. We plan the order with your treating clinicians so aesthetic procedures do not interfere with recovery.",
      },
    ],
    lastReviewed: "2026-09-08",
  },
  {
    slug: "retreats",
    title: "Health Retreats & Recovery Resorts in Asia — Hainan, Phuket, Bali, Kerala",
    h1: "Health retreats and tropical recovery across Asia",
    metaDescription:
      "Five-star health retreats and recovery resorts across Asia: Hainan's resort coast, Phuket and Samui, Bali, and Kerala's Ayurvedic coast. Post-surgical recovery packages, executive resets, sleep and stress programmes — verified before we recommend.",
    keywords: [
      "health retreat Bali",
      "recovery resort Asia",
      "Kerala Ayurveda retreat",
      "post-surgery recovery Phuket",
    ],
    answerFirst:
      "A recovery retreat is a five-star facility where recovery is the programme, not an amenity: supervised physiotherapy, nutrition, sleep and stress work in a restorative setting. Forthasia Health facilitates retreats on Hainan's resort coast, in Phuket and Samui, Bali, and Kerala's Ayurvedic coast — matched to what you are recovering from and verified before we recommend.",
    blocks: [
      {
        h2: "Programmes, not packages",
        body: "Post-surgical recovery, executive burnout resets, sleep and stress programmes — each with a defined clinical or wellness lead, a plan, and measurable checkpoints.",
      },
      {
        h2: "Matched to the recovery",
        body: "A joint-replacement recovery has different needs from a post-oncology reset. We match the facility, the climate and the programme to your case, in consultation with your treating team.",
      },
    ],
    bullets: [
      "Recovery is the programme, with a clinical or wellness lead",
      "Hainan, Phuket, Samui, Bali, Kerala",
      "Matched to what you are recovering from",
    ],
    faqs: [
      {
        q: "Is a recovery retreat medically supervised?",
        a: "The clinical elements are, by licensed practitioners at the facility. The level of supervision depends on the programme; we match it to your needs and confirm it before you book.",
      },
      {
        q: "When can I travel to a retreat after surgery?",
        a: "It depends on the procedure and your surgeon's clearance. We plan the timing with your treating team so travel and activity are safe.",
      },
    ],
    lastReviewed: "2026-09-08",
  },
];

export const wellnessSlugs = wellness.map((w) => w.slug);
