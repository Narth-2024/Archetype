"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, Field, TextInput } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangSelect } from "@/components/LangSelect";
import { useT } from "@/lib/i18n/client";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const t = useT();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(data?.error ?? t("pages.auth.signInFailed"));
        return;
      }
      const next = new URLSearchParams(window.location.search).get("next");
      const target = next && next.startsWith("/") && !next.startsWith("//") ? next : "/";
      router.push(target);
    } catch {
      setError(t("pages.auth.connectionFailed"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="title-gold text-2xl font-bold">{t("app.name")}</h1>
          <div className="flex items-center gap-2">
            <LangSelect />
            <ThemeToggle />
          </div>
        </div>
        <Card title={t("pages.auth.signIn")} accent="amber">
          <form onSubmit={submit} className="flex flex-col gap-3">
            <Field label={t("pages.auth.username")}>
              <TextInput
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
                required
              />
            </Field>
            <Field label={t("pages.auth.password")}>
              <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </Field>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={busy}
              className="btn-primary mt-1 rounded-md px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50"
            >
              {busy ? t("pages.auth.signingIn") : t("pages.auth.signIn")}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-zinc-500">
            {t("pages.auth.noAccount")}{" "}
            <Link
              href="/register"
              className="text-amber-500 transition hover:text-amber-400"
            >
              {t("pages.auth.createAccount")}
            </Link>
          </p>
        </Card>
      </div>
    </main>
  );
}
