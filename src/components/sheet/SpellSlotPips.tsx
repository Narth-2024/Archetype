"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { SlotGroup } from "@/data";
import { useFormat, useT } from "@/lib/i18n/client";

export function SpellSlotPips({
  characterId,
  groups,
  used,
}: {
  characterId: string;
  groups: SlotGroup[];
  used: Record<string, number>;
}) {
  const router = useRouter();
  const t = useT();
  const fmt = useFormat();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  async function setSlots(slotsUsed: Record<string, number>) {
    setError(false);
    setBusy(true);
    try {
      const res = await fetch(`/api/characters/${characterId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spellcasting: { slotsUsed } }),
      });
      if (!res.ok) throw new Error(`PATCH ${res.status}`);
      router.refresh();
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  function togglePip(key: string, index: number, current: number) {
    // Clicking an empty pip fills up to it; clicking a filled one empties from it.
    const next = index < current ? index : index + 1;
    void setSlots({ ...used, [key]: next });
  }

  return (
    <div className="flex flex-col gap-1.5">
      {error && (
        <p role="alert" className="text-xs text-red-400">
          {t("api.generic")}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {groups.map((g) => {
          const key = g.source === "pact" ? `pacto${g.level}` : String(g.level);
          const u = used[key] ?? 0;
          const groupLabel =
            g.source === "pact"
              ? t("sheet.spellLevelPact", { level: fmt.num(g.level) })
              : t("sheet.spellLevel", { level: fmt.num(g.level) });
          const toggleLabel =
            g.source === "pact"
              ? t("sheet.slotToggleAriaPact", { level: fmt.num(g.level) })
              : t("sheet.slotToggleAria", { level: fmt.num(g.level) });
          return (
            <div key={key} className="flex items-center gap-2">
              <span className="text-xs text-zinc-500">{groupLabel}</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: g.max }, (_, i) => {
                  const filled = i < u;
                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={busy}
                      aria-label={`${toggleLabel} ${fmt.num(i + 1)}/${fmt.num(g.max)}`}
                      onClick={() => togglePip(key, i, u)}
                      className={`h-2.5 w-2.5 border transition disabled:opacity-50 ${
                        g.source === "pact" ? "rounded-sm" : "rounded-full"
                      } ${
                        filled
                          ? g.source === "pact"
                            ? "border-violet-500 bg-violet-500"
                            : "border-amber-400 bg-amber-400"
                          : "border-zinc-700 bg-transparent hover:border-zinc-400"
                      }`}
                    />
                  );
                })}
              </div>
              <span className="text-xs tabular-nums text-zinc-400">
                {fmt.num(Math.max(0, g.max - u))}/{fmt.num(g.max)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
