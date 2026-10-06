"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, Field, TextInput } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangSelect } from "@/components/LangSelect";
import { useT } from "@/lib/i18n/client";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();
  const t = useT();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setError(t("pages.auth.mismatch"));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(data?.error ?? t("pages.auth.signUpFailed"));
        return;
      }
      router.push("/");
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
        <Card title={t("pages.auth.createAccount")} accent="emerald">
          <form onSubmit={submit} className="flex flex-col gap-3">
            <Field label={t("pages.auth.username")} hint={t("pages.auth.usernameHint")}>
              <TextInput
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
                required
              />
            </Field>
            <Field label={t("pages.auth.password")} hint={t("pages.auth.passwordHint")}>
              <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
            </Field>
            <Field label={t("pages.auth.confirmPassword")}>
              <TextInput
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                autoComplete="new-password"
                required
              />
            </Field>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={busy}
              className="btn-success mt-1 rounded-md px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50"
            >
              {busy ? t("pages.auth.creatingAccount") : t("pages.auth.createAccount")}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-zinc-500">
            {t("pages.auth.hasAccount")}{" "}
            <Link
              href="/login"
              className="text-amber-500 transition hover:text-amber-400"
            >
              {t("pages.auth.signIn")}
            </Link>
          </p>
        </Card>
      </div>
    </main>
  );
}
