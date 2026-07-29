# Identification et sources

## Représentation canonique

La représentation canonique est `InventoryItem.identification`, définie par le [modèle de données](04_DATA_MODEL.md#identificationassessment). Son `status` porte l'état de l'identification, sa `confidence` en qualifie la solidité et les informations éventuelles de validation en assurent la traçabilité. Aucun de ces éléments n'existe en parallèle au premier niveau de l'article.

## Processus explicable

1. conserver les vues et retranscrire les marquages sans correction silencieuse ;
2. séparer annotations et déclarations de l'utilisateur ;
3. proposer une ou plusieurs identités ;
4. comparer dimensions, connectique, sérigraphie, révision et composants ;
5. consulter des sources adaptées et relever leurs divergences ;
6. documenter ambiguïtés, caractéristiques et conditions ;
7. attribuer un statut et une confiance qualitative ;
8. faire valider humainement toute identification ambiguë avant publication affirmative.

## Sources

Une observation de l'objet prouve un marquage ou une forme, pas nécessairement l'authenticité. Une datasheet du fabricant est généralement forte pour le composant exact et sa révision ; elle ne prouve pas qu'un module l'implémente correctement. Une page fabricant précise peut compléter. Un distributeur reconnu aide à la traçabilité. Une annonce commerciale ou un vendeur inconnu est indicative : erreurs, copies et mélange de variantes sont fréquents.

Des cartes visuellement similaires peuvent partager un circuit principal mais différer en régulateur, brochage, fréquence, protections ou routage. Clones et contrefaçons imposent prudence. Les désaccords entre vendeurs sont conservés, non moyennés.

Les maximums absolus ne sont pas des valeurs d'usage recommandées. Courant continu, courant de pointe, température, ventilation, dissipation, tension et durée doivent rester associés à leurs conditions. Une compatibilité mécanique ne vaut pas compatibilité électrique.

## Confiance

- **faible** : indices incomplets ou source fragile ;
- **moyenne** : plusieurs indices cohérents mais ambiguïté restante ;
- **élevée** : correspondance forte entre objet et sources fiables.

Ces niveaux ordonnent le besoin de prudence ; ce ne sont pas des probabilités scientifiques. Une confirmation est portée par le statut `confirmed`, jamais par le niveau de confiance. Lorsqu'elle est documentée, sa validation précise par qui et quand elle a été réalisée. Toute décision doit pouvoir être retracée jusqu'aux observations et sources qui la soutiennent.
