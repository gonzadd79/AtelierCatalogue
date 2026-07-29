# Architecture Readiness Review

**Décision : NOT READY**

## Purpose

Cette revue évalue si l'architecture de Release 0.1 est complète, cohérente et traçable au point de permettre l'Implementation Design sans nouvelle décision d'architecture. Elle examine uniquement les responsabilités et décisions existantes ; elle ne crée aucun concept ni aucune frontière.

## Périmètre et sources

La revue s'appuie sur :

- `23_PRODUCT_CAPABILITIES.md` ;
- `24_RELEASE_SCOPE.md` ;
- `29_RELEASE_0.1_ACCEPTANCE.md` ;
- `30_ARCHITECTURE_CONSTRAINTS.md` ;
- `31_PRODUCT_READINESS_CERTIFICATION.md` ;
- `00_ARCHITECTURE_BLUEPRINT.md` à `12_PORT_DESIGN.md` ;
- `13_ADAPTER_ANALYSIS.md` comme analyse complémentaire déjà présente.

La Release 0.1 comprend sept capacités : `CAP-001`, `CAP-002`, `CAP-003`, `CAP-005`, `CAP-006`, `CAP-009` et `CAP-011`. Elle comporte 16 Use Cases, six Application Services, sept Aggregates, trois Domain Services retenus, 17 Domain Events et quatre Ports canoniques.

## Executive Summary

La chaîne fonctionnelle du Scope 0.1 est cohérente. Chacune des sept capacités possède des Use Cases, un Application Service, les autorités métier nécessaires et les Ports requis. Les 16 Use Cases ont des résultats et des échecs explicites. Les responsabilités des six Application Services sont distinctes et sans dépendance mutuelle. L'autorité demeure dans les Aggregates, les Domain Services et BC-05 ; elle n'est déplacée ni vers l'application ni vers les Ports.

Un écart bloquant empêche néanmoins la certification : `ARC-CON-005` rend la sauvegarde et la restauration obligatoires dès Release 0.1, mais aucun document d'architecture ne leur attribue une responsabilité complète. Aucun Use Case, Application Service ou Port ne définit comment demander, garantir et constater la sauvegarde ou la restauration cohérente de l'ensemble autoritaire. Les mentions existantes établissent l'exigence, sans fermer sa frontière.

Cette lacune pourrait imposer pendant l'Implementation Design une modification des Use Cases, des Application Services ou des Ports. Elle contredit donc directement le critère principal de la présente revue.

## 1. Couverture Produit

### Matrice par Capability

| Capability | Use Cases | Application Services | Aggregates et Domain Services | Domain Events éventuels | Ports | Évaluation |
| --- | --- | --- | --- | --- | --- | --- |
| `CAP-001` — Créer un inventaire | `UC-001`, `UC-002` | AS-01 | AGG-01, AGG-02 en lecture, AGG-06 ; DS-04 | `DE-001`, `DE-002`, `DE-014`, `DE-017` | PC-01-L, PC-01-P ou PC-02 selon la portée | Complète |
| `CAP-002` — Ajouter un bien | `UC-003`, `UC-004`, `UC-015` | AS-02, AS-05 | AGG-01, AGG-02, AGG-06 ; autorités consultées par AS-05 ; DS-01, DS-04 | `DE-003`, `DE-004`, `DE-014`, `DE-017` ; aucun fait pour la lecture | PC-01-L, PC-02, PC-03 | Complète |
| `CAP-003` — Observer un bien | `UC-005`, `UC-006`, `UC-013` | AS-03 | AGG-02, AGG-03 en lecture, AGG-04, AGG-06, AGG-07 ; DS-04, DS-05 selon le cas | `DE-010`, `DE-011`, `DE-014` à `DE-017` selon le cas | PC-01-L, PC-01-P ou PC-02 | Complète |
| `CAP-005` — Documenter un bien | `UC-007`, `UC-008`, `UC-013` | AS-03 | AGG-02, AGG-03 en lecture, AGG-05, AGG-06, AGG-07 ; DS-04, DS-05 selon le cas | `DE-012` à `DE-017` selon le cas | PC-01-L, PC-01-P ou PC-02 | Complète |
| `CAP-006` — Actualiser la connaissance | `UC-009` à `UC-013` | AS-03, AS-04 | AGG-02 à AGG-07 selon les apports ; DS-04, DS-05 selon le cas | `DE-005` à `DE-009`, `DE-014` à `DE-017` selon le cas | PC-01-L, PC-01-P ou PC-02 | Complète |
| `CAP-009` — Rechercher | `UC-014`, `UC-015` | AS-05 | BC-05 ; AGG-01 à AGG-05 et AGG-07 en lecture selon le résultat | Aucun nouveau fait, car les deux Use Cases lisent | PC-03 | Complète |
| `CAP-011` — Suivre l'historique | `UC-016` | AS-06 | AGG-06 et Aggregate source en lecture | Aucun nouveau fait, car le Use Case lit | PC-01-L ; PC-03 facultatif | Complète |

