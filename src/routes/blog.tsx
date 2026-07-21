import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { POSTS } from "@/components/site/data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Actualités — 2HNOUR SARL" },
      {
        name: "description",
        content:
          "Articles sur le BTP, les tendances de construction en Afrique centrale et l'actualité de 2HNOUR SARL.",
      },
      { property: "og:title", content: "Blog & Actualités — 2HNOUR SARL" },
      { property: "og:description", content: "Insights BTP et actualités corporate." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog & Actualités"
        title="Insights, tendances et actualité BTP."
        subtitle="Regards d'experts sur la construction et la maintenance en Afrique centrale."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...POSTS, ...POSTS].map((p, i) => (
              <article
                key={`${p.slug}-${i}`}
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
    </SiteLayout>
  );
}