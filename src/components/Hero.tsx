"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end pt-32 pb-10 md:pb-14">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8"
          >
            <p className="font-mono text-[13px] uppercase tracking-wider text-lime mb-6">
              HW Team / Bangkok
            </p>
            <h1 className="text-[13vw] md:text-[7.5vw] leading-[0.95] tracking-tighter font-medium">
              We build the
              <br />
              software that
              <br />
              <em className="font-light italic text-lime">sells.</em>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4"
          >
            <p className="text-paper/70 leading-relaxed max-w-xs md:ml-auto">
              Sales pages, COD e-commerce, LMS platforms and automations for
              brands that need more than a website. Built in-house, shipped
              fast, measured on revenue.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:ml-auto md:max-w-xs">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-lime text-ink px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors"
              >
                Get a quote
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 border hairline text-paper px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:border-lime hover:text-lime transition-colors"
              >
                See the work
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 md:mt-20 grid grid-cols-3 gap-4 border-t hairline pt-6"
        >
          {[
            { k: "07", v: "client brands live" },
            { k: "06", v: "service lines" },
            { k: "01", v: "studio, no handoffs" },
          ].map((s) => (
            <div key={s.v}>
              <p className="text-3xl md:text-4xl tracking-tight font-medium">
                {s.k}
              </p>
              <p className="font-mono text-[11px] md:text-[12px] uppercase tracking-wider text-mute mt-1">
                {s.v}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
