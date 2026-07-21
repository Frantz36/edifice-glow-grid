import { MapPin, Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-obsidian-marble text-white/80 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            Rue Ceper, Yaoundé, Cameroun
          </span>
          <a href="mailto:contact@2hnour.cm" className="inline-flex items-center gap-2 hover:text-gold">
            <Mail className="h-3.5 w-3.5 text-gold" />
            contact@2hnour.cm
          </a>
          <a href="tel:+237600000000" className="inline-flex items-center gap-2 hover:text-gold">
            <Phone className="h-3.5 w-3.5 text-gold" />
            +237 6 00 00 00 00
          </a>
        </div>
        <div className="flex items-center gap-2 text-[11px] tracking-widest">
          <button className="text-gold">FR</button>
          <span className="text-white/30">|</span>
          <button className="hover:text-gold">EN</button>
        </div>
      </div>
    </div>
  );
}