import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  Callout,
  Card,
  CTAButton,
  FactsBand,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { SITE_URL } from "@/lib/site";

/*
 * SOURCE OF TRUTH: FH-FACILITY-STANDARD-DRAFT-v0.1-2026-09-14.md (project
 * root). The draft is the page. Nothing here goes beyond that file except
 * the founder-approved hero lede, independence band, NETWORK STATUS line
 * and scope paragraph (reconciliation, 2026-09-14).
 *
 * Register: witness, not regulator. No pass/fail badges, no "certified".
 * A verification is a record with a date.
 *
 * Sections the source marks [PROVISIONAL] are NOT approved and do not
 * render while PROVISIONAL_APPROVED is false:
 *   - §1  the two separation rules and the marketing-fee-disclosure paragraph
 *         (internal; Rule 1's gloss reads "never a share of ForthAsia's
 *         introduction (marketing) fees")
 *   - §4B the wellness / retreat / spa annex
 *   - §6  "the line for the page"
 * Still open per the source's §7: the re-attendance cycle length (not set —
 * do not print a number).
 */
const PROVISIONAL_APPROVED = false;

export const metadata: Metadata = {
  title: "The Forthasia Standard",
  description:
    "We Don't Refer. We Verify. How we choose a facility and what our verification does and does not mean — witness, not regulator; a record with a date, not a certificate. Verification by TEKMERIS GLOBAL, our independent verification partner.",
  alternates: { canonical: `${SITE_URL}/standard` },
};

const NETWORK_STATUS =
  "NETWORK STATUS — China: Standard deliverable now; per-facility records publish as they close. Thailand & India: not yet researched at facility level; pathways open on request, and only after the specific facility has been researched and attended under the Standard. No facility anywhere is represented as audited before its record closes.";

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

export default function StandardPage() {
  return (
    <>
      <PageHero
        eyebrow="The Forthasia Standard"
        title="We Don't Refer. We Verify."
        lede="Most facilitators sell introductions. We are paid to make ours defensible: a written record before the introduction, a disclosed fee after it, and a steward on the ground throughout."
      >
        <p className="data-tag max-w-3xl text-[var(--color-bronze)]">{NETWORK_STATUS}</p>
        <p className="mt-6 max-w-2xl text-[var(--color-ink-soft)]">
          The Standard is deliverable today in China — Hainan and the mainland.
          Thailand and India enter the same regime facility-by-facility, on
          request; until a facility&rsquo;s record closes, it is not represented
          as audited, verified, or in-network.
        </p>
        <div className="mt-8">
          <CTAButton href="/consultation">Request a verification review</CTAButton>
        </div>
      </PageHero>

      {/* Independence band — who does the verifying, and what money can and cannot do. */}
      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[color-mix(in_srgb,var(--color-olympic-gold)_92%,white)]">
            Independence Is The Product
          </p>
          <p className="mt-4 text-[var(--color-porcelain)]">
            TEKMERIS GLOBAL attends every hospital, healthcare centre and clinic
            the same way — registry checks at source, on-site attendance, a
            written record of what was observed — for one client: us.
            Verification here is a record, not a certificate: it certifies
            nothing and guarantees nothing.
          </p>
          <p className="mt-4 text-[var(--color-porcelain)]">
            No facility can buy a place in our network, and no fee — ours or
            anyone&rsquo;s — changes what the record says.
          </p>
          <p className="mt-4 text-[color-mix(in_srgb,var(--color-porcelain)_82%,transparent)]">
            Some facilities pay ForthAsia Health a disclosed marketing fee when
            we introduce a patient. It is never added to your medical bill and
            never influences clinical matching — the match is decided and
            documented before any commercial term is considered.
          </p>
        </div>
      </Section>

      {/* §2 */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="The governing principle"
            title="Witness, not regulator"
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
                We confirm a facility&rsquo;s <strong>registration</strong> against
                the relevant <strong>public registry</strong>. That is a matter of
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
      <Section tone="dim">
        <SectionHeading
          eyebrow="The four stages"
          title="Every facility, in the same order"
          lede="Every facility, medical or wellness, passes through the same four stages in the same order."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {stages.map((s) => (
            <Reveal as="li" key={s.n}>
              <Card className="h-full">
                <span className="data-tag text-[var(--color-olympic-gold)]">{s.n}</span>
                <p className="font-card-title mt-2 text-[var(--color-ink-umber)]">{s.title}</p>
                {s.lead ? (
                  <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">{s.lead}</p>
                ) : null}
                <ul className="mt-3 space-y-2">
                  {s.points.map((p) => (
                    <li key={p.slice(0, 40)} className="flex gap-2 copy-sm text-[var(--color-ink-soft)]">
                      <span aria-hidden className="text-[var(--color-olympic-gold)]">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {s.close ? (
                  <p className="mt-3 copy-sm font-medium text-[var(--color-ink-umber)]">{s.close}</p>
                ) : null}
              </Card>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* §4 */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="The annex criteria"
            title="What is applied at Stage 2"
            lede="The four stages never change. What changes between facility types is the criteria applied at Stage 2."
          />
          <p className="eyebrow mt-10">4A · Medical and clinical facilities</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {medicalCriteria.map((c) => (
              <li key={c.slice(0, 40)} className="flex gap-2 copy-sm text-[var(--color-ink-soft)]">
                <span aria-hidden className="text-[var(--color-olympic-gold)]">—</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Callout tone="ionian" title="What is never assessed">
              Clinical judgement, treatment efficacy, or whether a given therapy
              is the right one for a given person.{" "}
              <strong>Physicians decide. We facilitate.</strong> No ForthAsia or
              TEKMERIS document ever rates a doctor&rsquo;s medicine.
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
          <SectionHeading eyebrow="What this standard never claims" title="Six things we will not say" onDark />
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

      {/* Status band — from the source's §0 and §7, in the approved wording. */}
      <Section>
        <Reveal>
          <FactsBand
            label="Status"
            facts={[
              "China: the Standard is deliverable now; per-facility records publish as they close.",
              "Thailand and India: not yet researched at facility level; pathways open on request, and only after the specific facility has been researched and attended under the Standard.",
              "No facility anywhere is represented as audited, verified, or in-network before its record closes.",
              "The re-attendance cycle length is not yet set.",
            ]}
          />
          <div className="mt-10 flex justify-center">
            <CTAButton href="/journey" variant="outline">
              See the 4-phase journey
            </CTAButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
