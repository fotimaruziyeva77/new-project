import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2 ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-glow to-green-glow shadow-glow-cyan">
        <Leaf className="h-4 w-4 text-background" strokeWidth={2.5} />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-glow to-green-glow opacity-50 blur-md transition-opacity group-hover:opacity-80" />
      </div>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Verdiq
      </span>
    </Link>
  );
}
