"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore, useState } from "react";
import { List, X } from "@/components/Icons";
import { nav } from "@/lib/data";
import { t, useLang } from "@/lib/lang";

function subscribe(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

function getSnapshot() {
  return window.scrollY > 8;
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const { lang, setLang } = useLang();

  const toggleLang = () => setLang(lang === "th" ? "en" : "th");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-mono text-sm tracking-tight text-lime">
            HW/
          </span>
          <span className="font-mono text-sm tracking-tight text-paper group-hover:text-lime transition-colors">
            TEAM
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-mono text-[12px] uppercase tracking-wider transition-colors ${
                  active ? "text-lime" : "text-paper/70 hover:text-paper"
                }`}
              >
                {t(l.label, lang)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="font-mono text-[12px] uppercase tracking-wider border hairline px-3 py-1.5 text-paper/80 hover:border-lime hover:text-lime transition-colors"
            aria-label="Switch language"
          >
            {lang === "th" ? "EN" : "ไทย"}
          </button>
          <Link
            href="/contact"
            className="font-mono text-[12px] uppercase tracking-wider bg-lime text-ink px-4 py-2 hover:bg-paper transition-colors"
          >
            {lang === "th" ? "ขอใบเสนอราคา" : "Get a quote"}
          </Link>
        </div>

        <button
          className="lg:hidden text-paper"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t hairline bg-ink">
          <div className="px-4 py-4 flex flex-col gap-1">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-mono text-sm uppercase tracking-wider text-paper/80 hover:text-lime"
              >
                {t(l.label, lang)}
              </Link>
            ))}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={toggleLang}
                className="flex-1 py-3 border hairline font-mono text-sm uppercase tracking-wider text-paper/80 text-center"
              >
                {lang === "th" ? "English" : "ไทย"}
              </button>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 py-3 px-4 bg-lime text-ink font-mono text-sm uppercase tracking-wider text-center"
              >
                {lang === "th" ? "ขอใบเสนอราคา" : "Get a quote"}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
