import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Activity, Leaf, ShieldCheck, Brain, FileBarChart } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const ICONS = [Activity, Brain, FileBarChart, ShieldCheck];

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — copy */}
        <div className="flex flex-col justify-center">
          <div className="animate-fade-up inline-flex items-center gap-2 self-start rounded-full border border-cyan-glow/30 bg-cyan-glow/10 px-3 py-1 text-xs font-medium text-cyan-glow backdrop-blur-md">
            <Sparkles className="h-3 w-3" />
            {t.hero.eyebrow}
          </div>

          <h1
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-[64px] animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <span className="text-gradient">{t.hero.title}</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              to="/demo"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-glow to-green-glow px-6 py-3 text-sm font-semibold text-background shadow-glow-cyan transition hover:brightness-110 hover:shadow-glow-green"
            >
              {t.cta.viewDemo}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#solution"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition hover:border-cyan-glow/40 hover:bg-white/10"
            >
              {t.cta.exploreSolution}
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            {t.hero.badges.map((b, i) => {
              const Icon = ICONS[i] ?? Leaf;
              return (
                <div
                  key={b}
                  className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/5 px-3 py-2 text-xs font-medium text-foreground/80 backdrop-blur-md"
                >
                  <Icon className="h-3.5 w-3.5 text-cyan-glow" />
                  <span className="truncate">{b}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — dashboard mockup */}
        <div className="relative animate-fade-up" style={{ animationDelay: "300ms" }}>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-glow/20 via-transparent to-green-glow/20 blur-2xl" />

      <div className="relative rounded-2xl border border-white/10 bg-surface-elevated/80 p-1.5 backdrop-blur-xl shadow-elevated">
        {/* Window chrome */}
        <div className="flex items-center justify-between rounded-t-xl border-b border-white/5 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/50">
            verdiq.ai/dashboard
          </span>
          <span className="text-[10px] text-cyan-glow">● Live</span>
        </div>

        {/* Body */}
        <div className="space-y-3 p-4">
          {/* Big score */}
          <div className="rounded-xl border border-white/8 bg-gradient-to-br from-cyan-glow/10 via-transparent to-green-glow/10 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-foreground/60">
                  ESG Score
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-semibold text-gradient-primary">
                    82
                  </span>
                  <span className="font-mono text-xs text-green-glow">+4.2</span>
                </div>
              </div>
              <RadialScore />
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-glow to-green-glow animate-shimmer" />
            </div>
          </div>

          {/* Pillar grid */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { l: "E", v: 78, c: "text-green-glow" },
              { l: "S", v: 84, c: "text-cyan-glow" },
              { l: "G", v: 86, c: "text-blue-glow" },
            ].map((p) => (
              <div
                key={p.l}
                className="rounded-lg border border-white/8 bg-white/5 p-3"
              >
                <div className={`text-[10px] font-mono uppercase tracking-wider ${p.c}`}>
                  Pillar {p.l}
                </div>
                <div className="mt-1 font-mono text-lg font-semibold text-foreground">
                  {p.v}
                </div>
                <Sparkline />
              </div>
            ))}
          </div>

          {/* AI insight */}
          <div className="rounded-lg border border-cyan-glow/20 bg-cyan-glow/5 p-3">
            <div className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-cyan-glow to-green-glow">
                <Brain className="h-3 w-3 text-background" />
              </div>
              <div className="flex-1 text-xs text-foreground/80">
                <span className="font-semibold text-foreground">AI insight</span> ·
                Improve Scope 2 emissions disclosure to lift your E-pillar by ~6 points.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <div className="absolute -right-3 top-20 hidden lg:block animate-float">
        <div className="glass-card flex items-center gap-2 rounded-xl px-3 py-2 shadow-glow-cyan">
          <Leaf className="h-4 w-4 text-green-glow" />
          <span className="text-xs font-medium text-foreground">Carbon −12%</span>
        </div>
      </div>
    </div>
  );
}

function RadialScore() {
  const r = 24;
  const c = 2 * Math.PI * r;
  const pct = 0.82;
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
      <circle cx="32" cy="32" r={r} stroke="oklch(0.22 0.025 240)" strokeWidth="6" fill="none" />
      <circle
        cx="32"
        cy="32"
        r={r}
        stroke="url(#g)"
        strokeWidth="6"
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct)}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.16 200)" />
          <stop offset="100%" stopColor="oklch(0.82 0.20 155)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 60 18" className="mt-1.5 h-4 w-full">
      <polyline
        points="0,12 8,10 16,13 24,8 32,9 40,5 48,7 60,3"
        fill="none"
        stroke="url(#sg)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="sg" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.16 200)" />
          <stop offset="100%" stopColor="oklch(0.82 0.20 155)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
