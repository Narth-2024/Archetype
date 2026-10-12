export type SpecialFeatureItem = {
  id: string;
  name: string;
  description: string;
  minLevel?: number;
};

export type SpecialFeatureDef = {
  id: string;
  classId: string;
  subclassId?: string;
  minLevel: number;
  name: string;
  picks: { level: number; count: number }[];
  items: SpecialFeatureItem[];
};

export const SPECIAL_FEATURES: SpecialFeatureDef[] = [
  {
    id: "metamagia",
    classId: "feiticeiro",
    minLevel: 3,
    name: "Metamagia",
    picks: [
      { level: 3, count: 2 },
      { level: 10, count: 2 },
      { level: 17, count: 2 },
    ],
    items: [
      { id: "metamagia_cuidadosa", name: "Cuidadosa", description: "Quando uma sua magia permite salvamento, protege até 5 criaturas que possa ver, que somam o mod de CAR no salvamento (1 ponto)." },
      { id: "metamagia_distante", name: "Distante", description: "Aumenta o alcance da magia em 30 pés, ou conjura uma magia de toque a 30 pés (1 ponto)." },
      { id: "metamagia_empoderada", name: "Empoderada", description: "Rerrola parte dos dados de dano da magia (total = mod de CAR) e usa o maior resultado (1 ponto)." },
      { id: "metamagia_estendida", name: "Estendida", description: "Duplica a duração da magia, até um máximo de 24 horas (1 ponto)." },
      { id: "metamagia_aprimorada", name: "Aprimorada", description: "Um alvo tem desvantagem no primeiro salvamento contra a magia (3 pontos)." },
      { id: "metamagia_rapida", name: "Rápida", description: "Muda a ação da magia para ação bônus no mesmo turno (2 pontos)." },
      { id: "metamagia_silenciosa", name: "Silenciosa", description: "Conjura sem componentes verbais ou gestuais (1 ponto)." },
      { id: "metamagia_gemea", name: "Gêmea", description: "Muda uma magia de alvo único para afetar duas criaturas idênticas (1 ponto; pode exigir slot superior)." },
    ],
  },
  {
    id: "ki",
    classId: "monge",
    minLevel: 2,
    name: "Ki",
    picks: [],
    items: [
      { id: "golpe_rapido", name: "Golpe Rápido", description: "Ação bônus: faça 2 ataques desarmados (1 ki).", minLevel: 2 },
      { id: "defesa_paciente", name: "Defesa Paciente", description: "Ação bônus: usa Ação Esquiva até o fim do turno (1 ki).", minLevel: 2 },
      { id: "passo_do_vento", name: "Passo do Vento", description: "Ação bônus: Correr/Retroceder com o dobro do deslocamento e salto triplicado (1 ki).", minLevel: 2 },
      { id: "desviar_projeteis", name: "Desviar de Projéteis", description: "Reação: reduz o dano de um ataque à distância em 1d10 + mod DES + nível de monge; com dano a 0, captura o projétil (1 ki).", minLevel: 3 },
      { id: "golpe_atordoante", name: "Golpe Atordoante", description: "Ataque corpo a corpo bem-sucedido: alvo faz SV de CON ou fica atordoado até o fim do seu próximo turno (1 ki).", minLevel: 5 },
      { id: "alma_de_diamante", name: "Alma de Diamante", description: "Proficiente em todos os salvamentos; ao falhar um, pode gastar 1 ki para rerrolar.", minLevel: 14 },
      { id: "corpo_vazio", name: "Corpo Vazio", description: "Ação: 1 ki — invisibilidade não-mágica por 1 minuto e 5 PV temporários + mod SAB.", minLevel: 18 },
    ],
  },
  {
    id: "invocacoes_profanas",
    classId: "bruxo",
    minLevel: 2,
    name: "Invocações Profanas",
    picks: [
      { level: 2, count: 2 },
      { level: 6, count: 1 },
      { level: 10, count: 1 },
      { level: 14, count: 1 },
      { level: 18, count: 1 },
    ],
    items: [
      { id: "inv_agonizing_blast", name: "Golpe Mágico Atormentador", description: "Adiciona seu mod de CAR ao dano de Golpe Mágico." },
      { id: "inv_repelling_blast", name: "Golpe Mágico Repulsor", description: "Golpe Mágico empurra o alvo 10 pés, sem salvamento." },
      { id: "inv_devils_sight", name: "Visão do Diabo", description: "Enxerga normalmente no escuro mágico e não mágico até 120 pés." },
      { id: "inv_masks_of_many_faces", name: "Máscaras de Muitas Faces", description: "Ação: muda sua aparência por 1 hora com Disfarce Alterado." },
      { id: "inv_one_with_shadows", name: "Um com as Sombras", description: "Ação: fica invisível enquanto permanecer imóvel; reaparece ao se mover.", minLevel: 5 },
      { id: "inv_misty_visions", name: "Visões Brumosas", description: "Ação: cria ilusões sensoriais de até 15 pés (Ilusão Menor sem componentes)." },
      { id: "inv_book_of_ancient_secrets", name: "Livro de Segredos Antigos", description: "Aprende rituais de qualquer classe e pode copiar pergaminhos em seu Grimório." },
      { id: "inv_eldritch_mind", name: "Mente Éterea", description: "Vantagem em testes de Concentração." },
      { id: "inv_sculptor_of_flesh", name: "Escultor de Carne", description: "Ação: conjura Polimorfismo uma vez por descanso longo.", minLevel: 7 },
      { id: "inv_gift_of_the_protectors", name: "Dom do Protetor", description: "Aliados no Grimório não morrem a 0 PV, ficando a 1 PV (1/descanso longo).", minLevel: 9 },
    ],
  },
  {
    id: "infusoes",
    classId: "artifice",
    minLevel: 2,
    name: "Infusões",
    picks: [
      { level: 2, count: 4 },
      { level: 6, count: 2 },
      { level: 10, count: 2 },
      { level: 14, count: 2 },
      { level: 18, count: 2 },
    ],
    items: [
      { id: "inf_arma_aprimorada", name: "Arma Aprimorada", description: "Arma escolhida ganha bônus +1 de ataque e dano (melhora em níveis altos)." },
      { id: "inf_defesa_aprimorada", name: "Defesa Aprimorada", description: "Armadura ou escudo escolhido ganha +1 de CA (melhora em níveis altos)." },
      { id: "inf_tiro_repetido", name: "Tiro Repetido", description: "Arma à distância não exige munição, soma +1 de dano e ignora Munição/Recarga." },
      { id: "inf_arma_retornante", name: "Arma Retornante", description: "Arma arremessada volta à mão ao atacar; soma +1 de dano." },
      { id: "inf_arma_radiante", name: "Arma Radiante", description: "Arma +1; ação bônus adiciona 1d4 de dano radiante ao próximo golpe." },
      { id: "inf_escudo_repulsivo", name: "Escudo Repulsivo", description: "Escudo: reação empurra 15 pés quem o acertar em um ataque corpo a corpo." },
      { id: "inf_agucar_mental", name: "Aguçar Mental", description: "Você pode ignorar a perda de Concentração uma vez por descanso." },
      { id: "inf_servo_homunculo", name: "Servo Homúnculo", description: "Cria um servo que age com sua ação bônus e conjura magias seu toque." },
      { id: "inf_garrafa_alquimica", name: "Garrafa Alquímica", description: "Produz líquidos (como poções) uma vez por descanso longo." },
      { id: "inf_bolsa_de_armazenamento", name: "Bolsa de Armazenamento", description: "Bolsa Portátil: espaço extra-dimensional de 2000 lb." },
      { id: "inf_botas_aladas", name: "Botas Aladas", description: "Voo de 30 pés por 10 minutos, uma vez por descanso longo." },
      { id: "inf_visa_noturna", name: "Visão Noturna", description: "Óculos que concedem visão no escuro a 60 pés." },
    ],
  },
  {
    id: "maldicoes_de_sangue",
    classId: "cacador_de_sangue",
    minLevel: 2,
    name: "Maldições de Sangue",
    picks: [
      { level: 2, count: 1 },
      { level: 6, count: 1 },
      { level: 10, count: 1 },
      { level: 14, count: 1 },
      { level: 18, count: 1 },
    ],
    items: [
      { id: "mc_ansiosa", name: "Ansiosa", description: "O alvo tem desvantagem em jogadas de ataque até o fim do seu próximo turno." },
      { id: "mc_apavorada", name: "Apavorada", description: "O alvo fica amedrontado até o fim do turno (SV de Sabedoria)." },
      { id: "mc_cegueira", name: "Cegueira", description: "O alvo fica cego até o fim do seu próximo turno (SV de Carisma)." },
      { id: "mc_enfeblecida", name: "Enfeebled", description: "O alvo tem desvantagem em testes e salvamentos de Força." },
      { id: "mc_marcada", name: "Marcada", description: "Você tem vantagem em ataques contra o alvo até o fim do seu próximo turno." },
      { id: "mc_paralisada", name: "Paralisada", description: "O alvo fica paralisado até o fim do turno (SV de Constituição)." },
      { id: "mc_sangramento", name: "Sangramento", description: "Sempre que o alvo sofrer dano cortante ou perfurante, soma 1d4 de dano necrótico." },
      { id: "mc_bestial", name: "Bestial", description: "O alvo não pode conjurar magias com componente verbal até o fim do turno." },
      { id: "mc_transposta", name: "Transposta", description: "Você troca de lugar com o alvo." },
      { id: "mc_vinculada", name: "Vinculada", description: "O deslocamento do alvo fica reduzido à metade até o fim do turno." },
    ],
  },
  {
    id: "manobras_de_combate",
    classId: "guerreiro",
    subclassId: "mestre_de_armas",
    minLevel: 3,
    name: "Manobras de Combate",
    picks: [
      { level: 3, count: 3 },
      { level: 7, count: 1 },
      { level: 10, count: 1 },
      { level: 15, count: 1 },
      { level: 18, count: 1 },
    ],
    items: [
      { id: "man_golpe_de_comando", name: "Golpe de Comando", description: "Gasta 1 dado: um aliado faz um ataque com sua ação bônus." },
      { id: "man_desarmar", name: "Desarmar", description: "Gasta 1 dado: +dano e o alvo larga um objeto (SV de Força)." },
      { id: "man_distrair", name: "Distrair", description: "Gasta 1 dado: um aliado tem vantagem no próximo ataque contra o alvo." },
      { id: "man_passo_evasivo", name: "Passo Evasivo", description: "Gasta 1 dado: soma o resultado ao deslocamento nesta rodada." },
      { id: "man_finta", name: "Finta", description: "Gasta 1 dado: vantagem no ataque e +dano no alvo." },
      { id: "man_provocar", name: "Provocar", description: "Gasta 1 dado: o alvo tem desvantagem em ataques contra outros até o fim do turno (SV de Força)." },
      { id: "man_investida", name: "Investida", description: "Gasta 1 dado: +5 pés de alcance no ataque corpo a corpo." },
      { id: "man_manobrar", name: "Manobrar", description: "Gasta 1 dado: um aliado usa a reação para se mover 5 pés sem provocar ataque." },
      { id: "man_ameacar", name: "Ameaçar", description: "Gasta 1 dado: o alvo fica amedrontado até o fim do turno (SV de Sabedoria)." },
      { id: "man_parada", name: "Parada", description: "Reação: soma 1d6 + mod DES na CA contra um ataque corpo a corpo." },
      { id: "man_precisao", name: "Precisão", description: "Gasta 1 dado: soma o resultado ao teste de ataque." },
      { id: "man_empurrar", name: "Empurrar", description: "Gasta 1 dado: empurra o alvo 5 pés (SV de Força)." },
      { id: "man_reunir", name: "Reunir", description: "Gasta 1 dado: um aliado ganha PV temporários = dado + mod CAR." },
      { id: "man_riposte", name: "Riposte", description: "Reação: ataque contra quem errou um ataque contra você, com +dano." },
      { id: "man_varredura", name: "Varredura", description: "Gasta 1 dado: atinge uma segunda criatura a 5 pés do alvo com o mesmo ataque." },
      { id: "man_derrubar", name: "Derrubar", description: "Gasta 1 dado: o alvo cai no chão (SV de Força)." },
    ],
  },
];

export function specialFeaturesFor(
  classId: string,
  level: number,
  subclassId?: string,
): SpecialFeatureDef[] {
  return SPECIAL_FEATURES.filter(
    (f) =>
      f.classId === classId &&
      f.minLevel <= level &&
      (!f.subclassId || f.subclassId === subclassId),
  );
}

export function specialPicksLimit(
  f: SpecialFeatureDef,
  level: number,
): number | null {
  if (f.picks.length === 0) return null;
  return f.picks
    .filter((p) => p.level <= level)
    .reduce((a, p) => a + p.count, 0);
}
