"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Bi, L } from "@/lib/data";

const LangContext = createContext<{
  lang: L;
  setLang: (l: L) => void;
}>({ lang: "th", setLang: () => {} });

function getInitialLang(): L {
  if (typeof window === "undefined") return "th";
  const stored = window.localStorage.getItem("hw-lang");
  return stored === "en" || stored === "th" ? stored : "th";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<L>(getInitialLang);

  const setLang = (l: L) => {
    setLangState(l);
    window.localStorage.setItem("hw-lang", l);
    document.documentElement.lang = l === "th" ? "th" : "en";
  };

  // sync <html lang> once on mount
  useEffect(() => {
    document.documentElement.lang = lang === "th" ? "th" : "en";
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/** Pick the localized string for a bilingual field. */
export function t(bi: Bi, lang: L): string {
  return bi[lang] || bi.th;
}
