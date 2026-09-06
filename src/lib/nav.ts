export type NavItem = {
  label: string;
  href: string;
};

/**
 * Public sitemap (Blueprint §2). Portal + Ops live on separate subdomains.
 * Labels shortened per V-7 nav fix — single baseline, no wrapping.
 */
export const primaryNav: NavItem[] = [
  { label: "Philosophy", href: "/philosophy" },
  { label: "The Standard", href: "/standard" },
  { label: "Destinations", href: "/destinations" },
  { label: "Journey", href: "/journey" },
  { label: "Recovery", href: "/recovery" },
  { label: "Visa & Entry", href: "/visa-guide" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Compliance", href: "/compliance" },
  { label: "Founder", href: "/founder" },
];

/** First N items shown inline below 1100px; the rest collapse into "Menu". */
export const NAV_INLINE_COUNT = 4;

export const portalUrl = "https://app.forthasiahealth.com";
export const opsUrl = "https://ops.forthasiahealth.com";

export const consultationHref = "/consultation";
