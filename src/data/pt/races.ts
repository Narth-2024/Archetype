import type { AbilityKey, SkillId } from "../../domain/types";

export type TraitDef = { name: string; description: string };

export type RaceDef = {
  id: string;
  name: string;
  source: string;
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
  source: string;
  abilityBonus?: Partial<Record<AbilityKey, number>>;
  flexible?: { count: number; amount: number };
  replacesAbilityBonus?: boolean;
  replacesTraits?: boolean;
  speed?: number;
  darkvision?: number | null;
  languages?: string[];
  proficiencies?: { armors?: string[]; weapons?: string[]; skills?: SkillId[] };
  skillChoices?: { count: number; options: SkillId[] | "any" };
  traits: TraitDef[];
};

const ASI_FLOATING: TraitDef = {
  name: "Aumento de Atributo",
  description:
    "Aumente um atributo em +2 e outro em +1, ou três atributos diferentes em +1 (etapa de atributos; a ficha distribui como +1 em três escolhas).",
};

export const RACES: RaceDef[] = [
  {
    id: "humano",
    name: "Humano",
    source: "phb",
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
          "Ganha +1 em todos os atributos. A sub-raça variante substitui este bônus por +1 em dois atributos à escolha.",
      },
    ],
  },
  {
    id: "anao",
    name: "Anão",
    source: "phb",
    speed: 25,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { con: 2 } },
    languages: ["Comum", "Anão"],
    proficiencies: {
      weapons: ["machado_de_batalha", "machado_de_mao", "martelo_leve", "machado_guerra"],
    },
    traits: [
      {
        name: "Velocidade com Armadura Pesada",
        description:
          "Seu deslocamento não é reduzido por vestir armadura pesada.",
      },
      {
        name: "Resiliência Anã",
        description:
          "Vantagem em salvar para evitar ou acabar com o estado envenenado e resistência a dano por veneno.",
      },
      {
        name: "Treino de Combate Anão",
        description:
          "Proficiente com machados de batalha, machados de guerra, machados de mão e martelos leves.",
      },
      {
        name: "Cura de Pedra",
        description:
          "Ao fazer um teste de História relacionado a pedra ou a construção subterrânea, soma o dobro da proficiência (se já tiver).",
      },
      {
        name: "Ferramentas de Artesão",
        description:
          "Proficiente com ferramentas de artesão à sua escolha (ex.: ferreiro, cervejeiro ou pedreiro).",
      },
    ],
  },
  {
    id: "elfo",
    name: "Elfo",
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Comum", "Élfico"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Sentidos Aguçados",
        description:
          "Proficiente em Percepção e vantagem em testes de Percepção que dependem da visão.",
      },
      {
        name: "Ancestral Feérico",
        description:
          "Vantagem em salvar para evitar ou acabar com o estado encantado e magia não pode fazer você dormir.",
      },
      {
        name: "Transe",
        description:
          "Não precisa dormir; medita por 4 horas para receber os benefícios de um descanso longo e permanece consciente.",
      },
    ],
  },
  {
    id: "halfling",
    name: "Halfling",
    source: "phb",
    speed: 25,
    darkvision: null,
    size: "Pequeno",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Comum", "Halfling"],
    proficiencies: {},
    traits: [
      {
        name: "Afortunado",
        description:
          "Quando rolar 1 em um ataque, teste de habilidade ou salvar, pode rolar de novo e deve usar o novo resultado.",
      },
      {
        name: "Bravura",
        description: "Vantagem em salvar contra medo.",
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
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { cha: 2 }, flexible: { count: 2, amount: 1 } },
    languages: ["Comum", "Élfico", "Outro à escolha"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      {
        name: "Versatilidade Meio-Elfa",
        description:
          "Ganha +1 em dois atributos à escolha (etapa de atributos) e duas perícias à escolha (etapa de perícias). Alternativamente, o manual permite trocar por treino com armas élficas, um truque, deslocamento de 35 pés, Máscara da Natureza, Magia Drow ou natação.",
      },
      {
        name: "Ancestral Feérico",
        description:
          "Vantagem em salvar contra seres feéricos e não pode ser encantado por eles; magia não pode fazer você dormir.",
      },
      {
        name: "Visão Crepuscular",
        description: "Enxerga em 60 pés na penumbra e 15 pés no escuro.",
      },
    ],
  },
  {
    id: "meio_orco",
    name: "Meio-Orc",
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { str: 2, con: 1 } },
    languages: ["Comum", "Orc"],
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Ameaçador",
        description: "Proficiente em Intimidação.",
      },
      {
        name: "Incansável",
        description:
          "Quando chega a 0 PV mas não morre, volta a 1 PV (uma vez por descanso longo).",
      },
      {
        name: "Fúria Selvagem",
        description:
          "Em ataques corpo a corpo, causa 1d6 de dano extra acima do normal (uma vez por rodada).",
      },
    ],
  },
  {
    id: "gnomo",
    name: "Gnomo",
    source: "phb",
    speed: 25,
    darkvision: 60,
    size: "Pequeno",
    abilityBonus: { fixed: { int: 2 } },
    languages: ["Comum", "Gnômico"],
    proficiencies: {},
    traits: [
      {
        name: "Engenhosidade",
        description:
          "Vantagem em testes de Inteligência (Arcanismo, Engenharia, História, Natureza, Religião).",
      },
    ],
  },
  {
    id: "draconato",
    name: "Draconato",
    source: "phb",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { str: 2, cha: 1 } },
    languages: ["Comum", "Dracônico"],
    proficiencies: {},
    traits: [
      {
        name: "Ancestral Dracônico",
        description:
          "Escolha um tipo de dragão: ele define o dano e a área do seu alito e o tipo de resistência que você ganha.",
      },
      {
        name: "Alito Dragônico",
        description:
          "Como ação, exala energia na área da sua ancestralidade; salvamento (CD 8 + prof + CON), 2d6 de dano (metade com sucesso), aumentando para 3d6 no 6º, 4d6 no 11º e 5d6 no 16º nível; uma vez por descanso curto ou longo.",
      },
      {
        name: "Resistência a Dano",
        description: "Resistência ao tipo de dano da sua ancestralidade.",
      },
    ],
  },
  {
    id: "tiefling",
    name: "Tiefling",
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { cha: 2, int: 1 } },
    languages: ["Comum", "Infernal"],
    proficiencies: {},
    traits: [
      {
        name: "Resistência Infernal",
        description: "Resistência a dano de fogo.",
      },
      {
        name: "Linhagem Infernal",
        description:
          "Escolha uma sub-raça (linhagem) para ganhar seus traços mágicos; a de Asmodeus é a do Manual do Jogador.",
      },
    ],
  },
  {
    id: "genasi",
    name: "Genasi",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [ASI_FLOATING],
  },
  {
    id: "linhagem_personalizada",
    name: "Linhagem Personalizada",
    source: "tce",
    speed: 30,
    darkvision: 60,
    size: "Pequeno ou Médio",
    abilityBonus: { fixed: {}, flexible: { count: 1, amount: 2 } },
    languages: ["Comum"],
    proficiencies: {},
    skillChoices: { count: 1, options: "any" },
    traits: [
      {
        name: "Tipo de Criatura",
        description:
          "Você escolhe o tipo de criatura (o padrão é humanoide), além do tamanho e dos traços abaixo.",
      },
      {
        name: "Traço Variável",
        description:
          "Escolha visão no escuro de 60 pés ou proficiência em uma perícia à sua escolha; esta ficha lista ambos — anote a escolha nas observações.",
      },
      {
        name: "Talento",
        description: "Você começa com um talento (feat) à sua escolha.",
      },
      {
        name: "Aumento de Atributo",
        description: "+2 em um atributo à sua escolha (etapa de atributos).",
      },
    ],
  },
  {
    id: "aarakocra",
    name: "Aarakocra",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Voo",
        description:
          "Suas asas concedem deslocamento de voo igual ao de caminhada (30 pés); não pode voar vestindo armadura média ou pesada.",
      },
      {
        name: "Garras",
        description:
          "Seus ataques desarmados com garras causam 1d6 + modificador de FOR de dano cortante.",
      },
      {
        name: "Invocador do Vento",
        description:
          "A partir do 3º nível, conjura Vento Impetuoso com este traço, sem componentes materiais; uma vez por descanso longo (ou com espaços de magia).",
      },
    ],
  },
  {
    id: "aasimar",
    name: "Aasimar",
    source: "vg",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { cha: 2 } },
    languages: ["Comum", "Celestial"],
    proficiencies: {},
    traits: [
      {
        name: "Resistência Celestial",
        description: "Resistência a dano necrótico e radiante.",
      },
      {
        name: "Mãos Curadoras",
        description:
          "Como ação, toca uma criatura e ela recupera PV iguais ao seu nível; uma vez por descanso longo.",
      },
      {
        name: "Portador da Luz",
        description: "Conhece o truque Luz; CAR é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "metamorfo",
    name: "Metamorfo",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: {
      count: 2,
      options: ["deception", "insight", "intimidation", "performance", "persuasion"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Você é um feérico (não um humanoide).",
      },
      {
        name: "Instintos de Metamorfo",
        description:
          "Proficiente em duas perícias à sua escolha: Enganação, Intuição, Intimidação, Atuação ou Persuasão (etapa de perícias).",
      },
      {
        name: "Mudança de Forma",
        description:
          "Como ação, muda aparência e voz e alterna entre Médio e Pequeno; não pode copiar alguém que nunca viu nem mudar o arranjo dos membros.",
      },
    ],
  },
  {
    id: "fada",
    name: "Fada",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Você é um feérico (não um humanoide).",
      },
      {
        name: "Magia Feérica",
        description:
          "Conhece Pretexto; a partir do 3º nível conjura Fogo Feérico e do 5º Redimensionar com este traço (uma vez por descanso longo cada, ou com espaços de magia); Sab ou Int ou Car é seu atributo.",
      },
      {
        name: "Voo",
        description:
          "Suas asas concedem deslocamento de voo igual ao de caminhada; não pode voar vestindo armadura média ou pesada.",
      },
    ],
  },
  {
    id: "firbolg",
    name: "Firbolg",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Magia Firbolg",
        description:
          "Conjura Detectar Magia e Disfarce Pessoal com este traço (com o disfarce pode parecer até 1 metro maior ou menor); uma vez por descanso longo cada.",
      },
      {
        name: "Passo Oculto",
        description:
          "Como ação bônusa, fica invisível magicamente até o início do próximo turno ou até atacar; usos = bônus de proficiência (descanso longo).",
      },
      {
        name: "Construção Poderosa",
        description:
          "Conta como uma criatura de um tamanho maior para capacidade de carga e peso que empurra ou arrasta.",
      },
      {
        name: "Fala das Feras e das Folhas",
        description:
          "Feras e vegetais entendem suas palavras e você tem vantagem em testes de CAR para influenciá-los.",
      },
    ],
  },
  {
    id: "githyanki",
    name: "Githyanki",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Conhecimento Astral",
        description:
          "Após um descanso longo, ganha proficiência em uma perícia e em uma arma ou ferramenta à escolha, até o fim do próximo descanso longo.",
      },
      {
        name: "Psionica Githyanki",
        description:
          "Conhece Mão Mágica (invisível); a partir do 3º nível Pulo e do 5º Passo Dimensional com este traço (uma vez por descanso longo cada, sem componentes).",
      },
      {
        name: "Resiliência Psíquica",
        description: "Resistência a dano psíquico.",
      },
    ],
  },
  {
    id: "githzerai",
    name: "Githzerai",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Psionica Githzerai",
        description:
          "Conhece Mão Mágica (invisível); a partir do 3º nível Escudo e do 5º Detectar Pensamentos com este traço (uma vez por descanso longo cada).",
      },
      {
        name: "Disciplina Mental",
        description:
          "Vantagem em salvar para evitar ou acabar com os estados encantado e amedrontado.",
      },
      {
        name: "Resiliência Psíquica",
        description: "Resistência a dano psíquico.",
      },
    ],
  },
  {
    id: "goliath",
    name: "Goliath",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: { skills: ["athletics"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Pequeno Gigante",
        description:
          "Proficiente em Atletismo e conta como uma criatura de um tamanho maior para carga e arrasto.",
      },
      {
        name: "Nascido na Montanha",
        description:
          "Resistência a dano de frio e adaptação natural a grandes altitudes (inclusive acima de 6.000 m).",
      },
      {
        name: "Perseverança da Pedra",
        description:
          "Ao receber dano, como reação rola 1d12 + modificador de CON e reduz o dano; usos = bônus de proficiência (descanso longo).",
      },
    ],
  },
  {
    id: "harengon",
    name: "Harengon",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: { skills: ["perception"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Gatilho de Lebre",
        description: "Soma seu bônus de proficiência na iniciativa.",
      },
      {
        name: "Sentidos Leoporinos",
        description: "Proficiente em Percepção.",
      },
      {
        name: "Pé Afortunado",
        description:
          "Ao falhar em um salvar de DES, como reação rola 1d4 e soma; não funciona caído ou com deslocamento 0.",
      },
      {
        name: "Salto de Coelho",
        description:
          "Como ação bônusa, salta o equivalente a cinco vezes seu bônus de proficiência em pés, sem provocar ataques de oportunidade; usos = bônus de proficiência.",
      },
    ],
  },
  {
    id: "kenku",
    name: "Kenku",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Duplicação Perita",
        description:
          "Vantagem em testes de habilidade para copiar perfeitamente uma escrita ou obra, sua ou de outra pessoa.",
      },
      {
        name: "Memória de Kenku",
        description:
          "Proficiente em duas perícias à escolha (etapa de perícias) e pode dar vantagem a si mesmo em um teste com perícia proficiente; usos = bônus de proficiência.",
      },
      {
        name: "Mimetismo",
        description:
          "Imita com precisão sons ouvidos, incluindo vozes; é percebido apenas com um teste de SAB (Intuição) contra CD 8 + prof + CAR.",
      },
    ],
  },
  {
    id: "locathah",
    name: "Locathah",
    source: "lr",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { str: 2, dex: 1 } },
    languages: ["Comum", "Primordial"],
    proficiencies: { skills: ["athletics", "perception"] },
    traits: [
      {
        name: "Armadura Natural",
        description:
          "Sem armadura, sua CA é 12 + modificador de DES (use se maior que a da armadura vestida; escudo se aplica normalmente).",
      },
      {
        name: "Vontade Leviatã",
        description:
          "Vantagem em salvar contra encantado, amedrontado, paralisado, envenenado, atordoado ou adormecido.",
      },
      {
        name: "Anfíbio Limitado",
        description:
          "Respira ar e água, mas precisa se submergir ao menos a cada 4 horas para não sufocar.",
      },
    ],
  },
  {
    id: "owlin",
    name: "Owlin",
    source: "scc",
    speed: 30,
    darkvision: 120,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: { skills: ["stealth"] },
    traits: [
      {
        name: "Aumento de Atributo",
        description:
          "+2 em um atributo e +1 em outro (etapa de atributos; a ficha distribui como +1 em três escolhas).",
      },
      {
        name: "Voo",
        description:
          "Suas asas concedem deslocamento de voo igual ao de caminhada; não pode voar vestindo armadura média ou pesada.",
      },
      {
        name: "Penas Silenciosas",
        description: "Proficiente em Furtividade.",
      },
    ],
  },
  {
    id: "satiro",
    name: "Sátiro",
    source: "mtotm",
    speed: 35,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: { skills: ["performance", "persuasion"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Você é um feérico (não um humanoide).",
      },
      {
        name: "Investida",
        description:
          "Seus ataques desarmados com a cabeça e os chifres causam 1d6 + modificador de FOR de dano contusão.",
      },
      {
        name: "Resistência Mágica",
        description: "Vantagem em salvar contra magias.",
      },
      {
        name: "Saltos Rejubilosos",
        description:
          "Em saltos longos ou altos, rola 1d8 e soma os pés (mesmo sem corrida); a distância extra custa deslocamento normalmente.",
      },
      {
        name: "Festeiro",
        description:
          "Proficiente em Atuação e Persuasão e em um instrumento musical à sua escolha.",
      },
    ],
  },
  {
    id: "tabaxi",
    name: "Tabaxi",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: { skills: ["perception", "stealth"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Garras de Gato",
        description:
          "Seus ataques desarmados com garras causam 1d6 + modificador de FOR de dano cortante; você também tem deslocamento de escalada igual ao de caminhada.",
      },
      {
        name: "Talento Felino",
        description: "Proficiente em Percepção e Furtividade.",
      },
      {
        name: "Agilidade Felina",
        description:
          "Em seu turno, pode dobrar seu deslocamento; não pode usar de novo até se movimentar 0 pés em um dos seus turnos.",
      },
    ],
  },
  {
    id: "tortle",
    name: "Tortle",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["animal_handling", "medicine", "nature", "perception", "stealth", "survival"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Garras",
        description:
          "Seus ataques desarmados com garras causam 1d6 + modificador de FOR de dano cortante.",
      },
      {
        name: "Prender a Respiração",
        description: "Pode prender a respiração por até 1 hora.",
      },
      {
        name: "Armadura Natural",
        description:
          "Sua casca dá CA base 17 (ignora modificador de DES); não pode usar armadura leve, média ou pesada (escudo se aplica).",
      },
      {
        name: "Intuição da Natureza",
        description:
          "Proficiente em uma perícia à escolha: Cuidar de Animais, Medicina, Natureza, Percepção, Furtividade ou Sobrevivência (etapa de perícias).",
      },
      {
        name: "Defesa de Concha",
        description:
          "Como ação, recolhe-se na casca: +4 CA e vantagem em salvar de FOR e CON, mas fica caído, deslocamento 0 e só pode agir com ação bônusa para sair.",
      },
    ],
  },
  {
    id: "tritao",
    name: "Tritão",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Anfíbio",
        description: "Respira ar e água e tem deslocamento de natação igual ao de caminhada.",
      },
      {
        name: "Controle do Ar e da Água",
        description:
          "Conjura Névoa; a partir do 3º nível Vento Impetuoso e do 5º Caminhar sobre a Água com este traço (uma vez por descanso longo cada, ou com espaços de magia).",
      },
      {
        name: "Emissário do Mar",
        description:
          "Comunica ideias simples a feras, elementos e monstros com deslocamento de natação; eles entendem, mas você não os entende de volta.",
      },
      {
        name: "Guardião das Profundezas",
        description: "Resistência a dano de frio.",
      },
    ],
  },
  {
    id: "verdan",
    name: "Verdan",
    source: "ai",
    speed: 30,
    darkvision: null,
    size: "Pequeno",
    abilityBonus: { fixed: { cha: 2, con: 1 } },
    languages: ["Comum", "Goblin", "Outro à escolha"],
    proficiencies: { skills: ["persuasion"] },
    traits: [
      {
        name: "Crescimento",
        description: "Torna-se Médio ao alcançar o 5º nível.",
      },
      {
        name: "Cura de Sangue Negro",
        description:
          "Ao gastar um dado de vida e rolar 1 ou 2, pode rolar de novo e deve usar o novo resultado.",
      },
      {
        name: "Telepatia Limitada",
        description:
          "Fala telepaticamente com criaturas que vê a até 30 pés, sem idioma comum, mas só ideias simples.",
      },
      {
        name: "Persuasivo",
        description: "Proficiente em Persuasão.",
      },
      {
        name: "Insight Telepático",
        description: "Vantagem em todos os salvamentos de SAB e CAR.",
      },
    ],
  },
  {
    id: "bugbear",
    name: "Bugbear",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: { skills: ["stealth"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description:
          "Você é um humanoide e também é considerado um gobelino para pré-requisitos e efeitos.",
      },
      {
        name: "Ancestral Feérico",
        description: "Vantagem em salvar para evitar ou acabar com o estado encantado.",
      },
      {
        name: "Membros Alongados",
        description: "Seu alcance em ataques corpo a corpo é 5 pés maior.",
      },
      {
        name: "Construção Poderosa",
        description:
          "Conta como uma criatura de um tamanho maior para carga e arrasto.",
      },
      {
        name: "Furtivo",
        description:
          "Proficiente em Furtividade e pode se mover (e parar) pelo espaço de uma criatura Pequena sem espremer.",
      },
      {
        name: "Ataque Surpresa",
        description:
          "Se você acertar uma criatura que ainda não agiu no combate, ela sofre 2d6 de dano extra.",
      },
    ],
  },
  {
    id: "centauro",
    name: "Centauro",
    source: "mtotm",
    speed: 40,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["animal_handling", "medicine", "nature", "survival"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Você é um feérico (não um humanoide).",
      },
      {
        name: "Investida",
        description:
          "Se avançar pelo menos 30 pés em linha reta e acertar um ataque corpo a corpo no mesmo turno, pode atacar de novo com ação bônusa usando os cascos.",
      },
      {
        name: "Construção Equina",
        description:
          "Conta como uma criatura de um tamanho maior para carga/arrasto; escalar custa 4 pés extras por pé (em vez de 1).",
      },
      {
        name: "Cascos",
        description:
          "Seus ataques desarmados com cascos causam 1d6 + modificador de FOR de dano contusão.",
      },
      {
        name: "Afinidade Natural",
        description:
          "Proficiente em uma perícia à escolha: Cuidar de Animais, Medicina, Natureza ou Sobrevivência (etapa de perícias).",
      },
    ],
  },
  {
    id: "goblin",
    name: "Goblin",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description:
          "Você é um humanoide e também é considerado um gobelino para pré-requisitos e efeitos.",
      },
      {
        name: "Ancestral Feérico",
        description: "Vantagem em salvar para evitar ou acabar com o estado encantado.",
      },
      {
        name: "Fúria dos Pequenos",
        description:
          "Ao causar dano a uma criatura maior que você, pode causar dano extra igual ao bônus de proficiência; usos = bônus de proficiência (descanso longo), máx. 1 por rodada.",
      },
      {
        name: "Esquiva Ágil",
        description: "Pode tomar a ação Recuar ou Esconder-se como ação bônusa.",
      },
    ],
  },
  {
    id: "grung",
    name: "Grung",
    source: "oga",
    speed: 25,
    darkvision: null,
    size: "Pequeno",
    abilityBonus: { fixed: { dex: 2, con: 1 } },
    languages: ["Grung"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Vigilância Arbórea",
        description: "Proficiente em Percepção.",
      },
      {
        name: "Anfíbio",
        description: "Respira ar e água.",
      },
      {
        name: "Imunidade a Veneno",
        description: "Imune a dano por veneno e ao estado envenenado.",
      },
      {
        name: "Pele Tóxica",
        description:
          "Criatura que agarrar você ou tocar sua pele deve salvar de CON (CD 12) ou fica envenenada por 1 minuto; também pode envenenar armas perfurantes.",
      },
      {
        name: "Salto Emprumado",
        description:
          "Saltos de até 25 pés (longo) e 15 pés (alto), com ou sem corrida.",
      },
      {
        name: "Dependência da Água",
        description:
          "Se não se imergir em água por 1 hora no dia, sofre 1 nível de exaustão (só magia ou 1 hora submerso cura).",
      },
      {
        name: "Escalação",
        description: "Seu deslocamento de escalada é igual ao de caminhada (25 pés).",
      },
    ],
  },
  {
    id: "hobgoblin",
    name: "Hobgoblin",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description:
          "Você é um humanoide e também é considerado um gobelino para pré-requisitos e efeitos.",
      },
      {
        name: "Ancestral Feérico",
        description: "Vantagem em salvar para evitar ou acabar com o estado encantado.",
      },
      {
        name: "Dádiva Feérica",
        description:
          "Ajuda como ação bônusa, usos = bônus de proficiência (descanso longo); a partir do 3º nível escolha Hospitalidade (1d6 + PB de PV temporários), Passagem (+10 pés) ou Mágoa (desvantagem no próximo ataque do alvo).",
      },
      {
        name: "Fortuna da Multidão",
        description:
          "Ao errar um ataque ou falhar em um teste ou salvar, soma o número de aliados que vê a 30 pés (máx. +3); usos = bônus de proficiência.",
      },
    ],
  },
  {
    id: "kobold",
    name: "Kobold",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Grito Dracônico",
        description:
          "Como ação bônusa, grita contra inimigos a 10 pés: você e aliados têm vantagem em ataques contra eles até o início do próximo turno; usos = bônus de proficiência (descanso longo).",
      },
      {
        name: "Legado Kobold",
        description:
          "Escolha um: Astúcia (proficiência em Arcanismo, Investigação, Medicina, Prestidigitação ou Sobrevivência), Desafio (vantagem em salvar contra medo) ou Sorocia Dracônica (conhece um truque da lista do feiticeiro).",
      },
    ],
  },
  {
    id: "lizardfolk",
    name: "Lizardfolk",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: {
      count: 2,
      options: ["animal_handling", "medicine", "nature", "perception", "stealth", "survival"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Mordida",
        description:
          "Seus ataques desarmados com mandíbula causam 1d6 + modificador de FOR de dano cortante.",
      },
      {
        name: "Prender a Respiração",
        description: "Pode prender a respiração por até 15 minutos.",
      },
      {
        name: "Mandíbula Faminta",
        description:
          "Como ação bônusa, ataca com a mordida; se acertar, causa dano normal e ganha PV temporários = bônus de proficiência; usos = bônus de proficiência.",
      },
      {
        name: "Armadura Natural",
        description:
          "Sem armadura, sua CA é 13 + modificador de DES (use se maior que a da armadura vestida).",
      },
      {
        name: "Intuição da Natureza",
        description:
          "Proficiente em duas perícias à escolha entre Cuidar de Animais, Medicina, Natureza, Percepção, Furtividade e Sobrevivência (etapa de perícias).",
      },
      {
        name: "Natação",
        description: "Seu deslocamento de natação é igual ao de caminhada (30 pés).",
      },
    ],
  },
  {
    id: "minotauro",
    name: "Minotauro",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Chifres",
        description:
          "Seus ataques desarmados com chifres causam 1d6 + modificador de FOR de dano perfurante.",
      },
      {
        name: "Investida com Chifres",
        description:
          "Logo após usar a ação Correr e mover 20+ pés, pode atacar com os chifres como ação bônusa.",
      },
      {
        name: "Chifres Martelantes",
        description:
          "Após acertar um ataque corpo a corpo, pode empurrar a criatura com ação bônusa (CD 8 + prof + FOR, no máximo um tamanho maior).",
      },
      {
        name: "Memória Labiríntica",
        description:
          "Sempre sabe onde é norte e tem vantagem em testes de SAB (Sobrevivência) para navegar ou rastrear.",
      },
    ],
  },
  {
    id: "orc",
    name: "Orc",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Impulso de Adrenalina",
        description:
          "Pode usar a ação Correr como ação bônusa e, ao fazê-lo, ganha PV temporários = bônus de proficiência; usos = bônus de proficiência (descanso longo).",
      },
      {
        name: "Construção Poderosa",
        description:
          "Conta como uma criatura de um tamanho maior para carga e arrasto.",
      },
      {
        name: "Resistência Implacável",
        description:
          "Ao ser reduzido a 0 PV sem morrer, pode cair a 1 PV (uma vez por descanso longo).",
      },
    ],
  },
  {
    id: "shifter",
    name: "Shifter",
    source: "erlw",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: {} },
    languages: ["Comum"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Sentidos Aguçados",
        description: "Proficiente em Percepção.",
      },
      {
        name: "Mudança de Forma",
        description:
          "Como ação bônusa, assume uma aparência bestial por 1 minuto, ganhando PV temporários = seu nível + modificador de CON (mín. 1), além do benefício da sua sub-raça; uma vez até descansar curto ou longo.",
      },
      {
        name: "Aumento de Atributo",
        description:
          "O bônus de atributo vem da sub-raça escolhida (etapa de atributos).",
      },
    ],
  },
  {
    id: "yuanti",
    name: "Yuan-Ti",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Resistência Mágica",
        description: "Vantagem em salvar contra magias.",
      },
      {
        name: "Resiliência Venenosa",
        description:
          "Vantagem em salvar para evitar ou acabar com o estado envenenado e resistência a dano por veneno.",
      },
      {
        name: "Conjunção Serpentina",
        description:
          "Conhece Jato de Veneno e pode conjular Vínculo Animal ilimitadas vezes (apenas contra serpentes); a partir do 3º nível, Sugestão (uma vez por descanso longo).",
      },
    ],
  },
  {
    id: "kender",
    name: "Kender",
    source: "dsotdq",
    speed: 30,
    darkvision: null,
    size: "Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["insight", "investigation", "sleight_of_hand", "stealth", "survival"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Destemido",
        description:
          "Vantagem em salvar contra medo; ao falhar, pode escolher ter sucesso (uma vez por descanso longo).",
      },
      {
        name: "Talento Kender",
        description:
          "Proficiente em uma perícia à escolha: Intuição, Investigação, Prestidigitação, Furtividade ou Sobrevivência (etapa de perícias).",
      },
      {
        name: "Provocação",
        description:
          "Como ação bônusa, uma criatura a 60 pés que possa ouvir deve salvar de SAB ou ter desvantagem em ataques contra alvos que não sejam você; CD 8 + prof + INT/SAB/CAR.",
      },
    ],
  },
  {
    id: "kalashtar",
    name: "Kalashtar",
    source: "erlw",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { wis: 2, cha: 1 } },
    languages: ["Comum", "Quori", "Outro à escolha"],
    proficiencies: {},
    traits: [
      {
        name: "Mente Dupla",
        description: "Vantagem em todos os salvamentos de SAB.",
      },
      {
        name: "Disciplina Mental",
        description: "Resistência a dano psíquico.",
      },
      {
        name: "Ligação Mental",
        description:
          "Fala telepaticamente com criaturas que vê a até 10 pés × seu nível, sem idioma comum (a criatura deve entender ao menos um idioma).",
      },
      {
        name: "Separado dos Sonhos",
        description:
          "Imune a magias e efeitos que exigem que você sonhe (ex.: Sonho), mas não a efeitos que adormecem.",
      },
    ],
  },
  {
    id: "warforged",
    name: "Warforged",
    source: "erlw",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { con: 2 }, flexible: { count: 1, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: { count: 1, options: "any" },
    traits: [
      {
        name: "Aumento de Atributo",
        description:
          "+2 em CON e +1 em um atributo à sua escolha (etapa de atributos).",
      },
      {
        name: "Resiliência Construída",
        description:
          "Vantagem em salvar contra veneno, resistência a veneno, imune a doenças, não precisa comer, beber ou respirar nem dormir.",
      },
      {
        name: "Repouso de Vigia",
        description:
          "No descanso longo, passa ao menos 6 horas inativo e imóvel, mas permanece consciente.",
      },
      {
        name: "Proteção Integrada",
        description:
          "+1 de CA; você incorpora armaduras nas quais é proficiente ao seu corpo em 1 hora (tira em 1 hora; pode descansar durante).",
      },
      {
        name: "Design Especializado",
        description:
          "Proficiente em uma perícia à escolha (etapa de perícias) e em uma ferramenta à escolha.",
      },
    ],
  },
  {
    id: "dhampir",
    name: "Dhampir",
    source: "vgr",
    speed: 35,
    darkvision: 60,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Legado Ancestral",
        description:
          "Se substituiu outra raça por esta linhagem, pode manter as perícias e deslocamentos que ganhou com ela; caso contrário, ganha proficiência em duas perícias à escolha (etapa de perícias).",
      },
      {
        name: "Natureza Imperecível",
        description: "Não precisa respirar.",
      },
      {
        name: "Escalar como Aranha",
        description:
          "Deslocamento de escalada igual ao de caminhada; a partir do 3º nível escala superfícies verticais e tetos sem usar as mãos.",
      },
      {
        name: "Mordida Vampírica",
        description:
          "Ataque desarmado usando CON para ataque e dano, 1d4 perfurante (vantagem com metade dos PV ou menos); ao acertar uma criatura que não seja construto ou morto-vivo, recupera PV iguais ao dano ou guarda para o próximo ataque.",
      },
    ],
  },
  {
    id: "hexblood",
    name: "Hexblood",
    source: "vgr",
    speed: 30,
    darkvision: 60,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Legado Ancestral",
        description:
          "Se substituiu outra raça por esta linhagem, pode manter as perícias e deslocamentos que ganhou com ela; caso contrário, ganha proficiência em duas perícias à escolha (etapa de perícias).",
      },
      {
        name: "Token Eerio",
        description:
          "Como ação bônusa, arranca um fio de cabelo, unha ou dente como token (até descanso longo) e envia uma mensagem telepática de 25 palavras a 16 km, ou entra em transe de 1 minuto para ver/ouvir pelo token.",
      },
      {
        name: "Magia Hex",
        description:
          "Conjura Disfarce Pessoal e Bruxo com este traço (uma vez por descanso longo cada, ou com espaços de magia); INT, SAB ou CAR é seu atributo.",
      },
    ],
  },
  {
    id: "reborn",
    name: "Renascido",
    source: "vgr",
    speed: 30,
    darkvision: null,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Legado Ancestral",
        description:
          "Se substituiu outra raça por esta linhagem, pode manter as perícias e deslocamentos que ganhou com ela; caso contrário, ganha proficiência em duas perícias à escolha (etapa de perícias).",
      },
      {
        name: "Natureza Imperecível",
        description:
          "Vantagem em salvar contra doença e para acabar com veneno, resistência a veneno, vantagem em salvamentos de morte, não precisa comer/beber/respirar/dormir; descanso longo em 4 horas de repouso consciente.",
      },
      {
        name: "Conhecimento de Vida Passada",
        description:
          "Ao fazer um teste de perícia, rola 1d6 e soma; usos = bônus de proficiência (descanso longo).",
      },
    ],
  },
  {
    id: "aetherborn",
    name: "Aetherborn",
    source: "psk",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { cha: 2 }, flexible: { count: 2, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Aumento de Atributo",
        description:
          "+2 em CAR e +1 em dois atributos à sua escolha (etapa de atributos).",
      },
      {
        name: "Nascido do Éter",
        description: "Resistência a dano necrótico.",
      },
      {
        name: "Ameaçador",
        description: "Proficiente em Intimidação.",
      },
    ],
  },
  {
    id: "aven",
    name: "Aven",
    source: "psa",
    speed: 25,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Comum", "Aven"],
    proficiencies: {},
    traits: [
      {
        name: "Voo",
        description:
          "Deslocamento de voo de 30 pés; não pode voar vestindo armadura média ou pesada (ou sobrecarregado).",
      },
    ],
  },
  {
    id: "khenra",
    name: "Khenra",
    source: "psa",
    speed: 35,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { dex: 2, str: 1 } },
    languages: ["Comum", "Khenra"],
    proficiencies: { weapons: ["sabre", "lanca", "javelin"] },
    traits: [
      {
        name: "Treino com Armas Khenra",
        description: "Proficiente com sabre (khopesh), lança e javelin.",
      },
      {
        name: "Gêmeos Khenra",
        description:
          "Se seu gêmeo está vivo e à vista, pode rerrolar 1 em ataques, testes e salvamentos; se o gêmeo morreu (ou você nasceu sem gêmeo), não pode ser amedrontado.",
      },
    ],
  },
  {
    id: "kor",
    name: "Kor",
    source: "psz",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { dex: 2, wis: 1 } },
    languages: ["Comum"],
    proficiencies: { skills: ["athletics", "acrobatics"] },
    traits: [
      {
        name: "Velocidade de Escalada",
        description:
          "Deslocamento de escalada de 30 pés, desde que não esteja sobrecarregado ou vestindo armadura pesada.",
      },
      {
        name: "Escalada Kor",
        description: "Proficiente em Atletismo e Acrobacia.",
      },
      {
        name: "Sortudo",
        description:
          "Ao rolar 1 em um ataque, teste ou salvar, pode rerrolar o dado e deve usar o novo resultado.",
      },
      {
        name: "Bravo",
        description: "Vantagem em salvar contra medo.",
      },
    ],
  },
  {
    id: "merfolk",
    name: "Merfolk",
    source: "psi",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { cha: 1 } },
    languages: ["Comum", "Merfolk"],
    proficiencies: {},
    traits: [
      {
        name: "Anfíbio",
        description: "Respira ar e água e tem deslocamento de natação de 30 pés.",
      },
    ],
  },
  {
    id: "naga",
    name: "Naga",
    source: "psa",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { con: 2, int: 1 } },
    languages: ["Comum", "Naga"],
    proficiencies: {},
    traits: [
      {
        name: "Rajada de Velocidade",
        description:
          "Como ação bônusa, com as duas mãos livres, aumenta o deslocamento em 5 pés até o fim do turno.",
      },
      {
        name: "Armas Naturais",
        description:
          "Mordida: 1d4 + FOR perfurante (salvamento de CON, CD 8 + prof + CON, ou +1d6 de veneno); Aperto: 1d6 + FOR contusão, agarra e imobiliza (CD escapar 8 + prof + FOR).",
      },
      {
        name: "Imunidade a Veneno",
        description: "Imune a dano por veneno e ao estado envenenado.",
      },
      {
        name: "Afinidade com Venenos",
        description: "Proficiente com kit de envenenador.",
      },
    ],
  },
  {
    id: "sereia",
    name: "Sereia",
    source: "psi",
    speed: 25,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { cha: 2 } },
    languages: ["Comum", "Sereia"],
    proficiencies: {},
    traits: [
      {
        name: "Voo",
        description:
          "Deslocamento de voo de 30 pés; não pode voar vestindo armadura média ou pesada.",
      },
      {
        name: "Canção de Sereia",
        description:
          "Conhece o truque Amigos e pode conjurá-lo sem componentes materiais.",
      },
    ],
  },
  {
    id: "vampiro",
    name: "Vampiro",
    source: "psi",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { cha: 2, int: 1 } },
    languages: ["Comum", "Vampiro"],
    proficiencies: {},
    traits: [
      {
        name: "Resistência Vampírica",
        description: "Resistência a dano necrótico.",
      },
      {
        name: "Sede de Sangue",
        description:
          "Ataque corpo a corpo contra uma criatura voluntária ou que você agarrou/incapacitou: 1 perfurante + 1d6 necrótico; o máximo de PV dela cai pelo dano necrótico e você recupera os mesmos PV (até descanso longo).",
      },
      {
        name: "Festim de Sangue",
        description:
          "Após sugar sangue com Sede de Sangue, +10 pés de deslocamento e vantagem em testes e salvamentos de FOR e DES por 1 minuto.",
      },
    ],
  },
  {
    id: "loxodon",
    name: "Loxodon",
    source: "ggr",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { con: 2, wis: 1 } },
    languages: ["Comum", "Loxodon"],
    proficiencies: {},
    traits: [
      {
        name: "Construção Poderosa",
        description:
          "Conta como uma criatura de um tamanho maior para carga e arrasto.",
      },
      {
        name: "Serenidade Loxodon",
        description: "Vantagem em salvar para não ser encantado ou amedrontado.",
      },
      {
        name: "Armadura Natural",
        description:
          "Sem armadura, sua CA é 12 + modificador de CON (use se maior; escudo se aplica).",
      },
      {
        name: "Tromba",
        description:
          "Alcance de 5 pés, levanta até 5 × sua FOR em libras, agarra e ataca desarmadamente (não empunha armas/escudos).",
      },
      {
        name: "Olfato Apurado",
        description:
          "Vantagem em testes de SAB (Percepção/Sobrevivência) e INT (Investigação) envolvendo olfato.",
      },
    ],
  },
  {
    id: "hibrido_simic",
    name: "Híbrido Simic",
    source: "ggr",
    speed: 30,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { con: 2 }, flexible: { count: 1, amount: 1 } },
    languages: ["Comum", "Outro à escolha"],
    proficiencies: {},
    traits: [
      {
        name: "Aumento de Atributo",
        description:
          "+2 em CON e +1 em um atributo à sua escolha (etapa de atributos).",
      },
      {
        name: "Idioma Adaptativo",
        description:
          "Além de Comum, escolha Élfico ou Vedalken (o segundo idioma da ficha é livre).",
      },
      {
        name: "Aprimoramentos Animais",
        description:
          "Escolha uma melhoria no 1º nível e outra no 5º nível (veja as opções abaixo).",
      },
      {
        name: "Manta Deslizante (1º nível)",
        description:
          "Ao cair, subtrai até 100 pés da queda e planeja 2 metros horizontalmente por metro de queda.",
      },
      {
        name: "Escalador Ágil (1º nível)",
        description: "Deslocamento de escalada igual ao de caminhada.",
      },
      {
        name: "Adaptação Aquática (1º nível)",
        description:
          "Respira ar e água e ganha deslocamento de natação igual ao de caminhada.",
      },
      {
        name: "Apendices Agarradores (5º nível)",
        description:
          "Duas armas naturais (1d6 + FOR contusão) que podem agarrar como ação bônusa após acertar.",
      },
      {
        name: "Carapaço (5º nível)",
        description: "+1 de CA quando não veste armadura pesada.",
      },
      {
        name: "Cuspe de Ácido (5º nível)",
        description:
          "Ação: cuspo de ácido a 30 pés (salvamento de DES, CD 8 + prof + CON), 2d10 de ácido (3d10 no 11º, 4d10 no 17º); usos = modificador de CON (descanso longo).",
      },
    ],
  },
  {
    id: "vedalken",
    name: "Vedalken",
    source: "ggr",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: { int: 2, wis: 1 } },
    languages: ["Comum", "Vedalken"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["arcana", "history", "investigation", "medicine", "performance", "sleight_of_hand"],
    },
    traits: [
      {
        name: "Desapaixonação Vedalken",
        description: "Vantagem em todos os salvamentos de INT, SAB e CAR.",
      },
      {
        name: "Precisão Incansável",
        description:
          "Proficiente em uma perícia à escolha (etapa de perícias) e em uma ferramenta à escolha; rola 1d4 adicional em testes com elas.",
      },
      {
        name: "Parcialmente Anfíbio",
        description:
          "Respira debaixo d'água por até 1 hora através da pele; depois, só após descanso longo.",
      },
    ],
  },
  {
    id: "leonin",
    name: "Leonin",
    source: "moot",
    speed: 35,
    darkvision: 60,
    size: "Médio",
    abilityBonus: { fixed: { con: 2, str: 1 } },
    languages: ["Comum", "Leonin"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["athletics", "intimidation", "perception", "survival"],
    },
    traits: [
      {
        name: "Garras",
        description:
          "Seus ataques desarmados com garras causam 1d4 + modificador de FOR de dano cortante.",
      },
      {
        name: "Rugido Impressionante",
        description:
          "Como ação bônusa, criaturas a 10 pés devem salvar de SAB ou ficam amedrontadas até o fim do seu próximo turno; CD 8 + prof + CON, uma vez por descanso curto ou longo.",
      },
    ],
  },
  {
    id: "autognome",
    name: "Autognome",
    source: "sps",
    speed: 30,
    darkvision: null,
    size: "Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Você é um construto.",
      },
      {
        name: "Carapaço Blindada",
        description:
          "Sem armadura, sua CA base é 13 + modificador de DES.",
      },
      {
        name: "Bem-sucedido",
        description:
          "Pode somar 1d4 a um ataque, teste ou salvar após ver o d20; usos = bônus de proficiência (descanso longo).",
      },
      {
        name: "Máquina de Cura",
        description:
          "Repara Curar Feridas com Mending (gasta 1 dado de vida); também se beneficia de Curar Feridas, Palavra de Cura e afins apesar de ser construto.",
      },
      {
        name: "Natureza Mecânica",
        description:
          "Resistência a veneno, imune a doenças, vantagem em salvar contra paralisia e veneno; não precisa comer, beber ou respirar.",
      },
      {
        name: "Repouso de Vigia",
        description:
          "No descanso longo, passa ao menos 6 horas inativo e imóvel, mas permanece consciente.",
      },
      {
        name: "Design Especializado",
        description: "Duas proficiências de ferramentas à sua escolha.",
      },
    ],
  },
  {
    id: "giff",
    name: "Giff",
    source: "sps",
    speed: 30,
    darkvision: null,
    size: "Médio",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Faísca Astral",
        description:
          "Ao acertar com arma simples ou marcial, causa dano de força extra = bônus de proficiência; usos = prof, máx. 1 por rodada (descanso longo).",
      },
      {
        name: "Maestria com Armas de Fogo",
        description:
          "Proficiente com todas as armas de fogo, ignora a propriedade de recarga e não sofre desvantagem em alcance longo.",
      },
      {
        name: "Construção de Hipopótamo",
        description:
          "Vantagem em testes e salvamentos de FOR e conta como uma criatura de um tamanho maior para carga e arrasto.",
      },
      {
        name: "Natação",
        description: "Seu deslocamento de natação é igual ao de caminhada (30 pés).",
      },
    ],
  },
  {
    id: "hadozee",
    name: "Hadozee",
    source: "sps",
    speed: 30,
    darkvision: null,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Pés Ágeis",
        description:
          "Como ação bônusa, usa os pés para manipular objetos, portas ou itens minúsculos.",
      },
      {
        name: "Planar",
        description:
          "Ao cair 10+ pés, estende as membranas e planea horizontalmente o deslocamento de caminhada, sem sofrer dano da queda (reação).",
      },
      {
        name: "Esquiva Hadozee",
        description:
          "Ao sofrer dano, como reação rola 1d6 + prof e reduz o dano; usos = bônus de proficiência (descanso longo).",
      },
      {
        name: "Escalação",
        description: "Seu deslocamento de escalada é igual ao de caminhada (30 pés).",
      },
    ],
  },
  {
    id: "plasmoid",
    name: "Plasmoid",
    source: "sps",
    speed: 30,
    darkvision: 60,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Você é um lodo (não um humanoide).",
      },
      {
        name: "Amorfo",
        description:
          "Passe por espaços de 2,5 cm (sem carregar nada) e vantagem em iniciar ou escapar de agarramentos.",
      },
      {
        name: "Prender a Respiração",
        description: "Pode prender a respiração por até 1 hora.",
      },
      {
        name: "Resiliência Natural",
        description:
          "Resistência a dano ácido e veneno e vantagem em salvar contra envenenado.",
      },
      {
        name: "Moldar-se",
        description:
          "Ação: muda para forma humana (para vestir roupas/armaduras) ou volta ao blob; ação bônusa: extrai/absorve um pseudópode de até 15 cm × 3 m para manipular objetos.",
      },
    ],
  },
  {
    id: "thri_kreen",
    name: "Thri-Kreen",
    source: "sps",
    speed: 30,
    darkvision: 60,
    size: "Médio ou Pequeno",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Comum"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Você é uma monstrosidade (não um humanoide).",
      },
      {
        name: "Carapação Camaleônica",
        description:
          "Sem armadura, sua CA base é 13 + modificador de DES; como ação, muda a cor da carapação para se camuflar (vantagem em Furtividade).",
      },
      {
        name: "Braços Secundários",
        description:
          "Dois braços menores que manipulam objetos, portas e itens minúsculos ou empunham armas com a propriedade leve.",
      },
      {
        name: "Sem Sono",
        description:
          "Não precisa dormir e pode permanecer consciente durante o descanso longo (sem atividade vigorosa).",
      },
      {
        name: "Telepatia Thri-Kreen",
        description:
          "Não fala outros idiomas: transmite pensamentos telepaticamente a criaturas dispostas a 120 pés que entendam ao menos um idioma.",
      },
    ],
  },
];

