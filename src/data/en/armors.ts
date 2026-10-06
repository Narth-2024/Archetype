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
  { id: "padded", name: "Padded", category: "leve", baseAc: 11, dex: "full", stealthDisadvantage: true, strengthReq: null, weight: 8 },
  { id: "leather", name: "Leather", category: "leve", baseAc: 11, dex: "full", stealthDisadvantage: false, strengthReq: null, weight: 10 },
  { id: "studded_leather", name: "Studded Leather", category: "leve", baseAc: 12, dex: "full", stealthDisadvantage: false, strengthReq: null, weight: 13 },
  { id: "hide", name: "Hide", category: "media", baseAc: 12, dex: "cap2", stealthDisadvantage: false, strengthReq: null, weight: 12 },
  { id: "chain_shirt", name: "Chain Shirt", category: "media", baseAc: 13, dex: "cap2", stealthDisadvantage: false, strengthReq: null, weight: 20 },
  { id: "scale_mail", name: "Scale Mail", category: "media", baseAc: 14, dex: "cap2", stealthDisadvantage: true, strengthReq: null, weight: 45 },
  { id: "breastplate", name: "Breastplate", category: "media", baseAc: 14, dex: "cap2", stealthDisadvantage: false, strengthReq: null, weight: 20 },
  { id: "half_plate", name: "Half Plate", category: "media", baseAc: 15, dex: "cap2", stealthDisadvantage: true, strengthReq: null, weight: 40 },
  { id: "ring_mail", name: "Ring Mail", category: "pesada", baseAc: 14, dex: "none", stealthDisadvantage: true, strengthReq: null, weight: 40 },
  { id: "chain_mail", name: "Chain Mail", category: "pesada", baseAc: 16, dex: "none", stealthDisadvantage: true, strengthReq: 13, weight: 55 },
  { id: "splint", name: "Splint", category: "pesada", baseAc: 17, dex: "none", stealthDisadvantage: true, strengthReq: 15, weight: 60 },
  { id: "plate", name: "Plate", category: "pesada", baseAc: 18, dex: "none", stealthDisadvantage: true, strengthReq: 15, weight: 65 },
  { id: "shield", name: "Shield", category: "escudo", baseAc: 2, dex: "none", stealthDisadvantage: false, strengthReq: null, weight: 6 },
];

export function getArmor(id: string): ArmorDef | undefined {
  return ARMORS.find((a) => a.id === id);
}
