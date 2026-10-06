import Link from "next/link";
import { CharacterList } from "@/components/CharacterList";
import { LogoutButton } from "@/components/LogoutButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { requireUser } from "@/lib/auth";
import { listCharacters } from "@/lib/characters";
import { getI18n } from "@/lib/i18n/server";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const { t } = await getI18n();
  const user = await requireUser();
  const characters = await listCharacters(user.id);

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <header className="mb-8 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="title-gold text-3xl font-bold">{t("app.name")}</h1>
          <p className="mt-1 text-zinc-400">
            {t("pages.dashboard.tagline")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/compendium"
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
          >
            {t("pages.nav.compendium")}
          </Link>
          <span className="text-sm text-zinc-500">@{user.username}</span>
          <LogoutButton />
          <ThemeToggle />
        </div>
      </header>
      <CharacterList items={characters} />
    </main>
  );
}