### Constat

Aucune rupture n'est détectée dans la traçabilité fonctionnelle des sept capacités. L'absence de Domain Event pour `UC-014`, `UC-015` et `UC-016` est cohérente : ces Use Cases ne modifient pas le domaine.

La sauvegarde et la restauration ne figurent pas dans cette matrice, car elles ne sont définies comme aucune Capability du Scope 0.1. Leur obligation provient néanmoins de `ARC-CON-005`, ce qui crée l'écart transversal détaillé plus loin.

## 2. Use Cases

| Use Cases | Responsabilité | Résultat | Cohérence des échecs | Recouvrement |
| --- | --- | --- | --- | --- |
| `UC-001`, `UC-002` | Créer ou redéfinir le périmètre | Inventaire reconnu ou périmètre redéfini avec continuité applicable | Création partielle, absence, conflit et non-préservation explicites | Aucun : création et évolution sont distinctes |
| `UC-003`, `UC-004` | Inclure un Article ou corriger son identité | Appartenance ou identité reconnue avec continuité | Incompatibilité, ambiguïté, absence et conflit explicites | Aucun : inclusion et correction ont des déclencheurs différents |
| `UC-005`, `UC-006` | Enregistrer ou corriger une Observation | Observation reconnue, avec continuité si significative | Contexte insuffisant, absence, conflit et perte interdits | Aucun : création et correction restent séparées |
| `UC-007`, `UC-008` | Enregistrer ou corriger une Documentation | Documentation reconnue, avec continuité si significative | Rattachement, provenance, absence et conflit explicites | Aucun : création et correction restent séparées |
| `UC-009` à `UC-012` | Établir, actualiser, contester ou arbitrer la connaissance | État courant reconnu avec provenance, incertitude et continuité | Apports insuffisants, contradictions, conflits récents et préservation impossible explicites | Aucun : chaque intention produit une décision propre |
| `UC-013` | Corriger une Source commune | Source corrigée et effets reconnus sans modification implicite des références | Ambiguïté, divergence et préservation incomplète explicites | Transversal mais non dupliqué : seul Use Case autonome de correction d'une Source partagée |
| `UC-014` | Rechercher | Résultats qualifiés ou absence de résultat | Projection indisponible et projection incomplète distinguées | Aucun : la recherche ne remplace pas la consultation |
| `UC-015` | Consulter un Article | État courant dérivé, traçable et non autoritaire | Référence invalide, projection absente ou incomplète explicites | Aucun : le passé détaillé reste dans `UC-016` |
| `UC-016` | Consulter l'Historique | Continuité autoritaire et état courant référencé | Absence, indisponibilité et incohérence historique explicites | Aucun : l'Historique ne remplace pas l'état courant |

### Évaluation

- les 16 Use Cases sont couverts une fois par un Application Service responsable ;
- leurs résultats métier sont explicites ;
- treize modifient le domaine et trois restent en lecture ;
- les échecs applicatifs, métier et de Port restent distingués ;
- les frontières sensibles `UC-015`–`UC-016`, `UC-005`–`UC-009` et `UC-007`–`UC-009` sont explicites ;
- aucun Use Case fonctionnel ne se recouvre inutilement avec un autre.

## 3. Application Services

