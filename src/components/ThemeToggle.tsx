"use client";

import { useSyncExternalStore } from "react";
import { useT } from "@/lib/i18n/client";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function isLight() {
  return document.documentElement.classList.contains("light");
}

function toggleTheme() {
  const next = !isLight();
  document.documentElement.classList.toggle("light", next);
  try {
    localStorage.setItem("theme", next ? "light" : "dark");
  } catch {
    return;
  }
}

export function ThemeToggle() {
  const t = useT();
  const light = useSyncExternalStore(subscribe, isLight, () => false);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={light ? t("pages.theme.enableDark") : t("pages.theme.enableLight")}
      title={light ? t("pages.theme.darkTitle") : t("pages.theme.lightTitle")}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-zinc-400 transition hover:border-amber-600 hover:text-amber-400"
    >
      {light ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
}
