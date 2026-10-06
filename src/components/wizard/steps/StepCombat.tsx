"use client";

import { useWizard } from "../context";
import { Card, Field, Formula, NumberInput } from "@/components/ui";
import { useT, useData, useFormat } from "@/lib/i18n/client";
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
import { alignmentKeyFor } from "./StepIdentity";

export function StepCombat() {
  const { doc, update } = useWizard();
  const t = useT();
  const d = useData();
  const fmt = useFormat();
  const ac = armorClass(doc, d);
  const init = initiative(doc, d);
  const hp = maxHp(doc, d);
  const warnings = armorWarnings(doc, d);
  const pb = pbOf(doc);
  const entries = classEntries(doc);
  const race = d.getRace(doc.identity.raceId);
  const level = totalLevel(doc);
  const alignmentKey = alignmentKeyFor(doc.identity.alignment);

  return (
    <div className="flex flex-col gap-5">
      {entries.length === 0 || !race ? (
        <Card>
          <p className="text-sm text-zinc-400">{t("wizard.combat.pickFirst")}</p>
        </Card>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title={t("wizard.combat.ac")} accent="sky">
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

        <Card title={t("wizard.combat.initiative")}>
          <Formula value={init.value} parts={init.parts} />
        </Card>

        <Card title={t("wizard.combat.speed")}>
          <p className="text-4xl font-bold text-zinc-100">
            {fmt.distance(speed(doc, d))}
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            {t("wizard.combat.baseSpeed", {
              name: race?.name ?? "",
              value: fmt.distance(race?.speed ?? 30),
            })}
          </p>
        </Card>

        <Card title={t("wizard.combat.maxHp")} accent="rose" className="sm:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-4xl font-bold text-zinc-100">{hp.value}</span>
            <button
              type="button"
              onClick={() =>
                update((doc) => {
                  doc.combat.hpCurrent = hp.value;
                })
              }
              className="rounded-md border border-emerald-700 px-3 py-1.5 text-xs text-emerald-400 transition hover:bg-emerald-950/50"
            >
              {t("wizard.combat.fillHp")}
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

        <Card title={t("wizard.combat.proficiency")}>
          <p className="text-4xl font-bold text-amber-400">+{pb}</p>
          <p className="mt-2 text-xs text-zinc-500">
            {t("wizard.combat.pbHint", { level })}
          </p>
        </Card>

        <Card title={t("wizard.combat.currentHp")} accent="rose">
          <Field label={t("wizard.combat.currentHp")}>
            <NumberInput
              value={doc.combat.hpCurrent}
              onChange={(n) =>
                update((doc) => {
                  doc.combat.hpCurrent = n;
                })
              }
              min={0}
              max={999}
            />
          </Field>
        </Card>

        <Card title={t("wizard.combat.tempHp")} accent="rose">
          <Field label={t("wizard.combat.tempHp")}>
            <NumberInput
              value={doc.combat.hpTemp}
              onChange={(n) =>
                update((doc) => {
                  doc.combat.hpTemp = n;
                })
              }
              min={0}
              max={999}
            />
          </Field>
        </Card>

        <Card title={t("wizard.combat.alignmentXp")}>
          <div className="flex flex-col gap-2 text-sm text-zinc-300">
            <span>
              {t("wizard.combat.alignment", {
                value: alignmentKey
                  ? t(alignmentKey)
                  : doc.identity.alignment || t("wizard.alignment.none"),
              })}
            </span>
            <span>{t("wizard.combat.xp", { n: fmt.num(doc.identity.xp) })}</span>
          </div>
        </Card>
      </div>

      <Card title={t("wizard.combat.tipTitle")}>
        <p className="text-sm text-zinc-400">{t("wizard.combat.tip")}</p>
      </Card>
    </div>
  );
}
