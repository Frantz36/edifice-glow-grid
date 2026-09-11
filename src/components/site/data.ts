import {
  Building2,
  Hammer,
  Wrench,
  Settings2,
  Handshake,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  desc: string;
  icon: LucideIcon;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "batir",
    title: "Bâtir",
    short: "Construction de bâtiments administratifs, résidentiels, scolaires, de santé, industriels & logistiques aux plus hauts standards.",
    desc: "Réalisation d'ouvrages neufs avec rigueur, sécurité et performance — du gros-œuvre à la livraison clé-en-main.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "equiper",
    title: "Équiper",
    short: "Travaux de finition, décoration sur-mesure, aménagements intérieurs & extérieurs pour des espaces fonctionnels et esthétiques.",
    desc: "Nous transformons les espaces bruts en environnements de prestige : finitions soignées, équipements techniques et aménagements paysagers.",
    icon: Settings2,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "entretenir",
    title: "Entretenir",
    short: "Gestion des installations intégrée : maintenance, nettoyage professionnel, 3D et entretien des espaces verts.",
    desc: "Pérennisation et continuité opérationnelle de vos actifs grâce à un service complet de maintenance, d'hygiène et de salubrité.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "renover",
    title: "Rénover",
    short: "Réhabilitation complète, réfection de façades, renforcement de structures et modernisation des installations existantes.",
    desc: "Redonner vie aux ouvrages existants et optimiser leur valeur patrimoniale en améliorant leur fonctionnalité et leur durabilité.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sengager",
    title: "S'engager",
    short: "Conseil stratégique, gestion durable du patrimoine, RSE et partenariats B2B pour un développement responsable.",
    desc: "Au-delà des chantiers, nous nous engageons à vos côtés : diagnostic, optimisation des actifs, éthique RSE et co-traitance.",
    icon: Handshake,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
];

export const REFERENCES = [
  {
    name: "Premier Ministère de la République du Cameroun",
    mission: "Entretien et nettoyage des bâtiments administratifs.",
    image: "/pics/pm.webp",
  },
  {
    name: "Ministère des Relations Extérieures (MINREX)",
    mission: "Maintenance et entretien des espaces institutionnels.",
    image: "/pics/minrex.jpeg",
  },
  {
    name: "Société Immobilière du Cameroun (SIC)",
    mission: "Préservation et valorisation du patrimoine bâti.",
    image: "/pics/sic.jpeg",
  },
];

export const POSTS = [
  {
    slug: "materiaux-durables",
    title: "Matériaux durables : bâtir pour le siècle à venir",
    excerpt:
      "Comment les matériaux locaux et innovants transforment la construction en Afrique centrale.",
    date: "12 Mars 2025",
    category: "BTP",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "maintenance-preventive",
    title: "Maintenance préventive : le levier caché de la performance",
    excerpt:
      "Une stratégie planifiée qui préserve la valeur des infrastructures publiques.",
    date: "28 Février 2025",
    category: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "espaces-verts-institutionnels",
    title: "Espaces verts institutionnels : un patrimoine à cultiver",
    excerpt:
      "L'aménagement paysager comme signature d'excellence pour les bâtiments d'État.",
    date: "10 Février 2025",
    category: "Aménagement",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
  },
];

export const CEO_IMAGE =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80";

export const HERO_IMAGE = "/pics/office-2hnour.jpeg";
export const LOGO_IMAGE = "/pics/logo 2HNOUR.png";

export const PARTNERS = [
  { name: "Hôtel Hilton", image: "/partners/hilton.png" },
  { name: "CAMI TOYOTA", image: "/partners/cami.png" },
  { name: "Hôtel Mont-Febe", image: "/partners/hotel-mont-febe.png" },
  { name: "MINREX", image: "/partners/minrex.png" },
  { name: "SIC", image: "/partners/sic.png" },
  { name: "SNH", image: "/partners/snh.png" },
  { name: "CNPS", image: "/partners/cnps.png" },
];

export const COMPANY_INFO = {
  email: "2hnourets@gmail.com",
  phones: [
    { display: "+237 6 86 76 89 69", raw: "+237686768969" },
    { display: "+237 6 70 57 91 39", raw: "+237670579139" },
    { display: "+237 6 57 87 44 48", raw: "+237657874448" },
  ],
  address: "Rue Ceper, Yaoundé, Cameroun",
  plusCode: "VGFC+VMW",
};