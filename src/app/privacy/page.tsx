import type { Metadata } from "next";
import { LegalClauses, LegalMailLink, type Clause } from "@/components/LegalClauses";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Haikou Meixi International Trade Co., Ltd, trading as FORTHASIA HEALTH®, collects, uses, and protects your personal and health information.",
};

const clauses: Clause[] = [
  {
    n: 1,
    heading: "Who we are.",
    body: (
      <>
        FORTHASIA HEALTH® is a brand of Haikou Meixi International Trade Co.,
        Ltd (&ldquo;we/us&rdquo;), a facilitation and care-coordination
        company registered in China (No. 91460100MA5TH9296D), 69 Nanyihuan
        Road, Laocheng Economic Development Zone, Chengmai County, Hainan,
        PRC. Contact our Data Protection Officer regarding your privacy
        rights or data handling at: <LegalMailLink email="privacy@forthasiahealth.com" />.
      </>
    ),
  },
  {
    n: 2,
    heading: "What we collect.",
    body: "(a) Identity & contact details; (b) Protected health information (PHI) — only through our secure HIIC vault and only after you sign the Medical Records Authorization & Privacy Consent; (c) payment records; (d) minimal technical data (see §8).",
  },
  {
    n: 3,
    heading: "How we use it.",
    body: "To arrange clinical pre-assessments, hospital introductions, translation, visa documentation, logistics, billing, and to meet legal obligations. We do not sell personal data. We do not use PHI for advertising.",
  },
  {
    n: 4,
    heading: "Legal bases.",
    body: "Consent (PHI and vault uploads), contract (performing your engagement), legal obligation. Where the PRC Personal Information Protection Law (PIPL), the EU GDPR, or the Australian Privacy Act applies, we process accordingly.",
  },
  {
    n: 5,
    heading: "The HIIC vault.",
    body: "Consent-before-collection · unique upload links expiring in 72 hours · client-side AES-256-GCM encryption before upload · watermarked in-portal viewing, no download by default · immutable access logs · auto-purge at engagement close + 90 days · no PHI ever moves by email, WeChat or WhatsApp.",
  },
  {
    n: 6,
    heading: "Who we share with.",
    body: "Your chosen treating facility (only with your per-hospital consent), accredited translators, immigration authorities where legally required, and payment processors. Everyone else: no.",
  },
  {
    n: 7,
    heading: "Cross-border transfers.",
    body: "Your records are transferred to the PRC solely for the purposes you consent to, stored encrypted, and handled under PIPL with GDPR/Australian-Privacy-Act-equivalent safeguards.",
  },
  {
    n: 8,
    heading: "Cookies & analytics.",
    body: "We use minimal, strictly-necessary cookies and cookieless analytics. No advertising trackers.",
  },
  {
    n: 9,
    heading: "Retention.",
    body: "Contracts & invoices: 5 years. PHI: per §5. Marketing contact: until you withdraw.",
  },
  {
    n: 10,
    heading: "Your rights.",
    body: (
      <>
        Access, correction, deletion, portability, and withdrawal of consent
        at any time (withdrawal stops future sharing, not actions already
        taken). Exercise via <LegalMailLink email="privacy@forthasiahealth.com" />.
      </>
    ),
  },
  {
    n: 11,
    heading: "Security & breaches.",
    body: "TLS 1.3 in transit, AES-256 at rest. We notify you and the regulator within 72 hours of any notifiable breach.",
  },
  {
    n: 12,
    heading: "Children.",
    body: "Services are for adults; minors only with guardian consent and signature.",
  },
  {
    n: 13,
    heading: "Third-party links.",
    body: "We are not responsible for external sites (including hospital portals).",
  },
  {
    n: 14,
    heading: "Changes & contact.",
    body: (
      <>
        Material changes will be posted here. Contact our Data Protection
        Officer regarding your privacy rights or data handling at:{" "}
        <LegalMailLink email="privacy@forthasiahealth.com" />; unresolved
        complaints may be referred to the relevant regulator (including the
        OAIC for Australian residents).
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="Effective 4 September 2026."
      />
      <Section>
        <LegalClauses clauses={clauses} />
      </Section>
    </>
  );
}
