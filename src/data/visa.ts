/**
 * Hainan 30-day visa-free entry — working data set for the Visa & Entry checker
 * (Blueprint §4.2).
 *
 * RULING (imagery/content manifest, deferred-item #1): this list ships
 * indicative, with the existing disclaimer, until reconciled. Source of truth
 * is the current NIA / Hainan FTP official 86-country list — have Libby/VA
 * transcribe it into this file verbatim before launch. Do not point any
 * Client-Portal / "Begin Secure Intake" CTA at a live intake flow until this
 * is done; the public checker itself may ship with the disclaimer as-is.
 */

export type Purpose =
  | "Medical Treatment"
  | "Diagnostic Confirmation"
  | "Tourism";

export type EntryRoute =
  | "Direct to Hainan (HAK / SYX)"
  | "Transit via the Chinese mainland";

/** Nationalities commonly listed under the Hainan visa-free programme. */
export const VISA_FREE_COUNTRIES: string[] = [
  "Argentina",
  "Australia",
  "Austria",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Canada",
  "Chile",
  "Croatia",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Japan",
  "Kazakhstan",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Malta",
  "Mexico",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "New Zealand",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];

/** A broader roster shown in the dropdown; anything not visa-free returns Result B. */
export const OTHER_COUNTRIES: string[] = [
  "China",
  "Egypt",
  "India",
  "Indonesia",
  "Iran",
  "Israel",
  "Jordan",
  "Kenya",
  "Kuwait",
  "Nigeria",
  "Oman",
  "Pakistan",
  "Philippines",
  "Saudi Arabia",
  "South Africa",
  "Sri Lanka",
  "Turkey",
  "Vietnam",
];

export const ALL_COUNTRIES: string[] = [
  ...VISA_FREE_COUNTRIES,
  ...OTHER_COUNTRIES,
].sort((a, b) => a.localeCompare(b));

export const PURPOSES: Purpose[] = [
  "Diagnostic Confirmation",
  "Medical Treatment",
  "Tourism",
];

export const ENTRY_ROUTES: EntryRoute[] = [
  "Direct to Hainan (HAK / SYX)",
  "Transit via the Chinese mainland",
];

export type VisaResult = {
  status: "green" | "yellow";
  heading: string;
  body: string;
  cta: { label: string; href: string };
  notes: string[];
};

export function evaluateVisa(input: {
  country: string;
  purpose: Purpose;
  route: EntryRoute;
}): VisaResult {
  const isVisaFree = VISA_FREE_COUNTRIES.includes(input.country);
  const directEntry = input.route === "Direct to Hainan (HAK / SYX)";

  if (isVisaFree && directEntry) {
    return {
      status: "green",
      heading: "You qualify for the 30-Day Visa-Free Medical Entry.",
      body:
        input.purpose === "Tourism"
          ? "Sufficient for a 30-day visit. If your plans include diagnostic confirmation or treatment, our team will confirm the pathway during intake."
          : "Sufficient for diagnostic confirmation and many treatment pathways. You must enter Hainan directly.",
      cta: { label: "Begin Secure Intake", href: "/consultation" },
      notes: [
        "Entry must be direct to Haikou (HAK) or Sanya (SYX) — not via a mainland transit point.",
        "The 30-day period is typically sufficient for diagnostic confirmation and many treatment pathways.",
        "Extended stays may require additional visa arrangements, which we coordinate.",
      ],
    };
  }

  if (isVisaFree && !directEntry) {
    return {
      status: "yellow",
      heading: "You are visa-free for Hainan — but only on direct entry.",
      body:
        "Your nationality qualifies for the 30-Day Visa-Free Medical Entry, but transiting through the Chinese mainland places you outside the Hainan visa-free scheme. Either re-route to a direct flight into HAK / SYX, or we will arrange the appropriate visa and Hospital Invitation Letter.",
      cta: { label: "Request Invitation Letter", href: "/consultation" },
      notes: [
        "A direct flight into Hainan restores visa-free eligibility.",
        "If a mainland stop is unavoidable, a standard visa is required for that leg.",
      ],
    };
  }

  return {
    status: "yellow",
    heading: "Your nationality requires a standard L-Visa.",
    body:
      "We will provide the official Hospital Invitation Letter and handle the paperwork. Processing times vary by consulate; we build this lead time into your travel architecture.",
    cta: { label: "Request Invitation Letter", href: "/consultation" },
    notes: [
      "We prepare and submit the Hospital Invitation Letter on your behalf.",
      "You retain the final application step at your local Chinese embassy or consulate.",
    ],
  };
}

export const VISA_DISCLAIMER =
  "We advise and coordinate; embassies decide. The 30-day visa-free period is typically sufficient for diagnostic confirmation and many treatment pathways; extended stays may require additional visa arrangements.";
