"use client";

import { processSteps } from "@/lib/data";
import { useLang } from "@/lib/lang";

export default function ProcessSteps() {
  const { lang } = useLang();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border hairline">
      {processSteps.map((s) => (
        <div key={s.num} className="bg-ink p-6 md:p-8">
          <p className="font-mono text-[13px] text-lime mb-4">{s.num}</p>
          <h3 className="text-xl md:text-2xl tracking-tight mb-3">
            {s.title[lang]}
          </h3>
          <p className="text-paper/60 text-sm leading-relaxed max-w-sm">
            {s.desc[lang]}
          </p>
        </div>
      ))}
    </div>
  );
}
