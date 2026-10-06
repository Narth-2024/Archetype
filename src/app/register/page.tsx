"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, Field, TextInput } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setError("As senhas não conferem.");
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
        setError(data?.error ?? "Falha ao criar a conta.");
        return;
      }
      router.push("/");
    } catch {
      setError("Falha de conexão.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="title-gold text-2xl font-bold">Fichas RPG System</h1>
          <ThemeToggle />
        </div>
        <Card title="Criar conta" accent="emerald">
          <form onSubmit={submit} className="flex flex-col gap-3">
            <Field label="Usuário" hint="3 a 32 caracteres: letras, números ou _">
              <TextInput
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
                required
              />
            </Field>
            <Field label="Senha" hint="mínimo de 6 caracteres">
              <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
            </Field>
            <Field label="Repetir senha">
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
              {busy ? "Criando..." : "Criar conta"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-zinc-500">
            Já tem conta?{" "}
            <Link
              href="/login"
              className="text-amber-500 transition hover:text-amber-400"
            >
              Entrar
            </Link>
          </p>
        </Card>
      </div>
    </main>
  );
}
