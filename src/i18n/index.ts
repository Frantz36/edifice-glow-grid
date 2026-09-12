import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "./fr.json";
import en from "./en.json";

// Détecter si on est dans un environnement navigateur
const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  i18n.use(LanguageDetector);
}

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  // Langue par défaut — utilisée côté serveur (SSR)
  lng: isBrowser ? undefined : "fr",
  fallbackLng: "fr",
  supportedLngs: ["fr", "en"],
  // CRITIQUE : init synchrone pour que les clés soient dispo avant le 1er render
  initImmediate: false,
  detection: isBrowser
    ? {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "2hnour-lang",
    }
    : undefined,
  interpolation: {
    escapeValue: false,
  },
});


export default i18n;