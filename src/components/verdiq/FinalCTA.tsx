import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const { t } = useI18n();

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan-glow/20 bg-gradient-to-br from-cyan-glow/[0.08] via-blue-glow/[0.05] to-green-glow/[0.08] p-10 text-center backdrop-blur-xl sm:p-16">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-glow/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-green-glow/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-gradient">{t.finalCta.title}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {t.finalCta.subtitle}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/demo"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-glow to-green-glow px-7 py-3.5 text-sm font-semibold text-background shadow-glow-cyan transition hover:brightness-110"
              >
                {t.cta.watchDemo}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition hover:border-cyan-glow/40 hover:bg-white/10"
              >
                {t.cta.contactTeam}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
