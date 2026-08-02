"use client";

import { useState } from "react";
import { PaperPlaneTilt, Check } from "@/components/Icons";
import { site } from "@/lib/data";
import { useLang } from "@/lib/lang";

export default function QuoteForm() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${lang === "th" ? "สอบถามโปรเจกต์จาก" : "Project inquiry from"} ${form.name || "website"}${form.company ? ` (${form.company})` : ""}`
    );
    const body = encodeURIComponent(
      `${lang === "th" ? "ชื่อ" : "Name"}: ${form.name}\n${lang === "th" ? "บริษัท" : "Company"}: ${form.company}\nEmail: ${form.email}\n${lang === "th" ? "งบประมาณ" : "Budget"}: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border hairline bg-ink-2 p-8 md:p-10 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink mb-5">
          <Check size={22} />
        </span>
        <h3 className="text-2xl tracking-tight mb-3">
          {lang === "th" ? "เปิดอีเมลของคุณแล้ว" : "Your email client should be open"}
        </h3>
        <p className="text-paper/60 text-sm leading-relaxed max-w-sm mx-auto">
          {lang === "th"
            ? "ส่งข้อความที่เตรียมไว้แล้ว เราจะตอบกลับภายใน 1 วันทำการ หรือแชทเร็วกว่านั้นที่ Telegram @cznakinkul"
            : "Send the prefilled message and we will reply within one business day. Prefer chat? Reach us on Telegram at @cznakinkul."}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-ink border hairline px-4 py-3 text-sm text-paper placeholder:text-mute/70 focus:border-lime focus:outline-none transition-colors";

  return (
    <form onSubmit={submit} className="border hairline bg-ink-2 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
            {lang === "th" ? "ชื่อ" : "Name"}
          </label>
          <input id="name" required value={form.name} onChange={update("name")} className={inputCls} placeholder={lang === "th" ? "ชื่อของคุณ" : "Your name"} />
        </div>
        <div>
          <label htmlFor="company" className="block font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
            {lang === "th" ? "บริษัท" : "Company"}
          </label>
          <input id="company" value={form.company} onChange={update("company")} className={inputCls} placeholder={lang === "th" ? "ไม่จำเป็น" : "Optional"} />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
            Email
          </label>
          <input id="email" type="email" required value={form.email} onChange={update("email")} className={inputCls} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="budget" className="block font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
            {lang === "th" ? "งบประมาณ" : "Budget range"}
          </label>
          <select id="budget" value={form.budget} onChange={update("budget")} className={inputCls}>
            <option value="">{lang === "th" ? "เลือกช่วงงบ" : "Select a range"}</option>
            <option>ต่ำกว่า 50,000 บาท</option>
            <option>50,000 - 150,000 บาท</option>
            <option>150,000 - 500,000 บาท</option>
            <option>500,000+ บาท</option>
            <option>{lang === "th" ? "ยังไม่แน่ใจ" : "Not sure yet"}</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
            {lang === "th" ? "โปรเจกต์" : "Project"}
          </label>
          <textarea id="message" required rows={5} value={form.message} onChange={update("message")} className={inputCls} placeholder={lang === "th" ? "เล่าให้ฟังว่าอยากสร้างอะไร และต้องการให้ได้ผลลัพธ์อะไร" : "What are you building, and what should it achieve?"} />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 bg-lime text-ink px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors"
        >
          {lang === "th" ? "ส่งคำถาม" : "Send inquiry"}
          <PaperPlaneTilt size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
        <p className="font-mono text-[12px] text-mute">
          {lang === "th" ? "เปิดอีเมลของคุณ ไม่มีสแปมแน่นอน" : "Opens your email client. No spam, ever."}
        </p>
      </div>
    </form>
  );
}
