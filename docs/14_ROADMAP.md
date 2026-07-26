# Roadmap

Chaque Story est petite, verticale, testable et compatible avec un commit cohérent. Les éléments ci-dessous sont des propositions, pas des fonctionnalités disponibles. Les critères de maturité autorisent le passage à l'Epic suivant sans interdire des retours ciblés.

## Epic 0 — Fondation

**Objectif.** Poser dépôt, documentation, conventions, données vides, page locale minimale et vérification de portabilité. **Valeur.** Une base honnête, ouvrable et partageable. **Hors périmètre.** Catalogue complet et saisie réelle. **Stories.** E0-S1 créer le socle ; E0-S2 exécuter la checklist sur une copie et consigner les navigateurs. **Maturité.** Structure cohérente, écran vide local, aucun réseau ni chemin absolu. **Risques.** Documentation trop théorique, comportement `file://` variable.

## Epic 1 — Catalogue minimal

**Objectif.** Lire une collection, guider le premier lancement et consulter une première fiche simple. **Valeur.** Prouver le flux données → interface sans donner l'impression d'une base de données. **Hors périmètre.** Recherche fonctionnelle, édition et spécifications avancées. **Stories.** E1-S1 transformer l'état vide en premier lancement guidé avec accès au workflow photo ; E1-S2 ajouter un mode démonstration explicite et réversible ; E1-S3 rendre un tableau de bord synthétique pour collection vide ou non vide ; E1-S4 créer une vue cartes minimale ; E1-S5 ouvrir une fiche simple par identifiant. **Maturité.** Données réelles et exemples ne se mélangent jamais, l'état vide n'est pas une erreur et la navigation clavier est opérationnelle. **Risques.** Coupler UI et format global, faire passer la démo pour le stock, annoncer un import qui n'existe pas.

## Epic 2 — Recherche et filtres

**Objectif.** Retrouver une entrée sans parcourir tout le catalogue. **Valeur.** Réduction immédiate du temps de recherche. **Hors périmètre.** Sémantique, IA, requêtes numériques complexes. **Stories.** E2-S1 installer une recherche principale persistante ; E2-S2 normaliser et rechercher nom/référence/tags ; E2-S3 ajouter catégories et accès rapides ; E2-S4 filtres simples et réinitialisation ; E2-S5 tri déterministe ; E2-S6 distinguer catalogue vide et aucun résultat. **Maturité.** Cas accents, casse, tirets et références partielles testés ; scénario de recherche d'un article ancien mesuré en moins de trente secondes. **Risques.** Normalisation destructive, filtres incompréhensibles, perte de la requête pendant la navigation.

## Epic 3 — Fiches détaillées

**Objectif.** Expliquer identité et données essentielles d'un article. **Valeur.** Décision technique traçable. **Hors périmètre.** Recommandations automatiques. **Stories.** E3-S1 identité et statut ; E3-S2 spécifications structurées ; E3-S3 quantité ; E3-S4 emplacement ; E3-S5 confiance et sources. **Maturité.** Inconnues et conditions visibles, aucune chaîne non fiable injectée. **Risques.** Densité type ERP, faux sentiment de précision.

## Epic 4 — Médias et annexes

**Objectif.** Reconnaître l'objet et consulter ses documents. **Valeur.** Réunir objet, preuve visuelle et documentation. **Hors périmètre.** Import automatisé. **Stories.** E4-S1 galerie accessible ; E4-S2 photo principale et rôles ; E4-S3 distinguer photo réelle/externe ; E4-S4 documents locaux/externes ; E4-S5 état fichier manquant. **Maturité.** Origine, droits et hors-ligne visibles. **Risques.** Confusion d'origine, poids des fichiers, liens cassés.

## Epic 5 — Projets

**Objectif.** Relier les objets à leur contexte d'usage. **Valeur.** Reprendre un projet et comprendre l'affectation du matériel. **Hors périmètre.** Gestion de tâches et budgets. **Stories.** E5-S1 liste ; E5-S2 fiche projet ; E5-S3 usages et quantités ; E5-S4 navigation projet → objet ; E5-S5 navigation objet → projets. **Maturité.** Liens orphelins détectés et rôles lisibles. **Risques.** Relations divergentes, dérive vers un gestionnaire complet.

## Epic 6 — Stock et emplacements

**Objectif.** Expliquer quantité, disponibilité et rangement. **Valeur.** Trouver physiquement et éviter une double affectation. **Hors périmètre.** Comptabilité de stock exhaustive. **Stories.** E6-S1 états de quantité ; E6-S2 arborescence d'emplacements ; E6-S3 répartition multi-emplacements ; E6-S4 réservations simples. **Maturité.** Inconnues et incohérences détectées, sommes explicables. **Risques.** Confondre absence et zéro, allocations incompatibles.

## Epic 7 — Intake et validation

**Objectif.** Transformer prudemment des entrants en données publiées. **Valeur.** Réduire la saisie sans sacrifier la vérité. **Hors périmètre.** Publication autonome par IA. **Stories.** E7-S1 lister photos en attente ; E7-S2 regrouper en brouillons ; E7-S3 enregistrer identification proposée ; E7-S4 validation humaine ; E7-S5 publication et classement logique. **Maturité.** Originaux intacts, audit de chaque affirmation, rejet récupérable. **Risques.** Mauvais regroupement, perte d'origine, automatisation trop affirmative.

## Epic 8 — Administration locale

**Objectif.** Éditer sans manipuler directement les fichiers publiés. **Valeur.** Saisie plus sûre et accessible. **Hors périmètre.** Cloud et collaboration. **Stories.** E8-S1 prototype optionnel ; E8-S2 formulaire article ; E8-S3 validation de schéma et relations ; E8-S4 aperçu des changements ; E8-S5 génération atomique des données. **Maturité.** Sauvegarde, annulation et résultat portable prouvés. **Risques.** Rendre l'outil obligatoire, choisir trop tôt une plateforme.

## Epic 9 — Exports et pérennité

**Objectif.** Faciliter échange, sauvegarde et contrôle durable. **Valeur.** Réutilisation hors application et restauration fiable. **Hors périmètre.** Synchronisation temps réel. **Stories.** E9-S1 export CSV documenté ; E9-S2 export JSON versionné ; E9-S3 manifeste de sauvegarde ; E9-S4 vérification d'intégrité ; E9-S5 QR codes résolvant des identifiants stables. **Maturité.** Aller-retour testé, erreurs non destructives, documentation de restauration. **Risques.** Exports incomplets, exposition de données privées, QR liés à un chemin physique.
