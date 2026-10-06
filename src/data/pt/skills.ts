import type { AbilityKey, SkillId } from "../../domain/types";

export type SkillDef = {
  id: SkillId;
  name: string;
  ability: AbilityKey;
};

export const SKILLS: SkillDef[] = [
  { id: "acrobatics", name: "Acrobacia", ability: "dex" },
  { id: "animal_handling", name: "Cuidar de Animais", ability: "wis" },
  { id: "arcana", name: "Arcanismo", ability: "int" },
  { id: "athletics", name: "Atletismo", ability: "str" },
  { id: "deception", name: "Enganação", ability: "cha" },
  { id: "history", name: "História", ability: "int" },
  { id: "insight", name: "Intuição", ability: "wis" },
  { id: "intimidation", name: "Intimidação", ability: "cha" },
  { id: "investigation", name: "Investigação", ability: "int" },
  { id: "medicine", name: "Medicina", ability: "wis" },
  { id: "nature", name: "Natureza", ability: "int" },
  { id: "perception", name: "Percepção", ability: "wis" },
  { id: "performance", name: "Atuação", ability: "cha" },
  { id: "persuasion", name: "Persuasão", ability: "cha" },
  { id: "religion", name: "Religião", ability: "int" },
  { id: "sleight_of_hand", name: "Prestidigitação", ability: "dex" },
  { id: "stealth", name: "Furtividade", ability: "dex" },
  { id: "survival", name: "Sobrevivência", ability: "wis" },
];

export function getSkill(id: SkillId | string): SkillDef {
  const skill = SKILLS.find((s) => s.id === id);
  if (!skill) throw new Error(`Perícia desconhecida: ${id}`);
  return skill;
}
