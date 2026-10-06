import type { Locale, Units } from "./locales";

const TAG: Record<Locale, string> = { pt: "pt-BR", en: "en-US", es: "es-ES" };

const FEET_RE: Record<Locale, RegExp> = {
  pt: /(\d+)\s*pés/g,
  en: /(\d+)\s*feet/g,
  es: /(\d+)\s*(pies|pie)/g,
};

function num(n: number, locale: Locale, maxFrac = 1): string {
  return n.toLocaleString(TAG[locale], { maximumFractionDigits: maxFrac });
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

function feetToMeters(feet: number, locale: Locale): string {
  const m = feet * 0.3048;
  if (feet === 0) return `${num(0, locale)} m`;
  if (Math.abs(m) < 3) return `${num(round1(m), locale)} m`;
  return `${num(Math.round(m), locale, 0)} m`;
}

export type Formatter = {
  num(n: number, maxFrac?: number): string;
  distance(feet: number): string;
  distanceRange(range: string): string;
  distanceText(text: string): string;
  weight(pounds: number): string;
};

export function makeFormatter(locale: Locale, units: Units): Formatter {
  return {
    num(n, maxFrac = 1) {
      return num(n, locale, maxFrac);
    },
    distance(feet) {
      if (units === "imperial") return `${num(feet, locale, 0)} ft`;
      return feetToMeters(feet, locale);
    },
    distanceRange(range) {
      if (!range || !/\d/.test(range)) return range;
      const suffix = units === "imperial" ? "ft" : "m";
      const converted = range
        .split("/")
        .map((part) => {
          const n = Number(part.trim());
          if (Number.isNaN(n)) return part.trim();
          if (units === "imperial") return String(num(n, locale, 0));
          const m = n * 0.3048;
          return String(Math.abs(m) < 3 ? num(round1(m), locale) : num(Math.round(m), locale, 0));
        })
        .join("/");
      return `${converted} ${suffix}`;
    },
    distanceText(text) {
      return text.replace(FEET_RE[locale], (_, n: string) => {
        const feet = Number(n);
        if (units === "imperial") return `${num(feet, locale, 0)} ft`;
        return feetToMeters(feet, locale);
      });
    },
    weight(pounds) {
      if (units === "imperial") return `${num(pounds, locale)} lb`;
      return `${num(round1(pounds * 0.4536), locale)} kg`;
    },
  };
}
