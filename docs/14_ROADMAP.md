# Roadmap

> **Autorité documentaire : canonique pour la planification.** Ce document est l'unique registre des Epics et possède leurs identifiants, leurs noms, leur ordre et leurs statuts. Il organise la réalisation du [Scope canonique](02_SCOPE.md), sans le modifier, et respecte la [Vision](product/30_PRODUCT_VISION.md) ainsi que les [décisions d'architecture](15_DECISIONS.md). Aucun autre document ne peut créer, renommer, renuméroter ou redéfinir une Epic.

Chaque Epic possède exactement un des statuts suivants : `Planned`, `In Progress`, `Completed` ou `Deferred`. Chaque Story est petite, verticale, testable et compatible avec un commit cohérent. La présence d'un élément dans la Roadmap ne suffit pas à déclarer sa disponibilité ; le README peut résumer l'état observable du produit sans acquérir d'autorité de planification. Les critères de maturité autorisent le passage à l'Epic suivant sans interdire des retours ciblés.

## Traçabilité du Scope V1

Les identifiants renvoient exclusivement au [Scope canonique](02_SCOPE.md). Cette matrice n'en reproduit aucune exigence.

| Epic | Scope IDs | V1 | Statut |
| --- | --- | --- | --- |
| EPIC-001 | S-001, S-002, S-022, S-023, S-035 | Oui | Completed |
| EPIC-002 | S-003, S-005, S-006, S-017 à S-021, S-024, S-026, S-036, S-037 | Oui | Completed |
| EPIC-003 | S-004, S-007, S-008, S-027 à S-030, S-038 | Oui | In Progress |
| EPIC-004 | S-009, S-012, S-016, S-025, S-032 | Oui | Planned |
| EPIC-005 | S-010, S-011, S-031 | Oui | Planned |
| EPIC-006 | S-015, S-033 | Oui | Planned |
| EPIC-007 | S-013, S-014, S-034 | Oui | Planned |
| EPIC-008 | HV1-014, HV1-015 | Non | Planned |
| EPIC-009 | HV1-013 | Non | Planned |
| EPIC-010 | HV1-016 à HV1-018 | Non | Planned |
| Aucune Epic planifiée | HV1-001 à HV1-012, HV1-019 à HV1-022 | Non | — |

## EPIC-001 — Fondation

**Status: Completed.**

**Objectif.** Poser dépôt, documentation, conventions, données vides, page locale minimale et vérification de portabilité. **Valeur.** Une base honnête, ouvrable et partageable. **Hors périmètre.** Catalogue complet et saisie réelle. **Stories.** EPIC-001-S01 créer le socle ; EPIC-001-S02 exécuter la checklist sur une copie et consigner les navigateurs. **Maturité.** Structure cohérente, écran vide local, aucun réseau ni chemin absolu. **Risques.** Documentation trop théorique, comportement `file://` variable.

## EPIC-002 — Catalogue minimal

**Status: Completed.**

**Objectif.** Lire une collection, guider le premier lancement et consulter une première fiche simple. **Valeur.** Prouver le flux données → interface sans donner l'impression d'une base de données. **Hors périmètre.** Recherche fonctionnelle, édition et spécifications avancées. **Stories.** EPIC-002-S01 transformer l'état vide en premier lancement guidé avec accès au workflow photo ; EPIC-002-S02 ajouter un mode démonstration explicite et réversible ; EPIC-002-S03 rendre un tableau de bord synthétique pour collection vide ou non vide ; EPIC-002-S04 créer une vue cartes minimale ; EPIC-002-S05 ouvrir une fiche simple par identifiant. **Maturité.** Données réelles et exemples ne se mélangent jamais, l'état vide n'est pas une erreur et la navigation clavier est opérationnelle. **Risques.** Coupler UI et format global, faire passer la démo pour le stock, annoncer un import qui n'existe pas.

## EPIC-003 — Recherche et filtres

**Status: In Progress.**

**Objectif.** Retrouver une entrée sans parcourir tout le catalogue. **Valeur.** Réduction immédiate du temps de recherche. **Hors périmètre.** Sémantique, IA, requêtes numériques complexes. **Stories.** EPIC-003-S01 installer une recherche principale persistante ; EPIC-003-S02 normaliser et rechercher nom/référence/tags ; EPIC-003-S03 ajouter catégories et accès rapides ; EPIC-003-S04 filtres simples et réinitialisation ; EPIC-003-S05 tri déterministe ; EPIC-003-S06 distinguer catalogue vide et aucun résultat. **Maturité.** Cas accents, casse, tirets et références partielles testés ; scénario de recherche d'un article ancien mesuré en moins de trente secondes. **Risques.** Normalisation destructive, filtres incompréhensibles, perte de la requête pendant la navigation.

