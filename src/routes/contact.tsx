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

      <section className="bg-background py-24">
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
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-obsidian shadow-[0_20px_40px_-12px_oklch(0.78_0.13_85/0.6)] transition-all hover:-translate-y-0.5 sm:w-auto"
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