| Application Service | Responsabilité unique | Use Cases | Autorité métier | Dépendance à un autre Application Service | Évaluation |
| --- | --- | --- | --- | --- | --- |
| AS-01 — Périmètre | Orchestrer création et redéfinition d'Inventaire | `UC-001`, `UC-002` | Aucune ; AGG-01 et AGG-06 décident | Aucune | Conforme |
| AS-02 — Identité des Articles | Orchestrer inclusion et correction identitaire | `UC-003`, `UC-004` | Aucune ; AGG-02 et DS-01 décident | Aucune | Conforme |
| AS-03 — Apports | Orchestrer Observation, Documentation et Source | `UC-005` à `UC-008`, `UC-013` | Aucune ; AGG-04, AGG-05, AGG-07 et les services concernés décident | Aucune | Conforme |
| AS-04 — Connaissance courante | Orchestrer établissement, évolution et arbitrage | `UC-009` à `UC-012` | Aucune ; AGG-03 décide | Aucune | Conforme |
| AS-05 — Consultation | Orchestrer recherche et consultation courante | `UC-014`, `UC-015` | Aucune ; BC-05 qualifie les correspondances | Aucune | Conforme |
| AS-06 — Historique | Orchestrer la consultation de la continuité | `UC-016` | Aucune ; AGG-06 possède le passé | Aucune | Conforme |

Les six responsabilités sont cohésives et couvrent les 16 Use Cases. Elles partagent les autorités du domaine comme sources, jamais leur contrôle ou leur état interne.

## 4. Domaine

### Aggregates

Les sept Aggregates possèdent des autorités distinctes :

| Aggregate | Autorité exclusive | Risque de déplacement observé |
| --- | --- | --- |
| AGG-01 — Inventaire | Identité, finalité, limites et existence du périmètre | Aucun |
| AGG-02 — Article d'inventaire | Identité, granularité et appartenance | Aucun |
| AGG-03 — Information d'inventaire | Connaissance courante et arbitrage | Aucun |
| AGG-04 — Observation | Constat contextualisé | Aucun |
| AGG-05 — Documentation | Contenu documentaire contextualisé | Aucun |
| AGG-06 — Historique | Continuité des Changements significatifs | Aucun |
| AGG-07 — Source | Identité et contexte d'une provenance partagée | Aucun |

Les frontières empêchent les doubles autorités. AGG-06 ne décide pas le présent, AGG-03 ne possède pas les apports et AGG-01 ne possède pas les Articles.

### Domain Services

Cinq candidats ont été examinés dans `06_DOMAIN_SERVICE_ANALYSIS.md` :

- DS-01 est retenu pour la distinction des identités d'Article ;
- DS-04 est retenu pour la complétude d'un Changement inter-Aggregates ;
- DS-05 est retenu pour la distinction des Sources partagées ;
- DS-02 est absorbé par les responsabilités existantes ;
- DS-03 est absorbé par AGG-03.

Les trois services retenus possèdent une mission, des préconditions, un résultat, des autorités coordonnées et des invariants protégés. Ils n'ont aucun état et ne dépendent pas les uns des autres. Le document conclut toutefois `READY FOR DOMAIN SERVICE DESIGN` : leur forme détaillée reste une décision d'Implementation Design, pas une autorité métier manquante.

### Domain Events

Les 17 Domain Events sont des faits accomplis reconnus par AGG-01 à AGG-07 ou DS-04. Les opérations de lecture, les refus et les états intermédiaires sont correctement exclus. `DE-017` exprime la complétude sans dupliquer `DE-014` ni la décision source.

### Invariants

Les 20 invariants Produit demeurent canoniques. Quatorze sont directement applicables au Scope 0.1 ; ceux relatifs à Evidence, Relationships et Catalogs restent associés à des capacités exclues. Les Aggregates et Domain Services actifs protègent tous les invariants 0.1 sans en déplacer l'autorité vers l'application ou les Ports.

## 5. Ports

