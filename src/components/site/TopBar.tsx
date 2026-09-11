import { MapPin, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { COMPANY_INFO } from "./data";

export function TopBar() {
  const { i18n } = useTranslation();

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="hidden bg-obsidian-marble text-white/80 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
        <div className="flex flex-wrap items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {COMPANY_INFO.address}
          </span>
          <a href={`mailto:${COMPANY_INFO.email}`} className="inline-flex items-center gap-2 hover:text-gold">
            <Mail className="h-3.5 w-3.5 text-gold" />
            {COMPANY_INFO.email}
          </a>
          <div className="flex items-center gap-3">
            <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
            {COMPANY_INFO.phones.map((phone, idx) => (
              <span key={phone.raw} className="flex items-center gap-3">
                {idx > 0 && <span className="text-white/30">•</span>}
                <a href={`tel:${phone.raw}`} className="hover:text-gold">
                  {phone.display}
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] tracking-widest">
          <button
            onClick={() => switchLang("fr")}
            className={i18n.language === "fr" ? "text-gold font-bold" : "hover:text-gold transition-colors"}
            aria-label="Français"
          >
            FR
          </button>
          <span className="text-white/30">|</span>
          <button
            onClick={() => switchLang("en")}
            className={i18n.language === "en" ? "text-gold font-bold" : "hover:text-gold transition-colors"}
            aria-label="English"
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}
