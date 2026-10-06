import type { Locale } from "../lib/i18n/locales";
import * as pt from "./pt";
import * as en from "./en";
import * as es from "./es";

export * from "./pt";

export type DataBundle = typeof pt;

export const BUNDLES: Record<Locale, DataBundle> = { pt, en, es };

export function bundleFor(locale: Locale): DataBundle {
  return BUNDLES[locale] ?? BUNDLES.pt;
}

export const PT_BUNDLE: DataBundle = pt;
