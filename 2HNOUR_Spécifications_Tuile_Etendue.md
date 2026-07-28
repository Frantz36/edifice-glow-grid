# SPECIFICATIONS UI/UX & SPÉCIFICATIONS STYLE : TUILE ACCORDÉON ÉTENDUE (2HNOUR SARL)

Ce document définit les spécifications techniques, UI/UX, esthétiques et d'animation pour l'implémentation de la **tuile de service extensible / déroulante (Accordion Card)** du site web de **2HNOUR SARL**.

---

## 1. VISION DESIGN & IDENTITÉ VISUELLE

Conformément à l'image de marque de **2HNOUR SARL**, l'expérience utilisateur doit véhiculer :
* **Prestige & Sobriété :** Palette basée sur des teintes sombres/obsidienne (`#0F1115`), blanc immaculé (`#FFFFFF`), gris pierre/fond doux (`#F8F9FA`), et accents doreur/laiton (`#D4AF37` / `#C5A059`).
* **Fluidité & Rigueur Technique :** Transitions organiques, animations d'ouverture/fermeture sans saut de layout (*layout jump*), typographie haute lisibilité.

---

## 2. NOUVELLE DISPOSITION DE LA TUILE (ÉCROS & RÉARRANGEMENT)

### A. État Contracté (Tuile initiale — Résumé)
* **Colonnes :** 2 colonnes asymétriques sur Desktop (`60%` Texte / `40%` Visuel).
* **Partie Gauche (Texte) :**
  1. *Kicker / Tag* (`01 / PÔLE CONSTRUCTION`)
  2. *Titre H2 d'impact*
  3. *Paragraphe de description synthétique*
  4. *Grille du périmètre d'intervention* (2 colonnes de puces)
  5. *Badges / Chips de compétences* (flex wrap)
  6. *Barre d'action inférieure* :
     * Bouton Principal : `[Demander un devis →]` (Plein / Sombre ou Doré)
     * Bouton Déroulant : `[Découvrir l'expertise complète ↓]` (Lien interactif avec icône rotative)
* **Partie Droite (Visuel) :**
  * Image d'illustration dans une carte aux coins arrondis (`border-radius: 16px`).
  * Badge flottant (icône du pôle) superposé sur l'image en haut à gauche.

### B. Comportement lors de l'Expansion (Agrandissement)
Lors du clic sur **`Découvrir l'expertise complète`** :
1. **Redimensionnement de l'image (Image Resizing & Focus) :**
   * L'image passe d'un format carte fixe (`aspect-ratio: 4/3` ou `height: 320px`) à un format bannières/panoramique contrôlé ou se réaligne en haut de colonne avec une ombre portée ajustée (`box-shadow`), permettant de libérer l'espace visuel.
   * L'icône de la flèche du bouton subit une **rotation de 180°** (`rotate-180`).
   * Le texte du bouton devient : `Réduire l'expertise ↑`.
2. **Déploiement du Panneau Étendu (Expanded Accordion Content) :**
   * Le panneau d'extension s'ouvre sous la grille initiale avec une animation d'accordéon fluide (`height: 0` -> `height: auto` avec `fade-in`).
   * La largeur s'étend sur **100% de la carte**.
   * Séparation nette via une ligne fine dorée/laiton translucide (`border-top: 1px solid rgba(212, 175, 55, 0.2)`).

---

## 3. STRUCTURE DES DONNÉES DU PANNEAU ÉTENDU (LES 5 SOUS-BLOCS)

Le panneau déroulé intègre une grille à 2 ou 3 colonnes selon les résolutions pour présenter les 5 sous-sections techniques :

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🔽 PANNEAU DÉROULÉ : EXPERTISE COMPLÈTE                                   │
├──────────────────────────────────────┬──────────────────────────────────────┤
│ 🛠️ 1. Méthodologie & Processus       │ 📐 2. Normes & Conformité            │
│ (Étapes d'exécution, ingénierie)     │ (DTU, Eurocodes, Sécurité RSE)       │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ 💼 3. Typologie de Projets / Cas     │ ⚙️ 4. Parc Matériel & Équipements    │
│ (Bâtiments publics, VIP, tertiaire) │ (Outillage spécialisé, machines)     │
├──────────────────────────────────────┴──────────────────────────────────────┤
│ 🎯 5. Engagements, Garanties & SLA                                         │
│ (Astreinte 24/7, garanties décennales, délais contractuels)               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. DESIGN SYSTEM, CSS STYLES & SPECIFICATIONS ANIMATIONS

### A. Variables CSS & Palette (Thème 2HNOUR)
```css
:root {
  --color-primary-dark: #0f1115;      /* Noir Obsidienne */
  --color-accent-gold: #d4af37;       /* Laiton / Doré Prestige */
  --color-accent-gold-hover: #c5a059;
  --color-bg-card: #ffffff;          /* Fond de carte principal */
  --color-bg-expanded: #fcfcfd;      /* Fond du panneau déplié */
  --color-text-main: #1f2937;        /* Texte principal anthracite */
  --color-text-muted: #6b7280;       /* Texte secondaire */
  --color-border-subtle: #e5e7eb;    /* Bordure discrète */
  
  --radius-card: 20px;
  --radius-image: 16px;
  --radius-badge: 9999px;

  --transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### B. Styles CSS de la Tuile et des Composants
```css
/* Card Container */
.service-card {
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-card);
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: var(--transition-smooth);
  overflow: hidden;
}

