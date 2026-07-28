# SPÉCIFICATIONS TECHNIQUES & UI/UX : REFONTE DE LA TUILE ÉTENDUE (2HNOUR SARL)

Ce document fournit les instructions de restructuration pour corriger le problème d'affichage et de mise en page de la **tuile de service déroulante** du site web de **2HNOUR SARL**[cite: 1].

---

## 1. DIAGNOSTIC DES PROBLÈMES DE L'ANCIENNE VERSION

L'analyse du rendu précédent a mis en évidence trois défauts majeurs :

* **Rupture de Grille (Layout Break) :** Le panneau déroulant s'insérait uniquement dans la colonne de droite (sous le texte principal) au lieu de s'étendre sur toute la largeur. Cela créait un vide blanc sous l'image de gauche et déformait la structure.
* **Absence de Contraste :** Les blocs de la section étendue ressemblaient à de simples boîtes grises sur fond blanc, ce qui manquait de relief et de prestige.
* **Redondance du Contenu :** Les informations présentées dans le panneau étendu répétaient les puces déjà affichées dans la partie supérieure.

---

## 2. NOUVELLE RÈGLE DE DISPOSITION SPATIALE

Le panneau étendu doit **sortir de la grille à 2 colonnes** pour venir se placer en **Full Width (100% de la largeur)** sur un fond sombre obsidienne (`#0F1115`), directement sous la carte parent.

---

## 3. DISPOSITION DES ÉLÉMENTS DANS LA TUILE DÉROULÉE

Lorsque l'utilisateur clique sur **« Découvrir l'expertise complète »**, le panneau s'ouvre. Voici l'organisation de haut en bas :

### A. En-tête du Panneau (Bandeau Supérieur)
* **Partie gauche :** Une pastille lumineuse animée suivie du titre principal : **« DÉTAILS DE L'INGÉNIERIE & RIGUEUR OPÉRATIONNELLE »**.
* **Partie droite :** Un badge affichant le code de référence unique de la prestation (ex: `SPEC-06-EV`).
* **Séparation :** Une ligne fine de séparation dorée translucide.

### B. Grille d'Expertise Technique (4 Blocs en 2x2)
Les 4 cartes techniques sont disposées sur 2 colonnes (en 1 colonne sur mobile) :

1. **Bloc 1 — Méthodologie & Processus (Haut Gauche) :**
   * *Titre :* Icône d'outil + Intitulé en capitales dorées.
   * *Contenu :* Étapes d'exécution (études de sol, modélisation, installation de réseaux d'irrigation).
2. **Bloc 2 — Normes & Conformité RSE (Haut Droite) :**
   * *Titre :* Icône d'équerre + Intitulé en capitales dorées.
   * *Contenu :* Engagements environnementaux (gestion de l'eau, zéro produit phytosanitaire toxique).
3. **Bloc 3 — Projets Cibles & Application (Bas Gauche) :**
   * *Titre :* Icône de bâtiment + Intitulé en capitales dorées.
   * *Contenu :* Exemples d'infrastructures ciblées (sièges sociaux, résidences d'État, campus).
