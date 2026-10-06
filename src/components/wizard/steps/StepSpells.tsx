"use client";

import { useWizard } from "../context";
import { Badge, Card, NumberInput, Toggle } from "@/components/ui";
import { useT, useData, useFormat } from "@/lib/i18n/client";
import type { ClassDef, SpellDef } from "@/data";
import {
  classEntries,
  spellAttackBonus,
  spellSaveDc,
  spellSlots,
  totalLevel,
} from "@/domain/calc";

const LEVEL_KEYS = [
  "wizard.spells.level0",
  "wizard.spells.level1",
  "wizard.spells.level2",
  "wizard.spells.level3",
  "wizard.spells.level4",
  "wizard.spells.level5",
  "wizard.spells.level6",
  "wizard.spells.level7",
  "wizard.spells.level8",
  "wizard.spells.level9",
];

function slotKey(level: number, source: "full" | "pact" | undefined) {
  return source === "pact" ? `pacto${level}` : String(level);
}

export function StepSpells() {
  const { doc, update } = useWizard();
  const t = useT();
  const d = useData();
  const fmt = useFormat();

  const casterClasses: ClassDef[] = [];
  for (const e of classEntries(doc)) {
    const cls = d.CLASSES.find((c) => c.id === e.classId);
    if (cls && cls.spellcaster !== "none") casterClasses.push(cls);
  }

  if (casterClasses.length === 0) {
    return (
      <Card title={t("wizard.spells.castingTitle")} accent="violet">
        <p className="text-sm text-zinc-400">{t("wizard.spells.noCaster")}</p>
      </Card>
    );
  }

  const catalogMap = new Map<string, SpellDef>();
  for (const cls of casterClasses) {
    for (const spell of d.spellsForClass(cls.id)) {
      if (!catalogMap.has(spell.id)) catalogMap.set(spell.id, spell);
    }
  }
  const catalog = [...catalogMap.values()];

  const dc = spellSaveDc(doc, d);
  const atk = spellAttackBonus(doc, d);
  const { groups, used } = spellSlots(doc, d);
  const level = totalLevel(doc);

  function toggleKnown(spellId: string) {
    update((doc) => {
      doc.spellcasting.known = doc.spellcasting.known.includes(spellId)
        ? doc.spellcasting.known.filter((s) => s !== spellId)
        : [...doc.spellcasting.known, spellId];
    });
  }

  function togglePrepared(spellId: string) {
    update((doc) => {
      doc.spellcasting.prepared = doc.spellcasting.prepared.includes(spellId)
        ? doc.spellcasting.prepared.filter((s) => s !== spellId)
        : [...doc.spellcasting.prepared, spellId];
    });
  }

  function setUsed(key: string, value: number, max: number) {
    update((doc) => {
      doc.spellcasting.slotsUsed[key] = Math.min(max, Math.max(0, value));
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
          title={t("wizard.spells.slotsTitle", {
            classes: casterClasses.map((c) => c.name).join(" + "),
          })}
          accent="violet"
        >
          {groups.length === 0 ? (
            <p className="text-sm text-zinc-500">
              {t("wizard.spells.noSlots", { level })}
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
                      {g.source === "pact"
                        ? t("wizard.spells.slotLevelPact", { level: g.level })
                        : t("wizard.spells.slotLevel", { level: g.level })}
                    </p>
                    <p className="my-1 text-xl font-bold text-zinc-100">
                      {fmt.num(Math.max(0, g.max - current))}/{fmt.num(g.max)}
                    </p>
                    <NumberInput
                      value={current}
                      onChange={(n) => setUsed(key, n, g.max)}
                      min={0}
                      max={g.max}
                    />
                    <p className="mt-1 text-[10px] text-zinc-600">
                      {t("wizard.spells.used")}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </Card>

        <Card title={t("wizard.spells.casting")} accent="violet">
          <div className="flex flex-col gap-3">
            {dc && (
              <div>
                <p className="text-xs text-zinc-500">
                  {t("wizard.spells.saveDc")}
                </p>
                <p className="text-3xl font-bold text-zinc-100">{dc.value}</p>
                <p className="text-xs text-zinc-600">
                  {t("wizard.spells.saveDcFormula")}
                </p>
              </div>
            )}
            {atk && (
              <div>
                <p className="text-xs text-zinc-500">
                  {t("wizard.spells.spellAttack")}
                </p>
                <p className="text-3xl font-bold text-amber-400">
                  +{atk.value}
                </p>
                <p className="text-xs text-zinc-600">
                  {t("wizard.spells.spellAttackFormula")}
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>

      <Card
        title={t("wizard.spells.knownTitle", {
          n: fmt.num(doc.spellcasting.known.length),
        })}
        accent="violet"
      >
        {doc.spellcasting.known.length === 0 ? (
          <p className="text-sm text-zinc-500">{t("wizard.spells.noKnown")}</p>
        ) : (
          <div className="flex flex-col gap-2">
            {doc.spellcasting.known
              .map((id) => d.getSpell(id))
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
                    {spell.level === 0
                      ? t("wizard.spells.cantrip")
                      : t(LEVEL_KEYS[spell.level])}
                  </Badge>
                  <Badge>{spell.school}</Badge>
                  <div className="ml-auto w-40">
                    <Toggle
                      checked={doc.spellcasting.prepared.includes(spell.id)}
                      onChange={() => togglePrepared(spell.id)}
                      label={t("wizard.spells.prepared")}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </Card>

      <div className="flex flex-col gap-3">
        {LEVEL_KEYS.map((levelKey, level) => {
          const spells = byLevel[level];
          if (!spells?.length) return null;
          return (
            <Card
              key={level}
              title={t("wizard.spells.levelGroup", {
                level: t(levelKey),
                n: fmt.num(spells.length),
              })}
              accent="violet"
            >
              <div className="grid gap-2 sm:grid-cols-2">
                {spells.map((spell) => (
                  <Toggle
                    key={spell.id}
                    checked={doc.spellcasting.known.includes(spell.id)}
                    onChange={() => toggleKnown(spell.id)}
                    label={t("wizard.spells.spellOption", {
                      name: spell.name,
                      time: spell.castingTime,
                      range: fmt.distanceText(spell.range),
                    })}
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
