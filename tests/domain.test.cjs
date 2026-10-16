const path = require("path").join(__dirname, "..", ".test-build");
const { suggestAbilities } = require(path + "/domain/optimize.js");
const calc = require(path + "/domain/calc.js");
const { migrateDoc } = require(path + "/domain/migrate.js");
const { newCharacterDoc } = require(path + "/domain/create.js");
const units = require(path + "/domain/units.js");

let failures = 0;
function check(label, cond, extra) {
  if (cond) console.log("OK  " + label);
  else {
    failures++;
    console.log("FAIL " + label + (extra !== undefined ? " → " + JSON.stringify(extra) : ""));
  }
}

// --- units ---
check("ft(30) = 9 m", units.ft(30) === "9 m", units.ft(30));
check("ft(5) = 1,5 m", units.ft(5) === "1,5 m", units.ft(5));
check("ft(60) = 18 m", units.ft(60) === "18 m", units.ft(60));
check("ft(120) = 37 m", units.ft(120) === "37 m", units.ft(120));
check("ftRange(80/320)", units.ftRange("80/320") === "24/98 m", units.ftRange("80/320"));
check("ftRange(Toque)", units.ftRange("Toque") === "Toque", units.ftRange("Toque"));
check("ftText(60 pés)", units.ftText("60 pés") === "18 m", units.ftText("60 pés"));
check("lbToKg(13)", units.lbToKg(13) === "5,9", units.lbToKg(13));

// --- migration ---
const old = JSON.parse(
  JSON.stringify({
    schemaVersion: 1,
    step: 3,
    complete: false,
    identity: {
      name: "X", player: "", raceId: "elfo", classId: "mago", level: 5,
      backgroundId: "erudito", alignment: "", xp: 0, raceBonusChoices: ["dex"],
    },
    abilities: { str: 8, dex: 14, con: 14, int: 15, wis: 12, cha: 10 },
    saves: {}, skills: {},
    proficiencies: { armors: [], weapons: [], tools: [], languages: [] },
    inventory: [], attacks: [],
    spellcasting: { known: [], prepared: [], slotsUsed: {} },
    combat: { hpCurrent: 1, hpTemp: 0 }, notes: "",
  }),
);
const migrated = migrateDoc(old);
check("migração: classes[]", Array.isArray(migrated.identity.classes) && migrated.identity.classes.length === 1 && migrated.identity.classes[0].classId === "mago" && migrated.identity.classes[0].level === 5, migrated.identity.classes);
check("migração: schemaVersion 3", migrated.schemaVersion === 3, migrated.schemaVersion);
check(
  "migração: subraceId/feats/subclassId",
  migrated.identity.subraceId === "" &&
    Array.isArray(migrated.feats) &&
    migrated.feats.length === 0 &&
    migrated.identity.classes[0].subclassId === undefined,
  { subraceId: migrated.identity.subraceId, feats: migrated.feats, entry: migrated.identity.classes[0] },
);
check("migração: abilityMode", migrated.identity.abilityMode === "pontos", migrated.identity.abilityMode);

// --- multiclass calc ---
const doc = newCharacterDoc();
doc.identity.name = "Multi";
doc.identity.classes = [
  { classId: "guerreiro", level: 5 },
  { classId: "ladino", level: 3 },
];
doc.abilities = { str: 16, dex: 14, con: 14, int: 10, wis: 10, cha: 8 };
check("nível total 8", calc.totalLevel(doc) === 8, calc.totalLevel(doc));
check("PB nível 8 = +3", calc.pbOf(doc) === 3, calc.pbOf(doc));
const hp = calc.maxHp(doc);
// guerreiro 1: 10+2=12; guerreiro 2-5: 4*(6+2)=32; ladino 3: 3*(5+2)=21 → 65
check("PV multiclasse = 65", hp.value === 65, { value: hp.value, parts: hp.parts });
check("salvamentos = união (FOR, CON, DES, INT)",
  JSON.stringify([...calc.classSaveKeys(doc)].sort()) === JSON.stringify(["con", "dex", "int", "str"]),
  calc.classSaveKeys(doc));

// CA unarmored não se aplica (guerreiro sem UD) → 10+DES
const ac = calc.armorClass(doc);
check("CA sem armadura 10+2", ac.value === 12, ac.value);

// --- multiclass casters slots ---
const caster = newCharacterDoc();
caster.identity.classes = [
  { classId: "paladino", level: 2 },
  { classId: "bruxo", level: 3 },
];
caster.abilities = { str: 16, dex: 10, con: 14, int: 10, wis: 10, cha: 16 };
const slots = calc.spellSlots(caster);
const fullGroups = slots.groups.filter((g) => g.source !== "pact");
const pactGroups = slots.groups.filter((g) => g.source === "pact");
check("pal2: full level = 1 → slot nível 1 (2)",
  fullGroups.length === 1 && fullGroups[0].level === 1 && fullGroups[0].max === 2, slots.groups);
check("bruxo3: pacto nível 2 ×2",
  pactGroups.length === 1 && pactGroups[0].level === 2 && pactGroups[0].max === 2, pactGroups);
