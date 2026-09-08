import type { Metadata } from "next";
import { IntakeForm } from "@/components/IntakeForm";
import { RodOfAsclepius } from "@/components/RodOfAsclepius";
import { Callout, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Secure Clinical Intake",
  description:
    "Your journey begins in confidence. ForthAsia Health operates a secure, digital-first intake environment — no direct telephone lines, all inquiries and records handled through encrypted channels.",
};

const steps = [
  ["Account creation", "Name, email, passport, WhatsApp / WeChat. The system assigns a case reference — FTH-2026-XXX."],
  ["E-sign paperwork", "Medical Records Authorization and the Patient Facilitation Agreement."],
  ["Concierge retainer", "50% retainer via Stripe or Alipay to open the engagement."],
  ["Vault unlock", "Upload links with 72-hour expiry, a three-device limit, and TLS 1.3."],
];

const routing = [
  {
    title: "VIP Medical Concierge & Patient Routing",
    email: "concierge@forthasiahealth.com",
    body: "For international patients seeking access to Hainan's Boao Lecheng zone, oncology routing, and executive health screenings.",
  },
  {
    title: "Longevity, Anti-Aging & DNA Nutrition",
    email: "longevity@forthasiahealth.com",
    body: "For inquiries regarding neurogenomic eating plans, regenerative protocols, and zone-legal longevity therapies.",
  },
  {
    title: "B2B Hospital & Overseas Clinic Partnerships",
    email: "partners@forthasiahealth.com",
    body: "For international clinics, medical tourism agencies, and hospital directors seeking to establish referral pipelines or QA/QC verification.",
  },
  {
    title: "Secure Document Submission (Retained Clients Only)",
    email: "intake@forthasiahealth.com",
    body: "Strictly for submitting signed Medical Privacy & Consent Forms. (Do not attach medical records to this address.)",
  },
];

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Secure Clinical Intake"
        title="Your Journey Begins in Confidence."
        lede="To protect the privacy of our clients and the integrity of our clinical matching process, ForthAsia Health operates a secure, digital-first intake environment. We do not publish direct telephone lines. All medical inquiries and records are handled exclusively through our encrypted channels."
      />

      {/* Section A: the primary funnel */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Section A"
              title="Request a Private Consultation"
              lede="Complete the preliminary inquiry below. Our clinical coordination team reviews all submissions within 24 hours (Hainan Standard Time, UTC+8). If your case aligns with our facilitation parameters, we will issue a secure, encrypted portal link for you to upload your medical records."
            />
            <div className="mt-8">
              <IntakeForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain-dim)] p-6">
              <div className="flex items-center gap-3">
                <RodOfAsclepius className="h-8 w-8 text-[var(--color-olympic-gold)]" />
                <p className="font-card-title text-[var(--color-ink-umber)]">
                  What happens after this
                </p>
              </div>
              <ol className="mt-5 space-y-4">
                {steps.map(([t, d], i) => (
                  <li key={t} className="flex gap-3">
                    <span className="data-tag text-[var(--color-olympic-gold)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block copy-sm font-medium text-[var(--color-ink-umber)]">
                        {t}
                      </span>
                      <span className="block copy-sm text-[var(--color-ink-soft)]">
                        {d}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <Callout tone="terracotta" title="Hard rule">
              Zero protected health information by email, WeChat, or WhatsApp.
              Records are accepted only through the HIIC Vault, after your case
              reference is issued.
            </Callout>
          </aside>
        </div>
      </Section>

      {/* Section B: direct departmental routing */}
      <Section tone="dim">
        <SectionHeading
          eyebrow="Section B"
          title="Direct Departmental Routing"
          lede="For targeted inquiries, please use the appropriate secure channel below. Please note: never send raw, unencrypted medical records or Protected Health Information (PHI) via standard email. Use the secure portal link provided to you after your initial consultation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {routing.map((r) => (
            <div
              key={r.email}
              className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6"
            >
              <p className="font-card-title text-[var(--color-ink-umber)]">{r.title}</p>
              <a
                href={`mailto:${r.email}`}
                className="data-tag mt-2 block text-[var(--color-ionian)] transition-colors hover:text-[var(--color-olympic-gold)]"
              >
                {r.email}
              </a>
              <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
