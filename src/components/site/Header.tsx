import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Handshake,
  Info,
  Newspaper,
  Heart,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { LOGO_IMAGE } from "@/components/site/data";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/references", label: "Références" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const companyDropdownRef = useRef<HTMLDivElement>(null);
  const contactDropdownRef = useRef<HTMLDivElement>(null);

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isCompanyActive =
    currentPath === "/a-propos" || currentPath === "/blog";
  const isContactActive = currentPath === "/contact";

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        companyDropdownRef.current &&
        !companyDropdownRef.current.contains(event.target as Node)
      ) {
        setCompanyDropdownOpen(false);
      }
      if (
        contactDropdownRef.current &&
        !contactDropdownRef.current.contains(event.target as Node)
      ) {
        setContactDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500 ease-out ${
        isScrolled ? "pt-3 pb-3" : "pt-8"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-6 px-6 pointer-events-auto transition-all duration-500 ease-out ${
          isScrolled
            ? "max-w-7xl rounded-full border border-gold/30 bg-white/95 py-2.5 shadow-2xl shadow-obsidian/15 backdrop-blur-2xl text-obsidian"
            : "max-w-7xl py-2 bg-transparent text-white"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={LOGO_IMAGE}
            alt="2HNOUR SARL"
            className={`w-auto object-contain transition-all duration-500 ease-out ${
              isScrolled ? "h-10" : "h-20 md:h-24 lg:h-28"
            }`}
          />
          <div
            className={`overflow-hidden transition-all duration-500 ease-out flex items-center ${
              isScrolled ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap text-obsidian">
              2HNOUR <span className="text-gold">SARL</span>
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
                isScrolled
                  ? "text-obsidian hover:text-gold [&:not(.bg-gold)]:text-obsidian"
                  : "text-white hover:text-gold"
              }`}
              activeProps={{
                className:
                  "rounded-full bg-gold px-4 py-2 text-sm font-semibold text-obsidian shadow-sm whitespace-nowrap",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}

          {/* MENU DÉROULANT L'ENTREPRISE (À propos & Blog) */}
          <div className="relative" ref={companyDropdownRef}>
            <button
              onClick={() => {
                setCompanyDropdownOpen((v) => !v);
                setContactDropdownOpen(false);
              }}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all focus:outline-none whitespace-nowrap ${
                isCompanyActive
                  ? "bg-gold font-semibold text-obsidian shadow-sm"
                  : isScrolled
                  ? "text-obsidian hover:text-gold"
                  : "text-white hover:text-gold"
              }`}
            >
              <span>L'Entreprise</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  companyDropdownOpen
                    ? "rotate-180 text-gold"
                    : isScrolled
                    ? "text-obsidian"
                    : "text-white"
                }`}
              />
            </button>

            {companyDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-border bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150 text-obsidian">
                <Link
                  to="/a-propos"
                  onClick={() => setCompanyDropdownOpen(false)}
                  className="flex items-start gap-3 rounded-xl p-3 text-slate-ink transition-colors hover:bg-slate-50 hover:text-gold"
                  activeProps={{ className: "bg-gold/15 font-semibold text-obsidian" }}
                >
                  <div className="mt-0.5 rounded-lg bg-gold/15 p-2 text-gold">
                    <Info className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">À Propos</div>
                    <p className="text-xs text-muted-foreground">
                      Notre histoire, vision et valeurs
                    </p>
                  </div>
                </Link>

                <Link
                  to="/blog"
                  onClick={() => setCompanyDropdownOpen(false)}
                  className="flex items-start gap-3 rounded-xl p-3 text-slate-ink transition-colors hover:bg-slate-50 hover:text-gold"
                  activeProps={{ className: "bg-gold/15 font-semibold text-obsidian" }}
                >
                  <div className="mt-0.5 rounded-lg bg-obsidian p-2 text-gold">
                    <Newspaper className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      Blog & Actualités
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Dernières actus et publications
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* ENGAGEMENT SOLIDAIRE */}
          <Link
            to="/engagement-solidaire"
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
              isScrolled
                ? "text-obsidian hover:text-gold"
                : "text-white hover:text-gold"
            }`}
            activeProps={{
              className:
                "inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-obsidian shadow-sm whitespace-nowrap",
            }}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                currentPath === "/engagement-solidaire"
                  ? "fill-obsidian text-obsidian"
                  : "text-gold"
              }`}
            />
            <span>Engagement Solidaire</span>
          </Link>

          {/* MENU DÉROULANT CONTACT */}
          <div className="relative" ref={contactDropdownRef}>
            <button
              onClick={() => {
                setContactDropdownOpen((v) => !v);
                setCompanyDropdownOpen(false);
              }}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all focus:outline-none whitespace-nowrap ${
                isContactActive
                  ? "bg-gold font-semibold text-obsidian shadow-sm"
                  : isScrolled
                  ? "text-obsidian hover:text-gold"
                  : "text-white hover:text-gold"
              }`}
            >
              <span>Contact</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  contactDropdownOpen
                    ? "rotate-180 text-gold"
                    : isScrolled
                    ? "text-obsidian"
                    : "text-white"
                }`}
              />
            </button>

            {contactDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-border bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150 text-obsidian">
                <Link
                  to="/contact"
                  hash="contact-form"
                  onClick={() => setContactDropdownOpen(false)}
                  className="flex items-start gap-3 rounded-xl p-3 text-slate-ink transition-colors hover:bg-slate-50 hover:text-gold"
                  activeProps={{ className: "bg-gold/15 font-semibold text-obsidian" }}
                >
                  <div className="mt-0.5 rounded-lg bg-gold/15 p-2 text-gold">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Contactez-nous</div>
                    <p className="text-xs text-muted-foreground">
                      Posez vos questions & devis
                    </p>
                  </div>
                </Link>

                <Link
                  to="/contact"
                  hash="partenaire"
                  onClick={() => setContactDropdownOpen(false)}
                  className="flex items-start gap-3 rounded-xl p-3 text-slate-ink transition-colors hover:bg-slate-50 hover:text-gold"
                >
                  <div className="mt-0.5 rounded-lg bg-obsidian p-2 text-gold">
                    <Handshake className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      Devenir partenaire
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Synergies & opportunités BTP
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            hash="contact-form"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-obsidian shadow-[0_10px_30px_-10px_oklch(0.86_0.16_95/0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_oklch(0.86_0.16_95/0.7)] whitespace-nowrap md:inline-flex"
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
                className="rounded-full px-4 py-2 text-sm font-medium hover:bg-secondary"
                activeProps={{
                  className: "rounded-full bg-gold px-4 py-2 font-semibold text-obsidian",
                }}
              >
                {l.label}
              </Link>
            ))}

            {/* Mobile L'Entreprise Links */}
            <div className="my-1 border-t border-border/60 pt-2">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                L'Entreprise
              </p>
              <Link
                to="/a-propos"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-ink hover:bg-secondary"
                activeProps={{ className: "bg-gold/20 font-semibold text-obsidian" }}
              >
                <Info className="h-4 w-4 text-gold" />
                <span>À Propos</span>
              </Link>
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-ink hover:bg-secondary"
                activeProps={{ className: "bg-gold/20 font-semibold text-obsidian" }}
              >
                <Newspaper className="h-4 w-4 text-gold" />
                <span>Blog & Actualités</span>
              </Link>
            </div>

            {/* Mobile Engagement Solidaire */}
            <Link
              to="/engagement-solidaire"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-ink hover:bg-secondary"
              activeProps={{ className: "bg-gold font-semibold text-obsidian" }}
            >
              <Heart
                className={`h-4 w-4 ${
                  currentPath === "/engagement-solidaire"
                    ? "fill-obsidian text-obsidian"
                    : "text-gold"
                }`}
              />
              <span>Engagement Solidaire</span>
            </Link>

            {/* Mobile Contact & Partenaire Links */}
            <div className="my-1 border-t border-border/60 pt-2">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Contact & Partenariat
              </p>
              <Link
                to="/contact"
                hash="contact-form"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-ink hover:bg-secondary"
                activeProps={{ className: "bg-gold/20 font-semibold text-obsidian" }}
              >
                <Mail className="h-4 w-4 text-gold" />
                <span>Contactez-nous</span>
              </Link>
              <Link
                to="/contact"
                hash="partenaire"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-ink hover:bg-secondary"
              >
                <Handshake className="h-4 w-4 text-gold" />
                <span>Devenir partenaire</span>
              </Link>
            </div>

            <Link
              to="/contact"
              hash="contact-form"
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