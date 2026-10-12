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
    name: "Metamagic",
    picks: [
      { level: 3, count: 2 },
      { level: 10, count: 2 },
      { level: 17, count: 2 },
    ],
    items: [
      { id: "metamagia_cuidadosa", name: "Careful Spell", description: "When a spell allows a saving throw, protect up to 5 creatures you can see; they add your CHA modifier to the save (1 point)." },
      { id: "metamagia_distante", name: "Distant Spell", description: "Increase the spell's range by 30 feet, or cast a touch spell at a range of 30 feet (1 point)." },
      { id: "metamagia_empoderada", name: "Empowered Spell", description: "Reroll some of the spell's damage dice (total = CHA modifier) and keep the higher rolls (1 point)." },
      { id: "metamagia_estendida", name: "Extended Spell", description: "Double the spell's duration, up to a maximum of 24 hours (1 point)." },
      { id: "metamagia_aprimorada", name: "Heightened Spell", description: "One target has disadvantage on its first saving throw against the spell (3 points)." },
      { id: "metamagia_rapida", name: "Quickened Spell", description: "Change the spell's casting action to a bonus action on the same turn (2 points)." },
      { id: "metamagia_silenciosa", name: "Subtle Spell", description: "Cast the spell without verbal or somatic components (1 point)." },
      { id: "metamagia_gemea", name: "Twinned Spell", description: "Change a single-target spell to affect two identical creatures (1 point; may require a higher slot)." },
    ],
  },
  {
    id: "ki",
    classId: "monge",
    minLevel: 2,
    name: "Ki",
    picks: [],
    items: [
      { id: "golpe_rapido", name: "Flurry of Blows", description: "Bonus action: make 2 unarmed strikes (1 ki).", minLevel: 2 },
      { id: "defesa_paciente", name: "Patient Defense", description: "Bonus action: take the Dodge action until the end of the turn (1 ki).", minLevel: 2 },
      { id: "passo_do_vento", name: "Step of the Wind", description: "Bonus action: Dash or Disengage with double speed and a tripled jump (1 ki).", minLevel: 2 },
      { id: "desviar_projeteis", name: "Deflect Missiles", description: "Reaction: reduce a ranged attack's damage by 1d10 + DEX mod + monk level; at 0 damage, catch the missile (1 ki).", minLevel: 3 },
      { id: "golpe_atordoante", name: "Stunning Strike", description: "On a hit with a melee attack, the target makes a CON save or is stunned until the end of your next turn (1 ki).", minLevel: 5 },
      { id: "alma_de_diamante", name: "Diamond Soul", description: "Proficient in all saves; when you fail one, you can spend 1 ki to reroll.", minLevel: 14 },
      { id: "corpo_vazio", name: "Empty Body", description: "Action: 1 ki — nonmagical invisibility for 1 minute and 5 temporary HP + WIS mod.", minLevel: 18 },
    ],
  },
  {
    id: "invocacoes_profanas",
    classId: "bruxo",
    minLevel: 2,
    name: "Eldritch Invocations",
    picks: [
      { level: 2, count: 2 },
      { level: 6, count: 1 },
      { level: 10, count: 1 },
      { level: 14, count: 1 },
      { level: 18, count: 1 },
    ],
    items: [
      { id: "inv_agonizing_blast", name: "Agonizing Blast", description: "Add your CHA modifier to Eldritch Blast's damage." },
      { id: "inv_repelling_blast", name: "Repelling Blast", description: "Eldritch Blast pushes the target 10 feet, with no save." },
      { id: "inv_devils_sight", name: "Devil's Sight", description: "See normally in both magical and nonmagical darkness up to 120 feet." },
      { id: "inv_masks_of_many_faces", name: "Masks of Many Faces", description: "Action: change your appearance for 1 hour with Disguise Self." },
      { id: "inv_one_with_shadows", name: "One with Shadows", description: "Action: become invisible while remaining still; you reappear when you move.", minLevel: 5 },
      { id: "inv_misty_visions", name: "Misty Visions", description: "Action: create sensory illusions of up to 15 feet (Minor Illusion without components)." },
      { id: "inv_book_of_ancient_secrets", name: "Book of Ancient Secrets", description: "Learn rituals of any class and copy scrolls into your Grimoire." },
      { id: "inv_eldritch_mind", name: "Eldritch Mind", description: "Advantage on Concentration checks." },
      { id: "inv_sculptor_of_flesh", name: "Sculptor of Flesh", description: "Action: cast Polymorph once per long rest.", minLevel: 7 },
      { id: "inv_gift_of_the_protectors", name: "Gift of the Protectors", description: "Allies named in the Grimoire drop to 1 HP instead of 0 when reduced (1/long rest).", minLevel: 9 },
    ],
  },
  {
    id: "infusoes",
    classId: "artifice",
    minLevel: 2,
    name: "Infusions",
    picks: [
      { level: 2, count: 4 },
      { level: 6, count: 2 },
      { level: 10, count: 2 },
      { level: 14, count: 2 },
      { level: 18, count: 2 },
    ],
    items: [
      { id: "inf_arma_aprimorada", name: "Enhanced Weapon", description: "The chosen weapon gains a +1 bonus to attack and damage (improves at higher levels)." },
      { id: "inf_defesa_aprimorada", name: "Enhanced Defense", description: "The chosen armor or shield gains +1 AC (improves at higher levels)." },
      { id: "inf_tiro_repetido", name: "Repeating Shot", description: "A ranged weapon needs no ammunition, gains +1 damage, and ignores Loading." },
      { id: "inf_arma_retornante", name: "Returning Weapon", description: "A thrown weapon returns to your hand when you attack; +1 damage." },
      { id: "inf_arma_radiante", name: "Radiant Weapon", description: "+1 weapon; bonus action adds 1d4 radiant damage to the next strike." },
      { id: "inf_escudo_repulsivo", name: "Repulsion Shield", description: "Shield: reaction pushes a creature that hits you in melee 15 feet." },
      { id: "inf_agucar_mental", name: "Mind Sharpener", description: "You can ignore losing Concentration once per rest." },
      { id: "inf_servo_homunculo", name: "Homunculus Servant", description: "Creates a servant that acts on your bonus action and delivers your touch spells." },
      { id: "inf_garrafa_alquimica", name: "Alchemy Jug", description: "Produces liquids (such as potions) once per long rest." },
      { id: "inf_bolsa_de_armazenamento", name: "Bag of Holding", description: "Heward's Handy Haversack-like extradimensional space holding 2000 lb." },
      { id: "inf_botas_aladas", name: "Winged Boots", description: "Fly at 30 feet for 10 minutes, once per long rest." },
      { id: "inf_visa_noturna", name: "Goggles of Night", description: "Goggles that grant darkvision out to 60 feet." },
    ],
  },
  {
    id: "maldicoes_de_sangue",
    classId: "cacador_de_sangue",
    minLevel: 2,
    name: "Blood Curses",
    picks: [
      { level: 2, count: 1 },
      { level: 6, count: 1 },
      { level: 10, count: 1 },
      { level: 14, count: 1 },
      { level: 18, count: 1 },
    ],
    items: [
      { id: "mc_ansiosa", name: "Anxious", description: "The target has disadvantage on attack rolls until the end of your next turn." },
      { id: "mc_apavorada", name: "Cowering", description: "The target is frightened until the end of the turn (WIS save)." },
      { id: "mc_cegueira", name: "Eyeless", description: "The target is blinded until the end of your next turn (CHA save)." },
      { id: "mc_enfeblecida", name: "Enfeebled", description: "The target has disadvantage on Strength checks and saves." },
      { id: "mc_marcada", name: "Marked", description: "You have advantage on attacks against the target until the end of your next turn." },
      { id: "mc_paralisada", name: "Paralysis", description: "The target is paralyzed until the end of the turn (CON save)." },
      { id: "mc_sangramento", name: "Bleeding", description: "Whenever the target takes slashing or piercing damage, it takes an extra 1d4 necrotic damage." },
      { id: "mc_bestial", name: "Bestial", description: "The target cannot cast spells with verbal components until the end of the turn." },
      { id: "mc_transposta", name: "Transposed", description: "You swap places with the target." },
      { id: "mc_vinculada", name: "Binding", description: "The target's speed is halved until the end of the turn." },
    ],
  },
  {
    id: "manobras_de_combate",
    classId: "guerreiro",
    subclassId: "mestre_de_armas",
    minLevel: 3,
    name: "Combat Maneuvers",
    picks: [
      { level: 3, count: 3 },
      { level: 7, count: 1 },
      { level: 10, count: 1 },
      { level: 15, count: 1 },
      { level: 18, count: 1 },
    ],
    items: [
      { id: "man_golpe_de_comando", name: "Commander's Strike", description: "Spend 1 die: an ally makes an attack with your bonus action." },
      { id: "man_desarmar", name: "Disarming Attack", description: "Spend 1 die: extra damage and the target drops an item (STR save)." },
      { id: "man_distrair", name: "Distracting Strike", description: "Spend 1 die: an ally has advantage on its next attack against the target." },
      { id: "man_passo_evasivo", name: "Evasive Footwork", description: "Spend 1 die: add the result to your speed this round." },
      { id: "man_finta", name: "Feinting Attack", description: "Spend 1 die: advantage on the attack and extra damage." },
      { id: "man_provocar", name: "Goading Attack", description: "Spend 1 die: the target has disadvantage on attacks against others until the end of the turn (STR save)." },
      { id: "man_investida", name: "Lunging Attack", description: "Spend 1 die: +5 feet of reach on the melee attack." },
      { id: "man_manobrar", name: "Maneuvering Attack", description: "Spend 1 die: an ally uses its reaction to move 5 feet without provoking attacks." },
      { id: "man_ameacar", name: "Menacing Attack", description: "Spend 1 die: the target is frightened until the end of the turn (WIS save)." },
      { id: "man_parada", name: "Parry", description: "Reaction: add 1d6 + DEX mod to your AC against a melee attack." },
      { id: "man_precisao", name: "Precision Attack", description: "Spend 1 die: add the result to the attack roll." },
      { id: "man_empurrar", name: "Pushing Attack", description: "Spend 1 die: push the target 5 feet (STR save)." },
      { id: "man_reunir", name: "Rally", description: "Spend 1 die: an ally gains temporary HP equal to the die + CHA mod." },
      { id: "man_riposte", name: "Riposte", description: "Reaction: attack against a creature that missed you, with extra damage." },
      { id: "man_varredura", name: "Sweeping Attack", description: "Spend 1 die: hit a second creature 5 feet from the target with the same attack." },
      { id: "man_derrubar", name: "Trip Attack", description: "Spend 1 die: the target falls prone (STR save)." },
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
