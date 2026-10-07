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
    "Aumenta un atributo en +2 y otro en +1, o tres atributos distintos en +1 (fase de atributos; la ficha lo reparte como +1 en tres elecciones).",
};

export const RACES: RaceDef[] = [
  {
    id: "humano",
    name: "Humano",
    source: "phb",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      {
        name: "Versatilidad",
        description:
          "Ganas +1 en todos los atributos. La subraza variante sustituye este bónus por +1 en dos atributos a tu elección.",
      },
    ],
  },
  {
    id: "anao",
    name: "Enano",
    source: "phb",
    speed: 25,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { con: 2 } },
    languages: ["Común", "Enano"],
    proficiencies: {
      weapons: ["machado_de_batalha", "machado_de_mao", "martelo_leve", "machado_guerra"],
    },
    traits: [
      {
        name: "Velocidad con Armaduras Pesadas",
        description: "Tu desplazamiento no se reduce por llevar armaduras pesadas.",
      },
      {
        name: "Resistencia Enana",
        description:
          "Ventaja en salvaciones para evitar o terminar el estado envenenado y resistencia al daño por veneno.",
      },
      {
        name: "Entrenamiento de Combate Enano",
        description:
          "Competente con hachas de batalla, hachas de guerra, hachas de mano y martillos ligeros.",
      },
      {
        name: "Cura de Piedra",
        description:
          "Al hacer una prueba de Historia relacionada con piedra o construcción subterránea, sumas el doble de tu competencia (si ya la tienes).",
      },
      {
        name: "Herramientas de Artesano",
        description:
          "Competente con herramientas de artesano a tu elección (p. ej., herrero, cervecero o cantero).",
      },
    ],
  },
  {
    id: "elfo",
    name: "Elfo",
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Común", "Élfico"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Sentidos Agudos",
        description:
          "Competente en Percepción y ventaja en pruebas de Percepción que dependen de la vista.",
      },
      {
        name: "Ascendencia Feérica",
        description:
          "Ventaja en salvaciones para evitar o terminar el estado encantado y ningún conjuro puede hacerte dormir.",
      },
      {
        name: "Trance",
        description:
          "No necesitas dormir; meditas 4 horas para recibir los beneficios de un descanso largo y permaneces consciente.",
      },
    ],
  },
  {
    id: "halfling",
    name: "Mediano",
    source: "phb",
    speed: 25,
    darkvision: null,
    size: "Pequeño",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Común", "Mediano"],
    proficiencies: {},
    traits: [
      {
        name: "Afortunado",
        description:
          "Cuando sacas 1 en un ataque, prueba de característica o salvación, puedes volver a tirar y debes usar el nuevo resultado.",
      },
      {
        name: "Valiente",
        description: "Ventaja en salvaciones contra el miedo.",
      },
      {
        name: "Pies Ligeros",
        description: "Puedes moverte por el espacio de criaturas mayores que tú.",
      },
    ],
  },
  {
    id: "meio_elfo",
    name: "Semielfo",
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { cha: 2 }, flexible: { count: 2, amount: 1 } },
    languages: ["Común", "Élfico", "Otro (a elegir)"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      {
        name: "Versatilidad Semielvena",
        description:
          "Ganas +1 en dos atributos a tu elección (fase de atributos) y dos pericias a tu elección (fase de pericias). Alternativamente, el manual permite cambiarlo por entrenamiento con armas élficas, un truco, 35 pies de desplazamiento, Máscara de la Naturaleza, Magia Drow o natación.",
      },
      {
        name: "Ascendencia Feérica",
        description:
          "Ventaja en salvaciones contra seres feéricos y no puedes ser hechizado por ellos; ningún conjuro puede hacerte dormir.",
      },
      {
        name: "Visión Crepuscular",
        description: "Ves 60 pies en penumbra y 15 pies en la oscuridad.",
      },
    ],
  },
  {
    id: "meio_orco",
    name: "Semiorco",
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { str: 2, con: 1 } },
    languages: ["Común", "Orc"],
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Amenazador",
        description: "Competente en Intimidación.",
      },
      {
        name: "Incansable",
        description:
          "Cuando llegas a 0 PV pero no mueres, vuelves a 1 PV (una vez por descanso largo).",
      },
      {
        name: "Furia Salvaje",
        description:
          "En ataques cuerpo a cuerpo causas 1d6 de daño extra sobre el normal (una vez por ronda).",
      },
    ],
  },
  {
    id: "gnomo",
    name: "Gnomo",
    source: "phb",
    speed: 25,
    darkvision: 60,
    size: "Pequeño",
    abilityBonus: { fixed: { int: 2 } },
    languages: ["Común", "Gnómico"],
    proficiencies: {},
    traits: [
      {
        name: "Ingenio",
        description:
          "Ventaja en pruebas de Inteligencia (Arcanos, Ingeniería, Historia, Naturaleza, Religión).",
      },
    ],
  },
  {
    id: "draconato",
    name: "Dracónido",
    source: "phb",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { str: 2, cha: 1 } },
    languages: ["Común", "Dracónico"],
    proficiencies: {},
    traits: [
      {
        name: "Ascendencia Dracónica",
        description:
          "Elige un tipo de dragón: define el daño y el área de tu aliento y el tipo de resistencia que obtienes.",
      },
      {
        name: "Aliento Dracónico",
        description:
          "Como acción, exhalas energía en el área de tu ascendencia; salvación (CD 8 + comp. + CON), 2d6 de daño (mitad con éxito), aumentando a 3d6 en el 6º, 4d6 en el 11º y 5d6 en el 16º nivel; una vez por descanso corto o largo.",
      },
      {
        name: "Resistencia al Daño",
        description: "Resistencia al tipo de daño de tu ascendencia.",
      },
    ],
  },
  {
    id: "tiefling",
    name: "Tiefling",
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { cha: 2, int: 1 } },
    languages: ["Común", "Infernal"],
    proficiencies: {},
    traits: [
      {
        name: "Resistencia Infernal",
        description: "Resistencia al daño de fuego.",
      },
      {
        name: "Linaje Infernal",
        description:
          "Elige una subraza (linaje) para obtener sus rasgos mágicos; la de Asmodeus es la del Manual del Jugador.",
      },
    ],
  },
  {
    id: "genasi",
    name: "Genasi",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [ASI_FLOATING],
  },
  {
    id: "linhagem_personalizada",
    name: "Linaje Personalizado",
    source: "tce",
    speed: 30,
    darkvision: 60,
    size: "Pequeño o Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 1, amount: 2 } },
    languages: ["Común"],
    proficiencies: {},
    skillChoices: { count: 1, options: "any" },
    traits: [
      {
        name: "Tipo de Criatura",
        description:
          "Eliges el tipo de criatura (el predeterminado es humanoid), además del tamaño y los rasgos siguientes.",
      },
      {
        name: "Rasgo Variable",
        description:
          "Elige visión en la oscuridad de 60 pies o competencia en una pericia a tu elección; esta ficha lista ambos: anota la elección en las observaciones.",
      },
      {
        name: "Dote",
        description: "Comienzas con una dote (feat) a tu elección.",
      },
      {
        name: "Aumento de Atributo",
        description: "+2 en un atributo a tu elección (fase de atributos).",
      },
    ],
  },
  {
    id: "aarakocra",
    name: "Aarakocra",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Vuelo",
        description:
          "Tus alas conceden desplazamiento de vuelo igual al de caminata (30 pies); no puedes volar llevando armaduras medias o pesadas.",
      },
      {
        name: "Garras",
        description:
          "Tus ataques desarmados con garras causan 1d6 + modificador de FUER de daño cortante.",
      },
      {
        name: "Invocador del Viento",
        description:
          "A partir del 3er nivel, conjuras Ráfaga con este rasgo, sin componentes materiales; una vez por descanso largo (o con espacios de conjuro).",
      },
    ],
  },
  {
    id: "aasimar",
    name: "Aasimar",
    source: "vg",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { cha: 2 } },
    languages: ["Común", "Celestial"],
    proficiencies: {},
    traits: [
      {
        name: "Resistencia Celestial",
        description: "Resistencia al daño necrótico y radiante.",
      },
      {
        name: "Manos Curadoras",
        description:
          "Como acción, tocas una criatura y recupera PV iguales a tu nivel; una vez por descanso largo.",
      },
      {
        name: "Portador de la Luz",
        description: "Conoces el truco Luz; CAR es tu atributo de conjuración.",
      },
    ],
  },
  {
    id: "metamorfo",
    name: "Metamorfo",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    skillChoices: {
      count: 2,
      options: ["deception", "insight", "intimidation", "performance", "persuasion"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Eres un ser feérico (no un humanoid).",
      },
      {
        name: "Instintos de Metamorfo",
        description:
          "Competente en dos pericias a tu elección: Engaño, Perspicacia, Intimidación, Actuación o Persuasión (fase de pericias).",
      },
      {
        name: "Cambio de Forma",
        description:
          "Como acción, cambias tu apariencia y voz y alternas entre Mediano y Pequeño; no puedes copiar a alguien que nunca hayas visto ni cambiar la disposición de los miembros.",
      },
    ],
  },
  {
    id: "fada",
    name: "Hada",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Eres un ser feérico (no un humanoid).",
      },
      {
        name: "Magia Feérica",
        description:
          "Conoces Pretexto; a partir del 3er nivel conjuras Fuego de Hadas y a partir del 5º Agrandar/Reducir con este rasgo (una vez por descanso largo cada uno, o con espacios de conjuro); SAB, INT o CAR es tu atributo.",
      },
      {
        name: "Vuelo",
        description:
          "Tus alas conceden desplazamiento de vuelo igual al de caminata; no puedes volar llevando armaduras medias o pesadas.",
      },
    ],
  },
  {
    id: "firbolg",
    name: "Firbolg",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Magia Firbolg",
        description:
          "Conjuras Detectar Magia y Disfraz Persona con este rasgo (con el disfraz puedes parecer hasta 1 metro mayor o menor); una vez por descanso largo cada uno.",
      },
      {
        name: "Paso Oculto",
        description:
          "Como acción adicional, te vuelves invisible mágicamente hasta el inicio de tu próximo turno o hasta que ataces; usos = bónus de competencia (descanso largo).",
      },
      {
        name: "Complexión Poderosa",
        description:
          "Cuentas como una criatura de un tamaño mayor para tu capacidad de carga y el peso que empujas o arrastras.",
      },
      {
        name: "Habla de las Fieras y las Hojas",
        description:
          "Las fieras y las plantas entienden tus palabras y tienes ventaja en pruebas de CAR para influenciarlas.",
      },
    ],
  },
  {
    id: "githyanki",
    name: "Githyanki",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Conocimiento Astral",
        description:
          "Tras un descanso largo, obtienes competencia en una pericia y en un arma o herramienta a tu elección, hasta el final del próximo descanso largo.",
      },
      {
        name: "Psiónica Githyanki",
        description:
          "Conoces Mano de Mago (invisible); a partir del 3er nivel Salto y a partir del 5º Paso Dimensional con este rasgo (una vez por descanso largo cada uno, sin componentes).",
      },
      {
        name: "Resiliencia Psíquica",
        description: "Resistencia al daño psíquico.",
      },
    ],
  },
  {
    id: "githzerai",
    name: "Githzerai",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Psiónica Githzerai",
        description:
          "Conoces Mano de Mago (invisible); a partir del 3er nivel Escudo y a partir del 5º Detectar Pensamientos con este rasgo (una vez por descanso largo cada uno).",
      },
      {
        name: "Disciplina Mental",
        description:
          "Ventaja en salvaciones para evitar o terminar los estados encantado y asustado.",
      },
      {
        name: "Resiliencia Psíquica",
        description: "Resistencia al daño psíquico.",
      },
    ],
  },
  {
    id: "goliath",
    name: "Goliath",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: { skills: ["athletics"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Pequeño Gigante",
        description:
          "Competente en Atletismo y cuentas como una criatura de un tamaño mayor para carga y arrastre.",
      },
      {
        name: "Nacido en la Montaña",
        description:
          "Resistencia al daño de frío y adaptación natural a grandes altitudes (incluso por encima de 6.000 m).",
      },
      {
        name: "Perseverancia de la Piedra",
        description:
          "Al recibir daño, como reacción tiras 1d12 + modificador de CON y reduces el daño; usos = bónus de competencia (descanso largo).",
      },
    ],
  },
  {
    id: "harengon",
    name: "Harengon",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: { skills: ["perception"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Gatillo de Liebre",
        description: "Sumas tu bónus de competencia a la iniciativa.",
      },
      {
        name: "Sentidos Leporinos",
        description: "Competente en Percepción.",
      },
      {
        name: "Pie Afortunado",
        description:
          "Al fallar una salvación de DES, como reacción tiras 1d4 y lo sumas; no funciona si estás caído o con desplazamiento 0.",
      },
      {
        name: "Salto de Conejo",
        description:
          "Como acción adicional, saltas el equivalente a cinco veces tu bónus de competencia en pies, sin provocar ataques de oportunidad; usos = bónus de competencia.",
      },
    ],
  },
  {
    id: "kenku",
    name: "Kenku",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Duplicación Perita",
        description:
          "Ventaja en pruebas de característica para copiar perfectamente una escritura u obra, tuya o de otra persona.",
      },
      {
        name: "Memoria de Kenku",
        description:
          "Competente en dos pericias a tu elección (fase de pericias) y puedes darte ventaja a ti mismo en una prueba con una pericia competente; usos = bónus de competencia.",
      },
      {
        name: "Mimetismo",
        description:
          "Imitas con precisión sonidos oídos, incluidas voces; solo se percibe con una prueba de SAB (Perspicacia) contra CD 8 + comp. + CAR.",
      },
    ],
  },
  {
    id: "locathah",
    name: "Locathah",
    source: "lr",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { str: 2, dex: 1 } },
    languages: ["Común", "Primordial"],
    proficiencies: { skills: ["athletics", "perception"] },
    traits: [
      {
        name: "Armadura Natural",
        description:
          "Sin armadura, tu CA es 12 + modificador de DES (úsala si es mayor que la de la armadura llevada; el escudo se aplica normalmente).",
      },
      {
        name: "Voluntad Leviatán",
        description:
          "Ventaja en salvaciones contra encantado, asustado, paralizado, envenenado, aturdido o dormido.",
      },
      {
        name: "Anfibio Limitado",
        description:
          "Respiras aire y agua, pero debes sumergirte al menos cada 4 horas para no ahogarte.",
      },
    ],
  },
  {
    id: "owlin",
    name: "Owlin",
    source: "scc",
    speed: 30,
    darkvision: 120,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: { skills: ["stealth"] },
    traits: [
      {
        name: "Aumento de Atributo",
        description:
          "+2 en un atributo y +1 en otro (fase de atributos; la ficha lo reparte como +1 en tres elecciones).",
      },
      {
        name: "Vuelo",
        description:
          "Tus alas conceden desplazamiento de vuelo igual al de caminata; no puedes volar llevando armaduras medias o pesadas.",
      },
      {
        name: "Plumas Silenciosas",
        description: "Competente en Sigilo.",
      },
    ],
  },
  {
    id: "satiro",
    name: "Sátiro",
    source: "mtotm",
    speed: 35,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: { skills: ["performance", "persuasion"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Eres un ser feérico (no un humanoid).",
      },
      {
        name: "Embestida",
        description:
          "Tus ataques desarmados con la cabeza y los cuernos causan 1d6 + modificador de FUER de daño contundente.",
      },
      {
        name: "Resistencia Mágica",
        description: "Ventaja en salvaciones contra conjuros.",
      },
      {
        name: "Saltos Jubilosos",
        description:
          "En saltos largos o altos, tiras 1d8 y sumas los pies (incluso sin carrera); la distancia extra cuesta desplazamiento normalmente.",
      },
      {
        name: "Festivo",
        description:
          "Competente en Actuación y Persuasión y en un instrumento musical a tu elección.",
      },
    ],
  },
  {
    id: "tabaxi",
    name: "Tabaxi",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: { skills: ["perception", "stealth"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Garras de Gato",
        description:
          "Tus ataques desarmados con garras causan 1d6 + modificador de FUER de daño cortante; además tienes desplazamiento de escalada igual al de caminata.",
      },
      {
        name: "Talento Felino",
        description: "Competente en Percepción y Sigilo.",
      },
      {
        name: "Agilidad Felina",
        description:
          "En tu turno puedes doblar tu desplazamiento; no puedes usarlo de nuevo hasta moverte 0 pies en uno de tus turnos.",
      },
    ],
  },
  {
    id: "tortle",
    name: "Tortle",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
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
          "Tus ataques desarmados con garras causan 1d6 + modificador de FUER de daño cortante.",
      },
      {
        name: "Contener la Respiración",
        description: "Puedes contener la respiración hasta 1 hora.",
      },
      {
        name: "Armadura Natural",
        description:
          "Tu caparazón da una CA base 17 (ignora el modificador de DES); no puedes llevar armaduras ligeras, medias o pesadas (el escudo se aplica).",
      },
      {
        name: "Intuición de la Naturaleza",
        description:
          "Competente en una pericia a tu elección: Cuidar de animales, Medicina, Naturaleza, Percepción, Sigilo o Supervivencia (fase de pericias).",
      },
      {
        name: "Defensa de Caparazón",
        description:
          "Como acción, te recoges en el caparazón: +4 de CA y ventaja en salvaciones de FUER y CON, pero quedas caído, con desplazamiento 0 y solo puedes actuar con una acción adicional para salir.",
      },
    ],
  },
  {
    id: "tritao",
    name: "Tríton",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Anfibio",
        description:
          "Respiras aire y agua y tienes desplazamiento de natación igual al de caminata.",
      },
      {
        name: "Control del Aire y el Agua",
        description:
          "Conjuras Nube de Niebla; a partir del 3er nivel Ráfaga y a partir del 5º Caminar sobre el Agua con este rasgo (una vez por descanso largo cada uno, o con espacios de conjuro).",
      },
      {
        name: "Emissario del Mar",
        description:
          "Comunicas ideas simples a fieras, elementales y monstruos con desplazamiento de natación; ellos te entienden, pero tú no les entiendes a ellos.",
      },
      {
        name: "Guardián de las Profundidades",
        description: "Resistencia al daño de frío.",
      },
    ],
  },
  {
    id: "verdan",
    name: "Verdan",
    source: "ai",
    speed: 30,
    darkvision: null,
    size: "Pequeño",
    abilityBonus: { fixed: { cha: 2, con: 1 } },
    languages: ["Común", "Goblin", "Otro (a elegir)"],
    proficiencies: { skills: ["persuasion"] },
    traits: [
      {
        name: "Crecimiento",
        description: "Te vuelves Mediano al alcanzar el 5º nivel.",
      },
      {
        name: "Curación de Sangre Negra",
        description:
          "Cuando gastas un dado de vida y sacas 1 o 2, puedes volver a tirar y debes usar el nuevo resultado.",
      },
      {
        name: "Telepatía Limitada",
        description:
          "Hablas telepáticamente con criaturas que ves a hasta 30 pies, sin idioma común, pero solo ideas simples.",
      },
      {
        name: "Persuasivo",
        description: "Competente en Persuasión.",
      },
      {
        name: "Perspicacia Telepática",
        description: "Ventaja en todas las salvaciones de SAB y CAR.",
      },
    ],
  },
  {
    id: "bugbear",
    name: "Hombre Bestia",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: { skills: ["stealth"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description:
          "Eres un humanoid y también se te considera un goblin para prerrequisitos y efectos.",
      },
      {
        name: "Ascendencia Feérica",
        description:
          "Ventaja en salvaciones para evitar o terminar el estado encantado.",
      },
      {
        name: "Miembros Alargados",
        description: "Tu alcance en ataques cuerpo a cuerpo es 5 pies mayor.",
      },
      {
        name: "Complexión Poderosa",
        description: "Cuentas como una criatura de un tamaño mayor para carga y arrastre.",
      },
      {
        name: "Furtivo",
        description:
          "Competente en Sigilo y puedes moverte (y detenerte) por el espacio de una criatura Pequeña sin forzar.",
      },
      {
        name: "Ataque Sorpresa",
        description:
          "Si aciertas a una criatura que aún no ha actuado en el combate, sufre 2d6 de daño extra.",
      },
    ],
  },
  {
    id: "centauro",
    name: "Centauro",
    source: "mtotm",
    speed: 40,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["animal_handling", "medicine", "nature", "survival"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Eres un ser feérico (no un humanoid).",
      },
      {
        name: "Embestida",
        description:
          "Si avanzas al menos 30 pies en línea recta y aciertas un ataque cuerpo a cuerpo en el mismo turno, puedes atacar de nuevo con una acción adicional usando los cascos.",
      },
      {
        name: "Complexión Equina",
        description:
          "Cuentas como una criatura de un tamaño mayor para carga/arrastre; escalar cuesta 4 pies extra por pie (en vez de 1).",
      },
      {
        name: "Cascos",
        description:
          "Tus ataques desarmados con cascos causan 1d6 + modificador de FUER de daño contundente.",
      },
      {
        name: "Afinidad Natural",
        description:
          "Competente en una pericia a tu elección: Cuidar de animales, Medicina, Naturaleza o Supervivencia (fase de pericias).",
      },
    ],
  },
  {
    id: "goblin",
    name: "Goblin",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description:
          "Eres un humanoid y también se te considera un goblin para prerrequisitos y efectos.",
      },
      {
        name: "Ascendencia Feérica",
        description:
          "Ventaja en salvaciones para evitar o terminar el estado encantado.",
      },
      {
        name: "Furia de los Pequeños",
        description:
          "Al causar daño a una criatura mayor que tú, puedes causar daño extra igual a tu bónus de competencia; usos = bónus de competencia (descanso largo), máx. 1 por ronda.",
      },
      {
        name: "Esquiva Ágil",
        description:
          "Puedes tomar la acción Retroceder u Ocultarte como acción adicional.",
      },
    ],
  },
  {
    id: "grung",
    name: "Grung",
    source: "oga",
    speed: 25,
    darkvision: null,
    size: "Pequeño",
    abilityBonus: { fixed: { dex: 2, con: 1 } },
    languages: ["Grung"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Vigilancia Arbórea",
        description: "Competente en Percepción.",
      },
      {
        name: "Anfibio",
        description: "Respiras aire y agua.",
      },
      {
        name: "Inmunidad al Veneno",
        description: "Inmune al daño por veneno y al estado envenenado.",
      },
      {
        name: "Piel Tóxica",
        description:
          "Una criatura que te agarre o toque tu piel debe hacer una salvación de CON (CD 12) o queda envenenada durante 1 minuto; también puede envenenar armas perforantes.",
      },
      {
        name: "Salto Firme",
        description:
          "Saltos de hasta 25 pies (largo) y 15 pies (alto), con o sin carrera.",
      },
      {
        name: "Dependencia del Agua",
        description:
          "Si no te sumerges en agua durante 1 hora al día, sufres 1 nivel de agotamiento (solo un conjuro o 1 hora sumergido lo cura).",
      },
      {
        name: "Escalada",
        description: "Tu desplazamiento de escalada es igual al de caminata (25 pies).",
      },
    ],
  },
  {
    id: "hobgoblin",
    name: "Hobgoblin",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description:
          "Eres un humanoid y también se te considera un goblin para prerrequisitos y efectos.",
      },
      {
        name: "Ascendencia Feérica",
        description:
          "Ventaja en salvaciones para evitar o terminar el estado encantado.",
      },
      {
        name: "Regalo Feérico",
        description:
          "Ayuda como acción adicional, usos = bónus de competencia (descanso largo); a partir del 3er nivel elige Hospitalidad (1d6 + comp. de PV temporarios), Paso (+10 pies) o Malicia (desventaja en el próximo ataque del objetivo).",
      },
      {
        name: "Fortuna de la Multitud",
        description:
          "Cuando fallas un ataque o una prueba o salvación, sumas el número de aliados que ves a 30 pies (máx. +3); usos = bónus de competencia.",
      },
    ],
  },
  {
    id: "kobold",
    name: "Kobold",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Grito Dracónico",
        description:
          "Como acción adicional, gritas contra enemigos a 10 pies: tú y tus aliados tenéis ventaja en ataques contra ellos hasta el inicio de tu próximo turno; usos = bónus de competencia (descanso largo).",
      },
      {
        name: "Legado Kobold",
        description:
          "Elige uno: Astucia (competencia en Arcanos, Investigación, Medicina, Prestidigitación o Supervivencia), Desafío (ventaja en salvaciones contra el miedo) o Canto Dracónico (conoces un truco de la lista de hechicero).",
      },
    ],
  },
  {
    id: "lizardfolk",
    name: "Hombre Lagarto",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
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
          "Tus ataques desarmados con mandíbula causan 1d6 + modificador de FUER de daño cortante.",
      },
      {
        name: "Contener la Respiración",
        description: "Puedes contener la respiración hasta 15 minutos.",
      },
      {
        name: "Mandíbula Hambrienta",
        description:
          "Como acción adicional, atacas con la mordida; si aciertas, causas el daño normal y obtienes PV temporarios = bónus de competencia; usos = bónus de competencia.",
      },
      {
        name: "Armadura Natural",
        description:
          "Sin armadura, tu CA es 13 + modificador de DES (úsala si es mayor que la de la armadura llevada).",
      },
      {
        name: "Intuición de la Naturaleza",
        description:
          "Competente en dos pericias a tu elección entre Cuidar de animales, Medicina, Naturaleza, Percepción, Sigilo y Supervivencia (fase de pericias).",
      },
      {
        name: "Natación",
        description: "Tu desplazamiento de natación es igual al de caminata (30 pies).",
      },
    ],
  },
  {
    id: "minotauro",
    name: "Minotauro",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Cuernos",
        description:
          "Tus ataques desarmados con cuernos causan 1d6 + modificador de FUER de daño perforante.",
      },
      {
        name: "Embestida con Cuernos",
        description:
          "Justo tras usar la acción Correr y mover 20+ pies, puedes atacar con los cuernos como acción adicional.",
      },
      {
        name: "Cuernos Demoledores",
        description:
          "Tras acertar un ataque cuerpo a cuerpo, puedes empujar a la criatura con una acción adicional (CD 8 + comp. + FUER, como máximo un tamaño mayor).",
      },
      {
        name: "Memoria Laberíntica",
        description:
          "Siempre sabes dónde está el norte y tienes ventaja en pruebas de SAB (Supervivencia) para navegar o rastrear.",
      },
    ],
  },
  {
    id: "orc",
    name: "Orc",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Impulso de Adrenalina",
        description:
          "Puedes usar la acción Correr como acción adicional y, al hacerlo, obtienes PV temporarios = bónus de competencia; usos = bónus de competencia (descanso largo).",
      },
      {
        name: "Complexión Poderosa",
        description: "Cuentas como una criatura de un tamaño mayor para carga y arrastre.",
      },
      {
        name: "Resistencia Implacable",
        description:
          "Al ser reducido a 0 PV sin morir, puedes caer a 1 PV (una vez por descanso largo).",
      },
    ],
  },
  {
    id: "shifter",
    name: "Shifter",
    source: "erlw",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: {} },
    languages: ["Común"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Sentidos Agudos",
        description: "Competente en Percepción.",
      },
      {
        name: "Cambio de Forma",
        description:
          "Como acción adicional, adoptas una apariencia bestial durante 1 minuto, obteniendo PV temporarios = tu nivel + modificador de CON (mín. 1), además del beneficio de tu subraza; una vez hasta descansar corto o largo.",
      },
      {
        name: "Aumento de Atributo",
        description:
          "El bónus de atributo proviene de la subraza elegida (fase de atributos).",
      },
    ],
  },
  {
    id: "yuanti",
    name: "Yuan-Ti",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Resistencia Mágica",
        description: "Ventaja en salvaciones contra conjuros.",
      },
      {
        name: "Resiliencia Venenosa",
        description:
          "Ventaja en salvaciones para evitar o terminar el estado envenenado y resistencia al daño por veneno.",
      },
      {
        name: "Conjunción Serpentina",
        description:
          "Conoces Nube Venenosa y puedes conjurar Hechizar Besta ilimitadas veces (solo contra serpientes); a partir del 3er nivel, Sugestión (una vez por descanso largo).",
      },
    ],
  },
  {
    id: "kender",
    name: "Kender",
    source: "dsotdq",
    speed: 30,
    darkvision: null,
    size: "Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["insight", "investigation", "sleight_of_hand", "stealth", "survival"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Intrépido",
        description:
          "Ventaja en salvaciones contra el miedo; al fallar, puedes elegir tener éxito (una vez por descanso largo).",
      },
      {
        name: "Talento Kender",
        description:
          "Competente en una pericia a tu elección: Perspicacia, Investigación, Juego de manos, Sigilo o Supervivencia (fase de pericias).",
      },
      {
        name: "Provocación",
        description:
          "Como acción adicional, una criatura a 60 pies que pueda oírte debe hacer una salvación de SAB o tener desventaja en ataques contra objetivos que no sean tú; CD 8 + comp. + INT/SAB/CAR.",
      },
    ],
  },
  {
    id: "kalashtar",
    name: "Kalashtar",
    source: "erlw",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { wis: 2, cha: 1 } },
    languages: ["Común", "Quori", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      {
        name: "Mente Doble",
        description: "Ventaja en todas las salvaciones de SAB.",
      },
      {
        name: "Disciplina Mental",
        description: "Resistencia al daño psíquico.",
      },
      {
        name: "Conexión Mental",
        description:
          "Hablas telepáticamente con criaturas que ves a hasta 10 pies × tu nivel, sin idioma común (la criatura debe entender al menos un idioma).",
      },
      {
        name: "Separado de los Sueños",
        description:
          "Inmune a conjuros y efectos que exigen que sueñes (p. ej., Sueño), pero no a efectos que te adormecen.",
      },
    ],
  },
  {
    id: "warforged",
    name: "Warforged",
    source: "erlw",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { con: 2 }, flexible: { count: 1, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    skillChoices: { count: 1, options: "any" },
    traits: [
      {
        name: "Aumento de Atributo",
        description:
          "+2 en CON y +1 en un atributo a tu elección (fase de atributos).",
      },
      {
        name: "Resiliencia Construida",
        description:
          "Ventaja en salvaciones contra veneno, resistencia al veneno, inmune a enfermedades, no necesitas comer, beber o respirar ni dormir.",
      },
      {
        name: "Reposo de Vigía",
        description:
          "Durante el descanso largo, pasas al menos 6 horas inactivo e inmóvil, pero permaneces consciente.",
      },
      {
        name: "Protección Integrada",
        description:
          "+1 de CA; incorporas en 1 hora a tu cuerpo las armaduras con las que eres competente (las quitas en 1 hora; puedes descansar durante).",
      },
      {
        name: "Diseño Especializado",
        description:
          "Competente en una pericia a tu elección (fase de pericias) y en una herramienta a tu elección.",
      },
    ],
  },
  {
    id: "dhampir",
    name: "Dhampir",
    source: "vgr",
    speed: 35,
    darkvision: 60,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Legado Ancestral",
        description:
          "Si sustituiste otra raza por este linaje, puedes conservar las pericias y desplazamientos que obtuviste con ella; de lo contrario, ganas competencia en dos pericias a tu elección (fase de pericias).",
      },
      {
        name: "Naturaleza Imperecedera",
        description: "No necesitas respirar.",
      },
      {
        name: "Escalar como Araña",
        description:
          "Desplazamiento de escalada igual al de caminata; a partir del 3er nivel escalas superficies verticales y techos sin usar las manos.",
      },
      {
        name: "Mordida Vampírica",
        description:
          "Ataque desarmado usando CON para ataque y daño, 1d4 perforante (ventaja con la mitad de PV o menos); al acertar a una criatura que no sea constructo o no-muerto, recuperas PV iguales al daño o los guardas para el próximo ataque.",
      },
    ],
  },
  {
    id: "hexblood",
    name: "Hexblood",
    source: "vgr",
    speed: 30,
    darkvision: 60,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Legado Ancestral",
        description:
          "Si sustituiste otra raza por este linaje, puedes conservar las pericias y desplazamientos que obtuviste con ella; de lo contrario, ganas competencia en dos pericias a tu elección (fase de pericias).",
      },
      {
        name: "Token Siniestro",
        description:
          "Como acción adicional, arrancas un cabello, una uña o un diente como token (hasta descanso largo) y envías un mensaje telepático de 25 palabras a 16 km, o entras en trance de 1 minuto para ver/oir a través del token.",
      },
      {
        name: "Magia Hex",
        description:
          "Conjuras Disfraz Persona y Brujería con este rasgo (una vez por descanso largo cada uno, o con espacios de conjuro); INT, SAB o CAR es tu atributo.",
      },
    ],
  },
  {
    id: "reborn",
    name: "Renacido",
    source: "vgr",
    speed: 30,
    darkvision: null,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Legado Ancestral",
        description:
          "Si sustituiste otra raza por este linaje, puedes conservar las pericias y desplazamientos que obtuviste con ella; de lo contrario, ganas competencia en dos pericias a tu elección (fase de pericias).",
      },
      {
        name: "Naturaleza Imperecedera",
        description:
          "Ventaja en salvaciones contra enfermedad y para terminar el veneno, resistencia al veneno, ventaja en salvaciones de muerte, no necesitas comer/beber/respirar/dormir; descanso largo tras 4 horas de reposo consciente.",
      },
      {
        name: "Conocimiento de Vida Pasada",
        description:
          "Al hacer una prueba de pericia, tiras 1d6 y lo sumas; usos = bónus de competencia (descanso largo).",
      },
    ],
  },
  {
    id: "aetherborn",
    name: "Aetherborn",
    source: "psk",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { cha: 2 }, flexible: { count: 2, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Aumento de Atributo",
        description:
          "+2 en CAR y +1 en dos atributos a tu elección (fase de atributos).",
      },
      {
        name: "Nacido del Éter",
        description: "Resistencia al daño necrótico.",
      },
      {
        name: "Amenazador",
        description: "Competente en Intimidación.",
      },
    ],
  },
  {
    id: "aven",
    name: "Aven",
    source: "psa",
    speed: 25,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Común", "Aven"],
    proficiencies: {},
    traits: [
      {
        name: "Vuelo",
        description:
          "Desplazamiento de vuelo de 30 pies; no puedes volar llevando armaduras medias o pesadas (ni sobrecargado).",
      },
    ],
  },
  {
    id: "khenra",
    name: "Khenra",
    source: "psa",
    speed: 35,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { dex: 2, str: 1 } },
    languages: ["Común", "Khenra"],
    proficiencies: { weapons: ["sabre", "lanca", "javelin"] },
    traits: [
      {
        name: "Entrenamiento con Armas Khenra",
        description: "Competente con sable (khopesh), lanza y jabalina.",
      },
      {
        name: "Gemelos Khenra",
        description:
          "Si tu gemelo está vivo y a la vista, puedes volver a tirar los 1 en ataques, pruebas y salvaciones; si tu gemelo murió (o naciste sin gemelo), no puedes ser asustado.",
      },
    ],
  },
  {
    id: "kor",
    name: "Kor",
    source: "psz",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { dex: 2, wis: 1 } },
    languages: ["Común"],
    proficiencies: { skills: ["athletics", "acrobatics"] },
    traits: [
      {
        name: "Velocidad de Escalada",
        description:
          "Desplazamiento de escalada de 30 pies, siempre que no estés sobrecargado ni lleves armadura pesada.",
      },
      {
        name: "Escalada Kor",
        description: "Competente en Atletismo y Acrobacias.",
      },
      {
        name: "Suertudo",
        description:
          "Cuando sacas 1 en un ataque, prueba o salvación, puedes volver a tirar el dado y debes usar el nuevo resultado.",
      },
      {
        name: "Bravo",
        description: "Ventaja en salvaciones contra el miedo.",
      },
    ],
  },
  {
    id: "merfolk",
    name: "Merfolk",
    source: "psi",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { cha: 1 } },
    languages: ["Común", "Merfolk"],
    proficiencies: {},
    traits: [
      {
        name: "Anfibio",
        description:
          "Respiras aire y agua y tienes desplazamiento de natación de 30 pies.",
      },
    ],
  },
  {
    id: "naga",
    name: "Naga",
    source: "psa",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { con: 2, int: 1 } },
    languages: ["Común", "Naga"],
    proficiencies: {},
    traits: [
      {
        name: "Ráfaga de Velocidad",
        description:
          "Como acción adicional, con las dos manos libres, aumentas el desplazamiento en 5 pies hasta el final del turno.",
      },
      {
        name: "Armas Naturales",
        description:
          "Mordida: 1d4 + FUER perforante (salvación de CON, CD 8 + comp. + CON, o +1d6 de veneno); Agarre: 1d6 + FUER contundente, agarra e inmoviliza (CD de escapar 8 + comp. + FUER).",
      },
      {
        name: "Inmunidad al Veneno",
        description: "Inmune al daño por veneno y al estado envenenado.",
      },
      {
        name: "Afinidad con Venenos",
        description: "Competente con el kit de envenenador.",
      },
    ],
  },
  {
    id: "sereia",
    name: "Sirena",
    source: "psi",
    speed: 25,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { cha: 2 } },
    languages: ["Común", "Sirena"],
    proficiencies: {},
    traits: [
      {
        name: "Vuelo",
        description:
          "Desplazamiento de vuelo de 30 pies; no puedes volar llevando armaduras medias o pesadas.",
      },
      {
        name: "Canto de Sirena",
        description:
          "Conoces el truco Amigos y puedes conjurarlo sin componentes materiales.",
      },
    ],
  },
  {
    id: "vampiro",
    name: "Vampiro",
    source: "psi",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { cha: 2, int: 1 } },
    languages: ["Común", "Vampiro"],
    proficiencies: {},
    traits: [
      {
        name: "Resistencia Vampírica",
        description: "Resistencia al daño necrótico.",
      },
      {
        name: "Sed de Sangre",
        description:
          "Ataque cuerpo a cuerpo contra una criatura voluntaria o que hayas agarrado/incapacitado: 1 perforante + 1d6 necrótico; su PV máximo baja por el daño necrótico y tú recuperas los mismos PV (hasta descanso largo).",
      },
      {
        name: "Festín de Sangre",
        description:
          "Tras chupar sangre con Sed de Sangre, +10 pies de desplazamiento y ventaja en pruebas y salvaciones de FUER y DES durante 1 minuto.",
      },
    ],
  },
  {
    id: "loxodon",
    name: "Loxodon",
    source: "ggr",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { con: 2, wis: 1 } },
    languages: ["Común", "Loxodon"],
    proficiencies: {},
    traits: [
      {
        name: "Complexión Poderosa",
        description: "Cuentas como una criatura de un tamaño mayor para carga y arrastre.",
      },
      {
        name: "Serenidad Loxodon",
        description:
          "Ventaja en salvaciones para no ser encantado o asustado.",
      },
      {
        name: "Armadura Natural",
        description:
          "Sin armadura, tu CA es 12 + modificador de CON (úsala si es mayor; el escudo se aplica).",
      },
      {
        name: "Trompa",
        description:
          "Alcance de 5 pies, levanta hasta 5 × tu FUER en libras, agarra y ataca desarmadamente (no empuñas armas/escudos).",
      },
      {
        name: "Olfato Agudo",
        description:
          "Ventaja en pruebas de SAB (Percepción/Supervivencia) e INT (Investigación) que involucren el olfato.",
      },
    ],
  },
  {
    id: "hibrido_simic",
    name: "Híbrido Símico",
    source: "ggr",
    speed: 30,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { con: 2 }, flexible: { count: 1, amount: 1 } },
    languages: ["Común", "Otro (a elegir)"],
    proficiencies: {},
    traits: [
      {
        name: "Aumento de Atributo",
        description:
          "+2 en CON y +1 en un atributo a tu elección (fase de atributos).",
      },
      {
        name: "Idioma Adaptativo",
        description:
          "Además de Común, elige Élfico o Vedalken (el segundo idioma de la ficha es libre).",
      },
      {
        name: "Mejoras Animales",
        description:
          "Elige una mejora en el 1er nivel y otra en el 5º nivel (véanse las opciones siguientes).",
      },
      {
        name: "Manta Deslizante (1er nivel)",
        description:
          "Al caer, restas hasta 100 pies a la caída y planeas 2 metros horizontalmente por metro de caída.",
      },
      {
        name: "Escalador Ágil (1er nivel)",
        description: "Desplazamiento de escalada igual al de caminata.",
      },
      {
        name: "Adaptación Acuática (1er nivel)",
        description:
          "Respiras aire y agua y obtienes desplazamiento de natación igual al de caminata.",
      },
      {
        name: "Apéndices Agarradores (5º nivel)",
        description:
          "Dos armas naturales (1d6 + FUER contundente) que pueden agarrar como acción adicional tras acertar.",
      },
      {
        name: "Carapacho (5º nivel)",
        description: "+1 de CA cuando no llevas armadura pesada.",
      },
      {
        name: "Escupitajo de Ácido (5º nivel)",
        description:
          "Acción: escupitajo de ácido a 30 pies (salvación de DES, CD 8 + comp. + CON), 2d10 de ácido (3d10 en el 11º, 4d10 en el 17º); usos = modificador de CON (descanso largo).",
      },
    ],
  },
  {
    id: "vedalken",
    name: "Vedalken",
    source: "ggr",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: { int: 2, wis: 1 } },
    languages: ["Común", "Vedalken"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["arcana", "history", "investigation", "medicine", "performance", "sleight_of_hand"],
    },
    traits: [
      {
        name: "Desapego Vedalken",
        description: "Ventaja en todas las salvaciones de INT, SAB y CAR.",
      },
      {
        name: "Precisión Incansable",
        description:
          "Competente en una pericia a tu elección (fase de pericias) y en una herramienta a tu elección; tiras 1d4 adicional en pruebas con ellas.",
      },
      {
        name: "Parcialmente Anfibio",
        description:
          "Respiras bajo el agua hasta 1 hora a través de la piel; después, solo tras un descanso largo.",
      },
    ],
  },
  {
    id: "leonin",
    name: "Leonin",
    source: "moot",
    speed: 35,
    darkvision: 60,
    size: "Mediano",
    abilityBonus: { fixed: { con: 2, str: 1 } },
    languages: ["Común", "Leonin"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["athletics", "intimidation", "perception", "survival"],
    },
    traits: [
      {
        name: "Garras",
        description:
          "Tus ataques desarmados con garras causan 1d4 + modificador de FUER de daño cortante.",
      },
      {
        name: "Rugido Impresionante",
        description:
          "Como acción adicional, las criaturas a 10 pies deben hacer una salvación de SAB o quedan asustadas hasta el final de tu próximo turno; CD 8 + comp. + CON, una vez por descanso corto o largo.",
      },
    ],
  },
  {
    id: "autognome",
    name: "Autognome",
    source: "sps",
    speed: 30,
    darkvision: null,
    size: "Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Eres un constructo.",
      },
      {
        name: "Caparazón Blindado",
        description: "Sin armadura, tu CA base es 13 + modificador de DES.",
      },
      {
        name: "Exitoso",
        description:
          "Puedes sumar 1d4 a un ataque, prueba o salvación tras ver el d20; usos = bónus de competencia (descanso largo).",
      },
      {
        name: "Máquina de Curación",
        description:
          "Reparas Curar Heridas con Reparar (gastas 1 dado de vida); además te beneficias de Curar Heridas, Palabra de Curación y afines pese a ser un constructo.",
      },
      {
        name: "Naturaleza Mecánica",
        description:
          "Resistencia al veneno, inmune a enfermedades, ventaja en salvaciones contra parálisis y veneno; no necesitas comer, beber ni respirar.",
      },
      {
        name: "Reposo de Vigía",
        description:
          "Durante el descanso largo, pasas al menos 6 horas inactivo e inmóvil, pero permaneces consciente.",
      },
      {
        name: "Diseño Especializado",
        description: "Dos competencias de herramientas a tu elección.",
      },
    ],
  },
  {
    id: "giff",
    name: "Giff",
    source: "sps",
    speed: 30,
    darkvision: null,
    size: "Mediano",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Chispa Astral",
        description:
          "Al acertar con un arma simple o marcial, causas daño de fuerza extra = bónus de competencia; usos = comp., máx. 1 por ronda (descanso largo).",
      },
      {
        name: "Dominio con Armas de Fuego",
        description:
          "Competente con todas las armas de fuego, ignoras la propiedad de recarga y no sufres desventaja a larga distancia.",
      },
      {
        name: "Complexión de Hipopótamo",
        description:
          "Ventaja en pruebas y salvaciones de FUER y cuentas como una criatura de un tamaño mayor para carga y arrastre.",
      },
      {
        name: "Natación",
        description: "Tu desplazamiento de natación es igual al de caminata (30 pies).",
      },
    ],
  },
  {
    id: "hadozee",
    name: "Hadozee",
    source: "sps",
    speed: 30,
    darkvision: null,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Pies Ágiles",
        description:
          "Como acción adicional, usas los pies para manipular objetos, puertas u objetos minúsculos.",
      },
      {
        name: "Planeo",
        description:
          "Al caer 10+ pies, extiendes las membranas y planeas horizontalmente el desplazamiento de caminata, sin sufrir daño de la caída (reacción).",
      },
      {
        name: "Esquiva Hadozee",
        description:
          "Al sufrir daño, como reación tiras 1d6 + comp. y reduces el daño; usos = bónus de competencia (descanso largo).",
      },
      {
        name: "Escalada",
        description: "Tu desplazamiento de escalada es igual al de caminata (30 pies).",
      },
    ],
  },
  {
    id: "plasmoid",
    name: "Plasmoid",
    source: "sps",
    speed: 30,
    darkvision: 60,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Eres un limo (no un humanoid).",
      },
      {
        name: "Amorfo",
        description:
          "Pasa por espacios de 2,5 cm (sin cargar nada) y ventaja en iniciar o escapar de agarres.",
      },
      {
        name: "Contener la Respiración",
        description: "Puedes contener la respiración hasta 1 hora.",
      },
      {
        name: "Resiliencia Natural",
        description:
          "Resistencia al daño ácido y veneno y ventaja en salvaciones contra envenenado.",
      },
      {
        name: "Moldearse",
        description:
          "Acción: cambias a forma humana (para llevar ropas/armaduras) o vuelves al blob; acción adicional: extraes/absorbes un pseudópodo de hasta 15 cm × 3 m para manipular objetos.",
      },
    ],
  },
  {
    id: "thri_kreen",
    name: "Thri-Kreen",
    source: "sps",
    speed: 30,
    darkvision: 60,
    size: "Mediano o Pequeño",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Común"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Tipo de Criatura",
        description: "Eres una monstruosidad (no un humanoid).",
      },
      {
        name: "Carapacho Camaleónico",
        description:
          "Sin armadura, tu CA base es 13 + modificador de DES; como acción, cambias el color del carapacho para camuflarte (ventaja en Sigilo).",
      },
      {
        name: "Brazos Secundarios",
        description:
          "Dos brazos menores que manipulan objetos, puertas y objetos minúsculos o empuñan armas con la propiedad ligera.",
      },
      {
        name: "Sin Sueño",
        description:
          "No necesitas dormir y puedes permanecer consciente durante el descanso largo (sin actividad vigorosa).",
      },
      {
        name: "Telepatía Thri-Kreen",
        description:
          "No hablas otros idiomas: transmites pensamientos telepáticamente a criaturas dispuestas a 120 pies que entiendan al menos un idioma.",
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
        name: "Dote",
        description:
          "Ganas una dote (feat) a tu elección. Anota el nombre y el efecto en las observaciones, por si la mesa usa dotes.",
      },
      {
        name: "Versatilidad",
        description:
          "+1 en dos atributos a tu elección (fase de atributos) y una pericia a tu elección (fase de pericias).",
      },
    ],
  },
  {
    id: "anao_colinano",
    raceId: "anao",
    name: "Enano de las Colinas",
    source: "phb",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Resistencia de las Colinas",
        description: "Tu máximo de PV aumenta en 1 por cada nivel ganado.",
      },
    ],
  },
  {
    id: "anao_da_montanha",
    raceId: "anao",
    name: "Enano de la Montaña",
    source: "phb",
    abilityBonus: { str: 2 },
    proficiencies: { armors: ["leve", "media"] },
    traits: [
      {
        name: "Competencia con Armaduras Enanas",
        description: "Competente con armaduras ligeras y medianas.",
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
    languages: ["Otro (a elegir)"],
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Magia Duergar",
        description:
          "A partir del 3er nivel, conjuras Agrandar/Reducir en ti mismo y, a partir del 5º, Invisibilidad en ti mismo, sin componentes materiales; una vez por descanso largo cada uno (o con espacios de conjuro). INT, SAB o CAR es tu atributo de conjuración.",
      },
      {
        name: "Resistencia Enana",
        description:
          "Ventaja en salvaciones para evitar o terminar el estado envenenado y resistencia al daño por veneno.",
      },
      {
        name: "Fortaleza Psíquica",
        description:
          "Ventaja en salvaciones para evitar o terminar los estados encantado y aturdido.",
      },
    ],
  },
  {
    id: "elfo_alto",
    raceId: "elfo",
    name: "Alto Elfo",
    source: "phb",
    abilityBonus: { int: 1 },
    languages: ["Otro (a elegir)"],
    proficiencies: { weapons: ["espada_longa", "espada_curta", "arco_curto", "arco_longo"] },
    traits: [
      {
        name: "Entrenamiento con Armas Élficas",
        description:
          "Competente con espadas largas, espadas cortas, arcos cortos y largos.",
      },
      {
        name: "Truco",
        description:
          "Conoces un truco de la lista de conjuros del mago (INT como atributo de conjuración).",
      },
      {
        name: "Idioma Extra",
        description: "Ganas un idioma a tu elección.",
      },
    ],
  },
  {
    id: "elfo_silvestre",
    raceId: "elfo",
    name: "Elfo de los Bosques",
    source: "phb",
    abilityBonus: { wis: 1 },
    speed: 35,
    proficiencies: { weapons: ["espada_longa", "espada_curta", "arco_curto", "arco_longo"] },
    traits: [
      {
        name: "Entrenamiento con Armas Élficas",
        description:
          "Competente con espadas largas, espadas cortas, arcos cortos y largos.",
      },
      {
        name: "Pies Ligeros",
        description: "Tu desplazamiento base aumenta a 35 pies.",
      },
      {
        name: "Máscara de la Naturaleza",
        description:
          "Puedes intentar esconderte incluso cuando solo estés ligeramente oculto por vegetación, lluvia fina, nieve, niebla, etc.",
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
        name: "Sensibilidad a la Luz Solar",
        description:
          "Desventaja en ataques y pruebas de Percepción (SAB) que dependen de la vista cuando tú, el objetivo o lo que percibes estáis en luz directa del sol.",
      },
      {
        name: "Magia Drow",
        description:
          "Conoces el truco Luces Danzantes; a partir del 3er nivel conjuras Fuego de Hadas y a partir del 5º Oscuridad con este rasgo (una vez por descanso largo cada uno); CAR es tu atributo de conjuración.",
      },
      {
        name: "Entrenamiento con Armas Drow",
        description: "Competente con rapiers, espadas cortas y ballestas de mano.",
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
        name: "Sentido Incisivo",
        description: "Ventaja en pruebas de Investigación y Perspicacia.",
      },
      {
        name: "Bendición de la Tejedora Lunar",
        description:
          "Conoces el truco Luz; a partir del 3er nivel conjuras Dormir y a partir del 5º Invisibilidad (solo en ti) con este rasgo (una vez por descanso largo cada uno, sin componentes materiales); SAB es tu atributo de conjuración.",
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
    languages: ["Otro (a elegir)"],
    traits: [
      ASI_FLOATING,
      {
        name: "Paso Feérico",
        description:
          "Como acción adicional, te transportas mágicamente hasta 30 pies hasta un espacio desocupado que puedas ver; usos = bónus de competencia (descanso largo). A partir del 3er nivel, tu estación actual añade un efecto (CD 8 + comp. + INT, SAB o CAR): Otoño (encanta a 2 criaturas a 10 pies, SAB), Invierno (asusta a 1 criatura a 5 pies), Primavera (intercambio de lugar con un aliado voluntario) o Verano (5 pies de daño de fuego = competencia).",
      },
    ],
  },
  {
    id: "elfo_mar",
    raceId: "elfo",
    name: "Elfo del Mar",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    languages: ["Otro (a elegir)"],
    traits: [
      ASI_FLOATING,
      {
        name: "Hijo del Mar",
        description: "Respiras aire y agua y tienes resistencia al daño de frío.",
      },
      {
        name: "Amigo del Mar",
        description:
          "Puedes comunicarte con ideas simples con cualquier besta que tenga desplazamiento de natación; ella entiende tus palabras, pero tú no entiendes las suyas a cambio.",
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
    languages: ["Otro (a elegir)"],
    traits: [
      ASI_FLOATING,
      {
        name: "Bendición de la Reina Cuervo",
        description:
          "Como acción adicional, te transportas mágicamente hasta 30 pies hasta un espacio desocupado que puedas ver; usos = bónus de competencia (descanso largo). A partir del 3er nivel, además obtienes resistencia a todo el daño hasta el inicio de tu próximo turno cuando te transportas así.",
      },
      {
        name: "Resistencia al Necrótico",
        description: "Resistencia al daño necrótico.",
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
        name: "Fuego Astral",
        description:
          "Conoces un truco a tu elección: Luces Danzantes, Luz o Llama Sagrada (INT, SAB o CAR, a elegir al crear).",
      },
      {
        name: "Paso de Luz Estelar",
        description:
          "Como acción adicional, te transportas mágicamente hasta 30 pies hasta un espacio desocupado que puedas ver; usos = bónus de competencia (descanso largo).",
      },
      {
        name: "Trance Astral",
        description:
          "No necesitas dormir y ningún conjuro puede hacerte dormir; terminas un descanso largo en 4 horas de meditación en trance. Cada vez que terminas, obtienes competencia en una pericia y en un arma o herramienta del Manual del Jugador hasta el próximo descanso largo.",
      },
    ],
  },
  {
    id: "halfling_leve",
    raceId: "halfling",
    name: "Mediano Piesligeros",
    source: "phb",
    abilityBonus: { cha: 1 },
    traits: [
      {
        name: "Sigilo Natural",
        description: "Puedes intentar esconderte tras una criatura mayor que tú.",
      },
    ],
  },
  {
    id: "halfling_robusto",
    raceId: "halfling",
    name: "Mediano Fornido",
    source: "phb",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Resistencia Fornida",
        description:
          "Ventaja en salvaciones contra venenos y resistencia al daño por veneno.",
      },
    ],
  },
  {
    id: "halfling_fantasma",
    raceId: "halfling",
    name: "Mediano Fantasma",
    source: "scag",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Habla Silenciosa",
        description:
          "Hablas telepáticamente con cualquier criatura a hasta 30 pies; solo te entiende si compartís un idioma, y hablas con una criatura a la vez.",
      },
    ],
  },
  {
    id: "halfling_lotusden",
    raceId: "halfling",
    name: "Mediano Lotusden",
    source: "egw",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Hijos del Sotobosque",
        description:
          "Conoces el truco de Druida; a partir del 3er nivel conjuras Enredar y a partir del 5º Espinas Crecientes con este rasgo (una vez por descanso largo cada uno, sin componentes materiales); SAB es tu atributo de conjuración.",
      },
      {
        name: "Camino de la Madera",
        description:
          "Las pruebas hechas para rastrearte tienen desventaja y puedes moverte por terreno difícil vegetal no mágico sin gastar movimiento extra.",
      },
    ],
  },
  {
    id: "gnomo_bosque",
    raceId: "gnomo",
    name: "Gnomo del Bosque",
    source: "phb",
    abilityBonus: { dex: 1 },
    traits: [
      {
        name: "Ilusionista Natural",
        description: "Conoces el truco Ilusión Menor (INT como atributo).",
      },
      {
        name: "Hablar con Animales",
        description:
          "Puedes comunicarte de forma simple con bestias Pequeñas o menores por sonido y gestos.",
      },
    ],
  },
  {
    id: "gnomo_da_rocha",
    raceId: "gnomo",
    name: "Gnomo de las Rocas",
    source: "phb",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Sabiduría del Artesano",
        description:
          "En pruebas de Historia (INT) sobre objetos mágicos, alquímicos o de artilugios, sumas el doble de tu competencia (si ya la tienes).",
      },
      {
        name: "Bricolaje",
        description:
          "Competente con herramientas de bricolaje; gastando 1 hora y 10 PO en materiales, construyes un dispositivo mecánico Pequeño que funciona durante 24 horas (máx. 3 a la vez).",
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
    languages: ["Otro (a elegir)"],
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Resistencia Mágica Gnómica",
        description: "Ventaja en salvaciones de INT, SAB y CAR contra conjuros.",
      },
      {
        name: "Regalo de los Svirfneblin",
        description:
          "A partir del 3er nivel, conjuras Disfraz Alterado y, a partir del 5º, Indetectabilidad con este rasgo, sin componentes materiales; una vez por descanso largo cada uno (o con espacios de conjuro). INT, SAB o CAR es tu atributo.",
      },
      {
        name: "Camuflaje Svirfneblin",
        description:
          "Puedes hacer pruebas de Sigilo (DES) con ventaja; usos = bónus de competencia (descanso largo).",
      },
    ],
  },
  {
    id: "draconato_sangue_dragao",
    raceId: "draconato",
    name: "Dracónido Sangre de Dragón (Draconblood)",
    source: "egw",
    replacesAbilityBonus: true,
    abilityBonus: { int: 2, cha: 1 },
    darkvision: 60,
    replacesTraits: true,
    traits: [
      {
        name: "Ascendencia Dracónica",
        description:
          "Elige un tipo de dragón: define el daño y el área de tu aliento y el tipo de resistencia que obtienes.",
      },
      {
        name: "Aliento Dracónico",
        description:
          "Como acción, exhalas energía en el área de tu ascendencia; salvación (CD 8 + comp. + CON), 2d6 de daño (mitad con éxito), aumentando a 3d6 en el 6º, 4d6 en el 11º y 5d6 en el 16º nivel; una vez por descanso corto o largo.",
      },
      {
        name: "Presencia Imponente",
        description:
          "Cuando haces una prueba de Intimidación o Persuasión, puedes hacerla con ventaja; una vez por descanso largo.",
      },
    ],
  },
  {
    id: "draconato_ravenite",
    raceId: "draconato",
    name: "Dracónido Ravenite",
    source: "egw",
    replacesAbilityBonus: true,
    abilityBonus: { str: 2, con: 1 },
    darkvision: 60,
    replacesTraits: true,
    traits: [
      {
        name: "Ascendencia Dracónica",
        description:
          "Elige un tipo de dragón: define el daño y el área de tu aliento y el tipo de resistencia que obtienes.",
      },
      {
        name: "Aliento Dracónico",
        description:
          "Como acción, exhalas energía en el área de tu ascendencia; salvación (CD 8 + comp. + CON), 2d6 de daño (mitad con éxito), aumentando a 3d6 en el 6º, 4d6 en el 11º y 5d6 en el 16º nivel; una vez por descanso corto o largo.",
      },
      {
        name: "Ataque Vengativo",
        description:
          "Cuando sufres daño de una criatura al alcance de un arma que empuñas, puedes usar tu reacción para atacarla; una vez por descanso corto o largo.",
      },
    ],
  },
  {
    id: "draconato_cromatico",
    raceId: "draconato",
    name: "Dracónido Cromático",
    source: "ftd",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Ascendencia Cromática",
        description:
          "Elige un dragón cromático (negro, azul, verde, blanco o rojo): define el tipo de daño de tus otros rasgos.",
      },
      {
        name: "Aliento",
        description:
          "Al usar la acción Atacar, puedes sustituir un ataque por una línea de 30 pies y 5 pies de ancho (salvación de DES), causando 1d10 de daño del tipo de tu ascendencia (mitad con éxito); 2d10 en el 5º, 3d10 en el 11º y 4d10 en el 17º nivel. Usos = bónus de competencia (descanso largo).",
      },
      {
        name: "Resistencia Dracónica",
        description: "Resistencia al daño del tipo de tu ascendencia.",
      },
      {
        name: "Embestida Cromática",
        description:
          "A partir del 5º nivel, como acción, te vuelves inmune al tipo de daño de tu ascendencia durante 1 minuto; una vez por descanso largo.",
      },
    ],
  },
  {
    id: "draconato_metalico",
    raceId: "draconato",
    name: "Dracónido Metálico",
    source: "ftd",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Ascendencia Metálica",
        description:
          "Elige un dragón metálico (latón, bronce, cobre, oro o plata): define el tipo de daño de tus otros rasgos.",
      },
      {
        name: "Aliento",
        description:
          "Al usar la acción Atacar, puedes sustituir un ataque por un cono de 15 pies (salvación de DES), causando 1d10 de daño del tipo de tu ascendencia (mitad con éxito); 2d10 en el 5º, 3d10 en el 11º y 4d10 en el 17º nivel. Usos = bónus de competencia (descanso largo).",
      },
      {
        name: "Resistencia Dracónica",
        description: "Resistencia al daño del tipo de tu ascendencia.",
      },
      {
        name: "Aliento Metálico",
        description:
          "A partir del 5º nivel, obtienes un segundo soplo en cono de 15 pies (una vez por descanso largo): Soplo Devorador (salvación de CON o quedas incapacitado hasta tu próximo turno) o Soplo de Repulsión (salvación de FUER o eres empujado 20 pies y quedas caído).",
      },
    ],
  },
  {
    id: "draconato_gema",
    raceId: "draconato",
    name: "Dracónido de Gema",
    source: "ftd",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Ascendencia de Gema",
        description:
          "Elige un dragón de gema (amatista, cristal, esmeralda, zafiro o topacio): define el tipo de daño de tus otros rasgos.",
      },
      {
        name: "Aliento",
        description:
          "Al usar la acción Atacar, puedes sustituir un ataque por un cono de 15 pies (salvación de DES), causando 1d10 de daño del tipo de tu ascendencia (mitad con éxito); 2d10 en el 5º, 3d10 en el 11º y 4d10 en el 17º nivel. Usos = bónus de competencia (descanso largo).",
      },
      {
        name: "Resistencia Dracónica",
        description: "Resistencia al daño del tipo de tu ascendencia.",
      },
      {
        name: "Mente Psíquica",
        description:
          "Puedes hablar telepáticamente con cualquier criatura que veas a hasta 30 pies, sin necesidad de compartir idioma (la criatura debe entender al menos un idioma).",
      },
      {
        name: "Vuelo de Gema",
        description:
          "A partir del 5º nivel, como acción adicional, manifiestas alas espectrales durante 1 minuto, obteniendo desplazamiento de vuelo igual al de caminata y la capacidad de flotar; una vez por descanso largo.",
      },
    ],
  },
  {
    id: "tiefling_asmodeus",
    raceId: "tiefling",
    name: "Linaje de Asmodeus",
    source: "phb",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legado Infernal",
        description:
          "Conoces el truco Taumaturgia; a partir del 3er nivel conjuras Represalia Infernal (como conjuro de 2º nivel) y a partir del 5º Oscuridad con este rasgo, recargando tras un descanso largo; CAR es tu atributo de conjuración.",
      },
    ],
  },
  {
    id: "tiefling_baalzebul",
    raceId: "tiefling",
    name: "Linaje de Baalzebul",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legado de Maladomini",
        description:
          "Conoces el truco Taumaturgia; a partir del 3er nivel conjuras Rayo de Enfermedad (como conjuro de 2º nivel) y a partir del 5º Corona de Locura con este rasgo, recargando tras un descanso largo; CAR es tu atributo de conjuración.",
      },
    ],
  },
  {
    id: "tiefling_dispater",
    raceId: "tiefling",
    name: "Linaje de Dispater",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, dex: 1 },
    traits: [
      {
        name: "Legado de Dis",
        description:
          "Conoces el truco Taumaturgia; a partir del 3er nivel conjuras Disfraz Alterado (como conjuro de 2º nivel) y a partir del 5º Detectar Pensamientos con este rasgo, recargando tras un descanso largo; CAR es tu atributo de conjuración.",
      },
    ],
  },
  {
    id: "tiefling_fierna",
    raceId: "tiefling",
    name: "Linaje de Fierna",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, wis: 1 },
    traits: [
      {
        name: "Legado de Phlegethos",
        description:
          "Conoces el truco Amigos; a partir del 3er nivel conjuras Hechizar Persona (como conjuro de 2º nivel) y a partir del 5º Sugestión con este rasgo, recargando tras un descanso largo; CAR es tu atributo de conjuración.",
      },
    ],
  },
  {
    id: "tiefling_glasya",
    raceId: "tiefling",
    name: "Linaje de Glasya",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, dex: 1 },
    traits: [
      {
        name: "Legado de Malbolge",
        description:
          "Conoces el truco Ilusión Menor; a partir del 3er nivel conjuras Disfraz Alterado y a partir del 5º Invisibilidad (como conjuro de 2º nivel) con este rasgo, recargando tras un descanso largo; CAR es tu atributo de conjuración.",
      },
    ],
  },
  {
    id: "tiefling_levistus",
    raceId: "tiefling",
    name: "Linaje de Levistus",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, con: 1 },
    traits: [
      {
        name: "Legado de Estígia",
        description:
          "Conoces el truco Toque Glacial; a partir del 3er nivel conjuras Armadura de Agathys (como conjuro de 2º nivel) y a partir del 5º Oscuridad con este rasgo, recargando tras un descanso largo; CAR es tu atributo de conjuración.",
      },
    ],
  },
  {
    id: "tiefling_mammon",
    raceId: "tiefling",
    name: "Linaje de Mammon",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legado de Minauros",
        description:
          "Conoces el truco Mano de Mago; a partir del 3er nivel conjuras Disco Flotante de Tenser (como conjuro de 2º nivel) y a partir del 5º Cerradura Arcana con este rasgo, recargando tras un descanso largo; CAR es tu atributo de conjuración.",
      },
    ],
  },
  {
    id: "tiefling_mephistopheles",
    raceId: "tiefling",
    name: "Linaje de Mephistopheles",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legado de Cania",
        description:
          "Conoces el truco Mano de Mago; a partir del 3er nivel conjuras Manos Ardientes (como conjuro de 2º nivel) y a partir del 5º Hoja Llameante (como conjuro de 3º nivel) con este rasgo, recargando tras un descanso largo; CAR es tu atributo de conjuración.",
      },
    ],
  },
  {
    id: "tiefling_zariel",
    raceId: "tiefling",
    name: "Linaje de Zariel",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, str: 1 },
    traits: [
      {
        name: "Legado de Avernus",
        description:
          "Conoces el truco Taumaturgia; a partir del 3er nivel conjuras Golpe Escaldante (como conjuro de 2º nivel) y a partir del 5º Golpe Marcante (como conjuro de 3º nivel) con este rasgo, recargando tras un descanso largo; CAR es tu atributo de conjuración.",
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
        name: "Apariencia",
        description:
          "Elige 1d4 + 1 rasgos: cuernos pequeños, colmillos, lengua bifurcada, ojos felinos, cascos de cabra, casco fendido, cola bifurcada, piel corácea o escamosa, roja o azul oscuro, sin sombra o reflejo, o olor a azufre.",
      },
      {
        name: "Feral",
        description:
          "Sustituye el Aumento de Atributo por +2 en DES y +1 en INT (aplicado automáticamente por la ficha).",
      },
      {
        name: "Lengua del Diablo",
        description:
          "Conoces el truco Burla Viscosa; a partir del 3er nivel conjuras Hechizar Persona y a partir del 5º Fascinar con este rasgo, recargando tras un descanso largo; sustituye el Legado Infernal.",
      },
      {
        name: "Fuego Infernal",
        description:
          "A partir del 3er nivel, conjuras Manos Ardientes (como conjuro de 2º nivel) una vez por descanso largo, en lugar de la Represalia Infernal del Legado Infernal.",
      },
      {
        name: "Alas",
        description:
          "Tienes alas de murciélago y desplazamiento de vuelo de 30 pies mientras no lleves armadura pesada; sustituye el Legado Infernal.",
      },
    ],
  },
  {
    id: "genasi_ar",
    raceId: "genasi",
    name: "Genasi del Aire",
    source: "mtotm",
    speed: 35,
    traits: [
      {
        name: "Respiración Inagotable",
        description:
          "Puedes contener la respiración indefinidamente mientras no estés incapacitado.",
      },
      {
        name: "Resistencia al Relámpago",
        description: "Resistencia al daño eléctrico.",
      },
      {
        name: "Mezclarse con el Viento",
        description:
          "Conoces el truco Agarre Electrizante; a partir del 3er nivel conjuras Caída Plumbea y a partir del 5º Levitar con este rasgo, sin componentes materiales (una vez por descanso largo cada uno, o con espacios de conjuro); INT, SAB o CAR es tu atributo.",
      },
    ],
  },
  {
    id: "genasi_terra",
    raceId: "genasi",
    name: "Genasi de la Tierra",
    source: "mtotm",
    traits: [
      {
        name: "Camino de la Tierra",
        description:
          "Puedes atravesar terreno difícil sin gastar movimiento extra al moverte por el suelo o el pavimento.",
      },
      {
        name: "Fusión con la Piedra",
        description:
          "Conoces el truco Guarda de Cuchillas, que también puedes conjurar como acción adicional (hasta una vez por descanso largo, igual a tu bónus de competencia); a partir del 5º nivel conjuras Sin Rastro sin componentes materiales (una vez por descanso largo o con espacios de conjuro); INT, SAB o CAR es tu atributo.",
      },
    ],
  },
  {
    id: "genasi_fogo",
    raceId: "genasi",
    name: "Genasi del Fuego",
    source: "mtotm",
    traits: [
      {
        name: "Resistencia al Fuego",
        description: "Resistencia al daño de fuego.",
      },
      {
        name: "Alcanzar las Llamas",
        description:
          "Conoces el truco Llama Productora; a partir del 3er nivel conjuras Manos Ardientes y a partir del 5º Hoja Llameante (esta sin componentes materiales) con este rasgo, una vez por descanso largo cada uno (o con espacios de conjuro); INT, SAB o CAR es tu atributo.",
      },
    ],
  },
  {
    id: "genasi_agua",
    raceId: "genasi",
    name: "Genasi del Agua",
    source: "mtotm",
    traits: [
      {
        name: "Resistencia al Ácido",
        description: "Resistencia al daño ácido.",
      },
      {
        name: "Anfibio",
        description: "Respiras aire y agua.",
      },
      {
        name: "Llamar a la Ola",
        description:
          "Conoces el truco Salpicos de Ácido; a partir del 3er nivel conjuras Crear o Destruir Agua y a partir del 5º Caminar sobre el Agua con este rasgo, sin componentes materiales (una vez por descanso largo cada uno, o con espacios de conjuro); INT, SAB o CAR es tu atributo.",
      },
    ],
  },
  {
    id: "aasimar_protetor",
    raceId: "aasimar",
    name: "Aasimar Protector",
    source: "vg",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Alma Radiante",
        description:
          "A partir del 3er nivel, como acción, creas alas luminosas y ojos resplandecientes durante 1 minuto (o hasta terminar con una acción adicional): obtienes 30 pies de desplazamiento de vuelo y, una vez por turno, causas daño radiante extra a una criatura igual a tu nivel; una vez por descanso largo.",
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
          "A partir del 3er nivel, como acción, te envuelves en luz deslumbrante durante 1 minuto (o hasta terminar con una acción adicional; luz brillante a 10 pies y tenue 10 pies más allá): al final de cada uno de tus turnos, tú y cada criatura a 10 pies sufres daño radiante igual a la mitad de tu nivel (redondeado hacia arriba); una vez por turno, causas daño radiante extra a una criatura igual a tu nivel; una vez por descanso largo.",
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
          "A partir del 3er nivel, como acción, creas ojos oscuros y alas esqueléticas durante 1 minuto (o hasta terminar con una acción adicional): las criaturas a 10 pies que te ven deben hacer una salvación de CAR (CD 8 + comp. + CAR) o quedan asustadas hasta el final de tu próximo turno; una vez por turno, causas daño necrótico extra a una criatura igual a tu nivel; una vez por descanso largo.",
      },
    ],
  },
  {
    id: "shifter_pele_fera",
    raceId: "shifter",
    name: "Shifter Piel-Fiera",
    source: "erlw",
    abilityBonus: { con: 2, str: 1 },
    proficiencies: { skills: ["athletics"] },
    traits: [
      {
        name: "Atleta Natural",
        description: "Competente en Atletismo.",
      },
      {
        name: "Rasgo del Cambio",
        description:
          "Cuando usas Cambio de Forma, obtienes 1d6 de PV temporarios adicionales y, mientras estás transformado, recibes +1 de CA.",
      },
    ],
  },
  {
    id: "shifter_presa_longa",
    raceId: "shifter",
    name: "Shifter Colmillo Largo",
    source: "erlw",
    abilityBonus: { str: 2, dex: 1 },
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Ferocidad",
        description: "Competente en Intimidación.",
      },
      {
        name: "Rasgo del Cambio",
        description:
          "Mientras estás transformado, puedes usar tus caninos afiados para atacar desarmadamente como acción adicional; en caso de acerto, causas 1d6 + modificador de FUER de daño perforante.",
      },
    ],
  },
  {
    id: "shifter_passo_ligeiro",
    raceId: "shifter",
    name: "Shifter Paso Ligero",
    source: "erlw",
    abilityBonus: { dex: 2, cha: 1 },
    proficiencies: { skills: ["acrobatics"] },
    traits: [
      {
        name: "Gracia",
        description: "Competente en Acrobacias.",
      },
      {
        name: "Rasgo del Cambio",
        description:
          "Mientras estás transformado, tu desplazamiento de caminata aumenta en 10 pies; además, puedes moverte hasta 10 pies como reacción cuando una criatura hostil termina su turno a 5 pies de ti, sin provocar ataques de oportunidad.",
      },
    ],
  },
  {
    id: "shifter_cacada_selvagem",
    raceId: "shifter",
    name: "Shifter Caza Salvaje",
    source: "erlw",
    abilityBonus: { wis: 2 },
    proficiencies: { skills: ["survival"] },
    traits: [
      {
        name: "Rastreador Natural",
        description: "Competente en Supervivencia.",
      },
      {
        name: "Marca del Olfato",
        description:
          "Como acción adicional, marcas una criatura que veas a hasta 10 pies; hasta el final de tu próximo descanso largo, tu bónus de competencia se duplica en pruebas de característica para encontrarla y siempre sabes dónde está si está a hasta 60 pies; una vez por descanso corto o largo.",
      },
      {
        name: "Rasgo del Cambio",
        description: "Mientras estás transformado, tienes ventaja en pruebas de Sabiduría.",
      },
    ],
  },
  {
    id: "aven_ibis",
    raceId: "aven",
    name: "Aven Cabeza de Ibis",
    source: "psa",
    abilityBonus: { int: 1 },
    traits: [
      {
        name: "Bendición de Kefnet",
        description:
          "Sumas la mitad de tu bónus de competencia (redondeado hacia abajo) a cualquier prueba de Inteligencia que no incluya ya tu competencia.",
      },
    ],
  },
  {
    id: "aven_falcao",
    raceId: "aven",
    name: "Aven Cabeza de Halcón",
    source: "psa",
    abilityBonus: { wis: 2 },
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Ojo de Halcón",
        description:
          "Competente en Percepción; además, atacar a larga distancia no impone desventaja en tus ataques con armas a distancia.",
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
        name: "Máscara de la Naturaleza",
        description:
          "Puedes intentar esconderte incluso cuando solo estés ligeramente oculto por vegetación, lluvia fina, nieve, niebla, etc.",
      },
      {
        name: "Truco",
        description:
          "Conoces un truco a tu elección de la lista de conjuros del druida (SAB como atributo de conjuración).",
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
        name: "Sabiduría de las Aguas",
        description: "Competente en Historia y Naturaleza.",
      },
      {
        name: "Truco",
        description:
          "Conoces un truco a tu elección de la lista de conjuros del mago (INT como atributo de conjuración).",
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