.service-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border-color: rgba(212, 175, 55, 0.3);
}

/* Redimensionnement & Alignement de l'Image */
.service-card__image-wrapper {
  position: relative;
  width: 100%;
  height: 340px;
  border-radius: var(--radius-image);
  overflow: hidden;
  transition: var(--transition-smooth);
}

.service-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease, filter 0.4s ease;
}

/* Modificateur image lorsque la tuile est étendue */
.service-card--expanded .service-card__image-wrapper {
  height: 280px; /* Légère réduction pour recentrer sur le texte */
}

/* Flèche de déclenchement (Toggle Icon) */
.toggle-icon {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.service-card--expanded .toggle-icon {
  transform: rotate(180deg);
}

/* Panneau Déroulant Accordéon */
.service-card__expanded-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  opacity: 0;
  margin-top: 0;
  border-top: 1px solid transparent;
}

.service-card--expanded .service-card__expanded-panel {
  grid-template-rows: 1fr;
  opacity: 1;
  margin-top: 28px;
  padding-top: 28px;
  border-top-color: rgba(212, 175, 55, 0.25);
}

.expanded-panel-inner {
  overflow: hidden; /* Nécessaire pour la transition grid-template-rows */
}

/* Grille interne du panneau déplié */
.expanded-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .expanded-grid {
    grid-template-columns: 1fr;
  }
}

.expanded-block {
  background-color: var(--color-bg-expanded);
  border: 1px solid #f0f0f4;
  border-left: 3px solid var(--color-accent-gold);
  border-radius: 12px;
  padding: 20px;
}

