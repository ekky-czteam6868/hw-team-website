import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | HW Team",
  description:
    "Sales pages, websites & CMS, COD e-commerce, LMS, integrations and platform builds from HW Team.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24">
        <SectionHeading
          index="Services"
          title="What we build"
          aside="Six service lines, one standard: work that ships, measures and sells."
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <div className="border-t hairline">
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 md:py-16 border-b hairline scroll-mt-24"
            >
              <span className="font-mono text-[13px] text-mute md:col-span-1">
                {s.num}
              </span>
              <div className="md:col-span-4">
                <h2 className="text-3xl md:text-4xl tracking-tight mb-3">
                  {s.title}
                </h2>
                <p className="font-mono text-[12px] uppercase tracking-wider text-lime">
                  {s.tagline}
                </p>
              </div>
              <div className="md:col-span-4">
                <p className="text-paper/70 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="md:col-span-3">
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-3">
                  Includes
                </p>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-paper/70 text-sm flex items-start gap-2"
                    >
                      <span className="text-lime mt-1">/</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border hairline bg-ink-2 p-6 md:p-8">
          <div>
            <p className="text-lg md:text-xl tracking-tight">
              Not sure which service fits?
            </p>
            <p className="text-paper/60 text-sm mt-1">
              Send the project and we will scope it for free.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-lime text-ink px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors shrink-0"
          >
            Get a quote
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
