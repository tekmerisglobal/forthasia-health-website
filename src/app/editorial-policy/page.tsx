import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { SITE_URL } from "@/lib/site";

/**
 * Reserved token. Render the *title* only until the Medical Director's
 * consent and bio land — then set the name here and it appears everywhere
 * below. The raw token never reaches the page.
 */
const MEDICAL_DIRECTOR_NAME: string | null = null;
const REVIEWER = MEDICAL_DIRECTOR_NAME ?? "Medical Director";

export const metadata: Metadata = {
  title: "Editorial & Medical-Review Policy",
  description:
    "How ForthAsia Health writes about medicine: sourced regulatory facts, facility-confirmed operational facts, labelled illustrative data, Medical Director review, no efficacy testimonials, no outcome guarantees.",
  alternates: { canonical: `${SITE_URL}/editorial-policy` },
};

/** Verbatim principles. */
const principles = [
  "Every clinical statement on this site is either a verifiable regulatory fact with source and date, a facility-confirmed operational fact, or clearly labelled illustrative public data.",
  "Clinical content is reviewed by our Medical Director before publication and re-reviewed every 12 months or upon regulatory change, whichever is sooner.",
  "We publish no efficacy testimonials, no before-and-after imagery, and no outcome guarantees.",
  "We are facilitators: we do not diagnose, treat or prescribe. The treating physician decides, always.",
  "Errors are corrected promptly, with a dated correction note at the foot of the affected page.",
  "Content is written by the ForthAsia Health editorial team; medical review by our Medical Director.",
  "Sources are primary: Hainan FTP regulations, pilot-zone announcements, and peer-reviewed literature for wellness claims.",
  "Conflicts: facilities may pay us a disclosed marketing fee; it never influences clinical content. Verification is flat-fee via TEKMERIS GLOBAL and is never for sale.",
];

/**
 * Review log — the four clinical page groups. Dates are filled in only when
 * a review has actually happened; nothing here asserts a review that hasn't.
 */
const reviewLog = [
  { page: "Treatments — hub and six pathway pages", href: "/treatments" },
  { page: "Peptide therapy — page and legal notice", href: "/peptides" },
  { page: "Wellness — hub and three pages", href: "/wellness" },
  { page: "Nutrition & DNA", href: "/nutrition" },
].map((r) => ({
  ...r,
  reviewer: REVIEWER,
  date: "Initial review pending",
  next: "12 months from sign-off, or on regulatory change",
}));

export default function EditorialPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial Standards"
        title="How we write about medicine."
        lede="Eight principles that govern every clinical statement on this site, and a public log of when each clinical page was last reviewed."
      />

      {/* Same full-width text-block pattern as The Matching Doctrine on /philosophy. */}
      <Section tone="dim">
        <Reveal>
          <SectionHeading eyebrow="The principles" title="What we hold ourselves to" />
          <ol className="mt-6 max-w-2xl space-y-5 text-[var(--color-ink-soft)]">
            {principles.map((p, i) => (
              <li key={p.slice(0, 40)} className="flex gap-4">
                <span className="data-tag shrink-0 text-[var(--color-olympic-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Review log"
            title="When each clinical page was last reviewed"
            lede="Reviewer, date and next scheduled review for every page that makes a clinical statement. A date appears here only once a review has actually taken place."
          />
          <div className="mt-8 overflow-x-auto rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)]">
            <table className="w-full min-w-[640px] text-left copy-sm">
              <thead>
                <tr className="border-b border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)]">
                  {["Page", "Reviewer", "Date", "Next review"].map((h) => (
                    <th key={h} className="eyebrow px-[22px] py-4 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reviewLog.map((r) => (
                  <tr
                    key={r.href}
                    className="border-b border-[color-mix(in_srgb,var(--color-bronze)_18%,transparent)] last:border-b-0"
                  >
                    <td className="px-[22px] py-4">
                      <Link
                        href={r.href}
                        className="text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
                      >
                        {r.page}
                      </Link>
                    </td>
                    <td className="px-[22px] py-4 text-[var(--color-ink-umber)]">{r.reviewer}</td>
                    <td className="px-[22px] py-4 text-[var(--color-ink-soft)]">{r.date}</td>
                    <td className="px-[22px] py-4 text-[var(--color-ink-soft)]">{r.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-2xl copy-sm text-[var(--color-ink-soft)]">
            Questions about a clinical statement, or a correction to request?
            Write to{" "}
            <a
              href="mailto:legal@forthasiahealth.com"
              className="text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
            >
              legal@forthasiahealth.com
            </a>
            . Our wider boundaries are set out on{" "}
            <Link
              href="/compliance"
              className="text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
            >
              Compliance &amp; Ethics
            </Link>
            .
          </p>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[var(--color-bronze)]">
            ForthAsia Health is a facilitation and care-coordination company.
            We do not diagnose, treat, or prescribe. Verification covers
            licensing, facility standards and compliance processes as at the
            audit date; it is not a guarantee of individual clinical outcomes.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
