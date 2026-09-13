import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  Callout,
  Card,
  FactsBand,
  PageHero,
  PullQuote,
  Section,
  SectionHeading,
} from "@/components/ui";
import { SITE_URL } from "@/lib/site";

/*
 * SOURCE OF TRUTH: FH-FACILITY-STANDARD-DRAFT-v0.1-2026-09-14.md (project
 * root). Nothing on this page may go beyond that file — no criteria, tiers,
 * timeframes or claims it does not contain.
 *
 * Sections the source marks [PROVISIONAL] are NOT approved and do not render
 * while PROVISIONAL_APPROVED is false:
 *   - §1  the commission-disclosure paragraph, and the "ForthAsia is paid by
 *         the facilities..." rationale sentence that would make that
 *         disclosure in practice
 *   - §4B the wellness / retreat / spa annex
 *   - §6  "the line for the page"
 * Still open per the source's §7 (not rendered, for the founder): sign-off on
 * 4B, the commission disclosure and §6; the re-attendance cycle length
 * (not set — do not print a number).
 */
const PROVISIONAL_APPROVED = false;

export const metadata: Metadata = {
  title: "The Facility Standard",
  description:
    "How ForthAsia Health chooses a facility, and what our verification does and does not mean. Verification is carried out by TEKMERIS GLOBAL — a witness, not a regulator. No facility has completed the standard: everything is IN BUILD.",
  alternates: { canonical: `${SITE_URL}/the-standard` },
};

/** §3 — the four stages, in order. Verbatim. */
const stages = [
  {
    n: "Stage 0",
    title: "Existence",
    lead: "Is the organisation real, and is it the organisation it says it is?",
    points: [
      "Company registration confirmed against the national company registry, by registration number.",
      "For a medical facility: institutional registration confirmed against the national health registry.",
      "For named practitioners: registration confirmed, and confirmed as registered at that institution — not merely registered somewhere. A practitioner’s name appearing on a licence is not the same as that practitioner working there.",
    ],
    close:
      "A facility that cannot be found on a public registry does not proceed. There is no discretion at this stage and no exception has ever been granted.",
  },
  {
    n: "Stage 1",
    title: "Documentary",
    lead: "What the facility presents about itself, recorded as presented:",
    points: [
      "Operating licence and its stated scope · accreditations held and by whom · professional indemnity and liability cover · complaints and incident policy · patient or guest records and continuity practice · pricing and what is included.",
    ],
    close:
      "Nothing in this stage is a TEKMERIS finding. It is a record of what the facility said about itself, dated, so that a later contradiction is visible.",
  },
  {
    n: "Stage 2",
    title: "Attendance",
    lead: "A TEKMERIS person attends the facility on a stated date and records what was observed. Announced, with the operator’s knowledge, so the operator sees the same evidence and can dispute it.",
    points: ["The annex criteria below are applied here."],
  },
  {
    n: "Stage 3",
    title: "Currency",
    lead: "",
    points: [
      "The verification carries the date it was earned, and that date is shown to the client.",
      "It lapses on cycle. A facility that is not re-attended stops being current. It does not quietly remain verified.",
      "The right to withdraw is retained. A verification that cannot be withdrawn is permanently lent.",
    ],
  },
];

/** §4A — medical and clinical facilities. Verbatim. */
const medicalCriteria = [
  "Institutional registration and stated scope, registry-confirmed",
  "Named practitioners registered, and registered at that institution",
  "International patient handling: who owns the case, in what language, with what continuity",
  "Escalation and emergency pathway — what happens when something goes wrong, and who is on call",
  "Infection control and facility condition, as observed on the day",
  "Records: what the client receives, in what form, in what language, and whether it travels home with them",
  "Pricing transparency: what is quoted, what is excluded, and what a complication costs",
  "Consent practice: whether the client is given a real opportunity to understand and decline",
];

/** §5 — in full, unsoftened. Verbatim. */
const neverClaims = [
  {
    lead: "We do not certify.",
    body: "No facility is “ForthAsia certified” or “TEKMERIS certified”. Certification implies an accreditation we do not hold.",
  },
  {
    lead: "We do not verify licensing as a regulator.",
    body: "We confirm registration against a public registry and we record what a facility presents. We cannot compel a document.",
  },
  { lead: "We do not assess clinical judgement or treatment outcomes.", body: "" },
  { lead: "We do not rank facilities", body: "or publish league tables." },
  {
    lead: "We do not accept payment contingent on a facility passing,",
    body: "in any form, from anyone.",
  },
  {
    lead: "A verification is a record of a date, not a guarantee of a future.",
    body: "It says what was true when we looked.",
  },
];

