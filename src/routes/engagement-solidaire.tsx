import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Heart,
  School,
  Droplets,
  PackageCheck,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  HandHeart,
  ShieldCheck,
  Award,
  Sparkles,
  Gift,
  HelpCircle,
} from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";

// Composant pour l'animation de comptage progressif
const CountUp = ({ value }: { value: string }) => {
  const hasPrefix = value.startsWith("+");
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/^[+]?[0-9\s]+/, "");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
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
      {hasPrefix ? "+" : ""}
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
};

export const Route = createFileRoute("/engagement-solidaire")({
  head: () => ({
    meta: [
      { title: "Engagement Solidaire & Impact Humanitaire — 2HNOUR SARL" },
      {
        name: "description",
        content:
          "Découvrez l'engagement citoyen de 2HNOUR SARL : chantiers solidaires, soutien à l'éducation, 3D hygiène et aide d'urgence au Cameroun.",
      },
      {
        property: "og:title",
        content: "Engagement Solidaire & Impact Humanitaire — 2HNOUR SARL",
      },
      {
        property: "og:description",
        content:
          "Au-delà du BTP, 2HNOUR SARL met son expertise et ses ressources au service des communautés vulnérables.",
      },
    ],
  }),
  component: HumanitarianPage,
});

const STATS_SOLIDAIRES = [
  {
    number: "+18",
    label: "Édifices & Écoles Rénovés",
    icon: Building2,
  },
  {
    number: "+1 500",
    label: "Enfants Équipés en Kits",
    icon: School,
  },
  {
    number: "35+",
    label: "Traitements 3D Gratuits",
    icon: Droplets,
  },
  {
    number: "100%",
    label: "Transparence & Logistique Prise en Charge",
    icon: ShieldCheck,
  },
];

const PILIERS = [
  {
    icon: Building2,
    title: "Chantiers Solidaires & Mécénat de Compétences",
    desc: "Mise à disposition gratuite de notre savoir-faire BTP pour réhabiliter des orphelinats, écoles rurales, centres de santé et espaces communautaires vétustes.",
    badge: "BTP & Rénovation",
  },
  {
    icon: School,
    title: "Dons Matériels & Soutien à l'Éducation",
    desc: "Distribution régulière de kits scolaires, équipements informatiques et mobilier ergonomique pour offrir de meilleures conditions d'apprentissage aux enfants.",
    badge: "Éducation & Jeunesse",
  },
  {
    icon: Droplets,
    title: "Hygiène, Salubrité & Accès à l'Eau (3D Solidaires)",
    desc: "Campagnes gratuites de désinfection et dératisation dans les écoles et marchés, associées à la réalisation de points d'eau potable sécurisés.",
    badge: "Salubrité & Eau",
  },
  {
    icon: PackageCheck,
    title: "Urgence & Assistance Sociale",
    desc: "Distribution de vivre, kits d'hygiène et secours matériel d'urgence lors de périodes critiques ou auprès de communautés en situation de précarité extrême.",
    badge: "Aide d'Urgence",
  },
];

const PROJETS_SOLIDAIRES = [
  {
    id: 1,
    title: "Réhabilitation globale du réfectoire et sanitaires de l'Orphelinat de Yaoundé",
    location: "Yaoundé · Centre",
    objective: "Rénovation complète du toit, carrelage, plomberie et peinture d'un dortoir accueillant 45 enfants.",
    progress: 75,
    budgetTotal: "6 500 000 FCFA",
    budgetCollected: "4 875 000 FCFA",
    support2hnour: "Couverture à 100% de la main-d'œuvre qualifiée et 50% des matériaux.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Campagne 3D & Installation d'un forage d'eau potable dans l'École Publique de Mbankomo",
    location: "Mbankomo · Peri-urbain",
    objective: "Désinfection intégrale contre les vecteurs et raccordement d'un forage d'eau saine pour 320 élèves.",
    progress: 60,
    budgetTotal: "4 200 000 FCFA",
    budgetCollected: "2 520 000 FCFA",
    support2hnour: "Prise en charge intégrale des équipes de traitement 3D et études hydrogéologiques.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Distribution de 500 Kits Scolaires & Mobilier Ergonomique",
    location: "Zones Rurales · Sud",
    objective: "Fourniture de bancs, tables, cartables et manuels pour 3 écoles primaires dépourvues d'équipements.",
    progress: 90,
    budgetTotal: "3 000 000 FCFA",
    budgetCollected: "2 700 000 FCFA",
    support2hnour: "Financement direct des fournitures et logistique d'acheminement.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
  },
];

