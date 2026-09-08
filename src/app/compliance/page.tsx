import type { Metadata } from "next";
import {
  Callout,
  CTAButton,
  PageHero,
  PullQuote,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Compliance & Ethics",
  description:
    "Forthasia Health is a logistical, translational, and verification facilitator. We do not diagnose, treat, or prescribe. Our compliance boundaries in plain language.",
};

const rules = [
  {
    title: "We are a facilitator, not a provider",
    body: "Forthasia Health is a logistical, translational, and verification facilitator. We do not diagnose, treat, or prescribe. All clinical care is delivered by licensed hospitals and physicians in their own jurisdictions.",
  },
  {
    title: "No efficacy claims",
    body: "We never guarantee outcomes. We describe access to advanced therapies, the result of a viability assessment, and the availability of specialist consultation — nothing more.",
  },
  {
    title: "Data custody",
    body: "Protected health information moves only through the HIIC Vault — client-side AES-256-GCM encryption, encrypted at rest, dynamic watermarking on in-portal viewing, and an immutable access log. Never by email, WeChat, or WhatsApp.",
  },
  {
    title: "Symbolism",
    body: "We use the single-serpent Rod of Asclepius — the symbol of healing. We never use the Caduceus, whose two snakes and wings signify commerce.",
  },
  {
    title: "Visas",
    body: "We advise and coordinate; embassies decide. We prepare invitation letters and paperwork, but the sovereign decision on entry rests with the relevant authorities.",
  },
  {
    title: "Purge timers",
    body: "Protected health information is scheduled for automatic purge at engagement close plus 90 days, subject to any legal retention obligation.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance & Ethics"
        title="What we do — and what we will never claim to do"
        lede="Precision here protects patients. These boundaries are not fine print; they are the operating model."
      />

      <Section>
        <PullQuote>
          Forthasia Health is a logistical, translational, and verification
          facilitator. We do not diagnose, treat, or prescribe.
        </PullQuote>
      </Section>

      <Section tone="dim">
        <SectionHeading eyebrow="The rules" title="Six boundaries" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rules.map((r) => (
            <div
              key={r.title}
              className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6"
            >
              <p className="font-card-title text-[var(--color-ink-umber)]">
                {r.title}
              </p>
              <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Callout tone="ionian" title="Operating entity">
          Operated by Haikou Meixi International Trade Co., Ltd. Registered in the
          PRC (91460100MA5TH9296D). FORTHASIA HEALTH is a facilitation and
          consulting entity, not a medical provider.
        </Callout>
        <div className="mt-8 flex flex-wrap gap-4">
          <CTAButton href="/consultation" variant="outline">
            Contact the compliance desk
          </CTAButton>
          <CTAButton href="/standard" variant="ghost">
            How we verify facilities →
          </CTAButton>
        </div>
        <p className="data-tag mt-8 text-[var(--color-bronze)]">
          Terms of Service, Privacy Policy, and the Patient Facilitation
          Agreement are provided during secure intake and are pending final
          counsel review.
        </p>
      </Section>
    </>
  );
}
