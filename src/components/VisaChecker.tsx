"use client";

import { useMemo, useState } from "react";
import {
  ALL_COUNTRIES,
  ENTRY_ROUTES,
  PURPOSES,
  VISA_DISCLAIMER,
  evaluateVisa,
  type EntryRoute,
  type Purpose,
  type VisaResult,
} from "@/data/visa";

const fieldClass =
  "w-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_45%,transparent)] bg-[var(--color-porcelain)] px-4 py-3 text-sm text-[var(--color-ink-umber)] focus-visible:outline-2";

export function VisaChecker() {
  const [country, setCountry] = useState("");
  const [purpose, setPurpose] = useState<Purpose | "">("");
  const [route, setRoute] = useState<EntryRoute | "">("");
  const [result, setResult] = useState<VisaResult | null>(null);

  const ready = country && purpose && route;

  const resultStyles = useMemo(() => {
    if (!result) return "";
    return result.status === "green"
      ? "border-[var(--color-olive)] bg-[color-mix(in_srgb,var(--color-olive)_12%,transparent)]"
      : "border-[var(--color-terracotta)] bg-[color-mix(in_srgb,var(--color-terracotta)_10%,transparent)]";
  }, [result]);

  return (
    <div className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_30%,transparent)] bg-[var(--color-porcelain-dim)] p-6 md:p-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!ready) return;
          setResult(
            evaluateVisa({
              country,
              purpose: purpose as Purpose,
              route: route as EntryRoute,
            })
          );
        }}
        className="grid gap-5 md:grid-cols-3"
      >
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[var(--color-ink-umber)]">Nationality</span>
          <select
            className={fieldClass}
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setResult(null);
            }}
            required
          >
            <option value="">Select…</option>
            {ALL_COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[var(--color-ink-umber)]">Purpose</span>
          <select
            className={fieldClass}
            value={purpose}
            onChange={(e) => {
              setPurpose(e.target.value as Purpose);
              setResult(null);
            }}
            required
          >
            <option value="">Select…</option>
            {PURPOSES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[var(--color-ink-umber)]">Entry route</span>
          <select
            className={fieldClass}
            value={route}
            onChange={(e) => {
              setRoute(e.target.value as EntryRoute);
              setResult(null);
            }}
            required
          >
            <option value="">Select…</option>
            {ENTRY_ROUTES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>

        <div className="md:col-span-3">
          <button
            type="submit"
            disabled={!ready}
            className="btn-label inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-ink-umber)] px-6 text-[var(--color-porcelain)] transition-colors hover:bg-[var(--color-ionian)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check eligibility
          </button>
        </div>
      </form>

      <div aria-live="polite">
        {result && (
          <div className={`mt-6 rounded-lg border-l-2 p-5 ${resultStyles}`}>
            <p className="eyebrow text-[var(--color-ink-umber)]">
              {result.status === "green"
                ? "Result A · Eligible"
                : "Result B · Standard Visa"}
            </p>
            <p className="font-card-title mt-2 text-[var(--color-ink-umber)]">
              {result.heading}
            </p>
            <p className="mt-3 text-sm text-[var(--color-ink-soft)]">{result.body}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-[var(--color-ink-soft)]">
              {result.notes.map((n) => (
                <li key={n} className="flex gap-2">
                  <span aria-hidden className="text-[var(--color-olympic-gold)]">
                    —
                  </span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <a
              href={result.cta.href}
              className="btn-label mt-5 inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-ink-umber)] px-5 text-[var(--color-porcelain)] transition-colors hover:bg-[var(--color-ionian)]"
            >
              {result.cta.label} →
            </a>
          </div>
        )}
      </div>

      <p className="data-tag mt-6 text-[var(--color-bronze)]">{VISA_DISCLAIMER}</p>
    </div>
  );
}