export default function TheStandardPage() {
  return (
    <>
      <PageHero
        eyebrow="The Facility Standard · In Build"
        title="How we choose a facility, and what our verification does and does not mean."
        lede="ForthAsia Health’s operating promise is “We don’t refer. We verify.” A promise like that is worth nothing unless the standard behind it is written down, published, and applied the same way to every facility."
      >
        <Callout tone="terracotta" title="Status · In Build">
          At the date of this draft <strong>no facility has completed the
          standard.</strong> Every destination and facility on the site renders{" "}
          <span className="data-tag">IN BUILD</span>. That is not a weakness to
          hide — a service that publishes its standard before it has a single
          client is making the only claim it is entitled to make, and making it
          honestly.
          <span className="mt-3 block font-medium text-[var(--color-ink-umber)]">
            Claims about the standard are present tense. Claims about the
            network stay conditional until an agreement is signed.
          </span>
        </Callout>
      </PageHero>

      {/* §1 */}
      <Section>
        <Reveal>
          <SectionHeading eyebrow="Section 1" title="Who does the verifying" />
          <div className="mt-6 max-w-2xl space-y-5 text-[var(--color-ink-soft)]">
            <p>
              <strong className="text-[var(--color-ink-umber)]">
                ForthAsia Health does not verify facilities itself.
              </strong>{" "}
              Verification is carried out by TEKMERIS GLOBAL, a separate company
              with a separate brand and a separate discipline, under its
              facility annexes.
            </p>
          </div>
          <div className="mt-10">
            <PullQuote cite="Verification is a precondition of referral, never a reward for it.">
              TEKMERIS verifies first. ForthAsia refers second.
            </PullQuote>
          </div>
          <div className="mt-10 max-w-2xl space-y-5 text-[var(--color-ink-soft)]">
            <p>
              This separation is structural, not cosmetic.
              {PROVISIONAL_APPROVED ? (
                <>
                  {" "}
                  ForthAsia is paid by the facilities it introduces clients to.
                  A concierge that vouches for the places it earns from is not
                  credible, and no wording repairs that. So the assessment sits
                  in a different company, under fixed fees.
                </>
              ) : null}
            </p>
            <p className="font-medium text-[var(--color-ink-umber)]">
              Two rules that make the separation real:
            </p>
          </div>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "The TEKMERIS fee is fixed and paid whatever the outcome. Never a share of ForthAsia’s commission, never contingent on a facility passing.",
              "The two are separable in both directions. ForthAsia can decline a verified facility. TEKMERIS can verify a facility ForthAsia never uses. If the two lists were identical, the independence would be decorative.",
            ].map((rule, i) => (
              <li key={rule.slice(0, 30)}>
                <Card className="h-full">
                  <span className="data-tag text-[var(--color-olympic-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 copy-sm text-[var(--color-ink-soft)]">{rule}</p>
                </Card>
              </li>
            ))}
          </ol>
          {PROVISIONAL_APPROVED ? (
            <div className="mt-8">
              <Callout tone="gold" title="Commission disclosure">
                ForthAsia is paid by the facilities it introduces clients to. The
                two rules above are what keep that from touching the
                verification.
              </Callout>
            </div>
          ) : null}
        </Reveal>
      </Section>

      {/* §2 */}
      <Section tone="dim">
        <Reveal>
          <SectionHeading
            eyebrow="Section 2"
            title="The governing principle — witness, not regulator"
            lede="TEKMERIS attends and records what it observed on a stated date. It does not certify, and it does not audit anything it has no authority to demand."
          />
          <p className="mt-6 max-w-2xl text-[var(--color-ink-soft)]">
            This single sentence governs everything below, and it is the reason
            the standard is defensible.
          </p>
          <ul className="mt-6 max-w-2xl space-y-3">
            {[
              <>
                We are <strong>not</strong> a government authority. We cannot compel
                a licence, a log, or a record.
              </>,
              <>
                We confirm a facility’s <strong>registration</strong> against the
                relevant <strong>public registry</strong>. That is a matter of
                public record and anyone can check our work.
              </>,
              <>
                Everything a facility hands us is recorded{" "}
                <strong>as presented by the facility</strong>, never as verified
                by us.
              </>,
              <>
                What our own person saw, on the day, is recorded as{" "}
                <strong>observed</strong>.
              </>,
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[var(--color-ink-soft)]">
                <span aria-hidden className="text-[var(--color-olympic-gold)]">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-[var(--color-ink-soft)]">
            The distinction between <em>presented</em>,{" "}
            <em>registry-confirmed</em> and <em>observed</em> runs through every
            report. It is the difference between a standard that survives a
            lawyer and one that does not.
          </p>
        </Reveal>
      </Section>

      {/* §3 */}
      <Section>
        <SectionHeading
          eyebrow="Section 3"
          title="The four stages"
          lede="Every facility, medical or wellness, passes through the same four stages in the same order."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {stages.map((s) => (
            <Reveal as="li" key={s.n}>
              <Card className="h-full">
                <span className="data-tag text-[var(--color-olympic-gold)]">
                  {s.n}
                </span>
                <p className="font-card-title mt-2 text-[var(--color-ink-umber)]">
                  {s.title}
                </p>
                {s.lead ? (
                  <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">{s.lead}</p>
                ) : null}
                <ul className="mt-3 space-y-2">
                  {s.points.map((p) => (
                    <li key={p.slice(0, 40)} className="flex gap-2 copy-sm text-[var(--color-ink-soft)]">
                      <span aria-hidden className="text-[var(--color-olympic-gold)]">
                        —
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {s.close ? (
                  <p className="mt-3 copy-sm font-medium text-[var(--color-ink-umber)]">
                    {s.close}
                  </p>
                ) : null}
              </Card>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* §4 */}
      <Section tone="dim">
        <Reveal>
          <SectionHeading
            eyebrow="Section 4"
            title="The annex criteria"
            lede="The four stages never change. What changes between facility types is the criteria applied at Stage 2."
          />
          <p className="eyebrow mt-10">4A · Medical and clinical facilities</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {medicalCriteria.map((c) => (
              <li key={c.slice(0, 40)} className="flex gap-2 copy-sm text-[var(--color-ink-soft)]">
                <span aria-hidden className="text-[var(--color-olympic-gold)]">
                  —
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Callout tone="ionian" title="What is never assessed">
              Clinical judgement, treatment efficacy, or whether a given therapy
              is the right one for a given person.{" "}
              <strong>Physicians decide. We facilitate.</strong> No ForthAsia or
              TEKMERIS document ever rates a doctor’s medicine.
            </Callout>
          </div>
          {PROVISIONAL_APPROVED ? (
            <p className="eyebrow mt-10">4B · Wellness properties, retreats and spas</p>
          ) : null}
        </Reveal>
      </Section>

      {/* §5 — in full, unsoftened. */}
      <Section tone="ink">
        <Reveal>
          <SectionHeading
            eyebrow="Section 5"
            title="What this standard never claims"
            onDark
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {neverClaims.map((c) => (
              <li key={c.lead}>
                <Card onDark className="h-full">
                  <p className="text-[var(--color-porcelain)]">
                    <strong>{c.lead}</strong>
                    {c.body ? <> {c.body}</> : null}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Status — from §0 and §7. Only what a client needs to know; the founder's sign-off list stays in the source. */}
      <Section>
        <Reveal>
          <FactsBand
            label="Status · In Build"
            facts={[
              "No facility has completed the standard. Everything renders IN BUILD.",
              "Registry routes exist for China. India and Thailand are not yet researched for medical institutions, so the standard is currently deliverable in China only.",
              "The re-attendance cycle length is not yet set.",
              "Claims about the network stay conditional until an agreement is signed.",
            ]}
          />
          {PROVISIONAL_APPROVED ? (
            <div className="mt-10">
              <PullQuote cite="Everything else is somebody’s brochure.">
                We go and look. We write down what we saw, and the date we saw it.
              </PullQuote>
            </div>
          ) : null}
        </Reveal>
      </Section>
    </>
  );
}
