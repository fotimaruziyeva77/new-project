import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Value() {
  const { t } = useI18n();

  return (
    <Section eyebrow="Value" title={t.value.title} subtitle={t.value.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.value.stats.map((s, i) => (
          <Reveal key={s.t} delay={i * 80}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface/80 to-surface/40 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-glow/30">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-glow/10 blur-2xl transition group-hover:bg-cyan-glow/25" />
              <div className="relative">
                <div className="font-mono text-4xl font-semibold tracking-tight text-gradient-primary sm:text-5xl">
                  {s.v}
                </div>
                <div className="mt-3 text-sm font-semibold text-foreground">{s.t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.d}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
