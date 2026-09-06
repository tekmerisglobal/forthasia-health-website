import type { ReactNode } from "react";

export type Clause = {
  n: number;
  heading: string;
  body: ReactNode;
};

/** A mailto: link styled to sit inline inside legal-clause body text. */
export function LegalMailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-2 hover:text-[var(--color-ink-umber)]"
    >
      {email}
    </a>
  );
}

export function LegalClauses({ clauses }: { clauses: Clause[] }) {
  return (
    <ol className="space-y-6">
      {clauses.map((c) => (
        <li key={c.n} className="border-b border-[color-mix(in_srgb,var(--color-bronze)_18%,transparent)] pb-6 last:border-b-0 last:pb-0">
          <p className="font-card-title text-[var(--color-ink-umber)]">
            <span className="data-tag mr-2 text-[var(--color-olympic-gold)]">
              {c.n}.
            </span>
            {c.heading}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {c.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
