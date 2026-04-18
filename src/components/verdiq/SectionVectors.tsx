/**
 * Decorative SVG vectors for specific sections.
 * Pointer-events-none, low opacity, theme-aware via currentColor on tokens.
 */

export function GridVector({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="vq-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="oklch(0.78 0.16 200)"
            strokeWidth="0.4"
            opacity="0.18"
          />
        </pattern>
        <radialGradient id="vq-grid-fade" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="vq-grid-mask">
          <rect width="100%" height="100%" fill="url(#vq-grid-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#vq-grid)" mask="url(#vq-grid-mask)" />
    </svg>
  );
}

export function DotsVector({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${className}`}
      width="220"
      height="220"
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="vq-dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="oklch(0.82 0.20 155)" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="220" height="220" fill="url(#vq-dots)" />
    </svg>
  );
}

export function WaveVector({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${className}`}
      width="100%"
      height="160"
      viewBox="0 0 1200 160"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vq-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.78 0.16 200)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.78 0.16 200)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="oklch(0.82 0.20 155)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="vq-wave-2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.82 0.20 155)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.65 0.22 260)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.78 0.16 200)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 C200,30 400,130 600,80 C800,30 1000,130 1200,80"
        fill="none"
        stroke="url(#vq-wave)"
        strokeWidth="1.2"
      />
      <path
        d="M0,100 C220,60 420,140 620,100 C820,60 1020,140 1200,100"
        fill="none"
        stroke="url(#vq-wave-2)"
        strokeWidth="1"
      />
    </svg>
  );
}

export function OrbitVector({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${className}`}
      width="520"
      height="520"
      viewBox="0 0 520 520"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vq-orbit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.16 200)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.82 0.20 155)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="260" cy="260" r="120" fill="none" stroke="url(#vq-orbit)" strokeWidth="0.8" />
      <circle cx="260" cy="260" r="180" fill="none" stroke="url(#vq-orbit)" strokeWidth="0.6" opacity="0.7" />
      <circle cx="260" cy="260" r="240" fill="none" stroke="url(#vq-orbit)" strokeWidth="0.5" opacity="0.5" />
      <circle cx="380" cy="260" r="3" fill="oklch(0.78 0.16 200)" />
      <circle cx="260" cy="80" r="2.5" fill="oklch(0.82 0.20 155)" />
      <circle cx="80" cy="320" r="2" fill="oklch(0.65 0.22 260)" />
    </svg>
  );
}
