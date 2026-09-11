import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LOGO_IMAGE, COMPANY_INFO } from "@/components/site/data";

export function Footer() {
  const { t } = useTranslation();

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
            {t("footer.tagline")}
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-gold">
            {t("footer.navigation")}
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: t("nav.home") },
              { to: "/services", label: t("nav.services") },
              { to: "/references", label: t("nav.references") },
              { to: "/a-propos", label: t("nav.about") },
              { to: "/blog", label: t("nav.blog") },
              { to: "/engagement-solidaire", label: t("nav.solidarity") },
              { to: "/contact", hash: "contact-form", label: t("nav.contact") },
              { to: "/contact", hash: "partenaire", label: t("nav.partner") },
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
            {t("footer.ourServices")}
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>{t("footer.services.construction")}</li>
            <li>{t("footer.services.rehabilitation")}</li>
            <li>{t("footer.services.maintenance")}</li>
            <li>{t("footer.services.cleaning")}</li>
            <li>{t("footer.services.disinfection")}</li>
            <li>{t("footer.services.landscaping")}</li>
            <li>{t("footer.services.finishing")}</li>
            <li>{t("footer.services.heritage")}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-gold">
            {t("footer.contact")}
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {COMPANY_INFO.address}
                <br />
                Plus Code: {COMPANY_INFO.plusCode}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold transition-colors">
                {COMPANY_INFO.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div className="flex flex-col gap-1">
                {COMPANY_INFO.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="hover:text-gold transition-colors"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} 2HNOUR SARL. {t("footer.copyright")}</p>
          <p>{t("footer.location")}</p>
        </div>
      </div>
    </footer>
  );
}
