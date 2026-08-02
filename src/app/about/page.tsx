"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import TeamGrid from "@/components/TeamGrid";
import { useLang } from "@/lib/lang";

export default function AboutPage() {
  const { lang } = useLang();
  const th = lang === "th";
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24">
        <SectionHeading
          index="About"
          title={th ? { th: "ทีมที่สร้างเพจที่ขายได้", en: "The team behind the pages" } : { th: "ทีมที่สร้างเพจที่ขายได้", en: "The team behind the pages" }}
          aside={th ? { th: "HW Team คือทีมเว็บไซต์ในเครือธุรกิจของ CZ :  รวมคนจริงและ AI สควอด", en: "HW Team is the web unit inside CZ's business: real people plus an AI squad." } : { th: "HW Team คือทีมเว็บไซต์ในเครือธุรกิจของ CZ :  รวมคนจริงและ AI สควอด", en: "HW Team is the web unit inside CZ's business: real people plus an AI squad." }}
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-16 md:pb-20">
        <div className="space-y-6 max-w-3xl">
          <p className="text-paper/80 leading-relaxed text-lg">
            {th
              ? "HW Team เกิดจากคำถามง่ายๆ: ทำไมแบรนด์ไทยถึงต้องส่งงานเว็บไปให้ทีมต่างประเทศ หรือจ่ายแพงกับเอเจนซี่ที่ส่งงานล่าช้า? เรารวมงานออกแบบ พัฒนา และการตลาดไว้ในทีมเดียว :  กับ AI สควอดที่ช่วยเร่งงานซ้ำๆ"
              : "HW Team started with a simple question: why should Thai brands outsource their web work or overpay for agencies that deliver late? We combine design, development and marketing in one team, with an AI squad that accelerates the repetitive work."}
          </p>
          <p className="text-paper/70 leading-relaxed text-lg">
            {th
              ? "เราเชี่ยวชาญเรื่องที่คนไทยซื้อของจริง: เพจขายที่ยิงโฆษณาแล้วได้ออเดอร์ ร้านค้า COD ที่สั่งจบใน 3 ขั้นตอน และคอร์สออนไลน์ที่ส่งมอบอัตโนมัติ ทุกอย่างสร้างจากโปรเจกต์จริงของเราเอง :  ไม่มีสไลด์โชว์ ไม่มีภาพจำลอง"
              : "We specialize in what Thai buyers actually do: sales pages that turn ad traffic into orders, COD checkouts that finish in 3 steps, and courses that deliver automatically. Everything is built from real projects we shipped. No mockups, no slides."}
          </p>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
          <SectionHeading
            index="Team"
            title={th ? { th: "คนที่อยู่หลังงาน", en: "The people behind the builds" } : { th: "คนที่อยู่หลังงาน", en: "The people behind the builds" }}
            aside={th ? { th: "ทุกคนในหน้านี้ส่งมอบงานบนเว็บไซต์นี้จริง", en: "Everyone on this page has shipped the work on this site." } : { th: "ทุกคนในหน้านี้ส่งมอบงานบนเว็บไซต์นี้จริง", en: "Everyone on this page has shipped the work on this site." }}
          />
          <TeamGrid />
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="border hairline bg-ink-2 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-lg md:text-xl tracking-tight">
              {th ? "อยากรู้ว่าเราทำอะไรได้บ้าง?" : "Want to see what we can do?"}
            </p>
            <p className="text-paper/60 text-sm mt-1">
              {th ? "ดูผลงานจริง หรือส่งบรีฟมาเลย" : "Browse the work, or send us a brief."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 border hairline text-paper px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:border-lime hover:text-lime transition-colors"
            >
              {th ? "ดูผลงาน" : "See the work"}
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-lime text-ink px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors"
            >
              {th ? "ติดต่อเรา" : "Contact us"}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