check("atributo conjuração = CAR", calc.spellAbility(caster) === "cha", calc.spellAbility(caster));
check("CD = 8+3+3 = 14", calc.spellSaveDc(caster).value === 14, calc.spellSaveDc(caster).value);

// --- point buy ---
const { POINT_COSTS, POINT_BUY_TOTAL, pointBuySpent } = require(path + "/domain/optimize.js");
check("custos point buy", POINT_COSTS[8] === 0 && POINT_COSTS[13] === 5 && POINT_COSTS[15] === 9);
check("total 27", POINT_BUY_TOTAL === 27);

// --- otimizador balanceado ---
const mage = newCharacterDoc();
mage.identity.classes = [{ classId: "mago", level: 4 }];
mage.identity.raceId = "";
const t0 = Date.now();
const s1 = suggestAbilities(mage);
const dt = Date.now() - t0;
const spent = pointBuySpent(s1.abilities);
check("sugestão mago cabe em 27", spent <= 27, spent);
check("sugestão mago: INT alta (>=15)", s1.abilities.int >= 15, s1.abilities);
check("sugestão mago: CON alta (>=13)", s1.abilities.con >= 13, s1.abilities);
check("otimizador rápido (<600ms)", dt < 600, dt + "ms");
console.log("   mago →", JSON.stringify(s1.abilities), s1.note);

const rogue = newCharacterDoc();
rogue.identity.classes = [{ classId: "ladino", level: 3 }];
const s2 = suggestAbilities(rogue);
check("sugestão ladino: DEX alta", s2.abilities.dex >= 14, s2.abilities);
console.log("   ladino →", JSON.stringify(s2.abilities), s2.note);

// array mode
rogue.identity.abilityMode = "array";
const s3 = suggestAbilities(rogue);
const vals = Object.values(s3.abilities).sort((a, b) => b - a);
check("sugestão array usa os valores do array", JSON.stringify(vals) === JSON.stringify([15, 14, 13, 12, 10, 8]), vals);

// --- humano variante flexível ---
const human = newCharacterDoc();
human.identity.raceId = "humano";
human.identity.subraceId = "humano_variante";
human.identity.classes = [{ classId: "bardo", level: 3 }];
human.identity.abilityMode = "pontos";
const s4 = suggestAbilities(human);
check("variante: escolhe 2 atributos flexíveis", s4.raceChoices.length === 2, s4.raceChoices);
console.log("   humano bardo →", JSON.stringify(s4.abilities), "flex:", s4.raceChoices.join(","), s4.note);

// --- race skill pool ---
const { getRace } = require(path + "/data/index.js");
const { raceSkillPool } = calc;
check("pool do humano variante = 1 perícia", raceSkillPool(human).count === 1, raceSkillPool(human));
check("pool do elfo = 0", raceSkillPool(mage).count === 0);

// --- backgrounds: auto-marcação nunca excede o count ---
{
  const { BACKGROUNDS, getBackground } = require(path + "/data/index.js");
  const { backgroundSkills } = calc;
  let bad = [];
  for (const b of BACKGROUNDS) {
    const sc = b.skillChoices;
    if (!sc) continue;
    const auto = (sc.options === "any" ? [] : sc.options).slice(0, sc.count);
    const doc = { skills: {}, identity: { backgroundId: b.id }, saves: {}, proficiencies: { armors: [], weapons: [], tools: [], languages: [] }, spells: {} };
    for (const s of auto) doc.skills[s] = true;
    const marked = Object.values(doc.skills).filter(Boolean).length;
    if (marked > sc.count) bad.push(b.id + ":" + marked + ">" + sc.count);
  }
  check("antecedentes: auto-marcação <= count", bad.length === 0, bad);
}

// --- v3: subraça ---
const { getSubrace, getFeat, getSubclass, subclassesForClass, parseFeatRef, buildFeatRef, featUnmetRequirements, featAbilityBonus } = require(path + "/data/index.js");

const dwarf = newCharacterDoc();
dwarf.identity.raceId = "anao";
dwarf.identity.subraceId = "anao_da_montanha";
dwarf.identity.classes = [{ classId: "guerreiro", level: 1 }];
dwarf.abilities = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
check("subraça montanha: FOR 10 +2 = 12", calc.abilityScore(dwarf, "str") === 12, calc.abilityScore(dwarf, "str"));
check("raça anão: CON 10 +2 = 12", calc.abilityScore(dwarf, "con") === 12, calc.abilityScore(dwarf, "con"));
const profs = calc.resolveProficiencies(dwarf);
check("proficiência de subraça (leve/média)", profs.armors.includes("leve") && profs.armors.includes("media"), profs.armors);
check("speed com subraça", calc.speed(dwarf) === 25, calc.speed(dwarf));

// --- v3: talentos ---
const hpBase = calc.maxHp(dwarf).value;
dwarf.feats = ["durao"];
check("Durão: +2 PV por nível", calc.maxHp(dwarf).value === hpBase + 2, { before: hpBase, after: calc.maxHp(dwarf).value });
dwarf.feats = ["duravel"];
check("Durável: +1 CON", calc.abilityScore(dwarf, "con") === 13, calc.abilityScore(dwarf, "con"));
const bd = calc.allAbilitiesWithBreakdown(dwarf).find((a) => a.key === "con");
check("breakdown tem parte feats", bd.feats === 1 && bd.race === 2 && bd.total === 13, bd);
check("darkvision do anão", calc.darkvision(dwarf) === 60, calc.darkvision(dwarf));

