"use client";

import { useWizard } from "../context";
import { Card, Field, NumberInput, Select, TextInput } from "@/components/ui";
import { BACKGROUNDS, CLASSES, RACES, classPrerequisite, getBackground, getClass, getRace, getSubclass, getSubrace, subracesForRace, subclassesForClass } from "@/data";
import type { CharacterDoc } from "@/domain/types";
import { abilityScore, classEntries } from "@/domain/calc";
import { ft } from "@/domain/units";

const ALIGNMENTS = [
  "",
  "Leal e Bom",
  "Leal e Neutro",
  "Leal e Mau",
  "Neutro e Bom",
  "Neutro Puro",
  "Neutro e Mau",
  "Caótico e Bom",
  "Caótico e Neutro",
  "Caótico e Mau",
];

function recomputeSaves(d: CharacterDoc) {
  const keys = new Set<string>();
  for (const e of d.identity.classes) {
    const cls = getClass(e.classId);
    if (cls) for (const s of cls.saves) keys.add(s);
  }
  for (const k of Object.keys(d.saves)) d.saves[k as keyof CharacterDoc["saves"]] = keys.has(k);
}

function resetSpellcastingIfNone(d: CharacterDoc) {
  const hasCaster = d.identity.classes.some((e) => {
    const cls = getClass(e.classId);
    return cls && cls.spellcaster !== "none";
  });
  if (!hasCaster) d.spellcasting = { known: [], prepared: [], slotsUsed: {} };
}

