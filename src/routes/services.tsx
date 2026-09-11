import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Hammer,
  Wrench,
  Settings2,
  Handshake,
  ShieldCheck,
  Award,
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
          "Bâtir, Équiper, Entretenir, Rénover, S'engager — Découvrez les 5 piliers d'expertise de 2HNOUR SARL au service de vos infrastructures.",
      },
      { property: "og:title", content: "Nos Services & Expertises — 2HNOUR SARL" },
      {
        property: "og:description",
        content:
          "Cinq piliers stratégiques : construction, aménagement, gestion des installations, réhabilitation et engagement durable.",
      },
    ],
  }),
  component: ServicesPage,
});

// 5 piliers stratégiques alignés sur les mots-clés du titre : Bâtir, Équiper, Entretenir, Rénover, S'engager
const DETAILED_SERVICES = [
  {
    id: "batir",
    kicker: "01 / BÂTIR",
    title: "Bâtir — Construction & Ouvrages Neufs",
    description:
      "Nous concevons et réalisons des ouvrages aux plus hauts standards de qualité, sécurité et performance. Du gros-œuvre à la livraison clé-en-main, nous assurons le respect strict des normes techniques, des délais contractuels et des exigences de nos maîtres d'ouvrage.",
    features: [
      "Bâtiments administratifs & institutionnels",
      "Immeubles résidentiels et commerciaux",
      "Établissements scolaires et universitaires",
      "Centres de santé et structures hospitalières",
      "Ouvrages industriels, entrepôts & plateformes logistiques",
      "Infrastructures diverses et ouvrages annexes",
    ],
    tags: ["Bâtiments Administratifs", "Résidentiel & Commercial", "Scolaire & Santé", "Industriel & Logistique", "Clé-en-main"],
    image: SERVICES.find((s) => s.slug === "batir")?.image || "",
    icon: Building2,
    anchorLabel: "Bâtir",
    expandedPanels: [
      {
        icon: "🏗️",
        label: "Méthodologie & Processus",
        text: "Étude de sol et modélisation structurale, sélection rigoureuse des matériaux certifiés, organisation de chantier respectant les normes HSE, suivi hebdomadaire des jalons d'avancement et réception contradictoire à chaque phase clé.",
      },
      {
        icon: "📐",
        label: "Normes & Conformité",
        text: "Respect des normes DTU, des réglementations parasismiques locales, des cahiers des charges institutionnels les plus exigeants et engagement ferme sur les délais contractuels.",
      },
      {
        icon: "🏛️",
        label: "Projets Cibles",
        text: "Sièges ministériels, ambassades et consulats, universités et lycées techniques, cliniques et hôpitaux de district, entrepôts logistiques et zones industrielles.",
      },
      {
        icon: "🚜",
        label: "Parc Matériel",
        text: "Engins de terrassement lourds, grues à tour et grues mobiles, bétonnières industrielles, équipements de coffrage métallique et matériel de compactage de dernière génération.",
      },
    ],
  },
  {
    id: "equiper",
    kicker: "02 / ÉQUIPER",
    title: "Équiper — Aménagement, Finitions & Équipements",
    description:
      "Nous transformons les espaces bruts en environnements fonctionnels et esthétiques de prestige. Finitions soignées, équipements techniques intégrés et aménagements paysagers extérieurs : chaque détail est pensé pour sublimer vos infrastructures.",
    features: [
      "Peinture intérieure et extérieure haut de gamme",
      "Revêtements muraux et sols (carrelage, parquet, moquette)",
      "Faux plafonds, menuiserie, serrurerie sur-mesure",
      "Plomberie & électricité bâtiment",
      "Création d'espaces paysagers & aménagement jardins",
      "Travaux de décoration et d'embellissement sur-mesure",
    ],
    tags: ["Peinture & Revêtements", "Menuiserie Sur-Mesure", "Plomberie & Électricité", "Espaces Verts", "Décoration Prestige"],
    image: SERVICES.find((s) => s.slug === "equiper")?.image || "",
    icon: Settings2,
    anchorLabel: "Équiper",
    expandedPanels: [
      {
        icon: "🛠️",
        label: "Méthodologie & Processus",
        text: "Réunion de lancement esthétique avec le maître d'ouvrage, proposition de gammes matériaux et nuanciers, coordination des corps de métier (peintre, plombier, électricien) en séquence optimisée pour réduire les délais et éviter les interférences.",
      },
      {
        icon: "📐",
        label: "Normes & Qualité",
        text: "Matériaux certifiés aux normes ISO et locales camerounaises, finitions conformes aux guides de référence DTU, garantie décennale sur les ouvrages de second œuvre et service après-travaux inclus.",
      },
      {
        icon: "🏛️",
        label: "Projets Cibles",
        text: "Rénovation intérieure de palais officiels, aménagement de salles de conférence et espaces d'accueil, création de jardins institutionnels et parcs paysagers, décoration de complexes hôteliers et résidences d'État.",
      },
      {
        icon: "🌿",
        label: "Espaces Verts & Paysage",
        text: "Sélection de végétaux adaptés au microclimat local, réseaux d'irrigation automatisés, gestion écoresponsable de l'eau et politique zéro produit phytosanitaire toxique sur les espaces fréquentés.",
      },
    ],
  },
  {
    id: "entretenir",
    kicker: "03 / ENTRETENIR",
    title: "Entretenir — Gestion des installations & Hygiène",
    description:
      "Nous assurons la pérennité et la continuité opérationnelle de vos bâtiments grâce à un service intégré de maintenance, d'hygiène et de salubrité. Maintenance préventive, nettoyage professionnel et lutte anti-nuisibles : un interlocuteur unique pour tous vos besoins.",
    features: [
      "Maintenance préventive, corrective et curative",
      "Nettoyage quotidien, industriel & de fin de chantier",
      "Désinfection, Désinsectisation & Dératisation (3D)",
      "Lavage des vitres, façades et surfaces sensibles",
      "Entretien des espaces verts & parties communes",
      "Gestion des déchets & désinfection des locaux",
    ],
    tags: ["Maintenance Préventive/Curative", "Nettoyage Professionnel", "Prestations 3D", "Espaces Communs", "Continuité Opérationnelle"],
    image: SERVICES.find((s) => s.slug === "entretenir")?.image || "",
    icon: Wrench,
    anchorLabel: "Entretenir",
    expandedPanels: [
      {
        icon: "🛠️",
        label: "Méthodologie & Processus",
        text: "Audit initial de l'état des installations, élaboration d'un plan de maintenance prédictive, interventions planifiées en dehors des heures d'activité et rapports d'intervention transmis sous 24 h.",
      },
      {
        icon: "🧪",
        label: "Normes Hygiène & Sécurité",
        text: "Protocoles conformes aux normes OMS et réglementations camerounaises en matière d'hygiène, produits homologués non toxiques, équipements de protection individuelle certifiés et traçabilité des interventions 3D.",
      },
      {
        icon: "🏛️",
        label: "Projets Cibles",
        text: "Bâtiments ministériels et sièges d'entreprise, hôtels et complexes hospitaliers, campuses universitaires, entrepôts logistiques et sites industriels, résidences officielles et diplomatiques.",
      },
      {
        icon: "📋",
        label: "Contrats & Suivi",
        text: "Contrats annuels de maintenance clé-en-main, interventions ponctuelles sur appel, tableau de bord de suivi partagé avec le client et réunions de bilan trimestrielles.",
      },
    ],
  },
  {
    id: "renover",
    kicker: "04 / RÉNOVER",
    title: "Rénover — Réhabilitation & Valorisation du Bâti",
    description:
      "Nous intervenons sur le bâti existant pour améliorer sa fonctionnalité, son esthétique et sa durabilité. Réhabilitation lourde ou rénovation ciblée, nous réduisons les coûts liés au vieillissement et optimisons la valeur patrimoniale de vos ouvrages.",
    features: [
      "Réhabilitation complète de bâtiments",
      "Réfection des façades & réaménagement des espaces",
      "Renforcement des structures et traitement des pathologies",
      "Modernisation des installations techniques",
      "Travaux de rénovation intérieure et extérieure",
      "Mise aux normes et amélioration des performances énergétiques",
    ],
    tags: ["Réhabilitation Globale", "Réfection Façades", "Renforcement Structure", "Modernisation Technique", "Mise aux Normes"],
    image: SERVICES.find((s) => s.slug === "renover")?.image || "",
    icon: Hammer,
    anchorLabel: "Rénover",
    expandedPanels: [
      {
        icon: "🔍",
        label: "Diagnostic & Audit",
        text: "Inspection visuelle et instrumentée des ouvrages, analyse des pathologies du bâti (fissures, humidité, dégradations structurelles), rapport d'expertise remis sous 5 jours ouvrables avec préconisations chiffrées.",
      },
      {
        icon: "📐",
        label: "Normes & Conformité",
        text: "Application des règles parasismiques, conformité aux normes d'accessibilité et de sécurité incendie, respect des prescriptions architecturales du maître d'ouvrage et suivi par un ingénieur structure certifié.",
      },
      {
        icon: "🏛️",
        label: "Projets Cibles",
        text: "Réhabilitation de bâtiments publics vieillissants, rénovation de façades dégradées, renforcement de structures fragilisées, transformation de plateaux bureaux en espaces modernes, remise aux normes d'immeubles résidentiels.",
      },
      {
        icon: "💡",
        label: "Efficacité & Performance",
        text: "Intégration d'isolants thermiques et acoustiques adaptés au climat camerounais, remplacement des menuiseries par des solutions à haute performance thermique et optimisation des systèmes d'éclairage et de climatisation.",
      },
    ],
  },
  {
    id: "sengager",
    kicker: "05 / S'ENGAGER",
    title: "S'engager — Gestion Patrimoniale & Développement Durable",
    description:
      "Au-delà des chantiers, nous nous engageons durablement à vos côtés : conseil stratégique pour la valorisation de vos actifs, diagnostic patrimonial, politique RSE active et partenariats de co-traitance pour construire ensemble l'héritage de demain.",
    features: [
      "Diagnostic complet des infrastructures",
      "Planification des opérations d'entretien & maintenance préventive",
      "Optimisation des charges d'exploitation",
      "Valorisation du patrimoine bâti & amélioration des performances",
      "Engagement RSE & développement durable",
      "Partenariats stratégiques & co-traitance B2B",
    ],
    tags: ["Diagnostic Patrimonial", "Optimisation Coûts", "Valorisation Bâti", "RSE & Durabilité", "Co-traitance B2B"],
    image: SERVICES.find((s) => s.slug === "sengager")?.image || "",
    icon: Handshake,
    anchorLabel: "S'engager",
    expandedPanels: [
      {
        icon: "📊",
        label: "Conseil & Stratégie Patrimoniale",
        text: "Audit de l'état du patrimoine bâti, modélisation des coûts sur cycle de vie (LCC), recommandations hiérarchisées par niveau de priorité et accompagnement dans la planification pluriannuelle des investissements.",
      },
      {
        icon: "🌱",
        label: "RSE & Développement Durable",
        text: "Engagement environnemental fort : réduction des déchets de chantier, utilisation de matériaux à faible impact carbone, formation continue des équipes aux bonnes pratiques HSE et publication d'un rapport RSE annuel.",
      },
      {
        icon: "🤝",
        label: "Partenariats & Co-traitance",
        text: "2HNOUR SARL s'impose comme partenaire de confiance pour les majors du BTP, institutions publiques et grands comptes. Nous intervenons en sous-traitance spécialisée ou en co-traitance avec apport de nos compétences techniques certifiées.",
      },
      {
        icon: "⚖️",
        label: "Conformité & Gouvernance",
        text: "Respect strict de la réglementation des marchés publics et privés, gouvernance claire et irréprochable, alignement sur les cahiers des charges les plus exigeants et garantie de livraison dans les délais contractuels.",
      },
    ],
  },
];

