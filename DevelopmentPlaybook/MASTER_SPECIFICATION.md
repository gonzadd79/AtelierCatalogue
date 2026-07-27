# Master Specification

Ce document constitue l'unique source de vérité de DevelopmentPlaybook.

## Detailed References

Les développements détaillés sont maintenus dans les documents spécialisés du dossier `reference/`. `MASTER_SPECIFICATION.md` reste volontairement compact et demeure le point d'entrée du projet.

# PART I — Identity

## Glossary

### Identity

### Vision

### Mission

### Philosophy

### Goal

### Non-goal

### Blueprint

### Epic

### Feature

### Story

### Milestone

### Artifact

### Template

### Prompt

## Source of Truth

### Definition

Une source de vérité est la référence officiellement reconnue comme faisant autorité pour un ensemble d'informations défini. Lorsqu'une information existe sous plusieurs formes, elle détermine laquelle est considérée comme actuelle et fiable.

### Purpose

Une source unique de vérité évite que des versions concurrentes produisent des interprétations, des décisions ou des actions contradictoires. Elle permet à chacun de partager le même état de référence, de comprendre où une information doit être maintenue et de vérifier les écarts dans le temps.

### Rules

- Le périmètre couvert par la source de vérité doit être explicite.
- Un même sujet ne doit avoir qu'une seule référence faisant autorité à un instant donné.
- Toute évolution validée doit être intégrée dans la source de vérité concernée.
- Les résumés, copies et documents dérivés doivent renvoyer vers la source de vérité et ne pas la remplacer.
- Une contradiction doit être résolue dans la source de vérité, non masquée par une nouvelle version parallèle.
- La responsabilité de maintenir chaque source de vérité doit être clairement attribuée.
- Les informations inconnues, provisoires ou contestées doivent conserver explicitement cet état.

### Examples

- Une politique produit officielle fait autorité ; les présentations qui la résument renvoient vers elle.
- Une feuille de route validée porte les priorités courantes ; les comptes rendus n'en créent pas une version concurrente.
- Un glossaire officiel fixe le sens des termes partagés ; les autres documents réutilisent ce vocabulaire sans le redéfinir.

### Related concepts

- Artifact
- Architecture Decision
- Documentation Standard
- Revision History

### Implementation

### Refactoring

### Architecture Decision

### Product Review

### UX Review

### Technical Debt

## Vision

### Raison d'être

DevelopmentPlaybook existe pour offrir un cadre durable au développement assisté par intelligence artificielle. Il transforme des pratiques souvent implicites ou dispersées en une méthode commune, compréhensible et améliorable.

### Problème résolu

L'assistance par IA peut accélérer le travail sans garantir la cohérence, la qualité ni la continuité. Lorsque les objectifs, les responsabilités, les décisions et les critères de validation sont mal définis, les résultats deviennent difficiles à reproduire, à expliquer et à faire évoluer.

DevelopmentPlaybook rassemble ces repères dans une source de vérité unique. Il aide à conserver l'intention du produit, à structurer la collaboration entre l'humain et l'IA et à rendre les choix vérifiables dans le temps.

### Utilisateurs

DevelopmentPlaybook s'adresse aux personnes et aux équipes qui conçoivent, pilotent, réalisent ou évaluent des produits avec l'assistance de l'IA. Il doit rester accessible aux nouveaux utilisateurs tout en offrant un cadre suffisamment rigoureux pour des pratiques durables.

### Objectifs

- Établir un langage et des attentes partagés.
- Rendre le travail assisté par IA cohérent, explicable et reproductible.
- Clarifier les responsabilités, les étapes de validation et les critères de qualité.
- Préserver les décisions et les enseignements utiles au fil du temps.
- Favoriser une progression maîtrisée, fondée sur des résultats vérifiables.
- Permettre à la méthode d'évoluer sans perdre son identité ni sa cohérence.

### Principes fondateurs

- **Responsabilité humaine.** L'IA assiste ; l'humain reste responsable des intentions, des choix et des résultats.
- **Intention explicite.** Le besoin, le périmètre et les critères de réussite précèdent l'action.
- **Source de vérité unique.** Les règles de référence sont réunies, cohérentes et maintenues dans le temps.
- **Traçabilité utile.** Les décisions importantes sont compréhensibles et peuvent être réexaminées.
- **Progression vérifiable.** Le travail avance par étapes limitées dont le résultat peut être évalué.
- **Simplicité.** Chaque règle doit apporter une valeur claire et rester facile à appliquer.
- **Amélioration continue.** La méthode évolue à partir de l'expérience sans accumuler de contradictions.
- **Indépendance.** Le référentiel reste applicable à des contextes variés et ne dépend d'aucun projet particulier.

