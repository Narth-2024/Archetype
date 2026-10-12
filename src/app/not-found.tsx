import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="flex max-w-md flex-col items-center gap-4 text-center">
        <p className="text-4xl" aria-hidden="true">
          🗺️
        </p>
        <h1 className="title-gold text-xl font-bold">Página não encontrada</h1>
        <p className="text-sm text-zinc-400">
          O recurso que você procura não existe ou foi movido.
        </p>
        <Link
          href="/"
          className="btn-primary rounded-md px-4 py-2 text-sm font-medium text-white"
        >
          Voltar aos personagens
        </Link>
      </div>
    </div>
  );
}
