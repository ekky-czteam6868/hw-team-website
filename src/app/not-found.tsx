import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70dvh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono text-[13px] uppercase tracking-wider text-lime mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-6xl tracking-tighter mb-6">
          Page not found
        </h1>
        <p className="text-paper/60 text-sm max-w-sm mx-auto mb-8">
          The page you are looking for does not exist or moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-lime text-ink px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