### Limites volontaires

DevelopmentPlaybook ne cherche pas à remplacer le jugement, l'expertise ou la responsabilité humaine. Il ne promet pas une qualité automatique et n'impose pas une manière unique de travailler à tous les contextes.

Il ne cherche pas non plus à devenir un logiciel, une plateforme d'exécution, une collection de recettes isolées ou la documentation d'un projet particulier. Sa vocation est de fournir un cadre produit stable et adaptable, non de décider ou d'agir à la place de ses utilisateurs.

## Mission

DevelopmentPlaybook donne aux personnes et aux équipes un cadre commun pour préparer, conduire, examiner et faire évoluer un travail de développement assisté par intelligence artificielle. Au quotidien, il les aide à clarifier l'intention du produit, limiter le périmètre des changements, documenter les décisions, vérifier les résultats et maintenir une source de vérité cohérente, sous responsabilité humaine.

## Core Principles

### Product before implementation

**Principe.** L'intention du produit, le besoin à satisfaire et le résultat attendu priment sur la manière de les réaliser.

**Justification.** Une réalisation ne crée de valeur durable que lorsqu'elle sert un objectif produit clairement compris.

### User value over technical elegance

**Principe.** La valeur apportée à l'utilisateur prévaut sur la sophistication ou l'élégance d'une solution.

**Justification.** Une solution remarquable en elle-même reste inadéquate si elle ne résout pas un problème réel de façon claire et fiable.

### One source of truth

**Principe.** Les règles, orientations et références en vigueur doivent disposer d'une source officielle unique.

**Justification.** Une autorité clairement identifiée limite les contradictions, les interprétations divergentes et la perte de cohérence dans le temps.

### Explain decisions, not only decisions

**Principe.** Une décision importante doit conserver son contexte, sa raison d'être et ses conséquences, et non son seul résultat.

**Justification.** Le raisonnement permet d'évaluer la décision lorsque les circonstances changent et évite de répéter des débats déjà résolus.

### Small incremental changes

**Principe.** Les évolutions doivent rester limitées, cohérentes et compréhensibles.

**Justification.** De petits changements réduisent l'incertitude, facilitent la validation et permettent de corriger une direction avant que ses effets ne s'étendent.

### Documentation is part of the product

**Principe.** La documentation appartient pleinement au produit et mérite la même exigence de clarté, d'exactitude et de continuité.

**Justification.** Un produit ne peut rester compréhensible, transmissible et durable si sa connaissance dépend uniquement de la mémoire de ses contributeurs.

### Architecture evolves intentionally

**Principe.** L'architecture doit évoluer par des choix explicites, justifiés et compatibles avec l'identité du produit.

**Justification.** Les changements implicites ou accumulés sans intention affaiblissent progressivement la cohérence et rendent les conséquences difficiles à maîtriser.

### Reviews before commits

**Principe.** Toute évolution significative doit être examinée avant d'être considérée comme une référence stable.

**Justification.** La revue permet de détecter les écarts de sens, de qualité ou de périmètre avant qu'ils ne s'inscrivent durablement dans l'historique du produit.

### Human validates product direction

**Principe.** La direction du produit, ses priorités et ses compromis restent soumis à une validation humaine.

**Justification.** La responsabilité du sens, de la valeur et des conséquences d'un choix ne peut être déléguée à un système d'assistance.

### Unknown remains unknown

**Principe.** Une information absente, incertaine ou non vérifiée doit rester explicitement inconnue.

**Justification.** Une fausse certitude compromet la confiance et peut orienter les décisions plus gravement qu'une limite reconnue.

### Simple is preferable to clever

**Principe.** La solution la plus simple qui répond durablement au besoin doit être préférée à une solution ingénieuse mais difficile à comprendre.

**Justification.** La simplicité favorise l'adoption, la vérification, la transmission et l'évolution à long terme.

### Consistency over novelty

**Principe.** La cohérence avec les conventions établies prévaut sur la recherche de nouveauté sans bénéfice démontré.

**Justification.** La prévisibilité réduit l'effort de compréhension et permet au produit d'évoluer sans fragmenter son langage ni ses pratiques.

## Philosophy

## Goals

## Non-goals

# PART II — Process

## Methodology

## Documentation Standard

## Product Reviews

## Architecture Decisions

## Git Workflow

# PART III — Assets

## Templates

## Prompt Library

## Examples

# PART IV — Evolution

## Future Evolution

## Revision History
