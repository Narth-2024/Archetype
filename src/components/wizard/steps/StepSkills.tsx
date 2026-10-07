"use client";

import { useWizard } from "../context";
import { Badge, Card, Toggle } from "@/components/ui";
import { useT, useData, useFormat } from "@/lib/i18n/client";
import { ABILITY_KEYS, SKILL_KEYS, type AbilityKey } from "@/domain/types";
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

type Translate = ReturnType<typeof useT>;

function originBadge(
  skillId: string,
  bgSkills: string[],
  classOptions: string[],
  rSkills: string[],
  t: Translate,
) {
  if (bgSkills.includes(skillId))
    return <Badge color="amber">{t("wizard.badge.background")}</Badge>;
  if (classOptions.includes(skillId))
    return <Badge color="blue">{t("wizard.badge.class")}</Badge>;
  if (rSkills.includes(skillId))
    return <Badge color="green">{t("wizard.badge.race")}</Badge>;
  return <Badge>{t("wizard.badge.free")}</Badge>;
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
  const t = useT();
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
            label={
              isResolved ? t("wizard.skills.automatic", { name: opt.name }) : opt.name
            }
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
  const t = useT();
  const fmt = useFormat();
  const over = used > max;
  return (
    <span
      className={`rounded border px-2 py-0.5 text-xs ${
        over ? "border-red-700 text-red-400" : "border-zinc-700 text-zinc-400"
      }`}
    >
      {t("wizard.skills.counter", {
        label,
        used: fmt.num(used),
        max: fmt.num(max),
      })}
      {over ? ` ${t("wizard.skills.over")}` : ""}
    </span>
  );
}

