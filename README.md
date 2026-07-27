# AtelierCatalog

AtelierCatalog est un catalogue personnel, local et portable pour inventorier, documenter et relier les objets techniques d'un atelier. Sa vision est d'être **la mémoire technique personnelle de l'atelier**, et non une simple liste de stock.

> **Statut : développement V1.** Le tableau de bord, la séparation réel/démonstration, la vue Catalogue, une première fiche composant en lecture seule et la recherche instantanée sur le nom, la catégorie et l'emplacement sont disponibles. Les filtres et les fiches détaillées complètes ne sont pas encore développés.

## Contraintes fondamentales

- consultation hors ligne sous Windows par ouverture directe de `index.html` ;
- dossier autonome et déplaçable, sans chemin absolu ni ressource distante obligatoire ;
- aucun serveur, compte, cloud, SQL, télémétrie, build ou framework JavaScript obligatoire en V1 ;
- données publiées sous forme de scripts locaux compatibles avec `file://` ;
- inconnues, sources et niveaux de confiance visibles ;
- aucune donnée inventée dans le catalogue réel.

## Organisation

- `data/` contient exclusivement les données réelles publiées (initialement vides).
- `samples/` contient uniquement des démonstrations explicitement fictives.
- `media/` contient les médias publiés.
- `annexes/` contient les documents associés publiés.
- `intake/` reçoit les originaux en attente de traitement ou de validation.
- `app/` contient l'interface sans dépendance ; `schemas/` les contrats initiaux ; `docs/` les décisions produit et techniques ; `tests/` les contrôles manuels ; `tools/` est réservé aux futurs outils optionnels.

## Ouverture

Double-cliquer sur `index.html`. Le catalogue affiche les articles réels sous forme de cartes ou, lorsqu'il est vide, l'état d'accueil initial. Lorsqu'il contient des articles, la recherche locale filtre instantanément les cartes par nom, catégorie ou emplacement. Aucune connexion Internet n'est nécessaire. Les exemples ne sont jamais chargés par défaut.

Pour le développement et les démonstrations, ouvrir explicitement `demo.html`. Sa bannière indique que les données sont fictives et permet de revenir à `index.html`. Les 15 articles fictifs y sont visibles sous forme de cartes. Les deux pages restent compatibles avec `file://` et ne chargent jamais leurs sources de données simultanément.

## Méthode de travail

Le développement progresse par Stories petites, verticales et testables. Toute modification d'une règle produit ou d'architecture met à jour sa documentation, vérifie l'accessibilité et la portabilité, puis reste prête à former un commit cohérent. Voir le [playbook](docs/17_DEVELOPMENT_PLAYBOOK.md) et la [roadmap](docs/14_ROADMAP.md).

Documents de départ : [vision](docs/00_VISION.md), [principes](docs/01_PRODUCT_PRINCIPLES.md), [périmètre](docs/02_SCOPE.md), [architecture](docs/03_ARCHITECTURE.md), [modèle de données](docs/04_DATA_MODEL.md), [décisions](docs/15_DECISIONS.md).

**Règle absolue : ne jamais ajouter une référence, une quantité, une caractéristique ou une attribution inventée dans `data/`. Une valeur inconnue reste absente, `null` ou explicitement inconnue selon le modèle.**