// --- v4: sub-raças com replacesAbilityBonus / replacesTraits ---
const zariel = newCharacterDoc();
zariel.identity.raceId = "tiefling";
zariel.identity.subraceId = "tiefling_zariel";
zariel.abilities = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
check("zariel: +2 CAR", calc.abilityScore(zariel, "cha") === 12, calc.abilityScore(zariel, "cha"));
check("zariel: +1 FOR", calc.abilityScore(zariel, "str") === 11, calc.abilityScore(zariel, "str"));
check("zariel substitui INT do tiefling base", calc.abilityScore(zariel, "int") === 10, calc.abilityScore(zariel, "int"));
check("zariel: replacesAbilityBonus e mantém traits da raça", getSubrace("tiefling_zariel")?.replacesAbilityBonus === true && !getSubrace("tiefling_zariel")?.replacesTraits, { ab: getSubrace("tiefling_zariel")?.replacesAbilityBonus, tr: getSubrace("tiefling_zariel")?.replacesTraits });
check("draconato de gema: replacesTraits", getSubrace("draconato_gema")?.replacesTraits === true, getSubrace("draconato_gema")?.replacesTraits);

const eladrin = newCharacterDoc();
eladrin.identity.raceId = "elfo";
eladrin.identity.subraceId = "elfo_eladrin";
check("eladrin substitui o +2 DES fixo do elfo por ASI flexível", calc.racialBonus(eladrin, "dex") === 0, calc.racialBonus(eladrin, "dex"));
check("eladrin: 3 escolhas flexíveis", suggestAbilities(eladrin).raceChoices.length === 3, suggestAbilities(eladrin).raceChoices);
eladrin.identity.raceBonusChoices = ["dex", "con", "cha"];
check("eladrin: +1 em cada escolha flexível", calc.racialBonus(eladrin, "dex") === 1 && calc.racialBonus(eladrin, "con") === 1, { dex: calc.racialBonus(eladrin, "dex"), con: calc.racialBonus(eladrin, "con") });

const duergar = newCharacterDoc();
duergar.identity.raceId = "anao";
duergar.identity.subraceId = "anao_duergar";
check("duergar: deslocamento 30", calc.speed(duergar) === 30, calc.speed(duergar));
check("duergar: darkvision 120", calc.darkvision(duergar) === 120, calc.darkvision(duergar));
const duergarProfs = calc.resolveProficiencies(duergar);
check("duergar: idiomas da sub-raça entram (Comum + Anão + escolha)", duergarProfs.languages.includes("Comum") && duergarProfs.languages.includes("Anão"), duergarProfs.languages);

const dragonborn = newCharacterDoc();
dragonborn.identity.raceId = "draconato";
dragonborn.identity.subraceId = "draconato_gema";
check("draconato de gema: ASI flexível (sem FOR fixo do base)", calc.racialBonus(dragonborn, "str") === 0 && suggestAbilities(dragonborn).raceChoices.length === 3, { str: calc.racialBonus(dragonborn, "str"), flex: suggestAbilities(dragonborn).raceChoices });

// --- cobertura das fontes ---
const { RACES, SUBRACES, sourcesWithRaces, racesForSource } = require(path + "/data/index.js");
check("62 raças", RACES.length === 62, RACES.length);
check("49 sub-raças", SUBRACES.length === 49, SUBRACES.length);
check("toda raça tem source", RACES.every((r) => typeof r.source === "string" && r.source.length > 0));
check("toda sub-raça tem source", SUBRACES.every((s) => typeof s.source === "string" && s.source.length > 0));
check("ids únicos de raça e sub-raça", new Set([...RACES.map((r) => r.id), ...SUBRACES.map((s) => s.id)]).size === RACES.length + SUBRACES.length);
check("sub-raças apontam para raças existentes", SUBRACES.every((s) => RACES.some((r) => r.id === s.raceId)));
check("fontes com raças ≥ 10", sourcesWithRaces().length >= 10, sourcesWithRaces().length);
check("filtro phb retorna só raças PHB ou sub-raças PHB", racesForSource("phb").every((r) => r.source === "phb" || SUBRACES.some((s) => s.raceId === r.id && s.source === "phb")), racesForSource("phb").map((r) => r.id));

// --- migração humano_variante ---
const legacyHuman = migrateDoc({
  identity: { raceId: "humano_variante", classes: [], subraceId: "", raceBonusChoices: [] },
  abilities: { str: 8, dex: 15, con: 12, int: 13, wis: 10, cha: 14 },
  saves: {}, skills: {}, proficiencies: { armors: [], weapons: [], tools: [], languages: [] },
  inventory: [], attacks: [], spellcasting: { known: [], prepared: [], slotsUsed: {} },
});
check("migração humano_variante → humano + sub-raça", legacyHuman.identity.raceId === "humano" && legacyHuman.identity.subraceId === "humano_variante", legacyHuman.identity);

