# Architecture Certification

**Décision : ARCHITECTURE CERTIFIED**

## Purpose

Ce document certifie l'architecture de Release 0.1. Il vérifie que les décisions Produit, métier, applicatives et de continuité forment un ensemble complet, cohérent, traçable et stable. Il ne crée aucune responsabilité, aucun contrat et aucune règle métier.

La certification gèle la base architecturale de Release 0.1. Cette base devient la référence officielle des futurs travaux d'Implementation Design, d'Infrastructure et d'Implémentation.

## Périmètre de certification

La certification porte sur :

- les sept Product Capabilities incluses dans Release 0.1 ;
- les Acceptance Criteria associés et les dix critères globaux ;
- les 16 Use Cases ;
- les six Application Services ;
- les sept Aggregates ;
- les trois Domain Services retenus ;
- les 17 Domain Events ;
- les quatre Ports canoniques ;
- les 17 contraintes Produit ;
- la responsabilité architecturale de continuité métier.

Les capacités explicitement prévues pour des Releases ultérieures ne font pas partie du périmètre certifié. Leur absence ne constitue pas un défaut de Release 0.1.

## 1. Certification Produit

### Couverture des Capabilities

| Capability 0.1 | Acceptance Criteria principal | Use Cases | Couverture | Décision |
| --- | --- | --- | --- | --- |
| `CAP-001` — Créer un inventaire | `AC-01-CAP-001` | `UC-001`, `UC-002` | Création et évolution du périmètre | Certifiée |
| `CAP-002` — Ajouter un bien | `AC-01-CAP-002` | `UC-003`, `UC-004`, `UC-015` | Inclusion, correction identitaire et consultation | Certifiée |
| `CAP-003` — Observer un bien | `AC-01-CAP-003` | `UC-005`, `UC-006`, `UC-013` | Création, correction et provenance commune | Certifiée |
| `CAP-005` — Documenter un bien | `AC-01-CAP-005` | `UC-007`, `UC-008`, `UC-013` | Création, correction et provenance commune | Certifiée |
| `CAP-006` — Actualiser la connaissance | `AC-01-CAP-006` | `UC-009` à `UC-013` | Établissement, évolution, conflit, arbitrage et Source | Certifiée |
| `CAP-009` — Rechercher | `AC-01-CAP-009` | `UC-014`, `UC-015` | Recherche et consultation dérivées | Certifiée |
| `CAP-011` — Suivre l'historique | `AC-01-CAP-011` | `UC-016` | Continuité historique autoritaire | Certifiée |

Chaque Capability dispose d'un résultat observable, d'au moins un Use Case, d'un Application Service, des autorités métier nécessaires et des Ports requis.

### Acceptance Criteria

Les critères `AC-01-CAP-001`, `AC-01-CAP-002`, `AC-01-CAP-003`, `AC-01-CAP-005`, `AC-01-CAP-006`, `AC-01-CAP-009` et `AC-01-CAP-011` sont atteignables par les Use Cases certifiés.

Les critères globaux sont architecturalement couverts :

- `AC-01-GLO-001` par les parcours complets et leurs contrats applicatifs ;
- `AC-01-GLO-002` par les autorités d'Inventaire et d'Article ;
- `AC-01-GLO-003` par AGG-07, les apports, AGG-03 et les références de provenance ;
- `AC-01-GLO-004` par AGG-06, DS-04 et `UC-016` ;
- `AC-01-GLO-005` et `AC-01-GLO-006` par AGG-03 et les projections fidèles ;
- `AC-01-GLO-007` par PC-01, PC-02 et la continuité métier ;
- `AC-01-GLO-008` par les coordinations explicites des Use Cases ;
- `AC-01-GLO-009` par les Aggregates et Domain Services propriétaires ;
- `AC-01-GLO-010` par l'exclusion explicite des capacités postérieures à 0.1.

L'architecture établit leur atteignabilité. Leur constat empirique appartient à l'acceptation de la Release, sans nécessiter une nouvelle décision d'architecture.

### Contraintes Produit

