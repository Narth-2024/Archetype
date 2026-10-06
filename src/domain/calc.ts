import type { AbilityKey, Attack, CharacterDoc, SkillId } from "./types";
import { ABILITY_KEYS, SKILL_KEYS } from "./types";
import { PT_BUNDLE } from "../data";
import type { DataBundle, SlotGroup } from "../data";

function fill(template: string, args: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) =>
    k in args ? String(args[k]) : m,
  );
}

function amod(d: DataBundle, key: AbilityKey): string {
  return fill(d.LABELS.abilityMod, { ab: d.ABILITY_ABBR[key] ?? key.toUpperCase() });
}

export type DerivedPart = { label: string; value: number };
export type Derived<T = number> = { value: T; parts: DerivedPart[] };

export function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function proficiencyBonus(level: number): number {
  const lvl = Math.min(20, Math.max(1, level));
  return 2 + Math.floor((lvl - 1) / 4);
}

export function totalLevel(c: CharacterDoc): number {
  const sum = c.identity.classes.reduce((acc, e) => acc + e.level, 0);
  return sum > 0 ? sum : 1;
}

export function pbOf(c: CharacterDoc): number {
  return proficiencyBonus(totalLevel(c));
}

export function classEntries(c: CharacterDoc) {
  return c.identity.classes.filter((e) => e.classId && e.level > 0);
}

export function primaryClass(c: CharacterDoc, d: DataBundle = PT_BUNDLE) {
  const entries = classEntries(c);
  if (entries.length === 0) return undefined;
  let best = entries[0];
  for (const e of entries) if (e.level > best.level) best = e;
  return d.getClass(best.classId);
}

export function racialBonus(c: CharacterDoc, key: AbilityKey, d: DataBundle = PT_BUNDLE): number {
  const race = d.getRace(c.identity.raceId);
  if (!race) return 0;
  let bonus = race.abilityBonus.fixed[key] ?? 0;
  if (
    race.abilityBonus.flexible &&
    c.identity.raceBonusChoices.includes(key)
  ) {
    bonus += race.abilityBonus.flexible.amount;
  }
  const subrace = d.getSubrace(c.identity.subraceId);
  bonus += subrace?.abilityBonus?.[key] ?? 0;
  return bonus;
}

export function featBonus(c: CharacterDoc, key: AbilityKey, d: DataBundle = PT_BUNDLE): number {
  let total = 0;
  for (const ref of c.feats) {
    const parsed = d.parseFeatRef(ref);
    const feat = d.FEATS.find((f) => f.id === parsed.featId);
    if (!feat) continue;
    total += d.featAbilityBonus(feat, parsed)[key] ?? 0;
  }
  return total;
}

export function abilityScore(c: CharacterDoc, key: AbilityKey, d: DataBundle = PT_BUNDLE): number {
  return c.abilities[key] + racialBonus(c, key, d) + featBonus(c, key, d);
}

export function scoreMod(c: CharacterDoc, key: AbilityKey, d: DataBundle = PT_BUNDLE): number {
  return abilityMod(abilityScore(c, key, d));
}

export function saveBonus(c: CharacterDoc, key: AbilityKey, d: DataBundle = PT_BUNDLE): Derived {
  const mod = scoreMod(c, key, d);
  const pb = pbOf(c);
  const prof = c.saves[key];
  return {
    value: mod + (prof ? pb : 0),
    parts: [
      { label: amod(d, key), value: mod },
      ...(prof ? [{ label: d.LABELS.proficiency, value: pb }] : []),
    ],
  };
}

export function skillBonus(c: CharacterDoc, skillId: SkillId, d: DataBundle = PT_BUNDLE): Derived {
  const skill = d.getSkill(skillId);
  const mod = scoreMod(c, skill.ability, d);
  const pb = pbOf(c);
  const prof = c.skills[skillId];
  return {
    value: mod + (prof ? pb : 0),
    parts: [
      { label: amod(d, skill.ability), value: mod },
      ...(prof ? [{ label: d.LABELS.proficiency, value: pb }] : []),
    ],
  };
}

