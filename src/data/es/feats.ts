import type { AbilityKey } from "../../domain/types";

export type FeatRequirement =
  | { kind: "ability"; ability: AbilityKey; value: number; label: string }
  | { kind: "abilityAny"; options: { ability: AbilityKey; value: number }[]; label: string }
  | { kind: "armor"; armor: "leve" | "media" | "pesada"; label: string }
  | { kind: "spellcasting"; label: string };

export type FeatDef = {
  id: string;
  source: string;
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
  {
    "id": "marca_draconica_aberrante",
    "name": "Marca Dracónica Aberrante",
    "description": "Requisito: ninguna otra marca. +1 en CON; aprendes 1 truco y 1 conjuro de hechicero (CON); al conjurar la marca, gastas 1 dado de vida (par: PV temporales; impar: daño de fuerza)",
    "abilityBonus": {
      "con": 1
    },
    "source": "erlw"
  },
  {
    "id": "ator",
    "name": "Actor",
    "description": "+1 en CAR; ventaja en Engaño y Actuación cuando te haces pasar por otra persona; puedes imitar voces y manierismos.",
    "abilityBonus": {
      "cha": 1
    },
    "source": "phb"
  },
  {
    "id": "adepto_das_togas_pretas",
    "name": "Adepto de las Togas Negras",
    "description": "Requisito: 4º nivel e Iniciación en Alta Magia (Nuitari). Aprendes 1 conjuro de 2º nivel de Encantamiento o Nigromancia sin slot; gastas dados de vida para sumar al daño",
    "source": "dsotdq"
  },
  {
    "id": "adepto_das_togas_vermelhas",
    "name": "Adepto de las Togas Rojas",
    "description": "Requisito: 4º nivel e Iniciación en Alta Magia (Lunitari). Aprendes 1 conjuro de 2º nivel (Ilusión o Transmutación) sin slot; tiradas ≤ 9 en ataque o prueba valen 10 (usos = comp.)",
    "source": "dsotdq"
  },
  {
    "id": "adepto_das_togas_brancas",
    "name": "Adepto de las Togas Blancas",
    "description": "Requisito: 4º nivel e Iniciación en Alta Magia. Ganas 1 conjuro de 2º nivel (Abjuración o Adivinación) sin slot; reacción: gastas un slot; reduces daño en d6s + mod. de conjuración",
    "source": "dsotdq"
  },
  {
    "id": "agente_da_ordem",
    "name": "Agente del Orden",
    "description": "Requisito: 4º nivel y Vástago de los Planos Exteriores (Ley). +1 en un atributo; una vez por turno, +1d8 de fuerza a una criatura a 60 pies: salvación de SAB o restringido",
    "source": "planescape"
  },
  {
    "id": "alerta",
    "name": "Alerta",
    "description": "+5 en la iniciativa; no puedes ser sorprendido mientras estés consciente; las criaturas no tienen ventaja en ataques contra ti por estar invisible para ellas.",
    "source": "phb"
  },
  {
    "id": "iniciacao_de_artificeiro",
    "name": "Iniciación de Artífice",
    "description": "Aprendes 1 truco y 1 conjuro de 1º nivel de la lista de artífice (INT), sin slot (1/ descanso largo); competencia con herramientas de artesano a tu elección, usadas como foco",
    "source": "tce"
  },
  {
    "id": "atleta",
    "name": "Atleta",
    "description": "Escalar y levantarte tras una caída cuestan la mitad de tu desplazamiento; salto con FUER o DES; +1 en FUER o DES.",
    "source": "phb"
  },
  {
    "id": "herdeiro_malefico",
    "name": "Vástago Maléfico",
    "description": "Requisito: 4º nivel y Vástago de los Planos Exteriores (Mal). +1 en un atributo; una vez por turno, +1d6 + comp. de necrótico a una criatura a 60 pies y recuperas PV iguales",
    "source": "planescape"
  },
  {
    "id": "sorte_abundante",
    "name": "Suerte Abundante",
    "description": "Requisito: mediano. Reacción: un aliado a 30 pies que tire un 1 en el d20 lo tira de nuevo (debe usar el nuevo resultado); hasta tu próximo turno no puedes usar Afortunado",
    "source": "xge"
  },
  {
    "id": "cartomante",
    "name": "Cartomante",
    "description": "Requisito: 4º nivel. Un mazo es tu foco; aprendes Prestidigitación; tras un descanso largo imbues un conjuro de 1 acción en el mazo y lo lanzas con acción adicional (dura 8 horas)",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "Lanzamiento de conjuros"
      }
    ],
    "source": "botmt"
  },
  {
    "id": "investida",
    "name": "Investida",
    "description": "Tras Dash en línea recta, puedes atacar a una criatura en el camino: +5 de daño o empujarla 10 pies (acción adicional).",
    "source": "phb"
  },
  {
    "id": "chef",
    "name": "Chef",
    "description": "+1 en CON o SAB y competencia con herramientas de cocinero; la comida en descanso corto da +1d8 PV extra por dado; un bocado da PV temporales (acción adicional; usos = comp.)",
    "source": "tce"
  },
  {
    "id": "sequaz_do_caos",
    "name": "Cohorte del Caos",
    "description": "Requisito: 4º nivel y Vástago de los Planos Exteriores (Caos). +1 en un atributo; tirar un 1 o un 20 en un ataque o salvación activa un efecto caótico (1d4) hasta tu próximo turno",
    "source": "planescape"
  },
  {
    "id": "especialista_besta",
    "name": "Especialista en Ballestas",
    "description": "Ignoras la propiedad de recarga; el ataque a distancia con un arma no sufre desventaja por estar a menos de 5 pies; ataque bonus con ballesta de mano.",
    "source": "phb"
  },
  {
    "id": "cruel",
    "name": "Cruel",
    "description": "Ganas dados de crueldad d6 iguales a tu comp. (una vez por turno): suman al daño, dan PV temporales en un crítico o suman a Intimidación; los recuperas en un descanso largo",
    "source": "tcsr"
  },
  {
    "id": "esmagador",
    "name": "Aplastador",
    "description": "+1 en FUER o CON; una vez por turno, un acierto contundente desplaza a la criatura 5 pies; un crítico contundente te da ventaja en ataques contra ella hasta tu próximo turno",
    "source": "tce"
  },
  {
    "id": "duelista_defensivo",
    "name": "Duelista Defensivo",
    "description": "Reacción: cuando una criatura te acierta con un ataque cuerpo a cuerpo, sumas tu bonificador de competencia a la CA contra ese ataque.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "dex",
        "value": 13,
        "label": "DES 13+"
      }
    ],
    "source": "phb"
  },
  {
    "id": "favorito_divino",
    "name": "Favorecido Divino",
    "description": "Requisito: 4º nivel y campaña de Dragonlance. Aprendes 1 truco de clérigo, Augurio y 1 conjuro de 1º nivel según tu alineamiento, lanzándolos 1 vez sin slot (1/ descanso largo)",
    "source": "dsotdq"
  },
  {
    "id": "medo_draconico",
    "name": "Miedo Dracónico",
    "description": "Requisito: dracónido. +1 en FUER, CON o CAR; gastas un uso de tu Aliento Dracónico en rugir: criaturas a 30 pies, salvación de SAB (CD 8 + comp. + CAR) o quedan asustadas 1 minuto",
    "source": "xge"
  },
  {
    "id": "couro_draconico",
    "name": "Piel Dracónica",
    "description": "Requisito: dracónido. +1 en FUER, CON o CAR; sin armadura, CA = 13 + DES (se permite escudo); tus garras naturales causan 1d4 + FUER de cortante",
    "source": "xge"
  },
  {
    "id": "alta_magia_drow",
    "name": "Alta Magia Drow",
    "description": "Requisito: elfo drow. Lanzas Detectar Magia a voluntad sin slot; Levitación y Disipar Magia 1 vez sin slot (recupera en descanso largo); CAR es tu atributo de conjuración",
    "source": "xge"
  },
  {
    "id": "empunhadura_dupla",
    "name": "Empuñadura Doble",
    "description": "+1 en la CA mientras empuñas armas distintas en cada mano; desenvainas/estudias dos armas a la vez; las armas no necesitan ser ligeras.",
    "source": "phb"
  },
  {
    "id": "explorador_masmorras",
    "name": "Explorador de Mazmorras",
    "description": "Ventaja en pruebas para encontrar puertas secretas y trampas y para resistir trampas; ignoras la desventaja por oscuridad.",
    "source": "phb"
  },
  {
    "id": "duravel",
    "name": "Duradero",
    "description": "+1 en CON; al usar un dado de vida en un descanso corto o largo, recuperas al menos 1 + mod. CON PV por dado.",
    "abilityBonus": {
      "con": 1
    },
    "source": "phb"
  },
  {
    "id": "robustez_ana",
    "name": "Robustez Enana",
    "description": "Requisito: enano. +1 en CON; al usar la acción Esquivar, gastas 1 dado de vida y curas el total + mod. CON (mínimo 1 PV)",
    "abilityBonus": {
      "con": 1
    },
    "source": "xge"
  },
  {
    "id": "adepto_oculto",
    "name": "Adepto Arcano",
    "description": "Aprendes 1 invocación arcana a tu elección (INT, SAB o CAR como atributo de conjuración); la cambias al subir de nivel; sus requisitos solo aplican si eres brujo y los cumples",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "Lanzamiento de conjuros"
      }
    ],
    "source": "tce"
  },
  {
    "id": "adepto_elemental",
    "name": "Adepto Elemental",
    "description": "Ignoras la resistencia a un tipo de daño elemental a tu elección (fuego, frío, eléctrico, ácido) y las criaturas que salvan contra tu daño elemental aún sufren la mitad.",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "capaz de lanzar conjuros"
      }
    ],
    "source": "phb"
  },
  {
    "id": "precisao_elfica",
    "name": "Precisión Élfica",
    "description": "Requisito: elfo o semielfo. +1 en DES, INT, SAB o CAR; cuando tienes ventaja en un ataque con ese atributo, vuelves a tirar uno de los dados (una vez)",
    "source": "xge"
  },
  {
    "id": "brasa_do_gigante_de_fogo",
    "name": "Brasa del Gigante de Fuego",
    "description": "Requisito: 4º nivel y Golpe del Gigante de Fuego. +1 en FUER, CON o SAB; resistencia al fuego; explosión de 15 pies con un ataque: salvación de DES o 1d8 + comp. de fuego y ciego",
    "source": "bpg"
  },
  {
    "id": "desvanecer",
    "name": "Desvanecerse",
    "description": "Requisito: gnomo. +1 en DES o INT; inmediatamente tras recibir daño, reacción para volverte invisible hasta tu próximo turno o hasta que ataques; 1/ descanso corto o largo",
    "source": "xge"
  },
  {
    "id": "teletransporte_feerico",
    "name": "Teletransporte Feérico",
    "description": "Requisito: alto elfo. +1 en INT o CAR; aprendes Silvano y Paso Etéreo, lanzándolo 1 vez sin slot (recupera en descanso); INT es tu atributo de conjuración",
    "source": "xge"
  },
  {
    "id": "toque_feerico",
    "name": "Toque Feérico",
    "description": "+1 en INT, SAB o CAR; aprendes Paso Etéreo y 1 conjuro de 1º nivel (Adivinación o Encantamiento), cada uno 1 vez sin slot (recupera en descanso largo)",
    "source": "tce"
  },
  {
    "id": "iniciacao_marcial",
    "name": "Iniciación Marcial",
    "description": "Requisito: competencia con armas marciales. Aprendes un Estilo de Combate de guerrero distinto de los que ya tengas; al recibir una mejora de atributo puedes cambiarlo por otro",
    "source": "tce"
  },
  {
    "id": "chamas_de_flegetonte",
    "name": "Llamas del Flegetonte",
    "description": "Requisito: tiefling. +1 en INT o CAR; vuelves a tirar los 1 de los dados de fuego; un conjuro de fuego te rodea de llamas (luz 30 pies; 1d4 de fuego a quien te acierte a 5 pies)",
    "source": "xge"
  },
  {
    "id": "lembranca_subita",
    "name": "Recuerdo Súbito",
    "description": "Requisito: clase que prepara conjuros. Acción adicional: preparas 1 conjuro de nivel igual o superior a uno ya preparado; 1/ descanso corto o largo",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "Lanzamiento de conjuros"
      }
    ],
    "source": "tcsr"
  },
  {
    "id": "furia_do_gigante_de_gelo",
    "name": "Furia del Gigante de Hielo",
    "description": "Requisito: 4º nivel y Golpe del Gigante de Hielo. +1 en FUER, CON o SAB; resistencia al frío; reacción: retalias con 1d8 de frío (salvación de CON o velocidad 0; usos = comp.)",
    "source": "bpg"
  },
  {
    "id": "dom_do_dragao_cromatico",
    "name": "Don del Dragón Cromático",
    "description": "Acción adicional: imbuyes un arma con ácido, frío, fuego, eléctrico o veneno (+1d4 durante 1 minuto; 1/ descanso largo); reacción: resistencia a ese tipo de daño (usos = comp.)",
    "source": "ftd"
  },
  {
    "id": "dom_do_dragao_de_gemas",
    "name": "Don del Dragón de Gemas",
    "description": "+1 en INT, SAB o CAR; reacción: una criatura a 10 pies que te dañó salva con FUER o sufre 2d8 de fuerza y es empujada 10 pies (mitad sin empujón; usos = comp.)",
    "source": "ftd"
  },
  {
    "id": "dom_do_dragao_metalico",
    "name": "Don del Dragón Metálico",
    "description": "Aprendes Curar Heridas, 1 vez sin slot (1/ descanso largo; INT, SAB o CAR); reacción: alas espirituales otorgan +comp. de CA a un aliado a 5 pies alcanzado (usos = comp.)",
    "source": "ftd"
  },
  {
    "id": "agarrador",
    "name": "Agarrador",
    "description": "+1 en FUER; ventaja en ataques contra la criatura que has agarrado; puedes intentar inmovilizar (tú y el objetivo inmovilizados) con tu acción; +1 en FUER.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "str",
        "value": 13,
        "label": "FUER 13+"
      }
    ],
    "abilityBonus": {
      "str": 1
    },
    "source": "phb"
  },
  {
    "id": "mestre_armas_pesadas",
    "name": "Maestro en Armas Pesadas",
    "description": "Al atacar con un arma cuerpo a cuerpo pesada, -5 en el ataque y +10 en el daño; acción adicional: ataque extra al reducir a una criatura a 0 PV.",
    "source": "phb"
  },
  {
    "id": "marca_draconica_superior",
    "name": "Marca Dracónica Superior",
    "description": "Requisito: 8º nivel y una marca dracónica. El dado de Intuición de tu marca sube un tipo; +1 en un atributo permitido por la marca; aprendes sus conjuros sin slot",
    "source": "wgte"
  },
  {
    "id": "astucia_do_gigante_das_nuvens",
    "name": "Astucia del Gigante de las Nubes",
    "description": "Requisito: 4º nivel y Golpe del Gigante de las Nubes. +1 en FUER, CON o CAR; reacción: resistencia al daño del ataque y te teletransportas 30 pies (usos = comp.)",
    "source": "bpg"
  },
  {
    "id": "atirador",
    "name": "Artillero",
    "description": "+1 en DES; competencia con armas de fuego; ignoras la propiedad de recarga; estar a 5 pies de una criatura hostil no impone desventaja a los ataques a distancia",
    "abilityBonus": {
      "dex": 1
    },
    "source": "tce"
  },
  {
    "id": "curandeiro",
    "name": "Sanador",
    "description": "Usar un kit de curación en una criatura cura 1d6 + 4 + tu nivel de personaje PV (una vez por criatura hasta el siguiente descanso corto).",
    "source": "phb"
  },
  {
    "id": "blindagem_pesada",
    "name": "Blindaje Pesado",
    "description": "+1 en FUER y competencia con armaduras pesadas",
    "requirements": [
      {
        "kind": "armor",
        "armor": "media",
        "label": "competencia con armadura media"
      }
    ],
    "abilityBonus": {
      "str": 1
    },
    "source": "phb"
  },
  {
    "id": "armadura_pesada",
    "name": "Armadura Pesada",
    "description": "+1 en FUER; mientras llevas armadura pesada, restas 3 del daño de contundente, perforante y cortante de ataques no mágicos.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "str",
        "value": 13,
        "label": "FUER 13+"
      }
    ],
    "abilityBonus": {
      "str": 1
    },
    "source": "phb"
  },
  {
    "id": "constituicao_infernal",
    "name": "Constitución Infernal",
    "description": "Requisito: tiefling. +1 en CON; resistencia al daño de frío y veneno; ventaja en salvaciones contra el envenenamiento",
    "abilityBonus": {
      "con": 1
    },
    "source": "xge"
  },
  {
    "id": "iniciacao_na_alta_magia",
    "name": "Iniciación en Alta Magia",
    "description": "Requisito: 4º nivel, campaña de Dragonlance y ser hechicero o mago. Eliges una luna de Krynn: aprendes 1 truco de mago y 2 conjuros de 1º nivel, sin slot (1/ descanso largo)",
    "source": "dsotdq"
  },
  {
    "id": "lider_inspirador",
    "name": "Líder Inspirador",
    "description": "+1 en CAR; tras 10 minutos de arenga, los aliados que pueden oírte ganan PV temporales = tu nivel + mod. CAR.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "cha",
        "value": 13,
        "label": "CAR 13+"
      }
    ],
    "abilityBonus": {
      "cha": 1
    },
    "source": "phb"
  },
  {
    "id": "mente_aguda",
    "name": "Mente Aguda",
    "description": "+1 en INT; sabes la hora y la dirección del norte; recuerdas todo lo que has visto/oido hasta el siguiente descanso largo.",
    "abilityBonus": {
      "int": 1
    },
    "source": "phb"
  },
  {
    "id": "agudeza_do_gigante_de_pedra",
    "name": "Agudeza del Gigante de Piedra",
    "description": "Requisito: 4º nivel y Golpe del Gigante de Piedra. +1 en FUER, CON o SAB; ves 60 pies en la oscuridad; acción adicional: la piedra causa 1d10 de fuerza (salvación de FUER o caído)",
    "source": "bpg"
  },
  {
    "id": "cavaleiro_da_coroa",
    "name": "Caballero de la Corona",
    "description": "Requisito: 4º nivel y Escudero de Solamnia. +1 en FUER, DES o CON; acción adicional: un aliado a 30 pies ataca con su reacción y suma 1d8 al daño (usos = comp.)",
    "source": "dsotdq"
  },
  {
    "id": "cavaleiro_da_rosa",
    "name": "Caballero de la Rosa",
    "description": "Requisito: 4º nivel y Escudero de Solamnia. +1 en CON, SAB o CAR; acción adicional: una criatura a 30 pies gana PV temporales = 1d8 + comp. + mod. del atributo aumentado",
    "source": "dsotdq"
  },
  {
    "id": "cavaleiro_da_espada",
    "name": "Caballero de la Espada",
    "description": "Requisito: 4º nivel y Escudero de Solamnia. +1 en INT, SAB o CAR; al acertar, intentas asustar (salvación de SAB o asustado; fallo: desventaja; usos = comp.)",
    "source": "dsotdq"
  },
  {
    "id": "armadura_leve",
    "name": "Armadura Ligera",
    "description": "+1 en FUER o DES y competencia con armaduras ligeras",
    "source": "phb"
  },
  {
    "id": "linguista",
    "name": "Lingüista",
    "description": "+1 en INT; aprendes 3 idiomas a tu elección; puedes escribir mensajes cifrados que otros no descifran sin un éxito.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "int",
        "value": 13,
        "label": "INT 13+"
      }
    ],
    "abilityBonus": {
      "int": 1
    },
    "source": "phb"
  },
  {
    "id": "afortunado",
    "name": "Afortunado",
    "description": "3 puntos de suerte (1/ descanso largo): antes o después de tirar un d20 (tuyo o contra ti), vuelves a tirar y eliges; puede dar ventaja/desventaja.",
    "source": "phb"
  },
  {
    "id": "matador_de_magos",
    "name": "Asesino de Magos",
    "description": "Reacción: ataque cuerpo a cuerpo a una criatura que conjura a 5 pies; ventaja en salvaciones contra conjuros a 5 pies; daño a quien concentra: desventaja en la concentración",
    "source": "phb"
  },
  {
    "id": "iniciacao_magica",
    "name": "Iniciación Mágica",
    "description": "Eliges una clase: aprendes 2 trucos y 1 conjuro de 1er nivel (componentes verbales y somáticos); puedes lanzar el conjuro como ritual 1/ descanso largo.",
    "source": "phb"
  },
  {
    "id": "adepto_marcial",
    "name": "Adepto Marcial",
    "description": "Aprendes 2 maniobras a tu elección y ganas 1 dado de superioridad d8 para alimentarlas (recupera en descanso corto o largo).",
    "source": "phb"
  },
  {
    "id": "armadura_moderada",
    "name": "Armadura Moderada",
    "description": "+1 en FUER o DES; ganas competencia con armaduras medianas y escudos.",
    "requirements": [
      {
        "kind": "armor",
        "armor": "media",
        "label": "competencia con armadura media"
      }
    ],
    "source": "phb"
  },
  {
    "id": "adepto_de_metamagia",
    "name": "Adepto Metamágico",
    "description": "Aprendes 2 opciones de metamagia de hechicero y ganas 2 puntos de conjuro exclusivos para metamagia (recuperas en descanso largo); cambias 1 opción al recibir mejora de atributo",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "Lanzamiento de conjuros"
      }
    ],
    "source": "tce"
  },
  {
    "id": "movel",
    "name": "Móvil",
    "description": "+10 pies de desplazamiento; Dash ignora terreno difícil; no provocas ataques de oportunidad de la criatura a la que atacaste cuerpo a cuerpo.",
    "source": "phb"
  },
  {
    "id": "armadura_media",
    "name": "Armadura Moderada",
    "description": "+1 en FUER o DES; competencia con armaduras medianas y escudos",
    "requirements": [
      {
        "kind": "armor",
        "armor": "leve",
        "label": "competencia con armadura ligera"
      }
    ],
    "source": "phb"
  },
  {
    "id": "combate_montado",
    "name": "Combate Montado",
    "description": "Ventaja en ataques contra criaturas montadas y no montadas; puedes redirigir el daño sufrido por tu montura hacia ti (reacción).",
    "source": "phb"
  },
  {
    "id": "confluencia_mistica",
    "name": "Confluencia Mística",
    "description": "Sintonizas hasta 4 objetos mágicos a la vez; conjuras Identificar sin gastar slot ni componentes materiales (1/ descanso largo)",
    "source": "tcsr"
  },
  {
    "id": "observador",
    "name": "Observador",
    "description": "+1 en INT o SAB; +5 en Percepción; +5 en la Percepción pasiva; puedes leer los labios mientras observas a alguien hablar.",
    "requirements": [
      {
        "kind": "abilityAny",
        "options": [
          {
            "ability": "int",
            "value": 13
          },
          {
            "ability": "wis",
            "value": 13
          }
        ],
        "label": "INT 13+ o SAB 13+"
      }
    ],
    "source": "phb"
  },
  {
    "id": "furia_orquica",
    "name": "Furia Orca",
    "description": "Requisito: semiorco. +1 en FUER o CON; al acertar con un arma, vuelves a tirar 1 dado de daño y lo sumas (1/ descanso corto o largo); tras Incansable, reacción para hacer 1 ataque",
    "source": "xge"
  },
  {
    "id": "emissario_das_terras_externas",
    "name": "Emisario de las Tierras Externas",
    "description": "Requisito: 4º nivel y Vástago de los Planos Exteriores (Tierras Externas). +1 en un atributo; aprendes Paso Brumoso y Línguas, 1 vez sin slot cada uno (1/ descanso largo)",
    "source": "planescape"
  },
  {
    "id": "perfurador",
    "name": "Perforador",
    "description": "+1 en FUER o DES; una vez por turno, al acertar con daño perforante, vuelves a tirar 1 dado de daño y usas el nuevo; con un crítico perforante, tiras 1 dado de daño extra",
    "source": "tce"
  },
  {
    "id": "andarilho_planar",
    "name": "Errante Planar",
    "description": "Requisito: 4º nivel y Vástago de los Planos Exteriores. Tras descanso largo: resistencia al ácido, frío o fuego; acción: detectas portales a 30 pies o fuerzas uno a 5 pies (CD 20)",
    "source": "planescape"
  },
  {
    "id": "envenenador",
    "name": "Envenenador",
    "description": "Ignoras la resistencia a veneno; acción adicional: imbues un arma venenosa; ganas el kit de venenos y con 1 h y 50 po creas dosis = comp. (salvación de CON, CD 14 o 2d8 de veneno)",
    "source": "tce"
  },
  {
    "id": "mestre_haste",
    "name": "Maestro en Armas de Asta",
    "description": "Ataque bonus con el extremo del asta (1d4 + mod); ataque de oportunidad cuando una criatura entra al alcance del arma.",
    "source": "phb"
  },
  {
    "id": "prodigio",
    "name": "Prodigio",
    "description": "Requisito: semielfo, semiorco o humano. Ganas 1 pericia, 1 competencia de herramientas y 1 idioma a tu elección; ganas especialización en 1 pericia en la que ya seas competente",
    "source": "xge"
  },
  {
    "id": "invencao_rapida",
    "name": "Invención Rápida",
    "description": "Dominas 2 efectos mágicos rituales de 1º nivel (INT; más por 2 h y 50 po/nivel); ganas herramientas de artesano y construyes artefactos mecánicos (1 h, 10 po; máx. 3 activos)",
    "requirements": [
      {
        "kind": "ability",
        "ability": "int",
        "value": 13,
        "label": "INT 13+"
      }
    ],
    "source": "psk"
  },
  {
    "id": "recuperacao_notavel",
    "name": "Recuperación Notable",
    "description": "+1 en CON; al ser estabilizado, recuperas PV iguales al mod. CON (mín. 1); siempre que recuperes PV por conjuro, poción o rasgo de clase, sumas +mod. CON (mín. 1)",
    "abilityBonus": {
      "con": 1
    },
    "source": "tcsr"
  },
  {
    "id": "resiliente",
    "name": "Resiliente",
    "description": "+1 en un atributo a tu elección y competencia en su tirada de salvación.",
    "source": "phb"
  },
  {
    "id": "cimitarra_dupla",
    "name": "Cimitarra Doble",
    "description": "Requisito: elfo. +1 en DES o FUER; con una cimitarra doble en dos manos, +1 en la CA; el arma tiene la propiedad sutil para ti",
    "source": "erlw"
  },
  {
    "id": "herdeiro_virtuoso",
    "name": "Heredero Virtuoso",
    "description": "Requisito: 4º nivel y Vástago de los Planos Exteriores (Bien). +1 en un atributo; reacción: reduces en 1d10 + comp. el daño a ti o a una criatura a 30 pies (usos = comp.)",
    "source": "planescape"
  },
  {
    "id": "conjurador_ritual",
    "name": "Conjurador Ritual",
    "description": "Ganas un grimorio con 2 conjuros rituales a tu elección (INT o SAB 13+ según la lista); puedes lanzarlos como ritual.",
    "requirements": [
      {
        "kind": "abilityAny",
        "options": [
          {
            "ability": "int",
            "value": 13
          },
          {
            "ability": "wis",
            "value": 13
          }
        ],
        "label": "INT 13+ o SAB 13+"
      }
    ],
    "source": "phb"
  },
  {
    "id": "moldador_de_runas",
    "name": "Moldeador de Runas",
    "description": "Requisito: capaz de lanzar conjuros o Tallador de runas. Aprendes Comprender Idiomas sin slot; tras descanso largo, inscribes runas en objetos para conjurar conjuros de 1º nivel",
    "source": "bpg"
  },
  {
    "id": "ataque_selvagem",
    "name": "Ataque Selvagem",
    "description": "Una vez por turno, cuando aciertas con un arma cuerpo a cuerpo, puedes tirar el dado de daño de nuevo y usar el valor mayor.",
    "source": "phb"
  },
  {
    "id": "progenie_dos_planos_externos",
    "name": "Vástago de los Planos Exteriores",
    "description": "Requisito: campaña de Planescape. Eliges un plano externo: ganas resistencia al veneno, necrótico, radiante, fuerza o psíquico y 1 truco (sin componentes materiales)",
    "source": "planescape"
  },
  {
    "id": "segunda_chance",
    "name": "Segunda Oportunidad",
    "description": "Requisito: mediano. +1 en DES, CON o CAR; reacción: obligas a la criatura que te acertó a tirar el ataque de nuevo (recuperas al tirar iniciativa o en un descanso)",
    "source": "xge"
  },
  {
    "id": "sentinela",
    "name": "Centinela",
    "description": "El ataque de oportunidad tiene desventaja para el objetivo; el objetivo que has alcanzado cuerpo a cuerpo no se marcha sin provocar un ataque; reacción: atacar a un objetivo a 5 pies que ataca a un aliado.",
    "source": "phb"
  },
  {
    "id": "criacao_de_servos",
    "name": "Creación de Servos",
    "description": "Conjuras Encontrar Familiar como ritual, con un servo como familiar; te comunicas telepáticamente con él y, al atacar, puedes cederle 1 ataque",
    "requirements": [
      {
        "kind": "ability",
        "ability": "int",
        "value": 13,
        "label": "INT 13+"
      }
    ],
    "source": "psk"
  },
  {
    "id": "toque_das_sombras",
    "name": "Toque Sombrio",
    "description": "+1 en INT, SAB o CAR; aprendes Invisibilidad y 1 conjuro de 1º nivel de Ilusión o Nigromancia, cada uno 1 vez sin slot (recuperas en descanso largo)",
    "source": "tce"
  },
  {
    "id": "atirador_preciso",
    "name": "Tirador Preciso",
    "description": "-5 en el ataque y +10 en el daño a distancia; ignoras la cobertura y la desventaja por larga distancia.",
    "source": "phb"
  },
  {
    "id": "mestre_escudo",
    "name": "Maestro de Escudo",
    "description": "Acción adicional: empuñas el escudo para agarrar/empujar; en salvaciones de DES, reduces a la mitad el daño en fallo y a cero en éxito (sin efecto).",
    "source": "phb"
  },
  {
    "id": "especialista_em_pericias",
    "name": "Experto en Pericias",
    "description": "+1 en un atributo a tu elección; ganas 1 pericia; elige 1 pericia en la que ya tengas competencia y ganas especialización en ella",
    "source": "tce"
  },
  {
    "id": "habilidoso",
    "name": "Habilidoso",
    "description": "Ganas 3 competencias: pericias o herramientas a tu elección.",
    "source": "phb"
  },
  {
    "id": "esconderijo",
    "name": "Esconderijo",
    "description": "+1 en DES; puedes esconderte incluso solo parcialmente oculto; fallar un ataque a distancia no revela tu posición.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "dex",
        "value": 13,
        "label": "DES 13+"
      }
    ],
    "abilityBonus": {
      "dex": 1
    },
    "source": "phb"
  },
  {
    "id": "cortador",
    "name": "Cortador",
    "description": "+1 en FUER o DES; una vez por turno, un acierto cortante reduce 10 pies el desplazamiento del objetivo hasta tu próximo turno; un crítico cortante: desventaja en sus ataques",
    "source": "tce"
  },
  {
    "id": "alma_do_gigante_da_tempestade",
    "name": "Alma del Gigante de la Tormenta",
    "description": "Requisito: 4º nivel y Golpe del Gigante de la Tormenta. +1 en FUER, SAB o CAR; acción adicional: aura 10 pies hasta tu próximo turno (resistencia eléctrico/trueno; usos = comp.)",
    "source": "bpg"
  },
  {
    "id": "atirador_magias",
    "name": "Tirador de Conjuros",
    "description": "Duplica el alcance de los conjuros de ataque a distancia; ignoras la cobertura total; ventaja en ataques con conjuración.",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "capaz de lanzar conjuros"
      }
    ],
    "source": "phb"
  },
  {
    "id": "conjurador_agil",
    "name": "Conjurador Ágil",
    "description": "Requisito: 11º nivel. Si conjuras un conjuro de 1º nivel o superior como acción adicional, puedes conjurar otro con tu acción en el mismo turno; máx. uno de 3º nivel o superior",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "Lanzamiento de conjuros"
      }
    ],
    "source": "tcsr"
  },
  {
    "id": "ligeireza",
    "name": "Ligereza",
    "description": "Requisito: enano o raza Pequeña. +1 en FUER o DES; +5 pies de desplazamiento; competencia en Acrobacia o Atletismo; ventaja para escapar de un agarre",
    "source": "xge"
  },
  {
    "id": "escudeiro_de_solamnia",
    "name": "Escudero de Solamnia",
    "description": "Requisito: campaña de Dragonlance, guerrero o paladino, o Escudero de Solamnia. Montar o desmontar cuesta 5 pies; ataque con ventaja y +1d8 de daño si aciertas (usos = comp.)",
    "source": "dsotdq"
  },
  {
    "id": "golpe_do_gigante",
    "name": "Golpe del Gigante",
    "description": "Requisito: competencia con armas marciales o Expósito del Gigante. Eliges un golpe (nube, fuego, hielo, colina, piedra o tormenta): causas daño extra; CD 8 + comp. + FUER o CON",
    "source": "bpg"
  },
  {
    "id": "iniciacao_de_strixhaven",
    "name": "Iniciación de Strixhaven",
    "description": "Eliges un colegio de Strixhaven: aprendes 2 trucos y 1 conjuro de 1º nivel del colegio; lo conjuras 1 vez sin slot (recuperas en descanso largo); INT, SAB o CAR como atributo",
    "source": "scc"
  },
  {
    "id": "mascote_de_strixhaven",
    "name": "Mascota de Strixhaven",
    "description": "Requisito: 4º nivel e Iniciación de Strixhaven. La mascota sirve de familiar (Encontrar Familiar, ritual); le cedes 1 ataque o cambias de lugar con ella (1/ descanso largo)",
    "source": "scc"
  },
  {
    "id": "magia_dos_svirfneblin",
    "name": "Magia de los Svirfneblin",
    "description": "Requisito: gnomo profundo. Conjuras Indetectabilidad a voluntad sin componente material; Sordera/Ceguera, Contorno Borroso y Disfraz Alterado 1 vez cada uno (1/ descanso largo)",
    "source": "mtf"
  },
  {
    "id": "brigao_taverna",
    "name": "Brigón de Taberna",
    "description": "+1 en FUER o CON; daño 1d4+mod con golpes sin armas; competencia con armas improvisadas; acción adicional: agarrar tras acertar con un improvisado cuerpo a cuerpo.",
    "source": "phb"
  },
  {
    "id": "telecinese",
    "name": "Telequinético",
    "description": "+1 en INT, SAB o CAR; aprendes Mano de Mago sin componentes verbales/somáticos e invisible; acción adicional: empujas una criatura 30 pies (salvación de FUER, CD 8 + comp. + mod.)",
    "source": "tce"
  },
  {
    "id": "telepatia",
    "name": "Telepatía",
    "description": "+1 en INT, SAB o CAR; hablas telepáticamente con una criatura a 60 pies que veas; conjuras Detectar Pensamientos 1 vez sin slot (recuperas en descanso largo)",
    "source": "tce"
  },
  {
    "id": "mestre_do_arremesso",
    "name": "Maestro de Armas Arrojadizas",
    "description": "+1 en FUER o DES; las armas cuerpo a cuerpo simples y marciales se vuelven arrojadizas (20/60 pies a una mano, 15/30 a dos); el arma arrojadiza vuelve al final de tu turno",
    "source": "tcsr"
  },
  {
    "id": "durao",
    "name": "Duro",
    "description": "Tu máximo de PV aumenta en 2 por cada nivel de personaje.",
    "source": "phb"
  },
  {
    "id": "exultacao_vampirica",
    "name": "Exultación Vampírica",
    "description": "Requisito: vampiro de Ixalan. Acción: la mitad inferior de tu cuerpo se vuelve vapor y ganas 30 pies de desplazamiento de vuelo hasta 10 minutos (1/ descanso corto o largo)",
    "source": "psi"
  },
  {
    "id": "vigor_do_gigante_da_colina",
    "name": "Vigor del Gigante de la Colina",
    "description": "Requisito: 4º nivel y Golpe del Gigante de la Colina. +1 en FUER, CON o SAB; reacción: anulas empujón o caída; al comer en descanso corto recuperas PV extra (mod. CON + comp.)",
    "source": "bpg"
  },
  {
    "id": "sacrificio_vital",
    "name": "Sacrificio Vital",
    "description": "Acción adicional: sufres 1d6 de necrótico (irreducible) para ganar bendición de sangue por 1 hora: +1d6 en ataque, +2d6 de necrótico al acertar o -1d4 en la salvación de un alvo",
    "source": "tcsr"
  },
  {
    "id": "mago_guerra",
    "name": "Mago de Guerra",
    "description": "Ventaja en pruebas para mantener la concentración; lanzas conjuros con la mano ocupada; reacción: lanzas un conjuro de ataque cuando una criatura entra a tu alcance.",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "capaz de lanzar conjuros"
      }
    ],
    "source": "phb"
  },
  {
    "id": "mestre_armas",
    "name": "Maestro en Armas",
    "description": "+1 en FUER o DES; competencia con 4 armas sencillas o cuerpo a cuerpo a tu elección.",
    "source": "phb"
  },
  {
    "id": "magia_do_elfo_silvestre",
    "name": "Magia del Elfo de los Bosques",
    "description": "Requisito: elfo de los bosques. Aprendes 1 truco de druida y las magias Zancada Prodigiosa y Pasos sin Rastro, 1 vez sin slot cada uno (1/ descanso largo); SAB como atributo",
    "source": "xge"
  }
]
;

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
