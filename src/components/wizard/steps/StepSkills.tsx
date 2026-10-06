"use client";

import { useWizard } from "../context";
import { Badge, Card, Toggle } from "@/components/ui";
import { ABILITY_KEYS, ABILITY_NAMES, SKILL_KEYS, type AbilityKey } from "@/domain/types";
import {
  ARMOR_PROF_OPTIONS,
  LANGUAGE_OPTIONS,
  SKILLS,
  TOOL_OPTIONS,
  WEAPON_PROF_OPTIONS,
  getBackground,
  getClass,
  getRace,
} from "@/data";
import {
  backgroundSkills,
  classEntries,
  classSaveKeys,
  classSkillPools,
  pbOf,
  raceSkillPool,
  raceSkills,
  resolveProficiencies,
  saveBonus,
  skillBonus,
} from "@/domain/calc";

function originBadge(
  skillId: string,
  bgSkills: string[],
  classOptions: string[],
  rSkills: string[],
) {
  if (bgSkills.includes(skillId)) return <Badge color="amber">Antecedente</Badge>;
  if (classOptions.includes(skillId)) return <Badge color="blue">Classe</Badge>;
  if (rSkills.includes(skillId)) return <Badge color="green">Raça</Badge>;
  return <Badge>Livre</Badge>;
}

function CheckboxGrid({
  options,
  selected,
  resolved,
  onToggle,
}: {
  options: { id: string; name: string }[];
  selected: string[];
  resolved: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((opt) => {
        const isResolved = resolved.includes(opt.id);
        const checked = selected.includes(opt.id) || isResolved;
        return (
          <Toggle
            key={opt.id}
            checked={checked}
            disabled={isResolved}
            onChange={() => onToggle(opt.id)}
            label={isResolved ? `${opt.name} (automático)` : opt.name}
          />
        );
      })}
    </div>
  );
}

function Counter({
  label,
  used,
  max,
}: {
  label: string;
  used: number;
  max: number;
}) {
  const over = used > max;
  return (
    <span
      className={`rounded border px-2 py-0.5 text-xs ${
        over ? "border-red-700 text-red-400" : "border-zinc-700 text-zinc-400"
      }`}
    >
      {label}: {used}/{max}
      {over ? " ⚠ excedeu" : ""}
    </span>
  );
}

