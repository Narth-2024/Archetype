"use client";

import { useState } from "react";
import { useWizard } from "../context";
import { Card, NumberInput, Toggle } from "@/components/ui";
import { useT, useData, useFormat } from "@/lib/i18n/client";
import { ABILITY_KEYS, type AbilityKey } from "@/domain/types";
import { abilityMod, abilityScore, racialBonus, raceAbility } from "@/domain/calc";
import {
  POINT_BUY_TOTAL,
  STANDARD_ARRAY,
  pointBuyCost,
  pointBuySpent,
  suggestAbilities,
} from "@/domain/optimize";
import type { AbilityMode } from "@/domain/types";

const MODES: { id: AbilityMode; key: string }[] = [
  { id: "pontos", key: "wizard.abilities.modePoints" },
  { id: "array", key: "wizard.abilities.modeArray" },
  { id: "livre", key: "wizard.abilities.modeFree" },
];

const HINTS: Record<AbilityMode, string> = {
  pontos: "wizard.abilities.hintPoints",
  array: "wizard.abilities.hintArray",
  livre: "wizard.abilities.hintFree",
};

export function StepAbilities() {
  const { doc, update } = useWizard();
  const t = useT();
  const d = useData();
  const fmt = useFormat();
  const [note, setNote] = useState<string | null>(null);
  const flexible = raceAbility(doc, d).flexible;
  const choices = doc.identity.raceBonusChoices;
  const mode = doc.identity.abilityMode;
  const spent = pointBuySpent(doc.abilities);
  const remaining = POINT_BUY_TOTAL - spent;
  const budgetValid = Number.isFinite(spent);

  function setMode(next: AbilityMode) {
    update((doc) => {
      doc.identity.abilityMode = next;
    });
    setNote(null);
  }

  function setBase(key: AbilityKey, n: number) {
    update((doc) => {
      if (doc.identity.abilityMode === "pontos") {
        const others = ABILITY_KEYS.reduce(
          (sum, k) => (k === key ? sum : sum + pointBuyCost(doc.abilities[k])),
          0,
        );
        if (others + pointBuyCost(n) > POINT_BUY_TOTAL) return;
      }
      doc.abilities[key] = n;
    });
  }

  function applyArray() {
    update((doc) => {
      ABILITY_KEYS.forEach((k, i) => {
        doc.abilities[k] = STANDARD_ARRAY[i];
      });
    });
    setNote(null);
  }

  function runSuggestion() {
    const suggestion = suggestAbilities(doc, d);
    update((doc) => {
      ABILITY_KEYS.forEach((k) => {
        doc.abilities[k] = suggestion.abilities[k];
      });
      doc.identity.raceBonusChoices = suggestion.raceChoices;
    });
    setNote(suggestion.note);
  }

  function toggleChoice(key: AbilityKey) {
    update((doc) => {
      if (!flexible) return;
      const current = doc.identity.raceBonusChoices;
      if (current.includes(key)) {
        doc.identity.raceBonusChoices = current.filter((k) => k !== key);
      } else if (current.length < flexible.count) {
        doc.identity.raceBonusChoices = [...current, key];
      }
    });
  }

  const min = mode === "livre" ? 1 : 8;
  const max = mode === "livre" ? 20 : 15;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-zinc-400">
            {t("wizard.abilities.distribution")}
          </span>
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`rounded-md border px-3 py-1.5 text-xs transition ${
                mode === m.id
                  ? "border-amber-600 bg-amber-950/40 text-amber-300"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
              }`}
            >
              {t(m.key)}
            </button>
          ))}
          {mode === "pontos" && (
            <span
              className={`ml-1 rounded-md border px-2 py-1 text-xs ${
                !budgetValid
                  ? "border-red-700 text-red-400"
                  : remaining < 0
                    ? "border-red-700 text-red-400"
                    : remaining === 0
                      ? "border-emerald-700 text-emerald-400"
                      : "border-amber-700 text-amber-400"
              }`}
            >
              {t("wizard.abilities.remaining", {
                n: budgetValid ? fmt.num(remaining) : "—",
              })}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={runSuggestion}
            className="rounded-md border border-sky-700 px-3 py-1.5 text-xs text-sky-400 transition hover:bg-sky-950/50"
          >
            ✨ {t("wizard.abilities.suggest")}
          </button>
          {mode !== "livre" && (
            <button
              type="button"
              onClick={applyArray}
              className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
            >
              {t("wizard.abilities.applyArray")}
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-zinc-400">{t(HINTS[mode])}</p>

      {note && (
        <p className="rounded-md border border-sky-800 bg-sky-950/40 px-3 py-2 text-sm text-sky-300">
          {note}
        </p>
      )}

      {!budgetValid && mode === "pontos" && (
        <p className="rounded-md border border-red-800 bg-red-950/40 px-3 py-2 text-sm text-red-300">
          {t("wizard.abilities.budgetInvalid")}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ABILITY_KEYS.map((key) => {
          const base = doc.abilities[key];
          const raceBonus = racialBonus(doc, key, d);
          const total = abilityScore(doc, key, d);
          const mod = abilityMod(total);
          return (
            <Card
              key={key}
              title={t("wizard.abilities.title", {
                name: d.ABILITY_NAMES[key] ?? key,
                abbr: d.ABILITY_ABBR[key] ?? key.toUpperCase(),
              })}
              accent="amber"
            >
              <div className="flex items-center justify-between">
                <NumberInput
                  value={base}
                  onChange={(n) => setBase(key, n)}
                  min={min}
                  max={max}
                />
                <div className="text-right">
                  <p className="text-3xl font-bold text-amber-400">
                    {mod >= 0 ? `+${mod}` : mod}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {t("wizard.abilities.modifier")}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                {t("wizard.abilities.base", { n: base })}
                {mode === "pontos" && (
                  <span className="ml-1 text-zinc-600">
                    {t("wizard.abilities.cost", { n: pointBuyCost(base) })}
                  </span>
                )}
                {raceBonus > 0 && (
                  <span className="text-emerald-400">
                    {" "}
                    {t("wizard.abilities.racial", { n: raceBonus })}
                  </span>
                )}
                <span className="text-zinc-300">
                  {t("wizard.abilities.total", { n: total })}
                </span>
              </p>
            </Card>
          );
        })}
      </div>

      {flexible && (
        <Card
          title={t("wizard.abilities.flexibleTitle", {
            count: flexible.count,
            amount: flexible.amount,
          })}
          accent="amber"
        >
          <div className="grid gap-2 sm:grid-cols-3">
            {ABILITY_KEYS.map((key) => (
              <Toggle
                key={key}
                checked={choices.includes(key)}
                onChange={() => toggleChoice(key)}
                label={d.ABILITY_NAMES[key] ?? key}
                disabled={
                  !choices.includes(key) && choices.length >= flexible.count
                }
              />
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
