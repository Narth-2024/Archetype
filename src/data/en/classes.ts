import type { AbilityKey, SkillId } from "../../domain/types";
import type { TraitDef } from "./races";

export type SpellcasterType = "full" | "half" | "pact" | "none";

export type ClassDef = {
  id: string;
  name: string;
  hitDie: number;
  fixedHp: number;
  unarmoredDefense: "con" | "wis" | null;
  saves: [AbilityKey, AbilityKey];
  skillChoices: { count: number; options: SkillId[] };
  armorProficiencies: string[];
  weaponProficiencies: string[];
  toolProficiencies: string[];
  toolChoices?: { count: number };
  spellcaster: SpellcasterType;
  castingAbility: AbilityKey | null;
  startingEquipment: { catalogId: string | null; name: string; qty: number }[];
  features: TraitDef[];
};

const ALL_SKILLS: SkillId[] = [
  "acrobatics", "animal_handling", "arcana", "athletics", "deception",
  "history", "insight", "intimidation", "investigation", "medicine",
  "nature", "perception", "performance", "persuasion", "religion",
  "sleight_of_hand", "stealth", "survival",
];

export const CLASSES: ClassDef[] = [
  {
    id: "barbaro",
    name: "Barbarian",
    hitDie: 12,
    fixedHp: 7,
    unarmoredDefense: "con",
    saves: ["str", "con"],
    skillChoices: {
      count: 2,
      options: ["animal_handling", "athletics", "intimidation", "nature", "perception", "survival"],
    },
    armorProficiencies: ["leve", "media", "escudo"],
    weaponProficiencies: ["armas_simples", "armas_marciais"],
    toolProficiencies: [],
    spellcaster: "none",
    castingAbility: null,
    startingEquipment: [
      { catalogId: "greataxe", name: "Greataxe", qty: 1 },
      { catalogId: "explorers_pack", name: "Explorer's pack", qty: 1 },
      { catalogId: "javelin", name: "Javelin", qty: 4 },
    ],
    features: [
      { name: "Rage", description: "2 uses per rest: +melee damage and advantage on STR for 1 minute." },
      { name: "Unarmored Defense", description: "While unarmored: AC = 10 + DEX + CON (shield allowed)." },
      { name: "Reckless Attack", description: "You can trade AC for advantage on the attack (once per turn)." },
    ],
  },
  {
    id: "bardo",
    name: "Bard",
    hitDie: 8,
    fixedHp: 5,
    unarmoredDefense: null,
    saves: ["dex", "cha"],
    skillChoices: { count: 3, options: ALL_SKILLS },
    armorProficiencies: ["leve"],
    weaponProficiencies: ["armas_simples", "espada_longa", "rapier", "espada_curta", "besta_leve", "besta_mao"],
    toolProficiencies: [],
    toolChoices: { count: 1 },
    spellcaster: "full",
    castingAbility: "cha",
    startingEquipment: [
      { catalogId: "rapier", name: "Rapier", qty: 1 },
      { catalogId: "dagger", name: "Dagger", qty: 1 },
      { catalogId: "entertainers_pack", name: "Entertainer's pack", qty: 1 },
      { catalogId: "lute", name: "Lute", qty: 1 },
    ],
    features: [
      { name: "Bardic Inspiration", description: "Grants an ally an extra die (1/ short rest)." },
      { name: "Jack of All Trades", description: "Adds your CHA modifier to any skill check you are not proficient in." },
    ],
  },
  {
    id: "clerigo",
    name: "Cleric",
    hitDie: 8,
    fixedHp: 5,
    unarmoredDefense: null,
    saves: ["wis", "cha"],
    skillChoices: {
      count: 2,
      options: ["history", "insight", "medicine", "persuasion", "religion"],
    },
    armorProficiencies: ["leve", "media", "pesada", "escudo"],
    weaponProficiencies: ["armas_simples"],
    toolProficiencies: [],
    spellcaster: "full",
    castingAbility: "wis",
    startingEquipment: [
      { catalogId: "mace", name: "Mace", qty: 1 },
      { catalogId: "scale_mail", name: "Scale mail", qty: 1 },
      { catalogId: "shield", name: "Shield", qty: 1 },
      { catalogId: "holy_symbol", name: "Holy symbol", qty: 1 },
    ],
    features: [
      { name: "Divine Domain", description: "Choose a domain: defines prepared spells and extra abilities." },
      { name: "Channel Divinity", description: "Healing or damage cantrip enhanced according to the domain." },
    ],
  },
  {
    id: "druida",
    name: "Druid",
    hitDie: 8,
    fixedHp: 5,
    unarmoredDefense: null,
    saves: ["int", "wis"],
    skillChoices: {
      count: 2,
      options: ["arcana", "animal_handling", "insight", "medicine", "nature", "perception", "religion", "survival"],
    },
    armorProficiencies: ["leve", "media", "escudo"],
    weaponProficiencies: ["armas_simples"],
    toolProficiencies: ["Druid's tools"],
    spellcaster: "full",
    castingAbility: "wis",
    startingEquipment: [
      { catalogId: "quarterstaff", name: "Quarterstaff", qty: 1 },
      { catalogId: "leather", name: "Leather", qty: 1 },
      { catalogId: "druidic_focus", name: "Druidic focus", qty: 1 },
    ],
    features: [
      { name: "Druidic Language", description: "You can speak and write the secret druidic language." },
      { name: "Wild Shape", description: "Transform into a beast (2 uses/ short rest)." },
    ],
  },
  {
    id: "guerreiro",
    name: "Fighter",
    hitDie: 10,
    fixedHp: 6,
    unarmoredDefense: null,
    saves: ["str", "con"],
    skillChoices: {
      count: 2,
      options: ["acrobatics", "animal_handling", "athletics", "history", "intimidation", "perception", "survival"],
    },
    armorProficiencies: ["leve", "media", "pesada", "escudo"],
    weaponProficiencies: ["armas_simples", "armas_marciais"],
    toolProficiencies: [],
    spellcaster: "none",
    castingAbility: null,
    startingEquipment: [
      { catalogId: "chain_mail", name: "Chain mail", qty: 1 },
      { catalogId: "longsword", name: "Longsword", qty: 1 },
      { catalogId: "shield", name: "Shield", qty: 1 },
      { catalogId: "longbow", name: "Longbow", qty: 1 },
      { catalogId: "arrows", name: "Arrows", qty: 20 },
    ],
    features: [
      { name: "Fighting Style", description: "Choose a style (protection, dueling, double strike...)." },
      { name: "Second Wind", description: "Bonus action to recover HP or gain advantage (1/ short rest)." },
      { name: "Extra Attack", description: "From 5th level, you make two attacks on the Attack action." },
    ],
  },
  {
    id: "monge",
    name: "Monk",
    hitDie: 8,
    fixedHp: 5,
    unarmoredDefense: "wis",
    saves: ["str", "dex"],
    skillChoices: {
      count: 2,
      options: ["acrobatics", "athletics", "history", "insight", "religion", "stealth"],
    },
    armorProficiencies: [],
    weaponProficiencies: ["armas_simples", "espada_curta"],
    toolProficiencies: [],
    toolChoices: { count: 1 },
    spellcaster: "none",
    castingAbility: null,
    startingEquipment: [
      { catalogId: "shortsword", name: "Shortsword", qty: 1 },
      { catalogId: "explorers_pack", name: "Explorer's pack", qty: 1 },
      { catalogId: "darts", name: "Darts", qty: 10 },
    ],
    features: [
      { name: "Unarmored Defense", description: "Without armor or shield: AC = 10 + DEX + WIS." },
      { name: "Martial Arts", description: "Uses DEX for attacks and damage with simple weapons/shortswords." },
      { name: "Ki Points", description: "Ki points equal to your level for special actions." },
    ],
  },
  {
    id: "paladino",
    name: "Paladin",
    hitDie: 10,
    fixedHp: 6,
    unarmoredDefense: null,
    saves: ["wis", "cha"],
    skillChoices: {
      count: 2,
      options: ["athletics", "insight", "intimidation", "medicine", "persuasion", "religion"],
    },
    armorProficiencies: ["leve", "media", "pesada", "escudo"],
    weaponProficiencies: ["armas_simples", "armas_marciais"],
    toolProficiencies: [],
    spellcaster: "half",
    castingAbility: "cha",
    startingEquipment: [
      { catalogId: "longsword", name: "Longsword", qty: 1 },
      { catalogId: "chain_mail", name: "Chain mail", qty: 1 },
      { catalogId: "shield", name: "Shield", qty: 1 },
      { catalogId: "holy_symbol", name: "Holy symbol", qty: 1 },
    ],
    features: [
      { name: "Sacred Devotion", description: "An oath that defines your code and divine abilities." },
      { name: "Divine Sense", description: "Senses celestial, infernal or fey creatures (1+CHA/ rest)." },
      { name: "Lay on Hands", description: "Touch heals 5 HP × level (separate pool)." },
    ],
  },
  {
    id: "patrulheiro",
    name: "Ranger",
    hitDie: 10,
    fixedHp: 6,
    unarmoredDefense: null,
    saves: ["str", "dex"],
    skillChoices: {
      count: 3,
      options: ["animal_handling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"],
    },
    armorProficiencies: ["leve", "media", "escudo"],
    weaponProficiencies: ["armas_simples", "armas_marciais"],
    toolProficiencies: [],
    spellcaster: "half",
    castingAbility: "wis",
    startingEquipment: [
      { catalogId: "shortsword", name: "Shortsword", qty: 1 },
      { catalogId: "longbow", name: "Longbow", qty: 1 },
      { catalogId: "arrows", name: "Arrows", qty: 20 },
      { catalogId: "explorers_pack", name: "Explorer's pack", qty: 1 },
    ],
    features: [
      { name: "Favored Enemy", description: "Advantage when tracking and locating your favored enemy." },
      { name: "Natural Explorer", description: "Choose a terrain: you cannot be tracked through it." },
    ],
  },
  {
    id: "ladino",
    name: "Rogue",
    hitDie: 8,
    fixedHp: 5,
    unarmoredDefense: null,
    saves: ["dex", "int"],
    skillChoices: {
      count: 4,
      options: [
        "acrobatics", "athletics", "deception", "insight", "intimidation",
        "investigation", "perception", "performance", "persuasion",
        "sleight_of_hand", "stealth",
      ],
    },
    armorProficiencies: ["leve"],
    weaponProficiencies: ["armas_simples", "espada_longa", "rapier", "espada_curta", "besta_leve", "besta_mao"],
    toolProficiencies: ["Thieves' tools"],
    spellcaster: "none",
    castingAbility: null,
    startingEquipment: [
      { catalogId: "shortsword", name: "Shortsword", qty: 1 },
      { catalogId: "shortbow", name: "Shortbow", qty: 1 },
      { catalogId: "arrows", name: "Arrows", qty: 20 },
      { catalogId: "thieves_tools", name: "Thieves' tools", qty: 1 },
      { catalogId: "thieves_pack", name: "Burglar's pack", qty: 1 },
    ],
    features: [
      { name: "Lucky Strike", description: "Once per rest: an attack made with disadvantage becomes a critical." },
      { name: "Opportune Dodge", description: "Reaction to gain disadvantage on attacks made against you." },
      { name: "Sneak Attack", description: "+1d6 damage against unaware targets or allies within 5 feet." },
    ],
  },
  {
    id: "bruxo",
    name: "Warlock",
    hitDie: 8,
    fixedHp: 5,
    unarmoredDefense: null,
    saves: ["wis", "cha"],
    skillChoices: {
      count: 2,
      options: ["arcana", "deception", "history", "intimidation", "investigation", "nature", "religion"],
    },
    armorProficiencies: ["leve"],
    weaponProficiencies: ["armas_simples"],
    toolProficiencies: [],
    spellcaster: "pact",
    castingAbility: "cha",
    startingEquipment: [
      { catalogId: "quarterstaff", name: "Quarterstaff", qty: 1 },
      { catalogId: "light_crossbow", name: "Light crossbow", qty: 1 },
      { catalogId: "crossbow_bolts", name: "Crossbow bolts", qty: 20 },
      { catalogId: "scholars_pack", name: "Scholar's pack", qty: 1 },
    ],
    features: [
      { name: "Arcane Patron", description: "A powerful being grants powers in exchange for a favor." },
      { name: "Magical Pact", description: "Choose: Grimoire (written spells), Tome (book of rituals) or Weapon." },
      { name: "Pact Recovery", description: "Recovers pact magic slots with 1 minute of meditation." },
    ],
  },
  {
    id: "feiticeiro",
    name: "Sorcerer",
    hitDie: 6,
    fixedHp: 4,
    unarmoredDefense: null,
    saves: ["con", "cha"],
    skillChoices: {
      count: 2,
      options: ["arcana", "deception", "insight", "intimidation", "persuasion", "religion"],
    },
    armorProficiencies: [],
    weaponProficiencies: ["besta_leve", "besta_mao", "dardo", "funda", "cajado"],
    toolProficiencies: [],
    spellcaster: "full",
    castingAbility: "cha",
    startingEquipment: [
      { catalogId: "light_crossbow", name: "Light crossbow", qty: 1 },
      { catalogId: "crossbow_bolts", name: "Crossbow bolts", qty: 20 },
      { catalogId: "component_pouch", name: "Component pouch", qty: 1 },
      { catalogId: "explorers_pack", name: "Explorer's pack", qty: 1 },
    ],
    features: [
      { name: "Magical Origin", description: "Source of the power: dragon, fey lineage or another." },
      { name: "Sorcerous Recovery", description: "Recovers a spell slot by spending a bonus action (1/ rest)." },
    ],
  },
  {
    id: "mago",
    name: "Wizard",
    hitDie: 6,
    fixedHp: 4,
    unarmoredDefense: null,
    saves: ["int", "wis"],
    skillChoices: {
      count: 2,
      options: ["arcana", "history", "insight", "investigation", "religion", "perception"],
    },
    armorProficiencies: [],
    weaponProficiencies: ["besta_leve", "besta_mao", "dardo", "funda", "cajado"],
    toolProficiencies: [],
    spellcaster: "full",
    castingAbility: "int",
    startingEquipment: [
      { catalogId: "quarterstaff", name: "Quarterstaff", qty: 1 },
      { catalogId: "component_pouch", name: "Component pouch", qty: 1 },
      { catalogId: "spellbook", name: "Spellbook", qty: 1 },
    ],
    features: [
      { name: "Arcane Recovery", description: "Recovers half of the spell slot levels spent per long rest." },
      { name: "Ritual Casting", description: "Can cast spells with the ritual tag without spending a slot." },
    ],
  },
];