function equippedItem(c: CharacterDoc, category: "armadura" | "escudo") {
  return c.inventory.find(
    (i) => i.equipped && i.category === category && i.catalogId,
  );
}

export function armorClass(c: CharacterDoc, d: DataBundle = PT_BUNDLE): Derived {
  const dexMod = scoreMod(c, "dex", d);
  const conMod = scoreMod(c, "con", d);
  const wisMod = scoreMod(c, "wis", d);
  const shield = equippedItem(c, "escudo");
  const armorItem = equippedItem(c, "armadura");
  const armor = armorItem ? d.getArmor(armorItem.catalogId!) : undefined;
  const unarmored = classEntries(c)
    .map((e) => d.getClass(e.classId))
    .find((cls) => cls?.unarmoredDefense);

  if (armor && armor.category !== "escudo") {
    const parts: DerivedPart[] = [{ label: armor.name, value: armor.baseAc }];
    let dexBonus = 0;
    if (armor.dex === "full") dexBonus = dexMod;
    if (armor.dex === "cap2") dexBonus = Math.min(dexMod, 2);
    if (armor.dex !== "none" && dexBonus !== 0) {
      parts.push({ label: amod(d, "dex"), value: dexBonus });
    }
    if (shield) parts.push({ label: d.LABELS.shield, value: 2 });
    return { value: armor.baseAc + dexBonus + (shield ? 2 : 0), parts };
  }

  if (unarmored?.unarmoredDefense === "con") {
    const parts: DerivedPart[] = [
      { label: d.LABELS.unarmored, value: 10 },
      { label: amod(d, "dex"), value: dexMod },
      { label: amod(d, "con"), value: conMod },
    ];
    if (shield) parts.push({ label: d.LABELS.shield, value: 2 });
    return { value: 10 + dexMod + conMod + (shield ? 2 : 0), parts };
  }

  if (unarmored?.unarmoredDefense === "wis") {
    const parts: DerivedPart[] = [
      { label: d.LABELS.unarmored, value: 10 },
      { label: amod(d, "dex"), value: dexMod },
      { label: amod(d, "wis"), value: wisMod },
    ];
    return { value: 10 + dexMod + wisMod, parts };
  }

  const parts: DerivedPart[] = [
    { label: d.LABELS.noArmor, value: 10 },
    { label: amod(d, "dex"), value: dexMod },
  ];
  if (shield) parts.push({ label: d.LABELS.shield, value: 2 });
  return { value: 10 + dexMod + (shield ? 2 : 0), parts };
}

export function armorWarnings(c: CharacterDoc, d: DataBundle = PT_BUNDLE): string[] {
  const warnings: string[] = [];
  const armorItem = equippedItem(c, "armadura");
  const armor = armorItem ? d.getArmor(armorItem.catalogId!) : undefined;
  if (armor?.strengthReq && scoreMod(c, "str", d) + 10 < armor.strengthReq) {
    warnings.push(
      fill(d.LABELS.armorStrReq, { name: armor.name, req: armor.strengthReq }),
    );
  }
  if (armor?.stealthDisadvantage) {
    warnings.push(fill(d.LABELS.armorStealth, { name: armor.name }));
  }
  return warnings;
}

export function initiative(c: CharacterDoc, d: DataBundle = PT_BUNDLE): Derived {
  const dexMod = scoreMod(c, "dex", d);
  return { value: dexMod, parts: [{ label: amod(d, "dex"), value: dexMod }] };
}

export function speed(c: CharacterDoc, d: DataBundle = PT_BUNDLE): number {
  const subrace = d.getSubrace(c.identity.subraceId);
  if (subrace?.speed) return subrace.speed;
  return d.getRace(c.identity.raceId)?.speed ?? 30;
}

