# Methodology Reference

Le Methodology Reference est la source canonique des règles de méthodologie et de gouvernance dans son périmètre déclaré.

## Reference Charter

- **Status:** Active
- **Purpose:** Établir et maintenir les méthodes générales qui encadrent l'évolution cohérente du Framework.
- **Scope:** Gouvernance des concepts, maturation de la connaissance, gouvernance du cycle de vie des References et Release Management.
- **Included:** Admission et évolution des concepts, qualité sémantique, Knowledge Evolution, gouvernance des References, définition, préparation, gel, Certification et Publication des Releases.
- **Excluded:** Définitions des concepts, identité et architecture documentaire constitutionnelles, standards documentaires, règles d'architecture spécialisées, conventions Git, contenu de planification propre à une Release et actifs dérivés.
- **Authority:** Source canonique des règles méthodologiques et de gouvernance dans son périmètre, sous l'autorité constitutionnelle de `MASTER_SPECIFICATION.md`.
- **Dependencies:** `MASTER_SPECIFICATION.md` pour l'autorité et l'architecture documentaire ; `Semantic_Reference.md` pour les concepts officiels employés.
- **Responsibility:** Définir, maintenir et faire évoluer les règles méthodologiques sans redéfinir les concepts ni les règles spécialisées.
- **Activation Criteria:** Charte complète, règles essentielles suffisamment couvertes, dépendances disponibles et non circulaires, absence de contradiction majeure, Review et Validation réalisées, statut Active dans le Documentation Authority Registry.

Dans les chartes et actifs gouvernés par cette Reference, `Responsibility`, `Dependencies` et `Traceability` sont des libellés documentaires employés dans leur sens courant : le premier consigne la fonction attendue du document, le deuxième identifie les sources nécessaires et le troisième accueille les liens permettant de retrouver les éléments associés. Ces libellés ne constituent aucune définition canonique et ne dépendent pas des concepts Planned homonymes du Semantic Reference.

## Concept Governance

### Purpose

L'ajout d'un concept est encadré afin que le référentiel demeure cohérent, stable et extensible. Chaque concept supplémentaire accroît le nombre de distinctions et de relations à comprendre et à maintenir. Il n'est admis que s'il apporte une valeur réelle et durable au référentiel.

### Admission Criteria

Un concept peut être admis lorsqu'il satisfait l'ensemble des critères suivants :

- il représente une idée distincte ;
- il ne duplique aucun concept existant ;
- il est applicable à plusieurs projets ;
- il est indépendant des technologies et des outils ;
- il remplit une fonction conceptuelle clairement identifiable ;
- il reste pertinent dans le temps.

Lorsqu'un concept proposé ne satisfait pas ces critères, il est reformulé, rattaché à un concept existant ou écarté.

### Evolution Rules

Un concept existant peut être clarifié, enrichi ou relié à d'autres concepts lorsque cela améliore sa compréhension sans altérer son identité.

Sa signification ne doit pas changer sans décision explicite. Toute évolution sémantique doit exposer l'intention du changement et ses conséquences sur les usages existants.

### Architectural Changes

Une évolution du Semantic Reference nécessite une Architecture Decision uniquement lorsqu'elle modifie l'autorité, les responsabilités, les dépendances ou les règles de résolution des conflits du Framework.

Les évolutions internes qui restent dans le périmètre canonique du Semantic Reference, notamment l'ajout ou la réorganisation de catégories, de domaines, de sections ou de concepts, relèvent d'une évolution normale tant qu'elles ne produisent aucun de ces effets.

Le besoin d'une Architecture Decision est déterminé par l'impact du changement sur le contrat documentaire, et non par sa taille ou sa position dans le document.

### Review

- Chaque concept est relu individuellement afin de vérifier sa clarté, sa distinction et sa cohérence.
- Chaque domaine fait l'objet d'une Domain Review afin de vérifier la cohérence de l'ensemble de ses concepts.
- Une Architecture Review peut être réalisée avant l'ouverture d'un nouveau domaine lorsque sa structure ou son niveau d'abstraction nécessite une validation préalable.

## Semantic Quality Standard

