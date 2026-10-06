import type { AbilityKey } from "../../domain/types";

export type FeatRequirement =
  | { kind: "ability"; ability: AbilityKey; value: number; label: string }
  | { kind: "abilityAny"; options: { ability: AbilityKey; value: number }[]; label: string }
  | { kind: "armor"; armor: "leve" | "media" | "pesada"; label: string }
  | { kind: "spellcasting"; label: string };

export type FeatDef = {
  id: string;
  name: string;
  description: string;
  requirements?: FeatRequirement[];
  abilityBonus?: Partial<Record<AbilityKey, number>>;
  abilityChoice?: { options: AbilityKey[] };
  hpPerLevel?: number;
};

export const ABILITY_PT: Record<AbilityKey, string> = {
  str: "STR",
  dex: "DEX",
  con: "CON",
  int: "INT",
  wis: "WIS",
  cha: "CHA",
};

const STR_DEX: AbilityKey[] = ["str", "dex"];
const STR_CON: AbilityKey[] = ["str", "con"];
const ALL_ABILITIES: AbilityKey[] = ["str", "dex", "con", "int", "wis", "cha"];

export const FEATS: FeatDef[] = [
  { id: "alerta", name: "Alert", description: "+5 to initiative; can't be surprised while conscious; creatures don't have advantage on attacks against you for being unseen." },
  {
    id: "ator",
    name: "Actor",
    description: "+1 CHA; advantage on Deception and Performance when passing yourself off as someone else; you can mimic voices and mannerisms.",
    abilityBonus: { cha: 1 },
  },
  {
    id: "atleta",
    name: "Athlete",
    description: "Climbing and standing up from prone cost half your speed; jump with STR or DEX; +1 STR or DEX.",
    abilityChoice: { options: STR_DEX },
  },
  { id: "investida", name: "Charger", description: "After Dash in a straight line, you can attack a creature in the path: +5 damage or push it 10 feet (bonus action)." },
  {
    id: "especialista_besta",
    name: "Crossbow Expert",
    description: "Ignores the loading property; ranged weapon attacks don't suffer disadvantage for being within 5 feet; bonus action attack with a hand crossbow.",
  },
  {
    id: "duelista_defensivo",
    name: "Defensive Duelist",
    description: "Reaction: when a creature hits you with a melee attack, add your proficiency bonus to your AC against that attack.",
    requirements: [{ kind: "ability", ability: "dex", value: 13, label: "DEX 13+" }],
  },
  {
    id: "empunhadura_dupla",
    name: "Dual Wielder",
    description: "+1 AC while you wield a different weapon in each hand; you can draw or stow two weapons at once; weapons don't need to be light.",
    abilityChoice: { options: STR_DEX },
  },
  {
    id: "explorador_masmorras",
    name: "Dungeon Delver",
    description: "Advantage on checks to find secret doors and traps and to resist traps; ignores disadvantage from darkness.",
  },
  {
    id: "duravel",
    name: "Durable",
    description: "+1 CON; when you spend a Hit Die on a short or long rest, you regain at least 1 + CON mod hit points per die.",
    abilityBonus: { con: 1 },
  },
  {
    id: "adepto_elemental",
    name: "Elemental Adept",
    description: "Ignores resistance to one elemental damage type of your choice (fire, cold, lightning, acid), and creatures that save against your elemental damage still take half.",
    requirements: [{ kind: "spellcasting", label: "able to cast spells" }],
  },
  {
    id: "agarrador",
    name: "Grappler",
    description: "+1 STR; advantage on attacks against a creature you have grappled; you can try to pin (you and the target restrained) as an action; +1 STR.",
    requirements: [{ kind: "ability", ability: "str", value: 13, label: "STR 13+" }],
    abilityBonus: { str: 1 },
  },
  {
    id: "mestre_armas_pesadas",
    name: "Great Weapon Master",
    description: "When attacking with a heavy melee weapon, -5 to the attack and +10 to the damage; bonus action: extra attack when you reduce a creature to 0 hit points.",
  },
  {
    id: "curandeiro",
    name: "Healer",
    description: "Using a healer's kit on a creature heals 1d6 + 4 + your character level hit points (once per creature until the next short rest).",
  },
  {
    id: "lider_inspirador",
    name: "Inspiring Leader",
    description: "+1 CHA; after a 10-minute speech, allies who can hear you gain temporary hit points equal to your level + CHA mod.",
    requirements: [{ kind: "ability", ability: "cha", value: 13, label: "CHA 13+" }],
    abilityBonus: { cha: 1 },
  },
  {
    id: "mente_aguda",
    name: "Keen Mind",
    description: "+1 INT; you know the time and the direction of north; you remember everything you saw or heard until the next long rest.",
    abilityBonus: { int: 1 },
  },
  {
    id: "linguista",
    name: "Linguist",
    description: "+1 INT; learns 3 languages of your choice; you can write coded messages that others fail to decipher.",
    requirements: [{ kind: "ability", ability: "int", value: 13, label: "INT 13+" }],
    abilityBonus: { int: 1 },
  },
  {
    id: "afortunado",
    name: "Lucky",
    description: "3 luck points (1/long rest): before or after rolling a d20 (yours or against you), roll again and choose; you can grant advantage or disadvantage.",
  },
  {
    id: "iniciacao_magica",
    name: "Magic Initiate",
    description: "Choose a class: learns 2 cantrips and 1 1st-level spell (verbal and somatic components); you can cast the spell as a ritual 1/long rest.",
  },
  {
    id: "adepto_marcial",
    name: "Martial Adept",
    description: "Learns 2 maneuvers of your choice and gains 1 d8 superiority die to fuel them (recovers on a short or long rest).",
  },
  {
    id: "movel",
    name: "Mobile",
    description: "+10 feet of speed; Dash ignores difficult terrain; you don't provoke opportunity attacks from a creature you attacked in melee.",
  },
  {
    id: "armadura_moderada",
    name: "Medium Armor Master",
    description: "+1 STR or DEX; gains proficiency with medium armor and shields.",
    requirements: [{ kind: "armor", armor: "leve", label: "proficiency with light armor" }],
    abilityChoice: { options: STR_DEX },
  },
  {
    id: "combate_montado",
    name: "Mounted Combatant",
    description: "Advantage on attacks against a mounted and an unmounted creature; you can redirect damage taken by your mount to yourself (reaction).",
  },
  {
    id: "observador",
    name: "Observant",
    description: "+1 INT or WIS; +5 to Perception; +5 to passive Perception; you can read lips while watching someone speak.",
    requirements: [
      { kind: "abilityAny", options: [{ ability: "int", value: 13 }, { ability: "wis", value: 13 }], label: "INT 13+ or WIS 13+" },
    ],
    abilityChoice: { options: ["int", "wis"] },
  },
  {
    id: "mestre_haste",
    name: "Polearm Master",
    description: "Bonus action attack with the butt end of the polearm (1d4 + mod); opportunity attack when a creature enters the weapon's reach.",
  },
  {
    id: "resiliente",
    name: "Resilient",
    description: "+1 to one ability of your choice and proficiency in its saving throw.",
    abilityChoice: { options: ALL_ABILITIES },
  },
  {
    id: "conjurador_ritual",
    name: "Ritual Caster",
    description: "Gain a spellbook with 2 ritual spells of your choice (INT or WIS 13+ depending on the list); you can cast them as rituals.",
    requirements: [
      { kind: "abilityAny", options: [{ ability: "int", value: 13 }, { ability: "wis", value: 13 }], label: "INT 13+ or WIS 13+" },
    ],
  },
  {
    id: "ataque_selvagem",
    name: "Savage Attacker",
    description: "Once per turn, when you hit with a melee weapon, you can roll the damage die again and use the higher roll.",
  },
  {
    id: "sentinela",
    name: "Sentinel",
    description: "Opportunity attacks have disadvantage for the target; a target you hit in melee can't move away without provoking an attack; reaction: attack a target within 5 feet that attacks an ally.",
  },
  {
    id: "atirador_preciso",
    name: "Sharpshooter",
    description: "-5 to the attack and +10 to ranged damage; ignores cover and disadvantage from long range.",
  },
  {
    id: "mestre_escudo",
    name: "Shield Master",
    description: "Bonus action: shove with your shield; on DEX saves, you take half the damage on a failure and none on a success (no effect).",
  },
  {
    id: "habilidoso",
    name: "Skilled",
    description: "Gain 3 proficiencies: skills or tools of your choice.",
  },
  {
    id: "esconderijo",
    name: "Skulker",
    description: "+1 DEX; you can hide even when only lightly obscured; missing a ranged attack doesn't reveal your position.",
    requirements: [{ kind: "ability", ability: "dex", value: 13, label: "DEX 13+" }],
    abilityBonus: { dex: 1 },
  },
  {
    id: "atirador_magias",
    name: "Spell Sniper",
    description: "Doubles the range of ranged attack spells; ignores total cover; advantage on attacks with conjuration.",
    requirements: [{ kind: "spellcasting", label: "able to cast spells" }],
  },
  {
    id: "brigao_taverna",
    name: "Tavern Brawler",
    description: "+1 STR or CON; 1d4+mod damage when unarmed; proficiency with improvised weapons; bonus action: grapple after hitting with an improvised melee weapon.",
    abilityChoice: { options: STR_CON },
  },
  { id: "durao", name: "Tough", description: "Your hit point maximum increases by 2 for each character level.", hpPerLevel: 2 },
  {
    id: "mago_guerra",
    name: "War Caster",
    description: "Advantage on checks to maintain concentration; you can cast spells with your hands full; reaction: cast an attack spell when a creature enters your reach.",
    requirements: [{ kind: "spellcasting", label: "able to cast spells" }],
  },
  {
    id: "mestre_armas",
    name: "Weapon Master",
    description: "+1 STR or DEX; proficiency with 4 simple or melee weapons of your choice.",
    abilityChoice: { options: STR_DEX },
  },
  {
    id: "armadura_pesada",
    name: "Heavy Armor Master",
    description: "+1 STR; while you wear heavy armor, subtract 3 from the bludgeoning, piercing, and slashing damage of nonmagical attacks.",
    requirements: [{ kind: "ability", ability: "str", value: 13, label: "STR 13+" }],
    abilityBonus: { str: 1 },
  },
];