const ref = parseFeatRef(buildFeatRef("atleta", "dex"));
check("parse/build de ref", ref.featId === "atleta" && ref.ability === "dex", ref);
const atleta = getFeat("atleta");
check("featAbilityBonus de escolha", atleta ? JSON.stringify(featAbilityBonus(atleta, ref)) === JSON.stringify({ dex: 1 }) : false, atleta && featAbilityBonus(atleta, ref));

const ctx = {
  abilities: { str: 12, dex: 12, con: 12, int: 12, wis: 12, cha: 12 },
  armorProficiencies: [],
  canCastSpells: false,
};
const duel = getFeat("duelista_defensivo");
check("pré-requisito DES 13 não cumprido", duel ? featUnmetRequirements(duel, ctx).length === 1 : false, duel && featUnmetRequirements(duel, ctx));
check("pré-requisito DES 13 cumprido", duel ? featUnmetRequirements(duel, { ...ctx, abilities: { ...ctx.abilities, dex: 13 } }).length === 0 : false, duel && featUnmetRequirements(duel, { ...ctx, abilities: { ...ctx.abilities, dex: 13 } }));
const castFeat = getFeat("adepto_elemental");
check("pré-requisito de conjuração", castFeat ? featUnmetRequirements(castFeat, ctx).length === 1 && featUnmetRequirements(castFeat, { ...ctx, canCastSpells: true }).length === 0 : false, castFeat && featUnmetRequirements(castFeat, ctx));

// --- v3: subclasse ---
check("subclasse mestre_de_armas no nível 3", getSubclass("mestre_de_armas")?.level === 3, getSubclass("mestre_de_armas")?.level);
check("13 escolas do mago", subclassesForClass("mago").length === 13, subclassesForClass("mago").length);
check("guerreiro tem 10 subclasses", subclassesForClass("guerreiro").length === 10, subclassesForClass("guerreiro").length);
check("artifice tem 4 subclasses", subclassesForClass("artifice").length === 4, subclassesForClass("artifice").length);
check("cacador_de_sangue tem 4 subclasses", subclassesForClass("cacador_de_sangue").length === 4, subclassesForClass("cacador_de_sangue").length);

// --- hasSpellcasting ---
const plain = newCharacterDoc();
plain.identity.classes = [{ classId: "guerreiro", level: 5 }];
check("guerreiro sem subclasse: sem conjuração", calc.hasSpellcasting(plain) === false, calc.hasSpellcasting(plain));
plain.identity.classes = [{ classId: "guerreiro", level: 5, subclassId: "cavaleiro_arcano" }];
check("cavaleiro arcano: conjuração", calc.hasSpellcasting(plain) === true, calc.hasSpellcasting(plain));
plain.identity.classes = [{ classId: "patrulheiro", level: 2 }];
check("patrulheiro 2: conjuração", calc.hasSpellcasting(plain) === true, calc.hasSpellcasting(plain));
plain.identity.classes = [{ classId: "mago", level: 1 }];
check("mago: conjuração", calc.hasSpellcasting(plain) === true, calc.hasSpellcasting(plain));

// --- spells níveis 4-9 ---
const { SPELLS, CLASSES, SUBCLASSES, BACKGROUNDS, FEATS, SOURCES, getClass, classPrerequisite } = require(path + "/data/index.js");
const high = SPELLS.filter((s) => s.level >= 4);
check("237 magias de nível 4-9", high.length === 237, high.length);
check("magias de nível 9 = 22", SPELLS.filter((s) => s.level === 9).length === 22, SPELLS.filter((s) => s.level === 9).length);

// --- cobertura do pacote de conteúdo ---
check("14 classes", CLASSES.length === 14, CLASSES.length);
check("127 subclasses", SUBCLASSES.length === 127, SUBCLASSES.length);
check("524 magias", SPELLS.length === 524, SPELLS.length);
check("93 backgrounds", BACKGROUNDS.length === 93, BACKGROUNDS.length);
check("116 feats", FEATS.length === 116, FEATS.length);
check("artifice e cacador_de_sangue existem", !!getClass("artifice") && !!getClass("cacador_de_sangue"));
check("toda classe tem source", CLASSES.every((c) => typeof c.source === "string" && c.source.length > 0));
check("toda subclass tem source", SUBCLASSES.every((c) => typeof c.source === "string" && c.source.length > 0));
check("toda magia tem source", SPELLS.every((c) => typeof c.source === "string" && c.source.length > 0));
check("todo background tem source", BACKGROUNDS.every((c) => typeof c.source === "string" && c.source.length > 0));
check("todo feat tem source", FEATS.every((c) => typeof c.source === "string" && c.source.length > 0));
const srcIds = new Set(SOURCES.map((s) => s.id));
check("sources conhecidas (classes/subs/magias/bg/feats)",
  [...CLASSES, ...SUBCLASSES, ...SPELLS, ...BACKGROUNDS, ...FEATS].every((e) => srcIds.has(e.source)),
  [...CLASSES, ...SUBCLASSES, ...SPELLS, ...BACKGROUNDS, ...FEATS].filter((e) => !srcIds.has(e.source)).map((e) => e.source));
