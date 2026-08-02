type Props = {
  index: string;
  title: string;
  aside?: string;
};

export default function SectionHeading({ index, title, aside }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
      <div>
        <p className="font-mono text-[13px] uppercase tracking-wider text-lime mb-4">
          {index}
        </p>
        <h2 className="text-4xl md:text-6xl tracking-tighter leading-[1.02] max-w-2xl">
          {title}
        </h2>
      </div>
      {aside ? (
        <p className="text-paper/60 text-sm leading-relaxed max-w-xs md:text-right">
          {aside}
        </p>
      ) : null}
    </div>
  );
}
