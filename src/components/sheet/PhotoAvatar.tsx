"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useT } from "@/lib/i18n/client";

async function compress(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" }).catch(() =>
    createImageBitmap(file),
  );
  const max = 512;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", 0.82);
}

export function PhotoAvatar({
  id,
  photo,
  name,
}: {
  id: string;
  photo?: string;
  name: string;
}) {
  const t = useT();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  async function patch(body: Record<string, string>) {
    setBusy(true);
    setError(false);
    try {
      const res = await fetch(`/api/characters/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      router.refresh();
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !file.type.startsWith("image/")) return;
    try {
      const dataUrl = await compress(file);
      await patch({ photo: dataUrl });
    } catch {
      setError(true);
    }
  }

  return (
    <div className="relative h-20 w-20 shrink-0">
      <button
        type="button"
        disabled={busy}
        onClick={() => inputRef.current?.click()}
        title={t("sheet.photo.upload")}
        className="group relative block h-20 w-20 overflow-hidden rounded-full border border-zinc-700 bg-zinc-900 transition hover:border-amber-600 disabled:opacity-60"
      >
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={80}
            height={80}
            unoptimized
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-2xl font-semibold text-zinc-600">
            {(name || "?").slice(0, 1).toUpperCase()}
          </span>
        )}
        <span className="absolute inset-0 hidden items-center justify-center bg-black/55 px-2 text-center text-[11px] leading-tight text-zinc-200 group-hover:flex">
          {t("sheet.photo.upload")}
        </span>
      </button>
      {photo && (
        <button
          type="button"
          disabled={busy}
          onClick={() => patch({ photo: "" })}
          title={t("sheet.photo.remove")}
          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-400 transition hover:border-red-600 hover:text-red-400"
        >
          ×
        </button>
      )}
      {error && (
        <span className="absolute -bottom-5 left-0 whitespace-nowrap text-[11px] text-red-400">
          {t("api.generic")}
        </span>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onFile}
      />
    </div>
  );
}
