import {
  Building2,
  Hammer,
  Wrench,
  SprayCan,
  Bug,
  Trees,
  Paintbrush,
  Landmark,
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
    slug: "construction",
    title: "Construction",
    short: "Bâtiments administratifs, résidentiels, scolaires, santé, industriels & logistiques.",
    desc: "Réalisation d'ouvrages aux plus hauts standards de qualité, sécurité et performance.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "rehabilitation",
    title: "Réhabilitation & Rénovation",
    short: "Redonner vie aux ouvrages existants et optimiser leur valeur patrimoniale.",
    desc: "Améliorer la fonctionnalité et l'esthétique tout en réduisant les coûts liés au vieillissement.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "maintenance",
    title: "Entretien & Maintenance des Infrastructures",
    short: "Pérennisation et continuité opérationnelle du bâtiment.",
    desc: "Garantir le bon fonctionnement continu et allonger la durée de vie des actifs.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "nettoyage",
    title: "Nettoyage Professionnel & Hygiène",
    short: "Prestations conformes aux normes d'hygiène les plus exigeantes.",
    desc: "Environnements administratifs, industriels, commerciaux et résidentiels.",
    icon: SprayCan,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "3d",
    title: "Désinfection, Désinsectisation & Dératisation (3D)",
    short: "Solutions professionnelles de lutte contre les nuisibles.",
    desc: "Respect des réglementations, de la sécurité des occupants et des exigences environnementales.",
    icon: Bug,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "paysager",
    title: "Aménagement Paysager & Entretien des Espaces Verts",
    short: "Création et entretien de la signature végétale extérieure.",
    desc: "Valorisation de l'image de marque de l'organisation à travers ses abords extérieurs.",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "finition",
    title: "Travaux de Finition & Embellissement",
    short: "Valorisation durable et amélioration du confort des bâtiments.",
    desc: "Peinture, revêtements, faux plafonds, menuiserie, plomberie, électricité et décoration sur-mesure.",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "patrimoine",
    title: "Gestion Durable du Patrimoine Immobilier",
    short: "Conseil stratégique et accompagnement à la valeur.",
    desc: "Diagnostic complet, planification d'entretien et optimisation des coûts d'exploitation.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
];

export const REFERENCES = [
  {
    name: "Premier Ministère de la République du Cameroun",
    mission: "Entretien et nettoyage des bâtiments administratifs.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ministère des Relations Extérieures (MINREX)",
    mission: "Maintenance et entretien des espaces institutionnels.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Société Immobilière du Cameroun (SIC)",
    mission: "Préservation et valorisation du patrimoine bâti.",
    image:
      "https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1581092918484-8313ea4e1c7d?auto=format&fit=crop&w=1200&q=80",
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

export const HERO_IMAGE = "/pics/office-2hnour.png";

export const PARTNERS = [
  { name: "Hôtel Hilton", image: "/partners/hilton.png" },
  { name: "CAMI TOYOTA", image: "/partners/cami.png" },
  { name: "Hôtel Mont-Febe", image: "/partners/hotel-mont-febe.jpeg" },
  { name: "MINREX", image: "/partners/minrex.jpg" },
  { name: "SIC", image: "/partners/sic.jpg" },
  { name: "SNH", image: "/partners/snh.jpg" },
  { name: "CNPS", image: "/partners/cnps.jpeg" },
];