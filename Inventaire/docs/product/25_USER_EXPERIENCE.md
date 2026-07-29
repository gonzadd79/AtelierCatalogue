# Blueprint de l'expérience utilisateur

Ce document décrit l'expérience recherchée pour Inventaire avant toute conception de présentation. Les parcours sont des situations d'usage : ils définissent une intention et un résultat, sans imposer de séquence détaillée.

L'expérience doit donner à l'utilisateur le sentiment d'ouvrir une connaissance organisée de ses biens, et non de consulter une structure administrative. À chaque instant, il doit pouvoir comprendre ce qui est connu, pourquoi cela est connu et ce qui reste incertain.

## Parcours principaux

### UX-001 — Premier lancement

- **Objectif utilisateur :** comprendre immédiatement ce qu'est Inventaire et savoir comment commencer.
- **Déclencheur :** l'utilisateur découvre le produit alors qu'aucun Inventaire n'existe encore.
- **Résultat attendu :** l'absence de contenu est présentée comme un état normal ; la finalité du produit et la possibilité de créer un premier Inventaire sont compréhensibles sans connaissance préalable.
- **Objets métier impliqués :** aucun objet encore créé ; futur Inventaire.
- **Capacités utilisées :** `CAP-001` — Créer un inventaire.
- **Invariants concernés :** `INV-EXI-001`, `INV-COH-002`.

### UX-002 — Création du premier inventaire

- **Objectif utilisateur :** établir le périmètre dans lequel ses biens seront compris.
- **Déclencheur :** l'utilisateur décide de commencer un inventaire pour un ensemble de biens identifié.
- **Résultat attendu :** un Inventaire vide mais valide existe ; son but et ses limites sont suffisamment clairs pour éviter toute confusion avec un autre périmètre.
- **Objets métier impliqués :** Inventaire, Historique.
- **Capacités utilisées :** `CAP-001` — Créer un inventaire.
- **Invariants concernés :** `INV-EXI-001`, `INV-TRA-001`, `INV-COH-002`.

### UX-003 — Ajout du premier bien

- **Objectif utilisateur :** reconnaître un bien distinct comme appartenant à l'Inventaire.
- **Déclencheur :** l'utilisateur choisit un bien réel qu'il souhaite inventorier.
- **Résultat attendu :** une unité de gestion identifiable — bien individuel ou ensemble volontairement indivisible — devient un Article appartenant explicitement à un seul Inventaire ; les Informations manquantes restent visibles sans empêcher un enrichissement ultérieur.
- **Objets métier impliqués :** Inventaire, Article d'inventaire, Observation, Historique.
- **Capacités utilisées :** `CAP-002` — Ajouter un bien ; `CAP-003` — Observer un bien lorsque l'ajout s'appuie sur un constat initial.
- **Invariants concernés :** `INV-ID-001`, `INV-ID-002`, `INV-EXI-001`, `INV-TRA-001`, `INV-COH-002`.

### UX-004 — Consultation d'un bien

- **Objectif utilisateur :** comprendre rapidement ce qu'est un bien, où il est censé se trouver et ce qui est connu à son sujet.
- **Déclencheur :** l'utilisateur accède à un Article d'inventaire depuis un contexte de découverte ou de recherche.
- **Résultat attendu :** les Informations actuellement retenues sont lisibles avec leurs Sources, leurs incertitudes, leurs conflits éventuels et l'existence d'un Historique pertinent ; les Informations absentes ne sont pas présentées comme acquises.
- **Objets métier impliqués :** Article d'inventaire, Information d'inventaire, Source, Observation, Élément probant, Documentation, Emplacement, Statut, Relation, Historique.
- **Capacités utilisées :** consultation transversale ; `CAP-009` — Rechercher et `CAP-011` — Suivre l'historique selon l'intention de l'utilisateur.
- **Invariants concernés :** `INV-TRA-001`, `INV-EVD-002`, `INV-DOC-001`, `INV-STA-001`, `INV-COH-001`, `INV-COH-002`.

### UX-005 — Recherche d'un bien

- **Objectif utilisateur :** retrouver rapidement le bon Article d'inventaire à partir des éléments dont il se souvient.
- **Déclencheur :** l'utilisateur formule une intention de recherche ou explore l'Inventaire.
- **Résultat attendu :** les résultats pertinents sont distinguables ; l'absence de résultat est explicite et ne suggère pas que le bien n'existe pas dans la réalité.
- **Objets métier impliqués :** Inventaire, Article d'inventaire, Catalogue, Catégorie, Emplacement, Statut, Documentation.
- **Capacités utilisées :** `CAP-009` — Rechercher.
- **Invariants concernés :** `INV-ID-001`, `INV-EXI-001`, `INV-COH-001`, `INV-COH-002`.