check("ids únicos por coleção",
  [CLASSES, SUBCLASSES, SPELLS, BACKGROUNDS, FEATS].every((arr) => new Set(arr.map((x) => x.id)).size === arr.length));
check("features de classe com nível 1-20",
  CLASSES.every((c) => c.features.length > 0 && c.features.every((f) => f.level >= 1 && f.level <= 20)));
check("todas as classes têm feature de nível 1", CLASSES.every((c) => c.features.some((f) => f.level === 1)),
  CLASSES.filter((c) => !c.features.some((f) => f.level === 1)).map((c) => c.id));
check("subclasses apontam para classes existentes",
  SUBCLASSES.every((s) => CLASSES.some((c) => c.id === s.classId)));
check("magias apontam para classes existentes",
  SPELLS.every((s) => s.classes.every((id) => CLASSES.some((c) => c.id === id))),
  SPELLS.filter((s) => !s.classes.every((id) => CLASSES.some((c) => c.id === id))).map((s) => s.id));
// --- paridade de ids entre locales ---
const { BUNDLES } = require(path + "/data/index.js");
for (const loc of ["en", "es"]) {
  const b = BUNDLES[loc];
  for (const key of ["CLASSES", "SUBCLASSES", "SPELLS", "BACKGROUNDS", "FEATS"]) {
    check(loc + ": " + key + " ids batem com pt",
      JSON.stringify(b[key].map((x) => x.id).sort()) === JSON.stringify(eval(key).map((x) => x.id).sort()),
      b[key].length + " vs " + eval(key).length);
  }
}

// --- catálogo de armas e recursos especiais ---
const { WEAPONS, ARMORS, getWeapon, getArmor, GEAR, getGear, specialFeaturesFor, specialPicksLimit, spellsForSubclass, SUBCLASS_SPELLS } = require(path + "/data/index.js");
check("armas SRD completas (36)", WEAPONS.length === 36, WEAPONS.length);
check("armas novas presentes", ["macea", "alabarda", "marreta", "estrela_do_alvorecer", "gravina", "rede"].every((id) => getWeapon(id)));
check("armaduras SRD completas (13 + escudo)", ARMORS.length === 13, ARMORS.map((a) => a.id));
const GEAR_CATEGORIES = new Set(["foco", "mochila", "ferramenta", "instrumento", "municao", "geral"]);
check("gear: ids únicos", new Set(GEAR.map((g) => g.id)).size === GEAR.length);
check("gear: categorias válidas e peso não negativo",
  GEAR.every((g) => GEAR_CATEGORIES.has(g.category) && g.weight >= 0 && typeof g.name === "string" && g.name.length > 0));
check("gear: focos marcam o tipo de conjurador",
  getGear("component_pouch").spellcaster === "universal" &&
  getGear("arcane_focus").spellcaster === "arcano" &&
  getGear("holy_symbol").spellcaster === "divino" &&
  getGear("druidic_focus").spellcaster === "druidico");
const classGearIds = CLASSES.flatMap((c) => c.startingEquipment.map((it) => it.catalogId));
const bgGearIds = BACKGROUNDS.flatMap((b) => b.equipment.map((it) => it.catalogId));
const unresolved = [...classGearIds, ...bgGearIds]
  .filter((id) => id && !getWeapon(id) && !getArmor(id) && !getGear(id));
check("catalogIds de equipamento inicial (classes + antecedentes) resolvem", unresolved.length === 0, unresolved);
const meta = specialFeaturesFor("feiticeiro", 3);
check("metamagia só para feiticeiro 3+", meta.length === 1 && meta[0].id === "metamagia", meta.map((m) => m.id));
check("limite de metamagia por nível", specialPicksLimit(meta[0], 3) === 2 && specialPicksLimit(meta[0], 12) === 4);
check("manobras só com mestre_de_armas",
  specialFeaturesFor("guerreiro", 5, "mestre_de_armas").length === 1 &&
  specialFeaturesFor("guerreiro", 5).length === 0);
check("magias de subclasse (vida do clérigo)",
  Object.keys(SUBCLASS_SPELLS).length === 49 &&
  spellsForSubclass("subclasse_da_vida").length > 0 || spellsForSubclass(Object.keys(SUBCLASS_SPELLS).find((k) => k.includes("vida") || k.includes("vid")) ?? "").length > 0,
  Object.keys(SUBCLASS_SPELLS).filter((k) => k.includes("vid")));

const preA = classPrerequisite("artifice");
const preB = classPrerequisite("cacador_de_sangue");
check("pré-requisito multiclasse artifice (INT 13)", !!preA && JSON.stringify(preA.anyOf) === JSON.stringify(["int"]), preA);
check("pré-requisito multiclasse cacador (INT 13 + FOR/DES 13)",
  !!preB && JSON.stringify(preB.allOf) === JSON.stringify(["int"]) &&
  JSON.stringify(preB.anyOf) === JSON.stringify(["str", "dex"]), preB);

// --- importação de JSON ---
const { parseImportedDoc } = require(path + "/domain/import.js");

