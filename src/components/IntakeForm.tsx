"use client";

import Script from "next/script";
import { useState } from "react";

const fieldClass =
  "w-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_45%,transparent)] bg-[var(--color-porcelain)] px-4 py-3 text-sm text-[var(--color-ink-umber)]";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Status = "idle" | "submitting" | "sent" | "error";

export function IntakeForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());

    // Honeypot: real visitors never see or fill this field.
    if (String(raw.website ?? "").trim().length > 0) {
      setStatus("sent");
      form.reset();
      return;
    }

    // Cloudflare Turnstile injects this field itself when the widget is present.
    const { "cf-turnstile-response": turnstileToken, ...data } = raw as Record<
      string,
      string
    >;

    setStatus("submitting");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border-l-2 border-[var(--color-olive)] bg-[color-mix(in_srgb,var(--color-olive)_12%,transparent)] p-6">
        <p className="font-card-title text-[var(--color-ink-umber)]">
          Thank you. A steward will respond within one business day.
        </p>
        <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
          When we reply, you will receive a secure link to the HIIC Vault. Please
          do not send medical records by email — they are only accepted through
          the Vault.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      {/* Honeypot — hidden from sighted users and screen readers, off tab order. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[var(--color-ink-umber)]">Full name</span>
          <input name="name" required className={fieldClass} autoComplete="name" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[var(--color-ink-umber)]">Email</span>
          <input
            type="email"
            name="email"
            required
            className={fieldClass}
            autoComplete="email"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[var(--color-ink-umber)]">
            Country of residence
          </span>
          <input name="country" className={fieldClass} autoComplete="country-name" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[var(--color-ink-umber)]">
            Preferred contact channel
          </span>
          <select name="channel" className={fieldClass} defaultValue="Email">
            <option>Email</option>
            <option>WhatsApp</option>
            <option>WeChat</option>
            <option>Phone call</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="eyebrow text-[var(--color-ink-umber)]">
          How can we help? (no medical records or diagnoses here, please)
        </span>
        <textarea
          name="message"
          rows={5}
          required
          className={fieldClass}
          placeholder="A short summary of what you are exploring — a pathway, a destination, a diagnostic confirmation trip."
        />
      </label>

      {/* No-PHI consent — kept immediately above the submit button per policy. */}
      <label className="flex items-start gap-3 text-sm text-[var(--color-ink-soft)]">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          I understand Forthasia Health is a facilitation and consulting entity,
          not a medical provider, and that protected health information is shared
          only through the secure HIIC Vault.
        </span>
      </label>

      {TURNSTILE_SITE_KEY ? (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} />
        </>
      ) : null}

      {status === "error" && (
        <p className="text-sm text-[var(--color-terracotta)]">
          Something went wrong. Please try again, or email the concierge desk
          directly.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-label inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-ink-umber)] px-6 text-[var(--color-porcelain)] transition-colors hover:bg-[var(--color-ionian)] disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Request a confidential conversation"}
        </button>
      </div>
    </form>
  );
}