### UX-006 — Ajout d'une Observation

- **Objectif utilisateur :** conserver fidèlement un constat à propos d'un bien ou de sa situation.
- **Déclencheur :** l'utilisateur inspecte un Article d'inventaire, découvre une information ou constate un écart avec la connaissance actuelle.
- **Résultat attendu :** l'Observation est reliée au bon objet, possède une Source et conserve un contexte compréhensible ; elle reste distincte d'une Information retenue ou d'un nouvel état accepté.
- **Objets métier impliqués :** Article d'inventaire, Observation, Source, Information d'inventaire, Emplacement, Statut, Élément probant.
- **Capacités utilisées :** `CAP-003` — Observer un bien.
- **Invariants concernés :** `INV-TRA-001`, `INV-OBS-001`, `INV-OBS-002`, `INV-LOC-001`, `INV-COH-002`.

### UX-007 — Ajout d'un Élément probant

- **Objectif utilisateur :** expliquer ce qui soutient ou contredit une information.
- **Déclencheur :** l'utilisateur dispose d'un élément pertinent pour évaluer une Observation ou une connaissance existante.
- **Résultat attendu :** l'Élément probant possède une Source, indique l'Information ou l'interprétation d'Observation qu'il soutient ou contredit et reste distinct d'une vérité automatique ; une contradiction éventuelle demeure visible.
- **Objets métier impliqués :** Élément probant, Source, Information d'inventaire, Observation, Documentation, Article d'inventaire.
- **Capacités utilisées :** `CAP-004` — Associer un Élément probant.
- **Invariants concernés :** `INV-TRA-001`, `INV-EVD-001`, `INV-EVD-002`, `INV-EVD-003`.

### UX-008 — Actualisation de la connaissance

- **Objectif utilisateur :** faire évoluer la compréhension acceptée d'un bien sans perdre les raisons du changement.
- **Déclencheur :** de nouvelles Observations, Informations, Éléments probants ou Documentation justifient une position différente de l'état courant.
- **Résultat attendu :** les Informations retenues sont explicites, le conflit est résolu ou maintenu comme tel, et le Changement reste compréhensible dans l'Historique.
- **Objets métier impliqués :** Article d'inventaire, Information d'inventaire, Source, Observation, Élément probant, Documentation, Emplacement, Statut, Changement, Historique.
- **Capacités utilisées :** `CAP-006` — Actualiser la connaissance.
- **Invariants concernés :** `INV-TRA-001`, `INV-HIS-001`, `INV-CHG-001`, `INV-STA-001`, `INV-COH-001`, `INV-COH-002`.

### UX-009 — Consultation de l'Historique

- **Objectif utilisateur :** comprendre comment et pourquoi la connaissance d'un bien ou de l'Inventaire a évolué.
- **Déclencheur :** l'utilisateur rencontre une information modifiée, un désaccord ou un besoin d'explication temporelle.
- **Résultat attendu :** les Changements significatifs sont intelligibles dans leur contexte et permettent de relier l'état antérieur à l'état courant sans réécrire le passé.
- **Objets métier impliqués :** Historique, Changement, Inventaire, Article d'inventaire, Observation, Emplacement, Statut, Relation.
- **Capacités utilisées :** `CAP-011` — Suivre l'historique.
- **Invariants concernés :** `INV-TRA-001`, `INV-HIS-001`, `INV-CHG-001`.

### UX-010 — Organisation de l'inventaire

- **Objectif utilisateur :** rendre un ensemble croissant de biens plus facile à parcourir et à comprendre.
- **Déclencheur :** l'utilisateur souhaite regrouper des Articles d'inventaire selon un sens utile à son activité.
- **Résultat attendu :** les Catalogues et Catégories offrent une lecture cohérente sans modifier l'identité des Articles ni leur appartenance à l'Inventaire.
- **Objets métier impliqués :** Inventaire, Article d'inventaire, Catalogue, Catégorie.
- **Capacités utilisées :** `CAP-007` — Organiser un inventaire.
- **Invariants concernés :** `INV-ID-002`, `INV-CAT-001`, `INV-COH-001`.

## Principes UX

### Le vide est un état normal

Un Inventaire vide, une recherche sans résultat ou une information absente doivent être expliqués comme des situations compréhensibles, jamais comme une défaillance implicite.

### L'intention précède la structure

L'utilisateur agit à partir d'un besoin reconnaissable — ajouter, retrouver, vérifier, comprendre — sans devoir connaître l'organisation interne du produit.

### L'origine reste accessible

Chaque Information retenue doit permettre de retrouver sa Source et, lorsqu'ils existent, les Observations, Éléments probants, Documentation ou arbitrages qui l'expliquent.

### L'incertitude est visible