check("import: rejeita null", parseImportedDoc(null) === null);
check("import: rejeita array", parseImportedDoc([]) === null);
check("import: rejeita string", parseImportedDoc("{}") === null);
check("import: rejeita objeto sem identity", parseImportedDoc({ schemaVersion: 3, abilities: {} }) === null);
check("import: rejeita identity não-objeto", parseImportedDoc({ identity: "x" }) === null);
check("import: rejeita objeto vazio", parseImportedDoc({}) === null);

const exportedDoc = newCharacterDoc();
exportedDoc.identity.name = "Herói Importado";
exportedDoc.identity.raceId = "elfo";
exportedDoc.identity.classes = [{ classId: "mago", level: 7, subclassId: "evocador" }];
exportedDoc.abilities.int = 16;
exportedDoc.skills.arcana = true;
exportedDoc.combat.hpCurrent = 31;
exportedDoc.inventory.push({
  id: "i1", name: "Grimório", qty: 1, weight: 3,
  category: "outro", catalogId: null, equipped: false, description: "",
});
const imported = parseImportedDoc(JSON.parse(JSON.stringify(exportedDoc)));
check("import: roundtrip de um export válido",
  imported !== null &&
    imported.identity.name === "Herói Importado" &&
    imported.identity.classes.length === 1 &&
    imported.identity.classes[0].classId === "mago" &&
    imported.identity.classes[0].subclassId === "evocador" &&
    imported.abilities.int === 16 &&
    imported.skills.arcana === true &&
    imported.combat.hpCurrent === 31 &&
    imported.inventory.length === 1,
  imported && imported.identity);

const legacyV1 = parseImportedDoc({
  schemaVersion: 1,
  identity: { name: "Velho", classId: "guerreiro", level: 4, raceId: "humano_variante" },
  abilities: { str: 17 },
  combat: { hpCurrent: 30 },
});
check("import: migra v1 (classId/level → classes[])",
  legacyV1 !== null &&
    legacyV1.schemaVersion === 3 &&
    legacyV1.identity.classes[0].classId === "guerreiro" &&
    legacyV1.identity.classes[0].level === 4,
  legacyV1 && legacyV1.identity.classes);
check("import: humano_variante vira raça humana",
  legacyV1.identity.raceId === "humano" &&
    legacyV1.identity.subraceId === "humano_variante",
  { raceId: legacyV1.identity.raceId, subraceId: legacyV1.identity.subraceId });
check("import: atributos ausentes viram 10",
  legacyV1.abilities.dex === 10 && legacyV1.abilities.cha === 10,
  legacyV1.abilities);
check("import: atributo inválido não quebra", (() => {
  const bad = parseImportedDoc({ identity: {}, abilities: { str: "x", dex: NaN } });
  return bad !== null && bad.abilities.str === 10 && bad.abilities.dex === 10;
})());
check("import: defaults coerentes",
  legacyV1.identity.abilityMode === "pontos" &&
    legacyV1.feats.length === 0 &&
    legacyV1.skills.perception === false &&
    legacyV1.saves.str === false,
  { mode: legacyV1.identity.abilityMode, feats: legacyV1.feats });

const capped = parseImportedDoc({
  identity: { name: "X", classes: [{ classId: "mago", level: 99 }] },
  combat: { hpCurrent: -5, hpTemp: 999999 },
  notes: "n".repeat(20000),
  lore: "l".repeat(40000),
  photo: "javascript:alert(1)",
});
check("import: níveis e PV limitados",
  capped.identity.classes[0].level === 20 &&
    capped.combat.hpCurrent === 0 &&
    capped.combat.hpTemp === 9999,
  { level: capped.identity.classes[0].level, hp: capped.combat });
check("import: notes/lore limitados e photo inválida descartada",
  capped.notes.length === 10000 &&
    capped.lore.length === 30000 &&
    capped.photo === "",
  { notes: capped.notes.length, lore: capped.lore.length, photo: capped.photo });

// --- condições de combate e tracker ---
const { CONDITION_KEYS, isConditionKey } = require(path + "/domain/conditions.js");
check("conditions: 16 condições SRD e validação", CONDITION_KEYS.length === 16 && isConditionKey("envenenado") && !isConditionKey("voadora"));
check("migrate: docs antigos ganham round e conditions",
  (() => {
    const m = migrateDoc({ schemaVersion: 3, identity: { name: "Old", classes: [] } });
    return m.combat.round === 0 && Array.isArray(m.combat.conditions) && m.combat.conditions.length === 0;
  })());
check("import: condições preservadas e inválidas descartadas",
  (() => {
    const doc = parseImportedDoc({
      identity: { name: "Cond" },
      combat: {
        round: 3,
        conditions: [
          { id: "a", key: "envenenado", rounds: 2 },
          { id: "b", key: "voadora", rounds: 1 },
          { id: "c", key: "concentracao", rounds: 0 },
          { id: "d", key: "cego", rounds: -3 },
        ],
      },
    });
    if (!doc) return false;
    const keys = doc.combat.conditions.map((c) => c.key);
    return doc.combat.round === 3 &&
      keys.length === 3 &&
      keys.includes("envenenado") &&
      !keys.includes("voadora") &&
      doc.combat.conditions.find((c) => c.key === "concentracao").rounds === null &&
      doc.combat.conditions.find((c) => c.key === "cego").rounds === null;
  })());
