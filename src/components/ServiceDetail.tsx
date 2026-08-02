"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { services } from "@/lib/data";
import { t, useLang } from "@/lib/lang";

export default function ServiceDetail({ slug }: { slug: string }) {
  const { lang } = useLang();
  const th = lang === "th";
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-12 md:pb-16">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-mute hover:text-lime transition-colors mb-8"
        >
          ← {th ? "บริการทั้งหมด" : "All services"}
        </Link>
        <p className="font-mono text-[13px] uppercase tracking-wider text-lime mb-4">
          {service.num} / Services
        </p>
        <h1 className="text-5xl md:text-7xl tracking-tight leading-[1.05] max-w-3xl">
          {t(service.title, lang)}
        </h1>
        <p className="text-paper/60 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
          {t(service.tagline, lang)}
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-3">
                {th ? "เกี่ยวกับบริการนี้" : "About this service"}
              </p>
              <p className="text-paper/80 leading-relaxed text-lg">
                {t(service.desc, lang)}
              </p>
            </div>

            <div>
              <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-3">
                {th ? "เหมาะสำหรับ" : "Who it is for"}
              </p>
              <p className="text-paper/70 leading-relaxed">
                {t(service.forWhom, lang)}
              </p>
            </div>

            <div className="border hairline bg-ink-2 p-6 md:p-8">
              <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-4">
                {th ? "สิ่งที่คุณจะได้" : "What you get"}
              </p>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d.en} className="flex items-start gap-3 text-paper/80">
                    <span className="text-lime mt-0.5">/</span>
                    {t(d, lang)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="border hairline bg-ink-2 p-6 md:p-8">
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
                  {th ? "ตัวอย่างผลงาน" : "Proof"}
                </p>
                <p className="text-xl tracking-tight mb-1">{service.proof.client}</p>
                <p className="text-paper/60 text-sm">{t(service.proof.note, lang)}</p>
                {service.proof.link ? (
                  <a
                    href={service.proof.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[13px] uppercase tracking-wider text-lime hover:text-paper transition-colors mt-3"
                  >
                    {th ? "เปิดเว็บจริง" : "Visit site"} <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </div>

              <div className="border hairline bg-ink-2 p-6 md:p-8">
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
                  {th ? "ราคาเริ่มต้น" : "Starting price"}
                </p>
                <p className="text-3xl md:text-4xl tracking-tight text-lime">
                  {t(service.starting, lang)}
                </p>
              </div>

              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 bg-lime text-ink px-6 py-4 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors"
              >
                {th ? "ขอใบเสนอราคา" : "Get a quote"}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/pricing"
                className="block text-center font-mono text-[13px] uppercase tracking-wider text-paper/60 hover:text-lime transition-colors"
              >
                {th ? "ดูแพ็กเกจทั้งหมด" : "See all packages"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
