"use client";

import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/lib/data";
import { t, useLang } from "@/lib/lang";

export default function WorkPage() {
  const { lang } = useLang();
  const th = lang === "th";
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24">
        <SectionHeading
          index="Work"
          title={th ? { th: "ผลงานที่เลือกมา", en: "Selected projects" } : { th: "ผลงานที่เลือกมา", en: "Selected projects" }}
          aside={th ? { th: "ลิงก์จริงที่ลูกค้าอนุญาต ส่วนที่เหลือถามเราได้ เราจะพาเดินชม", en: "Live links where clients allow. For the rest, ask us and we will walk you through the build." } : { th: "ลิงก์จริงที่ลูกค้าอนุญาต ส่วนที่เหลือถามเราได้ เราจะพาเดินชม", en: "Live links where clients allow. For the rest, ask us and we will walk you through the build." }}
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <div className="border-t hairline">
          {caseStudies.map((c, i) => (
            <Link
              key={c.id}
              href={`/work/${c.id}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-10 md:py-12 border-b hairline hover:bg-ink-2 transition-colors px-4 md:px-8 -mx-4 md:-mx-8"
            >
              <span className="font-mono text-[13px] text-mute md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-3">
                <h2 className="text-2xl md:text-3xl tracking-tight mb-2 group-hover:text-lime transition-colors">
                  {c.client}
                </h2>
                <p className="font-mono text-[12px] uppercase tracking-wider text-lime">
                  {t(c.scope, lang)}
                </p>
              </div>
              <p className="text-paper/60 text-sm leading-relaxed md:col-span-5">
                {t(c.result, lang)}
              </p>
              <div className="md:col-span-3 flex flex-col md:items-end gap-3">
                <span className="font-mono text-[12px] uppercase tracking-wider text-paper/50">
                  {t(c.status, lang)}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[13px] uppercase tracking-wider text-lime">
                  {th ? "ดูเคส" : "View case"} <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 border hairline bg-ink-2 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-lg md:text-xl tracking-tight">
              {th ? "อยากได้ผลลัพธ์แบบนี้บ้าง?" : "Want results like these?"}
            </p>
            <p className="text-paper/60 text-sm mt-1">
              {th ? "ทุกโปรเจกต์เริ่มจากการคุยสั้นๆ เกี่ยวกับข้อเสนอของคุณ" : "Every project starts with a short call about your offer."}
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-lime text-ink px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors shrink-0"
          >
            {th ? "เริ่มโปรเจกต์" : "Start a project"}
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
