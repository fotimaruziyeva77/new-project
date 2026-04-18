import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-14 max-w-3xl text-center">
            {eyebrow && (
              <span className="inline-block rounded-full border border-cyan-glow/30 bg-cyan-glow/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-glow">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div aria-hidden className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}
