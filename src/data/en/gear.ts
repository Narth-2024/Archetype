export type GearCategory =
  | "foco"
  | "mochila"
  | "ferramenta"
  | "instrumento"
  | "municao"
  | "geral";

export type GearCaster = "arcano" | "divino" | "druidico" | "universal";

export type GearDef = {
  id: string;
  name: string;
  category: GearCategory;
  weight: number;
  cost: number | null;
  description: string;
  spellcaster?: GearCaster;
};

export const GEAR: GearDef[] = [
  // --- foci and spellbooks ---
  { id: "component_pouch", name: "Component Pouch", category: "foco", weight: 2, cost: 25, description: "A leather pouch of chalk, dust, and sticks holding the spellcasting components that have no cost.", spellcaster: "universal" },
  { id: "arcane_focus", name: "Arcane Focus", category: "foco", weight: 1, cost: 20, description: "A crystal, orb, staff, or wand that substitutes for the no-cost components of arcane spells.", spellcaster: "arcano" },
  { id: "holy_symbol", name: "Holy Symbol", category: "foco", weight: 1, cost: 5, description: "An amulet, medal, or emblem worn on display; substitutes for the no-cost components of divine spells.", spellcaster: "divino" },
  { id: "druidic_focus", name: "Druidic Focus", category: "foco", weight: 2, cost: 10, description: "A berry, sprig of mistletoe, feathers, hollow staff, or oak branch; substitutes for the no-cost druidic components.", spellcaster: "druidico" },
  { id: "spellbook", name: "Spellbook", category: "foco", weight: 3, cost: 50, description: "A 100-page book where a wizard copies and prepares their spells.", spellcaster: "arcano" },
  // --- packs ---
  { id: "backpack", name: "Backpack", category: "mochila", weight: 5, cost: 12, description: "A strapped pack; carries up to 40 pounds in four compartments." },
  { id: "explorers_pack", name: "Explorer's Pack", category: "mochila", weight: 59, cost: 10, description: "Backpack, bedroll, mess kit, tinderbox, 10 days of rations, waterskin, and 50 feet of rope." },
  { id: "scholars_pack", name: "Scholar's Pack", category: "mochila", weight: 25, cost: 40, description: "Backpack, ink, ink pen, parchment, sand, a knife, and books of learning." },
  { id: "entertainers_pack", name: "Entertainer's Pack", category: "mochila", weight: 38, cost: 40, description: "Backpack, bedroll, costume, 5 candles, a pillow, 2 days of rations, and makeup." },
  { id: "thieves_pack", name: "Thief's Pack", category: "mochila", weight: 25, cost: 40, description: "Backpack, crowbar, 10 candles, a sack, 5 days of rations, waterskin, and 50 feet of rope." },
  { id: "travelers_pack", name: "Traveler's Pack", category: "mochila", weight: 24, cost: 16, description: "Backpack, bedroll, mess kit, tinderbox, 10 days of rations, waterskin, and a cloak." },
  { id: "sailors_kit", name: "Sailor's Kit", category: "mochila", weight: 40, cost: 12, description: "Backpack, bedroll, mess kit, tinderbox, 10 days of rations, waterskin, and 50 feet of rope." },
  { id: "monster_hunters_pack", name: "Monster Hunter's Pack", category: "mochila", weight: 45, cost: 25, description: "Backpack, bedroll, mess kit, tinderbox, 10 days of rations, waterskin, a wooden stake, and a maul." },
  // --- tools ---
  { id: "thieves_tools", name: "Thieves' Tools", category: "ferramenta", weight: 1, cost: 25, description: "Tools for picking locks and disarming traps; requires proficiency." },
  { id: "disguise_kit", name: "Disguise Kit", category: "ferramenta", weight: 3, cost: 25, description: "Grease, makeup, mirror, and costume pieces to change appearance; requires proficiency." },
  { id: "forgery_kit", name: "Forgery Kit", category: "ferramenta", weight: 5, cost: 15, description: "Tools and materials to imitate documents, seals, and handwriting; requires proficiency." },
  { id: "fishing_tackle", name: "Fishing Tackle", category: "ferramenta", weight: 4, cost: 1, description: "Rod, hook and line, artificial lure, and a net." },
  { id: "miners_pick", name: "Miner's Pick", category: "ferramenta", weight: 10, cost: 2, description: "A heavy pick for breaking rock; usable as an improvised weapon." },
  { id: "smiths_tools", name: "Smith's Tools", category: "ferramenta", weight: 20, cost: 20, description: "Anvil, hammer, and tools for forging and repairing metal items; requires proficiency." },
  { id: "herbalism_kit", name: "Herbalism Kit", category: "ferramenta", weight: 3, cost: 25, description: "Pouches, herbs, and tools to identify plants and prepare antidotes and remedies; requires proficiency." },
  { id: "navigators_tools", name: "Navigator's Tools", category: "ferramenta", weight: 6, cost: 25, description: "Nautical chart, compass, and navigation instruments; requires proficiency." },
  { id: "poisoners_kit", name: "Poisoner's Kit", category: "ferramenta", weight: 2, cost: 50, description: "Tools, glassware, and ingredients for preparing poisons; requires proficiency." },
  { id: "dice_set", name: "Dice Set", category: "ferramenta", weight: 0, cost: 1, description: "Dice and pieces for games of chance; requires gaming proficiency." },
  { id: "herbs", name: "Medicinal Herbs", category: "ferramenta", weight: 0.5, cost: 1, description: "Foraged herbs; combined with a herbalism kit, used to prepare remedies." },
  // --- instruments ---
  { id: "lute", name: "Lute", category: "instrumento", weight: 2, cost: 30, description: "A stringed instrument with a wooden body; requires proficiency." },
  { id: "drum", name: "Drum", category: "instrumento", weight: 3, cost: 15, description: "A hide-and-wood percussion instrument; requires proficiency." },
  { id: "flute", name: "Flute", category: "instrumento", weight: 1, cost: 5, description: "A wooden wind instrument; requires proficiency." },
  { id: "bagpipes", name: "Bagpipes", category: "instrumento", weight: 6, cost: 30, description: "A wind instrument with an air bag; requires proficiency." },
  // --- ammunition ---
  { id: "arrows", name: "Arrows (20)", category: "municao", weight: 1, cost: 1, description: "20 arrows; ammunition for bows." },
  { id: "crossbow_bolts", name: "Crossbow Bolts (20)", category: "municao", weight: 1, cost: 1, description: "20 bolts; ammunition for crossbows." },
  // --- general gear ---
  { id: "tent", name: "Tent", category: "geral", weight: 20, cost: 10, description: "A canvas tent for two people." },
  { id: "rope_hempen", name: "Hempen Rope", category: "geral", weight: 10, cost: 1, description: "50 feet of rope; supports up to 600 pounds." },
  { id: "torch", name: "Torch", category: "geral", weight: 1, cost: 1, description: "Burns for 1 hour, lighting a short distance." },
  { id: "lamp", name: "Lamp", category: "geral", weight: 2, cost: 5, description: "An oil lamp; lights a short distance while it has fuel." },
  { id: "waterskin", name: "Waterskin", category: "geral", weight: 5, cost: 2, description: "A leather bag for carrying water (about half a gallon)." },
  { id: "rations", name: "Rations", category: "geral", weight: 2, cost: 5, description: "1 day of dry travel food." },
  { id: "acid", name: "Acid", category: "geral", weight: 1, cost: 25, description: "A vial of acid; thrown, deals 2d6 acid damage." },
  { id: "alchemist_fire", name: "Alchemist's Fire", category: "geral", weight: 1, cost: 50, description: "A sticky flask; deals 2d4 fire damage on impact and ongoing damage until extinguished." },
  { id: "holy_water", name: "Holy Water", category: "geral", weight: 1, cost: 25, description: "A blessed flask; thrown, deals 2d6 radiant damage to undead and fiends." },
  { id: "antitoxin", name: "Antitoxin", category: "geral", weight: 1, cost: 50, description: "A vial; grants advantage on saving throws against poison for 1 hour." },
  { id: "healers_kit", name: "Healer's Kit", category: "geral", weight: 3, cost: 25, description: "Bandages, balm, and salve; 10 uses to stabilize someone without a check." },
  { id: "ball_bearings", name: "Ball Bearings", category: "geral", weight: 2, cost: 1, description: "A bag of bearings scattered across a 10-foot square; difficult terrain until swept." },
  { id: "caltrops", name: "Caltrops", category: "geral", weight: 2, cost: 5, description: "Spikes in a 10-foot square; a creature that steps on them takes 1d4 piercing damage and its speed is halved until healed." },
  { id: "chains", name: "Chains", category: "geral", weight: 10, cost: 15, description: "10 feet of iron chain for binding or securing." },
  { id: "lock", name: "Lock", category: "geral", weight: 1, cost: 20, description: "A good lock; DC 20 to pick without thieves' tools." },
  { id: "mirror", name: "Steel Mirror", category: "geral", weight: 0.5, cost: 5, description: "A 1-foot hand mirror." },
  { id: "crowbar", name: "Crowbar", category: "geral", weight: 5, cost: 2, description: "Grants advantage on STR checks made to force things in tight spaces." },
  { id: "shovel", name: "Shovel", category: "geral", weight: 5, cost: 2, description: "A shovel for digging earth and burying things." },
  { id: "costume", name: "Costume Clothes", category: "geral", weight: 3, cost: 5, description: "Clothes for performances, festivals, or common disguises." },
  { id: "fine_clothes", name: "Fine Clothes", category: "geral", weight: 6, cost: 15, description: "Elegant clothes for important social occasions." },
  { id: "robes", name: "Robes", category: "geral", weight: 3, cost: 1, description: "Simple cloth robes, common among priests and scholars." },
  { id: "incense", name: "Incense", category: "geral", weight: 0.5, cost: 1, description: "A single stick of incense, burned in rituals and ceremonies." },
  { id: "ink", name: "Ink", category: "geral", weight: 0.25, cost: 8, description: "A vial of ink for writing on parchment." },
  { id: "quill", name: "Quill", category: "geral", weight: 0, cost: 2, description: "A writing quill; with ink, used to draft documents." },
  { id: "insignia", name: "Insignia", category: "geral", weight: 0, cost: 5, description: "An insignia identifying an office, faction, or military unit." },
  { id: "letter_of_introduction", name: "Letter of Introduction", category: "geral", weight: 0, cost: 1, description: "A letter introducing the bearer to contacts, institutions, or allies." },
];

export function getGear(id: string): GearDef | undefined {
  return GEAR.find((g) => g.id === id);
}