| Contrainte | Disposition architecturale certifiée | Statut |
| --- | --- | --- |
| `ARC-CON-001` — Confidentialité | Frontières d'autorité explicites et aucune interaction extérieure obligatoire | Couverte |
| `ARC-CON-002` — Propriété des informations | AGG-01 à AGG-07 conservent leurs autorités ; les projections restent dérivées | Couverte |
| `ARC-CON-003` — Fonctionnement hors ligne | Aucun Use Case 0.1 ne dépend d'une capacité extérieure au contexte d'usage | Couverte |
| `ARC-CON-004` — Synchronisation future | Absente du Scope et sans dépendance anticipée | Correctement différée |
| `ARC-CON-005` — Sauvegarde et restauration | Ensemble autoritaire, décision d'admission, refus et reconstruction définis par `14_BUSINESS_CONTINUITY_AND_RECOVERY.md` | Couverte |
| `ARC-CON-006` — Continuité de service | Dernier ensemble confirmé, absence de reprise silencieuse et restauration indivisible | Couverte |
| `ARC-CON-007` — Portabilité | Frontière future préservée sans confusion avec sauvegarde ou partage | Correctement engagée |
| `ARC-CON-008` — Performance perçue | Projection séparée et seuil maintenu comme critère vérifiable | Couverte ; preuve ultérieure |
| `ARC-CON-009` — Volumétrie de référence | Frontières indépendantes et consultation dérivée ; seuil maintenu | Couverte ; preuve ultérieure |
| `ARC-CON-010` — Scalabilité | Aucune complexité anticipée pour une exigence postérieure à 1.0 | Correctement différée |
| `ARC-CON-011` — Extensibilité fonctionnelle | Responsabilités, Bounded Contexts, Aggregates et Ports séparés | Couverte |
| `ARC-CON-012` — Interopérabilité | Restitution future bornée sans autorité concurrente | Correctement engagée |
| `ARC-CON-013` — Accessibilité | Tous les parcours possèdent des résultats et échecs explicites ; preuve réservée à la démonstration | Couverte ; preuve ultérieure |
| `ARC-CON-014` — Fidélité des contenus | AGG-05 possède le contenu ; PC-01 le préserve ; la continuité le restaure sans reconstruction | Couverte |
| `ARC-CON-015` — Traçabilité | Sources, apports, connaissance, événements et Historique restent reliés | Couverte |
| `ARC-CON-016` — Auditabilité métier | AGG-06, `DE-014`, `DE-017` et `UC-016` conservent l'explication du passé | Couverte |
| `ARC-CON-017` — Évolutivité de la connaissance | État courant, apports, décisions et Historique possèdent des autorités distinctes | Couverte |

Toutes les contraintes possèdent une disposition architecturale. Les contraintes nécessitant une mesure ou une démonstration restent des obligations de réalisation et d'acceptation, non des ambiguïtés d'architecture.

## 2. Certification de la traçabilité

La Vision de référence est `00_PRODUCT_VISION.md`. Elle recherche un Inventaire clair, cohérent et durable permettant de retrouver les biens, comprendre la connaissance, rendre visibles l'inconnu et l'incertitude, puis préserver cette compréhension dans le temps.

