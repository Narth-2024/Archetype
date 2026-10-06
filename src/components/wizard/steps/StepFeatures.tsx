"use client";

import { useWizard } from "../context";
import { Badge, Card, Select } from "@/components/ui";
import { useT, useData, useFormat } from "@/lib/i18n/client";
import type { AbilityKey } from "@/domain/types";
import {
  abilityScore,
  classEntries,
  hasSpellcasting,
  resolveProficiencies,
} from "@/domain/calc";

function TraitList({
  title,
  traits,
  badge,
}: {
  title: string;
  traits: { name: string; description: string }[];
  badge: string;
}) {
  if (traits.length === 0) return null;
  return (
    <Card title={title}>
      <ul className="flex flex-col gap-3">
        {traits.map((t) => (
          <li key={t.name}>
            <div className="flex items-center gap-2">
              <span className="font-medium text-zinc-200">{t.name}</span>
              <Badge color="amber">{badge}</Badge>
            </div>
            <p className="mt-0.5 text-sm text-zinc-400">{t.description}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function StepFeatures() {
  const { doc, update } = useWizard();
  const t = useT();
  const d = useData();
  const fmt = useFormat();
  const race = d.getRace(doc.identity.raceId);
  const subrace = d.getSubrace(doc.identity.subraceId);
  const classes: { cls: NonNullable<ReturnType<typeof d.getClass>>; level: number }[] = [];
  for (const e of classEntries(doc)) {
    const cls = d.getClass(e.classId);
    if (cls) classes.push({ cls, level: e.level });
  }
  const bg = d.getBackground(doc.identity.backgroundId);
  const profs = resolveProficiencies(doc, d);

  const featCtx = {
    abilities: {
      str: abilityScore(doc, "str", d),
      dex: abilityScore(doc, "dex", d),
      con: abilityScore(doc, "con", d),
      int: abilityScore(doc, "int", d),
      wis: abilityScore(doc, "wis", d),
      cha: abilityScore(doc, "cha", d),
    },
    armorProficiencies: profs.armors,
    canCastSpells: hasSpellcasting(doc, d),
  };

  function toggleFeat(featId: string) {
    update((doc) => {
      const idx = doc.feats.findIndex(
        (ref) => d.parseFeatRef(ref).featId === featId,
      );
      if (idx >= 0) {
        doc.feats.splice(idx, 1);
      } else {
        const feat = d.FEATS.find((f) => f.id === featId);
        doc.feats.push(
          feat?.abilityChoice
            ? d.buildFeatRef(featId, feat.abilityChoice.options[0])
            : featId,
        );
      }
    });
  }

  function setFeatAbility(featId: string, ability: string) {
    update((doc) => {
      const idx = doc.feats.findIndex(
        (ref) => d.parseFeatRef(ref).featId === featId,
      );
      if (idx >= 0) doc.feats[idx] = d.buildFeatRef(featId, ability as AbilityKey);
    });
  }

  function speedDetail(speed: number, darkvision?: number | null) {
    const base = t("wizard.identity.speed", { value: fmt.distance(speed) });
    if (!darkvision) return base;
    return `${base} · ${t("wizard.identity.darkvision", {
      value: fmt.distance(darkvision),
    })}`;
  }

  const bonusLines: { label: string; detail: string }[] = [];
  if (race) {
    const fixed = Object.entries(race.abilityBonus.fixed);
    if (fixed.length > 0) {
      bonusLines.push({
        label: t("wizard.features.raceAbilities", { name: race.name }),
        detail: fixed
          .map(([k, v]) => `+${v} ${d.ABILITY_ABBR[k] ?? k.toUpperCase()}`)
          .join(", "),
      });
    }
    if (race.abilityBonus.flexible) {
      bonusLines.push({
        label: t("wizard.features.raceFlexible", { name: race.name }),
        detail:
          doc.identity.raceBonusChoices.length > 0
            ? t("wizard.features.flexibleDetail", {
                amount: race.abilityBonus.flexible.amount,
                names: doc.identity.raceBonusChoices
                  .map((k: AbilityKey) => d.ABILITY_NAMES[k] ?? k)
                  .join(", "),
              })
            : t("wizard.features.notChosen"),
      });
    }
    bonusLines.push({
      label: t("wizard.features.raceSpeed", { name: race.name }),
      detail: speedDetail(race.speed, race.darkvision),
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <Card title={t("wizard.features.howApplied")}>
        {bonusLines.length === 0 ? (
          <p className="text-sm text-zinc-500">{t("wizard.features.chooseFirst")}</p>
        ) : (
          <ul className="flex flex-col gap-2 text-sm">
            {bonusLines.map((line) => (
              <li key={line.label} className="flex flex-wrap gap-2">
                <span className="text-zinc-300">{line.label}:</span>
                <span className="text-emerald-400">{line.detail}</span>
              </li>
            ))}
            {classes.length > 0 && (
              <li className="flex flex-wrap gap-2">
                <span className="text-zinc-300">
                  {t("wizard.features.classProficiencies")}
                </span>
                <span className="text-emerald-400">
                  {[...profs.armors, ...profs.weapons].join(", ") ||
                    t("wizard.features.none")}
                </span>
              </li>
            )}
          </ul>
        )}
      </Card>

      <TraitList
        title={t("wizard.features.raceTraits", {
          name: race?.name ?? t("wizard.features.raceFallback"),
        })}
        traits={race?.traits ?? []}
        badge={t("wizard.badge.race")}
      />
      {subrace && (
        <TraitList
          title={t("wizard.features.subraceTraits", { name: subrace.name })}
          traits={subrace.traits}
          badge={t("wizard.badge.subrace")}
        />
      )}
      {classes.map(({ cls, level }) => (
        <TraitList
          key={cls.id}
          title={t("wizard.features.classResources", { name: cls.name, level })}
          traits={cls.features}
          badge={t("wizard.badge.class")}
        />
      ))}
      {classEntries(doc)
        .filter((e) => e.subclassId)
        .map((e) => {
          const subclass = d.getSubclass(e.subclassId);
          if (!subclass) return null;
          const features = subclass.features.filter((f) => f.level <= e.level);
          return (
            <TraitList
              key={`${e.classId}-subclass`}
              title={t("wizard.features.subclassResources", {
                name: subclass.name,
                level: e.level,
                cls: d.getClass(e.classId)?.name ?? e.classId,
              })}
              traits={
                features.length > 0
                  ? features
                  : [
                      {
                        name: t("wizard.features.availableAtLevel", {
                          level: subclass.level,
                        }),
                        description: t("wizard.features.subclassStartsAt", {
                          name: subclass.name,
                          level: subclass.level,
                        }),
                      },
                    ]
              }
              badge={t("wizard.badge.subclass")}
            />
          );
        })}
      <Card title={t("wizard.features.featsTitle")} accent="amber">
        <p className="mb-3 text-xs text-zinc-500">{t("wizard.features.featsHint")}</p>
        <ul className="flex flex-col gap-3">
          {d.FEATS.map((feat) => {
            const ref = doc.feats.find((r) => d.parseFeatRef(r).featId === feat.id);
            const selected = Boolean(ref);
            const missing = selected
              ? d.featUnmetRequirements(feat, featCtx)
              : [];
            const parsed = ref ? d.parseFeatRef(ref) : null;
            return (
              <li key={feat.id} className="rounded-md border border-zinc-800 p-3">
                <label className="flex cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleFeat(feat.id)}
                    className="mt-1 accent-amber-600"
                  />
                  <span className="flex-1">
                    <span className="font-medium text-zinc-200">{feat.name}</span>
                    <p className="mt-0.5 text-sm text-zinc-400">{feat.description}</p>
                  </span>
                </label>
                {selected && feat.abilityChoice && (
                  <div className="mt-2 pl-6">
                    <Select
                      value={parsed?.ability ?? ""}
                      onChange={(e) => setFeatAbility(feat.id, e.target.value)}
                      className="max-w-56"
                    >
                      <option value="">{t("wizard.features.chooseAbility")}</option>
                      {feat.abilityChoice.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {t("wizard.features.abilityPlusOne", {
                            name: d.ABILITY_ABBR[opt] ?? opt.toUpperCase(),
                          })}
                        </option>
                      ))}
                    </Select>
                  </div>
                )}
                {missing.length > 0 && (
                  <p className="mt-2 pl-6 text-xs text-red-400">
                    ⚠{" "}
                    {t("wizard.features.reqNotMet", { list: missing.join("; ") })}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </Card>

      {bg && (
        <Card
          title={t("wizard.features.backgroundFeature", { name: bg.name })}
          accent="emerald"
        >
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-200">{bg.feature.name}</span>
            <Badge color="amber">{t("wizard.badge.background")}</Badge>
          </div>
          <p className="mt-0.5 text-sm text-zinc-400">{bg.feature.description}</p>
        </Card>
      )}
    </div>
  );
}
