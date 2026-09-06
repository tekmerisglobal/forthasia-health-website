import type { Metadata } from "next";
import {
  Callout,
  CTAButton,
  ImageSlot,
  PageHero,
  PullQuote,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "The Founder",
  description:
    "Konstantino “Tino” Dimitropoulos — Registered Chinese-Medicine Practitioner & Naturopath (Australia, AHPRA/ANTA), 30+ years across Asian health systems.",
};

const registrations = [
  "Registered Chinese-Medicine Practitioner & Naturopath — Australia (AHPRA / ANTA)",
  "30+ years across Asian health systems",
  "Former General Manager, Summit Club — an exclusive Beijing VIP club",
  "Training under WHO initiatives with Prof. Dr. Sir Anton Jayasuriya (Sri Lanka)",
  "Hospital internships in China; study at Wudang Shan",
];

export default function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="The Founder"
        title={"Konstantino “Tino” Dimitropoulos"}
        lede="Thirty years bridging Greek lineage and Eastern integrated medicine — and the person accountable for the Forthasia standard."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Registrations — stated factually"
              title="Credentials, not a diploma gallery"
            />
            <ul className="mt-6 space-y-3">
              {registrations.map((r) => (
                <li
                  key={r}
                  className="flex gap-3 text-sm text-[var(--color-ink-soft)]"
                >
                  <span aria-hidden className="text-[var(--color-olympic-gold)]">
                    —
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ImageSlot
              asset={{
                tag: "OWN",
                brief: "Founder portrait, Hainan beach, golden hour — dignified, candid, no white coat.",
                alt: "Founder portrait, Hainan beach, golden hour",
                caption: "The walk continues.",
              }}
              aspect="square"
            />
            <ImageSlot
              tone="cool"
              asset={{
                tag: "OWN",
                brief: "Olive grove harvest, the family grove in Greece.",
                alt: "Olive grove harvest",
                caption: "Every autumn, the medicine is harvested.",
              }}
              aspect="square"
            />
          </div>
        </div>
      </Section>

      <Section tone="dim">
        <PullQuote cite="The Wall Rule">
          The full wall of credentials is kept in a drawer in Haikou. Our
          standard is verified by our outcomes, not our frames.
        </PullQuote>
      </Section>

      <Section>
        <Callout tone="ionian" title="Scope">
          The founder&rsquo;s registrations are held in Australia. Forthasia
          Health does not provide clinical care; it coordinates, translates, and
          verifies. Treatment is delivered by licensed hospitals in their own
          jurisdictions.
        </Callout>
        <div className="mt-8">
          <CTAButton href="/consultation" variant="outline">
            Request a conversation with the team
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
