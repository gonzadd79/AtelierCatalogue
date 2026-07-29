# Release 0.1 — Product Acceptance Criteria

Ce document définit les résultats observables permettant d'établir que la Release 0.1 d'Inventaire constitue un produit réellement utilisable. Il complète le périmètre fonctionnel sans définir de solution, de présentation ni de réalisation technique.

Une démonstration fonctionnelle satisfait un critère lorsque son résultat peut être constaté par une personne à partir du comportement du produit et de la connaissance qu'il restitue. Tous les invariants de `22_DOMAIN_INVARIANTS.md` restent applicables, y compris lorsqu'ils ne sont pas répétés dans un critère particulier.

## Principes d'évaluation

- Les critères évaluent des résultats utilisateur, jamais la présence d'un composant technique.
- Les capacités exclues de la Release 0.1 ne sont ni requises ni simulées.
- Une information manquante peut rester absente si cette absence est explicite et n'empêche pas de distinguer l'Article d'inventaire.
- Le minimum nécessaire à un Article utilisable n'est pas une liste universelle d'attributs : son appartenance est explicite, son identité est distinguable dans son Inventaire et toute Information retenue possède une Source identifiable.
- Un critère n'est pas satisfait par une réussite apparente qui masque une incertitude, un conflit, une perte ou une absence de résultat.

## Critères par capacité

### AC-01-CAP-001 — Créer un inventaire

- **Capacité évaluée :** `CAP-001` — Créer un inventaire.
- **Objectif utilisateur :** établir un périmètre explicite dans lequel une connaissance relative à des biens pourra être maintenue.
- **Résultat observable :** un Inventaire vide mais valide existe ; sa finalité et ses limites permettent de le distinguer d'un autre périmètre éventuel ; l'état vide est présenté comme normal et permet de poursuivre vers l'ajout d'un bien.
- **Conditions minimales de réussite :** l'utilisateur peut reconnaître l'Inventaire créé, comprendre ce qu'il est destiné à couvrir et constater qu'aucun Article n'y a été inclus implicitement.
- **Conditions de non-réussite :** le périmètre n'est pas identifiable ; des Articles sont présumés inclus ; l'état vide ressemble à une erreur ; ou l'utilisateur ne peut pas comprendre comment commencer son inventaire.
- **Invariants devant être respectés :** `INV-EXI-001`, `INV-TRA-001`, `INV-COH-002`.

### AC-01-CAP-002 — Ajouter un bien

- **Capacité évaluée :** `CAP-002` — Ajouter un bien.
- **Objectif utilisateur :** reconnaître explicitement une unité de gestion comme Article d'inventaire.
- **Résultat observable :** le bien individuel ou l'ensemble volontairement indivisible devient un Article distinguable, rattaché explicitement à un seul Inventaire et consultable avec les Informations effectivement connues.
- **Conditions minimales de réussite :** l'utilisateur peut distinguer cet Article des autres ; son appartenance est explicite ; les Informations retenues possèdent une Source identifiable ; les Informations absentes restent inconnues et peuvent être enrichies ultérieurement.
- **Conditions de non-réussite :** l'Article ne peut pas être distingué ; son appartenance est ambiguë ou simultanée dans plusieurs Inventaires ; son identité dépend uniquement d'un contexte mutable ; ou une Information est inventée pour donner une apparence de complétude.
- **Invariants devant être respectés :** `INV-ID-001`, `INV-ID-002`, `INV-EXI-001`, `INV-TRA-001`, `INV-COH-002`.

### AC-01-CAP-003 — Observer un bien

