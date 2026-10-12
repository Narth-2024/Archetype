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
      { id: "metamagia_cuidadosa", name: "Metamagia Cuidadosa", description: "Cuando un conjuro permite salvación, protege hasta 5 criaturas que puedas ver; suman el mod de CAR a la salvación (1 punto)." },
      { id: "metamagia_distante", name: "Metamagia Distante", description: "Aumenta el alcance del conjuro en 30 pies, o lanza un conjuro de toque a 30 pies (1 punto)." },
      { id: "metamagia_empoderada", name: "Metamagia Empoderada", description: "Vuelve a tirar parte de los dados de daño del conjuro (total = mod de CAR) y usa los mayores (1 punto)." },
      { id: "metamagia_estendida", name: "Metamagia Estendida", description: "Duplica la duración del conjuro, hasta un máximo de 24 horas (1 punto)." },
      { id: "metamagia_aprimorada", name: "Metamagia Aprimorada", description: "Un objetivo tiene desventaja en la primera salvación contra el conjuro (3 puntos)." },
      { id: "metamagia_rapida", name: "Metamagia Rápida", description: "Cambia la acción del conjuro a acción adicional en el mismo turno (2 puntos)." },
      { id: "metamagia_silenciosa", name: "Metamagia Silenciosa", description: "Lanza el conjuro sin componentes verbales o gestuales (1 punto)." },
      { id: "metamagia_gemea", name: "Metamagia Gêmea", description: "Cambia un conjuro de un solo objetivo para afectar a dos criaturas idénticas (1 punto; puede exigir un espacio superior)." },
    ],
  },
  {
    id: "ki",
    classId: "monge",
    minLevel: 2,
    name: "Ki",
    picks: [],
    items: [
      { id: "golpe_rapido", name: "Ráfaga de Golpes", description: "Acción adicional: hace 2 golpes desarmados (1 ki).", minLevel: 2 },
      { id: "defesa_paciente", name: "Defensa Paciente", description: "Acción adicional: usa la Acción Esquivarse hasta el final del turno (1 ki).", minLevel: 2 },
      { id: "passo_do_vento", name: "Paso del Viento", description: "Acción adicional: Correr/Escapar con el doble de desplazamiento y salto triplicado (1 ki).", minLevel: 2 },
      { id: "desviar_projeteis", name: "Desviar Proyectiles", description: "Reacción: reduce el daño de un ataque a distancia en 1d10 + mod DES + nivel de monje; a 0 de daño, captura el proyectil (1 ki).", minLevel: 3 },
      { id: "golpe_atordoante", name: "Golpe Aturdidor", description: "En un golpe cuerpo a cuerpo, el objetivo hace una salvación de CON o queda aturdido hasta el final de tu próximo turno (1 ki).", minLevel: 5 },
      { id: "alma_de_diamante", name: "Alma de Diamante", description: "Competente en todas las salvaciones; al fallar una, puedes gastar 1 ki para volver a tirar.", minLevel: 14 },
      { id: "corpo_vazio", name: "Cuerpo Vacío", description: "Acción: 1 ki — invisibilidad no mágica por 1 minuto y 5 PV temporales + mod SAB.", minLevel: 18 },
    ],
  },
  {
    id: "invocacoes_profanas",
    classId: "bruxo",
    minLevel: 2,
    name: "Invocaciones Profanas",
    picks: [
      { level: 2, count: 2 },
      { level: 6, count: 1 },
      { level: 10, count: 1 },
      { level: 14, count: 1 },
      { level: 18, count: 1 },
    ],
    items: [
      { id: "inv_agonizing_blast", name: "Conmoción Agonizante", description: "Añade tu mod de CAR al daño de Rayo Mágico." },
      { id: "inv_repelling_blast", name: "Conmoción Repulsora", description: "Rayo Mágico empuja al objetivo 10 pies, sin salvación." },
      { id: "inv_devils_sight", name: "Visión del Diablo", description: "Ves con normalidad en la oscuridad mágica y no mágica hasta 120 pies." },
      { id: "inv_masks_of_many_faces", name: "Máscaras de Muchos Rostros", description: "Acción: cambia tu apariencia durante 1 hora con Disfraz Alterado." },
      { id: "inv_one_with_shadows", name: "Uno con las Sombras", description: "Acción: te vuelves invisible mientras permanezcas inmóvil; reapareces al moverte.", minLevel: 5 },
      { id: "inv_misty_visions", name: "Visiones Brumosas", description: "Acción: crea ilusiones sensoriales de hasta 15 pies (Ilusión Menor sin componentes)." },
      { id: "inv_book_of_ancient_secrets", name: "Libro de Secretos Antiguos", description: "Aprendes rituales de cualquier clase y puedes copiar pergaminos en tu Grimorio." },
      { id: "inv_eldritch_mind", name: "Mente Etérea", description: "Ventaja en comprobaciones de Concentración." },
      { id: "inv_sculptor_of_flesh", name: "Escultor de Carne", description: "Acción: lanza Polimorfo una vez por descanso largo.", minLevel: 7 },
      { id: "inv_gift_of_the_protectors", name: "Don del Protector", description: "Los aliados anotados en el Grimorio caen a 1 PV en lugar de 0 (1/descanso largo).", minLevel: 9 },
    ],
  },
  {
    id: "infusoes",
    classId: "artifice",
    minLevel: 2,
    name: "Infusiones",
    picks: [
      { level: 2, count: 4 },
      { level: 6, count: 2 },
      { level: 10, count: 2 },
      { level: 14, count: 2 },
      { level: 18, count: 2 },
    ],
    items: [
      { id: "inf_arma_aprimorada", name: "Arma Mejorada", description: "El arma elegida gana un +1 a ataque y daño (mejora en niveles altos)." },
      { id: "inf_defesa_aprimorada", name: "Defensa Mejorada", description: "La armadura o el escudo elegidos ganan +1 de CA (mejora en niveles altos)." },
      { id: "inf_tiro_repetido", name: "Disparo Repetido", description: "Un arma a distancia no necesita munición, gana +1 de daño e ignora Carga." },
      { id: "inf_arma_retornante", name: "Arma Retornante", description: "Un arma arrojadiza vuelve a tu mano al atacar; +1 de daño." },
      { id: "inf_arma_radiante", name: "Arma Radiante", description: "Arma +1; acción adicional añade 1d4 de daño radiante al próximo golpe." },
      { id: "inf_escudo_repulsivo", name: "Escudo Repulsor", description: "Escudo: reacción que empuja 15 pies a quien te acierte en cuerpo a cuerpo." },
      { id: "inf_agucar_mental", name: "Afinar la Mente", description: "Puedes ignorar la pérdida de Concentración una vez por descanso." },
      { id: "inf_servo_homunculo", name: "Siervo Homúnculo", description: "Crea un siervo que actúa con tu acción adicional y entrega tus conjuros de toque." },
      { id: "inf_garrafa_alquimica", name: "Botella Alquímica", description: "Produces líquidos (como pociones) una vez por descanso largo." },
      { id: "inf_bolsa_de_armazenamento", name: "Bolsa de Almacenamiento", description: "Espacio extradimensional de 2000 lb." },
      { id: "inf_botas_aladas", name: "Botas Aladas", description: "Vuela a 30 pies durante 10 minutos, una vez por descanso largo." },
      { id: "inf_visa_noturna", name: "Gafas de Visión Nocturna", description: "Gafas que otorgan visión en la oscuridad hasta 60 pies." },
    ],
  },
  {
    id: "maldicoes_de_sangue",
    classId: "cacador_de_sangue",
    minLevel: 2,
    name: "Maldiciones de Sangre",
    picks: [
      { level: 2, count: 1 },
      { level: 6, count: 1 },
      { level: 10, count: 1 },
      { level: 14, count: 1 },
      { level: 18, count: 1 },
    ],
    items: [
      { id: "mc_ansiosa", name: "Ansiosa", description: "El objetivo tiene desventaja en tiradas de ataque hasta el final de tu próximo turno." },
      { id: "mc_apavorada", name: "Aterradora", description: "El objetivo queda asustado hasta el final del turno (salvación de Sabiduría)." },
      { id: "mc_cegueira", name: "Ceguera", description: "El objetivo queda ciego hasta el final de tu próximo turno (salvación de Carisma)." },
      { id: "mc_enfeblecida", name: "Enervada", description: "El objetivo tiene desventaja en pruebas y salvaciones de Fuerza." },
      { id: "mc_marcada", name: "Marcada", description: "Tienes ventaja en ataques contra el objetivo hasta el final de tu próximo turno." },
      { id: "mc_paralisada", name: "Parálisis", description: "El objetivo queda paralizado hasta el final del turno (salvación de Constitución)." },
      { id: "mc_sangramento", name: "Sangrado", description: "Siempre que el objetivo sufra daño cortante o perforante, sufre 1d4 de daño necrótico adicional." },
      { id: "mc_bestial", name: "Bestial", description: "El objetivo no puede lanzar conjuros con componente verbal hasta el final del turno." },
      { id: "mc_transposta", name: "Transpuesta", description: "Intercambias tu posición con la del objetivo." },
      { id: "mc_vinculada", name: "Vinculada", description: "El desplazamiento del objetivo se reduce a la mitad hasta el final del turno." },
    ],
  },
  {
    id: "manobras_de_combate",
    classId: "guerreiro",
    subclassId: "mestre_de_armas",
    minLevel: 3,
    name: "Maniobras de Combate",
    picks: [
      { level: 3, count: 3 },
      { level: 7, count: 1 },
      { level: 10, count: 1 },
      { level: 15, count: 1 },
      { level: 18, count: 1 },
    ],
    items: [
      { id: "man_golpe_de_comando", name: "Golpe de Comando", description: "Gasta 1 dado: un aliado hace un ataque con tu acción adicional." },
      { id: "man_desarmar", name: "Desarmar", description: "Gasta 1 dado: +daño y el objetivo suelta un objeto (salvación de Fuerza)." },
      { id: "man_distrair", name: "Distraer", description: "Gasta 1 dado: un aliado tiene ventaja en su próximo ataque contra el objetivo." },
      { id: "man_passo_evasivo", name: "Paso Evasivo", description: "Gasta 1 dado: suma el resultado a tu desplazamiento en esta ronda." },
      { id: "man_finta", name: "Engaño", description: "Gasta 1 dado: ventaja en el ataque y daño extra." },
      { id: "man_provocar", name: "Provocar", description: "Gasta 1 dado: el objetivo tiene desventaja en ataques contra otros hasta el final del turno (salvación de Fuerza)." },
      { id: "man_investida", name: "Embestida", description: "Gasta 1 dado: +5 pies de alcance en el ataque cuerpo a cuerpo." },
      { id: "man_manobrar", name: "Maniobrar", description: "Gasta 1 dado: un aliado usa su reacción para moverse 5 pies sin provocar ataques." },
      { id: "man_ameacar", name: "Amenazar", description: "Gasta 1 dado: el objetivo queda asustado hasta el final del turno (salvación de Sabiduría)." },
      { id: "man_parada", name: "Parada", description: "Reacción: suma 1d6 + mod DES a tu CA contra un ataque cuerpo a cuerpo." },
      { id: "man_precisao", name: "Precisión", description: "Gasta 1 dado: suma el resultado a la tirada de ataque." },
      { id: "man_empurrar", name: "Empujar", description: "Gasta 1 dado: empuja al objetivo 5 pies (salvación de Fuerza)." },
      { id: "man_reunir", name: "Reunir", description: "Gasta 1 dado: un aliado gana PV temporales = dado + mod CAR." },
      { id: "man_riposte", name: "Estocada", description: "Reacción: ataque contra quien falló un ataque contra ti, con daño extra." },
      { id: "man_varredura", name: "Barrido", description: "Gasta 1 dado: golpea a una segunda criatura a 5 pies del objetivo con el mismo ataque." },
      { id: "man_derrubar", name: "Derribar", description: "Gasta 1 dado: el objetivo cae al suelo (salvación de Fuerza)." },
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
