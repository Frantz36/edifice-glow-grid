import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Quote,
  Briefcase,
  Award,
  Users,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import {
  SERVICES,
  REFERENCES,
  POSTS,
  PARTNERS,
  CEO_IMAGE,
  HERO_IMAGE,
} from "@/components/site/data";

export const Route = createFileRoute("/")({
  component: Index,
});

// Petit composant pour l'animation de comptage progressif
const CountUp = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500; // 1.5 seconde
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = numericValue / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  {
    number: "16+",
    label: "Années d'expérience",
    icon: Award,
  },
  {
    number: "120+",
    label: "Projets livrés",
    icon: Briefcase,
  },
  {
    number: "80+",
    label: "Collaborateurs dédiés",
    icon: Users,
  },
];

function Index() {
  const ceoRef = useRef<HTMLElement>(null);
  const [ceoParallax, setCeoParallax] = useState(0);

  const newsRef = useRef<HTMLElement>(null);
  const [newsParallax, setNewsParallax] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (ceoRef.current) {
        const rect = ceoRef.current.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const offsetFromCenter = rect.top + rect.height / 2 - winHeight / 2;
        const maxOffset = 50;
        const speed = 0.15;
        const clampedY = Math.max(-maxOffset, Math.min(maxOffset, offsetFromCenter * speed));
        setCeoParallax(clampedY);
      }

      if (newsRef.current) {
        const rect = newsRef.current.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const offsetFromCenter = rect.top + rect.height / 2 - winHeight / 2;
        const maxOffset = 50;
        const speed = 0.15;
        const clampedY = Math.max(-maxOffset, Math.min(maxOffset, offsetFromCenter * speed));
        setNewsParallax(clampedY);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-obsidian">
        <img
          src={HERO_IMAGE}
          alt="Architecture moderne"
          className="absolute inset-0 h-full w-full object-cover opacity-100 animate-hero-zoom"
        />
        {/* Voile noir léger 20% */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-32 pb-24 md:pt-44 md:pb-36 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold backdrop-blur-sm">
              BTP · Maintenance · Patrimoine
            </p>
            <h1 className="font-display text-3xl font-bold leading-[1.18] text-white sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] drop-shadow-lg">
              Bâtir avec rigueur, équiper avec exigence, entretenir avec passion, <span className="text-gradient-gold">rénover avec excellence</span> et s'engager avec le cœur.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-white/95 leading-relaxed drop-shadow">
              Nous sommes l'une des pièces maîtresse de vos projets, l'alliance parfaite de l'expertise BTP, du matos de pointe et de l'engagement humain au service de vos investissements.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sl font-semibold text-obsidian shadow-[0_20px_40px_-12px_oklch(0.86_0.16_95/0.6)] transition-all hover:-translate-y-0.5"
              >
                Découvrir nos services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative w-full max-w-lg rounded-3xl border border-gold/25 bg-white/5 p-8 backdrop-blur-xl md:p-10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-obsidian shadow-md">
                Depuis 2010
              </div>
              <div className="grid grid-cols-2 gap-8 pt-4">
                {[
                  ["15+", "Années d'expérience"],
                  ["120+", "Projets livrés"],
                  ["80+", "Collaborateurs"],
                  ["100%", "Engagement qualité"],
                ].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <div className="font-display text-4xl font-bold text-gold md:text-5xl lg:text-6xl">
                      {n}
                    </div>
                    <div className="mt-2 text-xs font-medium uppercase tracking-widest text-white/70 md:text-sm">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section ref={ceoRef} className="relative overflow-hidden py-24 bg-background text-obsidian">
        {/* PARALLAX BACKGROUND */}
        <div
          className="absolute -top-24 -bottom-24 left-0 right-0 pointer-events-none will-change-transform bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('/pics/marbre-or-2.jpg')`,
            backgroundSize: "100% auto",
            transform: `translate3d(0, ${ceoParallax}px, 0)`,
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={CEO_IMAGE}
                alt="Mme Virginie Hanna FADIMATOU, Directrice Générale"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-obsidian/85 backdrop-blur-md p-4 border border-gold/30 shadow-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-obsidian">
                  Directrice Générale
                </div>
                <p className="mt-1 font-display text-lg font-bold text-white">
                  Mme Virginie Hanna FADIMATOU
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
              Message de la Direction
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-obsidian md:text-5xl">
              Une vision. Un héritage. Un engagement.
            </h2>
            <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] p-8 text-obsidian shadow-2xl md:p-10">
              {/* Reflet ambré chaud */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/2 bg-gradient-to-r from-transparent via-[#ffe89c]/40 to-transparent" />

              <div className="relative">
                <Quote className="h-10 w-10 text-obsidian/80" />
                <p className="mt-4 text-lg font-medium leading-relaxed text-obsidian">
                  Chez 2HNOUR SARL, nous sommes
                  profondément convaincus que chaque infrastructure
                  représente bien plus qu'un simple assemblage
                  de matériaux:
                  ELLE INCARNE UNE VISION,
                  PORTE UNE AMBITION ET OUVRE LA VOIE
                  AU DÉVELOPPEMENT DURABLE.
                  Construire est une responsabilité.
                  Préserver et transmettre en est notre engagement.
                  C'est ainsi que nous bâtissons, aujourd'hui,
                  l'héritage de demain.
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-obsidian/20 pt-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-obsidian/60 to-transparent" />
                  <p className="text-sm font-bold text-obsidian">
                    Mme Virginie Hanna FADIMATOU
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] py-24 text-obsidian shadow-2xl">
        {/* Reflet ambré chaud sur toute la section */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/3 bg-gradient-to-r from-transparent via-[#ffe89c]/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-gold/30 bg-obsidian px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold shadow-md">
                Nos Expertises
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-obsidian md:text-5xl">
                Cinq piliers, un savoir-faire intégré.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-obsidian transition-colors hover:text-obsidian/80"
            >
              Explorer tous les services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services"
                className="group relative block overflow-hidden rounded-2xl border border-gold/30 bg-obsidian p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-br hover:from-[#ffe89c] hover:via-[#e5b539] hover:to-[#b87a14] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-gold/40 bg-gold/10 text-gold transition-all duration-300 group-hover:border-transparent group-hover:bg-obsidian group-hover:text-gold group-hover:shadow-md">
                  <s.icon className="h-6 w-6 transition-all duration-300 group-hover:fill-gold group-hover:text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-gold transition-colors duration-300 group-hover:text-obsidian">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-gold/80 transition-colors duration-300 group-hover:text-obsidian/90">
                  {s.short}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold opacity-90 transition-all duration-300 group-hover:text-obsidian group-hover:opacity-100 group-hover:translate-x-1">
                  En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
              Références Institutionnelles
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              Des institutions de premier plan nous accordent leur confiance.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REFERENCES.map((r) => (
              <article
                key={r.name}
                className="group overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold leading-snug">
                    {r.name}
                  </h3>
                  <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {r.mission}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-16 w-full overflow-hidden bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] py-16 text-obsidian shadow-2xl md:py-20">
          {/* Reflet ambré chaud équilibré au centre */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/3 bg-gradient-to-r from-transparent via-[#ffe89c]/40 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="inline-flex items-center rounded-full border border-gold/30 bg-obsidian px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold shadow-md">
                Chiffres Clés
              </span>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-obsidian md:text-4xl">
                Un engagement mesurable au service de l'excellence.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {stats.map(({ number, label, icon: Icon }) => (
                <div
                  key={label}
                  className="group relative flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-obsidian p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-br hover:from-[#ffe89c] hover:via-[#e5b539] hover:to-[#b87a14] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                >
                  {/* Icône contextuelle dans un badge sombre avec accents or */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold transition-all duration-300 group-hover:border-transparent group-hover:bg-obsidian group-hover:text-gold group-hover:shadow-md">
                    <Icon className="h-6 w-6 transition-all duration-300 group-hover:fill-gold group-hover:text-gold" />
                  </div>

                  {/* Chiffre animé */}
                  <div className="font-display text-4xl font-extrabold text-gold transition-colors duration-300 group-hover:text-obsidian md:text-5xl">
                    <CountUp value={number} />
                  </div>

                  {/* Libellé en or clair / doré */}
                  <div className="mt-3 text-xs font-bold uppercase tracking-widest text-gold/90 transition-colors duration-300 group-hover:text-obsidian/90">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WRAPPER FOR ACTUALITES -> CTA WITH PARALLAX */}
      <section ref={newsRef} className="relative overflow-hidden bg-background text-obsidian">
        {/* PARALLAX BACKGROUND */}
        <div
          className="absolute -top-24 -bottom-24 left-0 right-0 pointer-events-none will-change-transform bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('/pics/marbre-or-2.jpg')`,
            backgroundSize: "100% auto",
            transform: `translate3d(0, ${newsParallax}px, 0)`,
          }}
        />

        {/* BLOG */}
        <div className="relative py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
                  Actualités
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
                  Dernières publications.
                </h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-gold"
              >
                Tous les articles <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {POSTS.map((p) => (
                <article
                  key={p.slug}
                  className="group overflow-hidden rounded-2xl border border-border bg-white"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-obsidian">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {p.date}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-gold">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {p.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* PARTNERS */}
        <div className="relative bg-background py-20 pb-30 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
              Nos Partenaires
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              Ils nous font confiance
            </h2>
          </div>

          <div className="relative mt-14 w-full overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

            <div className="animate-marquee flex items-center gap-28">
              {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex shrink-0 flex-col items-center justify-center text-center"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-28 w-auto object-contain"
                  />
                  <p className="mt-6 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="relative py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] p-10 text-obsidian shadow-2xl md:p-16">
              {/* Reflet ambré chaud */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/3 bg-gradient-to-r from-transparent via-[#ffe89c]/40 to-transparent" />

              <div className="relative max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-gold/30 bg-obsidian px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold shadow-md">
                  Parlons de votre projet
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-obsidian md:text-5xl">
                  Un projet de construction, réhabilitation ou maintenance ?
                </h2>
                <p className="mt-4 text-lg font-medium text-obsidian/90">
                  Nos équipes vous accompagnent, de l'étude initiale à la
                  livraison, avec exigence et transparence.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-obsidian px-6 py-3.5 text-sm font-bold text-gold shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-obsidian"
                >
                  Obtenir une étude de votre projet <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
