"use client";

import { useState } from "react";
import { useWizard } from "../context";
import { Card, Field, NumberInput, Select, TextInput } from "@/components/ui";
import { useT, useData, useFormat } from "@/lib/i18n/client";
import type { CharacterDoc } from "@/domain/types";
import { abilityScore, classEntries, raceAbility, raceSkillPool } from "@/domain/calc";
import type { DataBundle } from "@/data";

export const ALIGNMENTS: { value: string; key: string }[] = [
  { value: "", key: "wizard.alignment.none" },
  { value: "Leal e Bom", key: "wizard.alignment.lg" },
  { value: "Leal e Neutro", key: "wizard.alignment.ln" },
  { value: "Leal e Mau", key: "wizard.alignment.le" },
  { value: "Neutro e Bom", key: "wizard.alignment.ng" },
  { value: "Neutro Puro", key: "wizard.alignment.tn" },
  { value: "Neutro e Mau", key: "wizard.alignment.ne" },
  { value: "Caótico e Bom", key: "wizard.alignment.cg" },
  { value: "Caótico e Neutro", key: "wizard.alignment.cn" },
  { value: "Caótico e Mau", key: "wizard.alignment.ce" },
];

export function alignmentKeyFor(value: string): string | undefined {
  return ALIGNMENTS.find((a) => a.value === value)?.key;
}

function recomputeSaves(doc: CharacterDoc, bundle: DataBundle) {
  const keys = new Set<string>();
  for (const e of doc.identity.classes) {
    const cls = bundle.getClass(e.classId);
    if (cls) for (const s of cls.saves) keys.add(s);
  }
  for (const k of Object.keys(doc.saves))
    doc.saves[k as keyof CharacterDoc["saves"]] = keys.has(k);
}

function resetSpellcastingIfNone(doc: CharacterDoc, bundle: DataBundle) {
  const hasCaster = doc.identity.classes.some((e) => {
    const cls = bundle.getClass(e.classId);
    return cls && cls.spellcaster !== "none";
  });
  if (!hasCaster) doc.spellcasting = { known: [], prepared: [], slotsUsed: {} };
}

