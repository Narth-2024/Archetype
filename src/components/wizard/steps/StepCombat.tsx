"use client";

import { useWizard } from "../context";
import { Card, Field, Formula, NumberInput } from "@/components/ui";
import {
  armorClass,
  armorWarnings,
  classEntries,
  initiative,
  maxHp,
  pbOf,
  speed,
  totalLevel,
} from "@/domain/calc";
import { getRace } from "@/data";
import { ft } from "@/domain/units";

export function StepCombat() {
  const { doc, update } = useWizard();
  const ac = armorClass(doc);
  const init = initiative(doc);
  const hp = maxHp(doc);
  const warnings = armorWarnings(doc);
  const pb = pbOf(doc);
  const entries = classEntries(doc);
  const race = getRace(doc.identity.raceId);
  const level = totalLevel(doc);

  return (
    <div className="flex flex-col gap-5">
      {entries.length === 0 || !race ? (
        <Card>
          <p className="text-sm text-zinc-400">
            Escolha raça e classe na etapa 1 para que os valores de combate
            sejam calculados corretamente.
          </p>
        </Card>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Classe de Armadura" accent="sky">
          <div className="flex items-baseline justify-between">
            <span className="text-4xl font-bold text-zinc-100">{ac.value}</span>
          </div>
          <ul className="mt-3 flex flex-col gap-1 text-xs text-zinc-500">
            {ac.parts.map((p, i) => (
              <li key={i}>
                {p.value >= 0 ? "+" : "−"} {Math.abs(p.value)} {p.label}
              </li>
            ))}
          </ul>
          {warnings.length > 0 && (
            <ul className="mt-3 flex flex-col gap-1 text-xs text-amber-500/90">
              {warnings.map((w, i) => (
                <li key={i}>⚠ {w}</li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Iniciativa">
          <Formula value={init.value} parts={init.parts} />
        </Card>

        <Card title="Deslocamento">
          <p className="text-4xl font-bold text-zinc-100">{ft(speed(doc))}</p>
          <p className="mt-2 text-xs text-zinc-500">
            {race?.name} · {ft(race?.speed ?? 30)} base
          </p>
        </Card>

        <Card title="Pontos de Vida máximos" accent="rose" className="sm:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-4xl font-bold text-zinc-100">{hp.value}</span>
            <button
              type="button"
              onClick={() =>
                update((d) => {
                  d.combat.hpCurrent = hp.value;
                })
              }
              className="rounded-md border border-emerald-700 px-3 py-1.5 text-xs text-emerald-400 transition hover:bg-emerald-950/50"
            >
              Preencher PV atuais com o máximo
            </button>
          </div>
          <ul className="mt-3 flex flex-col gap-1 text-xs text-zinc-500">
            {hp.parts.map((p, i) => (
              <li key={i}>
                {p.value >= 0 ? "+" : "−"} {Math.abs(p.value)} {p.label}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Bônus de proficiência">
          <p className="text-4xl font-bold text-amber-400">+{pb}</p>
          <p className="mt-2 text-xs text-zinc-500">
            Calculado pelo nível total ({level}): 2 + ⌊(nível − 1) ÷ 4⌋
          </p>
        </Card>

        <Card title="PV atuais" accent="rose">
          <Field label="PV atuais">
            <NumberInput
              value={doc.combat.hpCurrent}
              onChange={(n) =>
                update((d) => {
                  d.combat.hpCurrent = n;
                })
              }
              min={0}
              max={999}
            />
          </Field>
        </Card>

        <Card title="PV temporários" accent="rose">
          <Field label="PV temporários">
            <NumberInput
              value={doc.combat.hpTemp}
              onChange={(n) =>
                update((d) => {
                  d.combat.hpTemp = n;
                })
              }
              min={0}
              max={999}
            />
          </Field>
        </Card>

        <Card title="Alinhamento e XP">
          <div className="flex flex-col gap-2 text-sm text-zinc-300">
            <span>Alinhamento: {doc.identity.alignment || "não definido"}</span>
            <span>XP: {doc.identity.xp}</span>
          </div>
        </Card>
      </div>

      <Card title="Dica para a sessão">
        <p className="text-sm text-zinc-400">
          Depois de finalizar a criação, a ficha mostrará uma barra rápida com
          CA, PV, iniciativa e deslocamento — você poderá ajustar os PV com um
          toque durante o jogo.
        </p>
      </Card>
    </div>
  );
}
