import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";
import {
  Gauge, Brain, ShieldAlert, LayoutDashboard, FileText, Code2,
} from "lucide-react";

const ICONS = [Gauge, Brain, ShieldAlert, LayoutDashboard, FileText, Code2];

export function Product() {
  const { t } = useI18n();

  return (
    <Section eyebrow="Product" title={t.product.title} subtitle={t.product.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.product.items.map((it, i) => {
          const Icon = ICONS[i] ?? Gauge;
          return (
            <Reveal key={it.t} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-surface/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-glow/30 hover:bg-surface-elevated/60">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-glow/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-glow/20" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-glow/20 to-green-glow/20 text-cyan-glow ring-1 ring-cyan-glow/20 transition-all group-hover:scale-110 group-hover:text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{it.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
