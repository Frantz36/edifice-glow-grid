import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/references", label: "Références" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/blog", label: "Blog & Actualités" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-obsidian-marble text-gold font-display text-lg font-bold">
            2H
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            2HNOUR <span className="text-gold">SARL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-slate-ink transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-obsidian shadow-[0_10px_30px_-10px_oklch(0.78_0.13_85/0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_oklch(0.78_0.13_85/0.7)] md:inline-flex"
          >
            Demander un Devis
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-obsidian"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}