export function getClass(id: string): ClassDef | undefined {
  return CLASSES.find((c) => c.id === id);
}

export const CLASS_ABILITY_PRIORITY: Record<
  string,
  { primary: AbilityKey[]; secondary: AbilityKey[] }
> = {
  barbaro: { primary: ["str"], secondary: ["con", "dex"] },
  bardo: { primary: ["cha"], secondary: ["dex", "con"] },
  clerigo: { primary: ["wis"], secondary: ["con"] },
  druida: { primary: ["wis"], secondary: ["con", "dex"] },
  guerreiro: { primary: ["str", "dex"], secondary: ["con"] },
  monge: { primary: ["dex"], secondary: ["wis", "con"] },
  paladino: { primary: ["str"], secondary: ["cha", "con"] },
  patrulheiro: { primary: ["dex"], secondary: ["wis", "con"] },
  ladino: { primary: ["dex"], secondary: ["con", "int"] },
  bruxo: { primary: ["cha"], secondary: ["con", "dex"] },
  feiticeiro: { primary: ["cha"], secondary: ["con", "dex"] },
  mago: { primary: ["int"], secondary: ["dex", "con"] },
};

export const CLASS_PREREQUISITE: Record<
  string,
  { anyOf?: AbilityKey[]; allOf?: AbilityKey[] }
> = {
  barbaro: { anyOf: ["str"] },
  bardo: { anyOf: ["cha"] },
  clerigo: { anyOf: ["wis"] },
  druida: { anyOf: ["wis"] },
  guerreiro: { anyOf: ["str", "dex"] },
  monge: { allOf: ["dex", "wis"] },
  paladino: { allOf: ["str", "wis"] },
  patrulheiro: { allOf: ["dex", "wis"] },
  ladino: { anyOf: ["dex"] },
  bruxo: { anyOf: ["cha"] },
  feiticeiro: { anyOf: ["cha"] },
  mago: { anyOf: ["int"] },
};

export function classAbilityPriority(classId: string) {
  return (
    CLASS_ABILITY_PRIORITY[classId] ?? { primary: ["str"], secondary: ["con"] }
  );
}

export function classPrerequisite(classId: string) {
  return CLASS_PREREQUISITE[classId];
}
