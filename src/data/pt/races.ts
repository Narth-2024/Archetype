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
    size: "Médio",
    abilityBonus: { fixed: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      {
        name: "Versatilidade",
        description:
          "Humanos se adaptam a qualquer papel: ganham +1 em todos os atributos e um talento adicional (em campanhas que usam talentos).",
      },
    ],
  },
  {
    id: "humano_variante",
    name: "Humano (variante)",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 2, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: { count: 1, options: "any" },
    traits: [
      {
        name: "Talento",
        description:
          "Ganha um talento (feat) à sua escolha. Anote o nome e o efeito nas observações, caso a mesa use talentos.",
      },
      {
        name: "Versatilidade",
        description:
          "+1 em dois atributos à sua escolha (etapa de atributos) e uma perícia à escolha (etapa de perícias).",
      },
    ],
  },
  {
    id: "elfo",
    name: "Elfo",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Comum", "Élfico"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Sentidos Aguçados",
        description: "Proficiência em Percepção e vantagem em testes de Percepção que dependem da visão.",
      },
      {
        name: "Transe",
        description: "Dorme 4 horas por dia e permanece consciente durante a vigília.",
      },
      {
        name: "Ancestral Feérico",
        description: "Vantagem em salvar contra seres feéricos e não pode ser encantado por eles.",
      },
    ],
  },
  {
    id: "anao",
    name: "Anão",
    speed: 25,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { con: 2 } },
    languages: ["Comum", "Anão"],
    proficiencies: { weapons: ["machado_de_batalha", "machado_de_mao", "martelo_leve", "machado_guerra"] },
    traits: [
      {
        name: "Visão no Escuro",
        description: "Enxerga em 60 pés na penumbra e 15 pés no escuro.",
      },
      {
        name: "Resiliência Anã",
        description: "Vantagem em salvar contra venenos e resistência a dano por veneno.",
      },
      {
        name: "Combativo Anão",
        description: "Proficiência com machados de batalha, machados de guerra, machados de mão e martelos leves.",
      },
    ],
  },
  {
    id: "halfling",
    name: "Halfling",
    speed: 25,
    darkvision: null,
    size: "Pequeno",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Comum", "Halfling"],
    proficiencies: {},
    traits: [
      {
        name: "Afortunado",
        description: "Quando falha um teste de habilidade, pode rolar de novo e deve usar o novo resultado.",
      },
      {
        name: "Bravura",
        description: "Vantagem em salvar contra medo; aliados a 5 pés também se beneficiam.",
      },
      {
        name: "Pé Ligeiro",
        description: "Pode se movimentar pelo espaço de criaturas maiores que você.",
      },
    ],
  },
  {
    id: "meio_elfo",
    name: "Meio-Elfano",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { cha: 2 }, flexible: { count: 2, amount: 1 } },
    languages: ["Comum", "Élfico", "Outro à escolha"],
    proficiencies: { skills: ["insight"] },
    traits: [
      {
        name: "Versatilidade Ancestral",
        description:
          "Ganha +1 em dois atributos à sua escolha (etapa de atributos).",
      },
      {
        name: "Visão Crepuscular",
        description: "Enxerga em 60 pés na penumbra e 15 pés no escuro.",
      },
      {
        name: "Ancestral Feérico",
        description: "Vantagem em salvar contra seres feéricos e não pode ser encantado por eles.",
      },
    ],
  },
  {
    id: "meio_orco",
    name: "Meio-Orc",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { str: 2, con: 1 } },
    languages: ["Comum", "Orc"],
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Visão no Escuro",
        description: "Enxerga em 60 pés na penumbra e 15 pés no escuro.",
      },
      {
        name: "Incansável",
        description: "Quando chega a 0 PV mas não morre, volta a 1 PV (uma vez por descanso longo).",
      },
      {
        name: "Fúria Selvagem",
        description: "Em ataques corpo a corpo, causa 1d6 de dano extra acima do normal (uma vez por rodada).",
      },
    ],
  },
  {
    id: "gnomo",
    name: "Gnomo",
    speed: 25,
    darkvision: 60,
    size: "Pequeno",
    abilityBonus: { fixed: { int: 2 } },
    languages: ["Comum", "Gnômico"],
    proficiencies: {},
    traits: [
      {
        name: "Engenhosidade",
        description: "Vantagem em testes de Inteligência (Arcanismo, Engenharia, História, Natureza, Religião).",
      },
      {
        name: "Furtividade Pequena",
        description: "Pode tentar se esconder atrás de criaturas maiores que ele.",
      },
      {
        name: "Visão no Escuro",
        description: "Enxerga em 60 pés na penumbra e 15 pés no escuro.",
      },
    ],
  },
  {
    id: "tiefling",
    name: "Tiefling",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { cha: 2, int: 1 } },
    languages: ["Comum", "Infernal"],
    proficiencies: {},
    traits: [
      {
        name: "Visão no Escuro",
        description: "Enxerga em 60 pés na penumbra e 15 pés no escuro.",
      },
      {
        name: "Resistência Infernal",
        description: "Resistência a dano de fogo.",
      },
      {
        name: "Legado Amaldiçoado",
        description: "Conhece truques de raio de fogo ou uma cantrip de ilusão à vontade (escolha na criação).",
      },
    ],
  },
  {
    id: "draconato",
    name: "Draconato",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { str: 2, con: 1 } },
    languages: ["Comum", "Dracônico"],
    proficiencies: {},
    traits: [
      {
        name: "Alito Dragônico",
        description: "Cuspe de ácido, fogo, gelo, elétrico ou veneno (1d10, recarga 5–6).",
      },
      {
        name: "Ancestral Dracônico",
        description: "Resistência ao tipo de dano elementar da sua linhagem.",
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
    name: "Anão Colina",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Resiliência Colina",
        description: "Seu máximo de PV aumenta em 1 para cada nível ganho.",
      },
    ],
  },
  {
    id: "anao_da_montanha",
    raceId: "anao",
    name: "Anão da Montanha",
    abilityBonus: { str: 2 },
    proficiencies: { armors: ["leve", "media"] },
    traits: [
      {
        name: "Proficiência com Armaduras Anãs",
        description: "Proficiente com armaduras leves e médias.",
      },
    ],
  },
  {
    id: "elfo_alto",
    raceId: "elfo",
    name: "Alto Elfo",
    abilityBonus: { int: 1 },
    languages: ["Outro à escolha"],
    proficiencies: { weapons: ["espada_longa", "espada_curta", "arco_curto", "arco_longo"] },
    traits: [
      {
        name: "Treino com Armas Élficas",
        description:
          "Proficiente com espadas longas, espadas curtas, arcos curtos e longos.",
      },
      {
        name: "Cantrip",
        description:
          "Conhece um truque da lista de magias do mago (INT como atributo de conjuração).",
      },
      {
        name: "Idioma Extra",
        description: "Ganha um idioma à sua escolha.",
      },
    ],
  },
  {
    id: "elfo_silvestre",
    raceId: "elfo",
    name: "Elfo Silvestre",
    abilityBonus: { wis: 1 },
    speed: 35,
    traits: [
      {
        name: "Pés Ligeiros",
        description: "Seu deslocamento base aumenta para 35 pés.",
      },
      {
        name: "Máscara da Natureza",
        description:
          "Pode tentar se esconder mesmo apenas levemente obscurecido por vegetação, chuva fina, nevoeiro etc.",
      },
    ],
  },
  {
    id: "halfling_leve",
    raceId: "halfling",
    name: "Halfling Leve",
    abilityBonus: { cha: 1 },
    traits: [
      {
        name: "Discrição Natural",
        description:
          "Pode tentar se esconder atrás de uma criatura maior que você.",
      },
    ],
  },
  {
    id: "halfling_robusto",
    raceId: "halfling",
    name: "Halfling Robusto",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Resiliência Robusta",
        description:
          "Vantagem em salvar contra venenos e resistência a dano por veneno.",
      },
    ],
  },
  {
    id: "gnomo_bosque",
    raceId: "gnomo",
    name: "Gnomo do Bosque",
    abilityBonus: { dex: 1 },
    traits: [
      {
        name: "Ilusionista Natural",
        description: "Conhece o truque Ilusão Menor (INT como atributo).",
      },
      {
        name: "Falar com Animais",
        description:
          "Pode se comunicar de forma simples com bestas que ouçam você.",
      },
    ],
  },
  {
    id: "gnomo_da_rocha",
    raceId: "gnomo",
    name: "Gnomo da Rocha",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Sabedoria do Artesão",
        description:
          "+2 em testes de História relacionados a itens mágicos e objetos de engenhoca.",
      },
      {
        name: "Bricolagem",
        description:
          "Proficiente com ferramentas de bricolagem; pode montar um pequeno dispositivo mecânico.",
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