| Port | Responsabilité | Séparation vérifiée | Influence technologique | Évaluation |
| --- | --- | --- | --- | --- |
| PC-01 | Accès aux états autoritaires | PC-01-L lit ; PC-01-P préserve individuellement | Aucune | Conforme |
| PC-02 | Préservation coordonnée | Garantit la complétude reconnue par DS-04 sans remplacer PC-01 | Aucune | Conforme |
| PC-03 | Lecture des projections | Strictement dérivé, en lecture et non autoritaire | Aucune | Conforme |
| PC-04 | Mise à disposition des faits reconnus | Diffusion distincte, sans autorité historique | Aucune | Conforme et différé |

Les neuf catégories d'échec PF-01 à PF-09 empêchent de confondre absence, indisponibilité, conflit, incomplétude et rupture de cohérence. Aucun Port ne dépend d'un autre Port ni d'un Application Service.

L'analyse complémentaire `13_ADAPTER_ANALYSIS.md` confirme qu'au moins une famille de réalisation conceptuelle existe pour chaque Port obligatoire. Elle ne ferme cependant pas la responsabilité de sauvegarde et restauration, qui ne correspond actuellement à aucun Port.

## 6. Matrice complète de traçabilité

| Capability | Use Case | Application Service | Aggregate ou Domain Service | Domain Event | Port |
| --- | --- | --- | --- | --- | --- |
| `CAP-001` | `UC-001` | AS-01 | AGG-01, AGG-06, DS-04 | `DE-001`, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| `CAP-001` | `UC-002` | AS-01 | AGG-01, AGG-02 en lecture, AGG-06, DS-04 si significatif | `DE-002`, `DE-014`, `DE-017` si significatif | PC-01-L puis PC-01-P, ou PC-02 si significatif |
| `CAP-002` | `UC-003` | AS-02 | AGG-01 en lecture, AGG-02, AGG-06, DS-01, DS-04 | `DE-003`, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| `CAP-002` | `UC-004` | AS-02 | AGG-01 et AGG-02 en lecture, AGG-02 cible, AGG-06, DS-01, DS-04 | `DE-004`, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| `CAP-003` | `UC-005` | AS-03 | AGG-02 en lecture, AGG-04, AGG-07, DS-05 si nécessaire | `DE-010`, `DE-015` si Source reconnue | PC-01-L, PC-01-P |
| `CAP-003` | `UC-006` | AS-03 | AGG-02 et AGG-03 en lecture, AGG-04, AGG-06, AGG-07, DS-04 si significatif | `DE-011`, `DE-014`, `DE-017` si significatif | PC-01-L puis PC-01-P, ou PC-02 si significatif |
| `CAP-005` | `UC-007` | AS-03 | AGG-02 en lecture, AGG-05, AGG-07, DS-05 si nécessaire | `DE-012`, `DE-015` si Source reconnue | PC-01-L, PC-01-P |
| `CAP-005` | `UC-008` | AS-03 | AGG-02 et AGG-03 en lecture, AGG-05, AGG-06, AGG-07, DS-04 si significatif | `DE-013`, `DE-014`, `DE-017` si significatif | PC-01-L puis PC-01-P, ou PC-02 si significatif |
| `CAP-006` | `UC-009` | AS-04 | AGG-02 à AGG-07 selon les apports, DS-05 si nécessaire, DS-04 | `DE-005`, `DE-015` si Source reconnue, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| `CAP-006` | `UC-010` | AS-04 | AGG-02 à AGG-07 selon les apports, DS-05 si nécessaire, DS-04 | `DE-006`, `DE-015` si Source reconnue, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| `CAP-006` | `UC-011` | AS-04 | AGG-03 à AGG-07 selon les apports, DS-04 si significatif | `DE-007` ou `DE-008`, `DE-014`, `DE-017` si significatif | PC-01-L puis PC-01-P, ou PC-02 si significatif |
| `CAP-006` | `UC-012` | AS-04 | AGG-03 à AGG-07, DS-04 | `DE-009`, `DE-014`, `DE-017` | PC-01-L, PC-02 |
| `CAP-003`, `CAP-005`, `CAP-006` | `UC-013` | AS-03 | AGG-03 à AGG-07, DS-05, DS-04 si significatif | `DE-016`, `DE-014`, `DE-017` si significatif | PC-01-L puis PC-01-P, ou PC-02 si significatif |
| `CAP-009` | `UC-014` | AS-05 | BC-05 lisant AGG-01, AGG-02, AGG-03, AGG-05 | Aucun — lecture | PC-03 |
| `CAP-002`, `CAP-009` | `UC-015` | AS-05 | AGG-01 à AGG-05 et AGG-07 en lecture | Aucun — lecture | PC-03 |
| `CAP-011` | `UC-016` | AS-06 | AGG-06 et Aggregate source en lecture | Aucun — lecture | PC-01-L ; PC-03 facultatif |

