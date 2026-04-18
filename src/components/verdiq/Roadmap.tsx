import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { OrbitVector, WaveVector } from "./SectionVectors";
import { Lightbulb, Rocket, Box, Sparkles } from "lucide-react";

const ICONS = [Lightbulb, Box, Rocket, Sparkles];

export function Roadmap() {
  const { t } = useI18n();

  return (
    <div className="relative overflow-hidden">
      <OrbitVector className="-left-40 top-10 hidden opacity-70 lg:block" />
      <WaveVector className="bottom-0 left-0 right-0" />
      <Section id="roadmap" eyebrow="Roadmap" title={t.roadmap.title} subtitle={t.roadmap.subtitle}>
      <div className="relative">
        {/* Glow line */}
        <div
          aria-hidden
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-glow/30 to-transparent lg:block"
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {t.roadmap.stages.map((s, i) => {
            const Icon = ICONS[i] ?? Lightbulb;
            const active = i < 2;
            const current = i === 2;
            return (
              <Reveal key={s.t} delay={i * 100}>
                <div className="relative h-full">
                  {/* Node */}
                  <div className="mb-5 flex justify-center">
                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border ${
                        current
                          ? "border-cyan-glow/40 bg-cyan-glow/10 animate-pulse-glow"
                          : active
                          ? "border-green-glow/30 bg-green-glow/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          current ? "text-cyan-glow" : active ? "text-green-glow" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="glass-card rounded-2xl p-5 text-center">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-foreground/50">
                      Stage 0{i + 1}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{s.t}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
                    <div
                      className={`mt-4 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                        current
                          ? "border-cyan-glow/40 bg-cyan-glow/10 text-cyan-glow"
                          : active
                          ? "border-green-glow/30 bg-green-glow/10 text-green-glow"
                          : "border-white/10 bg-white/5 text-muted-foreground"
                      }`}
                    >
                      {s.status}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      </Section>
    </div>
  );
}
