# Recherche et filtres

## Recherche disponible — FEATURE-005

La vue Catalogue propose une recherche textuelle instantanée, exécutée entièrement dans le navigateur. Elle porte exclusivement sur le nom, la catégorie et l'emplacement des articles. Les descriptions, projets et autres champs ne participent pas au résultat.

La comparaison ignore la casse et les accents, réduit les espaces consécutifs et conserve les valeurs originales pour l'affichage. Une saisie vide restaure toutes les cartes. Une recherche sans correspondance affiche un état dédié sans modifier les compteurs du tableau de bord, qui représentent toujours le catalogue complet.

## Évolutions ciblées

Référence, fabricant, sous-catégorie, description, tags, notes, marquages observés, caractéristiques et projet pourront devenir recherchables dans une Feature ultérieure. Ils ne le sont pas dans FEATURE-005.

## Normalisation V1

La recherche actuelle produit à la volée une forme de comparaison séparée de l'affichage : minuscules, espaces consécutifs réduits et comparaison tolérante aux accents. Tirets, espaces et séparateurs courants pourront être normalisés ultérieurement pour les références partielles, tout en conservant la valeur originale. Les synonymes seront une liste explicite et révisable, jamais une IA implicite.

Unités et valeurs numériques ne doivent pas être recherchées uniquement dans des chaînes. Les champs `numericValue`, `minimum`, `maximum`, `typical`, `unit` et `conditions` permettront des comparaisons futures après conversion contrôlée. Une plage doit distinguer « couvre la valeur demandée » de « valeur textuellement présente ». La recherche combinée viendra après des filtres simples fiables.

## Filtres ciblés

Catégorie, sous-catégorie, quantité disponible, emplacement, état, identification, confiance, projet, présence d'une datasheet, présence d'une photo réelle et informations à confirmer. Tous doivent afficher leur effet, leur combinaison et une réinitialisation. « Inconnu » est une option utile, pas un élément exclu silencieusement.

La V1 n'annonce ni recherche sémantique, ni langage naturel, ni intelligence artificielle. Un résultat vide explique les critères actifs sans laisser croire que le catalogue est vide.
