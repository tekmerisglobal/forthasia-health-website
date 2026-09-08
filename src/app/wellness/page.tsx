import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Callout, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Wellness & Retreats",
  description:
    "The Wellness Continuum — physician-led medi-spa, longevity protocols, health retreats and five-star recovery across Asia. Verified before we recommend.",
};

const cards = [
  {
    title: "Medi-Spa & Aesthetic Medicine",
    body: "Skin health, laser and energy-based rejuvenation, non-surgical lifting, hair restoration, dental aesthetics — in Bangkok, Phuket, Hainan, and a growing partner network across Asia. We facilitate only facilities where a licensed physician directs every procedure. It is the line we will not cross, and the reason our list is short.",
  },
  {
    title: "Longevity & Anti-Aging Protocols",
    body: "Diagnostics first: biomarker panels, advanced imaging, VO₂ and body-composition testing, genomic screening. Then physician-supervised protocols — metabolic optimisation, NAD+ and regenerative therapies where lawful at the destination. What some call biohacking, we call protocol: measured, supervised, and honest about the evidence.",
  },
  {
    title: "Health Retreats & Tropical Recovery",
    body: "Five-star facilities where recovery is the programme: Hainan's resort coast, Phuket and Samui, Bali, Kerala's Ayurvedic coast. Post-surgical recovery packages, executive burnout resets, sleep and stress programmes. Recover where the air is medicine.",
  },
  {
    title: "Lifestyle & Prevention",
    body: "DNA-guided nutrition, qigong and taiji lineage programmes, executive prevention screens. The quiet end of the continuum — the one that keeps you out of the other three.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <PageHero
        eyebrow="The Wellness Continuum"
        title="Medicine Restores. Wellness Renews."
        lede="Not every journey begins with illness. Some begin with a decision: to add life to the years, not only years to the life. Whether you are recovering from surgery, working back from a diagnosis, or simply buying back decades of pain-free, high-energy living — across Asia we facilitate physician-led medi-spa, longevity protocols, health retreats and five-star recovery. Verified before we recommend, as always."
      />

      <Section>
        <SectionHeading eyebrow="Four movements" title="One continuum, from renewal to prevention" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title}>
              <div className="h-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
                <span className="data-tag text-[var(--color-olympic-gold)]">
                  {`0${i + 1}`}
                </span>
                <p className="font-card-title mt-2 text-[var(--color-ink-umber)]">
                  {c.title}
                </p>
                <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="data-tag mt-6 text-[var(--color-bronze)]">
          Destinations beyond Hainan and Bangkok are partner-network-in-build —
          named only once an agreement and a TEKMERIS GLOBAL audit are complete.
        </p>
      </Section>

      {/* Partner band */}
      <Section tone="dim">
        <Callout tone="ionian" title="How facilities enter the network">
          For facilities across Asia: we promote and partner — but only after
          verification. Wellness and medi-spa facilities enter the network
          through the same TEKMERIS GLOBAL discipline, adapted to their scope:
          practitioner licensing, hygiene and device authenticity, consent
          practice, emergency readiness. No paid listings. No commissions.{" "}
          <a
            href="mailto:partners@forthasiahealth.com"
            className="text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
          >
            partners@forthasiahealth.com
          </a>
        </Callout>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:longevity@forthasiahealth.com"
            className="btn-label inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-ink-umber)] px-6 text-[var(--color-porcelain)] transition-colors hover:bg-[var(--color-ionian)]"
          >
            Begin a Wellness Consultation
          </a>
          <a
            href="mailto:partners@forthasiahealth.com"
            className="btn-label inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full border border-[var(--color-bronze)] px-6 text-[var(--color-ink-umber)] transition-colors hover:border-[var(--color-olympic-gold)] hover:text-[var(--color-ionian)]"
          >
            Partner With Us
          </a>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-bronze)]">
          Wellness and retreat services are facilitated as consulting and
          coordination; anything clinical is delivered only by licensed
          facilities and practitioners. Protocols are offered only where lawful
          at the destination. No outcome is promised or guaranteed. Verification
          covers licensing, facility standards and compliance processes as at
          the audit date; it is not a guarantee of individual results.
        </p>
      </Section>
    </>
  );
}
