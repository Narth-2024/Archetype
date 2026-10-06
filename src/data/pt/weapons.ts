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
  { id: "adaga", name: "Adaga", category: "simples", kind: "corpo", damage: "1d4", damageType: "perfuração", weight: 1, properties: ["Leve", "Arremesso (20/60)"], finesse: true, range: "20/60" },
  { id: "clava", name: "Clava", category: "simples", kind: "corpo", damage: "1d4", damageType: "contusão", weight: 2, properties: ["Leve"], finesse: false },
  { id: "grande_clava", name: "Grande Clava", category: "simples", kind: "corpo", damage: "1d8", damageType: "contusão", weight: 10, properties: ["Duas mãos"], finesse: false, twoHanded: true },
  { id: "machado_de_mao", name: "Machado de Mão", category: "simples", kind: "corpo", damage: "1d6", damageType: "cortante", weight: 2, properties: ["Leve", "Arremesso (20/60)"], finesse: false, range: "20/60" },
  { id: "machado_de_batalha", name: "Machado de Batalha", category: "marcial", kind: "corpo", damage: "1d8", damageType: "cortante", weight: 4, properties: ["Versátil (1d10)"], finesse: false },
  { id: "machado_guerra", name: "Machado de Guerra", category: "marcial", kind: "corpo", damage: "1d8", damageType: "cortante", weight: 3, properties: ["Versátil (1d10)"], finesse: false },
  { id: "machado_grande", name: "Machado Grande", category: "marcial", kind: "corpo", damage: "1d12", damageType: "cortante", weight: 7, properties: ["Duas mãos"], finesse: false, twoHanded: true },
  { id: "espada_curta", name: "Espada Curta", category: "simples", kind: "corpo", damage: "1d6", damageType: "perfuração", weight: 2, properties: ["Leve"], finesse: true },
  { id: "espada_longa", name: "Espada Longa", category: "marcial", kind: "corpo", damage: "1d8", damageType: "cortante", weight: 3, properties: ["Versátil (1d10)"], finesse: false },
  { id: "espada_grande", name: "Espada Grande", category: "marcial", kind: "corpo", damage: "2d6", damageType: "cortante", weight: 6, properties: ["Duas mãos"], finesse: false, twoHanded: true },
  { id: "rapier", name: "Rapié", category: "marcial", kind: "corpo", damage: "1d8", damageType: "perfuração", weight: 2, properties: ["Finesse"], finesse: true },
  { id: "sabre", name: "Sabre", category: "marcial", kind: "corpo", damage: "1d6", damageType: "cortante", weight: 3, properties: ["Finesse", "Leve"], finesse: true },
  { id: "martelo_leve", name: "Martelo Leve", category: "simples", kind: "corpo", damage: "1d4", damageType: "contusão", weight: 2, properties: ["Leve", "Arremesso (20/60)"], finesse: false, range: "20/60" },
  { id: "martelo_de_batalha", name: "Martelo de Batalha", category: "marcial", kind: "corpo", damage: "1d8", damageType: "contusão", weight: 3, properties: ["Versátil (1d10)"], finesse: false },
  { id: "picareta_de_guerra", name: "Picareta de Guerra", category: "marcial", kind: "corpo", damage: "1d8", damageType: "perfuração", weight: 2, properties: ["Versátil (1d10)"], finesse: false },
  { id: "lanca", name: "Lança", category: "simples", kind: "corpo", damage: "1d6", damageType: "perfuração", weight: 3, properties: ["Arremesso (20/60)", "Versátil (1d8)"], finesse: false, range: "20/60" },
  { id: "javelin", name: "Javelin", category: "simples", kind: "corpo", damage: "1d6", damageType: "perfuração", weight: 1, properties: ["Arremesso (30/120)"], finesse: false, range: "30/120" },
  { id: "tridente", name: "Tridente", category: "marcial", kind: "corpo", damage: "1d6", damageType: "perfuração", weight: 4, properties: ["Arremesso (20/60)", "Versátil (1d8)"], finesse: false, range: "20/60" },
  { id: "chicote", name: "Chicote", category: "marcial", kind: "corpo", damage: "1d4", damageType: "cortante", weight: 2, properties: ["Alcance (10 pés)"], finesse: true, range: "10" },
  { id: "besta_leve", name: "Besta Leve", category: "simples", kind: "distancia", damage: "1d8", damageType: "perfuração", weight: 5, properties: ["Munição", "Duas mãos"], finesse: false, range: "80/320", twoHanded: true },
  { id: "besta_pesada", name: "Besta Pesada", category: "marcial", kind: "distancia", damage: "1d10", damageType: "perfuração", weight: 18, properties: ["Munição", "Duas mãos", "Recarga"], finesse: false, range: "100/400", twoHanded: true },
  { id: "besta_mao", name: "Besta de Mão", category: "simples", kind: "distancia", damage: "1d6", damageType: "perfuração", weight: 3, properties: ["Munição", "Leve"], finesse: false, range: "30/120" },
  { id: "arco_curto", name: "Arco Curto", category: "simples", kind: "distancia", damage: "1d6", damageType: "perfuração", weight: 2, properties: ["Munição", "Duas mãos"], finesse: false, range: "80/320", twoHanded: true },
  { id: "arco_longo", name: "Arco Longo", category: "marcial", kind: "distancia", damage: "1d8", damageType: "perfuração", weight: 2, properties: ["Munição", "Duas mãos"], finesse: false, range: "150/600", twoHanded: true },
  { id: "funda", name: "Funda", category: "simples", kind: "distancia", damage: "1d4", damageType: "contusão", weight: 0.5, properties: ["Munição", "Leve"], finesse: false, range: "30/120" },
  { id: "dardo", name: "Dardo", category: "simples", kind: "distancia", damage: "1d4", damageType: "perfuração", weight: 0.25, properties: ["Leve", "Arremesso (20/60)"], finesse: false, range: "20/60" },
  { id: "baculo", name: "Báculo", category: "simples", kind: "corpo", damage: "1d6", damageType: "contusão", weight: 4, properties: ["Duas mãos"], finesse: false, twoHanded: true },
  { id: "cajado", name: "Cajado", category: "simples", kind: "corpo", damage: "1d6", damageType: "contusão", weight: 4, properties: ["Versátil (1d8)"], finesse: false },
  { id: "foiche", name: "Foice", category: "simples", kind: "corpo", damage: "1d4", damageType: "cortante", weight: 2, properties: ["Leve"], finesse: false },
  { id: "foice_longa", name: "Foice Longa", category: "marcial", kind: "corpo", damage: "1d10", damageType: "cortante", weight: 18, properties: ["Duas mãos"], finesse: false, twoHanded: true },
];

export function getWeapon(id: string): WeaponDef | undefined {
  return WEAPONS.find((w) => w.id === id);
}
