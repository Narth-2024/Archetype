export const ABILITY_NAMES: Record<string, string> = {
  str: "Força",
  dex: "Destreza",
  con: "Constituição",
  int: "Inteligência",
  wis: "Sabedoria",
  cha: "Carisma",
};

export const ABILITY_ABBR: Record<string, string> = {
  str: "FOR",
  dex: "DES",
  con: "CON",
  int: "INT",
  wis: "SAB",
  cha: "CAR",
};

export const LABELS = {
  proficiency: "Proficiência",
  abilityMod: "Mod. {ab}",
  unarmored: "Defesa sem Armadura",
  noArmor: "Sem armadura",
  shield: "Escudo",
  base: "Base",
  magicBonus: "Bônus mágico",
  feats: "Talentos",
  hpLevel1: "{name} nível 1: d{die} {sign} {con} CON",
  hpFixedOne: "{name}: {n} nível × fixo {hp} {sign} {con} CON (mín. 1)",
  hpFixedMany: "{name}: {n} níveis × fixo {hp} {sign} {con} CON (mín. 1)",
  armorStrReq:
    "{name} requer FOR {req}: você tem desvantagem em ataques e testes de FOR.",
  armorStealth: "{name}: desvantagem em Furtividade.",
  thrown: "Arremesso",
  choiceFragment: "à escolha",
  suggestion: "Balanceado{classes}: prioriza {priorities}.",
  suggestionNone: "Balanceado: prioriza {priorities}.",
};
