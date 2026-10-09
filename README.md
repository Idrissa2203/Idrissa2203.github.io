# Portfolio — Idrissa Wade

Site statique : HTML5 + CSS3 + JavaScript, sans framework ni dépendance.
Ouvre `index.html` dans le navigateur (ou utilise l'extension *Live Server* de VS Code).

## Structure

```text
portfolio/
├── index.html            Accueil (toutes les sections)
├── pages/                projets.html · parcours.html · contact.html
├── css/                  base.css (couleurs, polices) · components.css · layout.css
├── js/                   theme · nav · reveal · filters · form · scroll-top
├── images/               profile.jpg · projets/ · logos/
└── assets/               favicon.svg · cv-idrissa-wade.pdf (à ajouter)
```

## À compléter (Ctrl+Maj+F dans VS Code, « rechercher dans tous les fichiers »)

| Chercher | Remplacer par |
|---|---|
| `EMAIL` | ton adresse e-mail (aussi dans `js/form.js`, constante `CONTACT_EMAIL`) |
| `GITHUB_URL` | l'URL de ton profil GitHub |
| `LINKEDIN_URL` | l'URL de ton profil LinkedIn |
| `GITHUB_URL_PROJET_1` … `_4` | le dépôt GitHub de chaque projet (supprime le lien s'il n'existe pas) |
| `SITE_URL` | l'adresse publique du site, une fois en ligne (balises SEO de `index.html`) |
| `class="todo"` | chaque champ en pointillés : hackathon, rôle, statut, périodes, données du projet Data |

Fichiers à ajouter :

- `images/profile.jpg` — photo carrée (≈ 600 × 600 px, < 150 Ko)
- `assets/cv-idrissa-wade.pdf` — ton CV
- `images/projets/` — captures : `gestion-pedagogique.jpg`, `station-meteo.jpg`, `data-science.jpg`, `reseaux.jpg` (16:9, ≈ 1200 × 675 px, WebP/JPG compressé)
- `images/og-cover.jpg` — image d'aperçu pour le partage (1200 × 630 px)

Tant qu'une image est absente, le site affiche un fond de remplacement (aucune erreur visible).

## Modifier le site

- **Couleurs** : `css/base.css`, variables `--accent` et `--accent-2` (thème sombre) puis dans `[data-theme="light"]`.
- **Niveaux de compétence** : dans `index.html`, attribut `data-level="1|2|3"` + texte. Les niveaux fournis sont des **estimations : ajuste-les** pour qu'ils reflètent ta réalité.
- **Ajouter un projet** : copie un bloc `<article class="card project-card">` dans `pages/projets.html` et change `data-category` (`web`, `data`, `reseaux`, `iot`, `autres`). Le filtre le prend en compte automatiquement.

## Formulaire de contact

Le site n'a pas de serveur : une fois les champs validés, le formulaire ouvre ton application e-mail (`mailto:`) avec le message pré-rempli. Pour recevoir les messages directement, tu peux brancher un service gratuit comme Formspree ou Web3Forms (modifier l'attribut `action` du `<form>` et adapter `js/form.js`).

## Mise en ligne gratuite

GitHub Pages, Netlify ou Cloudflare Pages : déposer le dossier `portfolio/` tel quel, puis mettre l'URL obtenue à la place de `SITE_URL`.

## Vérifications avant publication

- Tester à 320, 375, 768, 1024 et 1440 px (outils de développement → mode responsive).
- Lighthouse (Chrome → F12) : viser 90+ en Accessibilité, SEO et Performance.
- Relire chaque champ `todo` : rien d'inventé, rien de laissé en placeholder.
