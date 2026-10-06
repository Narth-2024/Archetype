"use client";

import { useI18n, useT, type Units } from "@/lib/i18n/client";

const OPTIONS: Units[] = ["metric", "imperial"];

export function UnitsSelect({ className = "" }: { className?: string }) {
  const { units, setUnits } = useI18n();
  const t = useT();
  return (
    <div
      className={`inline-flex overflow-hidden rounded border border-zinc-700 text-xs ${className}`}
      role="group"
      aria-label={t("units.label")}
    >
      {OPTIONS.map((u) => (
        <button
          key={u}
          type="button"
          onClick={() => setUnits(u)}
          aria-pressed={units === u}
          className={`px-2 py-1 transition ${
            units === u
              ? "bg-amber-700 text-white"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          {t(`units.${u}`)}
        </button>
      ))}
    </div>
  );
}
