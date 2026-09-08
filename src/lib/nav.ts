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
  { label: "Wellness", href: "/wellness" },
  { label: "Visa & Entry", href: "/visa-guide" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Compliance", href: "/compliance" },
  { label: "Founder", href: "/founder" },
];

/** 768–1099px: first N inline, the rest under "Menu". */
export const NAV_INLINE_COUNT = 4;

/** >=1100px: first N inline, the rest under "More". Keeps the bar on one line. */
export const NAV_FULL_INLINE_COUNT = 6;

export const portalUrl = "https://app.forthasiahealth.com";
export const opsUrl = "https://ops.forthasiahealth.com";

export const consultationHref = "/consultation";
