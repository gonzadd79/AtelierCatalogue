# Stock et emplacements

## Quantités

- **totale** : nombre connu rattaché à l'article ;
- **disponible** : mobilisable sans défaire une réservation ou un usage ;
- **réservée** : affectée à un besoin mais pas nécessairement installée ;
- **utilisée** : engagée dans un projet ou montage ;
- **hors service** : possédée mais impropre à l'usage prévu ;
- **inconnue** : comptage insuffisant ; ce n'est ni zéro ni champ calculable.

La V1 présente un état synthétique et vérifie les incohérences évidentes, sans journal comptable. Elle ne met pas encore en œuvre mouvements, historique, seuil bas, réapprovisionnement, campagne d'inventaire physique ou rapprochement ; le modèle restera extensible à ces concepts.

## Emplacements

Une hiérarchie utilise `parentId` : atelier → meuble → tiroir → boîte, sans imposer ces niveaux. Un nom lisible peut se répéter sous des parents différents ; l'identifiant reste unique. Le chemin affiché est dérivé afin qu'un renommage ne casse pas les relations.

Un article peut être réparti dans plusieurs emplacements. `locationIds` indique cette possibilité ; une future allocation devra associer quantité, unité et emplacement, et garantir que la somme n'affirme pas plus que le total connu. À la fondation, aucune ventilation n'est inventée. Un emplacement inconnu reste visible.