export function maxHp(c: CharacterDoc, d: DataBundle = PT_BUNDLE): Derived {
  const entries = classEntries(c);
  const conMod = scoreMod(c, "con", d);
  const conSign = conMod >= 0 ? "+" : "-";

  if (entries.length === 0) {
    return { value: Math.max(1, conMod), parts: [{ label: amod(d, "con"), value: conMod }] };
  }

  const first = entries[0];
  const firstCls = d.getClass(first.classId);
  const lvl1 = firstCls ? Math.max(1, firstCls.hitDie + conMod) : Math.max(1, conMod);
  const parts: DerivedPart[] = firstCls
    ? [
        {
          label: fill(d.LABELS.hpLevel1, {
            name: firstCls.name,
            die: firstCls.hitDie,
            sign: conSign,
            con: Math.abs(conMod),
          }),
          value: lvl1,
        },
      ]
    : [{ label: amod(d, "con"), value: conMod }];

  let restTotal = 0;
  entries.forEach((e, idx) => {
    const cls = d.getClass(e.classId);
    if (!cls) return;
    const extraLevels = idx === 0 ? e.level - 1 : e.level;
    if (extraLevels <= 0) return;
    const perLevel = Math.max(1, cls.fixedHp + conMod);
    restTotal += extraLevels * perLevel;
    parts.push({
      label: fill(extraLevels > 1 ? d.LABELS.hpFixedMany : d.LABELS.hpFixedOne, {
        name: cls.name,
        n: extraLevels,
        hp: cls.fixedHp,
        sign: conSign,
        con: Math.abs(conMod),
      }),
      value: extraLevels * perLevel,
    });
  });

  const total = lvl1 + restTotal + featHpBonus(c, d);
  if (featHpBonus(c, d) !== 0) {
    parts.push({ label: d.LABELS.feats, value: featHpBonus(c, d) });
  }
  return { value: total, parts };
}

function featHpBonus(c: CharacterDoc, d: DataBundle): number {
  const level = totalLevel(c);
  let bonus = 0;
  for (const ref of c.feats) {
    const feat = d.FEATS.find((f) => f.id === d.parseFeatRef(ref).featId);
    if (feat?.hpPerLevel) bonus += feat.hpPerLevel * level;
  }
  return bonus;
}

export function hasSpellcasting(c: CharacterDoc, d: DataBundle = PT_BUNDLE): boolean {
  for (const e of classEntries(c)) {
    const cls = d.getClass(e.classId);
    if (cls?.castingAbility) return true;
    if (e.classId === "patrulheiro" && e.level >= 2) return true;
    if (e.classId === "guerreiro" && e.subclassId === "cavaleiro_arcano") return true;
    if (e.classId === "ladino" && e.subclassId === "truque_arcano") return true;
  }
  return false;
}

function defaultAttackAbility(c: CharacterDoc, atk: Attack, d: DataBundle): AbilityKey {
  if (atk.kind === "magico") {
    return spellAbility(c, d) ?? "int";
  }
  const weapon = atk.weaponId ? d.getWeapon(atk.weaponId) : undefined;
  if (weapon?.finesse) {
    return scoreMod(c, "dex", d) >= scoreMod(c, "str", d) ? "dex" : "str";
  }
  if (weapon?.kind === "distancia") return "dex";
  if (weapon?.properties.includes(d.LABELS.thrown)) {
    return scoreMod(c, "dex", d) >= scoreMod(c, "str", d) ? "dex" : "str";
  }
  return "str";
}

export function resolveAttackAbility(
  c: CharacterDoc,
  atk: Attack,
  d: DataBundle = PT_BUNDLE,
): AbilityKey {
  return atk.ability === "auto" ? defaultAttackAbility(c, atk, d) : atk.ability;
}

function hasWeaponProficiency(c: CharacterDoc, weaponId: string, d: DataBundle): boolean {
  const weapon = d.getWeapon(weaponId);
  if (!weapon) return false;
  if (c.proficiencies.weapons.includes(weaponId)) return true;
  const group =
    weapon.category === "simples" ? "armas_simples" : "armas_marciais";
  return c.proficiencies.weapons.includes(group);
}

