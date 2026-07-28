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
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-obsidian-marble">
        <img
          src={HERO_IMAGE}
          alt="Architecture moderne"
          className="absolute inset-0 h-full w-full object-cover opacity-50 animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian/70 via-obsidian/55 to-obsidian/80" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-28 md:py-40 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              BTP · Maintenance · Patrimoine
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Bâtir l'avenir.
              <br />
              <span className="text-gradient-gold">Préserver</span> le patrimoine.
              <br />
              Servir durablement.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-white/70">
              Partenaire de confiance en BTP, réhabilitation, maintenance
              d'infrastructures et aménagement au Cameroun.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-obsidian shadow-[0_20px_40px_-12px_oklch(0.86_0.16_95/0.6)] transition-all hover:-translate-y-0.5"
              >
                Découvrir nos services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/references"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Nos Références
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
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={CEO_IMAGE}
                alt="Mme Virginie Hanna FADIMATOU, Directrice Générale"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian to-transparent p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-obsidian">
                  Directrice Générale
                </div>
                <p className="mt-2 font-display text-xl font-bold text-white">
                  Mme Virginie Hanna FADIMATOU
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Message de la Direction
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              Une vision. Un héritage. Un engagement.
            </h2>
            <div className="relative mt-8 rounded-2xl bg-obsidian-marble p-8 text-white md:p-10">
              <Quote className="h-10 w-10 text-gold" />
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Chez 2HNOUR SARL, nous sommes convaincus que chaque
                infrastructure représente bien plus qu'un simple assemblage de
                matériaux : elle est le reflet d'une vision et un levier de
                développement. Construire est une chose, mais préserver et
                transmettre en est une autre.
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="h-px flex-1 bg-gradient-to-r from-gold to-transparent" />
                <p className="text-sm font-semibold text-gold">
                  Mme Virginie Hanna FADIMATOU
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-obsidian py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Nos Expertises
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
                Huit piliers, un savoir-faire intégré.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold"
            >
              Explorer tous les services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:bg-white/[0.07] hover:shadow-[0_20px_40px_-15px_oklch(0.86_0.16_95/0.2)] block"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-obsidian text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-obsidian">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-gold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {s.short}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Références Institutionnelles
            </p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
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

        <div className="mt-16 w-full bg-obsidian-marble py-16 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Chiffres Clés
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-4xl">
                Un engagement mesurable au service de l'excellence.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {stats.map(({ number, label, icon: Icon }) => (
                <div
                  key={label}
                  className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                >
                  {/* Icône contextuelle dans un badge */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold/20">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Chiffre animé */}
                  <div className="font-display text-4xl font-bold text-gold md:text-5xl">
                    <CountUp value={number} />
                  </div>

                  {/* Libellé plus lisible */}
                  <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/80 transition-colors group-hover:text-white">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Actualités
              </p>
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
      </section>

      {/* PARTNERS */}
      <section className="overflow-hidden bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Nos Partenaires
          </p>
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
      </section>

      {/* FINAL CTA */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-obsidian-marble p-10 text-white md:p-16">
            <img
              src="https://images.unsplash.com/photo-1519883789178-9082d5f4a7e5?auto=format&fit=crop&w=1600&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-transparent" />
            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Parlons de votre projet
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
                Un projet de construction, réhabilitation ou maintenance ?
              </h2>
              <p className="mt-4 text-white/70">
                Nos équipes vous accompagnent, de l'étude initiale à la
                livraison, avec exigence et transparence.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-obsidian shadow-[0_20px_40px_-12px_oklch(0.86_0.16_95/0.6)] transition-all hover:-translate-y-0.5"
              >
                Obtenir une étude de votre projet <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
