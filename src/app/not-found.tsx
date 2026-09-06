import Link from "next/link";
import { RodOfAsclepius } from "@/components/RodOfAsclepius";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <RodOfAsclepius className="h-12 w-12 text-[var(--color-olympic-gold)]" />
      <p className="eyebrow mt-6">Error 404</p>
      <h1 className="font-monument mt-4 text-3xl text-[var(--color-ink-umber)]">
        This path is not on the map
      </h1>
      <p className="mt-4 max-w-md text-[var(--color-ink-soft)]">
        The page you asked for does not exist. Return to the entrance and start
        again.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink-umber)] px-6 py-3 text-sm font-medium text-[var(--color-porcelain)] transition-colors hover:bg-[var(--color-ionian)]"
      >
        Return home
      </Link>
    </section>
  );
}
