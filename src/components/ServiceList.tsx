import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import { services } from "@/lib/data";

export default function ServiceList() {
  return (
    <div className="border-t hairline">
      {services.map((s) => (
        <Link
          key={s.id}
          href={`/services#${s.id}`}
          className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start md:items-center py-8 md:py-10 border-b hairline hover:bg-ink-2 transition-colors px-4 md:px-8 -mx-4 md:-mx-8"
        >
          <span className="font-mono text-[13px] text-mute md:col-span-1">
            {s.num}
          </span>
          <div className="md:col-span-4">
            <h3 className="text-2xl md:text-3xl tracking-tight group-hover:text-lime transition-colors">
              {s.title}
            </h3>
          </div>
          <p className="font-mono text-[12px] uppercase tracking-wider text-lime md:col-span-2">
            {s.tagline}
          </p>
          <p className="text-paper/70 text-sm leading-relaxed md:col-span-4">
            {s.desc}
          </p>
          <span className="md:col-span-1 justify-self-end text-paper/40 group-hover:text-lime transition-colors">
            <ArrowUpRight size={20} />
          </span>
        </Link>
      ))}
    </div>
  );
}
