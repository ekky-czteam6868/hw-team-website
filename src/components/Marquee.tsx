const items = [
  "Sales pages",
  "COD e-commerce",
  "LMS platforms",
  "Websites & CMS",
  "Automations",
  "Integrations",
  "Platform builds",
  "Conversion copy",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y hairline py-5 overflow-hidden" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm uppercase tracking-wider text-paper/60 flex items-center gap-10"
          >
            {item}
            <span className="text-lime">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
