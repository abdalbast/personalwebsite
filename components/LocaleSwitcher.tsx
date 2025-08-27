"use client";
import { useEffect, useState } from "react";

const options = [
  { code: "en", label: "EN" },
  { code: "sv", label: "SV" },
  { code: "ckb", label: "CKB" },
];

export default function LocaleSwitcher() {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    if (stored) setLocale(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <label className="inline-flex items-center gap-2 text-sm" aria-label="Change language">
      <span className="sr-only">Language</span>
      <select
        className="bg-transparent border border-white/10 rounded-md px-2 py-1"
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.code} value={o.code}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
