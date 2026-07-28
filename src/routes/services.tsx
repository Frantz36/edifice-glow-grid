import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Hammer,
  Wrench,
  SprayCan,
  Bug,
  Trees,
  Paintbrush,
  Landmark,
  ShieldCheck,
  Handshake,
  Award,
  Download,
} from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SERVICES } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos Services & Expertises — 2HNOUR SARL" },
      {
        name: "description",
        content:
          "Bâtir, sublimer et pérenniser vos infrastructures d'exception. Découvrez nos 8 expertises BTP, Facility Management et Finitions de prestige.",
      },
      { property: "og:title", content: "Nos Services & Expertises — 2HNOUR SARL" },
      {
        property: "og:description",
        content:
          "L'alliance du savoir-faire BTP, du Facility Management rigoureux et de l'aménagement de prestige.",
      },
    ],
  }),
  component: ServicesPage,
});

// Mapping explicit details for each service matching service-page.md
const DETAILED_SERVICES = [
  {
    id: "construction",
    kicker: "01 / PÔLE CONSTRUCTION",
    title: "Construction — Réalisation d'ouvrages aux plus hauts standards",
    description:
      "Réalisation d'ouvrages aux plus hauts standards de qualité, sécurité et performance. Nous assurons le respect strict des normes techniques, des délais contractuels et des exigences de nos partenaires.",
    features: [
      "Bâtiments administratifs",
      "Immeubles résidentiels et commerciaux",
      "Établissements scolaires et universitaires",
      "Centres de santé",
      "Ouvrages industriels, entrepôts & plateformes logistiques",
      "Ouvrages annexes et infrastructures diverses",
    ],
    tags: ["Bâtiments Administratifs", "Résidentiel & Commercial", "Scolaire & Santé", "Industriel & Logistique", "Normes BTP"],
    image: SERVICES.find((s) => s.slug === "construction")?.image || "",
    icon: Building2,
    anchorLabel: "Construction",
  },
  {
    id: "rehabilitation",
    kicker: "02 / PÔLE RÉHABILITATION",
    title: "Réhabilitation & Rénovation — Redonner vie aux ouvrages existants",
    description:
      "Redonner vie aux ouvrages existants et optimiser leur valeur patrimoniale. Notre objectif est d'améliorer la fonctionnalité et l'esthétique tout en réduisant les coûts liés au vieillissement.",
    features: [
      "Réhabilitation complète de bâtiments",
      "Travaux de rénovation intérieure et extérieure",
      "Réfection des façades & réaménagement des espaces",
      "Renforcement des structures",
      "Modernisation des installations techniques",
      "Traitement des pathologies des bâtiments",
    ],
    tags: ["Réhabilitation globale", "Rénovation Intérieure/Extérieure", "Réfection Façades", "Renforcement Structure", "Modernisation Technique"],
    image: SERVICES.find((s) => s.slug === "rehabilitation")?.image || "",
    icon: Hammer,
    anchorLabel: "Réhabilitation & Rénovation",
  },
  {
    id: "maintenance",
    kicker: "03 / PÔLE MAINTENANCE & INFRASTRUCTURES",
    title: "Entretien & Maintenance des Infrastructures — Pérennisation du bâtiment",
    description:
      "Pérennisation et continuité opérationnelle du bâtiment. Nous garantissons le bon fonctionnement continu et l'allongement de la durée de vie de vos actifs immobiliers.",
    features: [
      "Maintenance préventive, corrective et curative des bâtiments",
      "Entretien des parties communes & suivi de l'état des infrastructures",
      "Maintenance des équipements techniques & maintenance programmée",
      "Réparations diverses & petits travaux de réfection",
      "Nettoyage et entretien régulier",
    ],
    tags: ["Maintenance Préventive/Curative", "Entretien Parties Communes", "Équipements Techniques", "Petits Travaux", "Continuité Opérationnelle"],
    image: SERVICES.find((s) => s.slug === "maintenance")?.image || "",
    icon: Wrench,
    anchorLabel: "Entretien & Maintenance",
  },
  {
    id: "nettoyage",
    kicker: "04 / PÔLE HYGIÈNE & PROPRETÉ",
    title: "Nettoyage Professionnel & Hygiène — Conformité aux normes les plus exigeantes",
    description:
      "Prestations de propreté et d'hygiène conformes aux normes les plus exigeantes pour les environnements administratifs, industriels, commerciaux et résidentiels.",
    features: [
      "Nettoyage quotidien des bâtiments, industriel & de fin de chantier",
      "Lavage des vitres et façades vitrées",
      "Nettoyage des surfaces sensibles, décapage et traitement des sols",
      "Cristallisation et rénovation des revêtements",
      "Gestion des déchets & désinfection des locaux",
      "Entretien des espaces communs",
    ],
    tags: ["Nettoyage Industriel", "Fin de Chantier", "Lavage Vitres & Façades", "Traitement des Sols", "Gestion Déchets"],
    image: SERVICES.find((s) => s.slug === "nettoyage")?.image || "",
    icon: SprayCan,
    anchorLabel: "Nettoyage & Hygiène",
  },
  {
    id: "3d",
    kicker: "05 / PÔLE SALUBRITÉ & NUISIBLES",
    title: "Désinfection, Désinsectisation & Dératisation (3D) — Lutte anti-nuisibles",
    description:
      "Solutions professionnelles de lutte contre les nuisibles avec respect strict des réglementations en vigueur, de la sécurité des occupants et des exigences environnementales.",
    features: [
      "Désinfection sanitaire",
      "Désinsectisation (rampants, volants, termites)",
      "Dératisation et contrôle des rongeurs",
      "Traitements préventifs et curatifs",
      "Plans de suivi et de contrôle (interventions ponctuelles ou sous contrat)",
    ],
    tags: ["Désinfection Sanitaire", "Désinsectisation", "Dératisation", "Traitements Préventifs/Curatifs", "Contrats de Suivi"],
    image: SERVICES.find((s) => s.slug === "3d")?.image || "",
    icon: Bug,
    anchorLabel: "Prestations 3D",
  },
  {
    id: "paysager",
    kicker: "06 / PÔLE ESPACES VERTS",
    title: "Aménagement Paysager & Entretien — Création de la signature végétale",
    description:
      "Création et entretien de la signature végétale extérieure pour valoriser l'image de marque de votre organisation à travers ses abords extérieurs.",
    features: [
      "Création d'espaces paysagers & entretien des jardins",
      "Taille des haies et arbustes, élagage, débroussaillage",
      "Tonte des pelouses, arrosage et fertilisation",
      "Nettoyage des espaces extérieurs",
    ],
    tags: ["Création Paysagère", "Entretien Jardins", "Taille & Élagage", "Tonte & Arrosage", "Image de Marque"],
    image: SERVICES.find((s) => s.slug === "paysager")?.image || "",
    icon: Trees,
    anchorLabel: "Aménagement Paysager",
  },
  {
    id: "finition",
    kicker: "07 / PÔLE FINITION & EMBELLISSEMENT",
    title: "Travaux de Finition & Embellissement — Confort & valorisation sur-mesure",
    description:
      "Valorisation durable et amélioration du confort des bâtiments grâce à des travaux d'aménagement intérieur et d'embellissement sur-mesure.",
    features: [
      "Peinture intérieure et extérieure",
      "Revêtements muraux et revêtements de sols",
      "Faux plafonds, menuiserie, serrurerie",
      "Plomberie & électricité bâtiment",
      "Travaux de décoration et d'embellissement sur-mesure",
    ],
    tags: ["Peinture Intérieure/Extérieure", "Revêtements Sols/Murs", "Faux Plafonds & Menuiserie", "Plomberie & Électricité", "Décoration Sur-Mesure"],
    image: SERVICES.find((s) => s.slug === "finition")?.image || "",
    icon: Paintbrush,
    anchorLabel: "Finition & Embellissement",
  },
  {
    id: "patrimoine",
    kicker: "08 / PÔLE GESTION DU PATRIMOINE",
    title: "Gestion Durable du Patrimoine Immobilier — Conseil & accompagnement",
    description:
      "Conseil stratégique et accompagnement à la valeur. Nous assurons le diagnostic complet, la planification de la maintenance et l'optimisation des coûts d'exploitation.",
    features: [
      "Diagnostic complet des infrastructures",
      "Planification des opérations d'entretien & maintenance préventive",
      "Optimisation des charges d'exploitation",
      "Valorisation du patrimoine bâti & amélioration continue des performances des ouvrages",
    ],
    tags: ["Diagnostic Infrastructures", "Planification Entretien", "Optimisation Coûts", "Valorisation Patrimoine", "Performance Ouvrages"],
    image: SERVICES.find((s) => s.slug === "patrimoine")?.image || "",
    icon: Landmark,
    anchorLabel: "Gestion du Patrimoine",
  },
];

