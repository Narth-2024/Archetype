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
  {
    id: "marca_draconica_aberrante",
    source: "erlw",
    name: "Marca Dracônica Aberrante",
    description: "Pré-requisito: nenhuma outra marca. +1 em CON; aprende 1 truque e magia de feiticeiro (CON); ao conjurar a marca gasta 1 dado de vida: par → PV temporários; ímpar → dano à força.",
    abilityBonus: {con: 1},
  },
  {
    id: "ator",
    source: "phb",
    name: "Ator",
    description: "+1 em CAR; vantagem em Engano e Performance quando se passa por outra pessoa; pode imitar vozes e mannerismos.",
    abilityBonus: {cha: 1},
  },
  {
    id: "adepto_das_togas_pretas",
    source: "dsotdq",
    name: "Adepto das Togas Pretas",
    description: "Pré-requisito: 4º nível e Iniciação na Alta Magia (Nuitari). Aprende magia de 2º nível de Encantamento ou Necromancia sem slot; gasta dados de vida para somar ao dano de magias.",
  },
  {
    id: "adepto_das_togas_vermelhas",
    source: "dsotdq",
    name: "Adepto das Togas Vermelhas",
    description: "Pré-requisito: 4º nível e Iniciação na Alta Magia (Lunitari). Aprende magia de 2º nível (Ilusão ou Transmutação) sem slot; rolagens ≤ 9 em ataque ou teste viram 10 (usos = prof).",
  },
  {
    id: "adepto_das_togas_brancas",
    source: "dsotdq",
    name: "Adepto das Togas Brancas",
    description: "Pré-requisito: 4º nível e Iniciação na Alta Magia. Aprende magia de 2º nível (Abjuração/Adivinhação) sem slot; reação: gasta um slot e reduz dano em d6s + mod. de conjuração.",
  },
  {
    id: "agente_da_ordem",
    source: "planescape",
    name: "Agente da Ordem",
    description: "Pré-requisito: 4º nível e Progênie dos Planos Externos (Lei). +1 em um atributo; uma vez por turno, +1d8 de força a criatura a 60 pés; salvo de SAB ou restrito (usos = prof).",
    abilityChoice: {options: ["str", "dex", "con", "int", "wis", "cha"]},
  },
  {
    id: "alerta",
    source: "phb",
    name: "Alerta",
    description: "+5 na iniciativa; não pode ser surpreendido enquanto estiver consciente; criaturas não têm vantagem em ataques contra você por estar não visto.",
  },
  {
    id: "iniciacao_de_artificeiro",
    source: "tce",
    name: "Iniciação de Artificeiro",
    description: "Aprende 1 truque e 1 magia de 1º nível da lista de artificeiro (INT), conjurável sem slot 1/ descanso longo; proficiência com ferramentas de artesão à escolha, usadas como foco.",
  },
  {
    id: "atleta",
    source: "phb",
    name: "Atleta",
    description: "Subir e se levantar da queda custam metade do deslocamento; salto com FOR ou DES; +1 em FOR ou DES.",
    abilityChoice: {options: ["str", "dex"]},
  },
  {
    id: "herdeiro_malefico",
    source: "planescape",
    name: "Herdeiro Maléfico",
    description: "Pré-requisito: 4º nível e Progênie dos Planos Externos (Mal). +1 em um atributo; uma vez por turno, +1d6 + prof de necrótico a criatura a 60 pés e recupera PV igual (usos = prof).",
    abilityChoice: {options: ["str", "dex", "con", "int", "wis", "cha"]},
  },
  {
    id: "sorte_abundante",
    source: "xge",
    name: "Sorte Abundante",
    description: "Pré-requisito: halfling. Reação: aliado a até 30 pés que rolar 1 em d20 rola de novo (obrigatório usar o novo resultado); até o fim do próximo turno você não usa o traço Sortudo.",
  },
  {
    id: "cartomante",
    source: "botmt",
    name: "Cartomante",
    description: "Pré-requisito: 4º nível. Baralho serve de foco; aprende Prestidigitação; após descanso longo imbui uma magia de 1 ação num baralho e a conjura com ação bônus (dura 8 horas).",
    requirements: [{kind: "spellcasting", label: "Conjuração"}],
  },
  {
    id: "investida",
    source: "phb",
    name: "Investida",
    description: "Após Dash em linha reta, pode atacar uma criatura no caminho: +5 de dano ou empurrá-la 10 pés (ação bônus).",
  },
  {
    id: "chef",
    source: "tce",
    name: "Chef",
    description: "+1 em CON ou SAB; proficiência com ferramentas de cozinheiro; comida em descanso curto concede +1d8 PV extra por dado de vida; petisco dá PV temporários (ação bônus, usos = prof).",
    abilityChoice: {options: ["con", "wis"]},
  },
  {
    id: "sequaz_do_caos",
    source: "planescape",
    name: "Sequaz do Caos",
    description: "Pré-requisito: 4º nível e Progênie dos Planos Externos (Caos). +1 em um atributo; rolar 1 ou 20 em ataque ou salvaguarda ativa um efeito caótico (1d4) até o fim do próximo turno.",
    abilityChoice: {options: ["str", "dex", "con", "int", "wis", "cha"]},
  },
  {
    id: "especialista_besta",
    source: "phb",
    name: "Especialista em Besta",
    description: "Ignora a propriedade de recarga; ataque à distância com arma não sofre desvantagem por estar a menos de 5 pés; ataque bônus com besta de mão.",
  },
  {
    id: "cruel",
    source: "tcsr",
    name: "Cruel",
    description: "Ganha dados de crueldade d6 (1 por turno, usos = prof): some ao dano, ganhe PV temporários em crítico ou some a Intimidação; recupera tudo em descanso longo.",
  },
  {
    id: "esmagador",
    source: "tce",
    name: "Esmagador",
    description: "+1 em FOR ou CON; uma vez por turno, acerto com concussão desloca a criatura 5 pés; crítico com concussão dá vantagem em ataques contra ela até seu próximo turno.",
    abilityChoice: {options: ["str", "con"]},
  },
  {
    id: "duelista_defensivo",
    source: "phb",
    name: "Duelista Defensivo",
    description: "Reação: quando uma criatura acerta você com ataque corpo a corpo, soma seu bônus de proficiência à CA contra aquele ataque.",
    requirements: [{kind: "ability", ability: "dex", value: 13, label: "DES 13+"}],
  },
  {
    id: "favorito_divino",
    source: "dsotdq",
    name: "Favorito Divino",
    description: "Pré-requisito: 4º nível e campanha de Dragonlance. Aprende 1 truque do clérigo, Augúrio e 1 magia de 1º nível conforme o alinhamento, sem slot (1/ descanso longo).",
  },
  {
    id: "medo_draconico",
    source: "xge",
    name: "Medo Dracônico",
    description: "Pré-requisito: draconato. +1 em FOR, CON ou CAR; gasta um uso do Alito Dragônico para urrar: criaturas a 30 pés salvam de SAB (CD 8 + prof + CAR) ou ficam amedrontadas 1 minuto.",
    abilityChoice: {options: ["str", "con", "cha"]},
  },
  {
    id: "couro_draconico",
    source: "xge",
    name: "Couro Dracônico",
    description: "Pré-requisito: draconato. +1 em FOR, CON ou CAR; sem armadura, CA = 13 + DES (escudo permitido); garras naturais causam 1d4 + FOR de corte.",
    abilityChoice: {options: ["str", "con", "cha"]},
  },
  {
    id: "alta_magia_drow",
    source: "xge",
    name: "Alta Magia Drow",
    description: "Pré-requisito: elfo drow. Conjura Detectar Magia à vontade sem slot; Levitação e Dissipar Magia 1 vez sem slot (recupera em descanso longo); CAR é o atributo de conjuração.",
  },
  {
    id: "empunhadura_dupla",
    source: "phb",
    name: "Empunhadura Dupla",
    description: "+1 na CA enquanto empunha armas diferentes em cada mão; saca/estuda duas armas de uma vez; armas não precisam ser leves.",
    abilityChoice: {options: ["str", "dex"]},
  },
  {
    id: "explorador_masmorras",
    source: "phb",
    name: "Explorador de Masmorras",
    description: "Vantagem em testes para encontrar portas secretas, armadilhas e para resistir a armadilhas; ignora desvantagem por escuridão.",
  },
  {
    id: "duravel",
    source: "phb",
    name: "Durável",
    description: "+1 em CON; ao usar um dado de vida em descanso curto ou longo, recupera pelo menos 1 + mod. CON PV por dado.",
    abilityBonus: {con: 1},
  },
  {
    id: "robustez_ana",
    source: "xge",
    name: "Robustez Anã",
    description: "Pré-requisito: anão. +1 em CON; ao usar a ação Defender, gasta 1 dado de vida e cura o total + mod. CON (mínimo de 1 PV).",
    abilityBonus: {con: 1},
  },
  {
    id: "adepto_oculto",
    source: "tce",
    name: "Adepto Oculto",
    description: "Aprende 1 invocação arcana à escolha (INT, SAB ou CAR como atributo); troca de invocação a cada nível; pré-requisitos de invocação valem apenas para bruxo que os atende.",
    requirements: [{kind: "spellcasting", label: "Conjuração"}],
  },
  {
    id: "adepto_elemental",
    source: "phb",
    name: "Adepto Elemental",
    description: "Ignora resistência a um tipo de dano elemental à sua escolha (fogo, frio, elétrico, ácido) e criaturas que salvam contra seu dano elemental ainda sofrem metade.",
    requirements: [{kind: "spellcasting", label: "capaz de conjurar magias"}],
  },
  {
    id: "precisao_elfica",
    source: "xge",
    name: "Precisão Élfica",
    description: "Pré-requisito: elfo ou meio-elfano. +1 em DES, INT, SAB ou CAR; quando tem vantagem em um ataque com esse atributo, rola um dos dados de novo uma vez.",
    abilityChoice: {options: ["dex", "int", "wis", "cha"]},
  },
  {
    id: "brasa_do_gigante_de_fogo",
    source: "bpg",
    name: "Brasa do Gigante de Fogo",
    description: "Pré-requisito: 4º nível e Golpe do Gigante de Fogo. +1 em FOR, CON ou SAB; resistência a fogo; troca um ataque por explosão de 15 pés: salvo de DES ou 1d8 + prof de fogo e cego.",
    abilityChoice: {options: ["str", "con", "wis"]},
  },
  {
    id: "desvanecer",
    source: "xge",
    name: "Desvanecer",
    description: "Pré-requisito: gnomo. +1 em DES ou INT; após sofrer dano, reação para ficar invisível até o fim do próximo turno ou até atacar; 1/ descanso curto ou longo.",
    abilityChoice: {options: ["dex", "int"]},
  },
  {
    id: "teletransporte_feerico",
    source: "xge",
    name: "Teletransporte Feérico",
    description: "Pré-requisito: alto elfo. +1 em INT ou CAR; aprende Sílvico e Passo Brumoso, conjurando-a 1 vez sem slot (recupera em descanso); INT é o atributo de conjuração.",
    abilityChoice: {options: ["int", "cha"]},
  },
  {
    id: "toque_feerico",
    source: "tce",
    name: "Toque Feérico",
    description: "+1 em INT, SAB ou CAR; aprende Passo Brumoso e 1 magia de 1º nível (Adivinhação ou Encantamento), conjuráveis 1 vez sem slot (recupera em descanso longo).",
    abilityChoice: {options: ["int", "wis", "cha"]},
  },
  {
    id: "iniciacao_marcial",
    source: "tce",
    name: "Iniciação Marcial",
    description: "Pré-requisito: proficiência com arma marcial. Aprende um Estilo de Combate do guerreiro (diferente de um que já tenha); ao ganhar melhoria de atributo, pode trocar de estilo.",
  },
  {
    id: "chamas_de_flegetonte",
    source: "xge",
    name: "Chamas de Flegetonte",
    description: "Pré-requisito: tiefling. +1 em INT ou CAR; rerola 1s nos dados de fogo de magias; ao conjurar magia de fogo, chamas cercam você (luz 30 pés; 1d4 de fogo a quem te acerta a 5 pés).",
    abilityChoice: {options: ["int", "cha"]},
  },
  {
    id: "lembranca_subita",
    source: "tcsr",
    name: "Lembrança Súbita",
    description: "Pré-requisito: classe que prepara magias. Ação bônus: prepara 1 magia de nível igual ou superior a uma já preparada; 1/ descanso curto ou longo.",
    requirements: [{kind: "spellcasting", label: "Conjuração"}],
  },
  {
    id: "furia_do_gigante_de_gelo",
    source: "bpg",
    name: "Fúria do Gigante de Gelo",
    description: "Pré-requisito: 4º nível e Golpe do Gigante de Gelo. +1 em FOR, CON ou SAB; resistência a frio; reação: retalha com 1d8 de frio (salvo de CON ou velocidade 0; usos = prof).",
    abilityChoice: {options: ["str", "con", "wis"]},
  },
  {
    id: "dom_do_dragao_cromatico",
    source: "ftd",
    name: "Dom do Dragão Cromático",
    description: "Ação bônus: infunde uma arma com ácido, frio, fogo, elétrico ou veneno (+1d4 por 1 minuto; 1/ descanso longo); reação: resistência a esse tipo de dano (usos = prof).",
  },
  {
    id: "dom_do_dragao_de_gemas",
    source: "ftd",
    name: "Dom do Dragão de Gemas",
    description: "+1 em INT, SAB ou CAR; reação: criatura a 10 pés que te causou dano salva de FOR ou sofre 2d8 de força e é empurrada 10 pés (metade sem empurrão; usos = prof).",
    abilityChoice: {options: ["int", "wis", "cha"]},
  },
  {
    id: "dom_do_dragao_metalico",
    source: "ftd",
    name: "Dom do Dragão Metálico",
    description: "Aprende Curar Feridas, conjurável 1 vez sem slot (1/ descanso longo; INT, SAB ou CAR); reação: asas espirituais dão +prof de CA a aliado a 5 pés atingido (usos = prof).",
  },
  {
    id: "agarrador",
    source: "phb",
    name: "Agarrador",
    description: "+1 em FOR; vantagem em ataques contra criatura que você agarrou; pode tentar prender (você e o alvo presos) com ação; +1 em FOR.",
    requirements: [{kind: "ability", ability: "str", value: 13, label: "FOR 13+"}],
    abilityBonus: {str: 1},
  },
  {
    id: "mestre_armas_pesadas",
    source: "phb",
    name: "Mestre de Armas Pesadas",
    description: "Ao atacar com arma corpo a corpo pesada, -5 no ataque e +10 no dano; ação bônus: ataque extra ao reduzir uma criatura a 0 PV.",
  },
  {
    id: "marca_draconica_superior",
    source: "wgte",
    name: "Marca Dracônica Superior",
    description: "Pré-requisito: 8º nível e uma marca dracônica. O dado de Intuição da marca aumenta 1 tipo; +1 em um atributo permitido pela marca; aprende as magias da tabela da marca sem slot.",
  },
  {
    id: "astucia_do_gigante_das_nuvens",
    source: "bpg",
    name: "Astúcia do Gigante das Nuvens",
    description: "Pré-requisito: 4º nível e Golpe do Gigante das Nuvens. +1 em FOR, CON ou CAR; reação: resistência ao dano do ataque e teleporte 30 pés (usos = prof).",
    abilityChoice: {options: ["str", "con", "cha"]},
  },
  {
    id: "atirador",
    source: "tce",
    name: "Atirador",
    description: "+1 em DES; proficiência com armas de fogo; ignora a propriedade de recarga; estar a 5 pés de criatura hostil não impõe desvantagem a ataques à distância.",
    abilityBonus: {dex: 1},
  },
  {
    id: "curandeiro",
    source: "phb",
    name: "Curandeiro",
    description: "Usar kit de cura em uma criatura cura 1d6 + 4 + seu nível de personagem PV (uma vez por criatura até o próximo descanso curto).",
  },
  {
    id: "blindagem_pesada",
    source: "phb",
    name: "Blindagem Pesada",
    description: "+1 em FOR e proficiência com armadura pesada.",
    requirements: [{kind: "armor", armor: "media", label: "proficiência com armadura média"}],
    abilityBonus: {str: 1},
  },
  {
    id: "armadura_pesada",
    source: "phb",
    name: "Armadura Pesada",
    description: "+1 em FOR; enquanto veste armadura pesada, subtrai 3 do dano de concussão, perfuração e corte de ataques não mágicos.",
    requirements: [{kind: "ability", ability: "str", value: 13, label: "FOR 13+"}],
    abilityBonus: {str: 1},
  },
  {
    id: "constituicao_infernal",
    source: "xge",
    name: "Constituição Infernal",
    description: "Pré-requisito: tiefling. +1 em CON; resistência a dano de frio e veneno; vantagem em salvaguardas contra envenenamento.",
    abilityBonus: {con: 1},
  },
  {
    id: "iniciacao_na_alta_magia",
    source: "dsotdq",
    name: "Iniciação na Alta Magia",
    description: "Pré-requisito: 4º nível, campanha de Dragonlance, feiticeiro ou mago. Escolhe uma lua de Krynn: aprende 1 truque do mago e 2 magias de 1º nível dela, sem slot (1/ descanso longo).",
  },
  {
    id: "lider_inspirador",
    source: "phb",
    name: "Líder Inspirador",
    description: "+1 em CAR; após 10 minutos de fala, aliados que podem ouvir você ganham PV temporários = seu nível + mod. CAR.",
    requirements: [{kind: "ability", ability: "cha", value: 13, label: "CAR 13+"}],
    abilityBonus: {cha: 1},
  },
  {
    id: "mente_aguda",
    source: "phb",
    name: "Mente Aguda",
    description: "+1 em INT; sabe a hora e a direção do norte; lembra de tudo que viu/ouviu até o próximo descanso longo.",
    abilityBonus: {int: 1},
  },
  {
    id: "agudeza_do_gigante_de_pedra",
    source: "bpg",
    name: "Agudeza do Gigante de Pedra",
    description: "Pré-requisito: 4º nível e Golpe do Gigante de Pedra. +1 em FOR, CON ou SAB; visão no escuro de 60 pés; ação bônus: pedra causa 1d10 de força (salvo de FOR ou caído; usos = prof).",
    abilityChoice: {options: ["str", "con", "wis"]},
  },
  {
    id: "cavaleiro_da_coroa",
    source: "dsotdq",
    name: "Cavaleiro da Coroa",
    description: "Pré-requisito: 4º nível e Escudeiro de Solamnia. +1 em FOR, DES ou CON; ação bônus: aliado a 30 pés ataca com reação e soma 1d8 ao dano (usos = prof).",
    abilityChoice: {options: ["str", "dex", "con"]},
  },
  {
    id: "cavaleiro_da_rosa",
    source: "dsotdq",
    name: "Cavaleiro da Rosa",
    description: "Pré-requisito: 4º nível e Escudeiro de Solamnia. +1 em CON, SAB ou CAR; ação bônus: criatura a 30 pés ganha PV temporários = 1d8 + prof + mod. do atributo aumentado.",
    abilityChoice: {options: ["con", "wis", "cha"]},
  },
  {
    id: "cavaleiro_da_espada",
    source: "dsotdq",
    name: "Cavaleiro da Espada",
    description: "Pré-requisito: 4º nível e Escudeiro de Solamnia. +1 em INT, SAB ou CAR; ao acertar, tenta amedrontar (salvo de SAB ou amedrontado; falha dá desvantagem; usos = prof).",
    abilityChoice: {options: ["int", "wis", "cha"]},
  },
  {
    id: "armadura_leve",
    source: "phb",
    name: "Armadura Leve",
    description: "+1 em FOR ou DES e proficiência com armadura leve.",
    abilityChoice: {options: ["str", "dex"]},
  },
  {
    id: "linguista",
    source: "phb",
    name: "Linguista",
    description: "+1 em INT; aprende 3 idiomas à escolha; pode escrever mensagens cifradas que outros não decifram sem sucesso.",
    requirements: [{kind: "ability", ability: "int", value: 13, label: "INT 13+"}],
    abilityBonus: {int: 1},
  },
  {
    id: "afortunado",
    source: "phb",
    name: "Afortunado",
    description: "3 pontos de sorte (1/ descanso longo): antes ou depois de rolar um d20 (seu ou contra você), rola de novo e escolhe; pode dar vantagem/desvantagem.",
  },
  {
    id: "matador_de_magos",
    source: "phb",
    name: "Matador de Magos",
    description: "Reação: ataque corpo a corpo em criatura conjurando a 5 pés; vantagem em salvaguardas contra magias de criaturas a 5 pés; dano a quem concentra dá desvantagem na concentração.",
  },
  {
    id: "iniciacao_magica",
    source: "phb",
    name: "Iniciação Mágica",
    description: "Escolhe uma classe: aprende 2 truques e 1 magia de 1º nível (componentes verbais e somáticos); pode conjurar a magia como ritual 1/ descanso longo.",
  },
  {
    id: "adepto_marcial",
    source: "phb",
    name: "Adepto Marcial",
    description: "Aprende 2 manobras à escolha e ganha 1 dado de superioridade d8 para alimentá-las (recupera em descanso curto ou longo).",
  },
  {
    id: "armadura_moderada",
    source: "phb",
    name: "Armadura Moderada",
    description: "+1 em FOR ou DES; ganha proficiência com armaduras médias e escudos.",
    requirements: [{kind: "armor", armor: "media", label: "proficiência com armadura média"}],
    abilityChoice: {options: ["str", "dex"]},
  },
  {
    id: "adepto_de_metamagia",
    source: "tce",
    name: "Adepto de Metamagia",
    description: "Aprende 2 opções de metamagia do feiticeiro e ganha 2 pontos de feitiço exclusivos para metamagia (recupera em descanso longo); troca 1 opção ao ganhar melhoria de atributo.",
    requirements: [{kind: "spellcasting", label: "Conjuração"}],
  },
  {
    id: "movel",
    source: "phb",
    name: "Móvel",
    description: "+10 pés de deslocamento; Dash ignora terreno difícil; não provoca ataques de oportunidade de criatura que você atacou corpo a corpo.",
  },
  {
    id: "armadura_media",
    source: "phb",
    name: "Armadura Média",
    description: "+1 em FOR ou DES; proficiência com armaduras médias e escudos.",
    requirements: [{kind: "armor", armor: "leve", label: "proficiência com armadura leve"}],
    abilityChoice: {options: ["str", "dex"]},
  },
  {
    id: "combate_montado",
    source: "phb",
    name: "Combate Montado",
    description: "Vantagem em ataques contra criatura montada e não montada; pode redirecionar dano sofrido pelo seu monte para você (reação).",
  },
  {
    id: "confluencia_mistica",
    source: "tcsr",
    name: "Confluência Mística",
    description: "Sintoniza até 4 itens mágicos ao mesmo tempo; conjura Identificar sem gastar slot nem componentes materiais (1/ descanso longo).",
  },
  {
    id: "observador",
    source: "phb",
    name: "Observador",
    description: "+1 em INT ou SAB; +5 em Percepção; +5 na Percepção passiva; pode ler lábios enquanto observa alguém falar.",
    requirements: [{kind: "abilityAny", options: [{ability: "int", value: 13}, {ability: "wis", value: 13}], label: "INT 13+ ou SAB 13+"}],
    abilityChoice: {options: ["int", "wis"]},
  },
  {
    id: "furia_orquica",
    source: "xge",
    name: "Fúria Órquica",
    description: "Pré-requisito: meio-orc. +1 em FOR ou CON; ao acertar com arma, rola um dado de dano de novo e soma (1/ descanso curto ou longo); após Resistência Implacável, reação faz 1 ataque.",
    abilityChoice: {options: ["str", "con"]},
  },
  {
    id: "emissario_das_terras_externas",
    source: "planescape",
    name: "Emissário das Terras Externas",
    description: "Pré-requisito: 4º nível e Progênie dos Planos Externos (Terras Externas). +1 em um atributo; aprende Passo Brumoso e Línguas, 1 vez sem slot cada (recupera em descanso longo).",
    abilityChoice: {options: ["str", "dex", "con", "int", "wis", "cha"]},
  },
  {
    id: "perfurador",
    source: "tce",
    name: "Perfurador",
    description: "+1 em FOR ou DES; uma vez por turno, ao acertar com dano de perfuração, rola 1 dado de dano de novo e usa o novo; crítico com perfuração rola 1 dado de dano extra.",
    abilityChoice: {options: ["str", "dex"]},
  },
  {
    id: "andarilho_planar",
    source: "planescape",
    name: "Andarilho Planar",
    description: "Pré-requisito: 4º nível e Progênie dos Planos Externos. Após descanso longo: resistência a ácido, frio ou fogo; ação: detecta portais a 30 pés ou força um portal a 5 pés (CD 20).",
  },
  {
    id: "envenenador",
    source: "tce",
    name: "Envenenador",
    description: "Ignora resistência a veneno; envolve arma em veneno com ação bônus; ganha kit de envenenador e com 1 hora e 50 po cria doses iguais à prof (salvo de CON CD 14 ou 2d8 de veneno).",
  },
  {
    id: "mestre_haste",
    source: "phb",
    name: "Mestre de Armas de Haste",
    description: "Ataque bônus com a extremidade da haste (1d4 + mod); ataque de oportunidade quando criatura entra no alcance da arma.",
  },
  {
    id: "prodigio",
    source: "xge",
    name: "Prodígio",
    description: "Pré-requisito: meio-elfo, meio-orc ou humano. Ganha 1 perícia, 1 proficiência de ferramentas e 1 idioma à escolha; ganha especialização em 1 perícia em que já é proficiente.",
  },
  {
    id: "invencao_rapida",
    source: "psk",
    name: "Invenção Rápida",
    description: "Domina 2 efeitos mágicos rituais de 1º nível (INT; aprende mais por 2 h e 50 po por nível); ganha ferramentas de artesão e constrói artefatos mecânicos (1 h, 10 po; até 3 ativos).",
    requirements: [{kind: "ability", ability: "int", value: 13, label: "INT 13+"}],
  },
  {
    id: "recuperacao_notavel",
    source: "tcsr",
    name: "Recuperação Notável",
    description: "+1 em CON; ao ser estabilizado, recupera PV igual ao mod. CON (mín. 1); sempre que recuperar PV por magia, poção ou traço de classe, soma +mod. CON (mín. 1).",
    abilityBonus: {con: 1},
  },
  {
    id: "resiliente",
    source: "phb",
    name: "Resiliente",
    description: "+1 em um atributo à sua escolha e proficiência na salvaguarda dele.",
    abilityChoice: {options: ["str", "dex", "con", "int", "wis", "cha"]},
  },
  {
    id: "cimitarra_dupla",
    source: "erlw",
    name: "Cimitarra Dupla",
    description: "Pré-requisito: elfo. +1 em DES ou FOR; com cimitarra dupla em duas mãos, +1 na CA; a arma tem a propriedade de destreza para você.",
    abilityChoice: {options: ["dex", "str"]},
  },
  {
    id: "herdeiro_virtuoso",
    source: "planescape",
    name: "Herdeiro Virtuoso",
    description: "Pré-requisito: 4º nível e Progênie dos Planos Externos (Bem). +1 em um atributo; reação reduz em 1d10 + prof o dano a você ou criatura a 30 pés (usos = prof).",
    abilityChoice: {options: ["str", "dex", "con", "int", "wis", "cha"]},
  },
  {
    id: "conjurador_ritual",
    source: "phb",
    name: "Conjurador Ritual",
    description: "Ganha um grimório com 2 magias rituais à escolha (INT ou SAB 13+ conforme a lista); pode conjugá-las como ritual.",
    requirements: [{kind: "abilityAny", options: [{ability: "int", value: 13}, {ability: "wis", value: 13}], label: "INT 13+ ou SAB 13+"}],
  },
  {
    id: "moldador_de_runas",
    source: "bpg",
    name: "Moldador de Runas",
    description: "Pré-requisito: Conjuração ou Antecedente Talhador de Runas. Aprende Compreender Idiomas sem slot; após descanso longo, inscreve runas em objetos para conjurar magias de 1º nível.",
  },
  {
    id: "ataque_selvagem",
    source: "phb",
    name: "Ataque Selvagem",
    description: "Uma vez por turno, quando acerta com arma corpo a corpo, pode rolar o dado de dano de novo e usar o maior valor.",
  },
  {
    id: "progenie_dos_planos_externos",
    source: "planescape",
    name: "Progênie dos Planos Externos",
    description: "Pré-requisito: campanha de Planescape. Escolhe um plano externo: ganha resistência a veneno, necrótico, radiante, força ou psíquico e 1 truque (sem componentes materiais).",
  },
  {
    id: "segunda_chance",
    source: "xge",
    name: "Segunda Chance",
    description: "Pré-requisito: halfling. +1 em DES, CON ou CAR; reação: força criatura que te acertou a rolar o ataque de novo (recupera ao rolar iniciativa ou em descanso).",
    abilityChoice: {options: ["dex", "con", "cha"]},
  },
  {
    id: "sentinela",
    source: "phb",
    name: "Sentinela",
    description: "Ataque de oportunidade tem desvantagem para o alvo; alvo que você atingiu corpo a corpo não se afasta sem provocar ataque; reação: atacar alvo a 5 pés que ataca aliado.",
  },
  {
    id: "criacao_de_servos",
    source: "psk",
    name: "Criação de Servos",
    description: "Conjura Encontrar Familiar como ritual, com um servo como familiar; comunica-se telepaticamente com ele e, ao atacar, pode ceder 1 ataque ao servo.",
    requirements: [{kind: "ability", ability: "int", value: 13, label: "INT 13+"}],
  },
  {
    id: "toque_das_sombras",
    source: "tce",
    name: "Toque das Sombras",
    description: "+1 em INT, SAB ou CAR; aprende Invisibilidade e 1 magia de 1º nível de Ilusão ou Necromancia, cada uma conjurável 1 vez sem slot (recupera em descanso longo).",
    abilityChoice: {options: ["int", "wis", "cha"]},
  },
  {
    id: "atirador_preciso",
    source: "phb",
    name: "Atirador Preciso",
    description: "-5 no ataque e +10 no dano à distância; ignora cobertura e desvantagem por longa distância.",
  },
  {
    id: "mestre_escudo",
    source: "phb",
    name: "Mestre de Escudo",
    description: "Ação bônus: empuca escudo para agarrar/empurrar; em salvaguardas de DES, toma metade do dano em falha e nenhum em sucesso (sem efeito).",
  },
  {
    id: "especialista_em_pericias",
    source: "tce",
    name: "Especialista em Perícias",
    description: "+1 em um atributo à escolha; ganha 1 perícia à escolha; escolhe 1 perícia em que já tem proficiência e ganha especialização nela.",
    abilityChoice: {options: ["str", "dex", "con", "int", "wis", "cha"]},
  },
  {
    id: "habilidoso",
    source: "phb",
    name: "Habilidoso",
    description: "Ganha 3 proficiências: perícias ou ferramentas à sua escolha.",
  },
  {
    id: "esconderijo",
    source: "phb",
    name: "Esconderijo",
    description: "+1 em DES; pode se esconder mesmo apenas parcialmente obscurecido; errar ataque à distância não revela sua posição.",
    requirements: [{kind: "ability", ability: "dex", value: 13, label: "DES 13+"}],
    abilityBonus: {dex: 1},
  },
  {
    id: "cortador",
    source: "tce",
    name: "Cortador",
    description: "+1 em FOR ou DES; uma vez por turno, acerto com corte reduz 10 pés da velocidade do alvo até seu próximo turno; crítico com corte: alvo com desvantagem em ataques.",
    abilityChoice: {options: ["str", "dex"]},
  },
  {
    id: "alma_do_gigante_da_tempestade",
    source: "bpg",
    name: "Alma do Gigante da Tempestade",
    description: "Pré-requisito: 4º nível e Golpe do Gigante da Tempestade. +1 em FOR, SAB ou CAR; ação bônus: aura 10 pés até seu próximo turno (resistência a raio e trovão; usos = prof).",
    abilityChoice: {options: ["str", "wis", "cha"]},
  },
  {
    id: "atirador_magias",
    source: "phb",
    name: "Atirador de Magias",
    description: "Dobra o alcance de magias de ataque à distância; ignora cobertura total; vantagem em ataques com conjuração.",
    requirements: [{kind: "spellcasting", label: "capaz de conjurar magias"}],
  },
  {
    id: "conjurador_agil",
    source: "tcsr",
    name: "Conjurador Ágil",
    description: "Pré-requisito: nível 11+. Se conjura magia de 1º nível ou superior como ação bônus, pode conjurar outra com ação no mesmo turno; no máximo uma de 3º nível ou superior.",
    requirements: [{kind: "spellcasting", label: "Conjuração"}],
  },
  {
    id: "ligeireza",
    source: "xge",
    name: "Ligeireza",
    description: "Pré-requisito: anão ou raça Pequena. +1 em FOR ou DES; +5 pés de deslocamento; proficiência em Acrobacia ou Atletismo; vantagem para escapar de agarramento.",
    abilityChoice: {options: ["str", "dex"]},
  },
  {
    id: "escudeiro_de_solamnia",
    source: "dsotdq",
    name: "Escudeiro de Solamnia",
    description: "Pré-requisito: campanha de Dragonlance, guerreiro/paladino ou Escudeiro de Solamnia. Montar ou desmontar custa 5 pés; ataque com vantagem e +1d8 de dano se acertar (usos = prof).",
  },
  {
    id: "golpe_do_gigante",
    source: "bpg",
    name: "Golpe do Gigante",
    description: "Pré-requisito: proficiência com arma marcial ou Enjeitado do Gigante. Escolhe um golpe (nuvem, fogo, gelo, colina, pedra ou tempestade): causa dano extra; CD 8 + prof + FOR ou CON.",
  },
  {
    id: "iniciacao_de_strixhaven",
    source: "scc",
    name: "Iniciação de Strixhaven",
    description: "Escolhe um colégio de Strixhaven: aprende 2 truques e 1 magia de 1º nível do colégio; conjura a magia 1 vez sem slot (recupera em descanso longo); INT, SAB ou CAR como atributo.",
  },
  {
    id: "mascote_de_strixhaven",
    source: "scc",
    name: "Mascote de Strixhaven",
    description: "Pré-requisito: 4º nível e Iniciação de Strixhaven. Mascote serve de familiar (Encontrar Familiar, ritual); cede 1 ataque a ele ou troca de lugar com ele (1/ descanso longo).",
  },
  {
    id: "magia_dos_svirfneblin",
    source: "mtf",
    name: "Magia dos Svirfneblin",
    description: "Pré-requisito: gnomo profundo (svirfneblin). Conjura Indetectabilidade à vontade sem componente material; Cegueira/Surdez, Turvar e Disfarçar-se 1 vez cada (1/ descanso longo).",
  },
  {
    id: "brigao_taverna",
    source: "phb",
    name: "Brigão de Taverna",
    description: "+1 em FOR ou CON; dano 1d4+mod em desarmados; proficiência com armas improvisadas; ação bônus: agarrar após acertar com improvisada corpo a corpo.",
    abilityChoice: {options: ["str", "con"]},
  },
  {
    id: "telecinese",
    source: "tce",
    name: "Telecinese",
    description: "+1 em INT, SAB ou CAR; aprende Mão de Mago sem componentes verbais/somáticos e invisível; ação bônus: empurra criatura a 30 pés (salvo de FOR, CD 8 + prof + mod.).",
    abilityChoice: {options: ["int", "wis", "cha"]},
  },
  {
    id: "telepatia",
    source: "tce",
    name: "Telepatia",
    description: "+1 em INT, SAB ou CAR; fala telepaticamente com criatura a 60 pés que você veja; conjura Detectar Pensamentos 1 vez sem slot (recupera em descanso longo).",
    abilityChoice: {options: ["int", "wis", "cha"]},
  },
  {
    id: "mestre_do_arremesso",
    source: "tcsr",
    name: "Mestre do Arremesso",
    description: "+1 em FOR ou DES; armas corpo a corpo simples e marciais tornam-se arremessáveis (20/60 pés de uma mão, 15/30 pés de duas); arma arremessada volta no fim do turno.",
    abilityChoice: {options: ["str", "dex"]},
  },
  {
    id: "durao",
    source: "phb",
    name: "Durão",
    description: "Seu máximo de PV aumenta em 2 para cada nível de personagem.",
    hpPerLevel: 2,
  },
  {
    id: "exultacao_vampirica",
    source: "psi",
    name: "Exultação Vampírica",
    description: "Pré-requisito: vampiro de Ixalan. Ação: a metade inferior do corpo vira vapor e você ganha deslocamento de voo de 30 pés por até 10 minutos (1/ descanso curto ou longo).",
  },
  {
    id: "vigor_do_gigante_da_colina",
    source: "bpg",
    name: "Vigor do Gigante da Colina",
    description: "Pré-requisito: 4º nível e Golpe do Gigante da Colina. +1 em FOR, CON ou SAB; reação anula empurrão ou queda; ao comer em descanso curto recupera PV extra = mod. CON + prof.",
    abilityChoice: {options: ["str", "con", "wis"]},
  },
  {
    id: "sacrificio_vital",
    source: "tcsr",
    name: "Sacrifício Vital",
    description: "Ação bônus: sofre 1d6 de necrótico (irreduzível) para ganhar bênção de sangue por 1 hora: +1d6 em ataque, +2d6 necrótico ao acertar ou -1d4 na salvaguarda de um alvo.",
  },
  {
    id: "mago_guerra",
    source: "phb",
    name: "Mago de Guerra",
    description: "Vantagem em testes para manter concentração; conjura magias com mão ocupada; reação: conjura magia de ataque quando criatura entra no alcance.",
    requirements: [{kind: "spellcasting", label: "capaz de conjurar magias"}],
  },
  {
    id: "mestre_armas",
    source: "phb",
    name: "Mestre de Armas",
    description: "+1 em FOR ou DES; proficiência com 4 armas simples ou corpo a corpo à sua escolha.",
    abilityChoice: {options: ["str", "dex"]},
  },
  {
    id: "magia_do_elfo_silvestre",
    source: "xge",
    name: "Magia do Elfo Silvestre",
    description: "Pré-requisito: elfo silvestre. Aprende 1 truque de druida e as magias Passos Largos e Passos Sem Rastros, 1 vez sem slot cada (recupera em descanso longo); SAB como atributo.",
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
