import Link from "next/link";
import { Badge, Card } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangSelect } from "@/components/LangSelect";
import { UnitsSelect } from "@/components/UnitsSelect";
import { PhotoAvatar } from "@/components/sheet/PhotoAvatar";
import { LoreBox } from "@/components/sheet/LoreBox";
import { NotesBox } from "@/components/sheet/NotesBox";
import { SheetActions } from "@/components/sheet/SheetActions";
import { SpellSlotPips } from "@/components/sheet/SpellSlotPips";
import { DiceRoller } from "@/components/sheet/DiceRoller";
import { ABILITY_KEYS, SKILL_KEYS } from "@/domain/types";
import { conditionEffects } from "@/domain/conditions";
import {
  allAbilitiesWithBreakdown,
  armorClass,
  armorWarnings,
  attackBonus,
  attackDamage,
  backgroundSkills,
  classEntries,
  classSkillPools,
  initiative,
  knownSpells,
  maxHp,
  pbOf,
  raceSkills,
  resolveAttackAbility,
  resolveProficiencies,
  proficiencyLabel,
  saveBonus,
  skillBonus,
  speed,
  spellAbility,
  spellAttackBonus,
  spellSaveDc,
  spellSlots,
} from "@/domain/calc";
import { getI18n } from "@/lib/i18n/server";

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-3.5 shrink-0 text-zinc-600 transition-transform group-open:rotate-90"
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TraitGroup({
  title,
  count,
  children,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-md border border-zinc-800/60 px-3">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 py-2 [&::-webkit-details-marker]:hidden">
        <span className="text-xs font-semibold uppercase text-zinc-400">
          {title}
        </span>
        <span className="flex items-center gap-1.5 text-xs tabular-nums text-zinc-600">
          {count}
          <Chevron />
        </span>
      </summary>
      <ul className="flex flex-col border-t border-zinc-800/60 pb-1">
        {children}
      </ul>
    </details>
  );
}

function Trait({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <details className="group border-b border-zinc-800/40 last:border-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 py-1.5 pr-1 pl-1 [&::-webkit-details-marker]:hidden">
        <span className="text-sm font-semibold text-zinc-200">{title}</span>
        <Chevron />
      </summary>
      <p className="pb-2 pr-2 pl-4 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
    </details>
  );
}

