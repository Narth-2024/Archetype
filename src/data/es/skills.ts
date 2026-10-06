import type { AbilityKey, SkillId } from "../../domain/types";

export type SkillDef = {
  id: SkillId;
  name: string;
  ability: AbilityKey;
};

export const SKILLS: SkillDef[] = [
  { id: "acrobatics", name: "Acrobacias", ability: "dex" },
  { id: "animal_handling", name: "Cuidar de animales", ability: "wis" },
  { id: "arcana", name: "Arcanos", ability: "int" },
  { id: "athletics", name: "Atletismo", ability: "str" },
  { id: "deception", name: "Engaño", ability: "cha" },
  { id: "history", name: "Historia", ability: "int" },
  { id: "insight", name: "Perspicacia", ability: "wis" },
  { id: "intimidation", name: "Intimidación", ability: "cha" },
  { id: "investigation", name: "Investigación", ability: "int" },
  { id: "medicine", name: "Medicina", ability: "wis" },
  { id: "nature", name: "Naturaleza", ability: "int" },
  { id: "perception", name: "Percepción", ability: "wis" },
  { id: "performance", name: "Actuación", ability: "cha" },
  { id: "persuasion", name: "Persuasión", ability: "cha" },
  { id: "religion", name: "Religión", ability: "int" },
  { id: "sleight_of_hand", name: "Juego de manos", ability: "dex" },
  { id: "stealth", name: "Sigilo", ability: "dex" },
  { id: "survival", name: "Supervivencia", ability: "wis" },
];

export function getSkill(id: SkillId | string): SkillDef {
  const skill = SKILLS.find((s) => s.id === id);
  if (!skill) throw new Error(`Pericia desconocida: ${id}`);
  return skill;
}