export function StepSkills() {
  const { doc, update } = useWizard();
  const bg = getBackground(doc.identity.backgroundId);
  const race = getRace(doc.identity.raceId);
  const bgSkills = backgroundSkills(doc);
  const pools = classSkillPools(doc);
  const classOptions = [...new Set(pools.flatMap((p) => p.options))];
  const rPool = raceSkillPool(doc);
  const rSkills = raceSkills(doc);
  const pb = pbOf(doc);
  const profs = resolveProficiencies(doc);
  const allowedSaves = classSaveKeys(doc);
  const hasClasses = classEntries(doc).length > 0;

  const markedSkills = SKILL_KEYS.filter((k) => doc.skills[k]).length;
  const maxSkills =
    (bg?.skillChoices.count ?? 0) +
    rPool.count +
    pools.reduce((a, p) => a + p.count, 0) +
    rSkills.length;

  const markedSaves = ABILITY_KEYS.filter((k) => doc.saves[k]);
  const overSaves = markedSaves.filter((k) => !allowedSaves.includes(k));

  const languageChoices =
    (bg?.languageChoices?.count ?? 0) +
    (race?.languages.filter((l) => l.includes("à escolha")).length ?? 0);
  const languagesChosen = doc.proficiencies.languages.length;
  const toolChoices =
    (bg?.toolChoices?.count ?? 0) +
    classEntries(doc).reduce(
      (acc, e) => acc + (getClass(e.classId)?.toolChoices?.count ?? 0),
      0,
    );
  const toolsChosen = doc.proficiencies.tools.length;

  function toggleSkill(skillId: string) {
    update((d) => {
      const skills = d.skills as Record<string, boolean>;
      skills[skillId] = !skills[skillId];
    });
  }

  function toggleSave(key: AbilityKey) {
    update((d) => {
      d.saves[key] = !d.saves[key];
    });
  }

  function toggleExtra(
    group: "armors" | "weapons" | "tools" | "languages",
    id: string,
  ) {
    update((d) => {
      const list = d.proficiencies[group];
      d.proficiencies[group] = list.includes(id)
        ? list.filter((x) => x !== id)
        : [...list, id];
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <Card
        title={`Testes de resistência (bônus de proficiência +${pb})`}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Counter
            label="Salvamentos proficientes"
            used={markedSaves.length}
            max={allowedSaves.length}
          />
          {hasClasses && overSaves.length > 0 && (
            <span className="rounded border border-red-700 px-2 py-0.5 text-xs text-red-400">
              ⚠ fora das classes: {overSaves.map((k) => k.toUpperCase()).join(", ")}
            </span>
          )}
          {!hasClasses && (
            <span className="text-xs text-zinc-500">
              Escolha uma classe na etapa 1 para ver o limite recomendado.
            </span>
          )}
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ABILITY_KEYS.map((key) => {
            const derived = saveBonus(doc, key);
            const outOfClass = hasClasses && doc.saves[key] && !allowedSaves.includes(key);
            return (
              <div key={key} className="rounded-md border border-zinc-800 p-3">
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-sm font-medium text-zinc-200">
                    {ABILITY_NAMES[key]}
                  </span>
                  <span className="text-lg font-bold text-amber-400">
                    {derived.value >= 0 ? `+${derived.value}` : derived.value}
                  </span>
                </div>
                {outOfClass && (
                  <p className="mb-1 text-xs text-red-400">
                    ⚠ su classes não dão proficiência aqui (permitido, mas fora
                    do orçamento)
                  </p>
                )}
                <Toggle
                  checked={doc.saves[key]}
                  onChange={() => toggleSave(key)}
                  label="Proficiência"
                />
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Pré-marcados conforme as classes escolhidas. O total = modificador do
          atributo + proficiência (quando marcada).
        </p>
      </Card>

      <Card title="Perícias">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Counter label="Perícias proficientes" used={markedSkills} max={maxSkills} />
          <Counter
            label="Antecedente"
            used={bgSkills.filter((s) => doc.skills[s]).length}
            max={bg?.skillChoices.count ?? 0}
          />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {SKILLS.map((skill) => {
            const derived = skillBonus(doc, skill.id);
            return (
              <div key={skill.id} className="rounded-md border border-zinc-800 p-3">
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-zinc-200">
                    {skill.name}
                    <span className="ml-1 text-xs text-zinc-500">
                      {skill.ability.toUpperCase()}
                    </span>
                  </span>
                  <span className="text-lg font-bold text-amber-400">
                    {derived.value >= 0 ? `+${derived.value}` : derived.value}
                  </span>
                </div>
                <div className="mb-2">
                  {originBadge(skill.id, bgSkills, classOptions, rSkills)}
                </div>
                <Toggle
                  checked={doc.skills[skill.id]}
                  onChange={() => toggleSkill(skill.id)}
                  label="Proficiência"
                />
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Orçamento: antecedente {bg?.skillChoices.count ?? 0} + raça{" "}
          {rPool.count + rSkills.length} + classes{" "}
          {pools.reduce((a, p) => a + p.count, 0)} = {maxSkills} perícias.
          Exceder é permitido, mas fica sinalizado em vermelho.
        </p>
      </Card>

      <Card title="Proficiências adicionais">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Counter
            label="Idiomas à escolha"
            used={languagesChosen}
            max={languageChoices}
          />
          <Counter
            label="Ferramentas à escolha"
            used={toolsChosen}
            max={toolChoices}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase text-zinc-500">
              Armaduras e escudos
            </h4>
            <CheckboxGrid
              options={ARMOR_PROF_OPTIONS}
              selected={doc.proficiencies.armors}
              resolved={profs.armors}
              onToggle={(id) => toggleExtra("armors", id)}
            />
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase text-zinc-500">
              Armas
            </h4>
            <CheckboxGrid
              options={WEAPON_PROF_OPTIONS}
              selected={doc.proficiencies.weapons}
              resolved={profs.weapons}
              onToggle={(id) => toggleExtra("weapons", id)}
            />
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase text-zinc-500">
              Ferramentas
            </h4>
            <CheckboxGrid
              options={TOOL_OPTIONS.map((t) => ({ id: t, name: t }))}
              selected={doc.proficiencies.tools}
              resolved={profs.tools}
              onToggle={(id) => toggleExtra("tools", id)}
            />
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase text-zinc-500">
              Idiomas
            </h4>
            <CheckboxGrid
              options={LANGUAGE_OPTIONS.map((l) => ({ id: l, name: l }))}
              selected={doc.proficiencies.languages}
              resolved={profs.languages}
              onToggle={(id) => toggleExtra("languages", id)}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
