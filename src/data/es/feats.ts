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
  str: "FUER",
  dex: "DES",
  con: "CON",
  int: "INT",
  wis: "SAB",
  cha: "CAR",
};

const STR_DEX: AbilityKey[] = ["str", "dex"];
const STR_CON: AbilityKey[] = ["str", "con"];
const ALL_ABILITIES: AbilityKey[] = ["str", "dex", "con", "int", "wis", "cha"];

export const FEATS: FeatDef[] = [
  { id: "alerta", name: "Alerta", description: "+5 en la iniciativa; no puedes ser sorprendido mientras estés consciente; las criaturas no tienen ventaja en ataques contra ti por estar invisible para ellas." },
  {
    id: "ator",
    name: "Actor",
    description: "+1 en CAR; ventaja en Engaño y Actuación cuando te haces pasar por otra persona; puedes imitar voces y manierismos.",
    abilityBonus: { cha: 1 },
  },
  {
    id: "atleta",
    name: "Atleta",
    description: "Escalar y levantarte tras una caída cuestan la mitad de tu desplazamiento; salto con FUER o DES; +1 en FUER o DES.",
    abilityChoice: { options: STR_DEX },
  },
  { id: "investida", name: "Investida", description: "Tras Dash en línea recta, puedes atacar a una criatura en el camino: +5 de daño o empujarla 10 pies (acción adicional)." },
  {
    id: "especialista_besta",
    name: "Especialista en Ballestas",
    description: "Ignoras la propiedad de recarga; el ataque a distancia con un arma no sufre desventaja por estar a menos de 5 pies; ataque bonus con ballesta de mano.",
  },
  {
    id: "duelista_defensivo",
    name: "Duelista Defensivo",
    description: "Reacción: cuando una criatura te acierta con un ataque cuerpo a cuerpo, sumas tu bonificador de competencia a la CA contra ese ataque.",
    requirements: [{ kind: "ability", ability: "dex", value: 13, label: "DES 13+" }],
  },
  {
    id: "empunhadura_dupla",
    name: "Empuñadura Doble",
    description: "+1 en la CA mientras empuñas armas distintas en cada mano; desenvainas/estudias dos armas a la vez; las armas no necesitan ser ligeras.",
    abilityChoice: { options: STR_DEX },
  },
  {
    id: "explorador_masmorras",
    name: "Explorador de Mazmorras",
    description: "Ventaja en pruebas para encontrar puertas secretas y trampas y para resistir trampas; ignoras la desventaja por oscuridad.",
  },
  {
    id: "duravel",
    name: "Duradero",
    description: "+1 en CON; al usar un dado de vida en un descanso corto o largo, recuperas al menos 1 + mod. CON PV por dado.",
    abilityBonus: { con: 1 },
  },
  {
    id: "adepto_elemental",
    name: "Adepto Elemental",
    description: "Ignoras la resistencia a un tipo de daño elemental a tu elección (fuego, frío, eléctrico, ácido) y las criaturas que salvan contra tu daño elemental aún sufren la mitad.",
    requirements: [{ kind: "spellcasting", label: "capaz de lanzar conjuros" }],
  },
  {
    id: "agarrador",
    name: "Agarrador",
    description: "+1 en FUER; ventaja en ataques contra la criatura que has agarrado; puedes intentar inmovilizar (tú y el objetivo inmovilizados) con tu acción; +1 en FUER.",
    requirements: [{ kind: "ability", ability: "str", value: 13, label: "FUER 13+" }],
    abilityBonus: { str: 1 },
  },
  {
    id: "mestre_armas_pesadas",
    name: "Maestro en Armas Pesadas",
    description: "Al atacar con un arma cuerpo a cuerpo pesada, -5 en el ataque y +10 en el daño; acción adicional: ataque extra al reducir a una criatura a 0 PV.",
  },
  {
    id: "curandeiro",
    name: "Sanador",
    description: "Usar un kit de curación en una criatura cura 1d6 + 4 + tu nivel de personaje PV (una vez por criatura hasta el siguiente descanso corto).",
  },
  {
    id: "lider_inspirador",
    name: "Líder Inspirador",
    description: "+1 en CAR; tras 10 minutos de arenga, los aliados que pueden oírte ganan PV temporales = tu nivel + mod. CAR.",
    requirements: [{ kind: "ability", ability: "cha", value: 13, label: "CAR 13+" }],
    abilityBonus: { cha: 1 },
  },
  {
    id: "mente_aguda",
    name: "Mente Aguda",
    description: "+1 en INT; sabes la hora y la dirección del norte; recuerdas todo lo que has visto/oido hasta el siguiente descanso largo.",
    abilityBonus: { int: 1 },
  },
  {
    id: "linguista",
    name: "Lingüista",
    description: "+1 en INT; aprendes 3 idiomas a tu elección; puedes escribir mensajes cifrados que otros no descifran sin un éxito.",
    requirements: [{ kind: "ability", ability: "int", value: 13, label: "INT 13+" }],
    abilityBonus: { int: 1 },
  },
  {
    id: "afortunado",
    name: "Afortunado",
    description: "3 puntos de suerte (1/ descanso largo): antes o después de tirar un d20 (tuyo o contra ti), vuelves a tirar y eliges; puede dar ventaja/desventaja.",
  },
  {
    id: "iniciacao_magica",
    name: "Iniciación Mágica",
    description: "Eliges una clase: aprendes 2 trucos y 1 conjuro de 1er nivel (componentes verbales y somáticos); puedes lanzar el conjuro como ritual 1/ descanso largo.",
  },
  {
    id: "adepto_marcial",
    name: "Adepto Marcial",
    description: "Aprendes 2 maniobras a tu elección y ganas 1 dado de superioridad d8 para alimentarlas (recupera en descanso corto o largo).",
  },
  {
    id: "movel",
    name: "Móvil",
    description: "+10 pies de desplazamiento; Dash ignora terreno difícil; no provocas ataques de oportunidad de la criatura a la que atacaste cuerpo a cuerpo.",
  },
  {
    id: "armadura_moderada",
    name: "Armadura Moderada",
    description: "+1 en FUER o DES; ganas competencia con armaduras medianas y escudos.",
    requirements: [{ kind: "armor", armor: "leve", label: "competencia con armadura ligera" }],
    abilityChoice: { options: STR_DEX },
  },
  {
    id: "combate_montado",
    name: "Combate Montado",
    description: "Ventaja en ataques contra criaturas montadas y no montadas; puedes redirigir el daño sufrido por tu montura hacia ti (reacción).",
  },
  {
    id: "observador",
    name: "Observador",
    description: "+1 en INT o SAB; +5 en Percepción; +5 en la Percepción pasiva; puedes leer los labios mientras observas a alguien hablar.",
    requirements: [
      { kind: "abilityAny", options: [{ ability: "int", value: 13 }, { ability: "wis", value: 13 }], label: "INT 13+ o SAB 13+" },
    ],
    abilityChoice: { options: ["int", "wis"] },
  },
  {
    id: "mestre_haste",
    name: "Maestro en Armas de Asta",
    description: "Ataque bonus con el extremo del asta (1d4 + mod); ataque de oportunidad cuando una criatura entra al alcance del arma.",
  },
  {
    id: "resiliente",
    name: "Resiliente",
    description: "+1 en un atributo a tu elección y competencia en su tirada de salvación.",
    abilityChoice: { options: ALL_ABILITIES },
  },
  {
    id: "conjurador_ritual",
    name: "Conjurador Ritual",
    description: "Ganas un grimorio con 2 conjuros rituales a tu elección (INT o SAB 13+ según la lista); puedes lanzarlos como ritual.",
    requirements: [
      { kind: "abilityAny", options: [{ ability: "int", value: 13 }, { ability: "wis", value: 13 }], label: "INT 13+ o SAB 13+" },
    ],
  },
  {
    id: "ataque_selvagem",
    name: "Ataque Selvagem",
    description: "Una vez por turno, cuando aciertas con un arma cuerpo a cuerpo, puedes tirar el dado de daño de nuevo y usar el valor mayor.",
  },
  {
    id: "sentinela",
    name: "Centinela",
    description: "El ataque de oportunidad tiene desventaja para el objetivo; el objetivo que has alcanzado cuerpo a cuerpo no se marcha sin provocar un ataque; reacción: atacar a un objetivo a 5 pies que ataca a un aliado.",
  },
  {
    id: "atirador_preciso",
    name: "Tirador Preciso",
    description: "-5 en el ataque y +10 en el daño a distancia; ignoras la cobertura y la desventaja por larga distancia.",
  },
  {
    id: "mestre_escudo",
    name: "Maestro de Escudo",
    description: "Acción adicional: empuñas el escudo para agarrar/empujar; en salvaciones de DES, reduces a la mitad el daño en fallo y a cero en éxito (sin efecto).",
  },
  {
    id: "habilidoso",
    name: "Habilidoso",
    description: "Ganas 3 competencias: pericias o herramientas a tu elección.",
  },
  {
    id: "esconderijo",
    name: "Esconderijo",
    description: "+1 en DES; puedes esconderte incluso solo parcialmente oculto; fallar un ataque a distancia no revela tu posición.",
    requirements: [{ kind: "ability", ability: "dex", value: 13, label: "DES 13+" }],
    abilityBonus: { dex: 1 },
  },
  {
    id: "atirador_magias",
    name: "Tirador de Conjuros",
    description: "Duplica el alcance de los conjuros de ataque a distancia; ignoras la cobertura total; ventaja en ataques con conjuración.",
    requirements: [{ kind: "spellcasting", label: "capaz de lanzar conjuros" }],
  },
  {
    id: "brigao_taverna",
    name: "Brigón de Taberna",
    description: "+1 en FUER o CON; daño 1d4+mod con golpes sin armas; competencia con armas improvisadas; acción adicional: agarrar tras acertar con un improvisado cuerpo a cuerpo.",
    abilityChoice: { options: STR_CON },
  },
  { id: "durao", name: "Duro", description: "Tu máximo de PV aumenta en 2 por cada nivel de personaje.", hpPerLevel: 2 },
  {
    id: "mago_guerra",
    name: "Mago de Guerra",
    description: "Ventaja en pruebas para mantener la concentración; lanzas conjuros con la mano ocupada; reacción: lanzas un conjuro de ataque cuando una criatura entra a tu alcance.",
    requirements: [{ kind: "spellcasting", label: "capaz de lanzar conjuros" }],
  },
  {
    id: "mestre_armas",
    name: "Maestro en Armas",
    description: "+1 en FUER o DES; competencia con 4 armas sencillas o cuerpo a cuerpo a tu elección.",
    abilityChoice: { options: STR_DEX },
  },
  {
    id: "armadura_pesada",
    name: "Armadura Pesada",
    description: "+1 en FUER; mientras llevas armadura pesada, restas 3 del daño de contundente, perforante y cortante de ataques no mágicos.",
    requirements: [{ kind: "ability", ability: "str", value: 13, label: "FUER 13+" }],
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
