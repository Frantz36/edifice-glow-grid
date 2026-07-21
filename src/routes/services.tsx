import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SERVICES } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — 2HNOUR SARL" },
      {
        name: "description",
        content:
          "Construction, réhabilitation, maintenance, nettoyage, 3D, aménagement paysager, finitions et gestion du patrimoine.",
      },
      { property: "og:title", content: "Nos Services — 2HNOUR SARL" },
      {
        property: "og:description",
        content: "Huit expertises intégrées au service de votre patrimoine bâti.",
      },
    ],
  }),
  component: ServicesPage,
});

const CATEGORIES = [
  "Tous",
  "Construction",
  "Maintenance",
  "Hygiène",
  "Aménagement",
  "Finitions",
] as const;

function categoryOf(slug: string) {
  if (["construction", "rehabilitation"].includes(slug)) return "Construction";
  if (["maintenance", "patrimoine"].includes(slug)) return "Maintenance";
  if (["nettoyage", "3d"].includes(slug)) return "Hygiène";
  if (slug === "paysager") return "Aménagement";
  return "Finitions";
}

function ServicesPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Tous");
  const visible = SERVICES.filter(
    (s) => cat === "Tous" || categoryOf(s.slug) === cat,
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nos Services"
        title="Un savoir-faire complet, de la construction à la préservation."
        subtitle="Huit expertises intégrées, exécutées par des équipes qualifiées et coordonnées."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  cat === c
                    ? "border-gold bg-gold text-obsidian"
                    : "border-border bg-white text-slate-ink hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {visible.map((s) => (
              <article
                key={s.slug}
                className="group overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-20px_oklch(0.78_0.13_85/0.4)]"
              >
                <div className="grid md:grid-cols-[1fr_1.2fr]">
                  <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-obsidian text-gold">
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gold">
                      {categoryOf(s.slug)}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {s.desc}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-obsidian hover:text-gold"
                    >
                      Demander un devis <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian-marble py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Matériaux d'intérieur
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Marbre, laiton, granit, bois — l'art des finitions.
          </h2>
          <p className="mt-6 text-white/70">
            Notre pôle finition sélectionne les matériaux les plus nobles pour
            transformer vos espaces en véritables signatures architecturales.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}