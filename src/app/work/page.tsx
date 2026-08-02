import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work | HW Team",
  description:
    "Case studies from HW Team: Dr.Jade, Barbestro, Bossnoi, Camellia, Networkz, Z Intelligence and Digital Product + LMS.",
};

export default function WorkPage() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24">
        <SectionHeading
          index="Work"
          title="Selected projects"
          aside="Live links where clients allow. For the rest, ask us and we will walk you through the build."
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <div className="border-t hairline">
          {caseStudies.map((c, i) => (
            <article
              key={c.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-10 md:py-12 border-b hairline"
            >
              <span className="font-mono text-[13px] text-mute md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-3">
                <h2 className="text-2xl md:text-3xl tracking-tight mb-2">
                  {c.client}
                </h2>
                <p className="font-mono text-[12px] uppercase tracking-wider text-lime">
                  {c.scope}
                </p>
              </div>
              <p className="text-paper/60 text-sm leading-relaxed md:col-span-5">
                {c.result}
              </p>
              <div className="md:col-span-3 flex flex-col md:items-end gap-3">
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="border hairline px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-paper/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[13px] uppercase tracking-wider text-lime hover:text-paper transition-colors"
                  >
                    Visit site <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 border hairline bg-ink-2 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-lg md:text-xl tracking-tight">
              Want results like these?
            </p>
            <p className="text-paper/60 text-sm mt-1">
              Every project starts with a short call about your offer.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-lime text-ink px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors shrink-0"
          >
            Start a project
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
