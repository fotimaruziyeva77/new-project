import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Github, Linkedin, Globe, Code, Layers, Rocket, Sparkles } from "lucide-react";

const STRENGTH_ICONS = [Code, Sparkles, Rocket, Layers];

export function Team() {
  const { t } = useI18n();

  return (
    <Section id="team" eyebrow="Team" title={t.team.title} subtitle={t.team.subtitle}>
      {/* Strengths */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.team.strengths.map((s, i) => {
          const Icon = STRENGTH_ICONS[i] ?? Code;
          return (
            <Reveal key={s.t} delay={i * 80}>
              <div className="glass-card h-full rounded-xl p-5 transition hover:border-cyan-glow/30">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-glow/20 to-green-glow/20 text-cyan-glow">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="mt-4 text-sm font-semibold text-foreground">{s.t}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Core team */}
      <div className="mt-16">
        <Reveal>
          <h3 className="text-center text-xl font-semibold text-foreground sm:text-2xl">
            {t.team.coreTitle}
          </h3>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.team.roles.map((r, i) => (
            <Reveal key={r.role} delay={i * 60}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-glow/25">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-glow to-green-glow font-mono text-sm font-semibold text-background">
                    {r.role.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-glow to-green-glow opacity-0 blur-md transition-opacity group-hover:opacity-50" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-foreground">{r.role}</div>
                    <div className="text-xs text-muted-foreground">{r.name}</div>
                  </div>
                </div>

                {/* Links */}
                <div className="mt-5 flex gap-2 border-t border-white/5 pt-4">
                  {[Github, Linkedin, Globe].map((Icon, k) => (
                    <a
                      key={k}
                      href="#"
                      aria-label="link"
                      className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-muted-foreground transition hover:border-cyan-glow/40 hover:text-cyan-glow"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
