import type { SkillId } from "../../domain/types";
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
    name: "Acolito",
    skillChoices: { count: 2, options: ["insight", "religion"] },
    toolProficiencies: [],
    languages: [],
    languageChoices: { count: 2 },
    equipment: [
      { catalogId: "holy_symbol", name: "Símbolo sagrado", qty: 1 },
      { catalogId: "incense", name: "Incienso", qty: 5 },
      { catalogId: "robes", name: "Hábitos", qty: 1 },
      { catalogId: null, name: "15 po", qty: 1 },
    ],
    feature: {
      name: "Acolitado",
      description: "Tienes una posición en un templo y puedes refugiarte y recibir ayuda de otros templos.",
    },
  },
  {
    id: "criminoso",
    name: "Criminal",
    skillChoices: { count: 2, options: ["deception", "stealth"] },
    toolProficiencies: ["herramientas de ladrón"],
    languages: [],
    equipment: [
      { catalogId: "dagger", name: "Daga", qty: 1 },
      { catalogId: "thieves_tools", name: "Herramientas de ladrón", qty: 1 },
      { catalogId: "crowbar", name: "Palanca", qty: 1 },
      { catalogId: null, name: "15 po", qty: 1 },
    ],
    feature: {
      name: "Contacto",
      description: "Tienes un contacto fiable en cada ciudad con noticias y oportunidades.",
    },
  },
  {
    id: "heroi_do_povo",
    name: "Héroe Popular",
    skillChoices: { count: 2, options: ["athletics", "survival"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    equipment: [
      { catalogId: "smiths_tools", name: "Herramientas de herrero", qty: 1 },
      { catalogId: "miners_pick", name: "Pico de minador", qty: 1 },
      { catalogId: "travelers_pack", name: "Bolsa de viajero", qty: 1 },
      { catalogId: null, name: "10 po", qty: 1 },
    ],
    feature: {
      name: "Reputación Popular",
      description: "Los pueblos comunes ofrecen ayuda y alojamiento a cambio de tu protección.",
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
      { catalogId: "insignia", name: "Insignia de rango", qty: 1 },
      { catalogId: null, name: "10 po y un trofeo de enemigo", qty: 1 },
      { catalogId: "dice_set", name: "Kit de dados", qty: 1 },
    ],
    feature: {
      name: "Paga de Guerra",
      description: "Tu rango militar garantiza una pensión modesta si quedas invalidado.",
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
      { catalogId: "quill", name: "Pluma", qty: 1 },
      { catalogId: null, name: "8 po y pergaminhos", qty: 1 },
    ],
    feature: {
      name: "Investigación",
      description: "Puedes consultar bibliotecas y pasar desapercibido en instituciones de aprendizaje.",
    },
  },
  {
    id: "artista",
    name: "Artista",
    skillChoices: { count: 2, options: ["acrobatics", "performance"] },
    toolProficiencies: ["disfraces"],
    toolChoices: { count: 1 },
    languages: [],
    equipment: [
      { catalogId: "costume", name: "Traje de fantasía", qty: 1 },
      { catalogId: null, name: "15 po", qty: 1 },
    ],
    feature: {
      name: "Representación",
      description: "Siempre encuentras trabajo en festivales, tabernas y ferias.",
    },
  },
  {
    id: "mercador",
    name: "Mercader de Gremio",
    skillChoices: { count: 2, options: ["insight", "persuasion"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    languageChoices: { count: 1 },
    equipment: [
      { catalogId: "letter_of_introduction", name: "Carta de presentación", qty: 1 },
      { catalogId: null, name: "15 po", qty: 1 },
    ],
    feature: {
      name: "Pertenencia a la Guilda",
      description: "La guilda te ofrece alojamiento, contactos y favores a cambio de favores futuros.",
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
      { catalogId: "herbs", name: "Hierbas medicinales", qty: 1 },
      { catalogId: null, name: "5 po y otros enseres", qty: 1 },
    ],
    feature: {
      name: "Retiro",
      description: "Las personas de fe te ofrecen refugio y escondite.",
    },
  },
  {
    id: "forasteiro",
    name: "Forastero",
    skillChoices: { count: 2, options: ["nature", "survival"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    languageChoices: { count: 1 },
    equipment: [
      { catalogId: "staff", name: "Bastón", qty: 1 },
      { catalogId: "travelers_pack", name: "Bolsa de viajero", qty: 1 },
      { catalogId: null, name: "10 po", qty: 1 },
    ],
    feature: {
      name: "Camino de Nadie",
      description: "Duermes al aire libre sin perder tiempo de preparación y te desplazas por el terreno sin ser rastreado.",
    },
  },
  {
    id: "marinheiro",
    name: "Marinero",
    skillChoices: { count: 2, options: ["athletics", "perception"] },
    toolProficiencies: ["kit de navegante"],
    languages: [],
    equipment: [
      { catalogId: "sailors_kit", name: "Kit de marinero", qty: 1 },
      { catalogId: null, name: "10 po", qty: 1 },
    ],
    feature: {
      name: "Pasaje en Barco",
      description: "Los barcos ofrecen transporte gratuito a cambio de tu ayuda en la tripulación.",
    },
  },
  {
    id: "sabio",
    name: "Sabio",
    skillChoices: { count: 2, options: ["arcana", "history"] },
    toolProficiencies: ["kit de escriba"],
    languages: [],
    languageChoices: { count: 2 },
    equipment: [
      { catalogId: "ink", name: "Tinta", qty: 1 },
      { catalogId: null, name: "8 po y pergaminhos", qty: 1 },
    ],
    feature: {
      name: "Descubrimiento Científico",
      description: "Tienes acceso a lugares de aprendizaje y mentores de tu área de estudio.",
    },
  },
  {
    id: "nobre",
    name: "Noble",
    skillChoices: { count: 2, options: ["history", "persuasion"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    languageChoices: { count: 1 },
    equipment: [
      { catalogId: "fine_clothes", name: "Ropa fina", qty: 1 },
      { catalogId: null, name: "25 po y un anillo familiar", qty: 1 },
    ],
    feature: {
      name: "Posición de Privilegio",
      description: "Las personas de rango inferior te tratan con respeto y te proporcionan información.",
    },
  },
  {
    id: "bufao",
    name: "Bufón",
    skillChoices: { count: 2, options: ["deception", "sleight_of_hand"] },
    toolProficiencies: ["disfraces"],
    languages: [],
    equipment: [
      { catalogId: "dagger", name: "Daga", qty: 2 },
      { catalogId: "dice_set", name: "Kit de dados", qty: 1 },
      { catalogId: null, name: "15 po", qty: 1 },
    ],
    feature: {
      name: "Bolsillo Amistoso",
      description: "La gente confía en ti lo suficiente como para guardarte objetos preciados.",
    },
  },
];

export function getBackground(id: string): BackgroundDef | undefined {
  return BACKGROUNDS.find((b) => b.id === id);
}