export function attackBonus(c: CharacterDoc, atk: Attack, d: DataBundle = PT_BUNDLE): Derived {
  const ability = resolveAttackAbility(c, atk, d);
  const mod = scoreMod(c, ability, d);
  const pb = pbOf(c);
  const prof =
    atk.kind === "magico" ? true : atk.proficient || (atk.weaponId ? hasWeaponProficiency(c, atk.weaponId, d) : false);
  const parts: DerivedPart[] = [{ label: amod(d, ability), value: mod }];
  if (prof) parts.push({ label: d.LABELS.proficiency, value: pb });
  if (atk.magicBonus !== 0)
    parts.push({ label: d.LABELS.magicBonus, value: atk.magicBonus });
  return { value: mod + (prof ? pb : 0) + atk.magicBonus, parts };
}

export function attackDamage(c: CharacterDoc, atk: Attack, d: DataBundle = PT_BUNDLE): string {
  const ability = resolveAttackAbility(c, atk, d);
  const mod = scoreMod(c, ability, d);
  const weapon = atk.weaponId ? d.getWeapon(atk.weaponId) : undefined;
  const dice = atk.damageDice ?? weapon?.damage ?? "1d4";
  const sign = mod >= 0 ? "+" : "-";
  return `${dice} ${sign} ${Math.abs(mod)} ${atk.damageType || weapon?.damageType || ""}`.trim();
}

export function spellAbility(c: CharacterDoc, d: DataBundle = PT_BUNDLE): AbilityKey | null {
  const casters = classEntries(c)
    .map((e) => ({ entry: e, cls: d.getClass(e.classId) }))
    .filter((x) => x.cls?.castingAbility);
  if (casters.length === 0) return null;
  let best = casters[0];
  for (const x of casters) if (x.entry.level > best.entry.level) best = x;
  return best.cls!.castingAbility;
}

export function spellSaveDc(c: CharacterDoc, d: DataBundle = PT_BUNDLE): Derived | null {
  const ability = spellAbility(c, d);
  if (!ability) return null;
  const pb = pbOf(c);
  const mod = scoreMod(c, ability, d);
  return {
    value: 8 + pb + mod,
    parts: [
      { label: d.LABELS.base, value: 8 },
      { label: d.LABELS.proficiency, value: pb },
      { label: amod(d, ability), value: mod },
    ],
  };
}

export function spellAttackBonus(c: CharacterDoc, d: DataBundle = PT_BUNDLE): Derived | null {
  const ability = spellAbility(c, d);
  if (!ability) return null;
  const pb = pbOf(c);
  const mod = scoreMod(c, ability, d);
  return {
    value: pb + mod,
    parts: [
      { label: d.LABELS.proficiency, value: pb },
      { label: amod(d, ability), value: mod },
    ],
  };
}

export function spellSlots(c: CharacterDoc, d: DataBundle = PT_BUNDLE): {
  groups: SlotGroup[];
  used: Record<string, number>;
} {
  let fullLevel = 0;
  let pactLevel = 0;
  let hasFull = false;
  for (const e of classEntries(c)) {
    const cls = d.getClass(e.classId);
    if (!cls) continue;
    if (cls.spellcaster === "full") {
      fullLevel += e.level;
      hasFull = true;
    } else if (cls.spellcaster === "half") {
      fullLevel += Math.floor(e.level / 2);
      hasFull = true;
    } else if (cls.spellcaster === "pact") {
      pactLevel += e.level;
    }
  }
  const groups: SlotGroup[] = [];
  if (hasFull && fullLevel >= 1) groups.push(...d.slotsForLevel("full", fullLevel));
  if (pactLevel >= 1)
    groups.push(
      ...d.slotsForLevel("pact", pactLevel).map((g) => ({ ...g, source: "pact" as const })),
    );
  return { groups, used: c.spellcasting.slotsUsed };
}

