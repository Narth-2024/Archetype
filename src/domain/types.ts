export const ABILITY_KEYS = ["str", "dex", "con", "int", "wis", "cha"] as const;
export type AbilityKey = (typeof ABILITY_KEYS)[number];

export const ABILITY_NAMES: Record<AbilityKey, string> = {
  str: "Força",
  dex: "Destreza",
  con: "Constituição",
  int: "Inteligência",
  wis: "Sabedoria",
  cha: "Carisma",
};

export const ABILITY_ABBR: Record<AbilityKey, string> = {
  str: "FOR",
  dex: "DES",
  con: "CON",
  int: "INT",
  wis: "SAB",
  cha: "CAR",
};

export const SKILL_KEYS = [
  "acrobatics",
  "animal_handling",
  "arcana",
  "athletics",
  "deception",
  "history",
  "insight",
  "intimidation",
  "investigation",
  "medicine",
  "nature",
  "perception",
  "performance",
  "persuasion",
  "religion",
  "sleight_of_hand",
  "stealth",
  "survival",
] as const;
export type SkillId = (typeof SKILL_KEYS)[number];

export type ClassEntry = { classId: string; level: number; subclassId?: string };

export type AbilityMode = "pontos" | "array" | "livre";

export type InventoryItem = {
  id: string;
  name: string;
  qty: number;
  weight: number | null;
  category: "arma" | "armadura" | "escudo" | "ferramenta" | "outro";
  catalogId: string | null;
  equipped: boolean;
  description: string;
};

export type AttackKind = "arma" | "magico";

export type Attack = {
  id: string;
  name: string;
  kind: AttackKind;
  weaponId: string | null;
  ability: AbilityKey | "auto";
  magicBonus: number;
  proficient: boolean;
  damageDice: string | null;
  damageType: string;
  range: string;
  properties: string;
  description: string;
};

export type CharacterDoc = {
  schemaVersion: 1 | 2 | 3;
  step: number;
  complete: boolean;
  identity: {
    name: string;
    player: string;
    raceId: string;
    subraceId: string;
    classes: ClassEntry[];
    backgroundId: string;
    alignment: string;
    xp: number;
    raceBonusChoices: AbilityKey[];
    abilityMode: AbilityMode;
  };
  abilities: Record<AbilityKey, number>;
  saves: Record<AbilityKey, boolean>;
  skills: Record<SkillId, boolean>;
  proficiencies: {
    armors: string[];
    weapons: string[];
    tools: string[];
    languages: string[];
  };
  feats: string[];
  inventory: InventoryItem[];
  attacks: Attack[];
  spellcasting: {
    known: string[];
    prepared: string[];
    slotsUsed: Record<string, number>;
  };
  combat: {
    hpCurrent: number;
    hpTemp: number;
  };
  notes: string;
  photo?: string;
  lore?: string;
};

export type CharacterSummary = {
  id: string;
  name: string;
  level: number;
  classId: string;
  raceId: string;
  complete: boolean;
  updatedAt: string;
};