- **Capacité évaluée :** `CAP-003` — Observer un bien.
- **Objectif utilisateur :** conserver un constat contextualisé sans le confondre avec une conclusion acceptée.
- **Résultat observable :** une Observation est reliée au bon Article ou à sa situation ; sa Source et son contexte permettent de comprendre ce qui a été constaté et dans quelles circonstances.
- **Conditions minimales de réussite :** le constat reste identifiable comme Observation ; il peut signaler une situation compatible, incertaine ou contradictoire avec la connaissance actuelle sans la remplacer automatiquement.
- **Conditions de non-réussite :** l'Observation perd sa Source ou son contexte ; elle est attribuée au mauvais Article ; elle devient automatiquement une Information retenue ; ou une situation attendue est présentée comme observée.
- **Invariants devant être respectés :** `INV-TRA-001`, `INV-OBS-001`, `INV-OBS-002`, `INV-LOC-001`, `INV-COH-001`, `INV-COH-002`.

### AC-01-CAP-005 — Documenter un bien

- **Capacité évaluée :** `CAP-005` — Documenter un bien.
- **Objectif utilisateur :** conserver une explication utile sans dépendre de sa seule mémoire ni faire du document une vérité automatique.
- **Résultat observable :** une Documentation contextualisée est associée au bon Article et sa Source est accessible ; son rôle reste distinguable de celui d'une Observation, d'une Information retenue et d'un Élément probant.
- **Conditions minimales de réussite :** l'utilisateur peut retrouver l'explication, comprendre sa provenance et déterminer à quel Article elle se rapporte.
- **Conditions de non-réussite :** la Documentation n'a pas de Source ; son Article n'est pas identifiable ; elle remplace implicitement l'observation du bien réel ; ou elle fait autorité par sa seule présence.
- **Invariants devant être respectés :** `INV-TRA-001`, `INV-DOC-001`, `INV-COH-002`.

### AC-01-CAP-006 — Actualiser la connaissance

- **Capacité évaluée :** `CAP-006` — Actualiser la connaissance.
- **Objectif utilisateur :** faire évoluer les Informations retenues tout en conservant une compréhension du changement.
- **Résultat observable :** l'état courant reflète l'arbitrage explicite de l'utilisateur ; la Source de toute nouvelle Information retenue est identifiable ; l'état antérieur et le Changement significatif restent compréhensibles dans l'Historique.
- **Conditions minimales de réussite :** l'utilisateur peut déterminer ce qui a changé, sur quelle origine repose l'état courant et si une incertitude ou un conflit demeure.
- **Conditions de non-réussite :** l'état antérieur est réécrit silencieusement ; une Observation devient une conclusion sans arbitrage ; une Source disparaît ; un conflit est aplati ; ou une incertitude est transformée en certitude injustifiée.
- **Invariants devant être respectés :** `INV-TRA-001`, `INV-HIS-001`, `INV-CHG-001`, `INV-STA-001`, `INV-COH-001`, `INV-COH-002`.

### AC-01-CAP-009 — Rechercher

- **Capacité évaluée :** `CAP-009` — Rechercher.
- **Objectif utilisateur :** retrouver un Article et la connaissance utile à partir d'éléments dont il dispose.
- **Résultat observable :** dans un Inventaire contenant plusieurs Articles distinguables, l'utilisateur peut retrouver l'Article recherché à partir d'une intention ou d'une Information connue et le différencier des autres résultats pertinents.
- **Conditions minimales de réussite :** le résultat permet d'accéder au bon Article sans modifier la connaissance ; une recherche sans correspondance produit une absence explicite qui ne prétend pas que le bien n'existe pas dans la réalité.
- **Conditions de non-réussite :** l'Article présent ne peut pas être retrouvé à partir de sa connaissance disponible ; les résultats confondent des identités distinctes ; une correspondance est inventée ; ou l'absence de résultat est présentée comme une certitude sur le monde réel.
- **Invariants devant être respectés :** `INV-ID-001`, `INV-EXI-001`, `INV-COH-001`, `INV-COH-002`.

### AC-01-CAP-011 — Suivre l'historique

