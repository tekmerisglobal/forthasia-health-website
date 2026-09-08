"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_INLINE_COUNT, consultationHref, portalUrl, primaryNav } from "@/lib/nav";
import { RodOfAsclepius } from "./RodOfAsclepius";

const inlineNav = primaryNav.slice(0, NAV_INLINE_COUNT);
const overflowNav = primaryNav.slice(NAV_INLINE_COUNT);

const navLinkClass = (active: boolean) =>
  `whitespace-nowrap text-[0.9rem] tracking-wide transition-colors hover:text-[var(--color-ionian)] ${
    active
      ? "text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-8"
      : "text-[var(--color-ink-soft)]"
  }`;

function Wordmark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3.5"
      aria-label="Forthasia Health — home"
    >
      <RodOfAsclepius className="h-11 w-11 shrink-0 text-[var(--color-olympic-gold)]" />
      <span className="leading-none">
        <span className="block font-body text-[1.4rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-umber)]">
          Forthasia
        </span>
        <span className="mt-1.5 block font-mono text-[0.9rem] font-medium uppercase tracking-[0.28em] text-[var(--color-bronze)]">
          Health
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled
          ? "border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[color-mix(in_srgb,var(--color-porcelain)_88%,transparent)] backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Wordmark />

        {/* Full nav — single line, >=1100px */}
        <nav className="hidden min-[1100px]:flex min-[1100px]:items-center min-[1100px]:gap-6" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(pathname === item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Condensed nav — first 4 + "Menu" dropdown, 768–1099px only */}
        <nav
          className="hidden md:max-[1099px]:flex md:max-[1099px]:items-center md:max-[1099px]:gap-5"
          aria-label="Primary (condensed)"
        >
          {inlineNav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(pathname === item.href)}>
              {item.label}
            </Link>
          ))}
          <details className="group relative">
            <summary className="btn-label flex cursor-pointer list-none items-center gap-1 text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ionian)] [&::-webkit-details-marker]:hidden">
              Menu
              <span aria-hidden className="text-[10px] transition-transform group-open:rotate-180">
                ▾
              </span>
            </summary>
            <div className="absolute right-0 top-[calc(100%+12px)] w-48 rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] p-2 shadow-lg">
              {overflowNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded px-3 py-2 copy-sm ${
                    pathname === item.href
                      ? "text-[var(--color-ionian)]"
                      : "text-[var(--color-ink-soft)] hover:bg-[var(--color-porcelain-dim)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={portalUrl}
            className="btn-label flex h-11 items-center justify-center whitespace-nowrap rounded-full border border-[var(--color-bronze)] px-5 text-[var(--color-ink-umber)] transition-colors hover:border-[var(--color-olympic-gold)] hover:text-[var(--color-ionian)]"
          >
            Secure Login
          </a>
          <Link
            href={consultationHref}
            className="btn-label flex h-11 items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-ink-umber)] px-5 text-[var(--color-porcelain)] transition-colors hover:bg-[var(--color-ionian)]"
          >
            Begin Intake
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded border border-[var(--color-bronze)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] md:hidden"
        >
          <nav className="shell flex flex-col py-4" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-[color-mix(in_srgb,var(--color-bronze)_18%,transparent)] py-3 copy-sm text-[var(--color-ink-soft)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-3">
              <a
                href={portalUrl}
                className="btn-label flex h-11 flex-1 items-center justify-center whitespace-nowrap rounded-full border border-[var(--color-bronze)] text-center"
              >
                Secure Login
              </a>
              <Link
                href={consultationHref}
                className="btn-label flex h-11 flex-1 items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-ink-umber)] text-center text-[var(--color-porcelain)]"
              >
                Begin Intake
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
