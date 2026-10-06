export type SchoolDef = {
  id: string;
  name: string;
  description: string;
  examples: string[];
};

export const SCHOOLS: SchoolDef[] = [
  {
    id: "abjuracao",
    name: "Abjuration",
    description:
      "Protective spells by nature, though some have aggressive uses: they create magical barriers, negate harmful effects, wound intruders, or banish creatures to other planes.",
    examples: ["Shield", "Dispel Magic", "Protection from Evil and Good", "Wall of Force"],
  },
  {
    id: "conjuracao",
    name: "Conjuration",
    description:
      "They involve transporting objects and creatures from one place to another: they summon creatures or objects next to the caster, allow teleportation, or create things out of nothing.",
    examples: ["Mage Hand", "Dimension Door", "Conjure Creatures", "Create or Destroy Water"],
  },
  {
    id: "adivinhacao",
    name: "Divination",
    description:
      "They reveal information: forgotten secrets, visions of the future, the location of hidden things, the truth behind illusions, or visions of distant people and places.",
    examples: ["Detect Magic", "Augury", "True Seeing", "Commune"],
  },
  {
    id: "encantamento",
    name: "Enchantment",
    description:
      "They affect the minds of others, influencing or controlling their behavior: they make enemies see the caster as a friend, force creatures to act, or control them like puppets.",
    examples: ["Charm Person", "Suggestion", "Confusion", "Command"],
  },
  {
    id: "evocacao",
    name: "Evocation",
    description:
      "They harness magical energy to produce the desired effect: they call forth bursts of fire or lightning and channel positive energy to heal wounds.",
    examples: ["Fireball", "Lightning Bolt", "Healing Word", "Thunderwave"],
  },
  {
    id: "illusao",
    name: "Illusion",
    description:
      "They deceive the senses or the mind: they make people see what does not exist, not see what does, hear ghostly noises, or remember things that never happened.",
    examples: ["Minor Illusion", "Silent Image", "Major Image", "Dancing Lights"],
  },
  {
    id: "necromancia",
    name: "Necromancy",
    description:
      "They manipulate the energies of life and death: they grant an extra reserve of vital force, drain energy from another creature, create undead, or return the dead to life.",
    examples: ["Animate Dead", "Life Drain", "Speak with Dead", "Spectral Hand"],
  },
  {
    id: "transmutacao",
    name: "Transmutation",
    description:
      "They alter the properties of a creature, object, or environment: they transform enemies into harmless creatures, strengthen allies, move objects, or improve healing.",
    examples: ["Polymorph", "Haste", "Accelerate", "Animal Fortitude"],
  },
];

export function getSchool(id: string | undefined | null): SchoolDef | undefined {
  if (!id) return undefined;
  return SCHOOLS.find((s) => s.id === id);
}
