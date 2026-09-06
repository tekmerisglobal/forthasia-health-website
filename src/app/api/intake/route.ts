import { NextResponse } from "next/server";

/**
 * Public intake endpoint.
 *
 * RULING (imagery/content manifest, deferred-item #2): wire to Resend →
 * concierge@forthasiahealth.com, log to Airtable as the interim CRM, and add
 * Cloudflare Turnstile + a honeypot field + rate limiting. All four are wired
 * below behind environment variables — with none set, the route falls back to
 * a console log so local development still works.
 *
 * This must never accept protected health information — that flows only
 * through the HIIC Vault after a case ref is issued.
 */

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Best-effort in-memory rate limit. NOTE: this resets on cold start and is
 * per server instance — on serverless/multi-instance hosting it is not a
 * hard limit, only a cheap first line of defense. Turnstile is the real
 * bot control; treat this as a supplement, not a replacement.
 */
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

async function verifyTurnstile(token: unknown, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured — skip (dev / pre-launch)
  if (typeof token !== "string" || !token) return false;

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch {
    return false;
  }
}

async function sendViaResend(fields: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INTAKE_TO_EMAIL ?? "concierge@forthasiahealth.com";
  const from = process.env.INTAKE_FROM_EMAIL ?? "Forthasia Health <intake@forthasiahealth.com>";
  if (!apiKey) return { sent: false as const };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New enquiry — ${fields.name}`,
      text: Object.entries(fields)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n"),
    }),
  });
  return { sent: res.ok };
}

async function logToAirtable(fields: Record<string, string>) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE ?? "Intake";
  if (!apiKey || !baseId) return { logged: false as const };

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    }
  );
  return { logged: res.ok };
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields; real visitors never see this one.
  if (String(payload.website ?? "").trim().length > 0) {
    // Report success so the bot doesn't learn anything; do nothing further.
    return NextResponse.json({ ok: true });
  }

  const turnstileOk = await verifyTurnstile(payload.turnstileToken, ip);
  if (!turnstileOk) {
    return NextResponse.json(
      { ok: false, error: "Verification failed. Please try again." },
      { status: 403 }
    );
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 422 }
    );
  }

  const fields = {
    name,
    email,
    country: String(payload.country ?? ""),
    channel: String(payload.channel ?? ""),
    message,
    submittedAt: new Date().toISOString(),
  };

  const [resend, airtable] = await Promise.all([
    sendViaResend(fields).catch(() => ({ sent: false as const })),
    logToAirtable(fields).catch(() => ({ logged: false as const })),
  ]);

  // Always log server-side too, so nothing is lost if both integrations are
  // unconfigured (local dev) or one of them fails.
  console.info("[intake] new enquiry", { ...fields, resend, airtable });

  return NextResponse.json({ ok: true });
}
