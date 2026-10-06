"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n/client";

export default function NewCharacterPage() {
  const t = useT();
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
        else if (!cancelled) setError("pages.new.createFailed");
      })
      .catch(() => {
        if (!cancelled) setError("pages.new.connectionFailed");
      });
    return () => {
      cancelled = true;
    };
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
