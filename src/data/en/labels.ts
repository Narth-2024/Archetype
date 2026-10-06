export const ABILITY_NAMES: Record<string, string> = {
  str: "Strength",
  dex: "Dexterity",
  con: "Constitution",
  int: "Intelligence",
  wis: "Wisdom",
  cha: "Charisma",
};

export const ABILITY_ABBR: Record<string, string> = {
  str: "STR",
  dex: "DEX",
  con: "CON",
  int: "INT",
  wis: "WIS",
  cha: "CHA",
};

export const LABELS = {
  proficiency: "Proficiency",
  abilityMod: "{ab} mod",
  unarmored: "Unarmored Defense",
  noArmor: "No armor",
  shield: "Shield",
  base: "Base",
  magicBonus: "Magic bonus",
  feats: "Feats",
  hpLevel1: "{name} level 1: d{die} {sign} {con} CON",
  hpFixedOne: "{name}: {n} level × fixed {hp} {sign} {con} CON (min. 1)",
  hpFixedMany: "{name}: {n} levels × fixed {hp} {sign} {con} CON (min. 1)",
  armorStrReq:
    "{name} requires STR {req}: you have disadvantage on STR attacks and checks.",
  armorStealth: "{name}: disadvantage on Stealth.",
  thrown: "Thrown",
  choiceFragment: "your choice",
  suggestion: "Balanced{classes}: prioritizes {priorities}.",
  suggestionNone: "Balanced: prioritizes {priorities}.",
};
