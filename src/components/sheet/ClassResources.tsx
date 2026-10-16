"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  RESOURCE_I18N_KEY,
  isResourceKey,
  type ClassResourceState,
} from "@/domain/resources";
import { Card } from "@/components/ui";
import { useFormat, useT } from "@/lib/i18n/client";

export function ClassResources({
  characterId,
  resources,
}: {
  characterId: string;
  resources: ClassResourceState[];
}) {
  const router = useRouter();
  const t = useT();
  const fmt = useFormat();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  const usedMap = Object.fromEntries(resources.map((r) => [r.key, r.used]));

  async function setResources(next: Record<string, number>) {
    setError(false);
    setBusy(true);
    try {
      const res = await fetch(`/api/characters/${characterId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resources: next }),
      });
      if (!res.ok) throw new Error(`PATCH ${res.status}`);
      router.refresh();
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  function labelOf(key: string) {
    return isResourceKey(key) ? t(RESOURCE_I18N_KEY[key]) : key;
  }

  if (resources.length === 0) return null;

  return (
    <Card title={t("sheet.resources")} accent="violet">
      {error && (
        <p role="alert" className="mb-2 text-xs text-red-400">
          {t("api.generic")}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        {resources.map((r) => {
          const label = labelOf(r.key);
          const max = r.max;
          if (max === null) {
            // Unlimited resource (e.g. a level 20 barbarian's rages).
            return (
              <div key={r.key} className="flex items-center gap-2">
                <span className="text-sm font-semibold text-zinc-200">
                  {label}
                </span>
                <button
                  type="button"
                  disabled={busy || r.used <= 0}
                  aria-label={`${label} −1`}
                  onClick={() =>
                    void setResources({
                      ...usedMap,
                      [r.key]: Math.max(0, r.used - 1),
                    })
                  }
                  className="h-7 w-7 rounded-md border border-zinc-700 text-zinc-300 transition hover:border-teal-600 disabled:opacity-50"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm tabular-nums text-zinc-100">
                  {fmt.num(r.used)}
                </span>
                <button
                  type="button"
                  disabled={busy}
                  aria-label={`${label} +1`}
                  onClick={() =>
                    void setResources({ ...usedMap, [r.key]: r.used + 1 })
                  }
                  className="h-7 w-7 rounded-md border border-zinc-700 text-zinc-300 transition hover:border-teal-600 disabled:opacity-50"
                >
                  +
                </button>
                <span className="text-xs text-zinc-500">∞</span>
              </div>
            );
          }
          return (
            <div key={r.key} className="flex items-center gap-2">
              <span className="text-sm font-semibold text-zinc-200">
                {label}
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: max }, (_, i) => {
                  const filled = i < r.used;
                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={busy}
                      aria-label={`${label} ${fmt.num(i + 1)}/${fmt.num(max)}`}
                      onClick={() => {
                        // Clicking an empty pip fills up to it; a filled one
                        // empties from it (same feel as the spell slots).
                        const next = i < r.used ? i : i + 1;
                        void setResources({ ...usedMap, [r.key]: next });
                      }}
                      className={`h-2.5 w-2.5 rounded-full border transition disabled:opacity-50 ${
                        filled
                          ? "border-teal-400 bg-teal-400"
                          : "border-zinc-700 bg-transparent hover:border-zinc-400"
                      }`}
                    />
                  );
                })}
              </div>
              <span className="text-xs tabular-nums text-zinc-400">
                {fmt.num(Math.max(0, max - r.used))}/{fmt.num(max)}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