function ServicesPage() {
  const { t } = useTranslation();
  const [activeAnchor, setActiveAnchor] = useState<string>(DETAILED_SERVICES[0]?.id || "batir");

  // Scrollspy automatique et gestion du hash d'URL
  useEffect(() => {
    // Si un hash est présent dans l'URL (ex: #equiper ou #renover), scroller automatiquement
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const match = DETAILED_SERVICES.find((s) => s.id === hash);
      if (match) {
        setActiveAnchor(match.id);
        setTimeout(() => {
          scrollToSection(match.id);
        }, 150);
      }
    }

    const handleScroll = () => {
      // Déterminer la position actuelle de la fenêtre
      const scrollPos = window.scrollY + 220;

      // Trouver la section active
      let currentId = DETAILED_SERVICES[0]?.id || "";
      for (const service of DETAILED_SERVICES) {
        const el = document.getElementById(service.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset;
          if (scrollPos >= top) {
            currentId = service.id;
          }
        }
      }
      setActiveAnchor(currentId);
    };

    handleScroll(); // Exécution initiale dès le montage pour indiquer le service courant
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveAnchor(id);
    }
  };

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="Cinq Piliers d'Expertise Intégrée"
        title="Bâtir, Équiper, Entretenir, Rénover & S'engager"
        subtitle="Cinq engagements, une vision : construire, équiper et pérenniser vos infrastructures avec rigueur, passion et responsabilité."
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
                  className={`rounded-full px-4 py-2 text-xs transition-all ${isActive
                    ? "bg-gold border border-gold text-obsidian font-bold shadow-md"
                    : "bg-slate-100 border border-transparent text-slate-700 hover:bg-gold/20 hover:text-obsidian"
                    }`}
                >
                  {s.anchorLabel}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN SERVICES LIST - 5 PILIERS ALTERNATING CARDS */}
      <div className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-24 px-6">

          {DETAILED_SERVICES.map((service, index) => (
            <div key={service.id}>
              {/* PILIER HEADER */}
              <div className="border-b border-border pb-4 mb-10">
                <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
                  {service.kicker}
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold text-slate-ink md:text-4xl">
                  {service.title}
                </h2>
              </div>
              <ServiceCardBlock service={service} isEven={index % 2 === 1} />
            </div>
          ))}

        </div>
      </div>

      {/* 5. SECTION TRANSVERSALE : PARTENARIATS & CO-TRAITANCE */}
      <section className="bg-obsidian-marble py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
                B2B & Grands Comptes
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
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

            <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] p-8 md:p-10 text-obsidian shadow-2xl">
              {/* Reflet ambré chaud */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/2 bg-gradient-to-r from-transparent via-[#ffe89c]/40 to-transparent" />

              <div className="relative">
                <h3 className="font-display text-2xl font-extrabold text-obsidian">
                  Rejoignez Notre Réseau Partenaire
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-obsidian/90">
                  Vous préparez une réponse à un appel d'offres ou recherchez une co-traitance qualifiée au Cameroun ?
                </p>
                <div className="mt-8 space-y-4">
                  <Link
                    to="/contact"
                    hash="partenaire"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-obsidian px-6 py-3.5 text-sm font-bold text-gold shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-obsidian"
                  >
                    Soumettre une opportunité de partenariat <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) & PRISE DE CONTACT */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] py-24 text-obsidian shadow-2xl">
        {/* Reflet ambré chaud sur toute la section */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/3 bg-gradient-to-r from-transparent via-[#ffe89c]/40 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold text-obsidian md:text-5xl">
            Un projet de construction, d'aménagement ou de maintenance ?
          </h2>
          <p className="mt-4 text-base font-medium text-obsidian/90 max-w-2xl mx-auto">
            Nos ingénieurs et experts techniques étudient vos cahiers des charges et vous accompagnent de la conception à la réalisation.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              to="/contact"
              hash="contact-form"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-obsidian px-8 py-4 text-sm font-bold text-gold shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-obsidian"
            >
              Demander une étude / Un Devis <ArrowRight className="h-4 w-4" />
            </Link>
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

  // ─── Classes dynamiques synchronisées ──────────────────────────────────────
  const kickerBadge = expanded
    ? "border-obsidian/30 bg-obsidian text-gold shadow-sm"
    : "border-gold/30 bg-gold text-obsidian shadow-sm";
  const iconBubble = expanded
    ? "bg-obsidian text-gold border-obsidian/40 shadow-md"
    : "bg-gold text-obsidian border-gold/40 shadow-md";
  const titleColor = expanded ? "text-obsidian font-extrabold" : "text-slate-ink";
  const descColor = expanded ? "text-obsidian/90 font-medium" : "text-muted-foreground";
  const featureHeadColor = expanded ? "text-obsidian font-bold" : "text-slate-ink";
  const featureColor = expanded ? "text-obsidian/90 font-medium" : "text-slate-ink";
  const tagBg = expanded
    ? "bg-obsidian text-gold border-obsidian/40 font-semibold shadow-sm"
    : "bg-gold/25 border-gold/40 text-obsidian font-semibold";
  const toggleColor = expanded ? "text-obsidian font-bold hover:text-obsidian/80" : "text-amber-600 hover:text-amber-700";

  return (
    <article
      id={service.id}
      className={`scroll-mt-36 group relative rounded-3xl border overflow-hidden bg-white shadow-sm transition-all duration-700 ease-in-out ${expanded
        ? "border-gold/50 shadow-2xl"
        : "border-border hover:border-gold/50 hover:shadow-xl"
        }`}
    >
      {/* ── FOND DORÉ EN CROSS-FADE ULTRA-FLUIDE (Évite tout saut brusque de couleur) ── */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] transition-opacity duration-700 ease-in-out ${expanded ? "opacity-100" : "opacity-0"
          }`}
      >
        {/* Reflet ambré chaud sur toute la carte lorsqu'elle est étendue */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/2 bg-gradient-to-r from-transparent via-[#ffe89c]/40 to-transparent" />
      </div>

      {/* ── SECTION SUPÉRIEURE (toujours visible) ─────────────────────────── */}
      <div className="relative z-10 p-6 md:p-10">
        <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${isEven ? "lg:grid-flow-dense" : ""}`}>
          {/* TEXTE */}
          <div className={isEven ? "lg:col-start-2" : ""}>
            <span className={`inline-block rounded-full border px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-700 ease-in-out ${kickerBadge}`}>
              {service.kicker}
            </span>

            <h3 className={`mt-3 font-display text-2xl font-bold md:text-3xl lg:text-4xl leading-tight transition-colors duration-700 ease-in-out ${titleColor}`}>
              {service.title}
            </h3>

            <p className={`mt-4 text-base leading-relaxed transition-colors duration-700 ease-in-out ${descColor}`}>
              {service.description}
            </p>

            {/* PERIMETRE ET DOMAINES */}
            <div className="mt-6">
              <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 transition-colors duration-700 ease-in-out ${featureHeadColor}`}>
                Périmètre d'intervention & Domaines d'application :
              </h4>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-2.5 text-xs md:text-sm transition-colors duration-700 ease-in-out ${featureColor}`}>
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 transition-colors duration-700 ease-in-out ${expanded ? "text-obsidian" : "text-gold"}`} />
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
                  className={`rounded-lg px-3 py-1 text-xs font-medium border transition-colors duration-700 ease-in-out ${tagBg}`}
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
                className="inline-flex items-center gap-2 rounded-full bg-obsidian px-5 py-2.5 text-xs font-semibold text-gold shadow-md transition-all duration-300 hover:bg-gold hover:text-obsidian"
              >
                Demander un devis <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <button
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-700 ease-in-out ${toggleColor}`}
              >
                <span>{expanded ? "Réduire l'expertise" : "Découvrir l'expertise complète"}</span>
                <ArrowRight className={`h-4 w-4 transition-transform duration-700 ease-in-out ${expanded ? "rotate-90" : ""}`} />
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] ${isEven ? "lg:col-start-1" : ""}`}>
            <img
              src={service.image}
              alt={service.title}
              className={`h-full w-full object-cover transition-transform duration-700 ${expanded ? "scale-100" : "group-hover:scale-105"
                }`}
            />
            <div className={`absolute top-4 left-4 grid h-12 w-12 place-items-center rounded-2xl backdrop-blur-md transition-all duration-700 ease-in-out ${iconBubble}`}>
              <Icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* ── EXPANDED DETAIL PANEL (accordéon CSS Grid fluide sans freeze JS) ── */}
      <div
        className="relative z-10 grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden min-h-0">
          <div
            className={`transition-all duration-700 ease-in-out ${expanded
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
              }`}
          >
            {/* Ligne séparatrice */}
            <div className="px-6 md:px-10">
              <div className="h-px w-full bg-obsidian/20" />
            </div>

            <div className="mx-auto max-w-6xl p-6 md:p-8 text-obsidian">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-obsidian/20">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-obsidian animate-pulse" />
                  <h3 className="text-sm font-extrabold tracking-wider uppercase text-obsidian">
                    Détails de l'Ingénierie & Rigueur Opérationnelle
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-obsidian/10 text-obsidian border border-obsidian/20 rounded-full font-bold">
                  {(() => {
                    const num = (service.kicker || "").trim().split(" ")[0] || "00";
                    const short = (service.id || "").slice(0, 2).toUpperCase();
                    return `SPEC-${num.replace("/", "")}-${short}`;
                  })()}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.expandedPanels.map((panel, idx) => (
                  <div key={idx} className="p-5 bg-black border border-black rounded-2xl shadow-lg text-white transition-all">
                    <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase mb-2">
                      {panel.icon} {panel.label}
                    </div>
                    <p className="text-xs text-white/90 font-normal leading-relaxed">
                      {panel.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}