export function getRace(id: string): RaceDef | undefined {
  return RACES.find((r) => r.id === id);
}

export const SUBRACES: SubraceDef[] = [
  {
    id: "humano_variante",
    raceId: "humano",
    name: "Humano (variante)",
    source: "phb",
    replacesAbilityBonus: true,
    flexible: { count: 2, amount: 1 },
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
    id: "anao_colinano",
    raceId: "anao",
    name: "Anão Colina",
    source: "phb",
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
    source: "phb",
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
    id: "anao_duergar",
    raceId: "anao",
    name: "Duergar",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    speed: 30,
    darkvision: 120,
    languages: ["Outro à escolha"],
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Magia Duergar",
        description:
          "A partir do 3º nível, conjura Ampliar/Reduzir em si mesmo e, do 5º nível, Invisibilidade em si mesmo, sem componentes materiais; uma vez por descanso longo cada (ou com espaços de magia). INT, SAB ou CAR é seu atributo de conjuração.",
      },
      {
        name: "Resiliência Anã",
        description:
          "Vantagem em salvar para evitar ou acabar com o estado envenenado e resistência a dano por veneno.",
      },
      {
        name: "Fortaleza Psíquica",
        description:
          "Vantagem em salvar para evitar ou acabar com os estados encantado e atordoado.",
      },
    ],
  },
  {
    id: "elfo_alto",
    raceId: "elfo",
    name: "Alto Elfo",
    source: "phb",
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
    source: "phb",
    abilityBonus: { wis: 1 },
    speed: 35,
    proficiencies: { weapons: ["espada_longa", "espada_curta", "arco_curto", "arco_longo"] },
    traits: [
      {
        name: "Treino com Armas Élficas",
        description:
          "Proficiente com espadas longas, espadas curtas, arcos curtos e longos.",
      },
      {
        name: "Pés Ligeiros",
        description: "Seu deslocamento base aumenta para 35 pés.",
      },
      {
        name: "Máscara da Natureza",
        description:
          "Pode tentar se esconder mesmo apenas levemente obscurecido por vegetação, chuva fina, neve, névoa etc.",
      },
    ],
  },
  {
    id: "elfo_drow",
    raceId: "elfo",
    name: "Elfo Drow",
    source: "phb",
    abilityBonus: { cha: 1 },
    darkvision: 120,
    proficiencies: { weapons: ["rapier", "espada_curta", "besta_mao"] },
    traits: [
      {
        name: "Sensibilidade à Luz Solar",
        description:
          "Desvantagem em ataques e testes de Percepção (SAB) que dependem da visão quando você, o alvo ou o que você percebe está em luz direta do sol.",
      },
      {
        name: "Magia Drow",
        description:
          "Conhece o truque Luzes Dançantes; a partir do 3º nível conjura Fogo Feérico e do 5º Escuridão com este traço (uma vez por descanso longo cada); CAR é seu atributo de conjuração.",
      },
      {
        name: "Treino com Armas Drow",
        description: "Proficiente com rapies, espadas curtas e bestas de mão.",
      },
    ],
  },
  {
    id: "elfo_pallido",
    raceId: "elfo",
    name: "Elfo Pálido",
    source: "egw",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Senso Incisivo",
        description: "Vantagem em testes de Investigação e Intuição.",
      },
      {
        name: "Bênção da Teceira da Lua",
        description:
          "Conhece o truque Luz; a partir do 3º nível conjura Dormir e do 5º Invisibilidade (somente em você) com este traço (uma vez por descanso longo cada, sem componentes materiais); SAB é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "elfo_eladrin",
    raceId: "elfo",
    name: "Eladrin",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    languages: ["Outro à escolha"],
    traits: [
      ASI_FLOATING,
      {
        name: "Passo Feérico",
        description:
          "Como ação bônusa, teleporta magicamente até 30 pés para um espaço desocupado que você possa ver; usos = bônus de proficiência (descanso longo). A partir do 3º nível, sua estação atual adiciona um efeito (CD 8 + prof + INT, SAB ou CAR): Outono (encanta 2 criaturas a 10 pés, SAB), Inverno (amedronta 1 criatura a 5 pés), Primavera (trocagem de lugar com aliado voluntário) ou Verão (5 pés de dano de fogo = proficiência).",
      },
    ],
  },
  {
    id: "elfo_mar",
    raceId: "elfo",
    name: "Elfo do Mar",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    languages: ["Outro à escolha"],
    traits: [
      ASI_FLOATING,
      {
        name: "Filho do Mar",
        description:
          "Respira ar e água e tem resistência a dano de frio.",
      },
      {
        name: "Amigo do Mar",
        description:
          "Pode se comunicar com ideias simples com qualquer besta que tenha deslocamento de natação; ela entende suas palavras, mas você não entende as dela em troca.",
      },
    ],
  },
  {
    id: "elfo_shadar_kai",
    raceId: "elfo",
    name: "Shadar-Kai",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    languages: ["Outro à escolha"],
    traits: [
      ASI_FLOATING,
      {
        name: "Bênção da Rainha Corvo",
        description:
          "Como ação bônusa, teleporta magicamente até 30 pés para um espaço desocupado que você possa ver; usos = bônus de proficiência (descanso longo). A partir do 3º nível, também ganha resistência a todo dano até o início do seu próximo turno quando se teleporta assim.",
      },
      {
        name: "Resistência a Necrótico",
        description: "Resistência a dano necrótico.",
      },
    ],
  },
  {
    id: "elfo_astral",
    raceId: "elfo",
    name: "Elfo Astral",
    source: "sps",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    traits: [
      ASI_FLOATING,
      {
        name: "Fogo Astral",
        description:
          "Conhece um truque à sua escolha: Luzes Dançantes, Luz ou Raio Sagrado (INT, SAB ou CAR, à escolha na criação).",
      },
      {
        name: "Passo de Luz Estelar",
        description:
          "Como ação bônusa, teleporta magicamente até 30 pés para um espaço desocupado que você possa ver; usos = bônus de proficiência (descanso longo).",
      },
      {
        name: "Trance Astral",
        description:
          "Não precisa dormir e magia não pode fazer você dormir; termina um descanso longo em 4 horas de meditação em transe. Cada vez que termina, ganha proficiência em uma perícia e em uma arma ou ferramenta do Manual do Jogador até o próximo descanso longo.",
      },
    ],
  },
  {
    id: "halfling_leve",
    raceId: "halfling",
    name: "Halfling Leve",
    source: "phb",
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
    source: "phb",
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
    id: "halfling_fantasma",
    raceId: "halfling",
    name: "Halfling Fantasma",
    source: "scag",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Fala Silenciosa",
        description:
          "Fala telepaticamente com qualquer criatura a até 30 pés; ela só entende se vocês compartilharem um idioma, e você fala com uma criatura por vez.",
      },
    ],
  },
  {
    id: "halfling_lotusden",
    raceId: "halfling",
    name: "Halfling Lotusden",
    source: "egw",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Filhos da Mata",
        description:
          "Conhece o truque Fábrica de Druidas; a partir do 3º nível conjura Enredar e do 5º Espinhos Crescentes com este traço (uma vez por descanso longo cada, sem componentes materiais); SAB é seu atributo de conjuração.",
      },
      {
        name: "Caminho da Madeira",
        description:
          "Testes feitos para rastrear você têm desvantagem e você pode se mover por terreno difícil vegetal não mágico sem gastar movimento extra.",
      },
    ],
  },
  {
    id: "gnomo_bosque",
    raceId: "gnomo",
    name: "Gnomo do Bosque",
    source: "phb",
    abilityBonus: { dex: 1 },
    traits: [
      {
        name: "Ilusionista Natural",
        description: "Conhece o truque Ilusão Menor (INT como atributo).",
      },
      {
        name: "Falar com Animais",
        description:
          "Pode se comunicar de forma simples com bestas Pequenas ou menores por som e gestos.",
      },
    ],
  },
  {
    id: "gnomo_da_rocha",
    raceId: "gnomo",
    name: "Gnomo da Rocha",
    source: "phb",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Sabedoria do Artesão",
        description:
          "Em testes de História (INT) sobre itens mágicos, alquímicos ou de engenhoca, soma o dobro da proficiência (se já tiver).",
      },
      {
        name: "Bricolagem",
        description:
          "Proficiente com ferramentas de bricolagem; gastando 1 hora e 10 PO em materiais, monta um dispositivo mecânico Pequeno que funciona por 24 horas (máx. 3 de cada vez).",
      },
    ],
  },
  {
    id: "gnomo_profundo",
    raceId: "gnomo",
    name: "Gnomo Profundo (Svirfneblin)",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    speed: 30,
    darkvision: 120,
    languages: ["Outro à escolha"],
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Resistência Mágica Gnômica",
        description:
          "Vantagem em salvamentos de INT, SAB e CAR contra magias.",
      },
      {
        name: "Presente dos Svirfneblin",
        description:
          "A partir do 3º nível, conjura Disfarce Alterado e, do 5º nível, Indetectabilidade com este traço, sem componentes materiais; uma vez por descanso longo cada (ou com espaços de magia). INT, SAB ou CAR é seu atributo.",
      },
      {
        name: "Camuflagem Svirfneblin",
        description:
          "Pode fazer testes de Furtividade (DES) com vantagem; usos = bônus de proficiência (descanso longo).",
      },
    ],
  },
  {
    id: "draconato_sangue_dragao",
    raceId: "draconato",
    name: "Draconato de Sangue Drago (Draconblood)",
    source: "egw",
    replacesAbilityBonus: true,
    abilityBonus: { int: 2, cha: 1 },
    darkvision: 60,
    replacesTraits: true,
    traits: [
      {
        name: "Ancestral Dracônico",
        description:
          "Escolha um tipo de dragão: ele define o dano e a área do seu alito e o tipo de resistência que você ganha.",
      },
      {
        name: "Alito Dragônico",
        description:
          "Como ação, exala energia na área da sua ancestralidade; salvamento (CD 8 + prof + CON), 2d6 de dano (metade com sucesso), aumentando para 3d6 no 6º, 4d6 no 11º e 5d6 no 16º nível; uma vez por descanso curto ou longo.",
      },
      {
        name: "Presença Imponente",
        description:
          "Quando faz um teste de Intimidação ou Persuasão, pode fazer com vantagem; uma vez por descanso longo.",
      },
    ],
  },
  {
    id: "draconato_ravenite",
    raceId: "draconato",
    name: "Draconato Ravenite",
    source: "egw",
    replacesAbilityBonus: true,
    abilityBonus: { str: 2, con: 1 },
    darkvision: 60,
    replacesTraits: true,
    traits: [
      {
        name: "Ancestral Dracônico",
        description:
          "Escolha um tipo de dragão: ele define o dano e a área do seu alito e o tipo de resistência que você ganha.",
      },
      {
        name: "Alito Dragônico",
        description:
          "Como ação, exala energia na área da sua ancestralidade; salvamento (CD 8 + prof + CON), 2d6 de dano (metade com sucesso), aumentando para 3d6 no 6º, 4d6 no 11º e 5d6 no 16º nível; uma vez por descanso curto ou longo.",
      },
      {
        name: "Ataque Vingativo",
        description:
          "Quando sofre dano de uma criatura ao alcance de uma arma que você empunha, pode usar sua reação para atacá-la; uma vez por descanso curto ou longo.",
      },
    ],
  },
  {
    id: "draconato_cromatico",
    raceId: "draconato",
    name: "Draconato Cromático",
    source: "ftd",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Ancestral Cromática",
        description:
          "Escolha um dragão cromático (preto, azul, verde, branco ou vermelho): ele define o tipo de dano dos seus outros traços.",
      },
      {
        name: "Alito",
        description:
          "Ao usar a ação Ataque, pode substituir um ataque por uma linha de 30 pés e 5 pés de largura (salvamento de DES), causando 1d10 de dano do tipo da ancestralidade (metade com sucesso); 2d10 no 5º, 3d10 no 11º e 4d10 no 17º nível. Usos = bônus de proficiência (descanso longo).",
      },
      {
        name: "Resistência Dracônica",
        description: "Resistência ao dano do tipo da sua ancestralidade.",
      },
      {
        name: "Investida Cromática",
        description:
          "A partir do 5º nível, como ação, fica imune ao tipo de dano da sua ancestralidade por 1 minuto; uma vez por descanso longo.",
      },
    ],
  },
  {
    id: "draconato_metalico",
    raceId: "draconato",
    name: "Draconato Metálico",
    source: "ftd",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Ancestral Metálico",
        description:
          "Escolha um dragão metálico (latão, bronze, cobre, ouro ou prata): ele define o tipo de dano dos seus outros traços.",
      },
      {
        name: "Alito",
        description:
          "Ao usar a ação Ataque, pode substituir um ataque por um cone de 15 pés (salvamento de DES), causando 1d10 de dano do tipo da ancestralidade (metade com sucesso); 2d10 no 5º, 3d10 no 11º e 4d10 no 17º nível. Usos = bônus de proficiência (descanso longo).",
      },
      {
        name: "Resistência Dracônica",
        description: "Resistência ao dano do tipo da sua ancestralidade.",
      },
      {
        name: "Alito Metálico",
        description:
          "A partir do 5º nível, ganha um segundo sopro em cone de 15 pés (uma vez por descanso longo): Sopro Devorador (salvamento de CON ou fica incapacitado até o seu próximo turno) ou Sopro de Repulsão (salvamento de FOR ou é empurrado 20 pés e fica caído).",
      },
    ],
  },
  {
    id: "draconato_gema",
    raceId: "draconato",
    name: "Draconato de Gema",
    source: "ftd",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Ancestral de Gema",
        description:
          "Escolha um dragão de gema (amatista, cristal, esmeralda, safira ou topázio): ele define o tipo de dano dos seus outros traços.",
      },
      {
        name: "Alito",
        description:
          "Ao usar a ação Ataque, pode substituir um ataque por um cone de 15 pés (salvamento de DES), causando 1d10 de dano do tipo da ancestralidade (metade com sucesso); 2d10 no 5º, 3d10 no 11º e 4d10 no 17º nível. Usos = bônus de proficiência (descanso longo).",
      },
      {
        name: "Resistência Dracônica",
        description: "Resistência ao dano do tipo da sua ancestralidade.",
      },
      {
        name: "Mente Psíquica",
        description:
          "Pode falar telepaticamente com qualquer criatura que veja a até 30 pés, sem precisar compartilhar idioma (a criatura deve entender ao menos um idioma).",
      },
      {
        name: "Voo de Gema",
        description:
          "A partir do 5º nível, como ação bônusa, manifesta asas espectrais por 1 minuto, ganhando deslocamento de voo igual ao de caminhada e a capacidade de pairar; uma vez por descanso longo.",
      },
    ],
  },
  {
    id: "tiefling_asmodeus",
    raceId: "tiefling",
    name: "Linhagem de Asmodeus",
    source: "phb",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legado Infernal",
        description:
          "Conhece o truque Perturbação; a partir do 3º nível conjura Vingança Rubra (como magia de 2º nível) e do 5º Escuridão com este traço, recarregando após descanso longo; CAR é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "tiefling_baalzebul",
    raceId: "tiefling",
    name: "Linhagem de Baalzebul",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legado de Maladomini",
        description:
          "Conhece o truque Perturbação; a partir do 3º nível conjura Raio de Doença (como magia de 2º nível) e do 5º Coroa de Loucura com este traço, recarregando após descanso longo; CAR é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "tiefling_dispater",
    raceId: "tiefling",
    name: "Linhagem de Dispater",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, dex: 1 },
    traits: [
      {
        name: "Legado de Dis",
        description:
          "Conhece o truque Perturbação; a partir do 3º nível conjura Disfarce Alterado (como magia de 2º nível) e do 5º Detectar Pensamentos com este traço, recarregando após descanso longo; CAR é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "tiefling_fierna",
    raceId: "tiefling",
    name: "Linhagem de Fierna",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, wis: 1 },
    traits: [
      {
        name: "Legado de Phlegethos",
        description:
          "Conhece o truque Amigos; a partir do 3º nível conjura Encantar Pessoa (como magia de 2º nível) e do 5º Sugestão com este traço, recarregando após descanso longo; CAR é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "tiefling_glasya",
    raceId: "tiefling",
    name: "Linhagem de Glasya",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, dex: 1 },
    traits: [
      {
        name: "Legado de Malbolge",
        description:
          "Conhece o truque Ilusão Menor; a partir do 3º nível conjura Disfarce Alterado e do 5º Invisibilidade (como magia de 2º nível) com este traço, recarregando após descanso longo; CAR é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "tiefling_levistus",
    raceId: "tiefling",
    name: "Linhagem de Levistus",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, con: 1 },
    traits: [
      {
        name: "Legado de Estígia",
        description:
          "Conhece o truque Toque Glacial; a partir do 3º nível conjura Armadura de Agathys (como magia de 2º nível) e do 5º Escuridão com este traço, recarregando após descanso longo; CAR é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "tiefling_mammon",
    raceId: "tiefling",
    name: "Linhagem de Mammon",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legado de Minauros",
        description:
          "Conhece o truque Mão Mágica; a partir do 3º nível conjura Disco Flutuante de Tenser (como magia de 2º nível) e do 5º Fechadura Arcana com este traço, recarregando após descanso longo; CAR é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "tiefling_mephistopheles",
    raceId: "tiefling",
    name: "Linhagem de Mephistopheles",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legado de Cania",
        description:
          "Conhece o truque Mão Mágica; a partir do 3º nível conjura Mãos Ardentes (como magia de 2º nível) e do 5º Lâmina Flamejante (como magia de 3º nível) com este traço, recarregando após descanso longo; CAR é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "tiefling_zariel",
    raceId: "tiefling",
    name: "Linhagem de Zariel",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, str: 1 },
    traits: [
      {
        name: "Legado de Avernus",
        description:
          "Conhece o truque Perturbação; a partir do 3º nível conjura Golpe Escaldante (como magia de 2º nível) e do 5º Golpe Marcante (como magia de 3º nível) com este traço, recarregando após descanso longo; CAR é seu atributo de conjuração.",
      },
    ],
  },
  {
    id: "tiefling_variante",
    raceId: "tiefling",
    name: "Tiefling (variante)",
    source: "scag",
    replacesAbilityBonus: true,
    abilityBonus: { dex: 2, int: 1 },
    traits: [
      {
        name: "Aparência",
        description:
          "Escolha 1d4 + 1 traços: chifres pequenos, presas, língua bifurcada, olhos felinos, cascos de cabra, casco fendido, cauda bifurcada, pele courosa ou escamosa, vermelho ou azul-escuro, sem sombra ou reflexo, ou cheiro de enxofre.",
      },
      {
        name: "Feral",
        description:
          "Substitui o Aumento de Atributo por +2 em DES e +1 em INT (aplicado automaticamente pela ficha).",
      },
      {
        name: "Língua do Diabo",
        description:
          "Conhece o truque Zombaria Viscosa; a partir do 3º nível conjura Encantar Pessoa e do 5º Fascinar com este traço, recarregando após descanso longo; substitui o Legado Infernal.",
      },
      {
        name: "Fogo Infernal",
        description:
          "A partir do 3º nível, conjura Mãos Ardentes (como magia de 2º nível) uma vez por descanso longo, no lugar da Vingança Rubra do Legado Infernal.",
      },
      {
        name: "Asas",
        description:
          "Tem asas de morcego e deslocamento de voo de 30 pés enquanto não veste armadura pesada; substitui o Legado Infernal.",
      },
    ],
  },
  {
    id: "genasi_ar",
    raceId: "genasi",
    name: "Genasi do Ar",
    source: "mtotm",
    speed: 35,
    traits: [
      {
        name: "Respiração Inesgotável",
        description: "Pode prender a respiração indefinidamente enquanto não estiver incapacitado.",
      },
      {
        name: "Resistência ao Relâmpago",
        description: "Resistência a dano elétrico.",
      },
      {
        name: "Umbrar-se no Vento",
        description:
          "Conhece o truque Toque de Choque; a partir do 3º nível conjura Queda de Pena e do 5º Levitar com este traço, sem componentes materiais (uma vez por descanso longo cada, ou com espaços de magia); INT, SAB ou CAR é seu atributo.",
      },
    ],
  },
  {
    id: "genasi_terra",
    raceId: "genasi",
    name: "Genasi da Terra",
    source: "mtotm",
    traits: [
      {
        name: "Caminho da Terra",
        description:
          "Pode atravessar terreno difícil sem gastar movimento extra ao se mover pelo chão ou piso.",
      },
      {
        name: "Fusão com a Pedra",
        description:
          "Conhece o truque Guarda de Lâminas, que também pode conjurar como ação bônusa (até uma vez por descanso longo, igual ao seu bônus de proficiência); a partir do 5º nível conjura Sem Rastro sem componentes materiais (uma vez por descanso longo ou com espaços de magia); INT, SAB ou CAR é seu atributo.",
      },
    ],
  },
  {
    id: "genasi_fogo",
    raceId: "genasi",
    name: "Genasi do Fogo",
    source: "mtotm",
    traits: [
      {
        name: "Resistência ao Fogo",
        description: "Resistência a dano de fogo.",
      },
      {
        name: "Alcançar as Chamas",
        description:
          "Conhece o truque Fogo Produzido; a partir do 3º nível conjura Mãos Ardentes e do 5º Lâmina Flamejante (esta sem componentes materiais) com este traço, uma vez por descanso longo cada (ou com espaços de magia); INT, SAB ou CAR é seu atributo.",
      },
    ],
  },
  {
    id: "genasi_agua",
    raceId: "genasi",
    name: "Genasi da Água",
    source: "mtotm",
    traits: [
      {
        name: "Resistência ao Ácido",
        description: "Resistência a dano ácido.",
      },
      {
        name: "Anfíbio",
        description: "Respira ar e água.",
      },
      {
        name: "Chamar a Onda",
        description:
          "Conhece o truque Salpicos de Ácido; a partir do 3º nível conjura Criar ou Destruir Água e do 5º Caminhar sobre a Água com este traço, sem componentes materiais (uma vez por descanso longo cada, ou com espaços de magia); INT, SAB ou CAR é seu atributo.",
      },
    ],
  },
  {
    id: "aasimar_protetor",
    raceId: "aasimar",
    name: "Aasimar Protetor",
    source: "vg",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Alma Radiante",
        description:
          "A partir do 3º nível, como ação, cria asas luminosas e olhos resplandecentes por 1 minuto (ou até encerrar com ação bônusa): ganha 30 pés de deslocamento de voo e, uma vez por turno, causa dano radiante extra a uma criatura igual ao seu nível; uma vez por descanso longo.",
      },
    ],
  },
  {
    id: "aasimar_suplicador",
    raceId: "aasimar",
    name: "Aasimar Flagelador",
    source: "vg",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Consumo Radiante",
        description:
          "A partir do 3º nível, como ação, envolve-se em luz ofuscante por 1 minuto (ou até encerrar com ação bônusa; luz forte a 10 pés e fraca 10 pés além): no fim de cada um dos seus turnos, você e cada criatura a 10 pés sofrem dano radiante igual à metade do seu nível (arredondado para cima); uma vez por turno, causa dano radiante extra a uma criatura igual ao seu nível; uma vez por descanso longo.",
      },
    ],
  },
  {
    id: "aasimar_caido",
    raceId: "aasimar",
    name: "Aasimar Caído",
    source: "vg",
    abilityBonus: { str: 1 },
    traits: [
      {
        name: "Manto Necrótico",
        description:
          "A partir do 3º nível, como ação, cria olhos escuros e asas esqueléticas por 1 minuto (ou até encerrar com ação bônusa): criaturas a 10 pés que veem você devem salvar de CAR (CD 8 + prof + CAR) ou ficam amedrontadas até o fim do seu próximo turno; uma vez por turno, causa dano necrótico extra a uma criatura igual ao seu nível; uma vez por descanso longo.",
      },
    ],
  },
  {
    id: "shifter_pele_fera",
    raceId: "shifter",
    name: "Shifter Pele-Fera",
    source: "erlw",
    abilityBonus: { con: 2, str: 1 },
    proficiencies: { skills: ["athletics"] },
    traits: [
      {
        name: "Atleta Natural",
        description: "Proficiente em Atletismo.",
      },
      {
        name: "Traço da Mudança",
        description:
          "Quando usa Mudança de Forma, ganha 1d6 de PV temporários adicionais e, enquanto estiver mudado, recebe +1 de CA.",
      },
    ],
  },
  {
    id: "shifter_presa_longa",
    raceId: "shifter",
    name: "Shifter Presa Longa",
    source: "erlw",
    abilityBonus: { str: 2, dex: 1 },
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Ferocidade",
        description: "Proficiente em Intimidação.",
      },
      {
        name: "Traço da Mudança",
        description:
          "Enquanto estiver mudado, pode usar seus caninos afiados para atacar desarmadamente como ação bônusa; em caso de acerto, causa 1d6 + modificador de FOR de dano perfurante.",
      },
    ],
  },
  {
    id: "shifter_passo_ligeiro",
    raceId: "shifter",
    name: "Shifter Passo Ligeiro",
    source: "erlw",
    abilityBonus: { dex: 2, cha: 1 },
    proficiencies: { skills: ["acrobatics"] },
    traits: [
      {
        name: "Graça",
        description: "Proficiente em Acrobacia.",
      },
      {
        name: "Traço da Mudança",
        description:
          "Enquanto estiver mudado, seu deslocamento de caminhada aumenta em 10 pés; além disso, pode mover-se até 10 pés como reação quando uma criatura hostil termina seu turno a 5 pés de você, sem provocar ataques de oportunidade.",
      },
    ],
  },
  {
    id: "shifter_cacada_selvagem",
    raceId: "shifter",
    name: "Shifter Caçada Selvagem",
    source: "erlw",
    abilityBonus: { wis: 2 },
    proficiencies: { skills: ["survival"] },
    traits: [
      {
        name: "Rastreador Natural",
        description: "Proficiente em Sobrevivência.",
      },
      {
        name: "Marca do Cheiro",
        description:
          "Como ação bônusa, marca uma criatura que você veja a até 10 pés; até o fim do seu próximo descanso longo, seu bônus de proficiência é dobrado em testes de habilidade para encontrá-la e você sempre sabe onde ela está se estiver a até 60 pés; uma vez por descanso curto ou longo.",
      },
      {
        name: "Traço da Mudança",
        description: "Enquanto estiver mudado, tem vantagem em testes de Sabedoria.",
      },
    ],
  },
  {
    id: "aven_ibis",
    raceId: "aven",
    name: "Aven Cabeça de Íbis",
    source: "psa",
    abilityBonus: { int: 1 },
    traits: [
      {
        name: "Bênção de Kefnet",
        description:
          "Soma metade do seu bônus de proficiência (arredondado para baixo) a qualquer teste de Inteligência que não inclua já sua proficiência.",
      },
    ],
  },
  {
    id: "aven_falcao",
    raceId: "aven",
    name: "Aven Cabeça de Falcão",
    source: "psa",
    abilityBonus: { wis: 2 },
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Olho de Falcão",
        description:
          "Proficiente em Percepção; além disso, atacar em alcance longo não impõe desvantagem em seus ataques com armas à distância.",
      },
    ],
  },
  {
    id: "merfolk_verde",
    raceId: "merfolk",
    name: "Merfolk Verde",
    source: "psi",
    abilityBonus: { wis: 2 },
    traits: [
      {
        name: "Máscara da Natureza",
        description:
          "Pode tentar se esconder mesmo apenas levemente obscurecido por vegetação, chuva fina, neve, névoa etc.",
      },
      {
        name: "Cantrip",
        description:
          "Conhece um truque à sua escolha da lista de magias do druida (SAB como atributo de conjuração).",
      },
    ],
  },
  {
    id: "merfolk_azul",
    raceId: "merfolk",
    name: "Merfolk Azul",
    source: "psi",
    abilityBonus: { int: 2 },
    proficiencies: { skills: ["history", "nature"] },
    traits: [
      {
        name: "Sabedoria das Águas",
        description: "Proficiente em História e Natureza.",
      },
      {
        name: "Cantrip",
        description:
          "Conhece um truque à sua escolha da lista de magias do mago (INT como atributo de conjuração).",
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