export function StepIdentity() {
  const { doc, update } = useWizard();
  const t = useT();
  const d = useData();
  const fmt = useFormat();
  const id = doc.identity;
  const [sourceId, setSourceId] = useState("");
  const race = d.getRace(id.raceId);
  const sourceRaces = d.racesForSource(sourceId);
  const availableSubraces = d
    .subracesForRace(id.raceId)
    .filter((s) => !sourceId || s.source === sourceId);
  const subrace = d.getSubrace(id.subraceId);
  const bg = d.getBackground(id.backgroundId);
  const total = classEntries(doc).reduce((a, e) => a + e.level, 0);
  const ability = raceAbility(doc, d);
  const skillPool = raceSkillPool(doc, d);

  const raceOptions =
    race && !sourceRaces.some((r) => r.id === race.id) ? [race, ...sourceRaces] : sourceRaces;
  const subraceOptions =
    subrace && !availableSubraces.some((s) => s.id === subrace.id)
      ? [subrace, ...availableSubraces]
      : availableSubraces;

  function speedHint(speed: number, darkvision?: number | null) {
    const base = t("wizard.identity.speed", { value: fmt.distance(speed) });
    if (!darkvision) return base;
    return `${base} · ${t("wizard.identity.darkvision", { value: fmt.distance(darkvision) })}`;
  }

  function changeRace(raceId: string) {
    const next = d.getRace(raceId);
    update((doc) => {
      doc.identity.raceId = raceId;
      doc.identity.subraceId = "";
      doc.identity.raceBonusChoices = [];
      for (const s of next?.proficiencies.skills ?? []) doc.skills[s] = true;
    });
  }

  function changeSubrace(subraceId: string) {
    const sub = d.getSubrace(subraceId);
    update((doc) => {
      doc.identity.subraceId = subraceId;
      doc.identity.raceBonusChoices = [];
      for (const s of sub?.proficiencies?.skills ?? []) doc.skills[s] = true;
    });
  }

  function changeBackground(backgroundId: string) {
    const next = d.getBackground(backgroundId);
    update((doc) => {
      doc.identity.backgroundId = backgroundId;
      if (next) for (const s of next.skillChoices.options) doc.skills[s] = true;
    });
  }

  function addClass() {
    update((doc) => {
      doc.identity.classes.push({ classId: "", level: 1 });
      recomputeSaves(doc, d);
    });
  }

  function setClass(index: number, classId: string) {
    update((doc) => {
      const current = doc.identity.classes[index];
      doc.identity.classes[index] = { classId, level: current.level };
      recomputeSaves(doc, d);
      resetSpellcastingIfNone(doc, d);
    });
  }

  function setLevel(index: number, level: number) {
    update((doc) => {
      const others = doc.identity.classes.reduce(
        (a, e, i) => a + (i === index ? 0 : e.level),
        0,
      );
      const max = Math.max(1, 20 - others);
      const current = doc.identity.classes[index];
      doc.identity.classes[index] = {
        ...current,
        level: Math.min(max, Math.max(1, level)),
      };
    });
  }

  function setSubclass(index: number, subclassId: string) {
    update((doc) => {
      const current = doc.identity.classes[index];
      doc.identity.classes[index] = {
        ...current,
        subclassId: subclassId || undefined,
      };
    });
  }

  function removeClass(index: number) {
    update((doc) => {
      doc.identity.classes.splice(index, 1);
      recomputeSaves(doc, d);
      resetSpellcastingIfNone(doc, d);
    });
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label={t("wizard.identity.name")}>
        <TextInput
          value={id.name}
          onChange={(e) =>
            update((doc) => {
              doc.identity.name = e.target.value;
            })
          }
          placeholder={t("wizard.identity.namePlaceholder")}
        />
      </Field>

      <Field label={t("wizard.player")}>
        <TextInput
          value={id.player}
          onChange={(e) =>
            update((doc) => {
              doc.identity.player = e.target.value;
            })
          }
          placeholder={t("wizard.identity.playerPlaceholder")}
        />
      </Field>

      <Field label={t("wizard.identity.source")}>
        <Select value={sourceId} onChange={(e) => setSourceId(e.target.value)}>
          <option value="">{t("wizard.identity.sourceAll")}</option>
          {d.sourcesWithRaces().map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field
        label={t("wizard.identity.race")}
        hint={race ? speedHint(race.speed, race.darkvision) : undefined}
      >
        <Select value={id.raceId} onChange={(e) => changeRace(e.target.value)}>
          <option value="">{t("wizard.select")}</option>
          {raceOptions.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field
        label={t("wizard.identity.subrace")}
        hint={
          subrace
            ? subrace.speed && subrace.speed !== race?.speed
              ? t("wizard.identity.speed", { value: fmt.distance(subrace.speed) })
              : subrace.traits[0]?.name
            : undefined
        }
      >
        <Select value={id.subraceId} onChange={(e) => changeSubrace(e.target.value)}>
          <option value="">
            {subraceOptions.length > 0
              ? t("wizard.select")
              : t("wizard.noneAvailable")}
          </option>
          {subraceOptions.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field label={t("wizard.identity.background")} hint={bg?.feature.name}>
        <Select
          value={id.backgroundId}
          onChange={(e) => changeBackground(e.target.value)}
        >
          <option value="">{t("wizard.select")}</option>
          {d.BACKGROUNDS.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field label={t("wizard.identity.alignment")}>
        <Select
          value={id.alignment}
          onChange={(e) =>
            update((doc) => {
              doc.identity.alignment = e.target.value;
            })
          }
        >
          {ALIGNMENTS.map((a) => (
            <option key={a.value} value={a.value}>
              {t(a.key)}
            </option>
          ))}
        </Select>
      </Field>

      <Field label={t("wizard.identity.xp")}>
        <NumberInput
          value={id.xp}
          onChange={(n) =>
            update((doc) => {
              doc.identity.xp = n;
            })
          }
          min={0}
          max={999999}
          className="justify-start"
        />
      </Field>

      <Card
        title={t("wizard.identity.classesTitle", { total: fmt.num(total) })}
        className="sm:col-span-2"
      >
        <div className="flex flex-col gap-3">
          {id.classes.length === 0 && (
            <p className="text-sm text-zinc-500">{t("wizard.identity.noClasses")}</p>
          )}

          {id.classes.map((entry, index) => {
            const cls = d.getClass(entry.classId);
            const others = total - (entry.classId ? entry.level : 0);
            const maxLevel = Math.max(1, 20 - others);
            const availableSubclasses = d.subclassesForClass(entry.classId);
            const chosenSubclass = d.getSubclass(entry.subclassId);
            const subclassTooLow = Boolean(
              chosenSubclass &&
                entry.level > 0 &&
                entry.level < chosenSubclass.level,
            );
            return (
              <div key={index} className="rounded-md border border-zinc-800 p-3">
                <div className="flex flex-wrap items-end gap-3">
                  <Field
                    label={t("wizard.identity.classN", { n: index + 1 })}
                    className="min-w-48 flex-1"
                  >
                    <Select
                      value={entry.classId}
                      onChange={(e) => setClass(index, e.target.value)}
                    >
                      <option value="">{t("wizard.select")}</option>
                      {d.CLASSES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </Select>
                  </Field>
                  <Field label={t("wizard.level")} className="w-28">
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
                    {t("wizard.identity.removeClass")}
                  </button>
                </div>
                {availableSubclasses.length > 0 && (
                  <div className="mt-3">
                    <Field
                      label={t("wizard.identity.subclass")}
                      hint={
                        entry.subclassId
                          ? t("wizard.identity.requiresLevel", {
                              level: d.getSubclass(entry.subclassId)?.level ?? 3,
                            })
                          : undefined
                      }
                    >
                      <Select
                        value={entry.subclassId ?? ""}
                        onChange={(e) => setSubclass(index, e.target.value)}
                      >
                        <option value="">{t("wizard.identity.noSubclass")}</option>
                        {availableSubclasses.map((sc) => (
                          <option key={sc.id} value={sc.id}>
                            {t("wizard.identity.subclassOption", {
                              name: sc.name,
                              level: sc.level,
                            })}
                          </option>
                        ))}
                      </Select>
                    </Field>
                    {subclassTooLow && (
                      <p className="mt-1 text-xs text-amber-500">
                        ⚠{" "}
                        {t("wizard.identity.subclassLevelReq", {
                          name: d.getSubclass(entry.subclassId)?.name ?? "",
                          level: d.getSubclass(entry.subclassId)?.level ?? 0,
                          cls: cls?.name ?? t("wizard.identity.classFallback"),
                          current: entry.level,
                        })}
                      </p>
                    )}
                  </div>
                )}
                {cls && (
                  <p className="mt-2 text-xs text-zinc-500">
                    {t("wizard.identity.hitDieSaves", {
                      die: cls.hitDie,
                      saves: cls.saves
                        .map((s) => d.ABILITY_ABBR[s] ?? s.toUpperCase())
                        .join(", "),
                    })}
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
              + {t("wizard.identity.addClass")}
            </button>
            <span
              className={`text-xs ${total > 20 ? "text-red-400" : "text-zinc-500"}`}
            >
              {t("wizard.identity.totalLevel", { total: fmt.num(total) })}
            </span>
          </div>

          <MulticlassWarnings doc={doc} />
        </div>
      </Card>

      {race && (
        <Card title={t("wizard.identity.racialBonusTitle")} className="sm:col-span-2">
          <div className="flex flex-wrap gap-2 text-sm text-zinc-300">
            {Object.entries(ability.fixed).map(([k, v]) => (
              <span key={k} className="rounded border border-zinc-700 px-2 py-1">
                +{v} {d.ABILITY_ABBR[k] ?? k.toUpperCase()}
              </span>
            ))}
            {ability.flexible && (
              <span className="rounded border border-amber-700 px-2 py-1 text-amber-300">
                {t("wizard.identity.flexibleBonus", {
                  amount: ability.flexible.amount,
                  count: ability.flexible.count,
                })}
              </span>
            )}
            {skillPool.count > 0 && (
              <span className="rounded border border-amber-700 px-2 py-1 text-amber-300">
                {t(
                  skillPool.count > 1
                    ? "wizard.identity.skillChoiceMany"
                    : "wizard.identity.skillChoiceOne",
                  { count: skillPool.count },
                )}
              </span>
            )}
            {subrace &&
              !subrace.replacesAbilityBonus &&
              Object.entries(subrace.abilityBonus ?? {}).map(([k, v]) => (
                <span
                  key={`sub-${k}`}
                  className="rounded border border-emerald-700 px-2 py-1 text-emerald-300"
                >
                  {subrace.name}: +{v} {d.ABILITY_ABBR[k] ?? k.toUpperCase()}
                </span>
              ))}
          </div>
        </Card>
      )}
    </div>
  );
}

function MulticlassWarnings({ doc }: { doc: CharacterDoc }) {
  const t = useT();
  const d = useData();
  const warnings: string[] = [];
  const entries = classEntries(doc);

  entries.forEach((entry, index) => {
    if (index === 0) return;
    const cls = d.getClass(entry.classId);
    if (!cls) return;
    const prereq = d.classPrerequisite(entry.classId);
    if (!prereq) return;
    const unmet: string[] = [];
    if (prereq.allOf) {
      for (const key of prereq.allOf) {
        if (abilityScore(doc, key, d) < 13)
          unmet.push(d.ABILITY_ABBR[key] ?? key.toUpperCase());
      }
    }
    if (prereq.anyOf) {
      if (!prereq.anyOf.some((key) => abilityScore(doc, key, d) >= 13)) {
        unmet.push(
          prereq.anyOf
            .map((k) => d.ABILITY_ABBR[k] ?? k.toUpperCase())
            .join(` ${t("wizard.joinOr")} `),
        );
      }
    }
    if (unmet.length > 0) {
      warnings.push(
        t("wizard.identity.multiclassReq", {
          name: cls.name,
          keys: unmet.join(` ${t("wizard.joinAnd")} `),
        }),
      );
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
