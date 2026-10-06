"use client";

import { useState } from "react";
import { useWizard } from "../context";
import { Card, NumberInput, Toggle } from "@/components/ui";
import {
  ABILITY_KEYS,
  ABILITY_NAMES,
  type AbilityKey,
} from "@/domain/types";
import { abilityMod, abilityScore, racialBonus } from "@/domain/calc";
import {
  POINT_BUY_TOTAL,
  STANDARD_ARRAY,
  pointBuyCost,
  pointBuySpent,
  suggestAbilities,
} from "@/domain/optimize";
import { getRace } from "@/data";
import type { AbilityMode } from "@/domain/types";

const MODES: { id: AbilityMode; label: string }[] = [
  { id: "pontos", label: "Pontos (27)" },
  { id: "array", label: "Array padrão" },
  { id: "livre", label: "Livre" },
];

export function StepAbilities() {
  const { doc, update } = useWizard();
  const [note, setNote] = useState<string | null>(null);
  const race = getRace(doc.identity.raceId);
  const flexible = race?.abilityBonus.flexible;
  const choices = doc.identity.raceBonusChoices;
  const mode = doc.identity.abilityMode;
  const spent = pointBuySpent(doc.abilities);
  const remaining = POINT_BUY_TOTAL - spent;
  const budgetValid = Number.isFinite(spent);

  function setMode(next: AbilityMode) {
    update((d) => {
      d.identity.abilityMode = next;
    });
    setNote(null);
  }

  function setBase(key: AbilityKey, n: number) {
    update((d) => {
      if (d.identity.abilityMode === "pontos") {
        const others = ABILITY_KEYS.reduce(
          (sum, k) => (k === key ? sum : sum + pointBuyCost(d.abilities[k])),
          0,
        );
        if (others + pointBuyCost(n) > POINT_BUY_TOTAL) return;
      }
      d.abilities[key] = n;
    });
  }

  function applyArray() {
    update((d) => {
      ABILITY_KEYS.forEach((k, i) => {
        d.abilities[k] = STANDARD_ARRAY[i];
      });
    });
    setNote(null);
  }

  function runSuggestion() {
    const suggestion = suggestAbilities(doc);
    update((d) => {
      ABILITY_KEYS.forEach((k) => {
        d.abilities[k] = suggestion.abilities[k];
      });
      d.identity.raceBonusChoices = suggestion.raceChoices;
    });
    setNote(suggestion.note);
  }

  function toggleChoice(key: AbilityKey) {
    update((d) => {
      if (!flexible) return;
      const current = d.identity.raceBonusChoices;
      if (current.includes(key)) {
        d.identity.raceBonusChoices = current.filter((k) => k !== key);
      } else if (current.length < flexible.count) {
        d.identity.raceBonusChoices = [...current, key];
      }
    });
  }

  const min = mode === "livre" ? 1 : 8;
  const max = mode === "livre" ? 20 : 15;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-zinc-400">Distribuição:</span>
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
              {m.label}
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
              Restantes: {budgetValid ? remaining : "—"}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={runSuggestion}
            className="rounded-md border border-sky-700 px-3 py-1.5 text-xs text-sky-400 transition hover:bg-sky-950/50"
          >
            ✨ Sugerir distribuição
          </button>
          {mode !== "livre" && (
            <button
              type="button"
              onClick={applyArray}
              className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
            >
              Aplicar array (15/14/13/12/10/8)
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-zinc-400">
        {mode === "pontos" &&
          "Gaste 27 pontos: 8–15 por atributo (custos 8=0 … 13=5, 14=7, 15=9). Bônus de raça ficam fora do orçamento."}
        {mode === "array" &&
          "Distribua os valores do array padrão (15/14/13/12/10/8) entre os atributos."}
        {mode === "livre" && "Valores livres de 1 a 20, sem orçamento."}
      </p>

      {note && (
        <p className="rounded-md border border-sky-800 bg-sky-950/40 px-3 py-2 text-sm text-sky-300">
          {note}
        </p>
      )}

      {!budgetValid && mode === "pontos" && (
        <p className="rounded-md border border-red-800 bg-red-950/40 px-3 py-2 text-sm text-red-300">
          Há valores fora de 8–15. Corrija-os para voltar ao orçamento de 27
          pontos.
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ABILITY_KEYS.map((key) => {
          const base = doc.abilities[key];
          const raceBonus = racialBonus(doc, key);
          const total = abilityScore(doc, key);
          const mod = abilityMod(total);
          return (
            <Card key={key} title={`${ABILITY_NAMES[key]} (${key.toUpperCase()})`} accent="amber">
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
                  <p className="text-xs text-zinc-500">modificador</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                base {base}
                {mode === "pontos" && (
                  <span className="ml-1 text-zinc-600">
                    · custo {pointBuyCost(base)}
                  </span>
                )}
                {raceBonus > 0 && (
                  <span className="text-emerald-400"> + {raceBonus} raça</span>
                )}
                <span className="text-zinc-300"> = {total} total</span>
              </p>
            </Card>
          );
        })}
      </div>

      {flexible && (
        <Card
          title={`Bônus flexível da raça: escolha ${flexible.count} atributos (+${flexible.amount} em cada)`}
          accent="amber"
        >
          <div className="grid gap-2 sm:grid-cols-3">
            {ABILITY_KEYS.map((key) => (
              <Toggle
                key={key}
                checked={choices.includes(key)}
                onChange={() => toggleChoice(key)}
                label={ABILITY_NAMES[key]}
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
