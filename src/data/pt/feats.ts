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
  str: "FOR",
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
  { id: "alerta", name: "Alerta", description: "+5 na iniciativa; não pode ser surpreendido enquanto estiver consciente; criaturas não têm vantagem em ataques contra você por estar não visto." },
  {
    id: "ator",
    name: "Ator",
    description: "+1 em CAR; vantagem em Engano e Performance quando se passa por outra pessoa; pode imitar vozes e mannerismos.",
    abilityBonus: { cha: 1 },
  },
  {
    id: "atleta",
    name: "Atleta",
    description: "Subir e se levantar da queda custam metade do deslocamento; salto com FOR ou DES; +1 em FOR ou DES.",
    abilityChoice: { options: STR_DEX },
  },
  { id: "investida", name: "Investida", description: "Após Dash em linha reta, pode atacar uma criatura no caminho: +5 de dano ou empurrá-la 10 pés (ação bônus)." },
  {
    id: "especialista_besta",
    name: "Especialista em Besta",
    description: "Ignora a propriedade de recarga; ataque à distância com arma não sofre desvantagem por estar a menos de 5 pés; ataque bônus com besta de mão.",
  },
  {
    id: "duelista_defensivo",
    name: "Duelista Defensivo",
    description: "Reação: quando uma criatura acerta você com ataque corpo a corpo, soma seu bônus de proficiência à CA contra aquele ataque.",
    requirements: [{ kind: "ability", ability: "dex", value: 13, label: "DES 13+" }],
  },
  {
    id: "empunhadura_dupla",
    name: "Empunhadura Dupla",
    description: "+1 na CA enquanto empunha armas diferentes em cada mão; saca/estuda duas armas de uma vez; armas não precisam ser leves.",
    abilityChoice: { options: STR_DEX },
  },
  {
    id: "explorador_masmorras",
    name: "Explorador de Masmorras",
    description: "Vantagem em testes para encontrar portas secretas, armadilhas e para resistir a armadilhas; ignora desvantagem por escuridão.",
  },
  {
    id: "duravel",
    name: "Durável",
    description: "+1 em CON; ao usar um dado de vida em descanso curto ou longo, recupera pelo menos 1 + mod. CON PV por dado.",
    abilityBonus: { con: 1 },
  },
  {
    id: "adepto_elemental",
    name: "Adepto Elemental",
    description: "Ignora resistência a um tipo de dano elemental à sua escolha (fogo, frio, elétrico, ácido) e criaturas que salvam contra seu dano elemental ainda sofrem metade.",
    requirements: [{ kind: "spellcasting", label: "capaz de conjurar magias" }],
  },
  {
    id: "agarrador",
    name: "Agarrador",
    description: "+1 em FOR; vantagem em ataques contra criatura que você agarrou; pode tentar prender (você e o alvo presos) com ação; +1 em FOR.",
    requirements: [{ kind: "ability", ability: "str", value: 13, label: "FOR 13+" }],
    abilityBonus: { str: 1 },
  },
  {
    id: "mestre_armas_pesadas",
    name: "Mestre de Armas Pesadas",
    description: "Ao atacar com arma corpo a corpo pesada, -5 no ataque e +10 no dano; ação bônus: ataque extra ao reduzir uma criatura a 0 PV.",
  },
  {
    id: "curandeiro",
    name: "Curandeiro",
    description: "Usar kit de cura em uma criatura cura 1d6 + 4 + seu nível de personagem PV (uma vez por criatura até o próximo descanso curto).",
  },
  {
    id: "lider_inspirador",
    name: "Líder Inspirador",
    description: "+1 em CAR; após 10 minutos de fala, aliados que podem ouvir você ganham PV temporários = seu nível + mod. CAR.",
    requirements: [{ kind: "ability", ability: "cha", value: 13, label: "CAR 13+" }],
    abilityBonus: { cha: 1 },
  },
  {
    id: "mente_aguda",
    name: "Mente Aguda",
    description: "+1 em INT; sabe a hora e a direção do norte; lembra de tudo que viu/ouviu até o próximo descanso longo.",
    abilityBonus: { int: 1 },
  },
  {
    id: "linguista",
    name: "Linguista",
    description: "+1 em INT; aprende 3 idiomas à escolha; pode escrever mensagens cifradas que outros não decifram sem sucesso.",
    requirements: [{ kind: "ability", ability: "int", value: 13, label: "INT 13+" }],
    abilityBonus: { int: 1 },
  },
  {
    id: "afortunado",
    name: "Afortunado",
    description: "3 pontos de sorte (1/ descanso longo): antes ou depois de rolar um d20 (seu ou contra você), rola de novo e escolhe; pode dar vantagem/desvantagem.",
  },
  {
    id: "iniciacao_magica",
    name: "Iniciação Mágica",
    description: "Escolhe uma classe: aprende 2 truques e 1 magia de 1º nível (componentes verbais e somáticos); pode conjurar a magia como ritual 1/ descanso longo.",
  },
  {
    id: "adepto_marcial",
    name: "Adepto Marcial",
    description: "Aprende 2 manobras à escolha e ganha 1 dado de superioridade d8 para alimentá-las (recupera em descanso curto ou longo).",
  },
  {
    id: "movel",
    name: "Móvel",
    description: "+10 pés de deslocamento; Dash ignora terreno difícil; não provoca ataques de oportunidade de criatura que você atacou corpo a corpo.",
  },
  {
    id: "armadura_moderada",
    name: "Armadura Moderada",
    description: "+1 em FOR ou DES; ganha proficiência com armaduras médias e escudos.",
    requirements: [{ kind: "armor", armor: "leve", label: "proficiência com armadura leve" }],
    abilityChoice: { options: STR_DEX },
  },
  {
    id: "combate_montado",
    name: "Combate Montado",
    description: "Vantagem em ataques contra criatura montada e não montada; pode redirecionar dano sofrido pelo seu monte para você (reação).",
  },
  {
    id: "observador",
    name: "Observador",
    description: "+1 em INT ou SAB; +5 em Percepção; +5 na Percepção passiva; pode ler lábios enquanto observa alguém falar.",
    requirements: [
      { kind: "abilityAny", options: [{ ability: "int", value: 13 }, { ability: "wis", value: 13 }], label: "INT 13+ ou SAB 13+" },
    ],
    abilityChoice: { options: ["int", "wis"] },
  },
  {
    id: "mestre_haste",
    name: "Mestre de Armas de Haste",
    description: "Ataque bônus com a extremidade da haste (1d4 + mod); ataque de oportunidade quando criatura entra no alcance da arma.",
  },
  {
    id: "resiliente",
    name: "Resiliente",
    description: "+1 em um atributo à sua escolha e proficiência na salvaguarda dele.",
    abilityChoice: { options: ALL_ABILITIES },
  },
  {
    id: "conjurador_ritual",
    name: "Conjurador Ritual",
    description: "Ganha um grimório com 2 magias rituais à escolha (INT ou SAB 13+ conforme a lista); pode conjugá-las como ritual.",
    requirements: [
      { kind: "abilityAny", options: [{ ability: "int", value: 13 }, { ability: "wis", value: 13 }], label: "INT 13+ ou SAB 13+" },
    ],
  },
  {
    id: "ataque_selvagem",
    name: "Ataque Selvagem",
    description: "Uma vez por turno, quando acerta com arma corpo a corpo, pode rolar o dado de dano de novo e usar o maior valor.",
  },
  {
    id: "sentinela",
    name: "Sentinela",
    description: "Ataque de oportunidade tem desvantagem para o alvo; alvo que você atingiu corpo a corpo não se afasta sem provocar ataque; reação: atacar alvo a 5 pés que ataca aliado.",
  },
  {
    id: "atirador_preciso",
    name: "Atirador Preciso",
    description: "-5 no ataque e +10 no dano à distância; ignora cobertura e desvantagem por longa distância.",
  },
  {
    id: "mestre_escudo",
    name: "Mestre de Escudo",
    description: "Ação bônus: empuca escudo para agarrar/empurrar; em salvaguardas de DES, toma metade do dano em falha e nenhum em sucesso (sem efeito).",
  },
  {
    id: "habilidoso",
    name: "Habilidoso",
    description: "Ganha 3 proficiências: perícias ou ferramentas à sua escolha.",
  },
  {
    id: "esconderijo",
    name: "Esconderijo",
    description: "+1 em DES; pode se esconder mesmo apenas parcialmente obscurecido; errar ataque à distância não revela sua posição.",
    requirements: [{ kind: "ability", ability: "dex", value: 13, label: "DES 13+" }],
    abilityBonus: { dex: 1 },
  },
  {
    id: "atirador_magias",
    name: "Atirador de Magias",
    description: "Dobra o alcance de magias de ataque à distância; ignora cobertura total; vantagem em ataques com conjuração.",
    requirements: [{ kind: "spellcasting", label: "capaz de conjurar magias" }],
  },
  {
    id: "brigao_taverna",
    name: "Brigão de Taverna",
    description: "+1 em FOR ou CON; dano 1d4+mod em desarmados; proficiência com armas improvisadas; ação bônus: agarrar após acertar com improvisada corpo a corpo.",
    abilityChoice: { options: STR_CON },
  },
  { id: "durao", name: "Durão", description: "Seu máximo de PV aumenta em 2 para cada nível de personagem.", hpPerLevel: 2 },
  {
    id: "mago_guerra",
    name: "Mago de Guerra",
    description: "Vantagem em testes para manter concentração; conjura magias com mão ocupada; reação: conjura magia de ataque quando criatura entra no alcance.",
    requirements: [{ kind: "spellcasting", label: "capaz de conjurar magias" }],
  },
  {
    id: "mestre_armas",
    name: "Mestre de Armas",
    description: "+1 em FOR ou DES; proficiência com 4 armas simples ou corpo a corpo à sua escolha.",
    abilityChoice: { options: STR_DEX },
  },
  {
    id: "armadura_pesada",
    name: "Armadura Pesada",
    description: "+1 em FOR; enquanto veste armadura pesada, subtrai 3 do dano de concussão, perfuração e corte de ataques não mágicos.",
    requirements: [{ kind: "ability", ability: "str", value: 13, label: "FOR 13+" }],
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