4. **Bloc 4 — Parc Matériel Spécialisé (Bas Droite) :**
   * *Titre :* Icône d'engin + Intitulé en capitales dorées.
   * *Contenu :* Équipements techniques utilisés (tondeuses autoportées, nacelles d'élagage, programmateurs).

### C. Bandeau d'Engagement & SLA (Pleine Largeur - Bas de Panneau)
Un bloc horizontal venant conclure la section étendue :
* **Gauches :** Titre **« Engagement SLA & Contrats Saisonniers »** suivi d'un résumé des garanties (planning annuel, réactivité post-intempéries, remplacement des végétaux).
* **Droite :** Un bouton d'action secondaire dédié (**« Étude Paysagère Offerte → »**) orienté conversion.

---

## 4. CODE HTML / TAILWIND CSS CORRIGÉ

Voici le composant complet à intégrer :

```html
<!-- Carte de Service Globale (2HNOUR SARL) -->
<div class="w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden mb-8">
  
  <!-- SECTION SUPÉRIEURE : Grille 2 Colonnes -->
  <div class="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    <!-- Colonne Gauche : Image (5 Colonnes) -->
    <div class="lg:col-span-5 w-full">
      <div class="relative w-full h-[320px] rounded-xl overflow-hidden shadow-inner">
        <span class="absolute top-3 left-3 bg-amber-500/90 text-black p-2 rounded-lg text-xs font-bold z-10 shadow">
          🌴 06
        </span>
        <img 
          src="[https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000](https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000)" 
          alt="Aménagement Paysager 2HNOUR" 
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Colonne Droite : Texte (7 Colonnes) -->
    <div class="lg:col-span-7 flex flex-col justify-between">
      <div>
        <span class="text-xs font-bold tracking-widest text-amber-600 uppercase">06 / Pôle Espaces Verts</span>
        <h2 class="text-2xl font-extrabold text-gray-900 mt-1 mb-3">
          Aménagement Paysager & Entretien — Création de la signature végétale
        </h2>
        <p class="text-gray-600 text-sm leading-relaxed mb-5">
          Création et entretien de la signature végétale extérieure pour valoriser l'image de marque de votre organisation à travers ses abords extérieurs.
        </p>

        <!-- Périmètre d'intervention -->
        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Périmètre d'intervention & Domaines d'application :</h4>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-gray-700 mb-6">
          <li class="flex items-center gap-2"><span class="text-amber-500 font-bold">✓</span> Création d'espaces paysagers</li>
          <li class="flex items-center gap-2"><span class="text-amber-500 font-bold">✓</span> Taille des haies & élagage</li>
          <li class="flex items-center gap-2"><span class="text-amber-500 font-bold">✓</span> Tonte, arrosage & fertilisation</li>
          <li class="flex items-center gap-2"><span class="text-amber-500 font-bold">✓</span> Nettoyage des espaces extérieurs</li>
        </ul>

        <!-- Badges -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Création Paysagère</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Entretien Jardins</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">Taille & Élagage</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-wrap items-center gap-4 pt-2">
        <a href="#contact" class="px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-full transition-all shadow">
          Demander un devis →
        </a>
        <button onclick="toggleCard('card-06')" class="inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors">
          <span id="btn-text-card-06">Découvrir l'expertise complète</span>
          <span id="btn-icon-card-06" class="inline-block transition-transform duration-300">↓</span>
        </button>
      </div>
    </div>

  </div>

  <!-- PANNEAU ÉTENDU FULL WIDTH (HORS DE LA GRILLE 12 COLONNES) -->
  <div id="card-06" class="hidden w-full bg-[#0F1115] border-t-2 border-amber-500 text-white p-6 md:p-8 transition-all">
    
    <div class="max-w-6xl mx-auto">
      
      <!-- En-tête -->
      <div class="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          <h3 class="text-sm font-bold tracking-wider uppercase text-amber-400">Détails de l'Ingénierie & Rigueur Opérationnelle</h3>
        </div>
        <span class="text-[10px] font-mono px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
          SPEC-06-EV
        </span>
      </div>

      <!-- Grille 2x2 des Blocs Techniques -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        
        <div class="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/40 transition-colors">
          <div class="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
            <span>🛠️</span> Méthodologie & Processus
          </div>
          <p class="text-xs text-gray-300 leading-relaxed">
            Modélisation et étude d'ensoleillement des sols, sélection rigoureuse de végétaux adaptés au microclimat local, préparation enrichie des sols et pose de réseaux d'irrigation goutte-à-goutte automatisés.
          </p>
        </div>

        <div class="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/40 transition-colors">
          <div class="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
            <span>📐</span> Normes & Conformité RSE
          </div>
          <p class="text-xs text-gray-300 leading-relaxed">
            Gestion écoresponsable de la ressource en eau, politique zéro produit phytosanitaire toxique sur les espaces fréquentés et respect des périodes de taille pour préserver la biodiversité.
          </p>
        </div>

        <div class="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/40 transition-colors">
          <div class="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
            <span>🏛️</span> Projets Cibles & Application
          </div>
          <p class="text-xs text-gray-300 leading-relaxed">
            Espaces extérieurs et parcs de sièges sociaux, résidences officielles et d'État, campus universitaires, complexes hôteliers et aménagements paysagers urbains.
          </p>
        </div>

        <div class="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/40 transition-colors">
          <div class="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
            <span>🚜</span> Parc Matériel Spécialisé
          </div>
          <p class="text-xs text-gray-300 leading-relaxed">
            Flotte de tondeuses autoportées professionnelles, taille-haies télescopiques à faible émission sonore, nacelles d'élagage sécurisées et programmateurs d'arrosage connectés.
          </p>
        </div>

      </div>

      <!-- Bandeau d'Engagement / SLA -->
      <div class="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-1">
            <span>🎯</span> Engagement SLA & Contrats Saisonniers
          </div>
          <p class="text-xs text-gray-300">
            Planning de passages formalisé à l'année, intervention rapide post-intempéries et remplacement garanti des végétaux en cas de dépérissement.
          </p>
        </div>
        <a href="#contact" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold rounded-lg transition-colors">
          Étude Paysagère Offerte →
        </a>
      </div>

    </div>

  </div>

</div>

<!-- SCRIPT DE BASCULEMENT JS -->
<script>
  function toggleCard(id) {
    const panel = document.getElementById(id);
    const btnText = document.getElementById('btn-text-' + id);
    const btnIcon = document.getElementById('btn-icon-' + id);

    if (panel.classList.contains('hidden')) {
      panel.classList.remove('hidden');
      btnText.innerText = "Réduire l'expertise";
      btnIcon.style.transform = "rotate(180deg)";
    } else {
      panel.classList.add('hidden');
      btnText.innerText = "Découvrir l'expertise complète";
      btnIcon.style.transform = "rotate(0deg)";
    }
  }
</script>