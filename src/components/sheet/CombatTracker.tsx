"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { CombatCondition } from "@/domain/types";
import {
  CONDITION_I18N_KEY,
  CONDITION_KEYS,
  conditionEffects,
  type ConditionKey,
} from "@/domain/conditions";
import { rollDie } from "@/domain/dice";
import { Card, NumberInput, Select } from "@/components/ui";
import { useFormat, useT } from "@/lib/i18n/client";

export function CombatTracker({
  characterId,
  round,
  conditions,
  conSaveBonus,
}: {
  characterId: string;
  round: number;
  conditions: CombatCondition[];
  conSaveBonus: number;
}) {
  const router = useRouter();
  const t = useT();
  const fmt = useFormat();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [pick, setPick] = useState("");
  const [rounds, setRounds] = useState(0);
  const [concRoll, setConcRoll] = useState<{ d20: number; total: number } | null>(
    null,
  );

  const effects = conditionEffects(conditions);
  const effectLabels = [
    effects.attackRoll === "disadvantage"
      ? t("sheet.effects.attacksDisadvantage")
      : null,
    effects.attackRoll === "advantage"
      ? t("sheet.effects.attacksAdvantage")
      : null,
    effects.checksDisadvantage ? t("sheet.effects.checksDisadvantage") : null,
    effects.attacksAgainstAdvantage
      ? t("sheet.effects.againstAdvantage")
      : null,
    effects.speedZero ? t("sheet.effects.speedZero") : null,
    effects.autoCritMelee ? t("sheet.effects.autoCrit") : null,
    effects.cannotAct ? t("sheet.effects.cannotAct") : null,
    effects.concentration ? t("sheet.effects.concentration") : null,
  ].filter((label): label is string => Boolean(label));

  async function patchCombat(body: {
    round?: number;
    conditions?: CombatCondition[];
  }) {
    setError(false);
    setBusy(true);
    try {
      const res = await fetch(`/api/characters/${characterId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ combat: body }),
      });
      if (!res.ok) throw new Error(`PATCH ${res.status}`);
      router.refresh();
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  function addCondition() {
    if (!pick) return;
    const next: CombatCondition[] = [
      ...conditions,
      {
        id: crypto.randomUUID(),
        key: pick as ConditionKey,
        rounds: rounds > 0 ? rounds : null,
      },
    ];
    setPick("");
    setRounds(0);
    void patchCombat({ conditions: next });
  }

  function removeCondition(id: string) {
    void patchCombat({ conditions: conditions.filter((c) => c.id !== id) });
  }

  function advanceRound() {
    const next = conditions
      .map((c) => (c.rounds === null ? c : { ...c, rounds: c.rounds - 1 }))
      .filter((c) => c.rounds === null || c.rounds > 0);
    void patchCombat({ round: round + 1, conditions: next });
  }

  function reset() {
    void patchCombat({ round: 0, conditions: [] });
  }

  return (
    <Card title={t("sheet.conditions")} accent="amber">
      {error && (
        <p role="alert" className="mb-2 text-xs text-red-400">
          {t("api.generic")}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-md border border-zinc-800 px-3 py-1.5 text-center">
          <div className="text-center">
            <p className="text-[10px] uppercase text-zinc-500">
              {t("sheet.roundLabel")}
            </p>
            <p className="text-xl font-bold text-zinc-100" role="status">
              {fmt.num(round)}
            </p>
          </div>
          <button
            type="button"
            disabled={busy}
            onClick={advanceRound}
            className="rounded-md border border-amber-800 px-2.5 py-1.5 text-xs font-bold text-amber-400 transition hover:bg-amber-950/60 disabled:opacity-50"
          >
            {t("sheet.advanceRound")}
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={reset}
            className="rounded-md border border-zinc-700 px-2.5 py-1.5 text-xs text-zinc-400 transition hover:border-zinc-500 disabled:opacity-50"
          >
            {t("sheet.resetCombat")}
          </button>
        </div>

        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
          <Select
            aria-label={t("sheet.addCondition")}
            value={pick}
            onChange={(e) => setPick(e.target.value)}
            className="w-full sm:w-auto"
          >
            <option value="">{t("sheet.addCondition")}</option>
            {CONDITION_KEYS.map((k) => (
              <option key={k} value={k}>
                {t(CONDITION_I18N_KEY[k])}
              </option>
            ))}
          </Select>
          <div className="flex items-center gap-2">
            <NumberInput
              value={rounds}
              onChange={setRounds}
              min={0}
              max={99}
              ariaLabel={t("sheet.roundsLabel")}
              decreaseLabel={t("sheet.roundsLabel")}
              increaseLabel={t("sheet.roundsLabel")}
            />
            <button
              type="button"
              disabled={busy || !pick}
              aria-label={t("sheet.addCondition")}
              onClick={addCondition}
              className="rounded-md border border-emerald-800 px-2.5 py-1.5 text-xs font-bold text-emerald-400 transition hover:bg-emerald-950/60 disabled:opacity-50"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {conditions.length === 0 ? (
          <p className="text-sm text-zinc-600">{t("sheet.noConditions")}</p>
        ) : (
          conditions.map((c) => {
            const label = t(CONDITION_I18N_KEY[c.key]);
            return (
              <span
                key={c.id}
                className="inline-flex items-center gap-1.5 rounded border border-amber-700/70 bg-amber-950/20 px-2 py-0.5 text-xs text-amber-300"
              >
                {label}
                {c.rounds !== null && (
                  <span className="tabular-nums text-amber-500/90">
                    {t("sheet.roundsLeft", { n: fmt.num(c.rounds) })}
                  </span>
                )}
                <button
                  type="button"
                  disabled={busy}
                  aria-label={t("sheet.removeCondition", { name: label })}
                  onClick={() => removeCondition(c.id)}
                  className="text-amber-600 transition hover:text-red-400"
                >
                  ×
                </button>
              </span>
            );
          })
        )}
      </div>

      {effectLabels.length > 0 && (
        <div
          className="mt-3 flex flex-wrap gap-1.5"
          aria-label={t("sheet.activeEffects")}
        >
          {effectLabels.map((label) => (
            <span
              key={label}
              className="rounded border border-amber-700/50 bg-amber-950/30 px-1.5 py-0.5 text-[11px] text-amber-500"
            >
              {label}
            </span>
          ))}
        </div>
      )}
      {effects.concentration && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            disabled={busy}
            onClick={() => {
              const d20 = rollDie(20);
              setConcRoll({ d20, total: d20 + conSaveBonus });
            }}
            className="rounded-md border border-teal-800 px-2.5 py-1.5 text-xs font-semibold text-teal-400 transition hover:bg-teal-950/60 disabled:opacity-50"
          >
            {t("sheet.concentrationSave")}
          </button>
          {concRoll && (
            <span className="text-xs tabular-nums text-zinc-400" role="status">
              1d20 {fmt.num(concRoll.d20)}{" "}
              {conSaveBonus >= 0
                ? `+${fmt.num(conSaveBonus)}`
                : fmt.num(conSaveBonus)}{" "}
              → <strong className="text-zinc-100">{fmt.num(concRoll.total)}</strong>
            </span>
          )}
        </div>
      )}
    </Card>
  );
}
