import type { Metadata } from "next";
import { Inter_Tight, Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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
  metadataBase: new URL("https://forthasiahealth.com"),
  title: {
    default: "Forthasia Health — The Global Standard in Medical Stewardship",
    template: "%s — Forthasia Health",
  },
  description:
    "Forthasia Health navigates the intersection of advanced regenerative medicine, diagnostic confirmation, and longevity. Headquartered in Hainan, China. We advise, translate, and verify — we do not diagnose, treat, or prescribe.",
  openGraph: {
    title: "Forthasia Health — The Global Standard in Medical Stewardship",
    description:
      "Advanced regenerative medicine, diagnostic confirmation, and longevity — stewarded from the Hainan Boao Lecheng regulatory oasis.",
    type: "website",
    locale: "en",
  },
  robots: { index: true, follow: true },
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
