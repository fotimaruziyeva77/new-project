import { useI18n } from "@/lib/i18n/I18nProvider";
import type { Lang } from "@/lib/i18n/translations";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
];

export function LangSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-md transition hover:border-cyan-glow/40 hover:text-foreground"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        {current.label}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-28 overflow-hidden rounded-lg border border-white/10 bg-surface-elevated/95 backdrop-blur-xl shadow-elevated">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`block w-full px-3 py-2 text-left text-xs transition ${
                l.code === lang
                  ? "bg-cyan-glow/10 text-cyan-glow"
                  : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
              }`}
            >
              {l.label} · {l.code === "en" ? "English" : l.code === "ru" ? "Русский" : "O'zbek"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