| Vision | Capability | Acceptance Criteria | Use Case | Application Service | Aggregate ou Domain Service | Domain Event | Port |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Connaissance délimitée et durable | `CAP-001` | `AC-01-CAP-001`, `AC-01-GLO-001`, `AC-01-GLO-008`, `AC-01-GLO-009` | `UC-001` | AS-01 | AGG-01, AGG-06, DS-04 | `DE-001`, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| Connaissance délimitée et durable | `CAP-001` | `AC-01-GLO-002`, `AC-01-GLO-007` à `AC-01-GLO-009` | `UC-002` | AS-01 | AGG-01, AGG-02 en lecture, AGG-06, DS-04 si significatif | `DE-002`, `DE-014`, `DE-017` si significatif | PC-01-L puis PC-01-P, ou PC-02 si significatif |
| Comprendre ce qui est possédé | `CAP-002` | `AC-01-CAP-002`, `AC-01-GLO-002`, `AC-01-GLO-007` à `AC-01-GLO-009` | `UC-003` | AS-02 | AGG-01 en lecture, AGG-02, AGG-06, DS-01, DS-04 | `DE-003`, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| Comprendre ce qui est possédé | `CAP-002` | `AC-01-CAP-002`, `AC-01-GLO-002`, `AC-01-GLO-007`, `AC-01-GLO-009` | `UC-004` | AS-02 | AGG-01 et AGG-02 en lecture, AGG-02 cible, AGG-06, DS-01, DS-04 | `DE-004`, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| Origine et incertitude visibles | `CAP-003` | `AC-01-CAP-003`, `AC-01-GLO-003`, `AC-01-GLO-005`, `AC-01-GLO-006`, `AC-01-GLO-009` | `UC-005` | AS-03 | AGG-02 en lecture, AGG-04, AGG-07, DS-05 si nécessaire | `DE-010`, `DE-015` si Source reconnue | PC-01-L, PC-01-P |
| Origine et incertitude visibles | `CAP-003` | `AC-01-CAP-003`, `AC-01-GLO-003`, `AC-01-GLO-005`, `AC-01-GLO-007`, `AC-01-GLO-009` | `UC-006` | AS-03 | AGG-02 et AGG-03 en lecture, AGG-04, AGG-06, AGG-07, DS-04 si significatif | `DE-011`, `DE-014`, `DE-017` si significatif | PC-01-L puis PC-01-P, ou PC-02 si significatif |
| Compréhension documentée | `CAP-005` | `AC-01-CAP-005`, `AC-01-GLO-003`, `AC-01-GLO-006`, `AC-01-GLO-009` | `UC-007` | AS-03 | AGG-02 en lecture, AGG-05, AGG-07, DS-05 si nécessaire | `DE-012`, `DE-015` si Source reconnue | PC-01-L, PC-01-P |
| Compréhension documentée | `CAP-005` | `AC-01-CAP-005`, `AC-01-GLO-003`, `AC-01-GLO-007`, `AC-01-GLO-009` | `UC-008` | AS-03 | AGG-02 et AGG-03 en lecture, AGG-05, AGG-06, AGG-07, DS-04 si significatif | `DE-013`, `DE-014`, `DE-017` si significatif | PC-01-L puis PC-01-P, ou PC-02 si significatif |
| Connaissance fiable et explicite | `CAP-006` | `AC-01-CAP-006`, `AC-01-GLO-003`, `AC-01-GLO-005`, `AC-01-GLO-006`, `AC-01-GLO-008`, `AC-01-GLO-009` | `UC-009` | AS-04 | AGG-02 à AGG-07, DS-05 si nécessaire, DS-04 | `DE-005`, `DE-015` si Source reconnue, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| Connaissance fiable et explicite | `CAP-006` | `AC-01-CAP-006`, `AC-01-GLO-003` à `AC-01-GLO-007`, `AC-01-GLO-009` | `UC-010` | AS-04 | AGG-02 à AGG-07, DS-05 si nécessaire, DS-04 | `DE-006`, `DE-015` si Source reconnue, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| Inconnu et contradiction visibles | `CAP-006` | `AC-01-CAP-006`, `AC-01-GLO-005` à `AC-01-GLO-007`, `AC-01-GLO-009` | `UC-011` | AS-04 | AGG-03 à AGG-07, DS-04 si significatif | `DE-007` ou `DE-008`, `DE-014`, `DE-017` si significatif | PC-01-L puis PC-01-P, ou PC-02 si significatif |
| Jugement utilisateur préservé | `CAP-006` | `AC-01-CAP-006`, `AC-01-GLO-003` à `AC-01-GLO-007`, `AC-01-GLO-009` | `UC-012` | AS-04 | AGG-03 à AGG-07, DS-04 | `DE-009`, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| Origine identifiable | `CAP-003`, `CAP-005`, `CAP-006` | Critères des capacités concernées, `AC-01-GLO-003`, `AC-01-GLO-007`, `AC-01-GLO-009` | `UC-013` | AS-03 | AGG-03 à AGG-07, DS-05, DS-04 si significatif | `DE-016`, `DE-014`, `DE-017` si significatif | PC-01-L puis PC-01-P, ou PC-02 si significatif |
| Retrouver rapidement un Article | `CAP-009` | `AC-01-CAP-009`, `AC-01-GLO-001`, `AC-01-GLO-002`, `AC-01-GLO-006`, `AC-01-GLO-008`, `AC-01-GLO-009` | `UC-014` | AS-05 | BC-05 lisant AGG-01, AGG-02, AGG-03, AGG-05 | Aucun — lecture | PC-03 |
| Comprendre l'Article retrouvé | `CAP-002`, `CAP-009` | `AC-01-CAP-002`, `AC-01-CAP-009`, `AC-01-GLO-001` à `AC-01-GLO-003`, `AC-01-GLO-005`, `AC-01-GLO-006`, `AC-01-GLO-008` | `UC-015` | AS-05 | AGG-01 à AGG-05 et AGG-07 en lecture | Aucun — lecture | PC-03 |
| Préserver la compréhension dans le temps | `CAP-011` | `AC-01-CAP-011`, `AC-01-GLO-001`, `AC-01-GLO-004`, `AC-01-GLO-007` à `AC-01-GLO-009` | `UC-016` | AS-06 | AGG-06 et Aggregate source en lecture | Aucun — lecture | PC-01-L ; PC-03 facultatif |