Tout concept admis dans le Semantic Reference doit respecter l'ensemble des principes suivants.

### Atomicité

Un concept représente une seule idée. Il ne doit pas réunir plusieurs notions pouvant être définies et utilisées indépendamment.

### Unicité

Chaque concept ne possède qu'une seule entrée dans le Semantic Reference. Les synonymes sont évités lorsqu'ils créent plusieurs représentations d'une même notion.

### Autorité

Toute définition normative d'un concept appartient exclusivement au Semantic Reference. Les autres documents peuvent utiliser le concept et renvoyer vers sa définition canonique, mais ne doivent ni le redéfinir ni lui attribuer une signification concurrente.

### Indépendance

La définition d'un concept doit être compréhensible par elle-même. Les relations avec d'autres concepts peuvent compléter cette compréhension, mais ne doivent pas être nécessaires pour établir sa signification fondamentale.

### Stabilité

Une définition ne doit évoluer que lorsqu'une évolution conceptuelle est nécessaire. Une préférence stylistique ou une reformulation sans changement de sens ne suffit pas à justifier sa modification.

### Relations

Les Related Concepts servent uniquement à établir des liens sémantiques pertinents. Ils complètent la navigation et la compréhension du référentiel, mais ne constituent jamais une définition.

### Admission

L'admission d'un concept est régie exclusivement par les [Admission Criteria](#admission-criteria) de Concept Governance. Le Semantic Quality Standard n'établit aucun critère d'admission concurrent.

## Knowledge Evolution

La connaissance mûrit selon le cycle général suivant :

Observation

↓

Question

↓

Hypothesis

↓

Review

↓

Decision

↓

Implementation

↓

Validation

### Purpose

Toute évolution importante du Playbook suit ce cycle. Une idée ne devient pas immédiatement une règle, et une règle ne devient pas immédiatement une référence. Chaque étape réduit l'incertitude en apportant un niveau supplémentaire d'examen, de choix ou de confirmation.

### Principles

- Une Observation ne constitue pas une Decision.
- Une Question rend explicite l'incertitude à examiner.
- Plusieurs Hypotheses peuvent coexister tant qu'aucun choix n'a été formalisé.
- Une Review confronte les Hypotheses aux éléments disponibles et à l'intention recherchée.
- Une Decision formalise un choix et rend sa justification explicite.
- Une Implementation applique le choix afin qu'il puisse être observé et évalué.
- Une Validation confirme le choix ou le remet en question à partir de ses résultats.
- Une connaissance validée peut devenir une référence officielle.
- Une Validation qui remet le choix en question ouvre un nouveau cycle de connaissance.

### Scope

Cette section décrit uniquement la maturation de la connaissance.

Elle ne décrit ni le développement logiciel, ni Git, ni les Epics.

## Reference Governance

### Purpose

La gouvernance des References encadre leur admission, leur autorité, leur évolution, leur qualité et leur remplacement. Elle applique le modèle de source canonique unique défini par les [Authority Principles](../MASTER_SPECIFICATION.md#authority-principles) et maintient des responsabilités documentaires explicites au fil du temps.

Toute évolution significative d'une Reference suit les principes de Knowledge Evolution et fait l'objet d'une Review et d'une Validation proportionnées à son impact.

### Scope

Cette gouvernance s'applique à toute Reference officielle, actuelle ou future, inscrite dans le Documentation Authority Registry du MASTER_SPECIFICATION.

Elle couvre :

- la déclaration de responsabilité et de périmètre ;
- l'admission et l'activation ;
- le cycle de vie et le niveau de maturité ;
- la classification, la Review et la Validation des changements ;
- la dépréciation, le remplacement et les dépendances ;
- le traitement des contenus Planned.

Elle ne définit pas les concepts, ne détermine pas le statut des Architecture Decisions et ne remplace pas les règles spécialisées propres au périmètre de chaque Reference. L'autorité d'une Reference demeure celle que lui attribue le MASTER_SPECIFICATION.

### Reference Charter

Toute Reference possède une charte accessible qui déclare au minimum :

- son Status ;
- son Purpose ;
- son Scope ;
- ses éléments Included et Excluded ;
- son Authority ;
- ses Dependencies ;
- sa Responsibility ;
- ses Activation Criteria.

La charte doit être cohérente avec le Documentation Authority Registry. Elle ne doit ni reproduire des règles spécialisées ni étendre implicitement l'autorité de la Reference.

Toute modification de charte qui change l'autorité, les responsabilités, les dépendances autorisées ou la résolution des conflits constitue un changement architectural.

### Reference Admission

Une nouvelle Reference peut être admise lorsque toutes les conditions suivantes sont satisfaites :

- elle couvre un domaine distinct et durable ;
- aucune Reference existante n'en possède déjà la responsabilité canonique ;
- son contenu ne peut pas être rattaché clairement au périmètre d'une Reference existante ;
- sa responsabilité et ses limites sont identifiables ;
- ses dépendances sont nécessaires, explicites et non circulaires ;
- sa charte est préparée ;
- elle est inscrite comme Planned dans le Documentation Authority Registry.

L'admission d'une Reference dans le modèle documentaire existant relève d'une évolution normale. Une Architecture Decision est requise si cette admission redistribue l'autorité, les responsabilités, les dépendances autorisées ou les règles de résolution des conflits.

### Reference Lifecycle

Le cycle de vie d'une Reference utilise les états suivants :

- **Planned** : la Reference est admise et préparée, mais ne possède pas encore d'autorité normative ;
- **Active** : la Reference est officielle et fait autorité dans son périmètre déclaré ;
- **Deprecated** : la Reference reste consultable pendant une transition, mais son remplacement est déclaré ;
- **Retired** : la Reference ne possède plus d'autorité et n'est conservée que pour la traçabilité.

Chaque transition doit être explicite, relue, validée et reflétée dans le Documentation Authority Registry. Le cycle de vie d'une Reference est distinct du Concept Status, du statut d'une Architecture Decision et de son niveau de maturité.

### Reference Activation

Une Reference Planned peut devenir Active uniquement lorsque :

- sa charte est complète et cohérente avec le Documentation Authority Registry ;
- sa Responsibility est explicitement déclarée ;
- son contenu canonique minimal est suffisamment complet pour remplir sa responsabilité ;
- aucune contradiction critique ou majeure concernant son autorité ne reste ouverte ;
- ses dépendances sont explicites, disponibles et non circulaires ;
- ses contenus encore Planned sont clairement signalés comme non normatifs ;
- une Review et une Validation confirment qu'elle respecte son périmètre et son autorité.

L'autorité normative commence avec l'activation et la mise à jour du Documentation Authority Registry. L'activation ne confère pas à elle seule un niveau Stable ou Mature.

### Change Classification

Tout changement apporté à une Reference est classé selon son effet :

- **Editorial** : il améliore la forme, la lisibilité ou la navigation sans changer le sens ni la normativité ;
- **Normal evolution** : il ajoute, clarifie ou enrichit un contenu dans le périmètre et l'autorité existants ;
- **Architectural change** : il modifie l'autorité, les responsabilités, les dépendances autorisées ou la résolution des conflits ;
- **Alignment** : il aligne un portail, un registre ou un actif dérivé sur une source canonique déjà modifiée, sans créer de règle.

La taille d'un changement, le nombre de sections concernées ou sa position dans un document ne déterminent pas sa classe. La source canonique est modifiée avant ses résumés et actifs dérivés.

Une évolution interne, y compris l'ajout ou la réorganisation de catégories, de domaines ou de sections, est une Normal evolution tant qu'elle respecte le contrat documentaire existant. Seul un Architectural change nécessite une Architecture Decision.

### Review and Validation

Tout changement normatif fait l'objet d'une Review avant de devenir officiel. La Review examine sa clarté, sa nécessité, sa cohérence et ses conséquences.

La Validation établit ensuite que le changement :

- satisfait ses Acceptance Criteria ;
- reste dans le périmètre et l'autorité de la Reference ;
- ne crée aucune règle normative concurrente ;
- respecte les dépendances déclarées ;
- ne contredit aucune source canonique applicable ;
- identifie explicitement les contenus Planned et les incertitudes restantes.

La Validation ne confère aucune Authority et ne constitue pas une adoption officielle.

Un contenu devient canonique uniquement lorsqu'il est explicitement adopté comme contenu officiel de la Reference Active qui détient l'Authority applicable. Sa présence matérielle dans cette Reference ne suffit pas : son caractère normatif ou descriptif doit être identifiable et il ne doit pas rester Planned.

La profondeur de la Review et de la Validation est proportionnée à l'impact du changement. Un changement Editorial peut suivre une vérification allégée. La nécessité d'une Architecture Decision est déterminée par la [Change Classification](#change-classification).

### Stability and Maturity

Une Reference peut être considérée comme **Stable** lorsqu'elle est Active et que :

- sa charte est complète ;
- son périmètre essentiel est couvert ;
- ses dépendances sont explicites ;
- aucune contradiction critique ou majeure ne reste ouverte ;
- son contenu est compréhensible indépendamment des actifs dérivés ;
- ses contenus Planned et sa dette documentaire sont visibles ;
- une Readiness Review confirme ces conditions.

Une Reference peut être considérée comme **Mature** lorsqu'elle est Stable et que :

- plusieurs cycles d'évolution ont été validés ;
- son usage réel confirme son utilité et ses frontières ;
- ses décisions et changements significatifs sont traçables ;
- ses actifs dérivés restent alignés ;
- sa dette documentaire est faible ou maîtrisée ;
- ses Reviews sont répétables et ne révèlent pas de remise en cause récurrente de son périmètre.

La maturité exprime un niveau de qualité et de confiance. Elle ne modifie ni le périmètre ni l'autorité de la Reference.

### Deprecation and Supersession

Une Reference est Deprecated lorsqu'elle devient obsolète, perd sa responsabilité canonique ou doit être remplacée. La dépréciation doit :

- identifier explicitement la Reference qui lui succède et le périmètre concerné ;
- être inscrite dans le Documentation Authority Registry ;
- préserver la traçabilité de l'ancienne autorité ;
- définir les dépendances et actifs dérivés à réaligner.

La Reference qui lui succède doit être Active avant de prévaloir. Après cette activation, les nouvelles règles sont maintenues dans la source canonique qui lui succède ; la Reference Deprecated ne reçoit plus que des corrections de transition ou de traçabilité.

Une Reference Retired ne possède aucune autorité. Elle ne doit pas être supprimée silencieusement lorsque sa conservation est nécessaire à la compréhension des décisions passées.

Toute dépréciation ou succession qui redistribue l'autorité ou les responsabilités nécessite une Architecture Decision.

### Planned Content

Tout contenu Planned doit être explicitement identifiable et demeure non normatif jusqu'à sa Review et sa Validation. Aucune règle Active ne doit en dépendre comme s'il était établi.

Un contenu Planned doit avoir une utilité attendue et un responsable identifiables. Il est périodiquement réexaminé afin d'être complété, reformulé ou retiré. Une absence de connaissance doit rester explicite ; un emplacement réservé ne reçoit jamais implicitement l'autorité de la Reference qui le contient.

Dans le Semantic Reference, le Concept Status est l'unique source de la signification de Planned et Approved pour les concepts. Le contenu Planned d'une Reference et l'état Planned de son cycle de vie doivent rester distincts du Concept Status.

### Dependencies

Le modèle de dépendances autorisé est défini par le [Dependency Model](../MASTER_SPECIFICATION.md#dependency-model) de la Constitution. La présente section en régit l'application aux References.

Les dépendances propres à chaque Reference doivent être déclarées dans sa charte, nécessaires à l'exercice de sa responsabilité et orientées vers une source canonique identifiable.

Une dépendance permet d'utiliser une règle ou un concept canonique ; elle n'autorise pas sa redéfinition. Toute modification d'une source canonique doit évaluer ses dépendants et les actifs dérivés concernés.

La résolution des divergences suit les [Authority Principles](../MASTER_SPECIFICATION.md#authority-principles). Toute proposition de modifier le modèle de dépendances ou de résolution des conflits est classée selon [Change Classification](#change-classification).

## Release Management

### Purpose

Le Release Management encadre la définition, la préparation, le gel, la Certification et la Publication de toute Release du Framework. Il permet d'évaluer une Version identifiable par rapport à un Scope officiel sans exiger l'achèvement de toutes les évolutions envisagées.

### Scope

Cette section couvre :

- la délimitation d'une Release ;
- la préparation et le gel d'une Version candidate ;
- la Certification relative à son Scope ;
- la Publication et la traçabilité de la Version certifiée ;
- le remplacement ou le retrait explicite d'une Release publiée.

Elle ne porte ni le contenu particulier d'une Release, ni la planification détaillée de la Roadmap, ni les définitions des termes employés, ni les mécanismes propres à un outil.

### Core Principles

- Une Version est certifiée relativement au Scope déclaré dans sa Release Specification.
- Les invariants établis par la [Framework Constitution](../MASTER_SPECIFICATION.md) s'appliquent à toute Release, indépendamment de son Scope.
- La Release Specification est l'unique source canonique du Scope et des Acceptance Criteria de la Release concernée.
- Un élément Planned hors Scope ne bloque pas la Certification ; un élément Planned nécessaire au Scope ne peut pas être tenu pour disponible ou normatif.
- Une Version candidate doit être gelée avant sa Certification.
- Une Validation favorable ne constitue pas automatiquement une Certification.
- Une Certification favorable ne constitue pas une Publication.
- Une Release ne modifie ni l'Authority ni le statut de cycle de vie d'une Reference.
- Une Version publiée ne doit pas être modifiée silencieusement.

### Operational Distinctions

Les termes suivants sont utilisés comme terminologie méthodologique et ne créent aucune définition concurrente dans le Semantic Reference :

- la **Roadmap** planifie les évolutions, les Milestones et les Releases envisagées, sans porter leur Scope officiel ;
- un **Milestone** représente un point de contrôle de planification et ne confère aucune Authority au contenu associé ;
- une **Version** désigne un état identifiable du contenu du Framework ;
- une **Release** organise la Certification et la Publication d'une Version dans un Scope déclaré ;
- une **Certification** est la Decision explicite fondée sur une Validation de la Version gelée ;
- une **Publication** rend officiellement disponible une Version certifiée sans la valider ni la certifier.

Ces usages restent limités à la présente méthodologie.

### Release Specification

Chaque Release possède exactement une Release Specification. Ce document de type Planning fait autorité uniquement sur le Scope, les Acceptance Criteria et l'état de la Release concernée. Il ne contient aucune règle permanente du Framework.

La Release Specification déclare au minimum :

- l'identifiant de la Release et de la Version ;
- son Purpose et son état dans le Lifecycle ;
- son Scope, avec les éléments Included et Excluded ;
- ses Acceptance Criteria ;
- les invariants constitutionnels applicables par référence à leur source canonique ;
- les References et dépendances nécessaires ;
- les limitations et inconnues pertinentes ;
- les responsabilités de préparation, de Certification et de Publication ;
- l'identité du contenu gelé lorsque le Freeze est prononcé.

La Roadmap peut référencer une Release Specification, mais ne doit ni la remplacer ni reproduire son Scope ou ses Acceptance Criteria.

### Lifecycle

Une Release suit les états méthodologiques suivants :

1. **Proposed** : la Release est identifiée dans la planification sans Scope officiel.
2. **Defined** : sa Release Specification établit le Scope et les Acceptance Criteria.
3. **Prepared** : la Version candidate et les éléments nécessaires à son évaluation sont disponibles.
4. **Frozen** : l'état exact de la Version candidate est arrêté.
5. **Certified** ou **Rejected** : la Certification conclut explicitement sur la satisfaction des critères.
6. **Published** : la Version certifiée est officiellement rendue disponible.
7. **Superseded** ou **Withdrawn** : son remplacement ou son retrait est déclaré et reste traçable.

Ces états ne sont ni un Concept Status ni un statut de cycle de vie des References.

### Freeze

Une Release peut être Frozen lorsque :

- son Scope et ses Acceptance Criteria sont explicites et examinés ;
- la Version candidate est intégralement identifiable ;
- les References et dépendances nécessaires sont disponibles dans l'état déclaré ;
- les limitations, inconnues et responsabilités sont consignées ;
- aucune ambiguïté majeure n'empêche son évaluation.

Après le Freeze, tout changement affectant le contenu candidat, le Scope, les Acceptance Criteria ou les dépendances impose un nouveau Freeze avant toute Certification. Une correction descriptive qui n'altère aucun élément évalué peut être consignée sans modifier l'identité de la Version gelée.

### Certification

La Certification évalue exclusivement la Version Frozen identifiée dans la Release Specification. Elle combine :

- une Validation des Acceptance Criteria propres au Scope ;
- une vérification des invariants constitutionnels par référence à leur source canonique ;
- une Decision explicite concluant **Certified** ou **Rejected**.

La Validation établit la satisfaction des critères mais ne confère ni Certification ni Authority. La responsabilité finale de Certification est déclarée dans la Release Specification et demeure humaine.

Une Decision **Rejected** renvoie la Release vers Defined ou Prepared selon la nature des écarts. Toute nouvelle Certification porte sur une Version de nouveau gelée.

### Publication

Seule une Version Frozen ayant reçu une Decision **Certified** peut être Published. La Publication :

- rend la Version officiellement disponible ;
- conserve un lien explicite vers la Release Specification et le Certification Report ;
- ne modifie ni le Scope, ni les Acceptance Criteria, ni le résultat de Certification ;
- préserve l'identité du contenu publié.

Toute évolution du contenu publié requiert une nouvelle Version et une nouvelle Certification. Un retrait ou un remplacement doit rester explicite et traçable.

### Required Artifacts

Le modèle utilise exactement trois artefacts obligatoires :

- la **Release Specification**, document Planning faisant autorité sur le Scope et les Acceptance Criteria de la Release ;
- le **Certification Report**, document Decision conservant les éléments évalués, les écarts, la conclusion et sa justification sans créer de règle permanente ;
- le **Publication Record**, artefact descriptif consignant les faits de Publication, l'identité publiée et tout remplacement ou retrait.

Des Templates peuvent ultérieurement standardiser leur structure. Ces Templates restent des Derived Assets non normatifs et ne peuvent ajouter aucune règle absente de la présente section. Un Example ou des Release Notes peuvent illustrer ou résumer une Release sans remplacer aucun des trois artefacts obligatoires.

### Responsibilities

- La Constitution établit les invariants et le modèle d'Authority sans contenir d'informations propres à une Release.
- La Roadmap planifie les Releases et leurs Milestones sans définir leur Scope officiel.
- La Release Specification porte le Scope, les Acceptance Criteria, les dépendances et l'identité de la Version candidate.
- Les References Active fournissent les règles applicables dans leurs périmètres sans acquérir d'Authority supplémentaire.
- La responsabilité de préparation constitue la Version candidate et rassemble les éléments nécessaires à sa Validation.
- La responsabilité de Certification prend et justifie la Decision finale.
- La responsabilité de Publication rend disponible uniquement la Version certifiée et consigne cette Publication.

Les responsabilités sont déclarées pour chaque Release sans imposer une organisation particulière.

### Decision Flow

1. La Roadmap identifie une Release envisagée.
2. La Release Specification déclare son Scope et ses Acceptance Criteria.
3. La Version candidate est préparée et examinée.
4. Le Freeze arrête son contenu identifiable.
5. La Validation confronte la Version gelée aux critères et aux invariants applicables.
6. La Certification produit une Decision **Certified** ou **Rejected**.
7. Une Decision **Rejected** conduit à une révision puis à un nouveau Freeze.
8. Une Decision **Certified** autorise la Publication.
9. Le Publication Record consigne l'événement et l'identité publiée.

### Dependencies

Le Release Management dépend uniquement :

- de la [Framework Constitution](../MASTER_SPECIFICATION.md) pour les invariants et le modèle d'Authority ;
- du [Semantic Reference](Semantic_Reference.md) pour les concepts officiels qu'il emploie ;
- de [Reference Governance](#reference-governance) pour l'état et l'Authority des References nécessaires à une Release.

La Roadmap est consultée comme source de planification, jamais comme source normative du Scope ou des Acceptance Criteria d'une Release.
