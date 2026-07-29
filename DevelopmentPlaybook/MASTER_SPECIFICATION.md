# Master Specification — Framework Constitution

`MASTER_SPECIFICATION.md` est la Constitution de DevelopmentPlaybook, son registre d'autorité documentaire et son point d'entrée.

Il est normatif uniquement pour l'identité du Framework, ses principes fondateurs et son architecture documentaire globale. Les connaissances spécialisées sont maintenues dans leurs sources canoniques. Tout résumé présenté ici est non normatif et renvoie vers la Reference concernée.

# Framework Identity

## Vision

### Raison d'être

DevelopmentPlaybook existe pour offrir un cadre durable au développement assisté par intelligence artificielle. Il transforme des pratiques souvent implicites ou dispersées en une méthode commune, compréhensible et améliorable.

### Problème résolu

L'assistance par IA peut accélérer le travail sans garantir la cohérence, la qualité ni la continuité. Lorsque les objectifs, les responsabilités, les décisions et les critères de validation sont mal définis, les résultats deviennent difficiles à reproduire, à expliquer et à faire évoluer.

DevelopmentPlaybook organise ces repères au sein de sources canoniques clairement délimitées. Il aide à conserver l'intention du produit, à structurer la collaboration entre l'humain et l'IA et à rendre les choix vérifiables dans le temps.

### Utilisateurs

DevelopmentPlaybook s'adresse aux personnes et aux équipes qui conçoivent, pilotent, réalisent ou évaluent des produits avec l'assistance de l'IA. Il doit rester accessible aux nouveaux utilisateurs tout en offrant un cadre suffisamment rigoureux pour des pratiques durables.

### Objectifs

- Établir un langage et des attentes partagés.
- Rendre le travail assisté par IA cohérent, explicable et reproductible.
- Clarifier les responsabilités, les étapes de validation et les critères de qualité.
- Préserver les décisions et les enseignements utiles au fil du temps.
- Favoriser une progression maîtrisée, fondée sur des résultats vérifiables.
- Permettre à la méthode d'évoluer sans perdre son identité ni sa cohérence.

### Limites volontaires

DevelopmentPlaybook ne cherche pas à remplacer le jugement, l'expertise ou la responsabilité humaine. Il ne promet pas une qualité automatique et n'impose pas une manière unique de travailler à tous les contextes.

Il ne cherche pas non plus à devenir un logiciel, une plateforme d'exécution, une collection de recettes isolées ou la documentation d'un projet particulier. Sa vocation est de fournir un cadre produit stable et adaptable, non de décider ou d'agir à la place de ses utilisateurs.

## Mission

DevelopmentPlaybook donne aux personnes et aux équipes un cadre commun pour préparer, conduire, examiner et faire évoluer un travail de développement assisté par intelligence artificielle. Au quotidien, il les aide à clarifier l'intention du produit, limiter le périmètre des changements, documenter les décisions, vérifier les résultats et maintenir des sources canoniques cohérentes, sous responsabilité humaine.

## Core Principles

- **Product before implementation.** L'intention du produit, le besoin à satisfaire et le résultat attendu priment sur la manière de les réaliser.
- **User value over technical elegance.** La valeur apportée à l'utilisateur prévaut sur la sophistication ou l'élégance d'une solution.
- **One source of truth.** Chaque règle, orientation ou référence en vigueur possède une source canonique unique dans son périmètre.
- **Explain decisions, not only decisions.** Une décision importante conserve son contexte, sa raison d'être et ses conséquences, et non son seul résultat.
- **Small incremental changes.** Les évolutions restent limitées, cohérentes et compréhensibles.
- **Documentation is part of the product.** La documentation appartient pleinement au produit et répond aux mêmes exigences de clarté, d'exactitude et de continuité.
- **Architecture evolves intentionally.** L'architecture évolue par des choix explicites, justifiés et compatibles avec l'identité du produit.
- **Reviews before commits.** Toute évolution significative est examinée avant d'être considérée comme une référence stable.
- **Human validates product direction.** La direction du produit, ses priorités et ses compromis restent soumis à une validation humaine.
- **Unknown remains unknown.** Une information absente, incertaine ou non vérifiée reste explicitement inconnue.
- **Simple is preferable to clever.** La solution la plus simple qui répond durablement au besoin est préférée à une solution difficile à comprendre.
- **Consistency over novelty.** La cohérence avec les conventions établies prévaut sur la nouveauté sans bénéfice démontré.

# Documentation Architecture

DevelopmentPlaybook utilise une autorité fédérée par périmètre. Une question normative possède une seule source canonique, et chaque document officiel exerce uniquement l'autorité déclarée dans le registre.

## Authority Principles