export function classSkillPools(c: CharacterDoc, d: DataBundle = PT_BUNDLE): {
  classId: string;
  name: string;
  options: SkillId[];
  count: number;
}[] {
  return classEntries(c)
    .map((e) => d.getClass(e.classId))
    .filter((cls): cls is NonNullable<typeof cls> => Boolean(cls))
    .map((cls) => ({
      classId: cls.id,
      name: cls.name,
      options: cls.skillChoices.options,
      count: cls.skillChoices.count,
    }));
}

export function classSaveKeys(c: CharacterDoc, d: DataBundle = PT_BUNDLE): AbilityKey[] {
  const keys = new Set<AbilityKey>();
  for (const e of classEntries(c)) {
    const cls = d.getClass(e.classId);
    if (!cls) continue;
    for (const s of cls.saves) keys.add(s);
  }
  return [...keys];
}

export function backgroundSkills(c: CharacterDoc, d: DataBundle = PT_BUNDLE): SkillId[] {
  const bg = d.getBackground(c.identity.backgroundId);
  if (!bg) return [];
  return bg.skillChoices.options.slice(0, bg.skillChoices.count);
}

export function raceSkills(c: CharacterDoc, d: DataBundle = PT_BUNDLE): SkillId[] {
  const base = d.getRace(c.identity.raceId)?.proficiencies.skills ?? [];
  const subrace = d.getSubrace(c.identity.subraceId)?.proficiencies?.skills ?? [];
  return [...new Set([...base, ...subrace])];
}

export function raceSkillPool(c: CharacterDoc, d: DataBundle = PT_BUNDLE): {
  options: SkillId[];
  count: number;
} {
  const race = d.getRace(c.identity.raceId);
  if (!race?.skillChoices) return { options: [], count: 0 };
  return {
    options:
      race.skillChoices.options === "any" ? [...SKILL_KEYS] : race.skillChoices.options,
    count: race.skillChoices.count,
  };
}

export function resolveProficiencies(c: CharacterDoc, d: DataBundle = PT_BUNDLE): {
  armors: string[];
  weapons: string[];
  tools: string[];
  languages: string[];
} {
  const race = d.getRace(c.identity.raceId);
  const subrace = d.getSubrace(c.identity.subraceId);
  const bg = d.getBackground(c.identity.backgroundId);
  const classes = classEntries(c)
    .map((e) => d.getClass(e.classId))
    .filter((cls): cls is NonNullable<typeof cls> => Boolean(cls));
  const union = (lists: string[][]) => [...new Set(lists.flat())];
  return {
    armors: union([
      c.proficiencies.armors,
      ...classes.map((cls) => cls.armorProficiencies),
      subrace?.proficiencies?.armors ?? [],
    ]),
    weapons: union([
      c.proficiencies.weapons,
      ...classes.map((cls) => cls.weaponProficiencies),
      race?.proficiencies.weapons ?? [],
      subrace?.proficiencies?.weapons ?? [],
    ]),
    tools: union([
      c.proficiencies.tools,
      ...classes.map((cls) => cls.toolProficiencies),
      bg?.toolProficiencies ?? [],
    ]),
    languages: union([
      c.proficiencies.languages,
      race?.languages.filter((l) => !l.includes(d.LABELS.choiceFragment)) ?? [],
    ]),
  };
}

export function allAbilitiesWithBreakdown(c: CharacterDoc, d: DataBundle = PT_BUNDLE) {
  return ABILITY_KEYS.map((key) => {
    const base = c.abilities[key];
    const race = racialBonus(c, key, d);
    const feats = featBonus(c, key, d);
    return {
      key,
      base,
      race,
      feats,
      total: base + race + feats,
      mod: abilityMod(base + race + feats),
    };
  });
}

export function darkvision(c: CharacterDoc, d: DataBundle = PT_BUNDLE): number {
  const subrace = d.getSubrace(c.identity.subraceId);
  if (subrace && subrace.darkvision !== undefined) return subrace.darkvision ?? 0;
  return d.getRace(c.identity.raceId)?.darkvision ?? 0;
}

export function knownSpells(c: CharacterDoc, d: DataBundle = PT_BUNDLE) {
  return c.spellcasting.known
    .map((id) => d.getSpell(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
}
