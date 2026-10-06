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
    name: "Acolyte",
    skillChoices: { count: 2, options: ["insight", "religion"] },
    toolProficiencies: [],
    languages: [],
    languageChoices: { count: 2 },
    equipment: [
      { catalogId: "holy_symbol", name: "Holy symbol", qty: 1 },
      { catalogId: "incense", name: "Incense", qty: 5 },
      { catalogId: "robes", name: "Robes", qty: 1 },
      { catalogId: null, name: "15 gp", qty: 1 },
    ],
    feature: {
      name: "Shelter of the Faithful",
      description: "You have a position in a temple and can seek shelter and receive aid from other temples.",
    },
  },
  {
    id: "criminoso",
    name: "Criminal",
    skillChoices: { count: 2, options: ["deception", "stealth"] },
    toolProficiencies: ["Thieves' tools"],
    languages: [],
    equipment: [
      { catalogId: "dagger", name: "Dagger", qty: 1 },
      { catalogId: "thieves_tools", name: "Thieves' tools", qty: 1 },
      { catalogId: "crowbar", name: "Crowbar", qty: 1 },
      { catalogId: null, name: "15 gp", qty: 1 },
    ],
    feature: {
      name: "Contact",
      description: "You have a reliable contact in each city with news and opportunities.",
    },
  },
  {
    id: "heroi_do_povo",
    name: "Folk Hero",
    skillChoices: { count: 2, options: ["athletics", "survival"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    equipment: [
      { catalogId: "smiths_tools", name: "Smith's tools", qty: 1 },
      { catalogId: "miners_pick", name: "Miner's pick", qty: 1 },
      { catalogId: "travelers_pack", name: "Traveler's pack", qty: 1 },
      { catalogId: null, name: "10 gp", qty: 1 },
    ],
    feature: {
      name: "Rustic Hospitality",
      description: "Common folk provide help and shelter in exchange for your protection.",
    },
  },
  {
    id: "soldado",
    name: "Soldier",
    skillChoices: { count: 2, options: ["athletics", "intimidation"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    equipment: [
      { catalogId: "insignia", name: "Rank insignia", qty: 1 },
      { catalogId: null, name: "10 gp and an enemy trophy", qty: 1 },
      { catalogId: "dice_set", name: "Dice set", qty: 1 },
    ],
    feature: {
      name: "War Pay",
      description: "Your military rank guarantees a modest pension if you are invalided.",
    },
  },
  {
    id: "erudito",
    name: "Scholar",
    skillChoices: { count: 2, options: ["arcana", "history"] },
    toolProficiencies: ["Calligrapher's supplies"],
    languages: [],
    languageChoices: { count: 2 },
    equipment: [
      { catalogId: "ink", name: "Ink", qty: 1 },
      { catalogId: "quill", name: "Quill", qty: 1 },
      { catalogId: null, name: "8 gp and parchment", qty: 1 },
    ],
    feature: {
      name: "Research",
      description: "You can consult libraries and go unnoticed in institutions of learning.",
    },
  },
  {
    id: "artista",
    name: "Entertainer",
    skillChoices: { count: 2, options: ["acrobatics", "performance"] },
    toolProficiencies: ["Disguise kit"],
    toolChoices: { count: 1 },
    languages: [],
    equipment: [
      { catalogId: "costume", name: "Costume", qty: 1 },
      { catalogId: null, name: "15 gp", qty: 1 },
    ],
    feature: {
      name: "By Popular Demand",
      description: "You always find work at festivals, taverns, and fairs.",
    },
  },
  {
    id: "mercador",
    name: "Guild Merchant",
    skillChoices: { count: 2, options: ["insight", "persuasion"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    languageChoices: { count: 1 },
    equipment: [
      { catalogId: "letter_of_introduction", name: "Letter of introduction", qty: 1 },
      { catalogId: null, name: "15 gp", qty: 1 },
    ],
    feature: {
      name: "Guild Membership",
      description: "The guild provides lodging, contacts, and favors in exchange for future favors.",
    },
  },
  {
    id: "eremita",
    name: "Hermit",
    skillChoices: { count: 2, options: ["medicine", "religion"] },
    toolProficiencies: ["Alchemist's supplies"],
    languages: [],
    languageChoices: { count: 1 },
    equipment: [
      { catalogId: "herbs", name: "Medicinal herbs", qty: 1 },
      { catalogId: null, name: "5 gp and other belongings", qty: 1 },
    ],
    feature: {
      name: "Reclusion",
      description: "People of faith offer you shelter and a hiding place.",
    },
  },
  {
    id: "forasteiro",
    name: "Outlander",
    skillChoices: { count: 2, options: ["nature", "survival"] },
    toolProficiencies: [],
    toolChoices: { count: 1 },
    languages: [],
    languageChoices: { count: 1 },
    equipment: [
      { catalogId: "staff", name: "Staff", qty: 1 },
      { catalogId: "travelers_pack", name: "Traveler's pack", qty: 1 },
      { catalogId: null, name: "10 gp", qty: 1 },
    ],
    feature: {
      name: "Wanderer",
      description: "You sleep outdoors without losing preparation time and move through terrain without being tracked.",
    },
  },
  {
    id: "marinheiro",
    name: "Sailor",
    skillChoices: { count: 2, options: ["athletics", "perception"] },
    toolProficiencies: ["Navigator's tools"],
    languages: [],
    equipment: [
      { catalogId: "sailors_kit", name: "Sailor's kit", qty: 1 },
      { catalogId: null, name: "10 gp", qty: 1 },
    ],
    feature: {
      name: "Ship's Passage",
      description: "Ships offer free transport in exchange for your help with the crew.",
    },
  },
  {
    id: "sabio",
    name: "Sage",
    skillChoices: { count: 2, options: ["arcana", "history"] },
    toolProficiencies: ["Calligrapher's supplies"],
    languages: [],
    languageChoices: { count: 2 },
    equipment: [
      { catalogId: "ink", name: "Ink", qty: 1 },
      { catalogId: null, name: "8 gp and parchment", qty: 1 },
    ],
    feature: {
      name: "Scientific Discovery",
      description: "You have access to places of learning and mentors in your field of study.",
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
      { catalogId: "fine_clothes", name: "Fine clothes", qty: 1 },
      { catalogId: null, name: "25 gp and a family ring", qty: 1 },
    ],
    feature: {
      name: "Position of Privilege",
      description: "People of lower rank treat you with respect and provide information.",
    },
  },
  {
    id: "bufao",
    name: "Charlatan",
    skillChoices: { count: 2, options: ["deception", "sleight_of_hand"] },
    toolProficiencies: ["Disguise kit"],
    languages: [],
    equipment: [
      { catalogId: "dagger", name: "Dagger", qty: 2 },
      { catalogId: "dice_set", name: "Dice set", qty: 1 },
      { catalogId: null, name: "15 gp", qty: 1 },
    ],
    feature: {
      name: "Friendly Pocket",
      description: "People trust you enough to safeguard precious goods.",
    },
  },
];

export function getBackground(id: string): BackgroundDef | undefined {
  return BACKGROUNDS.find((b) => b.id === id);
}
