"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "./icons";

type Theme = "light" | "dark";
const read = (): Theme => {
  const a = document.documentElement.getAttribute("data-theme");
  if (a === "dark" || a === "light") return a;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
const serverTheme = (): Theme => "light";

// Re-reads the theme when data-theme changes (from any toggle) or the system theme changes.
const subscribe = (onChange: () => void) => {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  const mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  mq?.addEventListener("change", onChange);
  return () => { mo.disconnect(); mq?.removeEventListener("change", onChange); };
};

export default function ThemeToggle({ theme, onChange }: { theme?: Theme; onChange?: (t: Theme) => void }) {
  // "light" on the server and during hydration, then the page's real theme.
  const own = useSyncExternalStore(subscribe, read, serverTheme);
  const current = theme ?? own;
  const next: Theme = current === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      className="sa-toggle"
      aria-label={`Switch to ${next} theme`}
      onClick={() => {
        if (theme === undefined) {
          document.documentElement.setAttribute("data-theme", next);
          try { localStorage.setItem("theme", next); } catch {}
        }
        onChange?.(next);
      }}
    >
      {current === "dark" ? <Sun size={18} strokeWidth={2.25} /> : <Moon size={18} strokeWidth={2.25} />}
    </button>
  );
}