Les 16 lignes sont complètes et cohérentes avec `09_USE_CASE_DESIGN.md`, `10_APPLICATION_SERVICES.md` et `12_PORT_DESIGN.md`.

## 7. Contraintes Produit

| Contrainte | Couverture architecturale actuelle | Vérifiable avant réalisation | Évaluation |
| --- | --- | --- | --- |
| `ARC-CON-001` — Confidentialité | Frontières d'autorité, absence d'interaction extérieure obligatoire, traçabilité dans Aggregates et Ports | Non ; la protection de bout en bout reste à démontrer | Couverte, non encore vérifiable |
| `ARC-CON-002` — Propriété des informations | Autorité explicitement conservée par AGG-01 à AGG-07 ; projections non autoritaires | Oui conceptuellement | Couverte |
| `ARC-CON-003` — Fonctionnement hors ligne | Aucune capacité extérieure n'est obligatoire pour accomplir les Use Cases ; contrainte reliée aux Aggregates et Ports | Non ; le fonctionnement réel reste à démontrer | Couverte, non encore vérifiable |
| `ARC-CON-004` — Synchronisation future | Explicitement exclue du Scope actuel | Oui par absence de dépendance | Correctement différée |
| `ARC-CON-005` — Sauvegarde et restauration | Exigence citée dans le Blueprint et les traces d'Aggregates, sans responsabilité ni contrat de bout en bout | Non | **Non couverte — bloquante** |
| `ARC-CON-006` — Continuité de service | PC-01, PC-02 et PF-03 à PF-05 protègent le dernier résultat confirmé ; comportement après interruption non détaillé | Partiellement | Couverte partiellement — importante |
| `ARC-CON-007` — Portabilité | Architecture évite de confondre export, sauvegarde et autorité ; capacité prévue en 0.5 | Non requise fonctionnellement en 0.1 | Correctement engagée |
| `ARC-CON-008` — Performance perçue | PC-03 sépare les projections ; seuil conservé comme contrainte | Non ; mesure requise ultérieurement | Couverte, non encore vérifiable |
| `ARC-CON-009` — Volumétrie de référence | Aggregates indépendants et projection dédiée ; seuil de 5 000 Articles conservé | Non ; mesure requise ultérieurement | Couverte, non encore vérifiable |
| `ARC-CON-010` — Scalabilité | Aucune complexité anticipée ; exigence différée après 1.0 | Oui par Scope | Correctement différée |
| `ARC-CON-011` — Extensibilité | Bounded Contexts, Aggregates, Use Cases et Ports séparent les responsabilités | Partiellement, par revue structurelle | Couverte |
| `ARC-CON-012` — Interopérabilité | Frontière de restitution future distinguée ; obligation à partir de 0.5 | Non requise en 0.1 | Correctement engagée |
| `ARC-CON-013` — Accessibilité | Tous les parcours passent par une frontière entrante unique ; aucune règle de présentation n'est imposée | Non ; vérification par démonstration nécessaire | Couverte, non encore vérifiable |
| `ARC-CON-014` — Fidélité des contenus | AGG-05 possède le contenu ; PC-01 le conserve sans l'interpréter | Oui conceptuellement, non empiriquement | Couverte |
| `ARC-CON-015` — Traçabilité | AGG-07, AGG-03 à AGG-06, `INV-TRA-001`, Domain Events et projections traçables | Oui conceptuellement | Couverte |
| `ARC-CON-016` — Auditabilité | AGG-06, `UC-016`, `DE-014`, `DE-017` et PC-01-L | Oui conceptuellement | Couverte |
| `ARC-CON-017` — Évolutivité de la connaissance | Autorités séparées, Changements significatifs conservés et projections dérivées | Oui conceptuellement | Couverte |

