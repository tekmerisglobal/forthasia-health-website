import type { Metadata } from "next";
import { LegalClauses, LegalMailLink, type Clause } from "@/components/LegalClauses";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing use of this website and engagement of FORTHASIA HEALTH® facilitation services.",
};

const clauses: Clause[] = [
  {
    n: 1,
    heading: "Acceptance.",
    body: "By using this website or engaging our services you accept these Terms and our Privacy Policy.",
  },
  {
    n: 2,
    heading: "Who we are — and are not.",
    body: "We are a logistical, translational and consulting facilitator. We are not a hospital, clinic or medical provider; we do not provide medical advice, diagnosis or treatment; no doctor–patient relationship exists with us. All clinical decisions rest with the treating facility and your own physicians.",
  },
  {
    n: 3,
    heading: "Services.",
    body: "Clinical matching & pre-assessment coordination; hospital introduction; medical translation; visa documentation support; domestic logistics; on-ground advocacy.",
  },
  {
    n: 4,
    heading: "Your responsibilities.",
    body: "Provide accurate information; use the site lawfully; make your own medical, travel and treatment decisions; maintain travel and medical-complication insurance (strongly recommended).",
  },
  {
    n: 5,
    heading: "Fees & payment.",
    body: "You pay us a concierge/matching fee (disclosed before signing; matching fee credited if you proceed). You pay the hospital directly for all medical fees. We may receive a marketing/facilitation fee from facilities; this is disclosed in your agreement and never added to your medical bill. Concierge fee: 50% on signing, 50% on arrival.",
  },
  {
    n: 6,
    heading: "No guarantees; regulatory notice.",
    body: "No treatment outcome is promised or guaranteed. Treatments facilitated through the Hainan Boao Lecheng International Medical Tourism Pilot Zone may include therapies, devices or pharmaceuticals approved within that regulatory sandbox but not yet holding FDA, EMA or TGA approval; clients assume the inherent risks of frontier protocols.",
  },
  {
    n: 7,
    heading: "Travel & visas.",
    body: "We advise and coordinate; embassies and immigration decide. Visa-free entry conditions (including direct entry to Hainan) are set by law and may change; we are not liable for refusals or delays.",
  },
  {
    n: 8,
    heading: "Privacy.",
    body: "Per the Privacy Policy and your signed consent form.",
  },
  {
    n: 9,
    heading: "Cancellation & refunds.",
    body: "Pre-assessment fee non-refundable once translation begins; concierge fee 50% refundable until hospital introduction, none after; force majeure handled fairly and at law.",
  },
  {
    n: 10,
    heading: "Liability.",
    body: "To the maximum extent permitted by law, our total liability is capped at the fees you paid us; we are not liable for clinical outcomes, hospital acts/omissions, or indirect losses. Nothing excludes rights that mandatory consumer law (e.g., Australian Consumer Law) preserves.",
  },
  {
    n: 11,
    heading: "Indemnity.",
    body: "You indemnify us against losses arising from your provision of false information or misuse of the site.",
  },
  {
    n: 12,
    heading: "Intellectual property.",
    body: "The FORTHASIA HEALTH® and KDTINO® marks and all site content are ours; no reuse without written permission. TEKMERIS GLOBAL is an independent third party and its marks belong to it.",
  },
  {
    n: 13,
    heading: "Governing law & disputes.",
    body: "Laws of the PRC; disputes to the Hainan International Arbitration Court, Haikou (EN/CN), without limiting mandatory consumer protections in your home jurisdiction.",
  },
  {
    n: 14,
    heading: "General.",
    body: "Severability; entire agreement; changes posted here; no assignment by you.",
  },
  {
    n: 15,
    heading: "Contact.",
    body: (
      <>
        For legal inquiries, contractual disputes, or compliance matters,
        contact: <LegalMailLink email="legal@forthasiahealth.com" /> ·
        Corporate Headquarters: Haikou, Hainan, PRC.
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        lede="Effective 4 September 2026."
      />
      <Section>
        <LegalClauses clauses={clauses} />
      </Section>
    </>
  );
}
