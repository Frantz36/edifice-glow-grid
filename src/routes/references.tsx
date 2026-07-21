import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { REFERENCES } from "@/components/site/data";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "Références — 2HNOUR SARL" },
      {
        name: "description",
        content:
          "Portfolio de nos chantiers et clients institutionnels au Cameroun.",
      },
      { property: "og:title", content: "Nos Références — 2HNOUR SARL" },
      { property: "og:description", content: "Institutions et projets qui nous font confiance." },
    ],
  }),
  component: ReferencesPage,
});

const PROJECTS = [
  {
    title: "Rénovation d'un bâtiment administratif",
    client: "Premier Ministère",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Entretien technique des espaces",
    client: "MINREX",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Préservation du patrimoine bâti",
    client: "SIC",
    image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Aménagement paysager institutionnel",
    client: "Institution publique",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Finitions haut de gamme",
    client: "Résidence privée",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Maintenance multi-sites",
    client: "Administration",
    image: "https://images.unsplash.com/photo-1581092918484-8313ea4e1c7d?auto=format&fit=crop&w=1200&q=80",
  },
];

function ReferencesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Références"
        title="Ils nous font confiance."
        subtitle="Un aperçu des institutions et projets qui portent notre signature."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {REFERENCES.map((r) => (
              <article
                key={r.name}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold font-display text-lg font-bold text-obsidian">
                  ★
                </div>
                <h3 className="mt-6 font-display text-lg font-bold leading-snug">
                  {r.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{r.mission}</p>
              </article>
            ))}
          </div>

          <h2 className="mt-20 font-display text-3xl font-bold md:text-4xl">
            Réalisations récentes
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gold">
                      {p.client}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-white">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}