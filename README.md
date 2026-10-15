# Site web de Camille Grasso

Ce dossier contient uniquement les sources du site Quarto. Les pages se modifient dans les fichiers `.qmd`, et le rendu HTML est généré dans `_site/`. Le guide Word, le brief et les maquettes sont conservés dans le dossier voisin `siteweb-camille-grasso-documents/`, hors du dépôt Git.

## Aperçu local

Depuis ce dossier, lancer `/Applications/quarto/bin/quarto preview --no-browser`.
Pour produire les fichiers HTML, lancer `/Applications/quarto/bin/quarto render` ; ils seront placés dans `_site/`.

## Modifier le prototype actuel

- `index.qmd` : textes et liens de l'accueil.
- `about/index.qmd` : introduction, quatre cartes de projets classées chronologiquement et parcours scientifique en un seul bloc de texte. Une carte se modifie directement dans le bloc `research-card-grid` ; son lien `href` mène à sa page de projet.
- `research/*/index.qmd` : une page détaillée par projet (réalité virtuelle, géométrie des durées, mental timeline, temps et conscience). Les illustrations des cartes sont dans `images/research/*-card.svg` ; les figures et leurs légendes du projet VR sont dans sa page.
- `research/duration-geometry/index.qmd` : la figure fixe est dans `images/research/duration-geometry.jpg`. Le GIF est réutilisé depuis `publications/geometry/gif1.gif` : remplacer ce seul fichier actualise l'animation sur les deux pages.
- `publications/*/index.qmd` : une publication par dossier ; modifier les métadonnées en tête de chaque fichier pour actualiser aussi sa carte. `publications/publication-card.ejs.md` définit seulement la présentation du catalogue.
- `talk/*/index.qmd` : une présentation par dossier ; les métadonnées alimentent la liste et la mise en avant (`featured: true`). `talk/talk-row.ejs.md` définit la présentation. Les filtres par type et année sont temporairement commentés dans `talk/index.qmd` ; pour les réactiver, décommenter les trois blocs indiqués dans ce fichier. Leur logique reste dans `talk/talk-filters.js`.
- `contact/index.qmd` et `license/index.qmd` : pages publiques conservées à leurs anciennes adresses. Le formulaire reprend l'identifiant Formspree déjà présent dans Hugo ; vérifier son fonctionnement avant publication.
- `_quarto.yml` : nom du site, navigation et pages rendues.
- `theme.scss` : couleurs, typographie, espacements et adaptation mobile.
- `images/portrait.jpg` : photographie de l'accueil.
- `files/cv.pdf` : PDF ouvert par le menu CV ; remplacer ce fichier en gardant son nom pour mettre le CV à jour.

La page commune About & research est à `/about/`. Chacune des quatre cartes ouvre sa propre page détaillée. Le texte sous les cartes présente le parcours scientifique d'un seul tenant, sans sections par projet. Les quatre publications et cinq présentations publiques sont reprises dans le site.

## Ajouter une présentation ou un poster

1. Placer le PDF public dans `files/`, par exemple `files/ccn-2026-poster.pdf`. Le dossier `files/` est automatiquement copié dans le site rendu. Créer aussi une image d'aperçu du poster dans `images/talks/`, par exemple `images/talks/ccn-2026-preview.png`.
2. Créer un dossier sous `talk/` avec un nom court sans espaces, par exemple `talk/new-poster/`, puis y créer `index.qmd`. On peut copier `talk/ccn_nyc/index.qmd` comme exemple réel ou adapter le modèle ci-dessous. La date est celle de la présentation, au format `AAAA-MM-JJ` ; si seule l'année est connue, supprimer la ligne `date:` et garder `year:`. Le tri sera alors moins précis.
3. Depuis le dossier `siteweb-camille-grasso/`, lancer `/Applications/quarto/bin/quarto render`. Vérifier la page `/talk/` et le lien PDF sur la nouvelle page dans l'aperçu local : la présentation apparaît automatiquement dans la liste, sans modifier `talk/index.qmd`, `_quarto.yml`, le template ou le JavaScript. Les filtres restent temporairement désactivés.

```qmd
---
title: "[Titre exact du poster]"
date: "[AAAA-MM-JJ]"
year: [AAAA]
talk-type: "Poster"
event: "[Nom de la conférence]"
location: "[Ville, pays]"
description: "[Une phrase courte pour la liste]"
talk-links:
  - label: "Poster"
    url: "../../files/ccn-2026-poster.pdf"
---

::: {.talk-article}

[Deux ou trois phrases pour présenter le poster, ses auteurs et ce qu'il montre.]

## Poster

<img class="talk-preview talk-preview--poster" src="../../images/talks/ccn-2026-preview.png" alt="Preview of the CCN 2026 poster" loading="lazy">

[Open poster (PDF) ↗]({{< meta talk-links.1.url >}}){.talk-preview-link target="_blank" rel="noopener noreferrer"}

[← All talks](../index.qmd){.text-link}

:::
```

Les champs `title`, `date`, `year`, `talk-type`, `event` et `description` alimentent la liste ; `date` est facultatif. Le chemin de l'image d'aperçu se modifie dans la balise `<img>` et le chemin du PDF dans `talk-links`. Pour des diapositives, remplacer le titre `## Poster` par `## Slides` et le texte du lien par `Open slides (PDF)`. Pour mettre une présentation en avant, ajouter `featured: true` sous `year`, après avoir retiré cette ligne de la présentation actuellement mise en avant. La mise en avant actuelle est le tutoriel RSA.

## Ajouter d'autres contenus

- **Publication :** copier le dossier d'une publication proche dans `publications/`, renommer le dossier, puis adapter `index.qmd` : titre, auteurs, année, statut, image, liens et texte. Mettre la nouvelle vignette dans `images/publications/`. La carte est créée automatiquement à partir des métadonnées de la page.
- **Projet de recherche :** créer `research/nom-du-projet/index.qmd` à partir de la page VR, puis ajouter sa carte dans le bloc `research-card-grid` de `about/index.qmd`. Remplacer l'image, le titre, le résumé et le `href` de la carte. Les pages de projet sont automatiquement incluses dans le rendu ; seules leurs cartes sont ajoutées manuellement.
- **Texte existant :** modifier le fichier `.qmd` de la page concernée. Pour le CV, remplacer `files/cv.pdf` sans changer son nom.

Pour retrouver une page source, partir de sa rubrique (`about/`, `publications/`, `research/`, `talk/`, `contact/`) et ouvrir son `index.qmd`. Les fichiers `_site/` sont générés à chaque rendu : ne pas les modifier directement.
