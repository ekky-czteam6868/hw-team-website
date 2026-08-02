import { ArrowUpRight } from "@/components/Icons";
import { caseStudies } from "@/lib/data";

export default function CaseRows() {
  return (
    <div className="border-t hairline">
      {caseStudies.map((c) => (
        <div
          key={c.id}
          className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start md:items-center py-7 md:py-8 border-b hairline hover:bg-ink-2 transition-colors px-4 md:px-8 -mx-4 md:-mx-8"
        >
          <div className="md:col-span-3">
            <h3 className="text-xl md:text-2xl tracking-tight group-hover:text-lime transition-colors">
              {c.client}
            </h3>
          </div>
          <p className="text-paper/70 text-sm md:col-span-3">{c.scope}</p>
          <p className="text-paper/50 text-sm md:col-span-4">{c.result}</p>
          <div className="md:col-span-2 flex flex-wrap gap-2 md:justify-end">
            {c.url ? (
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-wider text-lime hover:text-paper transition-colors"
              >
                Live <ArrowUpRight size={14} />
              </a>
            ) : (
              <span className="font-mono text-[12px] uppercase tracking-wider text-mute">
                {c.tags.slice(0, 2).join(" / ")}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
