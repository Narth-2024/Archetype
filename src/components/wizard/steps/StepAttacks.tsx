"use client";

import { useWizard } from "../context";
import { Badge, Card, Field, NumberInput, Select, TextArea, TextInput, Toggle } from "@/components/ui";
import { getWeapon, WEAPONS } from "@/data";
import { ABILITY_KEYS, ABILITY_NAMES, type Attack, type AbilityKey } from "@/domain/types";
import { attackBonus, attackDamage, resolveAttackAbility } from "@/domain/calc";
import { ftRange } from "@/domain/units";

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

  function addAttack(kind: Attack["kind"]) {
    const atk = newAttack();
    atk.kind = kind;
    update((d) => {
      d.attacks.push(atk);
    });
  }

  function patchAttack(id: string, patch: Partial<Attack>) {
    update((d) => {
      const found = d.attacks.find((a) => a.id === id);
      if (found) Object.assign(found, patch);
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-zinc-400">
          Bônus de ataque e dano são calculados a partir de atributo,
          proficiência e arma. Você só escolhe o que usar.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => addAttack("arma")}
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
          >
            + Ataque com arma
          </button>
          <button
            type="button"
            onClick={() => addAttack("magico")}
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
          >
            + Ataque mágico
          </button>
        </div>
      </div>

      {doc.attacks.length === 0 && (
        <Card>
          <p className="text-sm text-zinc-500">
            Nenhum ataque cadastrado ainda.
          </p>
        </Card>
      )}

      {doc.attacks.map((atk) => {
        const bonus = attackBonus(doc, atk);
        const damage = attackDamage(doc, atk);
        const ability = resolveAttackAbility(doc, atk);
        const weapon = atk.weaponId ? getWeapon(atk.weaponId) : undefined;
        return (
          <Card key={atk.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-semibold text-zinc-100">
                    {atk.name || (weapon?.name ?? "Ataque sem nome")}
                  </h4>
                  <Badge color={atk.kind === "magico" ? "blue" : "amber"}>
                    {atk.kind === "magico" ? "Mágico" : "Arma"}
                  </Badge>
                  {atk.magicBonus > 0 && (
                    <Badge color="green">+{atk.magicBonus} mágico</Badge>
                  )}
                </div>
                <p className="mt-1 text-sm text-zinc-400">
                  Ataque{" "}
                  <strong className="text-amber-400">
                    {bonus.value >= 0 ? `+${bonus.value}` : bonus.value}
                  </strong>{" "}
                  · Dano <strong className="text-zinc-200">{damage}</strong>
                  {atk.range && ` · alcance ${ftRange(atk.range)}`}
                  {weapon && ` · ${weapon.properties.join(", ")}`}
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  {bonus.parts
                    .map((p) => `${p.value >= 0 ? "+" : "−"}${Math.abs(p.value)} ${p.label}`)
                    .join(" ")}{" "}
                  · habilidade: {ABILITY_NAMES[ability]}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  update((d) => {
                    d.attacks = d.attacks.filter((a) => a.id !== atk.id);
                  })
                }
                className="text-xs text-zinc-600 transition hover:text-red-400"
              >
                remover
              </button>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Field label="Nome">
                <TextInput
                  value={atk.name}
                  onChange={(e) => patchAttack(atk.id, { name: e.target.value })}
                  placeholder={weapon?.name ?? "Nome do ataque"}
                />
              </Field>

              {atk.kind === "arma" && (
                <Field label="Arma">
                  <Select
                    value={atk.weaponId ?? ""}
                    onChange={(e) => {
                      const w = e.target.value ? getWeapon(e.target.value) : null;
                      patchAttack(atk.id, {
                        weaponId: e.target.value || null,
                        name: w?.name ?? atk.name,
                        damageType: w?.damageType ?? atk.damageType,
                        range: w?.range ?? atk.range,
                        properties: w ? w.properties.join(", ") : atk.properties,
                      });
                    }}
                  >
                    <option value="">Arma personalizada</option>
                    {WEAPONS.map((w) => (
                      <option key={w.id} value={w.id}>
                        {w.name}
                      </option>
                    ))}
                  </Select>
                </Field>
              )}

              <Field label="Habilidade usada">
                <Select
                  value={atk.ability}
                  onChange={(e) =>
                    patchAttack(atk.id, {
                      ability: e.target.value as AbilityKey | "auto",
                    })
                  }
                >
                  <option value="auto">
                    Automática ({ABILITY_NAMES[ability]})
                  </option>
                  {ABILITY_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {ABILITY_NAMES[k]}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Bônus mágico">
                <NumberInput
                  value={atk.magicBonus}
                  onChange={(n) => patchAttack(atk.id, { magicBonus: n })}
                  min={0}
                  max={10}
                />
              </Field>

              <Field label="Dano (ex: 1d8)">
                <TextInput
                  value={atk.damageDice ?? weapon?.damage ?? ""}
                  onChange={(e) =>
                    patchAttack(atk.id, { damageDice: e.target.value || null })
                  }
                  placeholder={weapon?.damage ?? "1d6"}
                />
              </Field>

              <Field label="Tipo de dano">
                <TextInput
                  value={atk.damageType}
                  onChange={(e) => patchAttack(atk.id, { damageType: e.target.value })}
                  placeholder={weapon?.damageType ?? "cortante"}
                />
              </Field>

              <Field
                label="Alcance"
                hint={atk.range ? `exibido como ${ftRange(atk.range)}` : "em pés (exibição em metros)"}
              >
                <TextInput
                  value={atk.range}
                  onChange={(e) => patchAttack(atk.id, { range: e.target.value })}
                  placeholder={weapon?.range ?? "ex: 30/120"}
                />
              </Field>

              <Field label="Propriedades">
                <TextInput
                  value={atk.properties}
                  onChange={(e) => patchAttack(atk.id, { properties: e.target.value })}
                  placeholder={weapon?.properties.join(", ") ?? "Finesse, Leve"}
                />
              </Field>

              <div className="flex items-end pb-1">
                <Toggle
                  checked={atk.proficient}
                  onChange={(v) => patchAttack(atk.id, { proficient: v })}
                  label="Proficiente"
                />
              </div>
            </div>

            <div className="mt-3">
              <Field label="Descrição">
                <TextArea
                  value={atk.description}
                  onChange={(e) => patchAttack(atk.id, { description: e.target.value })}
                  placeholder="Efeitos especiais, notas..."
                />
              </Field>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
