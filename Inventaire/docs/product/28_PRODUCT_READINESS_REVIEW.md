# Product Readiness Review

**Feature :** EPIC-001 / FEATURE-013 — Product Readiness Review
**Décision :** **NOT READY pour Architecture**

## Executive Summary

La définition produit d'Inventaire est cohérente sur son intention, son langage, son domaine et sa progression fonctionnelle. Les décisions sémantiques structurantes ont été adoptées puis réconciliées dans les documents canoniques. Aucun conflit résiduel n'a été relevé entre la Vision, les Principes, le Langage ubiquitaire, le Domaine, les Invariants, les Capacités, les parcours UX, le registre des décisions et la Roadmap.

Le produit n'est cependant pas encore prêt à entrer en phase d'architecture logicielle. Deux entrées indispensables aux décisions d'architecture restent absentes : un socle explicite de qualités produit et des critères d'acceptation vérifiables pour la Release 0.1. Sans elles, une architecture pourrait être cohérente avec les capacités décrites tout en étant impossible à évaluer au regard des conditions réelles d'usage et de la valeur attendue.

La décision porte sur la préparation à l'architecture, non sur la qualité générale de la conception produit. Le domaine est stabilisé ; les conditions permettant d'orienter et d'évaluer l'architecture ne le sont pas encore.

## Scope de la revue

La revue couvre les documents officiels suivants :

- `README.md` ;
- `00_PRODUCT_VISION.md` ;
- `10_PRODUCT_PRINCIPLES.md` ;
- `20_UBIQUITOUS_LANGUAGE.md` ;
- `21_INVENTORY_DOMAIN.md` ;
- `22_DOMAIN_INVARIANTS.md` ;
- `23_PRODUCT_CAPABILITIES.md` ;
- `24_RELEASE_SCOPE.md` ;
- `25_USER_EXPERIENCE.md` ;
- `26_PRODUCT_DESIGN_REVIEW.md` ;
- `27_DOMAIN_DECISIONS.md` ;
- `30_ROADMAP.md` ;
- `40_ARCHITECTURE_VISION.md` ;
- `50_DECISIONS.md`.

## Évaluation

| Axe | Maturité | Évaluation |
| --- | --- | --- |
| Vision | Mature | Le problème, les utilisateurs, les objectifs et les non-objectifs forment une direction claire et durable. |
| Principes | Mature | Les principes orientent les arbitrages sans prescrire de solution. |
| Langage métier | Stable | Les concepts canoniques sont définis, nommés de façon cohérente et reliés au domaine. |
| Domaine | Stable | Inventaire, Article d'inventaire et siège de la connaissance retenue ont des responsabilités explicites. |
| Invariants | Stable | Les vérités métier couvrent l'identité, la traçabilité, l'incertitude, l'historique et la cohérence. |
| Capacités | Stable | Les résultats utilisateur et leurs dépendances sont compréhensibles ; certaines frontières futures restent volontairement ouvertes. |
| Releases | Emerging | La progression fonctionnelle est logique, mais la Release 0.1 ne possède pas encore de critères d'acceptation vérifiables. |
| Expérience utilisateur | Stable | Les parcours et principes d'expérience sont cohérents avec le domaine ; le socle d'accessibilité reste à décider. |
| Décisions | Stable | Les décisions sémantiques adoptées disposent d'une source canonique et d'un registre compact. |
| Vision d'architecture | Emerging | Les responsabilités conceptuelles sont identifiées, mais elles ne sont pas encore justifiées par des qualités produit explicites. |
| Roadmap | Stable | La chronologie et les responsabilités de planification sont cohérentes avec le périmètre produit actuel. |

**Niveau de maturité global : Stable.** La fondation produit est exploitable et cohérente, mais sa préparation à l'architecture reste incomplète.

## Points bloquants

### PRR-B01 — Qualités produit non définies

