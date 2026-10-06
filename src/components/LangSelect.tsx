"use client";

import { useI18n, useT, LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n/client";

export function LangSelect({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  const t = useT();
  return (
    <div
      className={`inline-flex overflow-hidden rounded border border-zinc-700 text-xs ${className}`}
      role="group"
      aria-label={t("language")}
    >
      {LOCALES.map((l: Locale) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`px-2 py-1 uppercase transition ${
            locale === l
              ? "bg-amber-700 text-white"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          {l}
        </button>
      ))}
      <span className="sr-only">{LOCALE_LABELS[locale]}</span>
    </div>
  );
}
