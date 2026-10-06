"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ft } from "@/domain/units";

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
  const [busy, setBusy] = useState(false);

  async function adjust(delta: number) {
    setBusy(true);
    try {
      let next = hpCurrent + delta;
      if (delta < 0 && hpTemp > 0) {
        const absorbed = Math.min(hpTemp, -delta);
        next = hpCurrent + (delta + absorbed);
        await fetch(`/api/characters/${characterId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            combat: { hpCurrent: Math.max(0, next), hpTemp: hpTemp - absorbed },
          }),
        });
      } else {
        await fetch(`/api/characters/${characterId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ combat: { hpCurrent: Math.max(0, next) } }),
        });
      }
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  async function longRest() {
    setBusy(true);
    try {
      await fetch(`/api/characters/${characterId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          combat: { hpCurrent: hpMax, hpTemp: 0 },
        }),
      });
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
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex items-center gap-3 rounded-md border border-zinc-800 px-3 py-1.5">
          <div className="text-center">
            <p className="text-[10px] uppercase text-zinc-500">CA</p>
            <p className="text-xl font-bold text-zinc-100">{ac}</p>
          </div>
          <div className="h-8 w-px bg-zinc-800" />
          <div className="text-center">
            <p className="text-[10px] uppercase text-zinc-500">Iniciativa</p>
            <p className="text-xl font-bold text-zinc-100">
              {initiative >= 0 ? `+${initiative}` : initiative}
            </p>
          </div>
          <div className="h-8 w-px bg-zinc-800" />
          <div className="text-center">
            <p className="text-[10px] uppercase text-zinc-500">Desloc.</p>
            <p className="text-xl font-bold text-zinc-100">{ft(speed)}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-md border border-zinc-800 px-3 py-1.5">
          <div className="text-center">
            <p className="text-[10px] uppercase text-zinc-500">PV</p>
            <p className={`text-xl font-bold ${hpColor}`}>
              {hpCurrent}
              <span className="text-sm text-zinc-500">/{hpMax}</span>
            </p>
          </div>
          {hpTemp > 0 && (
            <>
              <div className="h-8 w-px bg-zinc-800" />
              <div className="text-center">
                <p className="text-[10px] uppercase text-zinc-500">Temp</p>
                <p className="text-xl font-bold text-sky-400">{hpTemp}</p>
              </div>
            </>
          )}
          <div className="flex gap-1">
            {[-5, -1, 1, 5].map((delta) => (
              <button
                key={delta}
                disabled={busy}
                onClick={() => void adjust(delta)}
                className={`h-8 w-9 rounded-md border text-xs font-bold transition disabled:opacity-50 ${
                  delta < 0
                    ? "border-red-900 text-red-400 hover:bg-red-950/60"
                    : "border-emerald-800 text-emerald-400 hover:bg-emerald-950/60"
                }`}
              >
                {delta > 0 ? `+${delta}` : delta}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={longRest}
          disabled={busy}
          className="rounded-md border border-amber-800 px-3 py-2 text-xs text-amber-400 transition hover:bg-amber-950/60 disabled:opacity-50"
        >
          ☾ Descanso longo
        </button>

        <div className="ml-auto flex gap-2">
          <Link
            href={`/character/${characterId}/edit`}
            className="btn-primary rounded-md px-4 py-2 text-sm font-medium text-white"
          >
            Editar ficha
          </Link>
        </div>
      </div>
    </div>
  );
}
