# The N’Takou – Visual Identity Web App

Site vitrine développé en **React 18 + Vite** avec **Tailwind CSS v3** pour présenter la mission, les programmes et les contacts de l’ONG The N’Takou. L’application reprend la charte graphique (couleurs, typographies Burbank/Bebas/Host) ainsi que les variantes de logos décrites dans le guide.

## Sommaire
1. [Stack & prérequis](#stack--prérequis)  
2. [Installation & scripts](#installation--scripts)  
3. [Structure du projet](#structure-du-projet)  
4. [Contenu éditorial](#contenu-éditorial)  
5. [Animations & interactions](#animations--interactions)  
6. [Déploiement](#déploiement)  
7. [Maintenance & prochaines étapes](#maintenance--prochaines-étapes)

---

## Stack & prérequis
- Node.js ≥ 18  
- Gestionnaire npm (fourni avec Node)  
- Framework : Vite + React  
- Style system : Tailwind CSS v3 + PostCSS  
- Animations : Framer Motion  
- Icônes : react-icons  
- Images hébergées sur **Pexels/Pixabay** + logos ODD (ONU)  

## Installation & scripts
```bash
npm install          # installe les dépendances
npm run dev          # lance le serveur local (http://localhost:5173)
npm run build        # génère la version production dans /dist
npm run lint         # vérifie le code avec ESLint
```

## Structure du projet
```
src/
  assets/              # logo placeholder et visuels statiques
  components/          # Navigation, cards, CTA, bouton top
  data/siteContent.js  # Textes FR/EN, statistiques, liens médias, programmes
  App.jsx              # Mise en page principale + sections
  index.css            # Imports de polices + styles globaux (hero, pattern…)
  main.jsx             # Point d’entrée React
tailwind.config.js     # Palette, typographies et utilitaires sur-mesure
```

## Contenu éditorial
- **Textes bilingues** : tous les libellés sont gérés dans `src/data/siteContent.js`.  
  - Pour ajouter un témoignage, dupliquer un objet dans `testimonials`.  
  - Pour mettre à jour les programmes, modifier le tableau `programs` (variant `standard`, `rouge` ou `vert`).  
- **Images** : chaque entrée peut recevoir une URL Pexels/Pixabay (format large 1200px).  
- **Logos médias / ODD** : liens SVG hébergés (ONU, France 24, etc.).  
- **Coordonnées** : section Contact dans `App.jsx` (téléphone, email, liens HelloAsso & réseaux sociaux).  

## Animations & interactions
- **Framer Motion** anime l’apparition des sections (hero, stats, témoignages, programmes, press room, join cards).  
- **Smooth scroll** intégré via `scroll-behavior: smooth` et bouton “back to top” (`ScrollToTopButton`).  
- **React Icons** pour les statistiques, réseaux sociaux, CTA et navigation mobile.  

## Déploiement
1. Construire l’app : `npm run build`.  
2. Déployer le dossier `dist` sur l’hébergeur souhaité (Netlify, Vercel, GitHub Pages ou serveur GoDaddy).  
3. Configurer le domaine `thentakou.com` chez GoDaddy :  
   - Créer un enregistrement **A** (ou **CNAME** selon la plateforme) pointant vers l’hébergeur.  
   - Ajouter éventuellement `www` en CNAME.  
4. Tester le site en production (desktop + mobile) et vérifier : navigation bilingue, formulaires, liens sociaux, mentions Union Européenne/GIZ.

## Maintenance & prochaines étapes
- **Contenu** : mettre à jour `siteContent.js` lors des nouvelles campagnes, articles presse ou chiffres d’impact.  
- **Images** : privilégier des visuels optimisés (≤ 300 Ko) pour garder de bonnes performances Lighthouse.  
- **Accessibilité** : compléter progressivement les attributs `aria-label` et vérifier le contraste des nouveaux visuels.  
- **Fonctionnalités futures** : intégration d’un véritable formulaire (EmailJS, backend léger) et d’un blog/actualités si besoin.  

Pour toute question ou évolution, documenter les modifications dans ce README afin que l’équipe N’Takou dispose d’une référence unique.
