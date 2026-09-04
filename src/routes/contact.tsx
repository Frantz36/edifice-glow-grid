import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SERVICES } from "@/components/site/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 2HNOUR SARL" },
      {
        name: "description",
        content:
          "Contactez 2HNOUR SARL à Yaoundé : Rue Ceper, contact@2hnour.cm. Demandez votre devis.",
      },
      { property: "og:title", content: "Contact — 2HNOUR SARL" },
      { property: "og:description", content: "Nous contacter à Yaoundé, Cameroun." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        subtitle="Nos équipes vous répondent sous 48 heures ouvrées."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* SECTION CONTACT ET FORMULAIRE */}
      <section className="bg-background py-24" id="contact-form">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-white p-8 md:p-10"
          >
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Demander une étude
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Décrivez votre projet, nous revenons vers vous rapidement.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Nom complet" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Téléphone" name="phone" />
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-ink">
                  Catégorie de service
                </label>
                <select className="h-11 w-full rounded-lg border border-border bg-white px-3 text-sm focus:border-gold focus:outline-none">
                  <option>Choisir un service</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-ink">
                Description du projet
              </label>
              <textarea
                rows={5}
                className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm focus:border-gold focus:outline-none"
                placeholder="Contexte, périmètre, échéances…"
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-obsidian shadow-[0_20px_40px_-12px_oklch(0.86_0.16_95/0.6)] transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              Envoyer ma demande
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-3xl bg-obsidian-marble p-8 text-white">
              <h3 className="font-display text-xl font-bold">Coordonnées</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold text-white">Adresse</p>
                    <p className="text-white/70">
                      Rue Ceper, Yaoundé, Cameroun
                      <br />
                      Plus Code : VGFC+VMW
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-white/70">contact@2hnour.cm</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold text-white">Téléphone</p>
                    <p className="text-white/70">+237 6 00 00 00 00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold text-white">Horaires</p>
                    <p className="text-white/70">Lun – Ven · 08h – 18h</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Carte 2HNOUR SARL"
                src="https://www.google.com/maps?q=3.8747389,11.5216964&z=16&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DEVENIR PARTENAIRE */}
      <section className="scroll-mt-20 bg-slate-50 py-24" id="partenaire">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-obsidian shadow-md shadow-gold/20">
              Synergie & Croissance
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-ink md:text-5xl">
              Devenir Partenaire 2HNOUR
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Développez des opportunités stratégiques et durables en rejoignant notre réseau d'excellence dans le BTP, la rénovation et la gestion de patrimoine.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* AVANTAGES (DORÉE) */}
            <div className="group relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-r from-[#e5b539] via-[#b87a14] to-[#e5b539] p-8 md:p-10 text-obsidian shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-gradient-to-br hover:from-[#ffe89c] hover:via-[#e5b539] hover:to-[#b87a14] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              {/* Reflet ambré chaud */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/2 bg-gradient-to-r from-transparent via-[#ffe89c]/30 to-transparent z-0" />
              
              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-obsidian text-gold border border-obsidian/30 shadow-md font-bold">
                  ✓
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold text-obsidian leading-snug">
                  Avantages du Partenariat
                </h3>
                <p className="mt-2 text-sm font-medium text-obsidian/90">
                  Ce que nous apportons à nos partenaires et clients stratégiques :
                </p>
                <ul className="mt-6 space-y-4 text-sm font-medium text-obsidian">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-obsidian text-xs font-bold text-gold shadow-sm">
                      1
                    </span>
                    <span><strong>Accès privilégié aux grands projets</strong> : Synergies sur les appels d'offres institutionnels et privés d'envergure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-obsidian text-xs font-bold text-gold shadow-sm">
                      2
                    </span>
                    <span><strong>Partage d'expertise & Innovation</strong> : Collaboration technique pour des standards d'exécution haut de gamme.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-obsidian text-xs font-bold text-gold shadow-sm">
                      3
                    </span>
                    <span><strong>Sécurité administrative & financière</strong> : Garanties contractuelles rigoureuses et transparence budgétaire.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-obsidian text-xs font-bold text-gold shadow-sm">
                      4
                    </span>
                    <span><strong>Visibilité accrue</strong> : Mise en valeur conjointe auprès de nos clients grands comptes et réseaux institutionnels.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CONTRAINTES & EXIGENCES (MARBRÉE NOIRE) */}
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-obsidian-marble p-8 md:p-10 text-white shadow-xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-obsidian font-bold shadow-md">
                !
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-gold">
                Engagements & Exigences
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Les normes strictes et critères de déontologie auxquels 2HNOUR est soumise :
              </p>
              <ul className="mt-6 space-y-4 text-sm text-white/90">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold border border-gold/30">
                    1
                  </span>
                  <span><strong className="text-white">Conformité réglementaire stricte</strong> : Respect rigoureux des normes BTP, environnementales et de sécurité au travail.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold border border-gold/30">
                    2
                  </span>
                  <span><strong className="text-white">Charte Qualité & Délais</strong> : Obligation de résultat et respect impératif des échéanciers validés.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold border border-gold/30">
                    3
                  </span>
                  <span><strong className="text-white">Éthique & Transparence</strong> : Politique de tolérance zéro en matière de corruption et gouvernance irréprochable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold border border-gold/30">
                    4
                  </span>
                  <span><strong className="text-white">Confidentialité</strong> : Protection intégrale des données stratégiques et secrets industriels de nos projets communs.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FORMULAIRE DE DEMANDE DE PARTENARIAT (BLANC CASSÉ) */}
          <div className="mt-12 rounded-3xl border border-border bg-white p-8 md:p-12 shadow-sm">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl font-bold text-slate-ink md:text-3xl">
                Soumettre une demande de partenariat
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Remplissez ce formulaire pour initier un échange avec notre direction du développement stratégique.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-ink">
                  Nom de la structure / Entreprise
                </label>
                <input
                  type="text"
                  className="h-11 w-full rounded-lg border border-border bg-slate-50/60 px-3 text-sm text-slate-ink placeholder:text-muted-foreground focus:border-gold focus:bg-white focus:outline-none transition-colors"
                  placeholder="Ex: ACME Corp"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-ink">
                  Nom & Prénom du Contact
                </label>
                <input
                  type="text"
                  className="h-11 w-full rounded-lg border border-border bg-slate-50/60 px-3 text-sm text-slate-ink placeholder:text-muted-foreground focus:border-gold focus:bg-white focus:outline-none transition-colors"
                  placeholder="Ex: Jean Dupont"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-ink">
                  Email professionnel
                </label>
                <input
                  type="email"
                  className="h-11 w-full rounded-lg border border-border bg-slate-50/60 px-3 text-sm text-slate-ink placeholder:text-muted-foreground focus:border-gold focus:bg-white focus:outline-none transition-colors"
                  placeholder="jean@entreprise.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-ink">
                  Téléphone / WhatsApp
                </label>
                <input
                  type="tel"
                  className="h-11 w-full rounded-lg border border-border bg-slate-50/60 px-3 text-sm text-slate-ink placeholder:text-muted-foreground focus:border-gold focus:bg-white focus:outline-none transition-colors"
                  placeholder="+237 6XX XX XX XX"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-ink">
                  Type de partenariat envisagé
                </label>
                <select className="h-11 w-full rounded-lg border border-border bg-slate-50/60 px-3 text-sm text-slate-ink focus:border-gold focus:bg-white focus:outline-none transition-colors">
                  <option>Co-traitance / Sub-contracting BTP</option>
                  <option>Fournisseur de matériaux & équipements</option>
                  <option>Partenariat institutionnel ou financier</option>
                  <option>Prestataire de service spécialisé</option>
                  <option>Autre synergie stratégique</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-ink">
                  Présentation de la proposition
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-border bg-slate-50/60 px-3 py-2 text-sm text-slate-ink placeholder:text-muted-foreground focus:border-gold focus:bg-white focus:outline-none transition-colors"
                  placeholder="Présentez brièvement vos compétences, vos objectifs et l'opportunité de partenariat..."
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-obsidian shadow-md transition-all hover:bg-gold/90 hover:-translate-y-0.5 sm:w-auto"
                >
                  Envoyer la proposition de partenariat
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-ink">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="h-11 w-full rounded-lg border border-border bg-white px-3 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}