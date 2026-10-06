export type ArmorDef = {
  id: string;
  name: string;
  category: "leve" | "media" | "pesada" | "escudo";
  baseAc: number;
  dex: "none" | "cap2" | "full";
  stealthDisadvantage: boolean;
  strengthReq: number | null;
  weight: number;
};

export const ARMORS: ArmorDef[] = [
  { id: "padded", name: "Ropa Acolchada", category: "leve", baseAc: 11, dex: "full", stealthDisadvantage: true, strengthReq: null, weight: 8 },
  { id: "leather", name: "Cuero", category: "leve", baseAc: 11, dex: "full", stealthDisadvantage: false, strengthReq: null, weight: 10 },
  { id: "studded_leather", name: "Cuero Tachonado", category: "leve", baseAc: 12, dex: "full", stealthDisadvantage: false, strengthReq: null, weight: 13 },
  { id: "hide", name: "Peles", category: "media", baseAc: 12, dex: "cap2", stealthDisadvantage: false, strengthReq: null, weight: 12 },
  { id: "chain_shirt", name: "Camisa de Malla", category: "media", baseAc: 13, dex: "cap2", stealthDisadvantage: false, strengthReq: null, weight: 20 },
  { id: "scale_mail", name: "Armadura de Escamas", category: "media", baseAc: 14, dex: "cap2", stealthDisadvantage: true, strengthReq: null, weight: 45 },
  { id: "breastplate", name: "Coraza", category: "media", baseAc: 14, dex: "cap2", stealthDisadvantage: false, strengthReq: null, weight: 20 },
  { id: "half_plate", name: "Media Armadura", category: "media", baseAc: 15, dex: "cap2", stealthDisadvantage: true, strengthReq: null, weight: 40 },
  { id: "ring_mail", name: "Cota de Anillos", category: "pesada", baseAc: 14, dex: "none", stealthDisadvantage: true, strengthReq: null, weight: 40 },
  { id: "chain_mail", name: "Cota de Malla", category: "pesada", baseAc: 16, dex: "none", stealthDisadvantage: true, strengthReq: 13, weight: 55 },
  { id: "splint", name: "Armadura de Bandas", category: "pesada", baseAc: 17, dex: "none", stealthDisadvantage: true, strengthReq: 15, weight: 60 },
  { id: "plate", name: "Placas", category: "pesada", baseAc: 18, dex: "none", stealthDisadvantage: true, strengthReq: 15, weight: 65 },
  { id: "shield", name: "Escudo", category: "escudo", baseAc: 2, dex: "none", stealthDisadvantage: false, strengthReq: null, weight: 6 },
];

export function getArmor(id: string): ArmorDef | undefined {
  return ARMORS.find((a) => a.id === id);
}
