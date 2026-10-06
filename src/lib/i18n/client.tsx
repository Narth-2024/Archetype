"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { bundleFor } from "@/data";
import { translate } from "./ui";
import { makeFormatter, type Formatter } from "./format";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_COOKIE,
  UNITS_COOKIE,
  type Locale,
  type Units,
} from "./locales";

type Args = Record<string, string | number>;

export type I18nValue = {
  locale: Locale;
  units: Units;
  t: (key: string, args?: Args) => string;
  data: ReturnType<typeof bundleFor>;
  fmt: Formatter;
  setLocale: (locale: Locale) => void;
  setUnits: (units: Units) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  locale: initialLocale,
  units: initialUnits,
  children,
}: {
  locale: Locale;
  units: Units;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState(initialLocale);
  const [units, setUnitsState] = useState(initialUnits);

  const persist = useCallback(
    async (body: Record<string, string>) => {
      await fetch("/api/prefs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.refresh();
    },
    [router],
  );

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      units,
      t: (key, args) => translate(locale, key, args),
      data: bundleFor(locale),
      fmt: makeFormatter(locale, units),
      setLocale: (next) => {
        setLocaleState(next);
        void persist({ locale: next });
      },
      setUnits: (next) => {
        setUnitsState(next);
        void persist({ units: next });
      },
    }),
    [locale, units, persist],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n precisa do I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}

export function useData() {
  return useI18n().data;
}

export function useFormat(): Formatter {
  return useI18n().fmt;
}

export { LOCALES, LOCALE_LABELS, LOCALE_COOKIE, UNITS_COOKIE };
export type { Locale, Units };
