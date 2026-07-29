# AtelierCatalog

AtelierCatalog est un catalogue personnel, local et portable pour inventorier, documenter et relier les objets techniques d'un atelier. Sa vision est d'être **la mémoire technique personnelle de l'atelier**, et non une simple liste de stock.

> **Statut : développement V1.** Le tableau de bord, la séparation réel/démonstration, la vue Catalogue, une première fiche composant en lecture seule, la recherche instantanée et les filtres par catégorie et emplacement sont disponibles. Le tri et les fiches détaillées complètes ne sont pas encore développés.

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
- `media/items/<item-id>/` contient les photos réelles publiées, associées aux articles par leur champ `media[].path` relatif.
- `annexes/` contient les documents associés publiés.
- `intake/` reçoit les originaux en attente de traitement ou de validation.
- `app/` contient l'interface sans dépendance ; `schemas/` les contrats initiaux ; `docs/` les décisions produit et techniques ; `tests/` les contrôles manuels ; `tools/` est réservé aux futurs outils optionnels.

## Autorité documentaire

`README.md` est le portail descriptif du dépôt. Il facilite l'accès aux documents officiels, mais ne définit ni le produit, ni son périmètre, ni sa planification, ni ses décisions d'architecture.

| Responsabilité | Document canonique | Autorité |
| --- | --- | --- |
| Vision du produit | [`docs/product/30_PRODUCT_VISION.md`](docs/product/30_PRODUCT_VISION.md) | Mission, public, objectifs, principes fondateurs et non-objectifs |
| Scope de la V1 | [`docs/02_SCOPE.md`](docs/02_SCOPE.md) | Capacités incluses, exclusions et critères de réussite |
| Roadmap | [`docs/14_ROADMAP.md`](docs/14_ROADMAP.md) | Nomenclature, ordre et périmètre des Epics et Stories |
| Architecture Decisions | [`docs/15_DECISIONS.md`](docs/15_DECISIONS.md) | Décisions acceptées et conséquences architecturales |

Les autres documents sont spécialisés ou descriptifs. Ils détaillent leur sujet sans redéfinir les quatre autorités ci-dessus. `docs/00_VISION.md` fournit un contexte narratif ; `docs/product/20_INVENTORY_FRAMING.md` cadre le domaine Inventaire sans autorité de planification ; `docs/product/40_ARCHITECTURE_DECISIONS.md` est un portail vers le registre ADR ; `docs/product/50_FUTURE_IDEAS.md` reste non normatif.

La [Roadmap canonique](docs/14_ROADMAP.md) est l'unique registre des Epics. Elle possède leurs identifiants, leurs noms et leurs statuts. Le README et les documents spécialisés peuvent y renvoyer, mais ne maintiennent aucune liste concurrente.

En cas de divergence, le document canonique propriétaire du sujet prévaut. Une ADR acceptée contraint l'architecture ; la Roadmap ne peut modifier ni la Vision ni le Scope ; un document spécialisé ou descriptif peut référencer une autorité, jamais la remplacer.

## Ouverture

Double-cliquer sur `index.html`. Le catalogue affiche les articles réels sous forme de cartes ou, lorsqu'il est vide, l'état d'accueil initial. Lorsqu'il contient des articles, la recherche locale et les filtres générés depuis les données limitent instantanément les cartes par nom, catégorie ou emplacement. Aucune connexion Internet n'est nécessaire. Les exemples ne sont jamais chargés par défaut.

Pour le développement et les démonstrations, ouvrir explicitement `demo.html`. Sa bannière indique que les données sont fictives et permet de revenir à `index.html`. Les 15 articles fictifs y sont visibles sous forme de cartes ; l'un d'eux référence une photo locale dans `samples/assets/images/`. Les deux pages restent compatibles avec `file://` et ne chargent jamais leurs sources de données simultanément.

## Méthode de travail

Le développement progresse par Stories petites, verticales et testables. Toute modification d'une règle produit ou d'architecture met à jour sa documentation, vérifie l'accessibilité et la portabilité, puis reste prête à former un commit cohérent. Voir le [playbook](docs/17_DEVELOPMENT_PLAYBOOK.md) et la [roadmap](docs/14_ROADMAP.md).

Documents de départ : [vision canonique](docs/product/30_PRODUCT_VISION.md), [principes détaillés](docs/01_PRODUCT_PRINCIPLES.md), [périmètre canonique](docs/02_SCOPE.md), [architecture](docs/03_ARCHITECTURE.md), [modèle de données](docs/04_DATA_MODEL.md), [roadmap canonique](docs/14_ROADMAP.md), [décisions canoniques](docs/15_DECISIONS.md).

**Règle absolue : ne jamais ajouter une référence, une quantité, une caractéristique ou une attribution inventée dans `data/`. Une valeur inconnue reste absente, `null` ou explicitement inconnue selon le modèle.**
