"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormat, useT } from "@/lib/i18n/client";

export function CombatQuickBar({
  characterId,
  hpCurrent,
  hpMax,
  hpTemp,
  ac,
  initiative,
  speed,
}: {
  characterId: string;
  hpCurrent: number;
  hpMax: number;
  hpTemp: number;
  ac: number;
  initiative: number;
  speed: number;
}) {
  const router = useRouter();
  const t = useT();
  const fmt = useFormat();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [confirmRest, setConfirmRest] = useState(false);

  async function patch(body: unknown) {
    setError(false);
    const res = await fetch(`/api/characters/${characterId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`PATCH ${res.status}`);
  }

  async function adjust(delta: number) {
    setBusy(true);
    try {
      let next = hpCurrent + delta;
      if (delta < 0 && hpTemp > 0) {
        const absorbed = Math.min(hpTemp, -delta);
        next = hpCurrent + (delta + absorbed);
        await patch({
          combat: { hpCurrent: Math.max(0, next), hpTemp: hpTemp - absorbed },
        });
      } else {
        await patch({ combat: { hpCurrent: Math.max(0, next) } });
      }
      router.refresh();
    } catch {
      setError(true);
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  async function longRest() {
    setBusy(true);
    try {
      await patch({
        combat: { hpCurrent: hpMax, hpTemp: 0, round: 0, conditions: [] },
        spellcasting: { slotsUsed: {} },
      });
      setConfirmRest(false);
      router.refresh();
    } catch {
      setError(true);
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  const hpColor =
    hpCurrent <= 0
      ? "text-red-500"
      : hpCurrent < hpMax / 4
        ? "text-amber-400"
        : "text-emerald-400";

  return (
    <div className="sticky top-0 z-20 -mx-4 mb-6 border-b border-zinc-800 bg-zinc-950/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border sm:px-5">
      {error && (
        <p
          role="alert"
          className="mb-2 rounded-md border border-red-900 bg-red-950/40 px-3 py-1.5 text-xs text-red-400"
        >
          {t("api.generic")}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex items-center gap-3 rounded-md border border-zinc-800 px-3 py-1.5">
          <div className="text-center">
            <p className="text-[10px] uppercase text-zinc-500">
              {t("sheet.acAbbr")}
            </p>
            <p className="text-xl font-bold text-zinc-100">{fmt.num(ac)}</p>
          </div>
          <div className="h-8 w-px bg-zinc-800" />
          <div className="text-center">
            <p className="text-[10px] uppercase text-zinc-500">
              {t("sheet.initiative")}
            </p>
            <p className="text-xl font-bold text-zinc-100">
              {initiative >= 0 ? `+${fmt.num(initiative)}` : fmt.num(initiative)}
            </p>
          </div>
          <div className="h-8 w-px bg-zinc-800" />
          <div className="text-center">
            <p className="text-[10px] uppercase text-zinc-500">
              {t("sheet.speedAbbr")}
            </p>
            <p className="text-xl font-bold text-zinc-100">
              {fmt.distance(speed)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-md border border-zinc-800 px-3 py-1.5">
          <div className="text-center">
            <p className="text-[10px] uppercase text-zinc-500">
              {t("sheet.hpAbbr")}
            </p>
            <p
              className={`text-xl font-bold ${hpColor}`}
              role="status"
              aria-live="polite"
            >
              {fmt.num(hpCurrent)}
              <span className="text-sm text-zinc-500">/{fmt.num(hpMax)}</span>
            </p>
          </div>
          {hpTemp > 0 && (
            <>
              <div className="h-8 w-px bg-zinc-800" />
              <div className="text-center">
                <p className="text-[10px] uppercase text-zinc-500">
                  {t("sheet.tempAbbr")}
                </p>
                <p className="text-xl font-bold text-sky-400">{fmt.num(hpTemp)}</p>
              </div>
            </>
          )}
          <div className="flex gap-1">
            {[-5, -1, 1, 5].map((delta) => (
              <button
                key={delta}
                disabled={busy}
                aria-label={
                  delta < 0
                    ? t("sheet.damageBy", { n: fmt.num(-delta) })
                    : t("sheet.healBy", { n: fmt.num(delta) })
                }
                onClick={() => void adjust(delta)}
                className={`h-8 w-9 rounded-md border text-xs font-bold transition disabled:opacity-50 ${
                  delta < 0
                    ? "border-red-900 text-red-400 hover:bg-red-950/60"
                    : "border-emerald-800 text-emerald-400 hover:bg-emerald-950/60"
                }`}
              >
                {delta > 0 ? `+${fmt.num(delta)}` : fmt.num(delta)}
              </button>
            ))}
          </div>
        </div>

        {confirmRest ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => void longRest()}
              disabled={busy}
              className="rounded-md bg-amber-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-amber-500 disabled:opacity-50"
            >
              {t("sheet.confirmRest")}
            </button>
            <button
              onClick={() => setConfirmRest(false)}
              disabled={busy}
              className="rounded-md border border-zinc-700 px-3 py-2 text-xs text-zinc-300 transition hover:border-zinc-500"
            >
              {t("common.cancel")}
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmRest(true)}
            disabled={busy}
            className="rounded-md border border-amber-800 px-3 py-2 text-xs text-amber-400 transition hover:bg-amber-950/60 disabled:opacity-50"
          >
            {t("sheet.longRest")}
          </button>
        )}

        <div className="ml-auto flex gap-2">
          <Link
            href={`/character/${characterId}/edit`}
            className="btn-primary rounded-md px-4 py-2 text-sm font-medium text-white"
          >
            {t("sheet.editSheet")}
          </Link>
        </div>
      </div>
    </div>
  );
}
