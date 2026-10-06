"use client";

import { useWizard } from "../context";
import { Badge, Card, Select } from "@/components/ui";
import {
  ABILITY_PT,
  FEATS,
  buildFeatRef,
  featUnmetRequirements,
  getBackground,
  getClass,
  getRace,
  getSubclass,
  getSubrace,
  parseFeatRef,
} from "@/data";
import {
  ABILITY_NAMES,
  type AbilityKey,
} from "@/domain/types";
import {
  abilityScore,
  classEntries,
  hasSpellcasting,
  resolveProficiencies,
} from "@/domain/calc";
import { ft } from "@/domain/units";

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
  const race = getRace(doc.identity.raceId);
  const subrace = getSubrace(doc.identity.subraceId);
  const classes: { cls: NonNullable<ReturnType<typeof getClass>>; level: number }[] = [];
  for (const e of classEntries(doc)) {
    const cls = getClass(e.classId);
    if (cls) classes.push({ cls, level: e.level });
  }
  const bg = getBackground(doc.identity.backgroundId);
  const profs = resolveProficiencies(doc);

  const featCtx = {
    abilities: {
      str: abilityScore(doc, "str"),
      dex: abilityScore(doc, "dex"),
      con: abilityScore(doc, "con"),
      int: abilityScore(doc, "int"),
      wis: abilityScore(doc, "wis"),
      cha: abilityScore(doc, "cha"),
    },
    armorProficiencies: profs.armors,
    canCastSpells: hasSpellcasting(doc),
  };

  function toggleFeat(featId: string) {
    update((d) => {
      const idx = d.feats.findIndex((ref) => parseFeatRef(ref).featId === featId);
      if (idx >= 0) {
        d.feats.splice(idx, 1);
      } else {
        const feat = FEATS.find((f) => f.id === featId);
        d.feats.push(feat?.abilityChoice ? buildFeatRef(featId, feat.abilityChoice.options[0]) : featId);
      }
    });
  }

  function setFeatAbility(featId: string, ability: string) {
    update((d) => {
      const idx = d.feats.findIndex((ref) => parseFeatRef(ref).featId === featId);
      if (idx >= 0) d.feats[idx] = buildFeatRef(featId, ability as AbilityKey);
    });
  }

  const bonusLines: { label: string; detail: string }[] = [];
  if (race) {
    const fixed = Object.entries(race.abilityBonus.fixed);
    if (fixed.length > 0) {
      bonusLines.push({
        label: `${race.name} → atributos`,
        detail: fixed
          .map(([k, v]) => `+${v} ${k.toUpperCase()}`)
          .join(", "),
      });
    }
    if (race.abilityBonus.flexible) {
      bonusLines.push({
        label: `${race.name} → bônus flexível`,
        detail:
          doc.identity.raceBonusChoices.length > 0
            ? `+${race.abilityBonus.flexible.amount} em ${doc.identity.raceBonusChoices
                .map((k: AbilityKey) => ABILITY_NAMES[k])
                .join(", ")}`
            : "ainda não escolhido (etapa de atributos)",
      });
    }
    bonusLines.push({
      label: `${race.name} → deslocamento`,
      detail: `${ft(race.speed)}${race.darkvision ? ` · visão no escuro ${ft(race.darkvision)}` : ""}`,
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <Card title="Como as escolhas estão sendo aplicadas">
        {bonusLines.length === 0 ? (
          <p className="text-sm text-zinc-500">
            Escolha raça, classe e antecedente na etapa 1 para ver as
            características aqui.
          </p>
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
                <span className="text-zinc-300">Classes → proficiências:</span>
                <span className="text-emerald-400">
                  {[...profs.armors, ...profs.weapons].join(", ") || "nenhuma"}
                </span>
              </li>
            )}
          </ul>
        )}
      </Card>

      <TraitList
        title={`Características de ${race?.name ?? "raça"}`}
        traits={race?.traits ?? []}
        badge="Raça"
      />
      {subrace && (
        <TraitList
          title={`Características de ${subrace.name}`}
          traits={subrace.traits}
          badge="Sub-raça"
        />
      )}
      {classes.map(({ cls, level }) => (
        <TraitList
          key={cls.id}
          title={`Recursos de ${cls.name} (nível ${level})`}
          traits={cls.features}
          badge="Classe"
        />
      ))}
      {classEntries(doc)
        .filter((e) => e.subclassId)
        .map((e) => {
          const subclass = getSubclass(e.subclassId);
          if (!subclass) return null;
          const features = subclass.features.filter((f) => f.level <= e.level);
          return (
            <TraitList
              key={`${e.classId}-subclass`}
              title={`${subclass.name} (nível ${e.level} de ${getClass(e.classId)?.name ?? e.classId})`}
              traits={
                features.length > 0
                  ? features
                  : [
                      {
                        name: `Disponível no nível ${subclass.level}`,
                        description: `Os recursos de ${subclass.name} começam no nível ${subclass.level} da classe.`,
                      },
                    ]
              }
              badge="Subclasse"
            />
          );
        })}
      <Card title="Talentos (feats)" accent="amber">
        <p className="mb-3 text-xs text-zinc-500">
          Marque livremente. Avisos em vermelho indicam pré-requisito não
          cumprido — o talento pode ser mantido, mas não terá efeito até a mesa
          permitir.
        </p>
        <ul className="flex flex-col gap-3">
          {FEATS.map((feat) => {
            const ref = doc.feats.find((r) => parseFeatRef(r).featId === feat.id);
            const selected = Boolean(ref);
            const missing = selected ? featUnmetRequirements(feat, featCtx) : [];
            const parsed = ref ? parseFeatRef(ref) : null;
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
                      <option value="">Escolha o atributo...</option>
                      {feat.abilityChoice.options.map((opt) => (
                        <option key={opt} value={opt}>
                          +1 {ABILITY_PT[opt]}
                        </option>
                      ))}
                    </Select>
                  </div>
                )}
                {missing.length > 0 && (
                  <p className="mt-2 pl-6 text-xs text-red-400">
                    ⚠ Pré-requisito não cumprido: {missing.join("; ")}.
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </Card>

      {bg && (
        <Card title={`Traço de ${bg.name}`} accent="emerald">
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-200">{bg.feature.name}</span>
            <Badge color="amber">Antecedente</Badge>
          </div>
          <p className="mt-0.5 text-sm text-zinc-400">{bg.feature.description}</p>
        </Card>
      )}
    </div>
  );
}
