import type { Metadata, Viewport } from "next";
// Self-hosted via @fontsource — never linked from Google Fonts (blocked in
// China and would silently fall back). Marcellus ships one weight (400);
// Karla is pulled in at 400 (body) and 600 (labels / small caps).
import "@fontsource/marcellus";
import "@fontsource/karla/400.css";
import "@fontsource/karla/600.css";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Forthasia Health — Stewards of Health Across Asia",
    template: "%s — Forthasia Health",
  },
  description:
    "Independent medical facilitation, longevity, wellness and recovery across Asia. Verified hospitals, physician-supervised protocols, visa-free Hainan access. We facilitate, translate and verify — we do not diagnose, treat, or prescribe.",
  openGraph: {
    title: "Forthasia Health — Stewards of Health Across Asia",
    description:
      "Independent medical facilitation, longevity and wellness coordination across Asia — routed through the Hainan Boao Lecheng regulatory zone.",
    type: "website",
    locale: "en",
    siteName: "Forthasia Health",
  },
  robots: { index: true, follow: true },
  verification: process.env.NEXT_PUBLIC_GSC_TOKEN
    ? { google: process.env.NEXT_PUBLIC_GSC_TOKEN }
    : undefined,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#12181A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--color-ink-umber)] focus:px-4 focus:py-2 focus:text-[var(--color-porcelain)]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