export function StepIdentity() {
  const { doc, update } = useWizard();
  const id = doc.identity;
  const race = getRace(id.raceId);
  const availableSubraces = subracesForRace(id.raceId);
  const subrace = getSubrace(id.subraceId);
  const bg = getBackground(id.backgroundId);
  const total = classEntries(doc).reduce((a, e) => a + e.level, 0);

  function changeRace(raceId: string) {
    update((d) => {
      d.identity.raceId = raceId;
      d.identity.subraceId = "";
      d.identity.raceBonusChoices = [];
      const next = getRace(raceId);
      for (const s of next?.proficiencies.skills ?? []) d.skills[s] = true;
      const subs = subracesForRace(raceId);
      if (subs.length === 1) d.identity.subraceId = subs[0].id;
    });
  }

  function changeSubrace(subraceId: string) {
    update((d) => {
      d.identity.subraceId = subraceId;
      const sub = getSubrace(subraceId);
      for (const s of sub?.proficiencies?.skills ?? []) d.skills[s] = true;
    });
  }

  function changeBackground(backgroundId: string) {
    update((d) => {
      d.identity.backgroundId = backgroundId;
      const next = getBackground(backgroundId);
      if (next) for (const s of next.skillChoices.options) d.skills[s] = true;
    });
  }

  function addClass() {
    update((d) => {
      d.identity.classes.push({ classId: "", level: 1 });
      recomputeSaves(d);
    });
  }

  function setClass(index: number, classId: string) {
    update((d) => {
      const current = d.identity.classes[index];
      d.identity.classes[index] = { classId, level: current.level };
      recomputeSaves(d);
      resetSpellcastingIfNone(d);
    });
  }

  function setLevel(index: number, level: number) {
    update((d) => {
      const others = d.identity.classes.reduce(
        (a, e, i) => a + (i === index ? 0 : e.level),
        0,
      );
      const max = Math.max(1, 20 - others);
      const current = d.identity.classes[index];
      d.identity.classes[index] = {
        ...current,
        level: Math.min(max, Math.max(1, level)),
      };
    });
  }

  function setSubclass(index: number, subclassId: string) {
    update((d) => {
      const current = d.identity.classes[index];
      d.identity.classes[index] = { ...current, subclassId: subclassId || undefined };
    });
  }

  function removeClass(index: number) {
    update((d) => {
      d.identity.classes.splice(index, 1);
      recomputeSaves(d);
      resetSpellcastingIfNone(d);
    });
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label="Nome do personagem *">
        <TextInput
          value={id.name}
          onChange={(e) =>
            update((d) => {
              d.identity.name = e.target.value;
            })
          }
          placeholder="Ex: Thora Valdris"
        />
      </Field>

      <Field label="Jogador">
        <TextInput
          value={id.player}
          onChange={(e) =>
            update((d) => {
              d.identity.player = e.target.value;
            })
          }
          placeholder="Ex: Camila"
        />
      </Field>

      <Field
        label="Raça"
        hint={
          race
            ? `Deslocamento ${ft(race.speed)}${race.darkvision ? ` · visão no escuro ${ft(race.darkvision)}` : ""}`
            : undefined
        }
      >
        <Select value={id.raceId} onChange={(e) => changeRace(e.target.value)}>
          <option value="">Selecione...</option>
          {RACES.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field
        label="Sub-raça"
        hint={
          subrace
            ? subrace.speed && subrace.speed !== race?.speed
              ? `Deslocamento ${ft(subrace.speed)}`
              : subrace.traits[0]?.name
            : undefined
        }
      >
        <Select value={id.subraceId} onChange={(e) => changeSubrace(e.target.value)}>
          <option value="">{availableSubraces.length > 0 ? "Selecione..." : "Nenhuma disponível"}</option>
          {availableSubraces.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Antecedente" hint={bg?.feature.name}>
        <Select
          value={id.backgroundId}
          onChange={(e) => changeBackground(e.target.value)}
        >
          <option value="">Selecione...</option>
          {BACKGROUNDS.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Alinhamento">
        <Select
          value={id.alignment}
          onChange={(e) =>
            update((d) => {
              d.identity.alignment = e.target.value;
            })
          }
        >
          {ALIGNMENTS.map((a) => (
            <option key={a} value={a}>
              {a || "Não definido"}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Pontos de experiência">
        <NumberInput
          value={id.xp}
          onChange={(n) =>
            update((d) => {
              d.identity.xp = n;
            })
          }
          min={0}
          max={999999}
          className="justify-start"
        />
      </Field>

      <Card title={`Classes — nível total ${total}/20`} className="sm:col-span-2">
        <div className="flex flex-col gap-3">
          {id.classes.length === 0 && (
            <p className="text-sm text-zinc-500">
              Nenhuma classe escolhida ainda. Adicione ao menos uma classe.
            </p>
          )}

          {id.classes.map((entry, index) => {
            const cls = getClass(entry.classId);
            const others = total - (entry.classId ? entry.level : 0);
            const maxLevel = Math.max(1, 20 - others);
            const availableSubclasses = subclassesForClass(entry.classId);
            const chosenSubclass = getSubclass(entry.subclassId);
            const subclassTooLow = Boolean(
              chosenSubclass && entry.level > 0 && entry.level < chosenSubclass.level,
            );
            return (
              <div
                key={index}
                className="rounded-md border border-zinc-800 p-3"
              >
                <div className="flex flex-wrap items-end gap-3">
                  <Field label={`Classe ${index + 1}`} className="min-w-48 flex-1">
                    <Select
                      value={entry.classId}
                      onChange={(e) => setClass(index, e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      {CLASSES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </Select>
                  </Field>
                  <Field label="Nível" className="w-28">
                    <NumberInput
                      value={entry.level}
                      onChange={(n) => setLevel(index, n)}
                      min={1}
                      max={maxLevel}
                    />
                  </Field>
                  <button
                    type="button"
                    onClick={() => removeClass(index)}
                    className="mb-1 rounded-md border border-zinc-700 px-3 py-2 text-xs text-zinc-400 transition hover:border-red-700 hover:text-red-400"
                  >
                    Remover
                  </button>
                </div>
                {availableSubclasses.length > 0 && (
                  <div className="mt-3">
                    <Field
                      label="Subclasse"
                      hint={
                        entry.subclassId
                          ? `requer nível ${getSubclass(entry.subclassId)?.level ?? 3}`
                          : undefined
                      }
                    >
                      <Select
                        value={entry.subclassId ?? ""}
                        onChange={(e) => setSubclass(index, e.target.value)}
                      >
                        <option value="">Nenhuma / ainda não escolhida</option>
                        {availableSubclasses.map((sc) => (
                          <option key={sc.id} value={sc.id}>
                            {sc.name} (nível {sc.level})
                          </option>
                        ))}
                      </Select>
                    </Field>
                    {subclassTooLow && (
                      <p className="mt-1 text-xs text-amber-500">
                        ⚠ {getSubclass(entry.subclassId)?.name} exige nível{" "}
                        {getSubclass(entry.subclassId)?.level} de{" "}
                        {cls?.name ?? "classe"} (atual: {entry.level}).
                      </p>
                    )}
                  </div>
                )}
                {cls && (
                  <p className="mt-2 text-xs text-zinc-500">
                    Dado de vida: d{cls.hitDie} · Salvamentos:{" "}
                    {cls.saves.map((s) => s.toUpperCase()).join(", ")}
                  </p>
                )}
              </div>
            );
          })}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={addClass}
              disabled={total >= 20}
              className="rounded-md border border-amber-700 px-3 py-1.5 text-xs text-amber-400 transition hover:bg-amber-950/50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              + Adicionar classe
            </button>
            <span
              className={`text-xs ${total > 20 ? "text-red-400" : "text-zinc-500"}`}
            >
              Nível total: {total}/20
            </span>
          </div>

          <MulticlassWarnings doc={doc} />
        </div>
      </Card>

      {race && (
        <Card title="Bônus de atributo da raça" className="sm:col-span-2">
          <div className="flex flex-wrap gap-2 text-sm text-zinc-300">
            {Object.entries(race.abilityBonus.fixed).map(([k, v]) => (
              <span key={k} className="rounded border border-zinc-700 px-2 py-1">
                +{v} {k.toUpperCase()}
              </span>
            ))}
            {race.abilityBonus.flexible && (
              <span className="rounded border border-amber-700 px-2 py-1 text-amber-300">
                +{race.abilityBonus.flexible.amount} em{" "}
                {race.abilityBonus.flexible.count} atributos à escolha (etapa de
                atributos)
              </span>
            )}
            {race.skillChoices && (
              <span className="rounded border border-amber-700 px-2 py-1 text-amber-300">
                {race.skillChoices.count} perícia
                {race.skillChoices.count > 1 ? "s" : ""} à escolha (etapa de
                perícias)
              </span>
            )}
            {subrace &&
              Object.entries(subrace.abilityBonus ?? {}).map(([k, v]) => (
                <span key={`sub-${k}`} className="rounded border border-emerald-700 px-2 py-1 text-emerald-300">
                  {subrace.name}: +{v} {k.toUpperCase()}
                </span>
              ))}
          </div>
        </Card>
      )}
    </div>
  );
}

function MulticlassWarnings({ doc }: { doc: CharacterDoc }) {
  const warnings: string[] = [];
  const entries = classEntries(doc);

  entries.forEach((entry, index) => {
    if (index === 0) return;
    const cls = getClass(entry.classId);
    if (!cls) return;
    const prereq = classPrerequisite(entry.classId);
    if (!prereq) return;
    const unmet: string[] = [];
    if (prereq.allOf) {
      for (const key of prereq.allOf) {
        if (abilityScore(doc, key) < 13) unmet.push(key.toUpperCase());
      }
    } else if (prereq.anyOf) {
      if (!prereq.anyOf.some((key) => abilityScore(doc, key) >= 13)) {
        unmet.push(prereq.anyOf.map((k) => k.toUpperCase()).join(" ou "));
      }
    }
    if (unmet.length > 0) {
      warnings.push(`${cls.name} exige ${unmet.join(" e ")} ≥ 13 (pré-requisito de multiclasse).`);
    }
  });

  if (warnings.length === 0) return null;
  return (
    <ul className="flex flex-col gap-1 text-xs text-amber-500/90">
      {warnings.map((w, i) => (
        <li key={i}>⚠ {w}</li>
      ))}
    </ul>
  );
}
