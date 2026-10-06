"use client";

import { useWizard } from "../context";
import { Badge, Card, NumberInput, Toggle } from "@/components/ui";
import { CLASSES, getSpell, spellsForClass } from "@/data";
import type { ClassDef, SpellDef } from "@/data";
import {
  classEntries,
  spellAttackBonus,
  spellSaveDc,
  spellSlots,
  totalLevel,
} from "@/domain/calc";
import { ftText } from "@/domain/units";

const LEVEL_NAMES = [
  "Truques",
  "1º nível",
  "2º nível",
  "3º nível",
  "4º nível",
  "5º nível",
  "6º nível",
  "7º nível",
  "8º nível",
  "9º nível",
];

function slotKey(level: number, source: "full" | "pact" | undefined) {
  return source === "pact" ? `pacto${level}` : String(level);
}

export function StepSpells() {
  const { doc, update } = useWizard();

  const casterClasses: ClassDef[] = [];
  for (const e of classEntries(doc)) {
    const cls = CLASSES.find((c) => c.id === e.classId);
    if (cls && cls.spellcaster !== "none") casterClasses.push(cls);
  }

  if (casterClasses.length === 0) {
    return (
      <Card title="Conjuração de magias" accent="violet">
        <p className="text-sm text-zinc-400">
          Nenhuma de suas classes conjura magias com slots. Escolha mago,
          clérigo, druida, bardo, feiticeiro, bruxo, paladino ou patrulheiro na
          etapa 1 — ou pule esta etapa.
        </p>
      </Card>
    );
  }

  const catalogMap = new Map<string, SpellDef>();
  for (const cls of casterClasses) {
    for (const spell of spellsForClass(cls.id)) {
      if (!catalogMap.has(spell.id)) catalogMap.set(spell.id, spell);
    }
  }
  const catalog = [...catalogMap.values()];

  const dc = spellSaveDc(doc);
  const atk = spellAttackBonus(doc);
  const { groups, used } = spellSlots(doc);
  const level = totalLevel(doc);

  function toggleKnown(spellId: string) {
    update((d) => {
      d.spellcasting.known = d.spellcasting.known.includes(spellId)
        ? d.spellcasting.known.filter((s) => s !== spellId)
        : [...d.spellcasting.known, spellId];
    });
  }

  function togglePrepared(spellId: string) {
    update((d) => {
      d.spellcasting.prepared = d.spellcasting.prepared.includes(spellId)
        ? d.spellcasting.prepared.filter((s) => s !== spellId)
        : [...d.spellcasting.prepared, spellId];
    });
  }

  function setUsed(key: string, value: number, max: number) {
    update((d) => {
      d.spellcasting.slotsUsed[key] = Math.min(max, Math.max(0, value));
    });
  }

  const byLevel = catalog.reduce<Record<number, SpellDef[]>>((acc, s) => {
    (acc[s.level] ??= []).push(s);
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Card
          title={`Espaços de magia (${casterClasses.map((c) => c.name).join(" + ")})`}
          accent="violet"
        >
          {groups.length === 0 ? (
            <p className="text-sm text-zinc-500">
              Sem espaços no nível {level} (meio conjurador começa no nível 2).
            </p>
          ) : (
            <div className="flex flex-wrap gap-3">
              {groups.map((g) => {
                const key = slotKey(g.level, g.source);
                const current = used[key] ?? 0;
                return (
                  <div
                    key={key}
                    className="rounded-md border border-zinc-800 p-3 text-center"
                  >
                    <p className="text-xs text-zinc-500">
                      {g.level}º nível{g.source === "pact" ? " (pacto)" : ""}
                    </p>
                    <p className="my-1 text-xl font-bold text-zinc-100">
                      {Math.max(0, g.max - current)}/{g.max}
                    </p>
                    <NumberInput
                      value={current}
                      onChange={(n) => setUsed(key, n, g.max)}
                      min={0}
                      max={g.max}
                    />
                    <p className="mt-1 text-[10px] text-zinc-600">usados</p>
                  </div>
                );
              })}
            </div>
          )}
        </Card>

        <Card title="Conjuração" accent="violet">
          <div className="flex flex-col gap-3">
            {dc && (
              <div>
                <p className="text-xs text-zinc-500">CD de salvamento</p>
                <p className="text-3xl font-bold text-zinc-100">{dc.value}</p>
                <p className="text-xs text-zinc-600">
                  8 + proficiência + atributo
                </p>
              </div>
            )}
            {atk && (
              <div>
                <p className="text-xs text-zinc-500">Ataque mágico</p>
                <p className="text-3xl font-bold text-amber-400">
                  +{atk.value}
                </p>
                <p className="text-xs text-zinc-600">proficiência + atributo</p>
              </div>
            )}
          </div>
        </Card>
      </div>

      <Card
        title={`Magias conhecidas (${doc.spellcasting.known.length}) — selecione no catálogo abaixo`}
        accent="violet"
      >
        {doc.spellcasting.known.length === 0 ? (
          <p className="text-sm text-zinc-500">
            Nenhuma magia selecionada ainda.
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {doc.spellcasting.known
              .map((id) => getSpell(id))
              .filter((s): s is NonNullable<typeof s> => Boolean(s))
              .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name))
              .map((spell) => (
                <div
                  key={spell.id}
                  className="flex flex-wrap items-center gap-3 rounded-md border border-zinc-800 px-3 py-2"
                >
                  <span className="text-sm font-medium text-zinc-200">
                    {spell.name}
                  </span>
                  <Badge color="blue">
                    {spell.level === 0 ? "Truque" : `${spell.level}º nível`}
                  </Badge>
                  <Badge>{spell.school}</Badge>
                  <div className="ml-auto w-40">
                    <Toggle
                      checked={doc.spellcasting.prepared.includes(spell.id)}
                      onChange={() => togglePrepared(spell.id)}
                      label="Preparada"
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </Card>

      <div className="flex flex-col gap-3">
        {LEVEL_NAMES.map((label, level) => {
          const spells = byLevel[level];
          if (!spells?.length) return null;
          return (
            <Card key={level} title={`${label} (${spells.length})`} accent="violet">
              <div className="grid gap-2 sm:grid-cols-2">
                {spells.map((spell) => (
                  <Toggle
                    key={spell.id}
                    checked={doc.spellcasting.known.includes(spell.id)}
                    onChange={() => toggleKnown(spell.id)}
                    label={`${spell.name} — ${spell.castingTime}, ${ftText(spell.range)}`}
                  />
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
