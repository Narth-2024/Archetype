import { NextResponse } from "next/server";
import { LOCALE_COOKIE, UNITS_COOKIE, isLocale, isUnits } from "@/lib/i18n/locales";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    locale?: string;
    units?: string;
  } | null;
  const res = NextResponse.json({ ok: true });
  if (body && isLocale(body.locale)) {
    res.cookies.set(LOCALE_COOKIE, body.locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  if (body && isUnits(body.units)) {
    res.cookies.set(UNITS_COOKIE, body.units, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  return res;
}
