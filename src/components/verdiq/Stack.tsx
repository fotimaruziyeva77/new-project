import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";

const STACK = [
  "Nuxt 3", "Vue 3", "TypeScript", "Tailwind CSS",
  "NestJS", "PostgreSQL", "OpenAI API", "Vector DB",
  "Netlify / Vercel", "Figma",
];

export function Stack() {
  const { t } = useI18n();

  return (
    <Section eyebrow="Stack" title={t.stack.title} subtitle={t.stack.subtitle}>
      <Reveal>
        <div className="flex flex-wrap justify-center gap-3">
          {STACK.map((s, i) => (
            <div
              key={s}
              className="group relative rounded-xl border border-white/10 bg-surface/60 px-5 py-3 text-sm font-medium text-foreground/85 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-glow/40 hover:text-foreground"
              style={{
                animation: `fade-up 0.6s ${i * 50}ms both`,
              }}
            >
              <span className="font-mono">{s}</span>
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-cyan-glow/0 to-green-glow/0 opacity-0 blur-md transition-opacity group-hover:from-cyan-glow/20 group-hover:to-green-glow/20 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
