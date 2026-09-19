import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
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
    image: "/pics/pm.webp",
  },
  {
    title: "Entretien technique des espaces",
    client: "MINREX",
    image: "/pics/minrex.jpeg",
  },
  {
    title: "Préservation du patrimoine bâti",
    client: "SIC",
    image: "/pics/sic.jpeg",
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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
];

function ReferencesPage() {
  const { t } = useTranslation();
  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("references_page.hero_eyebrow")}
        title={t("references_page.hero_title")}
        subtitle={t("references_page.hero_subtitle")}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {REFERENCES.map((r) => (
              <article
                key={r.id || r.name}
                className="group relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] p-6 text-obsidian shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-gradient-to-br hover:from-[#ffe89c] hover:via-[#e5b539] hover:to-[#b87a14] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Reflet ambré chaud */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/2 bg-gradient-to-r from-transparent via-[#ffe89c]/30 to-transparent z-0" />
                <div className="relative z-10">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-obsidian font-display text-lg font-bold text-gold border border-obsidian/30 shadow-md">
                    ★
                  </div>
                  <h3 className="mt-6 font-display text-xl font-extrabold leading-snug text-obsidian">
                    {r.id ? t(`data.references.${r.id}.name`, { defaultValue: r.name }) : r.name}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-obsidian/90 leading-relaxed">
                    {r.id ? t(`data.references.${r.id}.mission`, { defaultValue: r.mission }) : r.mission}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <h2 className="mt-20 font-display text-3xl font-bold md:text-4xl">
            {t("references_page.recent_headline", { defaultValue: "Réalisations récentes" })}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, idx) => {
              const projectKeys = ["admin", "espaces", "patrimoine", "paysager", "finitions", "maintenance"];
              const pKey = projectKeys[idx];
              const title = pKey ? t(`data.projects_refs.${pKey}.title`, { defaultValue: p.title }) : p.title;
              const client = pKey ? t(`data.projects_refs.${pKey}.client`, { defaultValue: p.client }) : p.client;
              return (
                <article
                  key={p.title}
                  className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-obsidian shadow-sm">
                      {client}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-obsidian group-hover:text-gold transition-colors">
                      {title}
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}