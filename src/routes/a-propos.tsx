import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Shield, Leaf, HandHeart, Sparkles, Scale, Quote, ArrowRight } from "lucide-react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const [parallax, setParallax] = useState(0);

  const engagementRef = useRef<HTMLElement>(null);
  const [engagementParallax, setEngagementParallax] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const offsetFromCenter = rect.top + rect.height / 2 - winHeight / 2;
        const maxOffset = 50;
        const speed = 0.15;
        const clampedY = Math.max(-maxOffset, Math.min(maxOffset, offsetFromCenter * speed));
        setParallax(clampedY);
      }

      if (engagementRef.current) {
        const rect = engagementRef.current.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const offsetFromCenter = rect.top + rect.height / 2 - winHeight / 2;
        const maxOffset = 50;
        const speed = 0.15;
        const clampedY = Math.max(-maxOffset, Math.min(maxOffset, offsetFromCenter * speed));
        setEngagementParallax(clampedY);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Qui sommes-nous"
        title="Une signature d'excellence pour le BTP camerounais."
        subtitle="Depuis notre création, 2HNOUR SARL accompagne institutions publiques et acteurs privés dans la construction, la réhabilitation et la préservation de leur patrimoine bâti."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />

      {/* HISTOIRE & MOT DE LA DIRECTION */}
      <section ref={sectionRef} className="relative overflow-hidden py-24 bg-background text-obsidian">
        {/* PARALLAX BACKGROUND MARBRÉ */}
        <div
          className="absolute -top-24 -bottom-24 left-0 right-0 pointer-events-none will-change-transform bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('/pics/marbre-or-2.jpg')`,
            backgroundSize: "100% auto",
            transform: `translate3d(0, ${parallax}px, 0)`,
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
              Notre Histoire
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-obsidian md:text-5xl">
              Bâtir avec conviction. Servir avec constance.
            </h2>
            
            <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] p-8 text-obsidian shadow-2xl md:p-10">
              {/* Reflet ambré chaud */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/2 bg-gradient-to-r from-transparent via-[#ffe89c]/40 to-transparent" />

              <div className="relative">
                <Quote className="h-10 w-10 text-obsidian/80" />
                <div className="mt-4 space-y-4 text-base font-medium leading-relaxed text-obsidian">
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
                <div className="mt-6 flex items-center gap-3 border-t border-obsidian/20 pt-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-obsidian/60 to-transparent" />
                  <p className="text-sm font-bold text-obsidian">
                    Mme Virginie Hanna FADIMATOU
                  </p>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] py-20 text-obsidian shadow-2xl">
        {/* Reflet ambré chaud sur toute la section */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/3 bg-gradient-to-r from-transparent via-[#ffe89c]/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* HEADER DE LA SECTION */}
          <div className="mb-12 max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-obsidian px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold shadow-md">
              Vision & Ambition
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-obsidian md:text-5xl">
              Construire l'avenir avec clarté et détermination.
            </h2>
            <p className="mt-4 text-base font-medium text-obsidian/90 leading-relaxed max-w-2xl">
              Notre vision et notre mission guident chacune de nos décisions et chacun de nos chantiers pour ériger des infrastructures modernes, durables et à fort impact pour le Cameroun.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-gold/30 bg-obsidian p-10 shadow-2xl">
              <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md">
                Notre Vision
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-gold">
                Devenir la référence du BTP intégré en Afrique centrale.
              </h3>
              <p className="mt-6 text-gold/85 leading-relaxed font-normal">
                Nous ambitionnons de porter les standards les plus élevés de
                construction, de maintenance et de gestion patrimoniale, en
                cultivant la fierté d'un travail bien fait et transmis.
              </p>
            </div>
            <div className="rounded-3xl border border-gold/30 bg-obsidian p-10 shadow-2xl">
              <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md">
                Notre Mission
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-gold">
                Offrir un service complet, cohérent et responsable.
              </h3>
              <p className="mt-6 text-gold/85 leading-relaxed font-normal">
                De la conception à la maintenance, nous accompagnons chaque
                projet avec un engagement sans faille en matière de qualité,
                sécurité, éthique et respect de l'environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
              Nos Valeurs
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold md:text-4xl text-obsidian">
              Les principes qui forgent notre identité
            </h3>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.name}
                className="group relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] p-6 text-obsidian shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-gradient-to-br hover:from-[#ffe89c] hover:via-[#e5b539] hover:to-[#b87a14] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Reflet ambré chaud */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/2 bg-gradient-to-r from-transparent via-[#ffe89c]/30 to-transparent z-0" />
                <div className="relative z-10">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-obsidian text-gold border border-obsidian/30 shadow-md">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-extrabold text-obsidian leading-snug">
                    {v.name}
                  </h4>
                  <p className="mt-2 text-sm font-medium text-obsidian/90 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT SOLIDAIRE */}
      <section ref={engagementRef} className="relative overflow-hidden py-24 bg-background text-obsidian">
        {/* PARALLAX BACKGROUND MARBRÉ */}
        <div
          className="absolute -top-24 -bottom-24 left-0 right-0 pointer-events-none will-change-transform bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('/pics/marbre-or-2.jpg')`,
            backgroundSize: "100% auto",
            transform: `translate3d(0, ${engagementParallax}px, 0)`,
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
              <HandHeart className="h-3.5 w-3.5 text-obsidian" />
              Engagement Solidaire
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-obsidian md:text-5xl">
              Bâtir des édifices, soutenir des vies.
            </h2>
            <p className="mt-6 text-base text-slate-700 leading-relaxed font-normal">
              Au-delà de la construction et de l'ingénierie, 2HNOUR SARL s'investit
              concrètement auprès des populations locales : réhabilitation d'écoles,
              accès à l'eau potable, électrification d'orphelinats et insertion des jeunes talents camerounais.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/engagement-solidaire"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-obsidian shadow-[0_20px_40px_-12px_oklch(0.86_0.16_95/0.6)] transition-all hover:-translate-y-0.5 hover:bg-gold/90"
              >
                Découvrir nos actions solidaires <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
                alt="Engagement solidaire 2HNOUR"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-full bg-obsidian/85 px-4 py-1.5 text-xs font-bold text-gold backdrop-blur-md border border-gold/30 shadow-md">
                Impact Social & Communautaire
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}