export function StepSkills() {
  const { doc, update } = useWizard();
  const t = useT();
  const d = useData();
  const fmt = useFormat();
  const bg = d.getBackground(doc.identity.backgroundId);
  const race = d.getRace(doc.identity.raceId);
  const bgSkills = backgroundSkills(doc, d);
  const pools = classSkillPools(doc, d);
  const classOptions = [...new Set(pools.flatMap((p) => p.options))];
  const rPool = raceSkillPool(doc, d);
  const rSkills = raceSkills(doc, d);
  const pb = pbOf(doc);
  const profs = resolveProficiencies(doc, d);
  const allowedSaves = classSaveKeys(doc, d);
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
    (race?.languages.filter((l) => l.includes(d.LABELS.choiceFragment)).length ?? 0) +
    (d.getSubrace(doc.identity.subraceId)?.languages?.filter((l) =>
      l.includes(d.LABELS.choiceFragment),
    ).length ?? 0);
  const languagesChosen = doc.proficiencies.languages.length;
  const toolChoices =
    (bg?.toolChoices?.count ?? 0) +
    classEntries(doc).reduce(
      (acc, e) => acc + (d.getClass(e.classId)?.toolChoices?.count ?? 0),
      0,
    );
  const toolsChosen = doc.proficiencies.tools.length;

  function toggleSkill(skillId: string) {
    update((doc) => {
      const skills = doc.skills as Record<string, boolean>;
      skills[skillId] = !skills[skillId];
    });
  }

  function toggleSave(key: AbilityKey) {
    update((doc) => {
      doc.saves[key] = !doc.saves[key];
    });
  }

  function toggleExtra(
    group: "armors" | "weapons" | "tools" | "languages",
    id: string,
  ) {
    update((doc) => {
      const list = doc.proficiencies[group];
      doc.proficiencies[group] = list.includes(id)
        ? list.filter((x) => x !== id)
        : [...list, id];
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <Card title={t("wizard.skills.savesTitle", { pb })}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Counter
            label={t("wizard.skills.counterProfSaves")}
            used={markedSaves.length}
            max={allowedSaves.length}
          />
          {hasClasses && overSaves.length > 0 && (
            <span className="rounded border border-red-700 px-2 py-0.5 text-xs text-red-400">
              ⚠ {t("wizard.skills.outOfClass", { keys: overSaves.join(", ") })}
            </span>
          )}
          {!hasClasses && (
            <span className="text-xs text-zinc-500">
              {t("wizard.skills.pickClassHint")}
            </span>
          )}
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ABILITY_KEYS.map((key) => {
            const derived = saveBonus(doc, key, d);
            const outOfClass = hasClasses && doc.saves[key] && !allowedSaves.includes(key);
            return (
              <div key={key} className="rounded-md border border-zinc-800 p-3">
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-sm font-medium text-zinc-200">
                    {d.ABILITY_NAMES[key] ?? key}
                  </span>
                  <span className="text-lg font-bold text-amber-400">
                    {derived.value >= 0 ? `+${derived.value}` : derived.value}
                  </span>
                </div>
                {outOfClass && (
                  <p className="mb-1 text-xs text-red-400">
                    ⚠ {t("wizard.skills.outOfBudget")}
                  </p>
                )}
                <Toggle
                  checked={doc.saves[key]}
                  onChange={() => toggleSave(key)}
                  label={t("wizard.skills.proficiency")}
                />
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-zinc-500">{t("wizard.skills.savesHint")}</p>
      </Card>

      <Card title={t("wizard.skills.skillsTitle")}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Counter
            label={t("wizard.skills.counterProfSkills")}
            used={markedSkills}
            max={maxSkills}
          />
          <Counter
            label={t("wizard.badge.background")}
            used={bgSkills.filter((s) => doc.skills[s]).length}
            max={bg?.skillChoices.count ?? 0}
          />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {d.SKILLS.map((skill) => {
            const derived = skillBonus(doc, skill.id, d);
            return (
              <div key={skill.id} className="rounded-md border border-zinc-800 p-3">
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-zinc-200">
                    {skill.name}
                    <span className="ml-1 text-xs text-zinc-500">
                      {d.ABILITY_ABBR[skill.ability] ?? skill.ability.toUpperCase()}
                    </span>
                  </span>
                  <span className="text-lg font-bold text-amber-400">
                    {derived.value >= 0 ? `+${derived.value}` : derived.value}
                  </span>
                </div>
                <div className="mb-2">
                  {originBadge(skill.id, bgSkills, classOptions, rSkills, t)}
                </div>
                <Toggle
                  checked={doc.skills[skill.id]}
                  onChange={() => toggleSkill(skill.id)}
                  label={t("wizard.skills.proficiency")}
                />
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          {t("wizard.skills.budgetHint", {
            bg: fmt.num(bg?.skillChoices.count ?? 0),
            race: fmt.num(rPool.count + rSkills.length),
            classes: fmt.num(pools.reduce((a, p) => a + p.count, 0)),
            total: fmt.num(maxSkills),
          })}
        </p>
      </Card>

      <Card title={t("wizard.skills.extraProfs")}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Counter
            label={t("wizard.skills.counterLanguages")}
            used={languagesChosen}
            max={languageChoices}
          />
          <Counter
            label={t("wizard.skills.counterTools")}
            used={toolsChosen}
            max={toolChoices}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase text-zinc-500">
              {t("wizard.skills.armorsTitle")}
            </h4>
            <CheckboxGrid
              options={d.ARMOR_PROF_OPTIONS}
              selected={doc.proficiencies.armors}
              resolved={profs.armors}
              onToggle={(id) => toggleExtra("armors", id)}
            />
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase text-zinc-500">
              {t("wizard.skills.weaponsTitle")}
            </h4>
            <CheckboxGrid
              options={d.WEAPON_PROF_OPTIONS}
              selected={doc.proficiencies.weapons}
              resolved={profs.weapons}
              onToggle={(id) => toggleExtra("weapons", id)}
            />
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase text-zinc-500">
              {t("wizard.skills.toolsTitle")}
            </h4>
            <CheckboxGrid
              options={d.TOOL_OPTIONS.map((tool) => ({ id: tool, name: tool }))}
              selected={doc.proficiencies.tools}
              resolved={profs.tools}
              onToggle={(id) => toggleExtra("tools", id)}
            />
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase text-zinc-500">
              {t("wizard.skills.languagesTitle")}
            </h4>
            <CheckboxGrid
              options={d.LANGUAGE_OPTIONS.map((lang) => ({ id: lang, name: lang }))}
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
