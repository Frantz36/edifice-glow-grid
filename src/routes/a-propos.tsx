import { createFileRoute } from "@tanstack/react-router";
import { Award, Shield, Leaf, HandHeart, Sparkles, Scale } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CEO_IMAGE } from "@/components/site/data";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À Propos — 2HNOUR SARL" },
      {
        name: "description",
        content:
          "Notre histoire, notre vision et nos valeurs — Excellence, Intégrité, Responsabilité, Sécurité, Durabilité.",
      },
      { property: "og:title", content: "À Propos — 2HNOUR SARL" },
      {
        property: "og:description",
        content: "Histoire, vision, mission et valeurs de 2HNOUR SARL.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Award, name: "Excellence", desc: "Une exigence de qualité à chaque étape de nos interventions." },
  { icon: Scale, name: "Intégrité", desc: "Transparence et éthique dans toutes nos relations." },
  { icon: HandHeart, name: "Responsabilité", desc: "Engagement social et respect des communautés." },
  { icon: Shield, name: "Sécurité", desc: "Protection stricte des personnes et des biens." },
  { icon: Leaf, name: "Durabilité", desc: "Solutions pensées pour les générations futures." },
  { icon: Sparkles, name: "Innovation", desc: "Matériaux, méthodes et technologies d'avant-garde." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Qui sommes-nous"
        title="Une signature d'excellence pour le BTP camerounais."
        subtitle="Depuis notre création, 2HNOUR SARL accompagne institutions publiques et acteurs privés dans la construction, la réhabilitation et la préservation de leur patrimoine bâti."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Notre Histoire
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Bâtir avec conviction. Servir avec constance.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Fondée à Yaoundé, 2HNOUR SARL s'est imposée comme un partenaire
                de référence pour les administrations publiques, les institutions
                et les acteurs privés en quête d'un savoir-faire intégré en BTP.
              </p>
              <p>
                Sous l'impulsion de sa Directrice Générale, Mme Virginie Hanna
                FADIMATOU, notre entreprise réunit ingénieurs, techniciens et
                artisans autour d'une même exigence : livrer des ouvrages
                durables, esthétiques et parfaitement entretenus.
              </p>
              <p>
                Nous croyons qu'une infrastructure bien conçue et bien
                entretenue est un levier de développement — pour ses usagers,
                pour la nation et pour l'environnement.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/20 to-transparent blur-2xl" />
            <img
              src={CEO_IMAGE}
              alt="Directrice Générale"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-obsidian-marble p-10 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Notre Vision
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold">
                Devenir la référence du BTP intégré en Afrique centrale.
              </h3>
              <p className="mt-6 text-white/70">
                Nous ambitionnons de porter les standards les plus élevés de
                construction, de maintenance et de gestion patrimoniale, en
                cultivant la fierté d'un travail bien fait et transmis.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Notre Mission
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold">
                Offrir un service complet, cohérent et responsable.
              </h3>
              <p className="mt-6 text-muted-foreground">
                De la conception à la maintenance, nous accompagnons chaque
                projet avec un engagement sans faille en matière de qualité,
                sécurité, éthique et respect de l'environnement.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Nos valeurs
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((v) => (
                <div
                  key={v.name}
                  className="rounded-2xl border border-border bg-white p-6 transition-colors hover:border-gold"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-obsidian text-gold">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-bold">{v.name}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Engagement Citoyen
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Une entreprise, un territoire, une responsabilité.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Nous nous engageons pour l'inclusion sociale, la formation des
              jeunes talents locaux et la préservation de l'environnement à
              travers des chantiers propres et une gestion sobre des ressources.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
            alt="Engagement environnemental"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>
      </section>
    </SiteLayout>
  );
}