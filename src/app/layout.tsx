import type { Metadata } from "next";
import { Inter_Tight, Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

/** Fraunces italic — Philosophy page pull-quotes only. Do not use elsewhere. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
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
