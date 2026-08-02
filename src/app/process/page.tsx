"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import { useLang } from "@/lib/lang";

export default function ProcessPage() {
  const { lang } = useLang();
  const th = lang === "th";
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24">
        <SectionHeading
          index="Process"
          title={th ? { th: "ทำงานยังไง", en: "How we work" } : { th: "ทำงานยังไง", en: "How we work" }}
          aside={th ? { th: "สี่ขั้นตอน จากการวินิจฉัยถึงเปิดตัว :  คุณเห็นงานจริงระหว่างทาง", en: "Four steps from diagnose to launch. You see real work along the way." } : { th: "สี่ขั้นตอน จากการวินิจฉัยถึงเปิดตัว :  คุณเห็นงานจริงระหว่างทาง", en: "Four steps from diagnose to launch. You see real work along the way." }}
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-16 md:pb-20">
        <ProcessSteps />
      </section>

      <section className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
          <SectionHeading
            index="The AI angle"
            title={th ? { th: "ทีมของคุณ บวก AI สควอด", en: "Your team, plus an AI squad" } : { th: "ทีมของคุณ บวก AI สควอด", en: "Your team, plus an AI squad" }}
            aside={th ? { th: "เราใช้ AI ขับเคลื่อนงานประจำวัน ไม่ใช่แค่พูดถึง :  เขียนโค้ด ออกแบบ ตรวจ QA และวางแผนโดยมี AI ช่วยทำงาน", en: "AI drives the daily work, not just the pitch: code, design, QA and planning." } : { th: "เราใช้ AI ขับเคลื่อนงานประจำวัน ไม่ใช่แค่พูดถึง :  เขียนโค้ด ออกแบบ ตรวจ QA และวางแผนโดยมี AI ช่วยทำงาน", en: "AI drives the daily work, not just the pitch: code, design, QA and planning." }}
          />
          <div className="border hairline bg-ink-2 p-6 md:p-10">
            <p className="text-paper/80 leading-relaxed text-lg max-w-3xl">
              {th
                ? "ทุกโปรเจกต์มีคนจริงดูแลบรีฟและตัดสินใจ แต่งานซ้ำๆ อย่างการเขียนโค้ดกรอบ การตรวจ QA และการรายงานสถานะ ใช้ AI ทำงานแทน ทำให้ส่งมอบเร็วขึ้นและราคาแข่งขันได้ โดยไม่ลดคุณภาพงาน"
                : "Real humans own the brief and the decisions. The repetitive work: scaffolding, QA sweeps, status reporting, is handled by AI. Faster delivery, competitive pricing, no quality drop."}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="border hairline bg-ink-2 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-lg md:text-xl tracking-tight">
              {th ? "พร้อมเริ่มหรือยัง?" : "Ready to start?"}
            </p>
            <p className="text-paper/60 text-sm mt-1">
              {th ? "ส่งบรีฟมา เราวางแผนให้ภายใน 1 วันทำการ" : "Send the brief and get a plan within one business day."}
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-lime text-ink px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors shrink-0"
          >
            {th ? "เริ่มโปรเจกต์" : "Start a project"}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
