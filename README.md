# Cassiopée

Site web du Chœur Cassiopée, chorale associative de jeunes adultes basée à Lyon.

## Stack technique

- **Framework** : [Astro](https://astro.build) (site statique)
- **CMS** : [Contentful](https://www.contentful.com) (gestion du contenu)
- **Hébergement** : [GitHub Pages](https://pages.github.com)

Le contenu (textes, images, concerts, vidéos...) est géré depuis Contentful par les membres de l'association. Le site est régénéré automatiquement à chaque modification du contenu ou du code.

## Installation

### Prérequis

- Node.js 20+
- Un accès au space Contentful du projet

### Mise en place

```sh
npm install
```

Créer un fichier `.env` à la racine du projet avec les identifiants Contentful :

```
PUBLIC_CONTENTFUL_SPACE_ID=<space_id>
PUBLIC_CONTENTFUL_ACCESS_TOKEN=<access_token>
```

### Commandes

| Commande          | Description                                    |
| :---------------- | :--------------------------------------------- |
| `npm run dev`     | Lance le serveur de développement (`localhost:4321`) |
| `npm run build`   | Génère le site statique dans `./dist/`         |
| `npm run preview` | Prévisualise le build en local                 |
| `npm run lint`    | Vérifie le code avec ESLint                    |
| `npm run format`  | Formate le code avec Prettier                  |

## Déploiement

Le déploiement est automatisé via GitHub Actions (`.github/workflows/deploy.yml`) :

- **Déclencheurs** : push sur `main`, dispatch manuel, ou webhook Contentful
- **Les credentials Contentful** sont stockés dans les secrets du repository GitHub
- Le site est publié sur GitHub Pages

## Structure du projet

```
src/
├── components/    # Composants réutilisables (Header, Footer, Lightbox...)
├── layouts/       # Layout principal
├── lib/           # Client Contentful
├── pages/         # Pages du site
└── types/         # Types TypeScript pour Contentful
```