export async function SheetView({
  doc,
  characterId,
}: {
  doc: import("@/domain/types").CharacterDoc;
  characterId: string;
}) {
  const { t, data: d, fmt } = await getI18n();
  const signed = (v: number) => (v >= 0 ? `+${fmt.num(v)}` : fmt.num(v));
  const classes = classEntries(doc)
    .map((e) => ({
      cls: d.getClass(e.classId),
      level: e.level,
      subclassId: e.subclassId,
    }))
    .filter(
      (x): x is { cls: NonNullable<ReturnType<typeof d.getClass>>; level: number; subclassId: string | undefined } =>
        Boolean(x.cls),
    );
  const race = d.getRace(doc.identity.raceId);
  const subrace = d.getSubrace(doc.identity.subraceId);
  const selectedFeats = doc.feats
    .map((ref) => ({ ref, feat: d.FEATS.find((f) => f.id === d.parseFeatRef(ref).featId) }))
    .filter((x): x is { ref: string; feat: NonNullable<(typeof d.FEATS)[number]> } => Boolean(x.feat));
  const bg = d.getBackground(doc.identity.backgroundId);
  const ac = armorClass(doc, d);
  const hp = maxHp(doc, d);
  const init = initiative(doc, d);
  const pb = pbOf(doc);
  const warnings = armorWarnings(doc, d);
  const profs = resolveProficiencies(doc, d);
  const profBadges = (kind: "armor" | "weapon", ids: string[]) =>
    ids
      .map((id) => ({
        id,
        name: proficiencyLabel(kind, id, d),
        cat:
          kind === "armor"
            ? d.ARMOR_PROF_OPTIONS.some((o) => o.id === id)
            : d.WEAPON_PROF_OPTIONS.some((o) => o.id === id),
      }))
      // Broad categories first, then alphabetical display names.
      .sort((x, y) => Number(y.cat) - Number(x.cat) || x.name.localeCompare(y.name));
  const profArmors = profBadges("armor", profs.armors);
  const profWeapons = profBadges("weapon", profs.weapons);
  const condEffects = conditionEffects(doc.combat.conditions);
  const abilities = allAbilitiesWithBreakdown(doc, d);
  const dc = spellSaveDc(doc, d);
  const spellAtk = spellAttackBonus(doc, d);
  const castAbility = spellAbility(doc, d);
  const { groups, used } = spellSlots(doc, d);
  const spells = knownSpells(doc, d);
  const spellsByLevel = [...spells]
    .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name))
    .reduce<Record<number, typeof spells>>((acc, s) => {
      (acc[s.level] ??= []).push(s);
      return acc;
    }, {});
  const pools = classSkillPools(doc, d);
  const classOptions = [...new Set(pools.flatMap((p) => p.options))];
  const bgSkills = backgroundSkills(doc, d);
  const rSkills = raceSkills(doc, d);
  const casterClasses = classes.filter((x) => x.cls.spellcaster !== "none");
  const hasCaster = casterClasses.length > 0;

  return (
    <div className="flex flex-col gap-5">
      <Card accent="sky">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <PhotoAvatar id={characterId} photo={doc.photo} name={doc.identity.name} />
            <div>
              <div className="flex flex-wrap items-center gap-2">
              <h1 className="title-gold text-2xl font-bold">
                {doc.identity.name || t("sheet.noName")}
              </h1>
              {doc.complete ? (
                <Badge color="green">{t("sheet.complete")}</Badge>
              ) : (
                <Badge color="amber">{t("sheet.draft")}</Badge>
              )}
            </div>
            <p className="mt-1 text-sm text-zinc-400">
              {[
                race?.name,
                subrace?.name,
                ...classes.map((x) =>
                  x.subclassId
                    ? `${x.cls.name} ${fmt.num(x.level)} (${d.getSubclass(x.subclassId)?.name ?? ""})`
                    : `${x.cls.name} ${fmt.num(x.level)}`,
                ),
                t("sheet.totalLevel", {
                  level: fmt.num(classes.reduce((a, x) => a + x.level, 0) || 1),
                }),
                bg?.name,
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              {doc.identity.player &&
                t("sheet.playerLine", { player: doc.identity.player })}
              {doc.identity.alignment && `${doc.identity.alignment} · `}
              {doc.identity.xp > 0 && `${fmt.num(doc.identity.xp)} XP`}
            </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <LangSelect />
            <ThemeToggle />
            <UnitsSelect />
            <SheetActions doc={doc} characterId={characterId} />
            <Link
              href={`/character/${characterId}/edit`}
              className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
            >
              {t("sheet.edit")}
            </Link>
            <Link
              href="/"
              className="rounded-md border border-zinc-800 px-3 py-1.5 text-sm text-zinc-500 transition hover:border-zinc-600"
            >
              {t("sheet.characters")}
            </Link>
          </div>
        </div>
      </Card>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <Card title={t("sheet.abilities")} accent="amber">
          <div className="grid grid-cols-3 gap-3">
            {abilities.map((a) => (
              <div
                key={a.key}
                className="rounded-md border border-zinc-800 p-2 text-center"
              >
                <p className="text-[10px] uppercase text-zinc-500">
                  {d.ABILITY_ABBR[a.key]}
                </p>
                <p className="text-lg font-bold text-zinc-100">{fmt.num(a.total)}</p>
                <p className="text-sm font-semibold text-amber-400">
                  {signed(a.mod)}
                </p>
                <p className="text-[10px] text-zinc-600">
                  {t("sheet.baseValue", { value: fmt.num(a.base) })}
                  {a.race > 0 ? ` +${fmt.num(a.race)}` : ""}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card title={t("sheet.combat")} accent="rose">
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex justify-between">
              <span className="text-zinc-400">{t("sheet.armorClass")}</span>
              <strong className="text-zinc-100">{fmt.num(ac.value)}</strong>
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-400">{t("sheet.hitPoints")}</span>
              <strong className="text-zinc-100">
                {fmt.num(doc.combat.hpCurrent)}/{fmt.num(hp.value)}
                {doc.combat.hpTemp > 0 && (
                  <span className="text-sky-400">
                    {t("sheet.tempHp", { value: fmt.num(doc.combat.hpTemp) })}
                  </span>
                )}
              </strong>
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-400">{t("sheet.initiative")}</span>
              <strong className="text-zinc-100">{signed(init.value)}</strong>
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-400">{t("sheet.speed")}</span>
              <strong className="text-zinc-100">{fmt.distance(speed(doc, d))}</strong>
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-400">{t("sheet.proficiencyBonus")}</span>
              <strong className="text-amber-400">+{fmt.num(pb)}</strong>
            </li>
          </ul>
          <div className="mt-3 border-t border-zinc-800 pt-3 text-xs text-zinc-600">
            {t("sheet.acBreakdown", {
              parts: ac.parts
                .map((p) => `${p.value >= 0 ? "+" : "−"}${fmt.num(Math.abs(p.value))} ${p.label}`)
                .join(" "),
            })}
          </div>
          {warnings.length > 0 && (
            <ul className="mt-2 flex flex-col gap-1 text-xs text-amber-500/90">
              {warnings.map((w, i) => (
                <li key={i}>⚠ {w}</li>
              ))}
            </ul>
          )}
        </Card>

        <Card title={t("sheet.saves")} accent="orange">
          <ul className="flex flex-col gap-2">
            {ABILITY_KEYS.map((key) => {
              const sv = saveBonus(doc, key, d);
              return (
                <li key={key} className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">
                    {d.ABILITY_NAMES[key]}
                    {doc.saves[key] && (
                      <Badge color="amber">
                        <span className="ml-1">{t("sheet.profShort")}</span>
                      </Badge>
                    )}
                  </span>
                  <strong className="text-amber-400">{signed(sv.value)}</strong>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card title={t("sheet.skills")} accent="sky">
          {condEffects.checksDisadvantage && (
            <p className="mb-3 rounded-md border border-amber-800/60 bg-amber-950/20 px-2.5 py-1.5 text-xs text-amber-400">
              {t("sheet.effects.checksDisadvantage")}
            </p>
          )}
          <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 xl:grid-cols-1">
            {SKILL_KEYS.map((id) => {
              const skill = d.getSkill(id);
              const sk = skillBonus(doc, id, d);
              const sources = [
                bgSkills.includes(id) ? t("sheet.srcBackground") : null,
                classOptions.includes(id) ? t("sheet.srcClass") : null,
                rSkills.includes(id) ? t("sheet.srcRace") : null,
              ].filter(Boolean);
              return (
                <li key={id} className="flex items-center justify-between gap-2">
                  <span
                    className={`text-sm ${doc.skills[id] ? "text-zinc-100" : "text-zinc-500"}`}
                  >
                    {skill.name}
                    <span className="ml-1 text-[10px] text-zinc-600">
                      {d.ABILITY_ABBR[skill.ability]}
                    </span>
                    {doc.skills[id] && sources.length > 0 && (
                      <span className="ml-1 text-[10px] text-amber-600">
                        ({sources[0]})
                      </span>
                    )}
                  </span>
                  <strong
                    className={doc.skills[id] ? "text-amber-400" : "text-zinc-600"}
                  >
                    {signed(sk.value)}
                  </strong>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card title={t("sheet.proficiencies")} accent="cyan">
          <div className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase text-zinc-500">{t("sheet.armors")}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {profArmors.length === 0 ? (
                  <span className="text-zinc-600">{t("sheet.noneF")}</span>
                ) : (
                  profArmors.map((a) => (
                    <Badge key={a.id} color={a.cat ? "blue" : "green"}>
                      {a.name}
                    </Badge>
                  ))
                )}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500">{t("sheet.weapons")}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {profWeapons.length === 0 ? (
                  <span className="text-zinc-600">{t("sheet.noneF")}</span>
                ) : (
                  profWeapons.map((w) => (
                    <Badge key={w.id} color={w.cat ? "blue" : "green"}>
                      {w.name}
                    </Badge>
                  ))
                )}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500">{t("sheet.tools")}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {profs.tools.length === 0 ? (
                  <span className="text-zinc-600">{t("sheet.noneF")}</span>
                ) : (
                  profs.tools.map((tool) => <Badge key={tool}>{tool}</Badge>)
                )}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500">{t("sheet.languages")}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {profs.languages.length === 0 ? (
                  <span className="text-zinc-600">{t("sheet.noneM")}</span>
                ) : (
                  profs.languages.map((l) => <Badge key={l}>{l}</Badge>)
                )}
              </div>
            </div>
          </div>
        </Card>

        <Card
          title={t("sheet.inventory", { count: fmt.num(doc.inventory.length) })}
          accent="emerald"
        >
          {doc.inventory.length === 0 ? (
            <p className="text-sm text-zinc-600">{t("sheet.empty")}</p>
          ) : (
            <>
              <div className="mb-3">
                <p className="text-xs uppercase text-emerald-600">
                  {t("sheet.equipped")}
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {doc.inventory.filter((i) => i.equipped).length === 0 ? (
                    <span className="text-zinc-600 text-sm">{t("sheet.noneM")}</span>
                  ) : (
                    doc.inventory
                      .filter((i) => i.equipped)
                      .map((i) => (
                        <Badge key={i.id} color="green" title={i.description || undefined}>
                          {i.qty > 1 ? `${fmt.num(i.qty)}× ` : ""}
                          {i.name}
                        </Badge>
                      ))
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {doc.inventory
                  .filter((i) => !i.equipped)
                  .map((i) => (
                    <Badge key={i.id} title={i.description || undefined}>
                      {i.qty > 1 ? `${fmt.num(i.qty)}× ` : ""}
                      {i.name}
                    </Badge>
                  ))}
              </div>
            </>
          )}
        </Card>

        <Card
          title={t("sheet.attacks", { count: fmt.num(doc.attacks.length) })}
          accent="rose"
        >
          {doc.attacks.length === 0 ? (
            <p className="text-sm text-zinc-600">{t("sheet.noAttacks")}</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {doc.attacks.map((atk) => {
                const bonus = attackBonus(doc, atk, d);
                const ability = resolveAttackAbility(doc, atk, d);
                const damage = attackDamage(doc, atk, d);
                return (
                  <li
                    key={atk.id}
                    className="rounded-md border border-zinc-800 p-3 transition-colors hover:border-zinc-700"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-zinc-200">
                        {atk.name || t("sheet.noName")}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {atk.magicBonus > 0 && (
                          <Badge color="green">+{fmt.num(atk.magicBonus)}</Badge>
                        )}
                        {atk.range && (
                          <Badge>{fmt.distanceRange(atk.range)}</Badge>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap items-stretch gap-2">
                      <div className="flex min-w-[4.5rem] flex-col items-center rounded-md border border-amber-800/60 bg-amber-950/20 px-2.5 py-1">
                        <span className="text-lg font-bold tabular-nums text-amber-400">
                          {signed(bonus.value)}
                        </span>
                        <span className="text-[10px] uppercase tracking-wide text-zinc-500">
                          {t("sheet.toAttack")}
                        </span>
                      </div>
                      <div className="flex min-w-[4.5rem] flex-col items-center rounded-md border border-zinc-800 px-2.5 py-1">
                        <span className="text-sm font-semibold tabular-nums text-zinc-200">
                          {damage}
                        </span>
                        <span className="text-[10px] uppercase tracking-wide text-zinc-500">
                          {t("sheet.damageLabel")}
                        </span>
                      </div>
                      <div className="ml-auto self-center">
                        <DiceRoller
                          bonus={bonus.value}
                          damageExpr={damage}
                          mode={condEffects.attackRoll}
                        />
                      </div>
                    </div>
                    <p className="mt-1.5 text-xs text-zinc-600">
                      {d.ABILITY_ABBR[ability]} · {bonus.parts.map((p) => p.label).join(" + ")}
                      {atk.properties && ` · ${atk.properties}`}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </Card>

        <Card title={t("sheet.spells")} accent="violet">
          {!hasCaster ? (
            <p className="text-sm text-zinc-600">{t("sheet.noCaster")}</p>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-4 rounded-md border border-zinc-800 px-3 py-1.5 text-center">
                {dc && (
                  <>
                    <div>
                      <p className="text-[10px] uppercase text-zinc-500">
                        {t("sheet.saveDc")}
                      </p>
                      <p className="text-xl font-bold text-zinc-100">
                        {fmt.num(dc.value)}
                      </p>
                    </div>
                    <div className="h-8 w-px bg-zinc-800" />
                  </>
                )}
                {spellAtk && (
                  <>
                    <div>
                      <p className="text-[10px] uppercase text-zinc-500">
                        {t("sheet.spellAttack")}
                      </p>
                      <p className="text-xl font-bold text-amber-400">
                        +{fmt.num(spellAtk.value)}
                      </p>
                    </div>
                    <div className="h-8 w-px bg-zinc-800" />
                  </>
                )}
                <div>
                  <p className="text-[10px] uppercase text-zinc-500">
                    {t("sheet.ability")}
                  </p>
                  <p className="text-xl font-bold text-zinc-100">
                    {castAbility ? d.ABILITY_ABBR[castAbility] : "—"}
                  </p>
                </div>
                </div>
                {spellAtk && (
                  <DiceRoller
                    bonus={spellAtk.value}
                    damageExpr={null}
                    mode={condEffects.attackRoll}
                  />
                )}
              </div>

              {groups.length > 0 && (
                <SpellSlotPips characterId={characterId} groups={groups} used={used} />
              )}

              {spells.length === 0 ? (
                <p className="text-sm text-zinc-600">{t("sheet.noSpellsChosen")}</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {Object.entries(spellsByLevel).map(([lv, list]) => (
                    <div key={lv}>
                      <p className="text-[10px] uppercase tracking-wide text-zinc-500">
                        {Number(lv) === 0
                          ? t("sheet.cantrip")
                          : t("sheet.spellLevel", { level: fmt.num(Number(lv)) })}
                      </p>
                      <ul className="mt-1 flex flex-col gap-1">
                        {list.map((s) => {
                          const prepared = doc.spellcasting.prepared.includes(s.id);
                          const def = d.getSpell(s.id);
                          return (
                            <li
                              key={s.id}
                              className="flex items-center gap-2 rounded-md border border-zinc-800 px-2.5 py-1.5 text-sm transition-colors hover:border-zinc-700"
                            >
                              <span
                                aria-hidden
                                className={prepared ? "text-amber-400" : "text-zinc-600"}
                              >
                                {prepared ? "●" : "○"}
                              </span>
                              <span className={prepared ? "text-zinc-100" : "text-zinc-500"}>
                                {s.name}
                              </span>
                              {def?.ritual && (
                                <Badge color="blue">{t("wizard.spells.ritual")}</Badge>
                              )}
                              {def?.concentration && (
                                <Badge color="amber">
                                  {t("wizard.spells.concentration")}
                                </Badge>
                              )}
                              <span className="ml-auto text-xs text-zinc-600">
                                {def?.school}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </Card>

        <Card title={t("sheet.features")} accent="teal">
          <div className="flex flex-col gap-2">
            {race && (
              <TraitGroup title={race.name} count={race.traits.length}>
                {race.traits.map((trait) => (
                  <Trait
                    key={trait.name}
                    title={trait.name}
                    description={fmt.distanceText(trait.description)}
                  />
                ))}
              </TraitGroup>
            )}
            {subrace && subrace.traits.length > 0 && (
              <TraitGroup title={subrace.name} count={subrace.traits.length}>
                {subrace.traits.map((trait) => (
                  <Trait
                    key={trait.name}
                    title={trait.name}
                    description={fmt.distanceText(trait.description)}
                  />
                ))}
              </TraitGroup>
            )}
            {classes.map(({ cls, level, subclassId }) => {
              const subclass = d.getSubclass(subclassId ?? "");
              const subclassFeatures = (subclass?.features ?? []).filter(
                (f) => f.level <= level,
              );
              const classFeatures = cls.features.filter(
                (trait) => trait.level <= level,
              );
              return (
                <TraitGroup
                  key={cls.id}
                  title={cls.name}
                  count={classFeatures.length + subclassFeatures.length}
                >
                  {classFeatures.map((trait) => (
                    <Trait
                      key={`${trait.level}-${trait.name}`}
                      title={trait.name}
                      description={fmt.distanceText(trait.description)}
                    />
                  ))}
                  {subclass &&
                    (subclassFeatures.length > 0 ? (
                      subclassFeatures.map((trait) => (
                        <Trait
                          key={trait.name}
                          title={`${subclass.name} — ${trait.name}`}
                          description={fmt.distanceText(trait.description)}
                        />
                      ))
                    ) : (
                      <li className="px-1 py-1.5 text-sm text-zinc-500">
                        {t("sheet.subclassLocked", {
                          name: subclass.name,
                          level: fmt.num(subclass.level),
                        })}
                      </li>
                    ))}
                </TraitGroup>
              );
            })}
            {selectedFeats.length > 0 && (
              <TraitGroup title={t("sheet.feats")} count={selectedFeats.length}>
                {selectedFeats.map(({ ref, feat }) => {
                  const ability = d.parseFeatRef(ref).ability;
                  return (
                    <Trait
                      key={ref}
                      title={`${feat.name}${
                        ability
                          ? t("sheet.abilityBonus", {
                              ability: d.ABILITY_ABBR[ability],
                            })
                          : ""
                      }`}
                      description={feat.description}
                    />
                  );
                })}
              </TraitGroup>
            )}
            {bg && (
              <TraitGroup title={bg.name} count={1}>
                <Trait
                  title={bg.feature.name}
                  description={bg.feature.description}
                />
              </TraitGroup>
            )}
          </div>
        </Card>

        <LoreBox
          id={characterId}
          lore={doc.lore}
          className="md:col-span-2 xl:col-span-3"
        />

        <NotesBox
          id={characterId}
          notes={doc.notes}
          className="md:col-span-2 xl:col-span-1"
        />
      </div>
    </div>
  );
}
