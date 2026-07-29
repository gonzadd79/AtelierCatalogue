# Modèle de données

## Principes

Le modèle sépare identité métier, représentation V1 et affichage. Un champ n'est obligatoire que s'il est indispensable à la stabilité (`id`, généralement `name`). Une valeur inconnue est omise ou `null` ; zéro signifie zéro connu. Les identifiants sont stables, uniques, en minuscules ASCII avec tirets. Les relations utilisent des identifiants afin d'éviter les duplications.

## InventoryItem

Un `InventoryItem` représente un objet ou un ensemble d'objets considérés identiques pour l'inventaire, pas nécessairement chaque exemplaire sérialisé.

Champs prévus : `id`, `slug`, `name`, `reference`, `manufacturer`, `variant`, `categoryId`, `subcategoryId`, `description`, `quantity`, `stockUnit`, `locationIds`, `condition`, `inventoryStatus`, `identification`, `tags`, `specifications`, `media`, `documents`, `sources`, `equivalentItemIds`, `compatibleItemIds`, `notes`, `createdAt`, `updatedAt`. Seuls `id` et `name` sont fondamentaux dans le schéma initial. Référence et fabricant restent absents si non vérifiés. Équivalence et compatibilité sont des affirmations distinctes et sourçables.

## Specification

Une spécification flexible contient `key`, `label`, `value`, `numericValue`, `unit`, `minimum`, `maximum`, `typical`, `conditions`, `status`, `confidence`, `sourceIds`, `notes`. `key` est stable, `label` lisible. `value` conserve une présentation ou une valeur non numérique ; les champs numériques et l'unité canonique servent aux futures comparaisons.

Une chaîne « 5 à 12 V, 8 A crête » ne suffit pas pour rechercher une entrée acceptant 12 V ou distinguer continu et pointe. Les bornes, valeur typique, conditions thermiques et nature de la mesure doivent rester séparées. Aucune conversion implicite ne doit fabriquer une précision absente.

## MediaAsset

Champs : `id`, `type`, `role`, `path`, `thumbnailPath`, `caption`, `origin`, `sourceId`, `isPrimary`, `showsOwnedItem`, `createdAt`, `rights`, `notes`. `type` décrit photo, schéma, brochage, illustration ou capture ; `role` précise vue principale, détail, lot, projet, etc. `showsOwnedItem` est obligatoire pour empêcher qu'une image externe passe pour l'exemplaire réel. `path` est relatif.

## DocumentAsset

Champs : `id`, `type`, `title`, `path`, `externalUrl`, `sourceId`, `language`, `version`, `isAvailableOffline`, `rights`, `notes`. Un document peut avoir un lien externe sans copie locale ; l'interface ne doit alors pas promettre l'accès hors ligne.

## SourceReference

Champs : `id`, `type`, `title`, `publisher`, `url`, `localDocumentId`, `retrievedAt`, `reliability`, `notes`. Types possibles : observation physique, déclaration utilisateur, annotation manuscrite, fabricant, datasheet, distributeur, autre Web, déduction ou estimation. La fiabilité est qualitative, contextualisée, jamais une vérité mathématique.

## IdentificationAssessment

`InventoryItem.identification` est l'unique représentation canonique de l'identification. Elle contient `status`, `confidence` et, lorsqu'une validation existe, `validatedBy` et `validatedAt`. Les statuts canoniques sont non analysée (`unreviewed`), proposée (`proposed`), à confirmer (`to-confirm`), confirmée (`confirmed`), ambiguë (`ambiguous`) et non identifiée (`unidentified`). Les niveaux de confiance sont faible (`low`), moyen (`medium`) et élevé (`high`).

La confirmation appartient à `status` ; elle ne constitue pas un niveau de confiance. Une validation éventuelle trace la confirmation sans créer une seconde représentation de l'identification. Les marquages observés ne sont pas corrigés silencieusement et les propositions restent séparées. Le processus est détaillé dans [Identification et sources](07_IDENTIFICATION_AND_SOURCES.md).

## Quantity et répartition

`quantity` persiste uniquement `total`, `reserved`, `used` et `outOfService`. La valeur `available` est dérivée par `total - reserved - used - outOfService` lorsque toutes les composantes sont connues. Une quantité inconnue est omise ou vaut `null` ; aucun indicateur parallèle n'est persisté. `stockUnit` porte l'unité commune à ces valeurs.

Les invariants sont les suivants :

- toute valeur connue est supérieure ou égale à zéro ;
- zéro désigne une valeur connue, jamais une absence de connaissance ;
- toutes les valeurs d'un même état de quantité utilisent `stockUnit` ;
- lorsque les composantes sont connues, `reserved + used + outOfService` ne dépasse pas `total` ;
- `available` est comprise entre zéro et `total` lorsqu'elle est calculable ;
- si une composante nécessaire au calcul est inconnue, `available` reste inconnue ;
- une valeur dérivée ne devient jamais une autorité persistée.

Les quantités par emplacement nécessiteront une structure d'allocation dédiée ; `locationIds` exprime déjà la relation multiple mais ne prétend pas ventiler le stock à la fondation. Les responsabilités de consultation sont détaillées dans [Stock et emplacements](11_STOCK_AND_LOCATIONS.md).

## Location

Un emplacement contient `id`, `name`, `parentId`, `type`, `description`, `pathLabel`, `notes`. `parentId` forme une hiérarchie sans encoder le chemin dans l'identifiant. Un déplacement physique modifie la relation, pas l'identité de l'article.

## Project et ProjectItemUsage

Un projet contient identité, description, statut, médias, documents, notes et `itemUsages`. Chaque usage relie `itemId`, `quantity`, `role`, `isMissing` et `alternativeItemIds`. `Project.itemUsages` est l'unique source de vérité de la relation Projet ↔ Article. La navigation depuis un `InventoryItem` est une projection calculée à partir des usages et ne constitue pas un état possédé par l'article. Les responsabilités du projet sont détaillées dans [Projets](10_PROJECTS.md).

## Dates, versions et extension

Dates au format ISO 8601 avec fuseau quand elles sont connues. Chaque collection publiée porte `schemaVersion` et `generatedAt`, ce dernier restant `null` pour les fichiers maintenus manuellement. `additionalProperties` autorise une évolution prudente ; chaque nouveau champ partagé doit être documenté et versionné. Les schémas JSON valident la forme, pas la vérité, les droits, l'existence des fichiers ou l'intégrité des relations : de futurs outils traiteront ces contrôles.
