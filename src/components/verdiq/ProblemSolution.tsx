import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { AlertTriangle, Sparkles, Check } from "lucide-react";

export function ProblemSolution() {
  const { t } = useI18n();

  return (
    <Section id="solution" eyebrow="Problem · Solution" title={t.problem.title} subtitle={t.problem.subtitle}>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Problem */}
        <Reveal>
          <div className="glass-card h-full rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/15 text-destructive">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                {t.problem.title}
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {t.problem.items.map((it) => (
                <li key={it.t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{it.t}</div>
                    <div className="text-sm text-muted-foreground">{it.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Solution */}
        <Reveal delay={120}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-cyan-glow/20 bg-gradient-to-br from-cyan-glow/[0.07] to-green-glow/[0.07] p-6 backdrop-blur-xl lg:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-glow/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-glow to-green-glow text-background">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                  {t.solution.title}
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {t.solution.items.map((it) => (
                  <li key={it.t} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-glow to-green-glow text-background">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{it.t}</div>
                      <div className="text-sm text-muted-foreground">{it.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Comparison table */}
      <Reveal delay={240}>
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl">
          <div className="border-b border-white/5 px-6 py-4">
            <h3 className="text-sm font-semibold text-foreground">{t.compare.title}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  {t.compare.headers.map((h, i) => (
                    <th
                      key={h}
                      className={`px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider ${
                        i === 2 ? "text-cyan-glow" : "text-foreground/60"
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.compare.rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-white/5 last:border-0">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-6 py-4 ${
                          ci === 0
                            ? "font-medium text-foreground"
                            : ci === 1
                            ? "text-muted-foreground line-through decoration-white/20"
                            : "font-medium text-cyan-glow"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
