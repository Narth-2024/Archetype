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
      { catalogId: "greataxe", name: "Gran Hacha", qty: 1 },
      { catalogId: "explorers_pack", name: "Bolsa de explorador", qty: 1 },
      { catalogId: "javelin", name: "Jabalina", qty: 4 },
    ],
    features: [
      { name: "Furia", description: "2 usos por descanso: +daño cuerpo a cuerpo y ventaja en FUER durante 1 minuto." },
      { name: "Defensa sin Armadura", description: "Sin armadura: CA = 10 + DES + CON (se permite escudo)." },
      { name: "Ataque Temerario", description: "Puedes cambiar CA por ventaja en el ataque (una vez por ronda)." },
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
      { catalogId: "rapier", name: "Estoque", qty: 1 },
      { catalogId: "dagger", name: "Daga", qty: 1 },
      { catalogId: "entertainers_pack", name: "Bolsa de artista", qty: 1 },
      { catalogId: "lute", name: "Lira", qty: 1 },
    ],
    features: [
      { name: "Inspiración Bárdica", description: "Concedes un dado extra a un aliado (1/ descanso corto)." },
      { name: "Saber Improvisado", description: "Añades el mod. de CAR a cualquier prueba de pericia sin competencia." },
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
      { catalogId: "mace", name: "Maza", qty: 1 },
      { catalogId: "scale_mail", name: "Armadura de Escamas", qty: 1 },
      { catalogId: "shield", name: "Escudo", qty: 1 },
      { catalogId: "holy_symbol", name: "Símbolo sagrado", qty: 1 },
    ],
    features: [
      { name: "Dominio Divino", description: "Eliges un dominio: define conjuros preparados y habilidades extra." },
      { name: "Canalizar Divinidad", description: "Truco de curación o daño mejorado según el dominio." },
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
    toolProficiencies: ["herramientas de druida"],
    spellcaster: "full",
    castingAbility: "wis",
    startingEquipment: [
      { catalogId: "quarterstaff", name: "Bastón", qty: 1 },
      { catalogId: "leather", name: "Cuero", qty: 1 },
      { catalogId: "druidic_focus", name: "Foco druídico", qty: 1 },
    ],
    features: [
      { name: "Lengua Druídica", description: "Puedes hablar y escribir la lengua druídica secreta." },
      { name: "Forma Salvaje", description: "Te transformas en una besta (2 usos/ descanso corto)." },
    ],
  },
  {
    id: "guerreiro",
    name: "Guerrero",
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
      { catalogId: "chain_mail", name: "Cota de Malla", qty: 1 },
      { catalogId: "longsword", name: "Espada Larga", qty: 1 },
      { catalogId: "shield", name: "Escudo", qty: 1 },
      { catalogId: "longbow", name: "Arco Largo", qty: 1 },
      { catalogId: "arrows", name: "Flechas", qty: 20 },
    ],
    features: [
      { name: "Estilo de Combate", description: "Eliges un estilo (protección, duelo, golpe doble...)." },
      { name: "Segundo Aliento", description: "Acción adicional para recuperar PV o ganar ventaja (1/ descanso corto)." },
      { name: "Ataque Extra", description: "A partir del 5º nivel, realizas dos ataques en la acción de atacar." },
    ],
  },
  {
    id: "monge",
    name: "Monje",
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
      { catalogId: "shortsword", name: "Espada Corta", qty: 1 },
      { catalogId: "explorers_pack", name: "Bolsa de explorador", qty: 1 },
      { catalogId: "darts", name: "Dardos", qty: 10 },
    ],
    features: [
      { name: "Defensa sin Armadura", description: "Sin armadura ni escudo: CA = 10 + DES + SAB." },
      { name: "Artes Marciales", description: "Usas DES para ataques y daño con armas sencillas/espadas cortas." },
      { name: "Puntos de Ki", description: "Puntos de ki iguales al nivel para acciones especiales." },
    ],
  },
  {
    id: "paladino",
    name: "Paladín",
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
      { catalogId: "longsword", name: "Espada Larga", qty: 1 },
      { catalogId: "chain_mail", name: "Cota de Malla", qty: 1 },
      { catalogId: "shield", name: "Escudo", qty: 1 },
      { catalogId: "holy_symbol", name: "Símbolo sagrado", qty: 1 },
    ],
    features: [
      { name: "Devoción Sagrada", description: "Juramento que define tu código y tus habilidades divinas." },
      { name: "Sentido Divino", description: "Detectas criaturas celestiales, infernales o feéricas (1+CAR/ descanso)." },
      { name: "Imposición de Manos", description: "Al tocar curas 5 PV × nivel (reserva aparte)." },
    ],
  },
  {
    id: "patrulheiro",
    name: "Explorador",
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
      { catalogId: "shortsword", name: "Espada Corta", qty: 1 },
      { catalogId: "longbow", name: "Arco Largo", qty: 1 },
      { catalogId: "arrows", name: "Flechas", qty: 20 },
      { catalogId: "explorers_pack", name: "Bolsa de explorador", qty: 1 },
    ],
    features: [
      { name: "Enemigo Favorito", description: "Ventaja para rastrear y localizar a tu enemigo favorito." },
      { name: "Explorador Natural", description: "Eliges un terreno: no puedes ser rastreado en él." },
    ],
  },
  {
    id: "ladino",
    name: "Pícaro",
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
    toolProficiencies: ["herramientas de ladrón"],
    spellcaster: "none",
    castingAbility: null,
    startingEquipment: [
      { catalogId: "shortsword", name: "Espada Corta", qty: 1 },
      { catalogId: "shortbow", name: "Arco Corto", qty: 1 },
      { catalogId: "arrows", name: "Flechas", qty: 20 },
      { catalogId: "thieves_tools", name: "Herramientas de ladrón", qty: 1 },
      { catalogId: "thieves_pack", name: "Bolsa de ladrón", qty: 1 },
    ],
    features: [
      { name: "Golpe Afortunado", description: "Una vez por descanso: un ataque con desventaja se convierte en crítico." },
      { name: "Esquiva Oportuna", description: "Reacción para ganar desventaja en el ataque contra ti." },
      { name: "Ataque Furtivo", description: "+1d6 de daño contra objetivos desprevenidos o aliados a 5 pies." },
    ],
  },
  {
    id: "bruxo",
    name: "Brujo",
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
      { catalogId: "quarterstaff", name: "Bastón", qty: 1 },
      { catalogId: "light_crossbow", name: "Ballesta Ligera", qty: 1 },
      { catalogId: "crossbow_bolts", name: "Virotas", qty: 20 },
      { catalogId: "scholars_pack", name: "Bolsa de erudito", qty: 1 },
    ],
    features: [
      { name: "Patrón Arcano", description: "Un ser poderoso concede poderes a cambio de un favor." },
      { name: "Pacto Mágico", description: "Eliges: Grimorio (conjuros escritos), Tomo (libro de rituales) o Arma." },
      { name: "Recuperar Pacto", description: "Recuperas slots de conjuro de pacto con 1 minuto de meditación." },
    ],
  },
  {
    id: "feiticeiro",
    name: "Hechicero",
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
      { catalogId: "light_crossbow", name: "Ballesta Ligera", qty: 1 },
      { catalogId: "crossbow_bolts", name: "Virotas", qty: 20 },
      { catalogId: "component_pouch", name: "Bolsa de componentes", qty: 1 },
      { catalogId: "explorers_pack", name: "Bolsa de explorador", qty: 1 },
    ],
    features: [
      { name: "Origen Mágico", description: "Fuente del poder: dragón, linaje feérico u otra." },
      { name: "Recuperación Hechicera", description: "Recuperas un slot de conjuro gastando acción adicional (1/ descanso)." },
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
      { catalogId: "quarterstaff", name: "Bastón", qty: 1 },
      { catalogId: "component_pouch", name: "Bolsa de componentes", qty: 1 },
      { catalogId: "spellbook", name: "Grimorio", qty: 1 },
    ],
    features: [
      { name: "Recuperación Arcana", description: "Recuperas la mitad de los niveles de conjuro gastados por descanso largo." },
      { name: "Conjuración Ritual", description: "Puedes lanzar conjuros con ritual sin gastar slot." },
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
