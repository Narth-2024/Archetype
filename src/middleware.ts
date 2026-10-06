import { NextResponse, type NextRequest } from "next/server";

const SESSION_COOKIE = "fs_session";
const PUBLIC_PAGES = ["/login", "/register", "/compendium"];

function isPublic(pathname: string): boolean {
  return (
    PUBLIC_PAGES.includes(pathname) ||
    pathname.startsWith("/api/auth") ||
    pathname === "/api/health" ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  );
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (isPublic(pathname)) return NextResponse.next();

  const authed = Boolean(req.cookies.get(SESSION_COOKIE)?.value);
  if (authed) return NextResponse.next();

  if (pathname.startsWith("/api")) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
