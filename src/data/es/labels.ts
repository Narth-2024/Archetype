export const ABILITY_NAMES: Record<string, string> = {
  str: "Fuerza",
  dex: "Destreza",
  con: "Constitución",
  int: "Inteligencia",
  wis: "Sabiduría",
  cha: "Carisma",
};

export const ABILITY_ABBR: Record<string, string> = {
  str: "FUER",
  dex: "DES",
  con: "CON",
  int: "INT",
  wis: "SAB",
  cha: "CAR",
};

export const LABELS = {
  proficiency: "Competencia",
  abilityMod: "mod. {ab}",
  unarmored: "Defensa sin Armadura",
  noArmor: "Sin armadura",
  shield: "Escudo",
  base: "Base",
  magicBonus: "Bónus mágico",
  feats: "Dotes",
  hpLevel1: "{name} nivel 1: d{die} {sign} {con} CON",
  hpFixedOne: "{name}: {n} nivel × fijo {hp} {sign} {con} CON (mín. 1)",
  hpFixedMany: "{name}: {n} niveles × fijo {hp} {sign} {con} CON (mín. 1)",
  armorStrReq:
    "{name} requiere FUER {req}: tienes desventaja en ataques y pruebas de FUER.",
  armorStealth: "{name}: desventaja en Sigilo.",
  thrown: "Lanzamiento",
  choiceFragment: "a elegir",
  suggestion: "Equilibrado{classes}: prioriza {priorities}.",
  suggestionNone: "Equilibrado: prioriza {priorities}.",
};