.expanded-block h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.expanded-block p, .expanded-block ul {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}
```

---

## 5. RÉFÉRENTIEL DES CONTENUS ÉTENDUS POUR LES 8 SERVICES

### 01. Construction & Gros Œuvre
* **1. Méthodologie & Approche :** Étude géotechnique préalable, suivi par ingénieurs BTP dédiés, phasage strict (fondations, superstructure, clos-couvert) et contrôle qualité continu sur le béton armé.
* **2. Normes & Conformité :** Respect des normes Eurocodes & DTU BTP, règles strictes de sécurité du travail en hauteur et plan RSE d'élimination des déchets.
* **3. Cas d'Usage & Projets Cibles :** Sièges administratifs, complexes résidentiels de standing, établissements universitaires, cliniques et halls logistiques.
* **4. Moyens Matériels :** Centrales à béton partenaires, grues, engins de terrassement modernes, coffrages métalliques et équipement de topographie laser.
* **5. Engagements & SLA :** Respect du planning contractuel, garanties décennales et rapport d'avancement hebdomadaire transmis au Maître d'Ouvrage.

### 02. Réhabilitation & Rénovation
* **1. Méthodologie & Approche :** Diagnostic structurel et relevé 3D, confortement du bâti existant, ravalement thermique/esthétique de façade, restructuration intérieure lourde.
* **2. Normes & Conformité :** Normes d'accessibilité PMR (Personnes à Mobilité Réduite), conformité sécurité incendie (ERP) et performance énergétique.
* **3. Cas d'Usage & Projets Cibles :** Modernisation d'immeubles de bureaux vétustes, transformation de bâtiments publics en espaces VIP, réhabilitation de façades.
* **4. Moyens Matériels :** Échafaudages sécurisés homologués, équipements d'aérogommage, outils de contrôle non destructif.
* **5. Engagements & SLA :** Capacité de maintien de l'activité en site occupé, maîtrise des nuisances sonores et poussières.

### 03. Entretien & Maintenance des Infrastructures
* **1. Méthodologie & Approche :** Audit initial des installations, déploiement d'un Plan de Maintenance Préventive (PMP), gestion des interventions curatives via outil GMAO.
* **2. Normes & Conformité :** Normes électriques NFC 15-100, réglementation fluides frigorigènes (CVC) et sécurité sanitaire des réseaux d'eau.
* **3. Cas d'Usage & Projets Cibles :** Tours de bureaux, hôpitaux, ministères, institutions bancaires et sites stratégiques.
* **4. Moyens Matériels :** Caméras thermographiques, analyseurs de réseaux électriques, valises de diagnostic CVC et véhicules d'urgence.
* **5. Engagements & SLA :** Astreinte technique 24/7, délai d'intervention garanti sous 2h à 4h pour pannes critiques.

### 04. Nettoyage Professionnel & Hygiène
* **1. Méthodologie & Approche :** Dépoussiérage, lavage, monobrosse et traitement de surfaces nobles (marbre, laiton, boiseries) selon des protocoles formalisés.
* **2. Normes & Conformité :** Produits écologiques certifiés, protocoles d'hygiène hospitalière et sécurité RSE des agents.
* **3. Cas d'Usage & Projets Cibles :** Entretien quotidien de sièges sociaux, désinfection de milieux médicaux, remise en état / livraison de fin de chantier BTP.
* **4. Moyens Matériels :** Autolaveuses autoportées, monobrosses haute vitesse, aspirateurs industriels filtration HEPA.
* **5. Engagements & SLA :** Agents en tenue uniforme certifiée, traçabilité des passages et réactivité sur interventions d'urgence.

### 05. Prestations 3D (Désinfection, Désinsectisation, Dératisation)
* **1. Méthodologie & Approche :** Inspection visuelle, pose d'appâts/pièges, nébulisation/fumigation, plan d'étanchéité anti-nuisibles et suivi périodique.
* **2. Normes & Conformité :** Utilisation exclusive de produits biocides homologués par le Ministère de la Santé/Environnement, respect de la faune non-cible.
* **3. Cas d'Usage & Projets Cibles :** Traitement de locaux d'archives, entrepôts agroalimentaires, résidences d'État, hôpitaux et bâtiments publics.
* **4. Moyens Matériels :** Nébuliseurs électriques à froid, thermonébuliseurs, EPI intégraux et détecteurs UV.
* **5. Engagements & SLA :** Rapports de traitement délivrés post-intervention, garantie de résultat sur contrats d'abonnement.

### 06. Aménagement Paysager & Espaces Verts
* **1. Méthodologie & Approche :** Modélisation paysagère, sélection de végétaux adaptés au microclimat, préparation des sols, engazonnement, installation d'irrigation.
* **2. Normes & Conformité :** Gestion raisonnée de l'eau, zéro produit phytosanitaire toxique dans les zones fréquentées, élagage sécurisé.
* **3. Cas d'Usage & Projets Cibles :** Parcs de sièges sociaux, jardins de résidences officielles, abords d'universités et aménagements urbains.
* **4. Moyens Matériels :** Tondeuses autoportées professionnelles, taille-haies télescopiques, nacelles d'élagage et centrales d'arrosage automatique.
* **5. Engagements & SLA :** Contrats d'entretien saisonnier assurant la beauté continue du patrimoine végétal.

### 07. Travaux de Finition & Embellissement
* **1. Méthodologie & Approche :** Découpe et pose de haute précision (calpinage) de roches nobles, habillages en boiseries, incrustations de laiton et finitions main.
* **2. Normes & Conformité :** Normes de résistance à l'usure du marbre/granit, traitement ignifuge des boiseries intérieures (classement feu ERP).
* **3. Cas d'Usage & Projets Cibles :** Halls de réception VIP, salles de conseil/conférence, suites ministérielles, résidences de haut standing.
* **4. Moyens Matériels :** Scies à eau diamantées pour marbres, découpe laser pour laiton/métal, polisseuses à disque diamant.
* **5. Engagements & SLA :** Finition "zéro défaut", protection des surfaces nobles pendant les travaux et remis d'un guide d'entretien.

### 08. Gestion Durable du Patrimoine Immobilier
* **1. Méthodologie & Approche :** Audit technique global (TDD - Technical Due Diligence), analyse de la vétusté, élaboration du Plan de Maintenance Pluriannuel (PPI).
* **2. Normes & Conformité :** Alignement sur les objectifs de transition énergétique, décrets tertiaires, normes de valeur vénale et bilans carbone.
* **3. Cas d'Usage & Projets Cibles :** Portefeuilles immobiliers institutionnels, parcs d'immeubles de bureaux, patrimoine foncier d'entreprises.
* **4. Moyens Matériels / Outils :** Logiciels d'Asset Management, outils de simulation énergétique du bâtiment et cartographie SIG.
* **5. Engagements & SLA :** Rapports d'audit consolidés avec préconisations financières chiffrées sous 30 jours.

---

## 6. CODE COMPOSANT HTML / JAVASCRIPT EXEMPLE (PRÊT À L'EMPLOI)

```html
<div class="service-card" id="card-service-01">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    <!-- Colonne Gauche : Texte & Actions -->
    <div class="lg:col-span-7">
      <span class="text-xs font-bold tracking-wider text-amber-600 uppercase">01 / Pôle Construction</span>
      <h2 class="text-2xl font-bold text-gray-900 mt-2 mb-3">Construction — Réalisation d'ouvrages aux plus hauts standards</h2>
      <p class="text-gray-600 text-sm leading-relaxed mb-6">
        Réalisation d'ouvrages aux plus hauts standards de qualité, sécurité et performance. Nous assurons le respect strict des normes techniques, des délais contractuels et des exigences de nos partenaires.
      </p>
      
      <!-- Périmètre -->
      <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Périmètre d'intervention & Domaines d'application :</h4>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-6">
        <li class="flex items-center gap-2">
          <span class="text-amber-500">✓</span> Bâtiments administratifs
        </li>
        <li class="flex items-center gap-2">
          <span class="text-amber-500">✓</span> Immeubles résidentiels
        </li>
        <li class="flex items-center gap-2">
          <span class="text-amber-500">✓</span> Établissements scolaires
        </li>
        <li class="flex items-center gap-2">
          <span class="text-amber-500">✓</span> Centres de santé
        </li>
      </ul>

      <!-- Badges -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Bâtiments Administratifs</span>
        <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Normes BTP</span>
      </div>

      <!-- Actions -->
      <div class="flex flex-wrap items-center gap-4">
        <a href="#contact" class="px-5 py-2.5 bg-gray-900 text-white font-medium text-sm rounded-full hover:bg-black transition-colors">
          Demander un devis →
        </a>
        <button onclick="toggleCard('card-service-01')" class="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">
          <span class="toggle-text">Découvrir l'expertise complète</span>
          <span class="toggle-icon">↓</span>
        </button>
      </div>
    </div>

    <!-- Colonne Droite : Visuel -->
    <div class="lg:col-span-5">
      <div class="service-card__image-wrapper">
        <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1000" alt="Construction 2HNOUR" class="service-card__image" />
      </div>
    </div>

  </div>

  <!-- Panneau Déroulant Étendu -->
  <div class="service-card__expanded-panel">
    <div class="expanded-panel-inner">
      <div class="expanded-grid">
        <div class="expanded-block">
          <h4>🛠️ Méthodologie & Approche Technique</h4>
          <p>Étude géotechnique préalable, suivi par ingénieurs BTP dédiés, phasage strict et contrôle qualité sur le béton armé.</p>
        </div>
        <div class="expanded-block">
          <h4>📐 Normes, Conformité & Certifications</h4>
          <p>Respect des normes Eurocodes & DTU BTP, règles de sécurité du travail en hauteur et tri sélectif des déchets BTP.</p>
        </div>
        <div class="expanded-block">
          <h4>💼 Typologie de Projets Réalisables</h4>
          <p>Sièges administratifs, complexes résidentiels de standing, établissements universitaires, cliniques et halls logistiques.</p>
        </div>
        <div class="expanded-block">
          <h4>⚙️ Moyens Matériels & Équipements</h4>
          <p>Centrales à béton partenaires, grues, engins de terrassement modernes et coffrages métalliques de haute précision.</p>
        </div>
        <div class="expanded-block md:col-span-2">
          <h4>🎯 Engagement, SLA & Garanties</h4>
          <p>Respect du planning contractuel, garanties décennales, assurances tous risques chantier et rapport d'avancement hebdomadaire.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    const toggleText = card.querySelector('.toggle-text');
    
    card.classList.toggle('service-card--expanded');
    
    if (card.classList.contains('service-card--expanded')) {
      toggleText.textContent = "Réduire l'expertise";
    } else {
      toggleText.textContent = "Découvrir l'expertise complète";
    }
  }
</script>
```
