"use client";

import { useWizard } from "../context";
import { Badge, Card, Field, NumberInput, Select, TextArea, TextInput, Toggle } from "@/components/ui";
import { useT, useData, useFormat } from "@/lib/i18n/client";
import { ABILITY_KEYS, type Attack, type AbilityKey } from "@/domain/types";
import { attackBonus, attackDamage, resolveAttackAbility } from "@/domain/calc";

function newAttack(): Attack {
  return {
    id: crypto.randomUUID(),
    name: "",
    kind: "arma",
    weaponId: null,
    ability: "auto",
    magicBonus: 0,
    proficient: true,
    damageDice: null,
    damageType: "",
    range: "",
    properties: "",
    description: "",
  };
}

export function StepAttacks() {
  const { doc, update } = useWizard();
  const t = useT();
  const d = useData();
  const fmt = useFormat();

  function addAttack(kind: Attack["kind"]) {
    const atk = newAttack();
    atk.kind = kind;
    update((doc) => {
      doc.attacks.push(atk);
    });
  }

  function patchAttack(id: string, patch: Partial<Attack>) {
    update((doc) => {
      const found = doc.attacks.find((a) => a.id === id);
      if (found) Object.assign(found, patch);
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-zinc-400">{t("wizard.attacks.intro")}</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => addAttack("arma")}
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
          >
            + {t("wizard.attacks.addWeapon")}
          </button>
          <button
            type="button"
            onClick={() => addAttack("magico")}
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
          >
            + {t("wizard.attacks.addSpell")}
          </button>
        </div>
      </div>

      {doc.attacks.length === 0 && (
        <Card>
          <p className="text-sm text-zinc-500">{t("wizard.attacks.empty")}</p>
        </Card>
      )}

      {doc.attacks.map((atk) => {
        const bonus = attackBonus(doc, atk, d);
        const damage = attackDamage(doc, atk, d);
        const ability = resolveAttackAbility(doc, atk, d);
        const weapon = atk.weaponId ? d.getWeapon(atk.weaponId) : undefined;
        return (
          <Card key={atk.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-semibold text-zinc-100">
                    {atk.name ||
                      weapon?.name ||
                      t("wizard.attacks.unnamed")}
                  </h4>
                  <Badge color={atk.kind === "magico" ? "blue" : "amber"}>
                    {atk.kind === "magico"
                      ? t("wizard.badge.spell")
                      : t("wizard.badge.weapon")}
                  </Badge>
                  {atk.magicBonus > 0 && (
                    <Badge color="green">
                      {t("wizard.attacks.magicBadge", { n: atk.magicBonus })}
                    </Badge>
                  )}
                </div>
                <p className="mt-1 text-sm text-zinc-400">
                  {t("wizard.attacks.attack")}{" "}
                  <strong className="text-amber-400">
                    {bonus.value >= 0 ? `+${bonus.value}` : bonus.value}
                  </strong>{" "}
                  · {t("wizard.attacks.damage")}{" "}
                  <strong className="text-zinc-200">{damage}</strong>
                  {atk.range &&
                    ` · ${t("wizard.attacks.range", {
                      value: fmt.distanceRange(atk.range),
                    })}`}
                  {weapon && ` · ${weapon.properties.join(", ")}`}
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  {bonus.parts
                    .map(
                      (p) =>
                        `${p.value >= 0 ? "+" : "−"}${Math.abs(p.value)} ${p.label}`,
                    )
                    .join(" ")}{" "}
                  ·{" "}
                  {t("wizard.attacks.ability", {
                    name: d.ABILITY_NAMES[ability] ?? ability,
                  })}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  update((doc) => {
                    doc.attacks = doc.attacks.filter((a) => a.id !== atk.id);
                  })
                }
                className="text-xs text-zinc-600 transition hover:text-red-400"
              >
                {t("wizard.attacks.remove")}
              </button>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Field label={t("wizard.name")}>
                <TextInput
                  value={atk.name}
                  onChange={(e) => patchAttack(atk.id, { name: e.target.value })}
                  placeholder={weapon?.name ?? t("wizard.attacks.namePlaceholder")}
                />
              </Field>

              {atk.kind === "arma" && (
                <Field label={t("wizard.attacks.weapon")}>
                  <Select
                    value={atk.weaponId ?? ""}
                    onChange={(e) => {
                      const w = e.target.value
                        ? d.getWeapon(e.target.value)
                        : null;
                      patchAttack(atk.id, {
                        weaponId: e.target.value || null,
                        name: w?.name ?? atk.name,
                        damageType: w?.damageType ?? atk.damageType,
                        range: w?.range ?? atk.range,
                        properties: w
                          ? w.properties.join(", ")
                          : atk.properties,
                      });
                    }}
                  >
                    <option value="">{t("wizard.attacks.customWeapon")}</option>
                    {d.WEAPONS.map((w) => (
                      <option key={w.id} value={w.id}>
                        {w.name}
                      </option>
                    ))}
                  </Select>
                </Field>
              )}

              <Field label={t("wizard.attacks.abilityField")}>
                <Select
                  value={atk.ability}
                  onChange={(e) =>
                    patchAttack(atk.id, {
                      ability: e.target.value as AbilityKey | "auto",
                    })
                  }
                >
                  <option value="auto">
                    {t("wizard.attacks.autoAbility", {
                      name: d.ABILITY_NAMES[ability] ?? ability,
                    })}
                  </option>
                  {ABILITY_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {d.ABILITY_NAMES[k] ?? k}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label={t("wizard.attacks.magicBonus")}>
                <NumberInput
                  value={atk.magicBonus}
                  onChange={(n) => patchAttack(atk.id, { magicBonus: n })}
                  min={0}
                  max={10}
                />
              </Field>

              <Field label={t("wizard.attacks.damageField")}>
                <TextInput
                  value={atk.damageDice ?? weapon?.damage ?? ""}
                  onChange={(e) =>
                    patchAttack(atk.id, { damageDice: e.target.value || null })
                  }
                  placeholder={weapon?.damage ?? t("wizard.attacks.damagePlaceholder")}
                />
              </Field>

              <Field label={t("wizard.attacks.damageType")}>
                <TextInput
                  value={atk.damageType}
                  onChange={(e) =>
                    patchAttack(atk.id, { damageType: e.target.value })
                  }
                  placeholder={
                    weapon?.damageType ?? t("wizard.attacks.damageTypePlaceholder")
                  }
                />
              </Field>

              <Field
                label={t("wizard.attacks.rangeField")}
                hint={
                  atk.range
                    ? t("wizard.attacks.rangeShown", {
                        value: fmt.distanceRange(atk.range),
                      })
                    : t("wizard.attacks.rangeHint")
                }
              >
                <TextInput
                  value={atk.range}
                  onChange={(e) => patchAttack(atk.id, { range: e.target.value })}
                  placeholder={weapon?.range ?? t("wizard.attacks.rangePlaceholder")}
                />
              </Field>

              <Field label={t("wizard.attacks.properties")}>
                <TextInput
                  value={atk.properties}
                  onChange={(e) =>
                    patchAttack(atk.id, { properties: e.target.value })
                  }
                  placeholder={
                    weapon?.properties.join(", ") ??
                    t("wizard.attacks.propertiesPlaceholder")
                  }
                />
              </Field>

              <div className="flex items-end pb-1">
                <Toggle
                  checked={atk.proficient}
                  onChange={(v) => patchAttack(atk.id, { proficient: v })}
                  label={t("wizard.attacks.proficient")}
                />
              </div>
            </div>

            <div className="mt-3">
              <Field label={t("wizard.attacks.description")}>
                <TextArea
                  value={atk.description}
                  onChange={(e) =>
                    patchAttack(atk.id, { description: e.target.value })
                  }
                  placeholder={t("wizard.attacks.descriptionPlaceholder")}
                />
              </Field>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
