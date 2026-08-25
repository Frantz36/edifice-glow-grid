import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";
import { LOGO_IMAGE } from "@/components/site/data";

export function Footer() {
  return (
    <footer className="bg-obsidian-marble text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={LOGO_IMAGE}
              alt="2HNOUR SARL"
              className="h-10 w-auto object-contain"
            />
            <span className="font-display text-lg font-bold text-white">
              2HNOUR <span className="text-gold">SARL</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Bâtir l'avenir. Préserver le patrimoine. Servir durablement.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Accueil" },
              { to: "/services", label: "Services" },
              { to: "/references", label: "Références" },
              { to: "/a-propos", label: "À Propos" },
              { to: "/blog", label: "Blog & Actualités" },
              { to: "/engagement-solidaire", label: "Engagement Solidaire" },
              { to: "/contact", hash: "contact-form", label: "Contactez-nous" },
              { to: "/contact", hash: "partenaire", label: "Devenir Partenaire" },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.to} hash={link.hash} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Nos Services
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Construction</li>
            <li>Réhabilitation & Rénovation</li>
            <li>Entretien & Maintenance</li>
            <li>Nettoyage & Hygiène</li>
            <li>Désinfection 3D</li>
            <li>Aménagement Paysager</li>
            <li>Finition & Embellissement</li>
            <li>Gestion du Patrimoine</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                Rue Ceper, Yaoundé, Cameroun
                <br />
                Plus Code: VGFC+VMW
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              contact@2hnour.cm
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              +237 6 00 00 00 00
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} 2HNOUR SARL. Tous droits réservés.</p>
          <p>Yaoundé · Cameroun</p>
        </div>
      </div>
    </footer>
  );
}