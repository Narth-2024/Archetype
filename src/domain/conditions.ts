export const CONDITION_KEYS = [
  "cego",
  "surdo",
  "enfeiticado",
  "exaustao",
  "assustado",
  "agarrado",
  "incapacitado",
  "invisivel",
  "paralisado",
  "petrificado",
  "envenenado",
  "caido",
  "amarrado",
  "atordoado",
  "inconsciente",
  "concentracao",
] as const;

export type ConditionKey = (typeof CONDITION_KEYS)[number];

export function isConditionKey(value: unknown): value is ConditionKey {
  return (
    typeof value === "string" && (CONDITION_KEYS as readonly string[]).includes(value)
  );
}

export const CONDITION_I18N_KEY: Record<ConditionKey, string> = {
  cego: "sheet.cond.cego",
  surdo: "sheet.cond.surdo",
  enfeiticado: "sheet.cond.enfeiticado",
  exaustao: "sheet.cond.exaustao",
  assustado: "sheet.cond.assustado",
  agarrado: "sheet.cond.agarrado",
  incapacitado: "sheet.cond.incapacitado",
  invisivel: "sheet.cond.invisivel",
  paralisado: "sheet.cond.paralisado",
  petrificado: "sheet.cond.petrificado",
  envenenado: "sheet.cond.envenenado",
  caido: "sheet.cond.caido",
  amarrado: "sheet.cond.amarrado",
  atordoado: "sheet.cond.atordoado",
  inconsciente: "sheet.cond.inconsciente",
  concentracao: "sheet.cond.concentracao",
};