export function getFeat(id: string | undefined | null): FeatDef | undefined {
  if (!id) return undefined;
  const base = id.split(":")[0];
  return FEATS.find((f) => f.id === base);
}

export type FeatRef = { featId: string; ability?: AbilityKey };

export function parseFeatRef(ref: string): FeatRef {
  const [featId, ability] = ref.split(":");
  return { featId, ability: ability as AbilityKey | undefined };
}

export function buildFeatRef(featId: string, ability?: AbilityKey): string {
  return ability ? `${featId}:${ability}` : featId;
}

export type FeatContext = {
  abilities: Record<AbilityKey, number>;
  armorProficiencies: string[];
  canCastSpells: boolean;
};

export function featUnmetRequirements(feat: FeatDef, ctx: FeatContext): string[] {
  const missing: string[] = [];
  for (const req of feat.requirements ?? []) {
    if (req.kind === "ability") {
      if ((ctx.abilities[req.ability] ?? 0) < req.value) missing.push(req.label);
    } else if (req.kind === "abilityAny") {
      const ok = req.options.some((o) => (ctx.abilities[o.ability] ?? 0) >= o.value);
      if (!ok) missing.push(req.label);
    } else if (req.kind === "armor") {
      if (!ctx.armorProficiencies.includes(req.armor)) missing.push(req.label);
    } else if (req.kind === "spellcasting") {
      if (!ctx.canCastSpells) missing.push(req.label);
    }
  }
  return missing;
}

export function featAbilityBonus(feat: FeatDef, ref: FeatRef): Partial<Record<AbilityKey, number>> {
  if (feat.abilityBonus) return feat.abilityBonus;
  if (feat.abilityChoice && ref.ability && feat.abilityChoice.options.includes(ref.ability)) {
    return { [ref.ability]: 1 };
  }
  return {};
}