Les 16 chaînes sont complètes. L'absence de Domain Event dans les trois Use Cases de lecture est explicite et conforme à leur absence d'effet métier.

## 3. Certification du Domaine

### Autorités

- AGG-01 possède l'Inventaire et les limites du périmètre.
- AGG-02 possède l'identité et l'appartenance de l'Article.
- AGG-03 possède la connaissance courante et l'arbitrage.
- AGG-04 possède le constat contextualisé.
- AGG-05 possède le contenu documentaire contextualisé.
- AGG-06 possède la continuité historique.
- AGG-07 possède l'identité et le contexte d'une Source commune.

Aucune de ces autorités n'est dupliquée dans un Application Service, un Port, une projection ou la responsabilité de continuité.

### Aggregates

Les sept Aggregates sont justifiés par une autorité durable et des invariants propres. Leurs frontières sont définies par `04_AGGREGATE_OWNERSHIP.md` et leurs contrats par `05_AGGREGATE_DESIGN.md`. Aucun Aggregate n'est un simple regroupement de données et aucune autorité ne nécessite un huitième Aggregate en Release 0.1.

### Domain Services

DS-01, DS-04 et DS-05 sont justifiés parce que leurs décisions nécessitent plusieurs autorités sans pouvoir appartenir à un Aggregate unique. DS-02 et DS-03 ont été explicitement absorbés par les responsabilités existantes. Les trois services retenus restent sans état et sans dépendance mutuelle.

### Domain Events

Les 17 Domain Events possèdent un émetteur autoritaire, une signification métier et des conséquences identifiables. Aucun événement ne représente une lecture, un refus, une intention ou une activité technique. La continuité ne les rejoue pas et n'en crée aucun.

### Invariants

Tous les invariants applicables au Scope 0.1 sont protégés par les Aggregates et Domain Services correspondants. Les invariants relatifs aux capacités futures restent hors du Scope sans être contournés ni simulés. Aucune logique métier nécessaire à 0.1 n'est placée hors du Domaine.

## 4. Certification de l'Application

| Application Service | Use Cases | Responsabilité certifiée | Dépendance directe |
| --- | --- | --- | --- |
| AS-01 — Périmètre | `UC-001`, `UC-002` | Orchestrer les intentions portant sur l'Inventaire | Aucune |
| AS-02 — Identité des Articles | `UC-003`, `UC-004` | Orchestrer inclusion et correction identitaire | Aucune |
| AS-03 — Apports | `UC-005` à `UC-008`, `UC-013` | Orchestrer Observation, Documentation et Source | Aucune |
| AS-04 — Connaissance courante | `UC-009` à `UC-012` | Orchestrer les décisions d'AGG-03 | Aucune |
| AS-05 — Consultation | `UC-014`, `UC-015` | Orchestrer recherche et consultation dérivées | Aucune |
| AS-06 — Historique | `UC-016` | Orchestrer la consultation de la continuité | Aucune |

Les 16 Use Cases sont couverts une fois. Aucun Application Service ne prend de décision métier, n'appelle un autre Application Service ou ne duplique sa responsabilité.

## 5. Certification des Ports

