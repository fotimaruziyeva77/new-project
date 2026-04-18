import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Navbar() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.home, href: "/", isRoute: true },
    { label: t.nav.solution, href: "/#solution", isRoute: false },
    { label: t.nav.team, href: "/#team", isRoute: false },
    { label: t.nav.roadmap, href: "/#roadmap", isRoute: false },
    { label: t.nav.demo, href: "/demo", isRoute: true },
    { label: t.nav.contact, href: "/#contact", isRoute: false },
  ];

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) =>
            l.isRoute ? (
              <Link
                key={l.label}
                to={l.href as "/" | "/demo"}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher />
          <ThemeToggle />
          <Link
            to="/demo"
            className="hidden items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-glow to-green-glow px-4 py-1.5 text-xs font-semibold text-background shadow-glow-cyan transition hover:brightness-110 sm:inline-flex"
          >
            {t.cta.viewDemo}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="px-4 py-3">
            {links.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.label}
                  to={l.href as "/" | "/demo"}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleAnchor(e, l.href)}
                  className="block py-3 text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
