import type { AbilityKey, SkillId } from "../../domain/types";

export type TraitDef = { name: string; description: string };

export type RaceDef = {
  id: string;
  name: string;
  speed: number;
  darkvision: number | null;
  size: string;
  abilityBonus: {
    fixed: Partial<Record<AbilityKey, number>>;
    flexible?: { count: number; amount: number };
  };
  languages: string[];
  proficiencies: { skills?: SkillId[]; weapons?: string[] };
  skillChoices?: { count: number; options: SkillId[] | "any" };
  traits: TraitDef[];
};

export type SubraceDef = {
  id: string;
  raceId: string;
  name: string;
  abilityBonus?: Partial<Record<AbilityKey, number>>;
  speed?: number;
  darkvision?: number | null;
  languages?: string[];
  proficiencies?: { armors?: string[]; weapons?: string[]; skills?: SkillId[] };
  skillChoices?: { count: number; options: SkillId[] | "any" };
  traits: TraitDef[];
};

export const RACES: RaceDef[] = [
  {
    id: "humano",
    name: "Humano",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 } },
    languages: ["Común", "Otro a elegir"],
    proficiencies: {},
    traits: [
      {
        name: "Versatilidad",
        description:
          "Los humanos se adaptan a cualquier papel: reciben +1 en todos los atributos y una dote adicional (en campañas que usan dotes).",
      },
    ],
  },
  {
    id: "humano_variante",
    name: "Humano (variante)",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 2, amount: 1 } },
    languages: ["Común", "Otro a elegir"],
    proficiencies: {},
    skillChoices: { count: 1, options: "any" },
    traits: [
      {
        name: "Dote",
        description:
          "Ganas una dote (feat) a tu elección. Anota el nombre y el efecto en las observaciones, por si la mesa usa dotes.",
      },
      {
        name: "Versatilidad",
        description:
          "+1 en dos atributos a tu elección (fase de atributos) y una pericia a elegir (fase de pericias).",
      },
    ],
  },
  {
    id: "elfo",
    name: "Elfo",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Común", "Élfico"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Sentidos Agudos",
        description: "Competencia en Percepción y ventaja en pruebas de Percepción que dependen de la vista.",
      },
      {
        name: "Trance",
        description: "Duermes 4 horas al día y permaneces consciente durante la vigilia.",
      },
      {
        name: "Ascendencia Feérica",
        description: "Ventaja en salvaciones contra seres feéricos y no puedes ser hechizado por ellos.",
      },
    ],
  },
  {
    id: "anao",
    name: "Enano",
    speed: 25,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { con: 2 } },
    languages: ["Común", "Enano"],
    proficiencies: { weapons: ["machado_de_batalha", "machado_de_mao", "martelo_leve", "machado_guerra"] },
    traits: [
      {
        name: "Visión en la Oscuridad",
        description: "Ves 60 pies en penumbra y 15 pies en la oscuridad.",
      },
      {
        name: "Resistencia Enana",
        description: "Ventaja en salvaciones contra venenos y resistencia al daño por veneno.",
      },
      {
        name: "Combatividad Enana",
        description: "Competencia con hachas de batalla, hachas de guerra, hachas de mano y martillos ligeros.",
      },
    ],
  },
  {
    id: "halfling",
    name: "Mediano",
    speed: 25,
    darkvision: null,
    size: "Pequeño",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Común", "Mediano"],
    proficiencies: {},
    traits: [
      {
        name: "Afortunado",
        description: "Cuando fallas una prueba de habilidad, puedes volver a tirar y debes usar el nuevo resultado.",
      },
      {
        name: "Valiente",
        description: "Ventaja en salvaciones contra el miedo; los aliados a 5 pies también se benefician.",
      },
      {
        name: "Agilidad",
        description: "Puedes moverte por el espacio de criaturas mayores que tú.",
      },
    ],
  },
  {
    id: "meio_elfo",
    name: "Semielfo",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { cha: 2 }, flexible: { count: 2, amount: 1 } },
    languages: ["Común", "Élfico", "Otro a elegir"],
    proficiencies: { skills: ["insight"] },
    traits: [
      {
        name: "Versatilidad Ancestral",
        description:
          "Ganas +1 en dos atributos a tu elección (fase de atributos).",
      },
      {
        name: "Visión en la Oscuridad",
        description: "Ves 60 pies en penumbra y 15 pies en la oscuridad.",
      },
      {
        name: "Ascendencia Feérica",
        description: "Ventaja en salvaciones contra seres feéricos y no puedes ser hechizado por ellos.",
      },
    ],
  },
  {
    id: "meio_orco",
    name: "Semiorco",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { str: 2, con: 1 } },
    languages: ["Común", "Orc"],
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Visión en la Oscuridad",
        description: "Ves 60 pies en penumbra y 15 pies en la oscuridad.",
      },
      {
        name: "Incansable",
        description: "Cuando llegas a 0 PV pero no mueres, vuelves a 1 PV (una vez por descanso largo).",
      },
      {
        name: "Furia Salvaje",
        description: "En ataques cuerpo a cuerpo causas 1d6 de daño extra sobre el normal (una vez por ronda).",
      },
    ],
  },
  {
    id: "gnomo",
    name: "Gnomo",
    speed: 25,
    darkvision: 60,
    size: "Pequeño",
    abilityBonus: { fixed: { int: 2 } },
    languages: ["Común", "Gnómico"],
    proficiencies: {},
    traits: [
      {
        name: "Ingenio",
        description: "Ventaja en pruebas de Inteligencia (Arcanos, Ingeniería, Historia, Naturaleza, Religión).",
      },
      {
        name: "Furtividad Natural",
        description: "Puedes intentar esconderte tras criaturas mayores que tú.",
      },
      {
        name: "Visión en la Oscuridad",
        description: "Ves 60 pies en penumbra y 15 pies en la oscuridad.",
      },
    ],
  },
  {
    id: "tiefling",
    name: "Tiefling",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { cha: 2, int: 1 } },
    languages: ["Común", "Infernal"],
    proficiencies: {},
    traits: [
      {
        name: "Visión en la Oscuridad",
        description: "Ves 60 pies en penumbra y 15 pies en la oscuridad.",
      },
      {
        name: "Resistencia Infernal",
        description: "Resistencia al daño de fuego.",
      },
      {
        name: "Legado Maldito",
        description: "Conoces a voluntad un truco de rayo de fuego o un truco de ilusión (elige al crear el personaje).",
      },
    ],
  },
  {
    id: "draconato",
    name: "Dracónido",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { str: 2, con: 1 } },
    languages: ["Común", "Dracónico"],
    proficiencies: {},
    traits: [
      {
        name: "Aliento Dracónico",
        description: "Escupes ácido, fuego, hielo, eléctrico o veneno (1d10, recarga 5–6).",
      },
      {
        name: "Ascendencia Dracónica",
        description: "Resistencia al tipo de daño elemental de tu linaje.",
      },
    ],
  },
];