| Port | Frontière | Garanties certifiées | Échecs | Décision |
| --- | --- | --- | --- | --- |
| PC-01-L | Lecture des états autoritaires | Identité, absence explicite, lecture sans effet, aucune projection substituée | PF-01 à PF-03, PF-08, PF-09 | Certifié, obligatoire |
| PC-01-P | Préservation individuelle | État déjà reconnu, conflit récent visible, aucun succès silencieux | PF-02 à PF-05, PF-08, PF-09 | Certifié, obligatoire |
| PC-02 | Préservation coordonnée | Complétude DS-04, indivisibilité métier, aucun succès partiel | PF-02 à PF-05, PF-08, PF-09 | Certifié sous condition d'usage |
| PC-03 | Lecture des projections | Lecture seule, provenance, complétude et caractère non autoritaire | PF-01 à PF-03, PF-06 à PF-09 | Certifié, obligatoire pour la consultation |
| PC-04 | Mise à disposition des faits reconnus | Fait inchangé, aucune autorité transférée, aucun effet sur le résultat source | Sous-ensemble à confirmer lors d'une future activation | Certifié comme différé |

Les contrats sont indépendants de leur réalisation. Les Ports ne dépendent ni des Application Services ni les uns des autres. Les neuf catégories d'échec distinguent toutes les situations nécessaires sans faux succès.

## 6. Certification de la continuité métier

`14_BUSINESS_CONTINUITY_AND_RECOVERY.md` ferme la réserve de `13_ARCHITECTURE_READINESS_REVIEW.md` :

- les états d'AGG-01 à AGG-07 et leurs références forment l'ensemble autoritaire restaurable ;
- AGG-06 est restauré comme autorité et ne peut être recalculé ;
- le contenu d'AGG-05 appartient à l'état métier et ne peut être remplacé ;
- les projections sont reconstruites et restent non autoritaires ;
- les Domain Events ne sont ni rejoués, ni recréés, ni réémis ;
- PC-01 reprend l'accès normal après admission de l'ensemble ;
- PC-02 garantit avant interruption la complétude des décisions coordonnées ;
- PC-03 rend l'indisponibilité ou l'incomplétude des projections explicite ;
- PC-04 reste différé ;
- aucun nouveau Port, Use Case, Application Service, Domain Service ou Aggregate n'est nécessaire.

La responsabilité architecturale de continuité décide seulement si un ensemble déjà reconnu peut être rétabli sans rupture. Elle n'acquiert aucune autorité sur son contenu.

**`ARC-CON-005` est couvert.** Son articulation avec `ARC-CON-006`, l'Historique, les Ports et les Domain Events est cohérente.

## 7. Architecture globale

### Ambiguïtés bloquantes

Aucune.

### Ambiguïtés mineures

1. `13_ADAPTER_ANALYSIS.md` et `13_ARCHITECTURE_READINESS_REVIEW.md` partagent un même préfixe ordinal. Cette collision documentaire ne crée aucune ambiguïté d'autorité ou de contrat.
2. `06_DOMAIN_SERVICE_ANALYSIS.md` emploie le terme « analytique » pour des contrats qui constituent la seule définition retenue des trois Domain Services 0.1. Leurs missions, préconditions, résultats et limites sont néanmoins complets.

### Ambiguïtés acceptables

- PC-04 reste différé faute de consommateur 0.1.
- les capacités postérieures à Release 0.1 restent hors du périmètre certifié ;
- la forme concrète des Domain Services, des entrées, des sorties et des projections relève de l'Implementation Design ;
- les preuves de performance, volumétrie, accessibilité, confidentialité et fonctionnement hors ligne relèvent de la réalisation et de l'acceptation ;
- les analyses intermédiaires conservent le raisonnement historique sans concurrencer les documents de design final.

Aucune ambiguïté restante n'exige de modifier une autorité, une responsabilité, un Use Case, un Application Service ou un Port.

## Documents normatifs de Release 0.1

### Produit

- `docs/product/00_PRODUCT_VISION.md` ;
- `docs/product/10_PRODUCT_PRINCIPLES.md` ;
- `docs/product/20_UBIQUITOUS_LANGUAGE.md` ;
- `docs/product/21_INVENTORY_DOMAIN.md` ;
- `docs/product/22_DOMAIN_INVARIANTS.md` ;
- `docs/product/23_PRODUCT_CAPABILITIES.md` ;
- `docs/product/24_RELEASE_SCOPE.md` ;
- `docs/product/25_USER_EXPERIENCE.md` ;
- `docs/product/27_DOMAIN_DECISIONS.md` ;
- `docs/product/29_RELEASE_0.1_ACCEPTANCE.md` ;
- `docs/product/30_ARCHITECTURE_CONSTRAINTS.md`.