### Rupture de couverture de `ARC-CON-005`

Les documents établissent que :

- l'ensemble cohérent doit pouvoir être sauvegardé et restauré ;
- sa portée et sa fraîcheur doivent être identifiables ;
- une opération incomplète ne peut pas être présentée comme réussie ;
- la préparation d'une sauvegarde peut être différée sous conditions.

Ils ne déterminent pas :

- quelle responsabilité applicative porte l'intention de sauvegarder ou restaurer ;
- si cette responsabilité relève d'un Use Case existant ou d'un contrat distinct ;
- quelle frontière garantit la cohérence de l'ensemble des autorités ;
- comment une restauration peut rétablir les états sans contourner leurs autorités ;
- quels résultats et échecs sont observables.

Cette absence n'est pas une question de réalisation. Elle concerne la responsabilité, l'autorité et la frontière de cohérence ; elle relève donc de l'architecture.

## 8. Risques résiduels

| Identifiant | Risque | Niveau | Justification | Effet sur la décision |
| --- | --- | --- | --- | --- |
| ARR-R01 | Sauvegarde et restauration réalisées hors des autorités définies | **Bloquant** | `ARC-CON-005` est obligatoire, mais aucune frontière ne protège la cohérence globale lors de ces opérations | Empêche la préparation |
| ARR-R02 | Continuité après interruption insuffisamment démontrée | Important | PC-01 et PC-02 définissent le succès confirmé, sans modèle complet de reprise | Doit être traité avec la responsabilité de sauvegarde et restauration |
| ARR-R03 | Contraintes de confidentialité, usage hors ligne et accessibilité seulement déclarées | Important | Leur traçabilité existe, mais leur vérification de bout en bout dépend de l'Implementation Design | Non bloquant si les critères restent obligatoires et vérifiables |
| ARR-R04 | Seuils de performance et de volumétrie non démontrés | Important | `ARC-CON-008` et `ARC-CON-009` ne peuvent être validés avant une réalisation mesurable | Non bloquant pour concevoir ; bloquant pour accepter la Release |
| ARR-R05 | Contrats des Domain Services encore qualifiés d'analytiques | Mineur | Les responsabilités et résultats sont suffisants, mais leur design détaillé n'est pas formalisé | Relève de l'Implementation Design |
| ARR-R06 | Conception détaillée des familles d'Adapters non réalisée | Mineur | Les familles candidates et garanties sont identifiées dans `13_ADAPTER_ANALYSIS.md` | Relève de l'Implementation Design |
| ARR-R07 | Deux documents portent le préfixe numérique `13` | Mineur | `13_ADAPTER_ANALYSIS.md` et la présente revue partagent un numéro d'ordre | Ambiguïté documentaire, sans effet sur les autorités métier |
| ARR-R08 | PC-04 et les capacités postérieures à 0.1 restent différés | Acceptable | Leur absence est explicitement conforme au Scope | Aucun |
| ARR-R09 | Questions anciennes conservées dans les documents intermédiaires | Acceptable | Les questions fonctionnelles 0.1 sont résolues dans les documents ultérieurs ; les autres sont explicitement différées | Aucun si la lecture suit l'ordre documentaire |

## 9. Décisions restantes

### Architecture

| Décision restante | Justification du classement | Priorité |
| --- | --- | --- |
| Attribuer la responsabilité de sauvegarde et restauration cohérente exigée par `ARC-CON-005` | Peut modifier les frontières, les Use Cases, les Application Services ou les Ports et doit préserver simultanément toutes les autorités | Bloquante |
| Fermer la relation entre sauvegarde, restauration et continuité après interruption de `ARC-CON-006` | Détermine la frontière qui garantit le dernier état confirmé et empêche une restauration partielle | Bloquante avec la décision précédente |

Aucune autre décision d'autorité, d'Aggregate, de Domain Service, de Use Case, d'Application Service ou de Port n'est identifiée pour le cycle fonctionnel actuel.

### Implementation Design

