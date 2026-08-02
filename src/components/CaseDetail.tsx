"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { caseStudies } from "@/lib/data";
import { t, useLang } from "@/lib/lang";

export default function CaseDetail({ slug }: { slug: string }) {
  const { lang } = useLang();
  const th = lang === "th";
  const c = caseStudies.find((x) => x.id === slug);
  if (!c) notFound();

  const sections = [
    { label: th ? "โจทย์" : "Problem", text: t(c.problem, lang) },
    { label: th ? "สิ่งที่เราสร้าง" : "What we built", text: t(c.built, lang) },
    { label: th ? "ผลลัพธ์" : "Result", text: t(c.result, lang) },
  ];

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-12 md:pb-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-mute hover:text-lime transition-colors mb-8"
        >
          ← {th ? "ผลงานทั้งหมด" : "All work"}
        </Link>
        <p className="font-mono text-[13px] uppercase tracking-wider text-lime mb-4">
          Case study / {t(c.status, lang)}
        </p>
        <h1 className="text-5xl md:text-7xl tracking-tight leading-[1.05]">
          {c.client}
        </h1>
        <p className="font-mono text-[13px] uppercase tracking-wider text-paper/60 mt-4">
          {t(c.scope, lang)}
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 space-y-10">
            {sections.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-3">
                  {s.label}
                </p>
                <p className="text-paper/80 leading-relaxed text-lg">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="border hairline bg-ink-2 p-6 md:p-8">
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-3">
                  {th ? "เทคโนโลยี" : "Stack"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="border hairline px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-paper/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[13px] uppercase tracking-wider text-lime hover:text-paper transition-colors mt-5"
                  >
                    {th ? "เปิดเว็บจริง" : "Visit site"} <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </div>

              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 bg-lime text-ink px-6 py-4 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors"
              >
                {th ? "อยากได้แบบนี้บ้าง" : "Want the same?"}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
