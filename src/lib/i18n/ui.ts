import type { Locale } from "./locales";
import { DEFAULT_LOCALE } from "./locales";
import { common, type Dict } from "./strings/common";
import { wizard } from "./strings/wizard";
import { sheet } from "./strings/sheet";
import { pages } from "./strings/pages";

const AREAS: Dict[] = [common, wizard, sheet, pages];

export function interpolate(template: string, args?: Record<string, string | number>): string {
  if (!args) return template;
  return template.replace(/\{(\w+)\}/g, (m, key: string) =>
    key in args ? String(args[key]) : m,
  );
}

export function translate(locale: Locale, key: string, args?: Record<string, string | number>): string {
  const inLocale = AREAS.find((a) => a[locale]?.[key] !== undefined)?.[locale][key];
  const template = inLocale ?? AREAS.find((a) => a[DEFAULT_LOCALE][key] !== undefined)?.[DEFAULT_LOCALE][key];
  return interpolate(template ?? key, args);
}
