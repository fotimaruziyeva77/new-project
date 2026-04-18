import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/verdiq-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center ${className}`} aria-label="Verdiq home">
      <img
        src={logoUrl}
        alt="Verdiq"
        className="h-8 w-auto transition-opacity group-hover:opacity-90"
      />
    </Link>
  );
}