- **Observation :** aucun document canonique ne fixe les attentes qui doivent guider les arbitrages d'architecture concernant la confidentialité, la propriété des informations, l'accessibilité, le fonctionnement avec ou sans connexion, les volumes attendus, la continuité et la portabilité de la connaissance, ainsi que les conditions de partage.
- **Impact :** il est impossible d'évaluer raisonnablement une topologie, des frontières, un mode de persistance ou des compromis de disponibilité et de simplicité. Les cinq responsabilités de la Vision d'architecture risqueraient de devenir une forme présupposée plutôt qu'une réponse au produit.
- **Décision restante :** établir un socle court, priorisé et vérifiable de qualités produit pour la Release 0.1, puis distinguer les qualités différées jusqu'aux Releases 0.5 et 1.0.
- **Priorité :** bloquante avant architecture logicielle.

### PRR-B02 — Acceptance Criteria de la Release 0.1 absents

- **Observation :** le Scope 0.1 décrit une valeur et des capacités, mais ne définit pas les résultats observables permettant d'établir que le premier produit est réellement utilisable.
- **Impact :** la conception de l'architecture ne disposerait d'aucune cible fonctionnelle vérifiable. Sa validation pourrait se limiter à la présence nominale de capacités sans garantir les parcours attendus ni le respect des invariants.
- **Décision restante :** définir les critères d'acceptation produit de la Release 0.1 à partir de son Scope, de ses parcours principaux et de ses invariants, sans détailler la solution.
- **Priorité :** bloquante avant architecture de la première Release.

## Points importants non bloquants

- Désigner le profil utilisateur principal de chaque Release afin de rendre leur valeur moins interprétable.
- Clarifier, avant l'architecture des capacités concernées, si le partage 1.0 permet uniquement la consultation ou aussi la contribution à une connaissance commune.
- Déterminer le minimum de connaissance nécessaire à un premier Article d'inventaire utilisable.
- Borner le vocabulaire initial des Statuts, les changements significatifs à préserver et l'articulation minimale entre Catégorie et Catalogue.
- Définir les dimensions utiles de comparaison et la présentation relative d'Éléments probants contradictoires avant de concevoir ces capacités.
- Statuer sur la consultation comme capacité explicite ou comme responsabilité transversale avant son découpage fonctionnel.

Ces points n'empêchent pas tous une exploration d'architecture. Ils ne doivent toutefois pas être tranchés implicitement par une solution technique lorsqu'ils deviennent pertinents pour son Scope.

## Améliorations futures

- Valider les parcours et le vocabulaire auprès de représentants des profils utilisateurs visés.
- Préciser les capacités avancées de consultation entre plusieurs Inventaires lorsque leur valeur sera démontrée.
- Étudier les entrées et sorties contrôlées dans l'Epic Import / Export, après stabilisation du Scope 1.0 actuel.
- Enrichir les règles de comparaison, de relation et de partage uniquement au moment où leurs Features seront préparées.

## Décision finale

**NOT READY pour Architecture.**

La cohérence sémantique et fonctionnelle est suffisante pour servir de base stable. En revanche, commencer l'architecture maintenant obligerait celle-ci à inventer les qualités attendues et les conditions de réussite de la première Release. Ces décisions appartiennent au produit et doivent précéder les choix structurants.

Les autres questions ouvertes peuvent rester différées tant qu'elles ne conditionnent pas le Scope architectural étudié. Elles ne justifient pas une extension générale de la définition produit avant de poursuivre.

## Prochaine phase recommandée

Ouvrir une phase courte de **Product Readiness Stabilization** limitée aux travaux suivants :

1. définir les qualités produit et leurs priorités par Release ;
2. définir les Acceptance Criteria vérifiables de la Release 0.1 ;
3. réexaminer la Vision d'architecture à la lumière de ces deux entrées, en conservant ses parties comme responsabilités conceptuelles tant que leur séparation n'est pas justifiée ;
4. réaliser une nouvelle Readiness Review ciblée.

L'architecture logicielle pourra commencer lorsque ces deux blocages seront levés, avec comme prérequis permanents le respect du langage canonique, des invariants métier, du Scope de Release et des décisions enregistrées.