export function getRace(id: string): RaceDef | undefined {
  return RACES.find((r) => r.id === id);
}

export const SUBRACES: SubraceDef[] = [
  {
    id: "anao_colinano",
    raceId: "anao",
    name: "Enano de las Colinas",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Resistencia de las Colinas",
        description: "Tu máximo de PV aumenta en 1 por cada nivel ganado.",
      },
    ],
  },
  {
    id: "anao_da_montanha",
    raceId: "anao",
    name: "Enano de la Montaña",
    abilityBonus: { str: 2 },
    proficiencies: { armors: ["leve", "media"] },
    traits: [
      {
        name: "Competencia con Armaduras Enanas",
        description: "Competente con armaduras ligeras y medianas.",
      },
    ],
  },
  {
    id: "elfo_alto",
    raceId: "elfo",
    name: "Alto Elfo",
    abilityBonus: { int: 1 },
    languages: ["Otro a elegir"],
    proficiencies: { weapons: ["espada_longa", "espada_curta", "arco_curto", "arco_longo"] },
    traits: [
      {
        name: "Competencia con Armas Élficas",
        description:
          "Competente con espadas largas, espadas cortas, arcos cortos y largos.",
      },
      {
        name: "Truco",
        description:
          "Conoces un truco de la lista de conjuros del mago (INT como atributo de conjuración).",
      },
      {
        name: "Idioma Extra",
        description: "Ganas un idioma a tu elección.",
      },
    ],
  },
  {
    id: "elfo_silvestre",
    raceId: "elfo",
    name: "Elfo de los Bosques",
    abilityBonus: { wis: 1 },
    speed: 35,
    traits: [
      {
        name: "Pies Ligeros",
        description: "Tu desplazamiento base aumenta a 35 pies.",
      },
      {
        name: "Máscara de la Naturaleza",
        description:
          "Puedes intentar esconderte incluso cuando solo estés ligeramente oculto por vegetación, lluvia, niebla, etc.",
      },
    ],
  },
  {
    id: "halfling_leve",
    raceId: "halfling",
    name: "Mediano Piesligeros",
    abilityBonus: { cha: 1 },
    traits: [
      {
        name: "Sigilo Natural",
        description:
          "Puedes intentar esconderte tras una criatura mayor que tú.",
      },
    ],
  },
  {
    id: "halfling_robusto",
    raceId: "halfling",
    name: "Mediano Fornido",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Resistencia Fornida",
        description:
          "Ventaja en salvaciones contra venenos y resistencia al daño por veneno.",
      },
    ],
  },
  {
    id: "gnomo_bosque",
    raceId: "gnomo",
    name: "Gnomo del Bosque",
    abilityBonus: { dex: 1 },
    traits: [
      {
        name: "Ilusionista Natural",
        description: "Conoces el truco Ilusión menor (INT como atributo).",
      },
      {
        name: "Hablar con Animales",
        description:
          "Puedes comunicarte de forma simple con bestas que te oyen.",
      },
    ],
  },
  {
    id: "gnomo_da_rocha",
    raceId: "gnomo",
    name: "Gnomo de las Rocas",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Sabiduría del Artesano",
        description:
          "+2 en pruebas de Historia relacionadas con objetos mágicos y artilugios.",
      },
      {
        name: "Bricolaje",
        description:
          "Competente con herramientas de bricolaje; puedes montar un pequeño dispositivo mecánico.",
      },
    ],
  },
];

export function getSubrace(id: string): SubraceDef | undefined {
  return SUBRACES.find((s) => s.id === id);
}

export function subracesForRace(raceId: string): SubraceDef[] {
  return SUBRACES.filter((s) => s.raceId === raceId);
}
