"use client";

import { useState } from "react";
import { PaperPlaneTilt, Check } from "@/components/Icons";
import { contactEmail } from "@/lib/data";

export default function QuoteForm() {
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
      `Project inquiry from ${form.name || "the website"}${form.company ? ` (${form.company})` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border hairline bg-ink-2 p-8 md:p-10 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink mb-5">
          <Check size={22} />
        </span>
        <h3 className="text-2xl tracking-tight mb-3">Your email client should be open</h3>
        <p className="text-paper/60 text-sm leading-relaxed max-w-sm mx-auto">
          Send the prefilled message and we will reply within one business day.
          Prefer chat? Reach us on Telegram at @cznakinkul.
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
            Name
          </label>
          <input id="name" required value={form.name} onChange={update("name")} className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="company" className="block font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
            Company
          </label>
          <input id="company" value={form.company} onChange={update("company")} className={inputCls} placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
            Email
          </label>
          <input id="email" type="email" required value={form.email} onChange={update("email")} className={inputCls} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="budget" className="block font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
            Budget range
          </label>
          <select id="budget" value={form.budget} onChange={update("budget")} className={inputCls}>
            <option value="">Select a range</option>
            <option>Under 50k THB</option>
            <option>50k to 150k THB</option>
            <option>150k to 500k THB</option>
            <option>500k+ THB</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
            Project
          </label>
          <textarea id="message" required rows={5} value={form.message} onChange={update("message")} className={inputCls} placeholder="What are you building, and what should it achieve?" />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 bg-lime text-ink px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-paper transition-colors"
        >
          Send inquiry
          <PaperPlaneTilt size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
        <p className="font-mono text-[12px] text-mute">
          Opens your email client. No spam, ever.
        </p>
      </div>
    </form>
  );
}