- La Constitution définit l'identité, les principes fondateurs et le modèle documentaire du Framework.
- Chaque Reference est normative uniquement dans son périmètre déclaré.
- Le Semantic Reference est la seule source normative des concepts.
- Les ADR conservent les décisions ; les règles permanentes sont maintenues dans leur source canonique.
- La Roadmap fait autorité uniquement sur la planification.
- Les portails et actifs dérivés peuvent résumer ou appliquer les References sans les redéfinir.
- Les conflits sont résolus selon le périmètre concerné, puis selon le niveau d'autorité déclaré.

## Document Taxonomy

| Type | Responsabilité | Autorité |
|---|---|---|
| Constitution | Définir l'identité et les règles supérieures du Framework | Normative dans son périmètre constitutionnel |
| Reference | Définir les connaissances et règles durables d'un domaine | Canonique dans son périmètre déclaré |
| Decision | Conserver un choix, son contexte et ses conséquences | Décisionnelle et historique |
| Planning | Décrire les priorités, jalons et statuts | Limitée à la planification |
| Portal | Orienter vers les documents officiels | Descriptive et non normative |
| Derived Asset | Faciliter l'application des References | Non normative |

Les documents de gouvernance sont des References spécialisées. Templates, Examples et Prompts sont des Derived Assets.

## Dependency Model

- Une Reference peut dépendre de la Constitution, du Semantic Reference ou d'une autre Reference lorsque cette dépendance est explicite et non circulaire.
- Un Derived Asset peut dépendre des References et d'autres actifs nécessaires à son usage.
- Une source normative ne dépend jamais d'un Derived Asset, d'un Portal ou de la Roadmap.
- Aucun document ne peut redéfinir une connaissance appartenant à une autre source canonique.

# Documentation Authority Registry

Le registre identifie les documents officiels et leur autorité. La présence d'un fichier ne suffit pas à lui conférer une autorité documentaire.

| Document | Type | Responsabilité | Niveau d'autorité | Statut | Référence canonique |
|---|---|---|---|---|---|
| [`MASTER_SPECIFICATION.md`](MASTER_SPECIFICATION.md) | Constitution | Identité et architecture documentaire du Framework | Constitutionnelle et normative | Active | Document lui-même |
| [`Semantic_Reference.md`](reference/Semantic_Reference.md) | Reference | Concepts officiels | Canonique pour les concepts | Active | Document lui-même |
| [`Methodology_Reference.md`](reference/Methodology_Reference.md) | Reference | Méthodologie et gouvernance | Canonique dans son périmètre | Active | Document lui-même |
| [`Documentation_Reference.md`](reference/Documentation_Reference.md) | Reference | Standards documentaires | Canonique à son activation | Planned | Document lui-même |
| [`Architecture_Reference.md`](reference/Architecture_Reference.md) | Reference | Architecture du Framework | Canonique à son activation | Planned | Document lui-même |
| [`Git_Reference.md`](reference/Git_Reference.md) | Reference | Conventions Git | Canonique à son activation | Planned | Document lui-même |
| [`ADR-001-Documentation-Architecture.md`](decisions/ADR-001-Documentation-Architecture.md) | Decision | Architecture documentaire modulaire | Décisionnelle et historique | Accepted | — |
| [`ADR-002-Documentation-Authority-Model.md`](decisions/ADR-002-Documentation-Authority-Model.md) | Decision | Modèle d'autorité documentaire | Décisionnelle et historique | Accepted | — |
| [`30_ROADMAP.md`](30_ROADMAP.md) | Planning | Epics et direction d'évolution | Canonique pour la planification | Active | Document lui-même |
| [`README.md`](README.md) | Portal | Présentation et orientation générales | Descriptive | Active | `MASTER_SPECIFICATION.md` |
| [`templates/README.md`](templates/README.md) | Portal | Présentation des Templates | Descriptive | Active | `MASTER_SPECIFICATION.md` |
| [`Release_Specification.md`](templates/Release_Specification.md) | Derived Asset | Structurer la définition d'une Release | Non normative | Active | [`Methodology_Reference.md#required-artifacts`](reference/Methodology_Reference.md#required-artifacts) |
| [`Certification_Report.md`](templates/Certification_Report.md) | Derived Asset | Structurer la Decision de Certification | Non normative | Active | [`Methodology_Reference.md#required-artifacts`](reference/Methodology_Reference.md#required-artifacts) |
| [`Publication_Record.md`](templates/Publication_Record.md) | Derived Asset | Structurer les faits de Publication | Non normative | Active | [`Methodology_Reference.md#required-artifacts`](reference/Methodology_Reference.md#required-artifacts) |
| [`examples/README.md`](examples/README.md) | Portal | Présentation des Examples | Descriptive | Active | `MASTER_SPECIFICATION.md` |
| [`prompts/README.md`](prompts/README.md) | Portal | Présentation des Prompts | Descriptive | Active | `MASTER_SPECIFICATION.md` |