### Architecture stratégique

- `docs/product/40_ARCHITECTURE_VISION.md` ;
- `docs/architecture/00_ARCHITECTURE_BLUEPRINT.md`.

### Architecture métier

- `docs/architecture/02_BOUNDED_CONTEXTS.md` ;
- `docs/architecture/04_AGGREGATE_OWNERSHIP.md` ;
- `docs/architecture/05_AGGREGATE_DESIGN.md` ;
- `docs/architecture/06_DOMAIN_SERVICE_ANALYSIS.md` ;
- `docs/architecture/07_DOMAIN_EVENTS.md`.

### Architecture applicative

- `docs/architecture/09_USE_CASE_DESIGN.md` ;
- `docs/architecture/10_APPLICATION_SERVICES.md` ;
- `docs/architecture/12_PORT_DESIGN.md`.

### Continuité métier

- `docs/architecture/14_BUSINESS_CONTINUITY_AND_RECOVERY.md`.

### Statut des autres documents

Les Blueprints détaillés, analyses, reviews et certifications intermédiaires restent des preuves de traçabilité et de décision. Les documents de planification restent consacrés à la planification. Ils ne redéfinissent pas les contrats normatifs listés ci-dessus.

La présente certification devient le registre du gel architectural. Elle constate l'autorité de la base certifiée sans créer de règle métier supplémentaire.

## Décisions futures

### Implementation Design

Relèvent désormais de l'Implementation Design :

- la forme détaillée des trois Domain Services retenus, sans changement de responsabilité ;
- la conception des réalisations satisfaisant les Ports existants ;
- la représentation des intentions, résultats et catégories d'échec ;
- la production et l'actualisation des projections sous les garanties de PC-03 ;
- la réalisation de la responsabilité de continuité définie par le document normatif.

### Infrastructure

Relèvent désormais de l'Infrastructure :

- la conservation durable des états autoritaires ;
- le fonctionnement hors ligne ;
- la protection du périmètre confidentiel ;
- la reprise après interruption ;
- les moyens permettant de satisfaire sauvegarde et restauration ;
- les moyens de démontrer les seuils de performance et de volumétrie.

### Implémentation

Relèvent désormais de l'Implémentation :

- la construction des responsabilités certifiées ;
- la vérification automatisée des contrats et invariants ;
- la démonstration fonctionnelle des Acceptance Criteria ;
- la mesure des contraintes observables ;
- la correction des défauts sans modification silencieuse de l'architecture.

### Confirmation

**Aucune décision d'architecture n'est encore attendue pour Release 0.1.**

Une question de réalisation reste libre tant qu'elle respecte les documents normatifs. Toute évolution qui modifierait une autorité, une responsabilité, un invariant, un Use Case, un Application Service, un Port, une dépendance ou une garantie sort du périmètre certifié et devra être explicitement décidée et documentée avant adoption.

## Déclaration de gel

L'architecture de Release 0.1 est gelée à la date de cette certification.

La base normative listée dans ce document constitue la référence unique pour toutes les futures implémentations de Release 0.1. Une implémentation peut choisir sa réalisation, mais elle ne peut ni redéfinir le produit, ni déplacer une autorité, ni affaiblir un invariant, ni modifier un contrat certifié.

Les analyses et décisions futures doivent partir de cette base et rendre explicite tout changement proposé. Aucun changement architectural implicite n'est admis après le gel.

## Conclusion

**ARCHITECTURE CERTIFIED**

Les sept Capabilities, les Acceptance Criteria, les 16 Use Cases, les six Application Services, les sept Aggregates, les trois Domain Services retenus, les 17 Domain Events, les quatre Ports, les contraintes Produit et la continuité métier forment une architecture complète, cohérente et traçable.

La réserve `ARC-CON-005` est levée, aucune ambiguïté bloquante ne subsiste et aucune nouvelle décision d'architecture n'est nécessaire pour entrer en Implementation Design.

**L'architecture certifiée constitue la référence unique de toutes les futures implémentations de Release 0.1.**