## EPIC-004 — Fiches détaillées

**Status: Planned.**

**Objectif.** Expliquer identité et données essentielles d'un article. **Valeur.** Décision technique traçable. **Hors périmètre.** Recommandations automatiques. **Stories.** EPIC-004-S01 identité et statut ; EPIC-004-S02 spécifications structurées ; EPIC-004-S03 quantité ; EPIC-004-S04 emplacement ; EPIC-004-S05 confiance et sources. **Maturité.** Inconnues et conditions visibles, aucune chaîne non fiable injectée. **Risques.** Densité type ERP, faux sentiment de précision.

## EPIC-005 — Médias et annexes

**Status: Planned.**

**Objectif.** Reconnaître l'objet et consulter ses documents. **Valeur.** Réunir objet, preuve visuelle et documentation. **Hors périmètre.** Import automatisé. **Stories.** EPIC-005-S01 galerie accessible ; EPIC-005-S02 photo principale et rôles ; EPIC-005-S03 distinguer photo réelle/externe ; EPIC-005-S04 documents locaux/externes ; EPIC-005-S05 état fichier manquant. **Maturité.** Origine, droits et hors-ligne visibles. **Risques.** Confusion d'origine, poids des fichiers, liens cassés.

## EPIC-006 — Projets

**Status: Planned.**

**Objectif.** Relier les objets à leur contexte d'usage. **Valeur.** Reprendre un projet et comprendre l'affectation du matériel. **Hors périmètre.** Gestion de tâches et budgets. **Stories.** EPIC-006-S01 liste ; EPIC-006-S02 fiche projet ; EPIC-006-S03 usages et quantités ; EPIC-006-S04 navigation projet → objet ; EPIC-006-S05 navigation objet → projets. **Maturité.** Liens orphelins détectés et rôles lisibles. **Risques.** Relations divergentes, dérive vers un gestionnaire complet.

## EPIC-007 — Stock et emplacements

**Status: Planned.**

**Objectif.** Expliquer quantité, disponibilité et rangement. **Valeur.** Trouver physiquement et éviter une double affectation. **Hors périmètre.** Comptabilité de stock exhaustive. **Stories.** EPIC-007-S01 états de quantité ; EPIC-007-S02 arborescence d'emplacements ; EPIC-007-S03 répartition multi-emplacements ; EPIC-007-S04 réservations simples. **Maturité.** Inconnues et incohérences détectées, sommes explicables. **Risques.** Confondre absence et zéro, allocations incompatibles.

## EPIC-008 — Intake et validation

**Status: Planned.**

**Objectif.** Transformer prudemment des entrants en données publiées. **Valeur.** Réduire la saisie sans sacrifier la vérité. **Hors périmètre.** Publication autonome par IA. **Stories.** EPIC-008-S01 lister photos en attente ; EPIC-008-S02 regrouper en brouillons ; EPIC-008-S03 enregistrer identification proposée ; EPIC-008-S04 validation humaine ; EPIC-008-S05 publication et classement logique. **Maturité.** Originaux intacts, audit de chaque affirmation, rejet récupérable. **Risques.** Mauvais regroupement, perte d'origine, automatisation trop affirmative.

## EPIC-009 — Administration locale

**Status: Planned.**

**Objectif.** Éditer sans manipuler directement les fichiers publiés. **Valeur.** Saisie plus sûre et accessible. **Hors périmètre.** Cloud et collaboration. **Stories.** EPIC-009-S01 prototype optionnel ; EPIC-009-S02 formulaire article ; EPIC-009-S03 validation de schéma et relations ; EPIC-009-S04 aperçu des changements ; EPIC-009-S05 génération atomique des données. **Maturité.** Sauvegarde, annulation et résultat portable prouvés. **Risques.** Rendre l'outil obligatoire, choisir trop tôt une plateforme.

## EPIC-010 — Exports et pérennité

**Status: Planned.**

**Objectif.** Faciliter échange, sauvegarde et contrôle durable. **Valeur.** Réutilisation hors application et restauration fiable. **Hors périmètre.** Synchronisation temps réel. **Stories.** EPIC-010-S01 export CSV documenté ; EPIC-010-S02 export JSON versionné ; EPIC-010-S03 manifeste de sauvegarde ; EPIC-010-S04 vérification d'intégrité ; EPIC-010-S05 QR codes résolvant des identifiants stables. **Maturité.** Aller-retour testé, erreurs non destructives, documentation de restauration. **Risques.** Exports incomplets, exposition de données privées, QR liés à un chemin physique.
