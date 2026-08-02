"use client";

import { team } from "@/lib/data";
import { useLang } from "@/lib/lang";

export default function TeamGrid() {
  const { lang } = useLang();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border hairline">
      {team.map((m) => (
        <div key={m.name} className="bg-ink p-6 md:p-8">
          <div className="flex items-center gap-4 mb-5">
            <span className="flex h-12 w-12 items-center justify-center bg-lime text-ink font-mono text-sm tracking-tight">
              {m.initials}
            </span>
            <div>
              <h3 className="text-lg tracking-tight">{m.name}</h3>
              <p className="font-mono text-[12px] uppercase tracking-wider text-mute mt-0.5">
                {m.role[lang]}
              </p>
            </div>
          </div>
          <p className="text-paper/60 text-sm leading-relaxed">{m.bio[lang]}</p>
        </div>
      ))}
    </div>
  );
}
