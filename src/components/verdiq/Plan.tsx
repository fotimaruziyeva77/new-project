import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Check } from "lucide-react";

export function Plan() {
  const { t } = useI18n();

  return (
    <Section eyebrow="Implementation" title={t.plan.title} subtitle={t.plan.subtitle}>
      <div className="grid gap-5 lg:grid-cols-5">
        {t.plan.phases.map((ph, i) => (
          <Reveal key={ph.p} delay={i * 80}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-surface/50 p-6 backdrop-blur-xl transition hover:border-cyan-glow/30">
              <div className="font-mono text-[10px] uppercase tracking-wider text-cyan-glow">
                {ph.p}
              </div>
              <h3 className="mt-1.5 text-base font-semibold text-foreground">{ph.t}</h3>
              <ul className="mt-5 space-y-2.5">
                {ph.items.map((it) => (
                  <li key={it} className="flex gap-2 text-xs text-muted-foreground">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-glow" strokeWidth={2.5} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