- **Capacité évaluée :** `CAP-011` — Suivre l'historique.
- **Objectif utilisateur :** comprendre comment et pourquoi la connaissance actuelle a évolué.
- **Résultat observable :** après au moins un Changement significatif, l'utilisateur peut relier un état antérieur à l'état courant et comprendre l'évolution sans que le passé ait été réécrit.
- **Conditions minimales de réussite :** le Changement, les Informations concernées et leur continuité sont identifiables ; l'Historique distingue ce qui était retenu de ce qui l'est actuellement.
- **Conditions de non-réussite :** le Changement significatif est absent ou incompréhensible ; l'état antérieur n'est plus accessible ; l'Historique contredit l'état courant sans explication ; ou toute activité indistincte est présentée comme un Changement métier.
- **Invariants devant être respectés :** `INV-TRA-001`, `INV-HIS-001`, `INV-CHG-001`.

## Critères globaux de la Release 0.1

### AC-01-GLO-001 — Usage autonome

Les parcours ordinaires du périmètre 0.1 — commencer, créer un Inventaire, ajouter un bien, le retrouver, le consulter et comprendre une actualisation — peuvent être accomplis lors d'une démonstration sans consulter de documentation externe. Les intentions, états normaux, absences et résultats sont compréhensibles depuis le produit.

### AC-01-GLO-002 — Compréhension de ce qui est possédé

À partir d'un Inventaire contenant plusieurs Articles, l'utilisateur peut déterminer quels biens sont reconnus dans son périmètre, distinguer les Articles et consulter la connaissance actuellement retenue à leur sujet. Le produit ne confond pas appartenance à l'Inventaire et présence physique récemment constatée.

### AC-01-GLO-003 — Origine identifiable

Pour toute Information retenue présentée pendant la démonstration, l'utilisateur peut identifier sa Source. Une Observation directe, une Documentation contextualisée ou un arbitrage explicite peut constituer cette provenance en Release 0.1 sans simuler la capacité exclue d'association d'un Élément probant.

### AC-01-GLO-004 — Historique cohérent

Après une actualisation significative, l'état courant, l'état antérieur et le sens du Changement peuvent être compris ensemble. L'Historique ne remplace pas l'état courant et l'état courant n'efface pas l'Historique.

### AC-01-GLO-005 — Contradictions visibles

Lorsque la démonstration introduit des Informations ou des Observations incompatibles, le désaccord reste visible jusqu'à un arbitrage explicite. Deux Informations incompatibles ne sont pas simultanément présentées comme certaines et non contestées.

### AC-01-GLO-006 — Incertitudes explicites

Une Information absente, incomplète, non vérifiée ou non arbitrée est reconnaissable comme telle. Aucun contenu supposé n'est présenté pour compléter artificiellement un Article.

### AC-01-GLO-007 — Absence de perte silencieuse

Une actualisation significative ne supprime ni l'état antérieurement retenu, ni sa Source, ni l'explication nécessaire à la continuité. Toute impossibilité de préserver ou de restituer une connaissance est explicite et empêche de considérer l'opération comme réussie.

### AC-01-GLO-008 — Cohérence de bout en bout

Une même démonstration permet de créer un Inventaire, d'y ajouter plusieurs Articles, de conserver une Observation et une Documentation contextualisées, d'actualiser une Information retenue, de retrouver l'Article concerné et de comprendre son évolution. Le sens des objets et des termes reste identique pendant tout le parcours.

### AC-01-GLO-009 — Respect intégral des invariants

Aucun résultat fonctionnel n'est accepté s'il viole un invariant du domaine. Lorsqu'une situation ne peut pas être arbitrée sans information supplémentaire, le conflit ou l'incertitude est conservé au lieu de produire un succès apparent.

### AC-01-GLO-010 — Intégrité du Scope

Les capacités absentes de la Release 0.1 ne sont pas nécessaires à l'accomplissement du cycle de valeur minimal et ne sont pas simulées. Leur absence est compréhensible lorsqu'un usage les sollicite, sans altérer les connaissances déjà constituées.

## Démonstration fonctionnelle minimale

L'acceptation de la Release 0.1 exige une démonstration cohérente, et non une série de résultats isolés. Elle doit permettre de constater au minimum :

