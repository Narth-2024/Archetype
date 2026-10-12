"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="flex max-w-md flex-col items-center gap-4 text-center">
        <p className="text-4xl" aria-hidden="true">
          ⚔️
        </p>
        <h1 className="title-gold text-xl font-bold">
          Algo deu errado
        </h1>
        <p className="text-sm text-zinc-400">
          Ocorreu um erro ao carregar esta página. Tente novamente.
        </p>
        <button
          type="button"
          onClick={reset}
          className="btn-primary rounded-md px-4 py-2 text-sm font-medium text-white"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
