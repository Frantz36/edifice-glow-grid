import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import {
  SERVICES,
  REFERENCES,
  POSTS,
  CEO_IMAGE,
  HERO_IMAGE,
} from "@/components/site/data";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-obsidian-marble">
        <img
          src={HERO_IMAGE}
          alt="Architecture moderne"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian/85 via-obsidian/70 to-obsidian/95" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-28 md:py-40 lg:grid-cols-[1.3fr_1fr]">
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
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-obsidian shadow-[0_20px_40px_-12px_oklch(0.78_0.13_85/0.6)] transition-all hover:-translate-y-0.5"
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
          <div className="hidden lg:block">
            <div className="relative rounded-2xl border border-gold/20 bg-white/5 p-6 backdrop-blur-xl">
              <div className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-obsidian">
                Depuis 2010
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  ["15+", "Années d'expérience"],
                  ["120+", "Projets livrés"],
                  ["80+", "Collaborateurs"],
                  ["100%", "Engagement qualité"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-4xl font-bold text-gold">
                      {n}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-white/60">
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
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Nos Expertises
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
                Huit piliers, un savoir-faire intégré.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-obsidian hover:text-gold"
            >
              Explorer tous les services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article
                key={s.slug}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-20px_oklch(0.78_0.13_85/0.4)]"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-obsidian text-gold transition-colors group-hover:bg-gold group-hover:text-obsidian">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
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

          <div className="mt-16 grid gap-6 rounded-3xl bg-obsidian-marble p-10 text-white md:grid-cols-3 md:p-14">
            {[
              ["15+", "Années d'expérience"],
              ["120+", "Projets livrés"],
              ["80+", "Collaborateurs dédiés"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-5xl font-bold text-gold md:text-6xl">
                  {n}
                </div>
                <div className="mt-2 text-sm uppercase tracking-widest text-white/60">
                  {l}
                </div>
              </div>
            ))}
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
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-obsidian shadow-[0_20px_40px_-12px_oklch(0.78_0.13_85/0.6)] transition-all hover:-translate-y-0.5"
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