1. la création d'un Inventaire vide dont le périmètre est compréhensible ;
2. l'ajout de plusieurs Articles d'inventaire distinguables ;
3. la conservation d'une Observation contextualisée et d'une Documentation dotée d'une Source ;
4. la consultation des Informations retenues, de leurs origines et de leurs incertitudes ;
5. l'introduction d'une contradiction ou d'une connaissance insuffisante sans certitude artificielle ;
6. une actualisation explicite produisant un Changement significatif ;
7. la recherche d'un Article présent et une recherche sans résultat ;
8. la consultation de l'Historique reliant l'état antérieur à l'état courant ;
9. la vérification que les autres Articles et Informations n'ont pas été altérés silencieusement.

Le choix des biens, des Informations et de la forme de la démonstration est libre dès lors que tous les critères peuvent être observés.

## Éléments volontairement absents de la Release 0.1

La Release 0.1 ne fournit pas les capacités suivantes :

- associer un Élément probant comme justification complémentaire structurée (`CAP-004`) ;
- organiser les Articles au moyen de Catalogues et de Catégories (`CAP-007`) ;
- gérer des Relations métier (`CAP-008`) ;
- comparer des biens ou des connaissances (`CAP-010`) ;
- exporter un Inventaire (`CAP-012`) ;
- partager un Inventaire (`CAP-013`) ;
- archiver un Inventaire ou un Article (`CAP-014`).

Leur absence ne suspend aucun invariant applicable. Elle ne doit pas être compensée par une fonction partielle présentée comme la capacité complète.

La Release 0.1 n'exige pas non plus une connaissance exhaustive, une classification initiale, une résolution automatique des conflits, une déduction de l'identité, une hiérarchisation universelle des Sources ni l'enregistrement de toute activité indistincte.

## Questions ouvertes hors de cette Feature

Les critères fonctionnels sont établis sans préjuger des décisions encore attendues sur :

- les qualités produit mesurables, notamment accessibilité, confidentialité, propriété des informations, fonctionnement avec ou sans connexion, volumes et continuité ;
- les seuils de qualité de service associés à la recherche et aux usages courants ;
- la forme de présentation permettant de démontrer les résultats ;
- le vocabulaire détaillé des Statuts et le seuil général distinguant un Changement significatif d'une variation sans portée métier.

Ces questions ne changent pas les résultats fonctionnels attendus. Les qualités produit restent un prérequis séparé avant l'entrée en architecture logicielle.

## Traçabilité

| Capacité Release 0.1 | Critère principal | Parcours de référence | Invariants explicitement associés |
| --- | --- | --- | --- |
| `CAP-001` | `AC-01-CAP-001` | `UX-001`, `UX-002` | `INV-EXI-001`, `INV-TRA-001`, `INV-COH-002` |
| `CAP-002` | `AC-01-CAP-002` | `UX-003`, `UX-004` | `INV-ID-001`, `INV-ID-002`, `INV-EXI-001`, `INV-TRA-001`, `INV-COH-002` |
| `CAP-003` | `AC-01-CAP-003` | `UX-006` | `INV-TRA-001`, `INV-OBS-001`, `INV-OBS-002`, `INV-LOC-001`, `INV-COH-001`, `INV-COH-002` |
| `CAP-005` | `AC-01-CAP-005` | `UX-004` | `INV-TRA-001`, `INV-DOC-001`, `INV-COH-002` |
| `CAP-006` | `AC-01-CAP-006` | `UX-008` | `INV-TRA-001`, `INV-HIS-001`, `INV-CHG-001`, `INV-STA-001`, `INV-COH-001`, `INV-COH-002` |
| `CAP-009` | `AC-01-CAP-009` | `UX-005` | `INV-ID-001`, `INV-EXI-001`, `INV-COH-001`, `INV-COH-002` |
| `CAP-011` | `AC-01-CAP-011` | `UX-009` | `INV-TRA-001`, `INV-HIS-001`, `INV-CHG-001` |
