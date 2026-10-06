export type WeaponDef = {
  id: string;
  name: string;
  category: "simples" | "marcial";
  kind: "corpo" | "distancia";
  damage: string;
  damageType: string;
  weight: number;
  properties: string[];
  finesse: boolean;
  range?: string;
  twoHanded?: boolean;
};

export const WEAPONS: WeaponDef[] = [
  { id: "adaga", name: "Dagger", category: "simples", kind: "corpo", damage: "1d4", damageType: "piercing", weight: 1, properties: ["Light", "Thrown (20/60)"], finesse: true, range: "20/60" },
  { id: "clava", name: "Club", category: "simples", kind: "corpo", damage: "1d4", damageType: "bludgeoning", weight: 2, properties: ["Light"], finesse: false },
  { id: "grande_clava", name: "Great Club", category: "simples", kind: "corpo", damage: "1d8", damageType: "bludgeoning", weight: 10, properties: ["Two-handed"], finesse: false, twoHanded: true },
  { id: "machado_de_mao", name: "Handaxe", category: "simples", kind: "corpo", damage: "1d6", damageType: "slashing", weight: 2, properties: ["Light", "Thrown (20/60)"], finesse: false, range: "20/60" },
  { id: "machado_de_batalha", name: "Battleaxe", category: "marcial", kind: "corpo", damage: "1d8", damageType: "slashing", weight: 4, properties: ["Versatile (1d10)"], finesse: false },
  { id: "machado_guerra", name: "Warhammer", category: "marcial", kind: "corpo", damage: "1d8", damageType: "bludgeoning", weight: 3, properties: ["Versatile (1d10)"], finesse: false },
  { id: "machado_grande", name: "Greataxe", category: "marcial", kind: "corpo", damage: "1d12", damageType: "slashing", weight: 7, properties: ["Two-handed"], finesse: false, twoHanded: true },
  { id: "espada_curta", name: "Shortsword", category: "simples", kind: "corpo", damage: "1d6", damageType: "piercing", weight: 2, properties: ["Light"], finesse: true },
  { id: "espada_longa", name: "Longsword", category: "marcial", kind: "corpo", damage: "1d8", damageType: "slashing", weight: 3, properties: ["Versatile (1d10)"], finesse: false },
  { id: "espada_grande", name: "Greatsword", category: "marcial", kind: "corpo", damage: "2d6", damageType: "slashing", weight: 6, properties: ["Two-handed"], finesse: false, twoHanded: true },
  { id: "rapier", name: "Rapier", category: "marcial", kind: "corpo", damage: "1d8", damageType: "piercing", weight: 2, properties: ["Finesse"], finesse: true },
  { id: "sabre", name: "Scimitar", category: "marcial", kind: "corpo", damage: "1d6", damageType: "slashing", weight: 3, properties: ["Finesse", "Light"], finesse: true },
  { id: "martelo_leve", name: "Light Hammer", category: "simples", kind: "corpo", damage: "1d4", damageType: "bludgeoning", weight: 2, properties: ["Light", "Thrown (20/60)"], finesse: false, range: "20/60" },
  { id: "martelo_de_batalha", name: "Battle Hammer", category: "marcial", kind: "corpo", damage: "1d8", damageType: "bludgeoning", weight: 3, properties: ["Versatile (1d10)"], finesse: false },
  { id: "picareta_de_guerra", name: "War Pick", category: "marcial", kind: "corpo", damage: "1d8", damageType: "piercing", weight: 2, properties: ["Versatile (1d10)"], finesse: false },
  { id: "lanca", name: "Spear", category: "simples", kind: "corpo", damage: "1d6", damageType: "piercing", weight: 3, properties: ["Thrown (20/60)", "Versatile (1d8)"], finesse: false, range: "20/60" },
  { id: "javelin", name: "Javelin", category: "simples", kind: "corpo", damage: "1d6", damageType: "piercing", weight: 1, properties: ["Thrown (30/120)"], finesse: false, range: "30/120" },
  { id: "tridente", name: "Trident", category: "marcial", kind: "corpo", damage: "1d6", damageType: "piercing", weight: 4, properties: ["Thrown (20/60)", "Versatile (1d8)"], finesse: false, range: "20/60" },
  { id: "chicote", name: "Whip", category: "marcial", kind: "corpo", damage: "1d4", damageType: "slashing", weight: 2, properties: ["Reach (10 feet)"], finesse: true, range: "10" },
  { id: "besta_leve", name: "Light Crossbow", category: "simples", kind: "distancia", damage: "1d8", damageType: "piercing", weight: 5, properties: ["Ammunition", "Two-handed"], finesse: false, range: "80/320", twoHanded: true },
  { id: "besta_pesada", name: "Heavy Crossbow", category: "marcial", kind: "distancia", damage: "1d10", damageType: "piercing", weight: 18, properties: ["Ammunition", "Two-handed", "Loading"], finesse: false, range: "100/400", twoHanded: true },
  { id: "besta_mao", name: "Hand Crossbow", category: "simples", kind: "distancia", damage: "1d6", damageType: "piercing", weight: 3, properties: ["Ammunition", "Light"], finesse: false, range: "30/120" },
  { id: "arco_curto", name: "Shortbow", category: "simples", kind: "distancia", damage: "1d6", damageType: "piercing", weight: 2, properties: ["Ammunition", "Two-handed"], finesse: false, range: "80/320", twoHanded: true },
  { id: "arco_longo", name: "Longbow", category: "marcial", kind: "distancia", damage: "1d8", damageType: "piercing", weight: 2, properties: ["Ammunition", "Two-handed"], finesse: false, range: "150/600", twoHanded: true },
  { id: "funda", name: "Sling", category: "simples", kind: "distancia", damage: "1d4", damageType: "bludgeoning", weight: 0.5, properties: ["Ammunition", "Light"], finesse: false, range: "30/120" },
  { id: "dardo", name: "Dart", category: "simples", kind: "distancia", damage: "1d4", damageType: "piercing", weight: 0.25, properties: ["Light", "Thrown (20/60)"], finesse: false, range: "20/60" },
  { id: "baculo", name: "Quarterstaff", category: "simples", kind: "corpo", damage: "1d6", damageType: "bludgeoning", weight: 4, properties: ["Two-handed"], finesse: false, twoHanded: true },
  { id: "cajado", name: "Staff", category: "simples", kind: "corpo", damage: "1d6", damageType: "bludgeoning", weight: 4, properties: ["Versatile (1d8)"], finesse: false },
  { id: "foiche", name: "Sickle", category: "simples", kind: "corpo", damage: "1d4", damageType: "slashing", weight: 2, properties: ["Light"], finesse: false },
  { id: "foice_longa", name: "Glaive", category: "marcial", kind: "corpo", damage: "1d10", damageType: "slashing", weight: 18, properties: ["Two-handed"], finesse: false, twoHanded: true },
];

export function getWeapon(id: string): WeaponDef | undefined {
  return WEAPONS.find((w) => w.id === id);
}
