# Données de démonstration

Les fichiers de ce dossier décrivent **15 articles, 8 catégories, 8 emplacements et 3 projets entièrement fictifs**. Ils ne font pas partie du stock réel, ne proviennent pas de l'utilisateur et ne garantissent aucune caractéristique d'un produit commercial.

## Activer la démonstration

Ouvrir directement `demo.html`, par double-clic ou avec son URL locale `file://`. Une bannière « Jeu de démonstration — Données fictives » confirme le mode actif. Ce point d'entrée charge uniquement :

- `sample-catalogs-data.js` ;
- `sample-inventory-data.js` ;
- `sample-locations-data.js` ;
- `sample-projects-data.js`.

## Revenir au catalogue réel

Ouvrir `index.html` ou utiliser le lien « Revenir au catalogue réel » dans la bannière. `index.html` reste le point d'entrée par défaut et charge uniquement les fichiers de `data/`.

## Pourquoi les données restent séparées

Les deux modes utilisent des espaces de noms différents : `window.AtelierCatalogData` pour le réel et `window.AtelierCatalogSampleData` pour la démonstration. Chaque page ne charge que sa propre source. Cette séparation empêche une démonstration d'être prise pour un bien possédé et permet de vérifier qu'aucune activation ne modifie `data/`.

Ne jamais copier silencieusement ces entrées vers les données réelles. Toute création réelle exige une saisie fondée sur l'objet possédé, ses observations et ses sources.
