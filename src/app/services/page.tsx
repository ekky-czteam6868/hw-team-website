"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";
import { t, useLang } from "@/lib/lang";

export default function ServicesPage() {
  const { lang } = useLang();
  const th = lang === "th";
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24">
        <SectionHeading
          index="Services"
          title={th ? { th: "สิ่งที่เราสร้าง", en: "What we build" } : { th: "สิ่งที่เราสร้าง", en: "What we build" }}
          aside={th ? { th: "หกบริการ มาตรฐานเดียว :  งานที่ส่งมอบจริง วัดผลได้ และขายได้", en: "Six service lines, one standard: work that ships, measures and sells." } : { th: "หกบริการ มาตรฐานเดียว :  งานที่ส่งมอบจริง วัดผลได้ และขายได้", en: "Six service lines, one standard: work that ships, measures and sells." }}
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <div className="border-t hairline">
          {services.map((s) => (
            <Link
              key={s.id}
              href={s.url}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-12 border-b hairline hover:bg-ink-2 transition-colors px-4 md:px-8 -mx-4 md:-mx-8"
            >
              <span className="font-mono text-[13px] text-mute md:col-span-1">
                {s.num}
              </span>
              <div className="md:col-span-4">
                <h2 className="text-2xl md:text-3xl tracking-tight mb-2 group-hover:text-lime transition-colors">
                  {t(s.title, lang)}
                </h2>
                <p className="font-mono text-[12px] uppercase tracking-wider text-lime">
                  {t(s.tagline, lang)}
                </p>
              </div>
              <p className="text-paper/60 text-sm leading-relaxed md:col-span-5">
                {t(s.desc, lang)}
              </p>
              <div className="md:col-span-2 flex flex-col items-start md:items-end gap-2">
                <span className="font-mono text-[13px] text-paper/80">
                  {t(s.starting, lang)}
                </span>
                <ArrowRight size={18} className="text-paper/40 group-hover:text-lime transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border hairline bg-ink-2 p-6 md:p-8">
          <div>
            <p className="text-lg md:text-xl tracking-tight">
              {th ? "ไม่แน่ใจว่าบริการไหนเหมาะ?" : "Not sure which service fits?"}
            </p>
            <p className="text-paper/60 text-sm mt-1">
              {th ? "ส่งโปรเจกต์มา เราวางสโคปให้ฟรี" : "Send the project and we will scope it for free."}
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-lime text-ink px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors shrink-0"
          >
            {th ? "ขอใบเสนอราคา" : "Get a quote"}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