| Décision restante | Justification du classement |
| --- | --- |
| Formaliser la forme détaillée des trois Domain Services retenus | Leurs responsabilités, entrées conceptuelles, résultats et autorités sont déjà fixés |
| Concevoir les Adapters des familles admises | Les Ports et garanties sont stables ; il s'agit de satisfaire leurs contrats |
| Choisir la représentation des intentions, résultats et échecs | Aucun choix ne doit modifier les contrats existants |
| Déterminer comment produire et actualiser les projections de PC-03 | Toute solution est admissible si PC-03 reste dérivé, traçable et non autoritaire |
| Définir la démonstration d'accessibilité | Les résultats et critères existent ; leur expression concrète reste à concevoir |

### Infrastructure

| Décision restante | Justification du classement |
| --- | --- |
| Réaliser la conservation durable et le fonctionnement hors ligne | La frontière applicative est fixée par PC-01 et PC-02 ; le moyen reste extérieur |
| Assurer la confidentialité du périmètre conservé | L'autorité et les limites sont définies ; la protection concrète reste à réaliser |
| Définir les moyens de vérification de la performance et de la volumétrie | Les seuils sont normatifs, mais leur mesure dépend de la réalisation |
| Définir la reprise après interruption | Le résultat attendu est fixé par `ARC-CON-006` ; sa réalisation dépend toutefois de la décision d'architecture bloquante sur la restauration |

## 10. Préparation à l'Implementation Design

| Élément qui ne devrait plus changer | État | Justification |
| --- | --- | --- |
| Domaine | Stable pour les capacités fonctionnelles | Aggregates, invariants, Domain Services et Domain Events sont cohérents |
| Use Cases | Stable pour les sept capacités | Les 16 contrats couvrent le cycle de valeur |
| Application Services | Stable pour les 16 Use Cases | Six responsabilités uniques et sans dépendance mutuelle |
| Ports | Stable pour les besoins fonctionnels | Autorité, coordination, projection et diffusion différée sont séparées |
| Responsabilité de sauvegarde et restauration | Non définie | Peut nécessiter de compléter un ou plusieurs des éléments précédents |

L'Implementation Design fonctionnel pourrait commencer localement sur certains parcours, mais l'architecture globale ne peut pas être certifiée. Commencer avant de fermer `ARC-CON-005` créerait un risque de reprise des contrats et de contournement des autorités lors de la restauration.

## Incohérences détectées

### Bloquante

`ARC-CON-005` est obligatoire dès Release 0.1 alors que sauvegarde et restauration ne disposent d'aucune chaîne de responsabilité comparable aux capacités fonctionnelles. Les simples mentions de la contrainte dans les matrices d'Aggregates ne constituent pas une couverture architecturale.

### Importantes

- `ARC-CON-006` est partiellement couvert par les garanties de préservation, mais son articulation avec une reprise ou une restauration reste ouverte.
- Plusieurs contraintes obligatoires ne seront vérifiables qu'après Implementation Design ; leurs critères doivent rester explicitement traçables jusque dans la démonstration de Release.

### Mineures

- `13_ADAPTER_ANALYSIS.md` et `13_ARCHITECTURE_READINESS_REVIEW.md` partagent un même préfixe ordinal.
- Les conclusions `READY FOR DOMAIN SERVICE DESIGN` et `READY FOR ADAPTER DESIGN` décrivent encore des étapes de design à réaliser, sans constituer de nouvelles décisions d'autorité.

## Conclusion

**NOT READY**

La structure fonctionnelle de Release 0.1 est cohérente et entièrement traçable : les sept capacités, 16 Use Cases, six Application Services, sept Aggregates, trois Domain Services retenus, 17 Domain Events et quatre Ports forment un ensemble sans déplacement d'autorité.

La certification `READY FOR IMPLEMENTATION DESIGN` ne peut toutefois pas être prononcée. La sauvegarde et la restauration sont obligatoires dès Release 0.1, mais leur responsabilité et leur frontière de cohérence ne sont pas définies. Cette décision d'architecture doit être fermée avant l'Implementation Design global afin d'éviter de modifier ultérieurement le domaine, les Use Cases, les Application Services ou les Ports.
