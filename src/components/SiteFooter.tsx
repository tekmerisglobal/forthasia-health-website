import Link from "next/link";
import { portalUrl, primaryNav } from "@/lib/nav";
import { RodOfAsclepius } from "./RodOfAsclepius";

/**
 * Blueprint §6 — the Entity Line MUST render in the footer of every public page.
 */
const ENTITY_LINE =
  "Operated by Haikou Meixi International Trade Co., Ltd 海口美西国际贸易有限责任公司. Registered in the PRC (No. 91460100MA5TH9296D). FORTHASIA HEALTH is a facilitation and consulting entity, not a medical provider.";

/** Compliance block — verbatim, as locked. */
const COMPLIANCE_BLOCK =
  "FORTHASIA HEALTH is a logistical, translational, and verification facilitator. We do not diagnose, treat, or prescribe.";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Compliance & Ethics (HIIC)", href: "/compliance" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[var(--color-ink-umber)] text-[var(--color-porcelain)]">
      {/* 1. Logo + nav + Secure Inquiries / Corporate HQ / Client Portal (V-11) */}
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <RodOfAsclepius className="h-9 w-9 text-[var(--color-olympic-gold)]" />
            <span className="leading-none">
              <span className="block font-body text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-porcelain)]">
                Forthasia
              </span>
              <span className="btn-label mt-1 block text-[10px] tracking-[0.4em] text-[var(--color-olympic-gold)]">
                Health
              </span>
            </span>
          </div>
          <p className="data-tag mt-6 text-[color-mix(in_srgb,var(--color-bronze)_90%,white)]">
            FORTHASIA HEALTH // FROM THE LAND OF OLYMPIA. FORTH TO HEALTH.
          </p>
        </div>

        <nav aria-label="Footer — pages">
          <h2 className="eyebrow text-[color-mix(in_srgb,var(--color-bronze)_90%,white)]">
            The Site
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[color-mix(in_srgb,var(--color-porcelain)_78%,transparent)] transition-colors hover:text-[var(--color-olympic-gold)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-[color-mix(in_srgb,var(--color-bronze)_90%,white)]">
            Secure Inquiries
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[color-mix(in_srgb,var(--color-porcelain)_78%,transparent)]">
            <li>
              For VIP Medical Concierge & Clinical Routing:{" "}
              <a
                href="mailto:concierge@forthasiahealth.com"
                className="transition-colors hover:text-[var(--color-olympic-gold)]"
              >
                concierge@forthasiahealth.com
              </a>
            </li>
            <li>
              For B2B Hospital & Clinic Partnerships:{" "}
              <a
                href="mailto:partners@forthasiahealth.com"
                className="transition-colors hover:text-[var(--color-olympic-gold)]"
              >
                partners@forthasiahealth.com
              </a>
            </li>
          </ul>

          <h2 className="eyebrow mt-6 text-[color-mix(in_srgb,var(--color-bronze)_90%,white)]">
            Corporate Headquarters
          </h2>
          <p className="mt-4 text-sm text-[color-mix(in_srgb,var(--color-porcelain)_78%,transparent)]">
            Haikou Meixi International Trade Co., Ltd.
            <br />
            Hainan Free Trade Port, P.R. China
          </p>

          <a
            href={portalUrl}
            className="btn-label mt-6 inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full border border-[var(--color-bronze)] px-5 text-[var(--color-porcelain)] transition-colors hover:border-[var(--color-olympic-gold)] hover:text-[var(--color-olympic-gold)]"
          >
            Access Secure Client Portal
          </a>
        </div>
      </div>

      {/* 2. Compliance block (verbatim, as locked) */}
      <div className="border-t border-[color-mix(in_srgb,var(--color-bronze)_35%,transparent)]">
        <div className="shell py-6">
          <p className="max-w-2xl text-sm text-[color-mix(in_srgb,var(--color-porcelain)_82%,transparent)]">
            {COMPLIANCE_BLOCK}
          </p>
        </div>
      </div>

      {/* 3. Legal links row */}
      <div className="border-t border-[color-mix(in_srgb,var(--color-bronze)_35%,transparent)]">
        <div className="shell flex flex-wrap gap-x-6 gap-y-2 py-6 text-sm">
          {legalLinks.map((l, i) => (
            <span key={l.href} className="flex items-center gap-6">
              <Link
                href={l.href}
                className="text-[color-mix(in_srgb,var(--color-porcelain)_78%,transparent)] transition-colors hover:text-[var(--color-olympic-gold)]"
              >
                {l.label}
              </Link>
              {i < legalLinks.length - 1 ? (
                <span aria-hidden className="text-[var(--color-bronze)]">
                  ·
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Entity line (smallest type, verbatim) */}
      <div className="border-t border-[color-mix(in_srgb,var(--color-bronze)_35%,transparent)]">
        <div className="shell flex flex-col gap-4 py-8 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-[color-mix(in_srgb,var(--color-porcelain)_62%,transparent)]">
            {ENTITY_LINE}
          </p>
          <p className="data-tag shrink-0 text-[color-mix(in_srgb,var(--color-porcelain)_45%,transparent)]">
            © {new Date().getFullYear()} Forthasia Health
          </p>
        </div>
      </div>

      {/* 5. Master close */}
      <div className="border-t border-[color-mix(in_srgb,var(--color-bronze)_35%,transparent)]">
        <div className="shell py-6">
          <p className="text-sm font-medium text-[var(--color-parchment)]">
            Forth from Greece. Forth to Health. Forthasia.
          </p>
        </div>
      </div>
    </footer>
  );
}
