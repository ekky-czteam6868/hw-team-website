"use client";

import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";
import TeamGrid from "@/components/TeamGrid";
import { site } from "@/lib/data";
import { useLang } from "@/lib/lang";

export default function ContactPage() {
  const { lang } = useLang();
  const th = lang === "th";
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-16 md:pb-20">
        <SectionHeading
          index="Contact"
          title={th ? { th: "บอกเราว่าจะสร้างอะไร", en: "Tell us what you are building" } : { th: "บอกเราว่าจะสร้างอะไร", en: "Tell us what you are building" }}
          aside={th ? { th: "สโคปและราคาภายใน 1 วันทำการ ไม่มีเงื่อนไข ไม่มีสคริปต์ขาย", en: "A scope and a price within one business day. No obligation, no sales script." } : { th: "สโคปและราคาภายใน 1 วันทำการ ไม่มีเงื่อนไข ไม่มีสคริปต์ขาย", en: "A scope and a price within one business day. No obligation, no sales script." }}
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          <div className="lg:col-span-5">
            <div className="border hairline bg-ink-2 p-6 md:p-8 space-y-8">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-paper hover:text-lime transition-colors break-all"
                >
                  {site.contactEmail}
                </a>
              </div>
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
                  Telegram
                </p>
                <a
                  href={`https://t.me/${site.telegram.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper hover:text-lime transition-colors"
                >
                  {site.telegram}
                </a>
                <p className="text-paper/50 text-sm mt-1">
                  {th ? "เร็วที่สุดสำหรับคำถามสั้นๆ" : "Fastest for a quick question."}
                </p>
              </div>
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
                  {th ? "ที่ตั้ง" : "Location"}
                </p>
                <p className="text-paper">{th ? "กรุงเทพฯ ประเทศไทย" : "Bangkok, Thailand"}</p>
                <p className="text-paper/50 text-sm mt-1">
                  {th ? "ทำงานกับลูกค้าทั่วเอเชียตะวันออกเฉียงใต้" : "Working with clients across SEA."}
                </p>
              </div>
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
                  {th ? "เวลาตอบกลับ" : "Response time"}
                </p>
                <p className="text-paper">
                  {th ? "ภายใน 1 วันทำการ" : "Within one business day"}
                </p>
                <p className="text-paper/50 text-sm mt-1">
                  {th ? "คิดราคาจากบรีฟ ไม่ใช่จากการโทรขาย" : "Quotes scoped from the brief, not a sales call."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
          <SectionHeading
            index="Team"
            title={th ? { th: "คนที่คุณจะได้คุยด้วย", en: "Who you will talk to" } : { th: "คนที่คุณจะได้คุยด้วย", en: "Who you will talk to" }}
            aside={th ? { th: "ทุกคนในหน้านี้ส่งมอบงานบนเว็บไซต์นี้จริง", en: "Everyone on this list has shipped the work on this site." } : { th: "ทุกคนในหน้านี้ส่งมอบงานบนเว็บไซต์นี้จริง", en: "Everyone on this list has shipped the work on this site." }}
          />
          <TeamGrid />
        </div>
      </section>
    </>
  );
}
