# Stock et emplacements

## Quantités

- **totale** : nombre connu rattaché à l'article et persisté dans `total` ;
- **réservée** : quantité affectée à un besoin mais pas nécessairement installée, persistée dans `reserved` ;
- **utilisée** : quantité engagée dans un projet ou montage, persistée dans `used` ;
- **hors service** : quantité possédée mais impropre à l'usage prévu, persistée dans `outOfService` ;
- **disponible** : valeur dérivée de `total - reserved - used - outOfService`, jamais persistée.

Une quantité inconnue est omise ou vaut `null` ; zéro signifie toujours zéro connu. La disponibilité reste inconnue dès qu'une composante nécessaire à son calcul est inconnue.

Les invariants canoniques sont définis dans le [modèle de données](04_DATA_MODEL.md#quantity-et-répartition). En particulier, toutes les valeurs connues sont positives ou nulles, utilisent la même unité et vérifient `reserved + used + outOfService ≤ total`. Une valeur dérivée ne peut jamais remplacer l'état persisté qui permet de la calculer.

La V1 présente un état synthétique et vérifie les incohérences évidentes, sans journal comptable. Elle ne met pas encore en œuvre mouvements, historique, seuil bas, réapprovisionnement, campagne d'inventaire physique ou rapprochement ; le modèle restera extensible à ces concepts.

## Emplacements

Une hiérarchie utilise `parentId` : atelier → meuble → tiroir → boîte, sans imposer ces niveaux. Un nom lisible peut se répéter sous des parents différents ; l'identifiant reste unique. Le chemin affiché est dérivé afin qu'un renommage ne casse pas les relations.

Un article peut être réparti dans plusieurs emplacements. `locationIds` indique cette possibilité ; une future allocation devra associer quantité, unité et emplacement, et garantir que la somme n'affirme pas plus que le total connu. À la fondation, aucune ventilation n'est inventée. Un emplacement inconnu reste visible.