function HumanitarianPage() {
  const [activeTab, setActiveTab] = useState<"don" | "materiel" | "demande">("don");
  const [selectedProject, setSelectedProject] = useState<string>("Tous les projets solidaires");

  const terrainRef = useRef<HTMLElement>(null);
  const [terrainParallax, setTerrainParallax] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (terrainRef.current) {
        const rect = terrainRef.current.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const offsetFromCenter = rect.top + rect.height / 2 - winHeight / 2;
        const maxOffset = 50;
        const speed = 0.15;
        const clampedY = Math.max(-maxOffset, Math.min(maxOffset, offsetFromCenter * speed));
        setTerrainParallax(clampedY);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="Engagement Solidaire & Impact Citoyen"
        title="Bâtir un Avenir Plus Humain : Notre Engagement Solidarité"
        subtitle="Au-delà des pierres et des infrastructures, 2HNOUR SARL met son expertise BTP et ses ressources au service des communautés vulnérables et du progrès social."
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80"
      />

      {/* 2. CHIFFRES ET IMPACT EN AVANT-PROPOS */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] py-10 md:py-12 text-obsidian shadow-xl">
        {/* Reflet ambré chaud équilibré au centre */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/3 bg-gradient-to-r from-transparent via-[#ffe89c]/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS_SOLIDAIRES.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-obsidian p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-[#ffe89c] hover:via-[#e5b539] hover:to-[#b87a14] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                >
                  {/* Icône contextuelle dans un badge sombre avec accents or */}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold transition-all duration-300 group-hover:border-transparent group-hover:bg-obsidian group-hover:text-gold group-hover:shadow-md">
                    <Icon className="h-5 w-5 transition-all duration-300 group-hover:fill-gold group-hover:text-gold" />
                  </div>

                  {/* Chiffre animé */}
                  <div className="font-display text-3xl font-bold text-gold transition-colors duration-300 group-hover:text-obsidian md:text-4xl">
                    <CountUp value={stat.number} />
                  </div>

                  {/* Libellé en or clair / doré */}
                  <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-gold/90 transition-colors duration-300 group-hover:text-obsidian/90">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LES 4 PILIERS DE L'ACTION HUMANITAIRE */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
              Notre Responsabilité Sociétale
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-ink md:text-5xl">
              Les 4 Piliers de l'Action Humanitaire 2HNOUR
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Une démarche structurée pour transformer le savoir-faire technique de notre entreprise en levier de dignité et d'épanouissement pour les populations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {PILIERS.map((pilier, idx) => {
              const IconComponent = pilier.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] p-8 text-obsidian shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-gradient-to-br hover:from-[#ffe89c] hover:via-[#e5b539] hover:to-[#b87a14] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  {/* Reflet ambré chaud */}
                  <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/2 bg-gradient-to-r from-transparent via-[#ffe89c]/30 to-transparent z-0" />
                  
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-obsidian text-gold border border-obsidian/30 shadow-md">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-obsidian/90 px-3.5 py-1 text-xs font-bold text-gold backdrop-blur-sm border border-gold/30 shadow-sm">
                          {pilier.badge}
                        </span>
                      </div>
                      <h3 className="mt-6 font-display text-xl font-extrabold text-obsidian leading-snug">
                        {pilier.title}
                      </h3>
                      <p className="mt-3 text-sm font-medium text-obsidian/90 leading-relaxed">
                        {pilier.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. APPELS AUX DONS & PROJETS SOLIDAIRES (MODULE CLÉ) */}
      <section ref={terrainRef} className="relative overflow-hidden bg-background py-24 text-obsidian" id="projets-solidaires">
        {/* PARALLAX BACKGROUND MARBRÉ */}
        <div
          className="absolute -top-24 -bottom-24 left-0 right-0 pointer-events-none will-change-transform bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('/pics/marbre-or-2.jpg')`,
            backgroundSize: "100% auto",
            transform: `translate3d(0, ${terrainParallax}px, 0)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
                Actions sur le Terrain
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-obsidian md:text-4xl">
                Projets Solidaires en Cours d'Accompagnement
              </h2>
            </div>
            <p className="max-w-md text-sm text-obsidian/85">
              Participez à nos côtés pour amplifier l'impact. 2HNOUR finance le pilotage, les équipes techniques et la logistique.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {PROJETS_SOLIDAIRES.map((projet) => (
              <div
                key={projet.id}
                className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={projet.image}
                      alt={projet.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-obsidian/90 px-3 py-1 text-xs font-semibold text-gold backdrop-blur-md">
                      {projet.location}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-slate-ink line-clamp-2">
                      {projet.title}
                    </h3>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                      {projet.objective}
                    </p>

                    <div className="mt-5 rounded-xl bg-gold/10 p-3 text-xs border border-gold/20">
                      <span className="font-semibold text-obsidian">Engagement 2HNOUR : </span>
                      <span className="text-slate-700">{projet.support2hnour}</span>
                    </div>

                    {/* JAUGE VISUELLE */}
                    <div className="mt-6">
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-slate-ink">Avancement du projet</span>
                        <span className="text-gold">{projet.progress}% financé</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full bg-gold transition-all duration-1000"
                          style={{ width: `${projet.progress}%` }}
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                        <span>Objectif : {projet.budgetTotal}</span>
                        <span>Mobilisé : {projet.budgetCollected}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#agir"
                    onClick={() => setSelectedProject(projet.title)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-obsidian px-5 py-3 text-xs font-semibold text-gold transition-all hover:bg-gold hover:text-obsidian"
                  >
                    Soutenir ce projet <Heart className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* RASSURANCE TRANSPARENCE */}
          <div className="mt-12 rounded-3xl border border-gold/30 bg-obsidian-marble p-8 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold/20 text-gold">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-gold">
                  Garantie 100% Transparence & Prise en Charge Logistique
                </h4>
                <p className="mt-1 text-sm text-white/80 leading-relaxed">
                  Tous les dons extérieurs collectés (financiers ou matériels) sont intégralement alloués sur le terrain. 2HNOUR SARL prend à sa charge l'ensemble des frais de gestion, de transport et le salaire des équipes techniques mobilisées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MODALITÉS D'ACTION & FORMULAIRE INTERACTIF */}
      <section className="bg-background py-24" id="agir">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
              Agir Ensemble
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-ink md:text-5xl">
              Comment Contribuer ou Demander de l'Aide ?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Sélectionnez le mode d'action qui correspond à vos possibilités ou à vos besoins.
            </p>
          </div>

          {/* ONGLETS DES MODALITÉS */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-border bg-slate-100 p-1.5">
              <button
                onClick={() => setActiveTab("don")}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "don"
                    ? "bg-gold text-obsidian shadow-sm"
                    : "text-slate-600 hover:text-obsidian"
                }`}
              >
                <Heart className="h-4 w-4" /> Don Financier
              </button>
              <button
                onClick={() => setActiveTab("materiel")}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "materiel"
                    ? "bg-gold text-obsidian shadow-sm"
                    : "text-slate-600 hover:text-obsidian"
                }`}
              >
                <Gift className="h-4 w-4" /> Don en Matériaux
              </button>
              <button
                onClick={() => setActiveTab("demande")}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "demande"
                    ? "bg-gold text-obsidian shadow-sm"
                    : "text-slate-600 hover:text-obsidian"
                }`}
              >
                <HelpCircle className="h-4 w-4" /> Demander un Accompagnement
              </button>
            </div>
          </div>

          {/* CONTENU SELON ONGLET */}
          <div className="mt-10 rounded-3xl border border-border bg-white p-8 md:p-12 shadow-sm">
            {activeTab === "don" && (
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-ink">
                  Soutien Financier Direct au Fonds Solidaire 2HNOUR
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vos contributions permettent d'acheter les matériaux complémentaires (ciment, tôle, sanitaires, fournitures) nécessaires aux chantiers communautaires.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
                    <h4 className="font-semibold text-obsidian flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold" /> Mobile Money (Cameroun)
                    </h4>
                    <p className="mt-3 text-xs text-slate-600">
                      <strong>MTN Mobile Money :</strong> +237 6XX XX XX XX (Compte Fonds Solidaire 2HNOUR)
                      <br />
                      <strong>Orange Money :</strong> +237 6XX XX XX XX
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-slate-50 p-6">
                    <h4 className="font-semibold text-obsidian flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-slate-700" /> Virement Bancaire Dédié
                    </h4>
                    <p className="mt-3 text-xs text-slate-600">
                      <strong>Banque :</strong> CCA Bank / BICEC Yaoundé
                      <br />
                      <strong>Intitulé :</strong> 2HNOUR SARL - Compte Humanitaire & RSE
                    </p>
                  </div>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Projet Cible
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={selectedProject}
                      className="h-11 w-full rounded-lg border border-border bg-slate-50 px-3 text-sm font-medium text-slate-700"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Nom complet / Entreprise
                    </label>
                    <input
                      type="text"
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:border-gold focus:outline-none"
                      placeholder="Ex: Fondateur ACME"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Email ou Téléphone
                    </label>
                    <input
                      type="text"
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:border-gold focus:outline-none"
                      placeholder="+237 6XX XX XX XX"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-obsidian shadow-md transition-all hover:-translate-y-0.5 sm:w-auto"
                    >
                      Confirmer l'intention de don <HandHeart className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "materiel" && (
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-ink">
                  Don en Nature & Matériaux de Construction / Équipements
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vous êtes un fournisseur BTP, une entreprise ou un particulier ? Offrez du ciment, de la peinture, du matériel électrique, du carrelage ou des kits scolaires.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Nom / Structure Donatrice
                    </label>
                    <input
                      type="text"
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:border-gold focus:outline-none"
                      placeholder="Ex: Quincaillerie Centrale"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Téléphone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:border-gold focus:outline-none"
                      placeholder="+237 6XX XX XX XX"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Description du matériel offert & quantité
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-gold focus:outline-none"
                      placeholder="Ex: 50 sacs de ciment 42.5, 10 pots de peinture blanche 15L..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-obsidian shadow-md transition-all hover:-translate-y-0.5 sm:w-auto"
                    >
                      Proposer un don de matériel <Gift className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "demande" && (
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-ink">
                  Soumettre un Dossier d'Aide ou un Projet Communautaire
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vous gérez un orphelinat, une école publique dégradée ou une association locale au Cameroun ? Déposez votre demande de réhabilitation ou de campagne d'hygiène.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Nom de la Structure / Association / École
                    </label>
                    <input
                      type="text"
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:border-gold focus:outline-none"
                      placeholder="Ex: École Publique de..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Localisation (Ville / Région)
                    </label>
                    <input
                      type="text"
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:border-gold focus:outline-none"
                      placeholder="Ex: Mbalmayo, Région du Centre"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Nom du responsable
                    </label>
                    <input
                      type="text"
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:border-gold focus:outline-none"
                      placeholder="Ex: M. le Directeur / Mme la Présidente"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Téléphone de contact
                    </label>
                    <input
                      type="tel"
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:border-gold focus:outline-none"
                      placeholder="+237 6XX XX XX XX"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-ink">
                      Exposé du besoin & travaux nécessaires
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-gold focus:outline-none"
                      placeholder="Décrivez l'état actuel de l'édifice, le nombre de bénéficiaires et les priorités de réhabilitation..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-obsidian shadow-md transition-all hover:-translate-y-0.5 sm:w-auto"
                    >
                      Soumettre le dossier d'accompagnement <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
