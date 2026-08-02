const items = [
  { th: "เพจขายของ", en: "Sales pages" },
  { th: "ร้านค้า COD", en: "COD e-commerce" },
  { th: "คอร์สออนไลน์", en: "LMS platforms" },
  { th: "เว็บไซต์บริษัท", en: "Websites & CMS" },
  { th: "ระบบอัตโนมัติ", en: "Automations" },
  { th: "AI + ข้อมูล", en: "AI & data" },
  { th: "แพลตฟอร์ม", en: "Platform builds" },
  { th: "คัดลอกข้อความโฆษณา", en: "Conversion copy" },
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
            {item.th}
            <span className="text-lime">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
