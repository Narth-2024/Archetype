"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n/client";

export default function NewCharacterPage() {
  const t = useT();
  const [error, setError] = useState<string | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    fetch("/api/characters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then(async (res) => {
        if (res.status === 401) {
          window.location.replace("/login");
          return;
        }
        const { id } = await res.json();
        if (id) window.location.replace(`/character/${id}/edit`);
        else setError("pages.new.createFailed");
      })
      .catch(() => setError("pages.new.connectionFailed"));
  }, []);

  return (
    <main className="flex min-h-60 flex-col items-center justify-center gap-3">
      {error ? (
        <>
          <p className="text-sm text-red-400">{t(error)}</p>
          <Link href="/" className="text-sm text-amber-500 underline">
            {t("common.back")}
          </Link>
        </>
      ) : (
        <p className="text-sm text-zinc-400">{t("pages.new.creating")}</p>
      )}
    </main>
  );
}
