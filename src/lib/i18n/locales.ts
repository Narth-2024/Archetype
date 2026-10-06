export const LOCALES = ["pt", "en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt";

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export const LOCALE_COOKIE = "fs_lang";
export const UNITS_COOKIE = "fs_units";

export type Units = "metric" | "imperial";
export const UNITS: Units[] = ["metric", "imperial"];

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

export function isUnits(value: unknown): value is Units {
  return value === "metric" || value === "imperial";
}