Une information inconnue, incomplète, contestée ou non vérifiée conserve une présentation distincte d'une information acceptée.

### Les conflits ne sont pas aplatis

Lorsque plusieurs informations sont incompatibles, le produit rend le désaccord compréhensible et n'affiche pas une certitude artificielle.

### Le présent n'efface pas le passé

L'état courant est privilégié pour les usages habituels, tandis que l'Historique reste accessible lorsqu'une explication est nécessaire.

### La complexité apparaît à la demande

Les usages fréquents restent directs. Éléments probants, Relations, Historique détaillé et arbitrages apparaissent lorsqu'ils apportent une valeur au contexte présent.

### Chaque action a un effet compréhensible

Avant et après une évolution de la connaissance, l'utilisateur doit comprendre ce qui change, ce qui reste inchangé et si une incertitude subsiste.

### Aucun résultat n'est simulé

Une capacité indisponible, une recherche sans réponse ou une information non établie ne doivent jamais être remplacées par un succès apparent.

### Le langage reste cohérent

Les termes du domaine conservent le même sens dans tous les parcours. Un synonyme occasionnel ne doit pas introduire une seconde notion.

### L'usage peut commencer simplement

L'utilisateur peut obtenir de la valeur avec une connaissance initiale limitée, puis enrichir l'Inventaire à mesure que son besoin et ses éléments disponibles progressent.

### L'utilisateur reste l'arbitre

Le produit aide à examiner et expliquer la connaissance, mais ne transforme pas automatiquement une Observation, un Élément probant ou une comparaison en décision acceptée.

### La compréhension doit rester accessible

Le sens, l'état et l'origine d'une information ne doivent pas dépendre d'un indice unique ou d'une expertise préalable du produit.

## Profils utilisateurs

Les profils décrivent des besoins dominants, pas des rôles exclusifs. Une même personne peut passer d'un profil à l'autre selon son inventaire et son contexte.

### Utilisateur particulier

#### Objectifs

- Savoir quels biens il possède dans un périmètre donné.
- Retrouver un bien et comprendre sa situation actuelle.
- Conserver les informations utiles sans effort disproportionné.

#### Attentes

- Démarrage compréhensible et valeur rapide.
- Vocabulaire simple et informations manquantes clairement signalées.
- Usage courant direct, avec un Historique disponible seulement lorsque nécessaire.

#### Principales capacités utilisées

`CAP-001`, `CAP-002`, `CAP-003`, `CAP-005`, `CAP-006`, `CAP-009`, `CAP-011`, puis `CAP-014` lorsque l'inventaire évolue.

### Maker / passionné

#### Objectifs

- Reconnaître et documenter des biens variés.
- Relier constats, Élément probant et Documentation.
- Organiser les articles selon plusieurs contextes utiles.

#### Attentes

- Enrichissement progressif sans structure excessive au départ.
- Incertitudes et contradictions conservées pendant l'identification.
- Relations, catégories et contexte documentaire faciles à comprendre.

#### Principales capacités utilisées

`CAP-002` à `CAP-012`, selon la maturité et la taille de l'Inventaire.

### Utilisateur avancé

#### Objectifs

- Maintenir un inventaire important ou durable avec une connaissance cohérente.
- Examiner les sources, conflits, relations et évolutions historiques.
- Comparer, restituer et partager une compréhension maîtrisée.

#### Attentes

- Traçabilité complète sans duplication d'autorité.
- Accès à la complexité utile sans alourdir les actions fréquentes.
- Continuité du sens lors de l'export, du partage et de l'archivage.

#### Principales capacités utilisées

L'ensemble des capacités `CAP-001` à `CAP-014`, avec un usage particulièrement fréquent de `CAP-004`, `CAP-006`, `CAP-008`, `CAP-010`, `CAP-011`, `CAP-012`, `CAP-013` et `CAP-014`.

## Questions ouvertes

- La consultation d'un Article d'inventaire doit-elle devenir une capacité produit explicite ou rester une interaction transversale ?
- Quelle connaissance minimale permet un premier ajout rapide sans compromettre l'identité de l'article ?
- Comment exprimer les différents degrés d'incertitude avec un vocabulaire compréhensible et stable ?
- Jusqu'où montrer l'Historique dans l'usage courant avant qu'elle ne devienne une complexité inutile ?
- Comment présenter des Éléments probants contradictoires sans suggérer qu'ils ont tous la même portée ?
- L'organisation initiale doit-elle être proposée dès le premier article ou seulement lorsque l'Inventaire grandit ?
- Quels besoins d'accessibilité doivent être considérés comme invariants de l'expérience dès la première Release ?

Ces questions devront être résolues avant de détailler les expériences concernées. Elles ne justifient aucune hypothèse silencieuse dans une future conception.