check("import: round limitado e id gerado quando ausente",
  (() => {
    const doc = parseImportedDoc({
      identity: { name: "Cond2" },
      combat: { round: 99999, conditions: [{ key: "caido" }] },
    });
    return doc.combat.round === 999 &&
      doc.combat.conditions[0].id.length > 0 &&
      doc.combat.conditions[0].rounds === null;
  })());

// --- rolagem de dados ---
const { parseDamageExpression, rollAttack, rollDice, rollParsedDamage } = require(path + "/domain/dice.js");
check("dice: parse 1d8+4", (() => {
  const p = parseDamageExpression("1d8+4");
  return p && p.mod === 4 && p.dice.length === 1 && p.dice[0].count === 1 && p.dice[0].sides === 8;
})());
check("dice: parse 2d6-1 com texto", (() => {
  const p = parseDamageExpression("2d6-1 cortante");
  return p && p.mod === -1 && p.dice[0].count === 2 && p.dice[0].sides === 6;
})());
check("dice: parse 1d6 + 1d4+2 (múltiplos dados)", (() => {
  const p = parseDamageExpression("1d6 + 1d4+2");
  return p && p.dice.length === 2 && p.mod === 2 &&
    p.dice[0].count === 1 && p.dice[1].sides === 4;
})());
check("dice: contador de dado não vira modificador (1d8+2d6)", (() => {
  const p = parseDamageExpression("1d8+2d6");
  return p && p.mod === 0 && p.dice.length === 2 &&
    p.dice[0].sides === 8 && p.dice[1].count === 2 && p.dice[1].sides === 6;
})());
check("dice: sem dados retorna null", parseDamageExpression("") === null && parseDamageExpression("—") === null);
check("dice: rolagens dentro dos limites", (() => {
  const r = rollDice(3, 6);
  return r.rolls.length === 3 && r.total === r.rolls[0] + r.rolls[1] + r.rolls[2] &&
    r.rolls.every((v) => v >= 1 && v <= 6);
})());
check("dice: ataque soma d20 + bônus e marca nat", (() => {
  for (let i = 0; i < 50; i++) {
    const r = rollAttack(5);
    if (r.total !== r.d20 + 5) return false;
    if (r.d20 < 1 || r.d20 > 20) return false;
    if (r.d20 === 20 && r.nat !== "crit") return false;
    if (r.d20 === 1 && r.nat !== "fumble") return false;
    if (r.d20 !== 20 && r.d20 !== 1 && r.nat !== null) return false;
  }
  return true;
})());
check("dice: dano parsed soma os dados + modificador", (() => {
  const p = parseDamageExpression("1d8+4");
  const r = rollParsedDamage(p);
  return r.total === r.rolls.reduce((a, b) => a + b, 0) + 4;
})());

// --- nomes de proficiências ---
check("proficiencyLabel: resolve categoria, item individual e id desconhecido",
  calc.proficiencyLabel("weapon", "armas_simples") === "Armas simples" &&
    calc.proficiencyLabel("weapon", "espada_curta") === "Espada Curta" &&
    calc.proficiencyLabel("weapon", "rapier") === "Rapié" &&
    calc.proficiencyLabel("weapon", "besta_leve") === "Besta Leve" &&
    calc.proficiencyLabel("weapon", "cajado") === "Cajado" &&
    calc.proficiencyLabel("armor", "leve") === "Armaduras leves" &&
    calc.proficiencyLabel("armor", "escudo") === "Escudos" &&
    calc.proficiencyLabel("weapon", "arma_inventada") === "Arma Inventada",
  {
    simples: calc.proficiencyLabel("weapon", "armas_simples"),
    espada: calc.proficiencyLabel("weapon", "espada_curta"),
    desconhecida: calc.proficiencyLabel("weapon", "arma_inventada"),
  });

// --- efeitos de condição ---
const { conditionEffects } = require(path + "/domain/conditions.js");
const cond = (...keys) => keys.map((key, i) => ({ id: String(i), key, rounds: null }));
check("conditionEffects: sem condições não altera nada",
  (() => {
    const e = conditionEffects([]);
    return e.attackRoll === "normal" && !e.checksDisadvantage &&
      !e.attacksAgainstAdvantage && !e.speedZero && !e.autoCritMelee &&
      !e.cannotAct && !e.concentration;
  })());
check("conditionEffects: envenenado dá desvantagem em ataques e testes",
  (() => {
    const e = conditionEffects(cond("envenenado"));
    return e.attackRoll === "disadvantage" && e.checksDisadvantage;
  })());
check("conditionEffects: invisível dá vantagem em ataques",
  conditionEffects(cond("invisivel")).attackRoll === "advantage");
check("conditionEffects: vantagem e desvantagem se cancelam",
  conditionEffects(cond("invisivel", "caido")).attackRoll === "normal");
