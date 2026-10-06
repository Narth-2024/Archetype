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
  { id: "adaga", name: "Daga", category: "simples", kind: "corpo", damage: "1d4", damageType: "perforante", weight: 1, properties: ["Ligera", "Lanzamiento (20/60)"], finesse: true, range: "20/60" },
  { id: "clava", name: "Clava", category: "simples", kind: "corpo", damage: "1d4", damageType: "contundente", weight: 2, properties: ["Ligera"], finesse: false },
  { id: "grande_clava", name: "Gran Clava", category: "simples", kind: "corpo", damage: "1d8", damageType: "contundente", weight: 10, properties: ["Dos manos"], finesse: false, twoHanded: true },
  { id: "machado_de_mao", name: "Hacha de Mano", category: "simples", kind: "corpo", damage: "1d6", damageType: "cortante", weight: 2, properties: ["Ligera", "Lanzamiento (20/60)"], finesse: false, range: "20/60" },
  { id: "machado_de_batalha", name: "Hacha de Batalla", category: "marcial", kind: "corpo", damage: "1d8", damageType: "cortante", weight: 4, properties: ["Versátil (1d10)"], finesse: false },
  { id: "machado_guerra", name: "Hacha de Guerra", category: "marcial", kind: "corpo", damage: "1d8", damageType: "cortante", weight: 3, properties: ["Versátil (1d10)"], finesse: false },
  { id: "machado_grande", name: "Gran Hacha", category: "marcial", kind: "corpo", damage: "1d12", damageType: "cortante", weight: 7, properties: ["Dos manos"], finesse: false, twoHanded: true },
  { id: "espada_curta", name: "Espada Corta", category: "simples", kind: "corpo", damage: "1d6", damageType: "perforante", weight: 2, properties: ["Ligera"], finesse: true },
  { id: "espada_longa", name: "Espada Larga", category: "marcial", kind: "corpo", damage: "1d8", damageType: "cortante", weight: 3, properties: ["Versátil (1d10)"], finesse: false },
  { id: "espada_grande", name: "Mandoble", category: "marcial", kind: "corpo", damage: "2d6", damageType: "cortante", weight: 6, properties: ["Dos manos"], finesse: false, twoHanded: true },
  { id: "rapier", name: "Estoque", category: "marcial", kind: "corpo", damage: "1d8", damageType: "perforante", weight: 2, properties: ["Sutil"], finesse: true },
  { id: "sabre", name: "Cimitarra", category: "marcial", kind: "corpo", damage: "1d6", damageType: "cortante", weight: 3, properties: ["Sutil", "Ligera"], finesse: true },
  { id: "martelo_leve", name: "Martillo Ligero", category: "simples", kind: "corpo", damage: "1d4", damageType: "contundente", weight: 2, properties: ["Ligera", "Lanzamiento (20/60)"], finesse: false, range: "20/60" },
  { id: "martelo_de_batalha", name: "Martillo de Guerra", category: "marcial", kind: "corpo", damage: "1d8", damageType: "contundente", weight: 3, properties: ["Versátil (1d10)"], finesse: false },
  { id: "picareta_de_guerra", name: "Pico de Guerra", category: "marcial", kind: "corpo", damage: "1d8", damageType: "perforante", weight: 2, properties: ["Versátil (1d10)"], finesse: false },
  { id: "lanca", name: "Lanza", category: "simples", kind: "corpo", damage: "1d6", damageType: "perforante", weight: 3, properties: ["Lanzamiento (20/60)", "Versátil (1d8)"], finesse: false, range: "20/60" },
  { id: "javelin", name: "Jabalina", category: "simples", kind: "corpo", damage: "1d6", damageType: "perforante", weight: 1, properties: ["Lanzamiento (30/120)"], finesse: false, range: "30/120" },
  { id: "tridente", name: "Tridente", category: "marcial", kind: "corpo", damage: "1d6", damageType: "perforante", weight: 4, properties: ["Lanzamiento (20/60)", "Versátil (1d8)"], finesse: false, range: "20/60" },
  { id: "chicote", name: "Látigo", category: "marcial", kind: "corpo", damage: "1d4", damageType: "cortante", weight: 2, properties: ["Alcance (10 pies)"], finesse: true, range: "10" },
  { id: "besta_leve", name: "Ballesta Ligera", category: "simples", kind: "distancia", damage: "1d8", damageType: "perforante", weight: 5, properties: ["Munición", "Dos manos"], finesse: false, range: "80/320", twoHanded: true },
  { id: "besta_pesada", name: "Ballesta Pesada", category: "marcial", kind: "distancia", damage: "1d10", damageType: "perforante", weight: 18, properties: ["Munición", "Dos manos", "De carga"], finesse: false, range: "100/400", twoHanded: true },
  { id: "besta_mao", name: "Ballesta de Mano", category: "simples", kind: "distancia", damage: "1d6", damageType: "perforante", weight: 3, properties: ["Munición", "Ligera"], finesse: false, range: "30/120" },
  { id: "arco_curto", name: "Arco Corto", category: "simples", kind: "distancia", damage: "1d6", damageType: "perforante", weight: 2, properties: ["Munición", "Dos manos"], finesse: false, range: "80/320", twoHanded: true },
  { id: "arco_longo", name: "Arco Largo", category: "marcial", kind: "distancia", damage: "1d8", damageType: "perforante", weight: 2, properties: ["Munición", "Dos manos"], finesse: false, range: "150/600", twoHanded: true },
  { id: "funda", name: "Honda", category: "simples", kind: "distancia", damage: "1d4", damageType: "contundente", weight: 0.5, properties: ["Munición", "Ligera"], finesse: false, range: "30/120" },
  { id: "dardo", name: "Dardo", category: "simples", kind: "distancia", damage: "1d4", damageType: "perforante", weight: 0.25, properties: ["Ligera", "Lanzamiento (20/60)"], finesse: false, range: "20/60" },
  { id: "baculo", name: "Báculo", category: "simples", kind: "corpo", damage: "1d6", damageType: "contundente", weight: 4, properties: ["Dos manos"], finesse: false, twoHanded: true },
  { id: "cajado", name: "Bastón", category: "simples", kind: "corpo", damage: "1d6", damageType: "contundente", weight: 4, properties: ["Versátil (1d8)"], finesse: false },
  { id: "foiche", name: "Hoz", category: "simples", kind: "corpo", damage: "1d4", damageType: "cortante", weight: 2, properties: ["Ligera"], finesse: false },
  { id: "foice_longa", name: "Guja", category: "marcial", kind: "corpo", damage: "1d10", damageType: "cortante", weight: 18, properties: ["Dos manos"], finesse: false, twoHanded: true },
];

export function getWeapon(id: string): WeaponDef | undefined {
  return WEAPONS.find((w) => w.id === id);
}
