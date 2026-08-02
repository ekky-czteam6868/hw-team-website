const steps = [
  {
    num: "01",
    title: "Brief",
    desc: "We scope the offer, the audience and the funnel. You get a fixed quote and a timeline before we write a line of code.",
  },
  {
    num: "02",
    title: "Build",
    desc: "Design and development in-house, in weekly loops. You see a live preview as it ships, not a slide deck.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "Deployment, tracking, pixels and payment flows verified against a checklist. We do not hand over a broken page.",
  },
  {
    num: "04",
    title: "Optimize",
    desc: "Post-launch we watch the numbers with you and iterate on the pages and flows that actually move revenue.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border hairline">
      {steps.map((s) => (
        <div key={s.num} className="bg-ink p-6 md:p-8">
          <p className="font-mono text-[13px] text-lime mb-4">{s.num}</p>
          <h3 className="text-xl md:text-2xl tracking-tight mb-3">{s.title}</h3>
          <p className="text-paper/60 text-sm leading-relaxed max-w-sm">
            {s.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