check("conditionEffects: paralisado combina deslocamento 0, crítico e incapacidade",
  (() => {
    const e = conditionEffects(cond("paralisado"));
    return e.speedZero && e.autoCritMelee && e.cannotAct && e.attacksAgainstAdvantage;
  })());
check("conditionEffects: caído não zera deslocamento nem incapacita",
  (() => {
    const e = conditionEffects(cond("caido"));
    return e.attackRoll === "disadvantage" && !e.speedZero && !e.cannotAct;
  })());
check("conditionEffects: concentração detectada",
  conditionEffects(cond("concentracao")).concentration === true &&
    !conditionEffects(cond("cego")).concentration);

// --- rolagem com vantagem/desvantagem ---
check("dice: vantagem/desvantagem rolam 2d20 e escolhem o dado", (() => {
  for (let i = 0; i < 30; i++) {
    const adv = rollAttack(5, "advantage");
    if (adv.rolls.length !== 2 || adv.d20 !== Math.max(...adv.rolls)) return false;
    if (adv.total !== adv.d20 + 5) return false;
    const dis = rollAttack(5, "disadvantage");
    if (dis.rolls.length !== 2 || dis.d20 !== Math.min(...dis.rolls)) return false;
    const normal = rollAttack(5);
    if (normal.rolls.length !== 1 || normal.d20 !== normal.rolls[0]) return false;
    if (normal.mode !== "normal" || adv.mode !== "advantage") return false;
  }
  return true;
})());

// --- recursos de classe ---
const { classResources, normalizeResources, resourceStates } = require(path + "/domain/resources.js");
const mkResDoc = (classes, abilities = {}) => ({
  identity: { name: "T", classes, abilityMode: "pontos" },
  abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, ...abilities },
  feats: [],
  skills: {},
  saves: {},
  proficiencies: { weapons: [], armors: [], tools: [], languages: [] },
  resources: {},
});
const resKeys = (doc) => classResources(doc).map((r) => r.key);
const resMax = (doc, key) => classResources(doc).find((r) => r.key === key)?.max;
check("resources: bardo tem inspiração igual ao mod de CAR (mín. 1)",
  resMax(mkResDoc([{ classId: "bardo", level: 1 }]), "inspiracao_bardica") === 1 &&
    resMax(mkResDoc([{ classId: "bardo", level: 3 }], { cha: 16 }), "inspiracao_bardica") === 3);
check("resources: monge só ganha ki a partir do 2º nível",
  !resKeys(mkResDoc([{ classId: "monge", level: 1 }])).includes("pontos_de_ki") &&
    resMax(mkResDoc([{ classId: "monge", level: 5 }]), "pontos_de_ki") === 5);
check("resources: fúria segue a tabela e é ilimitada no 20",
  resMax(mkResDoc([{ classId: "barbaro", level: 1 }]), "furia") === 2 &&
    resMax(mkResDoc([{ classId: "barbaro", level: 6 }]), "furia") === 4 &&
    resMax(mkResDoc([{ classId: "barbaro", level: 17 }]), "furia") === 6 &&
    resMax(mkResDoc([{ classId: "barbaro", level: 20 }]), "furia") === null);
check("resources: feiticeiro ganha pontos de metamagia do 2º nível",
  !resKeys(mkResDoc([{ classId: "feiticeiro", level: 1 }])).includes("pontos_metamagia") &&
    resMax(mkResDoc([{ classId: "feiticeiro", level: 4 }]), "pontos_metamagia") === 4);
check("resources: multiclasse lista os dois recursos",
  JSON.stringify(resKeys(mkResDoc([{ classId: "bardo", level: 3 }, { classId: "monge", level: 2 }]))) ===
    JSON.stringify(["inspiracao_bardica", "pontos_de_ki"]));
check("resources: usado vem do doc; normalização filtra chaves desconhecidas",
  (() => {
    const doc = mkResDoc([{ classId: "bardo", level: 1 }]);
    doc.resources = { inspiracao_bardica: 1, hackeado: 5 };
    const states = resourceStates(doc);
    const norm = normalizeResources({ furia: 2, inventada: 9, pontos_de_ki: "x" });
    return states[0].used === 1 &&
      states[0].max === 1 &&
      norm.furia === 2 &&
      !("inventada" in norm) &&
      norm.pontos_de_ki === undefined &&
      normalizeResources(null).furia === undefined &&
      resourceStates({ ...doc, resources: undefined }).some((s) => s.used === 0);
  })());
check("migrate: docs antigos ganham resources vazio",
  (() => {
    const m = migrateDoc({ schemaVersion: 3, identity: { name: "Old", classes: [] } });
    return m.resources != null && typeof m.resources === "object" && Object.keys(m.resources).length === 0;
  })());
check("import: resources normalizadas no roundtrip",
  (() => {
    const doc = parseImportedDoc({ identity: { name: "Res" }, resources: { furia: 3, inventada: 9 } });
    return doc.resources.furia === 3 && !("inventada" in doc.resources);
  })());

console.log(failures === 0 ? "\nTODOS OS TESTES PASSARAM" : `\n${failures} FALHAS`);
process.exit(failures === 0 ? 0 : 1);
