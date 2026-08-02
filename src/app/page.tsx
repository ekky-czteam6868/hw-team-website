"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import ServiceList from "@/components/ServiceList";
import CaseRows from "@/components/CaseRows";
import ProcessSteps from "@/components/ProcessSteps";
import { useLang } from "@/lib/lang";

export default function HomePage() {
  const { lang } = useLang();
  const th = lang === "th";
  return (
    <>
      <Hero />
      <Marquee />

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          index="01 / Services"
          title={
            th
              ? { th: "หกบริการที่ทำเงินให้แบรนด์", en: "Six ways we make brands money" }
              : { th: "หกบริการที่ทำเงินให้แบรนด์", en: "Six ways we make brands money" }
          }
          aside={
            th
              ? { th: "ทุกโปรเจกต์เริ่มจากข้อเสนอและช่องทางขาย ถ้าเพจขายไม่ได้ ดีไซน์ก็ไม่มีความหมาย", en: "Every engagement starts with the offer and the funnel. If the page does not sell, the design does not matter." }
              : { th: "ทุกโปรเจกต์เริ่มจากข้อเสนอและช่องทางขาย ถ้าเพจขายไม่ได้ ดีไซน์ก็ไม่มีความหมาย", en: "Every engagement starts with the offer and the funnel. If the page does not sell, the design does not matter." }
          }
        />
        <ServiceList />
        <div className="mt-10 text-right">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-lime hover:text-paper transition-colors"
          >
            {th ? "ดูบริการทั้งหมด" : "All services"} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
          <SectionHeading
            index="02 / Work"
            title={th ? { th: "ผลงานที่ส่งมอบจริง", en: "Brands we have shipped" } : { th: "ผลงานที่ส่งมอบจริง", en: "Brands we have shipped" }}
            aside={
              th
                ? { th: "จากร้านค้า COD ถึงระบบ LMS ลิงก์จริงที่ลูกค้าเปิดใช้ได้", en: "From COD storefronts to LMS backends. Live links where the client lets us show them." }
                : { th: "จากร้านค้า COD ถึงระบบ LMS ลิงก์จริงที่ลูกค้าเปิดใช้ได้", en: "From COD storefronts to LMS backends. Live links where the client lets us show them." }
            }
          />
          <CaseRows />
          <div className="mt-10 text-right">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-lime hover:text-paper transition-colors"
            >
              {th ? "ดูผลงานทั้งหมด" : "Full case list"} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          index="03 / Process"
          title={th ? { th: "จากบรีฟถึงเปิดตัว ไม่มีพิธีการ", en: "Brief to launch, without the theatre" } : { th: "จากบรีฟถึงเปิดตัว ไม่มีพิธีการ", en: "Brief to launch, without the theatre" }}
          aside={
            th
              ? { th: "สโคปชัด ราคาชัด และมีตัวอย่างจริงให้ดูระหว่างทาง", en: "No discovery marathons. A fixed scope, a fixed price, and a live preview before you pay the final invoice." }
              : { th: "สโคปชัด ราคาชัด และมีตัวอย่างจริงให้ดูระหว่างทาง", en: "No discovery marathons. A fixed scope, a fixed price, and a live preview before you pay the final invoice." }
          }
        />
        <ProcessSteps />
        <div className="mt-10 text-right">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-lime hover:text-paper transition-colors"
          >
            {th ? "ดูขั้นตอนทั้งหมด" : "See the process"} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 md:py-32 text-center">
          <p className="font-mono text-[13px] uppercase tracking-wider text-lime mb-6">
            04 / Start
          </p>
          <h2 className="text-4xl md:text-6xl tracking-tight leading-[1.08] max-w-3xl mx-auto">
            {th
              ? "มีสินค้าที่อยากขายออนไลน์?"
              : "Have a product that should sell itself?"}
          </h2>
          <p className="text-paper/60 text-sm md:text-base mt-6 max-w-md mx-auto leading-relaxed">
            {th
              ? "บอกว่าคุณกำลังสร้างอะไร เราตอบกลับภายใน 1 วันทำการพร้อมสโคปและราคา"
              : "Tell us what you are building. We reply within one business day with a scope and a price."}
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-lime text-ink px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors mt-10"
          >
            {th ? "ขอใบเสนอราคา" : "Get a quote"}
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
