"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { pricingTiers } from "@/lib/data";
import { t, useLang } from "@/lib/lang";

export default function PricingPage() {
  const { lang } = useLang();
  const th = lang === "th";
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24">
        <SectionHeading
          index="Pricing"
          title={th ? { th: "แพ็กเกจชัดเจน", en: "Clear packages" } : { th: "แพ็กเกจชัดเจน", en: "Clear packages" }}
          aside={th ? { th: "ราคาคงที่ตามขอบเขตงาน ไม่มีค่าใช้จ่ายแอบแฝง", en: "Fixed pricing per scope. No hidden costs." } : { th: "ราคาคงที่ตามขอบเขตงาน ไม่มีค่าใช้จ่ายแอบแฝง", en: "Fixed pricing per scope. No hidden costs." }}
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border hairline">
          {pricingTiers.map((p) => (
            <div
              key={p.id}
              className={`bg-ink p-6 md:p-8 flex flex-col ${
                p.featured ? "border-t-4 border-t-lime" : ""
              }`}
            >
              {p.featured ? (
                <p className="font-mono text-[11px] uppercase tracking-wider text-lime mb-3">
                  {th ? "แนะนำ" : "Popular"}
                </p>
              ) : null}
              <p className="font-mono text-[12px] uppercase tracking-wider text-mute">
                {p.name.en}
              </p>
              <div className="mt-3 mb-1">
                <span className="text-4xl md:text-5xl tracking-tight">
                  {p.price}
                </span>
                {p.unit[lang] ? (
                  <span className="text-paper/50 text-sm ml-1">{p.unit[lang]}</span>
                ) : null}
              </div>
              <p className="text-paper/60 text-sm leading-relaxed mb-6">
                {t(p.desc, lang)}
              </p>

              <div className="mb-6">
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-3">
                  {th ? "รวม" : "Includes"}
                </p>
                <ul className="space-y-2">
                  {p.includes.map((i) => (
                    <li key={i.en} className="text-paper/75 text-sm flex items-start gap-2">
                      <span className="text-lime mt-0.5">/</span>
                      {t(i, lang)}
                    </li>
                  ))}
                </ul>
                {p.excludes.length ? (
                  <>
                    <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-3 mt-5">
                      {th ? "ไม่รวม" : "Excludes"}
                    </p>
                    <ul className="space-y-2">
                      {p.excludes.map((i) => (
                        <li key={i.en} className="text-paper/50 text-sm flex items-start gap-2">
                          <span className="text-mute mt-0.5">×</span>
                          {t(i, lang)}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>

              <Link
                href="/contact"
                className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 font-mono text-sm uppercase tracking-wider transition-colors ${
                  p.featured
                    ? "bg-lime text-ink hover:bg-paper"
                    : "border hairline text-paper hover:border-lime hover:text-lime"
                }`}
              >
                {t(p.cta, lang)}
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 border hairline bg-ink-2 p-6 md:p-8">
          <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-3">
            {th ? "หมายเหตุ" : "Notes"}
          </p>
          <ul className="space-y-2 text-paper/60 text-sm">
            <li>
              {th
                ? "ราคาเป็นราคาเริ่มต้น คิดตามจำนวนหน้าและความซับซ้อนของงาน"
                : "Prices are starting points, quoted per page count and complexity."}
            </li>
            <li>
              {th
                ? "งานทุกชิ้นรวมการวางพิกเซล ติดตั้ง GA4 และตรวจ QA ก่อนส่งมอบ"
                : "Every build includes pixel setup, GA4 and QA before delivery."}
            </li>
            <li>
              {th
                ? "โปรเจกต์ใหญ่ (ร้านค้า LMS แพลตฟอร์ม) คิดราคาตามสโคป :  ขอใบเสนอราคาฟรีได้"
                : "Large builds (stores, LMS, platforms) are quoted per scope. Free estimates available."}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
