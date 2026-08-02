import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import ServiceList from "@/components/ServiceList";
import CaseRows from "@/components/CaseRows";
import ProcessSteps from "@/components/ProcessSteps";
import TeamGrid from "@/components/TeamGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Services */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          index="01 / Services"
          title="Six ways we make brands money"
          aside="Every engagement starts with the offer and the funnel. If the page does not sell, the design does not matter."
        />
        <ServiceList />
        <div className="mt-10 text-right">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-lime hover:text-paper transition-colors"
          >
            All services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Work */}
      <section className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
          <SectionHeading
            index="02 / Work"
            title="Brands we have shipped"
            aside="From COD storefronts to LMS backends. Live links where the client lets us show them."
          />
          <CaseRows />
          <div className="mt-10 text-right">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-lime hover:text-paper transition-colors"
            >
              Full case list <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          index="03 / Process"
          title="Brief to launch, without the theatre"
          aside="No discovery marathons. A fixed scope, a fixed price, and a live preview before you pay the final invoice."
        />
        <ProcessSteps />
      </section>

      {/* Team */}
      <section className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
          <SectionHeading
            index="04 / Team"
            title="Small team, senior hands"
            aside="No account managers relaying messages. You talk to the people who build."
          />
          <TeamGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 md:py-32 text-center">
          <p className="font-mono text-[13px] uppercase tracking-wider text-lime mb-6">
            05 / Start
          </p>
          <h2 className="text-5xl md:text-7xl tracking-tighter leading-[0.98] max-w-3xl mx-auto">
            Have a product that should sell itself?
          </h2>
          <p className="text-paper/60 text-sm md:text-base mt-6 max-w-md mx-auto leading-relaxed">
            Tell us what you are building. We reply within one business day
            with a scope and a price.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-lime text-ink px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors mt-10"
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