function ServicesPage() {
  const [activeAnchor, setActiveAnchor] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const service of DETAILED_SERVICES) {
        const el = document.getElementById(service.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveAnchor(service.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="Expertises Intégrées BTP & Facility Management"
        title="Bâtir, Sublimer et Pérenniser Vos Infrastructures d'Exception"
        subtitle="L'alliance du savoir-faire BTP, du Facility Management rigoureux et de l'aménagement de prestige."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
      />

      {/* 2. STICKY ANCHOR BAR */}
      <div className="sticky top-[72px] z-30 border-y border-border/80 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-3 scrollbar-none">
          <div className="flex items-center gap-2 whitespace-nowrap">
            {DETAILED_SERVICES.map((s) => {
              const isActive = activeAnchor === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-obsidian text-gold font-semibold shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-gold/20 hover:text-obsidian"
                  }`}
                >
                  {s.anchorLabel}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN SERVICES LIST - ALTERNATING CARDS */}
      <div className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          
          {/* PÔLE 1 HEADER */}
          <div className="border-b border-border pb-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Pôle 1 — BTP & Restructuration
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-slate-ink md:text-4xl">
              Construction & Rénovation de Bâtiments
            </h2>
          </div>

          {/* SERVICES 01, 02 */}
          {[DETAILED_SERVICES[0], DETAILED_SERVICES[1]].map((service, index) => (
            <ServiceCardBlock key={service.id} service={service} isEven={index % 2 === 1} />
          ))}

          {/* PÔLE 2 HEADER */}
          <div className="border-b border-border pb-4 pt-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Pôle 2 — Facility Management & Salubrité
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-slate-ink md:text-4xl">
              Maintenance, Hygiène, Prestations 3D & Espaces Verts
            </h2>
          </div>

          {/* SERVICES 03, 04, 05, 06 */}
          {[
            DETAILED_SERVICES[2],
            DETAILED_SERVICES[3],
            DETAILED_SERVICES[4],
            DETAILED_SERVICES[5],
          ].map((service, index) => (
            <ServiceCardBlock key={service.id} service={service} isEven={index % 2 === 1} />
          ))}

          {/* PÔLE 3 HEADER */}
          <div className="border-b border-border pb-4 pt-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Pôle 3 — Aménagement & Embellissement
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-slate-ink md:text-4xl">
              Finition & Aménagement Intérieur de Prestige
            </h2>
          </div>

          {/* SERVICE 07 */}
          <ServiceCardBlock service={DETAILED_SERVICES[6]} isEven={false} />

          {/* PÔLE 4 HEADER */}
          <div className="border-b border-border pb-4 pt-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Pôle 4 — Conseil & Stratégie
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-slate-ink md:text-4xl">
              Gestion & Valorisation du Patrimoine Immobilier
            </h2>
          </div>

          {/* SERVICE 08 */}
          <ServiceCardBlock service={DETAILED_SERVICES[7]} isEven={true} />

        </div>
      </div>

      {/* 5. SECTION TRANSVERSALE : PARTENARIATS & CO-TRAITANCE */}
      <section className="bg-obsidian-marble py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                B2B & Grands Comptes
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
                Synergies BTP, Co-traitance & Partenariats Stratégiques
              </h2>
              <p className="mt-4 text-base text-white/80 leading-relaxed">
                2HNOUR SARL s'impose comme un partenaire de confiance pour les majors du BTP, les institutions publiques et les grands comptes. Nous intervenons en sous-traitance spécialisée ou en co-traitance en apportant nos compétences expertes.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl bg-gold/15 p-2.5 text-gold shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">1. Conformité & Transparence</h4>
                    <p className="text-sm text-white/70">
                      Respect strict de la réglementation des marchés publics et privés, gouvernance claire et gestion irréprochable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl bg-gold/15 p-2.5 text-gold shrink-0">
                    <Handshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">2. Rigueur Opérationnelle</h4>
                    <p className="text-sm text-white/70">
                      Alignement strict sur les cahiers des charges les plus exigeants et engagement ferme sur les jalons de livraison.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl bg-gold/15 p-2.5 text-gold shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">3. Éthique & RSE</h4>
                    <p className="text-sm text-white/70">
                      Engagement environnemental fort, préservation de la santé au travail et sécurité absolue sur tous nos chantiers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gold/30 bg-white/5 p-8 md:p-10 backdrop-blur-md">
              <h3 className="font-display text-2xl font-bold text-gold">
                Rejoignez Notre Réseau Partenaire
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Vous préparez une réponse à un appel d'offres ou recherchez une co-traitance qualifiée au Cameroun ?
              </p>
              <div className="mt-8 space-y-4">
                <Link
                  to="/contact"
                  hash="partenaire"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-obsidian shadow-[0_20px_40px_-12px_oklch(0.86_0.16_95/0.6)] transition-all hover:-translate-y-0.5"
                >
                  Soumettre une opportunité de partenariat <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) & PRISE DE CONTACT */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-ink md:text-5xl">
            Un projet de construction, d'aménagement ou de maintenance ?
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Nos ingénieurs et experts techniques étudient vos cahiers des charges et vous accompagnent de la conception à la réalisation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              hash="contact-form"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-obsidian shadow-[0_20px_40px_-12px_oklch(0.86_0.16_95/0.6)] transition-all hover:-translate-y-0.5"
            >
              Demander une étude / Un Devis <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-sm font-semibold text-slate-ink transition-all hover:border-gold hover:text-gold"
            >
              <Download className="h-4 w-4 text-gold" /> Télécharger notre Plaquette Corporate
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

// COMPOSANT CANONIQUE POUR CHAQUE BLOC DE SERVICE
function ServiceCardBlock({
  service,
  isEven,
}: {
  service: (typeof DETAILED_SERVICES)[number];
  isEven: boolean;
}) {
  const Icon = service.icon;
  const [expanded, setExpanded] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    el.style.transition = "height 450ms cubic-bezier(0.16,1,0.3,1), opacity 300ms ease";

    if (expanded) {
      el.style.display = "block";
      const height = el.scrollHeight;
      el.style.height = "0px";
      el.style.opacity = "0";
      requestAnimationFrame(() => {
        el.style.height = height + "px";
        el.style.opacity = "1";
      });
      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName === "height") {
          el.style.height = "auto";
          el.removeEventListener("transitionend", onEnd as any);
        }
      };
      el.addEventListener("transitionend", onEnd as any);
    } else {
      const currentHeight = el.scrollHeight;
      el.style.height = currentHeight + "px";
      el.style.opacity = "1";
      requestAnimationFrame(() => {
        el.style.height = "0px";
        el.style.opacity = "0";
      });
    }
  }, [expanded]);

  // ─── Dynamic classes based on expanded state ──────────────────────────────
  const cardBg      = expanded ? "bg-obsidian border-obsidian" : "bg-white border-border hover:border-gold/50 hover:shadow-xl";
  const kickerColor = expanded ? "text-amber-400" : "text-gold";
  const titleColor  = expanded ? "text-white" : "text-slate-ink";
  const descColor   = expanded ? "text-white/70" : "text-muted-foreground";
  const featureHeadColor = expanded ? "text-white/50" : "text-slate-ink";
  const featureColor = expanded ? "text-white/80" : "text-slate-ink";
  const tagBg       = expanded ? "bg-white/10 border-white/20 text-white/70" : "bg-slate-100 border-slate-200 text-slate-700";
  const toggleColor = expanded ? "text-amber-400 hover:text-amber-300" : "text-amber-600 hover:text-amber-700";

  return (
    <article
      id={service.id}
      className={`scroll-mt-36 group rounded-3xl border shadow-sm transition-all duration-500 overflow-hidden ${cardBg} ${
        expanded ? "service-card--expanded" : ""
      }`}
    >
      {/* ── TOP SECTION (always visible) ─────────────────────────────────── */}
      <div className="p-6 md:p-10">
        <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${isEven ? "lg:grid-flow-dense" : ""}`}>
          {/* TEXTE */}
          <div className={isEven ? "lg:col-start-2" : ""}>
            <p className={`text-xs font-bold uppercase tracking-[0.25em] ${kickerColor}`}>{service.kicker}</p>

            <h3 className={`mt-3 font-display text-2xl font-bold md:text-3xl lg:text-4xl leading-tight transition-colors duration-500 ${titleColor}`}>
              {service.title}
            </h3>

            <p className={`mt-4 text-base leading-relaxed transition-colors duration-500 ${descColor}`}>{service.description}</p>

            {/* PERIMETRE ET DOMAINES */}
            <div className="mt-6">
              <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 transition-colors duration-500 ${featureHeadColor}`}>
                Périmètre d'intervention & Domaines d'application :
              </h4>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-2.5 text-xs md:text-sm transition-colors duration-500 ${featureColor}`}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TAGS & BADGES */}
            <div className="mt-6 flex flex-wrap gap-2">
              {service.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`rounded-lg px-3 py-1 text-xs font-medium border transition-colors duration-500 ${tagBg}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                hash="contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-obsidian px-5 py-2.5 text-xs font-semibold text-gold transition-all hover:bg-gold hover:text-obsidian"
              >
                Demander un devis <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <button
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${toggleColor}`}
              >
                <span>{expanded ? "Réduire l'expertise" : "Découvrir l'expertise complète"}</span>
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-90" : ""}`} />
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] ${isEven ? "lg:col-start-1" : ""}`}>
            <img
              src={service.image}
              alt={service.title}
              className={`h-full w-full object-cover transition-transform duration-700 ${
                expanded ? "scale-100" : "group-hover:scale-105"
              }`}
            />
            <div className="absolute top-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-obsidian/90 text-gold backdrop-blur-md shadow-lg border border-gold/20">
              <Icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* ── NEON SEPARATOR ───────────────────────────────────────────────── */}
      {/* Inset, 1px, constant amber-gold with a soft glow */}
      <div
        className="overflow-hidden transition-all duration-500 px-6 md:px-10"
        style={{ height: expanded ? "1px" : "0px" }}
      >
        <div
          className="h-px w-full"
          style={{
            background: "#FFD700",
            boxShadow: "0 0 6px 1px rgba(255,215,0,0.45)",
          }}
        />
      </div>

      {/* ── EXPANDED DETAIL PANEL (inside the same card) ─────────────────── */}
      <div
        ref={panelRef}
        className="w-full bg-obsidian text-white overflow-hidden"
        style={{ height: 0, opacity: 0 }}
        aria-hidden={!expanded}
      >
        <div className="mx-auto max-w-6xl p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h3 className="text-sm font-bold tracking-wider uppercase text-amber-400">
                Détails de l'Ingénierie & Rigueur Opérationnelle
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
              {(() => {
                const num = (service.kicker || "").trim().split(" ")[0] || "00";
                const short = (service.id || "").slice(0, 2).toUpperCase();
                return `SPEC-${num.replace("/", "")}-${short}`;
              })()}
            </span>
          </div>

          {/* Grid 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/40 transition-colors">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">🛠️ Méthodologie & Processus</div>
              <p className="text-xs text-gray-300 leading-relaxed">Modélisation et étude d'ensoleillement des sols, sélection rigoureuse de végétaux adaptés au microclimat local, préparation enrichie des sols et pose de réseaux d'irrigation goutte-à-goutte automatisés.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/40 transition-colors">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">📐 Normes & Conformité RSE</div>
              <p className="text-xs text-gray-300 leading-relaxed">Gestion écoresponsable de la ressource en eau, politique zéro produit phytosanitaire toxique sur les espaces fréquentés et respect des périodes de taille pour préserver la biodiversité.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/40 transition-colors">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">🏛️ Projets Cibles & Application</div>
              <p className="text-xs text-gray-300 leading-relaxed">Espaces extérieurs et parcs de sièges sociaux, résidences officielles et d'État, campus universitaires, complexes hôteliers et aménagements paysagers urbains.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/40 transition-colors">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">🚜 Parc Matériel Spécialisé</div>
              <p className="text-xs text-gray-300 leading-relaxed">Flotte de tondeuses autoportées professionnelles, taille-haies télescopiques à faible émission sonore, nacelles d'élagage sécurisées et programmateurs d'arrosage connectés.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}