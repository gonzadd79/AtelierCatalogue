# Recherche et filtres

## Champs recherchables ciblés

Nom, référence, fabricant, catégorie, sous-catégorie, description, tags, notes, marquages observés, caractéristiques, emplacement et projet. La fondation ne fournit pas encore ce moteur.

## Normalisation V1

La recherche future produira une forme d'index séparée de l'affichage : minuscules, espaces consécutifs réduits et comparaison tolérante aux accents. Tirets, espaces et séparateurs courants pourront être normalisés pour les références partielles, tout en conservant la valeur originale. Les synonymes seront une liste explicite et révisable, jamais une IA implicite.

Unités et valeurs numériques ne doivent pas être recherchées uniquement dans des chaînes. Les champs `numericValue`, `minimum`, `maximum`, `typical`, `unit` et `conditions` permettront des comparaisons futures après conversion contrôlée. Une plage doit distinguer « couvre la valeur demandée » de « valeur textuellement présente ». La recherche combinée viendra après des filtres simples fiables.

## Filtres ciblés

Catégorie, sous-catégorie, quantité disponible, emplacement, état, identification, confiance, projet, présence d'une datasheet, présence d'une photo réelle et informations à confirmer. Tous doivent afficher leur effet, leur combinaison et une réinitialisation. « Inconnu » est une option utile, pas un élément exclu silencieusement.

La V1 n'annonce ni recherche sémantique, ni langage naturel, ni intelligence artificielle. Un résultat vide explique les critères actifs sans laisser croire que le catalogue est vide.
