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
    name: "Bárbaro",
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
      { catalogId: "greataxe", name: "Machado Grande", qty: 1 },
      { catalogId: "explorers_pack", name: "Kit do Explorador", qty: 1 },
      { catalogId: "javelin", name: "Javelin", qty: 4 },
    ],
    features: [
      { name: "Fúria", description: "2 usos por descanso: +dano corpo a corpo e vantagem em FOR por 1 minuto." },
      { name: "Defesa sem Armadura", description: "Sem armadura: CA = 10 + DES + CON (escudo permitido)." },
      { name: "Ataque Temerário", description: "Pode trocar CA por vantagem no ataque (uma vez por rodada)." },
    ],
  },
  {
    id: "bardo",
    name: "Bardo",
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
      { catalogId: "rapier", name: "Rapié", qty: 1 },
      { catalogId: "dagger", name: "Adaga", qty: 1 },
      { catalogId: "entertainers_pack", name: "Kit do Artista", qty: 1 },
      { catalogId: "lute", name: "Lira", qty: 1 },
    ],
    features: [
      { name: "Inspiração Bardica", description: "Concede um dado extra a um aliado (1/ descanso curto)." },
      { name: "Saber Improvisado", description: "Adiciona o mod. de CAR a qualquer teste de perícia sem proficiência." },
    ],
  },
  {
    id: "clerigo",
    name: "Clérigo",
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
      { catalogId: "mace", name: "Maça", qty: 1 },
      { catalogId: "scale_mail", name: "Escama", qty: 1 },
      { catalogId: "shield", name: "Escudo", qty: 1 },
      { catalogId: "holy_symbol", name: "Símbolo Sagrado", qty: 1 },
    ],
    features: [
      { name: "Domínio Divino", description: "Escolha um domínio: define magias preparadas e habilidades extras." },
      { name: "Cantrip Channel", description: "Cantrip de cura ou dano aprimorado conforme o domínio." },
    ],
  },
  {
    id: "druida",
    name: "Druida",
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
    toolProficiencies: ["ferramentas de druida"],
    spellcaster: "full",
    castingAbility: "wis",
    startingEquipment: [
      { catalogId: "quarterstaff", name: "Cajado", qty: 1 },
      { catalogId: "leather", name: "Couro", qty: 1 },
      { catalogId: "druidic_focus", name: "Foco druídico", qty: 1 },
    ],
    features: [
      { name: "Língua Druidica", description: "Pode falar e escrever a língua druídica secreta." },
      { name: "Forma Selvagem", description: "Transforma-se em uma besta (2 usos/ descanso curto)." },
    ],
  },
  {
    id: "guerreiro",
    name: "Guerreiro",
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
      { catalogId: "chain_mail", name: "Malha", qty: 1 },
      { catalogId: "longsword", name: "Espada Longa", qty: 1 },
      { catalogId: "shield", name: "Escudo", qty: 1 },
      { catalogId: "longbow", name: "Arco Longo", qty: 1 },
      { catalogId: "arrows", name: "Flechas", qty: 20 },
    ],
    features: [
      { name: "Estilo de Combate", description: "Escolha um estilo (proteção, duelo, acerto duplo...)." },
      { name: "Segundo Fôlego", description: "Ação bônus para recuperar PV ou ganhar vantagem (1/ descanso curto)." },
      { name: "Ataque Extra", description: "A partir do 5º nível, faz dois ataques na ação de atacar." },
    ],
  },
  {
    id: "monge",
    name: "Monge",
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
      { catalogId: "shortsword", name: "Espada Curta", qty: 1 },
      { catalogId: "explorers_pack", name: "Kit do Explorador", qty: 1 },
      { catalogId: "darts", name: "Dardos", qty: 10 },
    ],
    features: [
      { name: "Defesa sem Armadura", description: "Sem armadura nem escudo: CA = 10 + DES + SAB." },
      { name: "Artes Marciais", description: "Usa DEX para ataques e dano com armas simples/espadas curtas." },
      { name: "Puntos de Ki", description: "Pontos de ki igual ao nível para ações especiais." },
    ],
  },
  {
    id: "paladino",
    name: "Paladino",
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
      { catalogId: "longsword", name: "Espada Longa", qty: 1 },
      { catalogId: "chain_mail", name: "Malha", qty: 1 },
      { catalogId: "shield", name: "Escudo", qty: 1 },
      { catalogId: "holy_symbol", name: "Símbolo Sagrado", qty: 1 },
    ],
    features: [
      { name: "Devoção Sagrada", description: "Juramento que define seu código e habilidades divinas." },
      { name: "Divine Sense", description: "Sente criaturas celestiais, infernais ou feéricas (1+CAR/ descanso)." },
      { name: "Lay on Hands", description: "Toque cura 5 PV × nível (pool separado)." },
    ],
  },
  {
    id: "patrulheiro",
    name: "Patrulheiro",
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
      { catalogId: "shortsword", name: "Espada Curta", qty: 1 },
      { catalogId: "longbow", name: "Arco Longo", qty: 1 },
      { catalogId: "arrows", name: "Flechas", qty: 20 },
      { catalogId: "explorers_pack", name: "Kit do Explorador", qty: 1 },
    ],
    features: [
      { name: "Inimigo Favorito", description: "Vantagem em rastrear e localizar seu inimigo favorito." },
      { name: "Explorador Natural", description: "Escolha um terreno: não pode ser rastreado por nele." },
    ],
  },
  {
    id: "ladino",
    name: "Ladino",
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
    toolProficiencies: ["ferramentas de ladrão"],
    spellcaster: "none",
    castingAbility: null,
    startingEquipment: [
      { catalogId: "shortsword", name: "Espada Curta", qty: 1 },
      { catalogId: "shortbow", name: "Arco Curto", qty: 1 },
      { catalogId: "arrows", name: "Flechas", qty: 20 },
      { catalogId: "thieves_tools", name: "Ferramentas de ladrão", qty: 1 },
      { catalogId: "thieves_pack", name: "Kit do Ladrão", qty: 1 },
    ],
    features: [
      { name: "Golpe Feliz", description: "Uma vez por descanso: ataque com desvantagem vira crítico." },
      { name: "Esquiva Oportuna", description: "Reação para ganhar desvantagem no ataque contra você." },
      { name: "Ataque Furtivo", description: "+1d6 de dano contra alvos desprevenidos ou aliados a 5 pés." },
    ],
  },
  {
    id: "bruxo",
    name: "Bruxo",
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
      { catalogId: "quarterstaff", name: "Cajado", qty: 1 },
      { catalogId: "light_crossbow", name: "Besta Leve", qty: 1 },
      { catalogId: "crossbow_bolts", name: "Virotes", qty: 20 },
      { catalogId: "scholars_pack", name: "Kit do Erudito", qty: 1 },
    ],
    features: [
      { name: "Patrono Arcano", description: "Um ser poderoso concede poderes em troca de um favor." },
      { name: "Pacto Magico", description: "Escolha: Grimório (magias escritas), Tomar (livro de rituais) ou Arma." },
      { name: "Recuperar Pacto", description: "Recupera slots de magia pacto com 1 minuto de meditação." },
    ],
  },
  {
    id: "feiticeiro",
    name: "Feiticeiro",
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
      { catalogId: "light_crossbow", name: "Besta Leve", qty: 1 },
      { catalogId: "crossbow_bolts", name: "Virotes", qty: 20 },
      { catalogId: "component_pouch", name: "Bolsa de componentes", qty: 1 },
      { catalogId: "explorers_pack", name: "Kit do Explorador", qty: 1 },
    ],
    features: [
      { name: "Origem Mágica", description: "Fonte do poder: dragão, linhagem feérica ou outra." },
      { name: "Recuperação Feiticeira", description: "Recupera um slot de magia gastando ação bônus (1/ descanso)." },
    ],
  },
  {
    id: "mago",
    name: "Mago",
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
      { catalogId: "quarterstaff", name: "Cajado", qty: 1 },
      { catalogId: "component_pouch", name: "Bolsa de componentes", qty: 1 },
      { catalogId: "spellbook", name: "Grimório", qty: 1 },
    ],
    features: [
      { name: "Recuperação Arcana", description: "Recupera metade dos níveis de magia gastos por descanso longo." },
      { name: "Conjuração Ritual", description: "Pode conjurar magias com tag ritual sem gastar slot." },
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
