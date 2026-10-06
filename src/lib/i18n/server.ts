import { cookies } from "next/headers";
import { translate } from "./ui";
import { bundleFor } from "@/data";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  UNITS_COOKIE,
  isLocale,
  isUnits,
  type Locale,
  type Units,
} from "./locales";
import { makeFormatter, type Formatter } from "./format";

export { LOCALES, LOCALE_LABELS, type Locale, type Units } from "./locales";

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export async function getUnits(): Promise<Units> {
  const value = (await cookies()).get(UNITS_COOKIE)?.value;
  return isUnits(value) ? value : "metric";
}

export type ServerI18n = {
  locale: Locale;
  units: Units;
  t: (key: string, args?: Record<string, string | number>) => string;
  data: ReturnType<typeof bundleFor>;
  fmt: Formatter;
};

export async function getI18n(): Promise<ServerI18n> {
  const locale = await getLocale();
  const units = await getUnits();
  return {
    locale,
    units,
    t: (key: string, args?: Record<string, string | number>) => translate(locale, key, args),
    data: bundleFor(locale),
    fmt: makeFormatter(locale, units),
  };
}
