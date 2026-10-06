import type { SkillId } from "../domain/types";
import type { TraitDef } from "./races";

export type BackgroundDef = {
  id: string;
  name: string;
  skillChoices: { count: number; options: SkillId[] };
  toolProficiencies: string[];
  toolChoices?: { count: number };
  languages: string[];
  languageChoices?: { count: number };
  equipment: { catalogId: string | null; name: string; qty: number }[];
  feature: TraitDef;
};

export const BACKGROUNDS: BackgroundDef[] = [
  {
    id: "acolite",
    name: "Acólite",
    skillChoices: { count: 2, options: ["insight", "religion"] },
    toolProficiencies: [],
    languages: [],
    languageChoices: { count: 2 },
    equipment: [
      { catalogId: "holy_symbol", name: "Símbolo sagrado", qty: 1 },
      { catalogId: "incense", name: "Incenso", qty: 5 },
      { catalogId: "robes", name: "Robes", qty: 1 },
      { catalogId: null, name: "15 po", qty: 1 },
    ],
    feature: {
      name: "Acolitado",
      description: "Tem uma posição em um templo e pode reabrigar-se e receber auxílio de outros templos.",
    },
  },
  {
    id: "criminoso",
    name: "Criminoso",
    skillChoices: { count: 2, options: ["deception", "stealth"] },
    toolProficiencies: ["ferramentas de ladrão"],
    languages: [],
    equipment: [
      { catalogId: "dagger", name: "Adaga", qty: 1 },
      { catalogId: "thieves_tools", name: "Ferramentas de ladrão", qty: 1 },
      { catalogId: "crowbar", name: "Pé de cabra", qty: 1 },
      { catalogId: null, name: "15 po", qty: 1 },
    ],
    feature: {
      name: "Contacto",
      description: "Tem um contato confiável em cada cidade com notícias e oportunidades.",
    },
  },
  {
    id: "heroi_do_povo",
    name: "Herói do Povo",
    skillChoices: { count: 2, options: ["athletics", "survival"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    equipment: [
      { catalogId: "smiths_tools", name: "Ferramentas de ferreiro", qty: 1 },
      { catalogId: "miners_pick", name: "Picareta de minerador", qty: 1 },
      { catalogId: "travelers_pack", name: "Kit do viajante", qty: 1 },
      { catalogId: null, name: "10 po", qty: 1 },
    ],
    feature: {
      name: "Reputação Popular",
      description: "Povãos comuns fornecem ajuda e abrigo em troca de sua proteção.",
    },
  },
  {
    id: "soldado",
    name: "Soldado",
    skillChoices: { count: 2, options: ["athletics", "intimidation"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    equipment: [
      { catalogId: "insignia", name: "Insígnia de posto", qty: 1 },
      { catalogId: null, name: "10 po e troféu de inimigo", qty: 1 },
      { catalogId: "dice_set", name: "Kit de dados", qty: 1 },
    ],
    feature: {
      name: "Renda de Guerra",
      description: "Seu posto militar garante uma aposentadoria modesta caso fique inválido.",
    },
  },
  {
    id: "erudito",
    name: "Erudito",
    skillChoices: { count: 2, options: ["arcana", "history"] },
    toolProficiencies: ["kit de escriba"],
    languages: [],
    languageChoices: { count: 2 },
    equipment: [
      { catalogId: "ink", name: "Tinta", qty: 1 },
      { catalogId: "quill", name: "Pena", qty: 1 },
      { catalogId: null, name: "8 po e pergaminhos", qty: 1 },
    ],
    feature: {
      name: "Pesquisa",
      description: "Consegue consultar bibliotecas e passar despercebido em instituições de aprendizado.",
    },
  },
  {
    id: "artista",
    name: "Artista",
    skillChoices: { count: 2, options: ["acrobatics", "performance"] },
    toolProficiencies: ["disfarces"],
    toolChoices: { count: 1 },
    languages: [],
    equipment: [
      { catalogId: "costume", name: "Roupa de fantasia", qty: 1 },
      { catalogId: null, name: "15 po", qty: 1 },
    ],
    feature: {
      name: "Apresentação",
      description: "Sempre encontra trabalho em festivais, tavernas e feiras.",
    },
  },
  {
    id: "mercador",
    name: "Mercador de Guilda",
    skillChoices: { count: 2, options: ["insight", "persuasion"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    languageChoices: { count: 1 },
    equipment: [
      { catalogId: "letter_of_introduction", name: "Carta de apresentação", qty: 1 },
      { catalogId: null, name: "15 po", qty: 1 },
    ],
    feature: {
      name: "Pertencer à Guilda",
      description: "Guilda fornece abrigo, contatos e favores em troca de favores futuros.",
    },
  },
  {
    id: "eremita",
    name: "Eremita",
    skillChoices: { count: 2, options: ["medicine", "religion"] },
    toolProficiencies: ["kit de alquimia"],
    languages: [],
    languageChoices: { count: 1 },
    equipment: [
      { catalogId: "herbs", name: "Ervas medicinais", qty: 1 },
      { catalogId: null, name: "5 po e outros pertences", qty: 1 },
    ],
    feature: {
      name: "Reclusão",
      description: "Pessoas de fé ouvoce oferecem abrigo e esconderijo.",
    },
  },
  {
    id: "forasteiro",
    name: "Forasteiro",
    skillChoices: { count: 2, options: ["nature", "survival"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    languageChoices: { count: 1 },
    equipment: [
      { catalogId: "staff", name: "Cajado", qty: 1 },
      { catalogId: "travelers_pack", name: "Kit do viajante", qty: 1 },
      { catalogId: null, name: "10 po", qty: 1 },
    ],
    feature: {
      name: "Estrada Nenhuma",
      description: "Dorme ao relento sem perder tempo de preparação e se move por terinos sem ser rastreado.",
    },
  },
  {
    id: "marinheiro",
    name: "Marinheiro",
    skillChoices: { count: 2, options: ["athletics", "perception"] },
    toolProficiencies: ["ferramentas de navegador"],
    languages: [],
    equipment: [
      { catalogId: "sailors_kit", name: "Kit do marinheiro", qty: 1 },
      { catalogId: null, name: "10 po", qty: 1 },
    ],
    feature: {
      name: "Mão de Proa",
      description: "Barcos oferecem transporte gratuito em troca de sua ajuda na tripulação.",
    },
  },
  {
    id: "sabio",
    name: "Sábio",
    skillChoices: { count: 2, options: ["arcana", "history"] },
    toolProficiencies: ["kit de escriba"],
    languages: [],
    languageChoices: { count: 2 },
    equipment: [
      { catalogId: "ink", name: "Tinta", qty: 1 },
      { catalogId: null, name: "8 po e pergaminhos", qty: 1 },
    ],
    feature: {
      name: "Descoberta Científica",
      description: "Tem acesso a locais de aprendizado e mentores de sua área de estudo.",
    },
  },
  {
    id: "nobre",
    name: "Nobre",
    skillChoices: { count: 2, options: ["history", "persuasion"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    languageChoices: { count: 1 },
    equipment: [
      { catalogId: "fine_clothes", name: "Roupas finas", qty: 1 },
      { catalogId: null, name: "25 po e um anel de família", qty: 1 },
    ],
    feature: {
      name: "Retidão",
      description: "Pessoas de posto inferior tratam-no com respeito e fornecem informações.",
    },
  },
  {
    id: "bufao",
    name: "Bufão",
    skillChoices: { count: 2, options: ["deception", "sleight_of_hand"] },
    toolProficiencies: ["disfarces"],
    languages: [],
    equipment: [
      { catalogId: "dagger", name: "Adaga", qty: 2 },
      { catalogId: "dice_set", name: "Kit de dados", qty: 1 },
      { catalogId: null, name: "15 po", qty: 1 },
    ],
    feature: {
      name: "Bolso Amigo",
      description: "Pessoas confiam em você o suficiente para guardar bens preciosos.",
    },
  },
];

export function getBackground(id: string): BackgroundDef | undefined {
  return BACKGROUNDS.find((b) => b.id === id);
}
