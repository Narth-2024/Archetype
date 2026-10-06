"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewCharacterPage() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/characters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then(async (res) => {
        if (res.status === 401) {
          if (!cancelled) window.location.replace("/login");
          return;
        }
        const { id } = await res.json();
        if (!cancelled && id) window.location.replace(`/character/${id}/edit`);
        else if (!cancelled) setError("Não foi possível criar o personagem.");
      })
      .catch(() => {
        if (!cancelled) setError("Falha de conexão ao criar.");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="flex min-h-60 flex-col items-center justify-center gap-3">
      {error ? (
        <>
          <p className="text-sm text-red-400">{error}</p>
          <Link href="/" className="text-sm text-amber-500 underline">
            Voltar
          </Link>
        </>
      ) : (
        <p className="text-sm text-zinc-400">Criando personagem...</p>
      )}
    </main>
  );
}
