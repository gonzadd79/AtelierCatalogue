# Product Design Review

Cette revue évalue la définition actuelle du produit Inventaire comme un ensemble documentaire cohérent. Elle ne modifie aucune décision et ne remplace aucune source examinée.

## Périmètre

La revue couvre le `README.md` ainsi que les documents produit `00_PRODUCT_VISION`, `10_PRODUCT_PRINCIPLES`, `20_UBIQUITOUS_LANGUAGE`, `21_INVENTORY_DOMAIN`, `22_DOMAIN_INVARIANTS`, `23_PRODUCT_CAPABILITIES`, `24_RELEASE_SCOPE`, `25_USER_EXPERIENCE`, `30_ROADMAP`, `40_ARCHITECTURE_VISION` et `50_DECISIONS`.

## Échelle de priorité

- **P0 — Bloquant :** à résoudre avant le début de l'architecture technique.
- **P1 — Important :** à résoudre avant les spécifications détaillées ou la préparation d'une Release.
- **P2 — Amélioration :** à traiter avant la stabilisation du produit.
- **P3 — Éditorial :** amélioration de lisibilité sans impact immédiat sur le sens.

## Executive Summary

Inventaire possède une vision nette, des principes différenciants et une conception fortement indépendante de toute solution. Le produit traite l'inventaire comme une connaissance évolutive, explicable et honnête sur ses incertitudes. Cette orientation est cohérente du Blueprint métier jusqu'aux principes UX.

La conception n'est toutefois pas encore suffisamment stabilisée pour guider une architecture technique sans hypothèses majeures. Le vocabulaire officiel et le domaine divergent sur la nature même d'un Inventory. La connaissance « acceptée », pourtant centrale dans les invariants et l'expérience, ne possède aucune responsabilité métier explicite. L'identité et la granularité d'un Inventory Item restent ouvertes. Enfin, la Roadmap contredit l'historique réel et la capacité Import n'existe pas malgré sa présence dans la planification.

La maturité globale est **Emerging**. Une phase courte de réconciliation sémantique, de gouvernance et de critères produit est nécessaire avant l'architecture technique.

## Forces du produit

### Une mission compréhensible

Le produit répond à un problème concret : savoir ce qui existe, retrouver un bien et comprendre la fiabilité de l'information disponible. La vision reste concise et ne dépend pas d'une solution particulière.

### Une honnêteté épistémique forte

Observations, Evidence, incertitudes et conflits sont distingués. Le principe « l'inconnu reste inconnu » traverse le domaine, les invariants, les capacités et l'expérience.

### Une séparation claire entre réalité et représentation

Les documents rappellent qu'un inventaire décrit une réalité connue sans se substituer à elle. Cette frontière limite les certitudes artificielles et les décisions automatiques injustifiées.

### Une continuité temporelle intentionnelle

History et Change ne sont pas présentés comme un simple journal. Ils expliquent comment la connaissance actuelle a été obtenue et interdisent la réécriture silencieuse du passé.

### Une progression fonctionnelle lisible

Les Releases 0.1, 0.5 et 1.0 forment des périmètres cumulatifs. Chaque palier vise une valeur utilisateur identifiable plutôt qu'un volume arbitraire de fonctions.

### Une expérience centrée sur la compréhension

Les parcours décrivent des intentions et des résultats, pas des écrans. Les états vides, les incertitudes et l'origine de la connaissance sont traités comme des éléments normaux de l'expérience.

### Une direction humaine préservée

Le produit assiste l'observation et l'arbitrage sans s'attribuer la validation du sens. Cette position est cohérente avec les principes fondateurs.

## Différenciation proposée

La différenciation actuelle repose moins sur la tenue d'une liste de biens que sur la qualité de la connaissance associée :

- séparation entre constat, élément probant, documentation et connaissance retenue ;
- visibilité durable des inconnues et des contradictions ;
- traçabilité de l'origine de chaque connaissance acceptée ;
- conservation du raisonnement historique plutôt que du seul état courant ;
- complexité progressive pour préserver un usage simple ;
- consultation pensée comme l'ouverture d'un inventaire compréhensible, et non comme l'exposition d'une structure administrative.

Cette différenciation est une hypothèse produit issue des documents. Elle n'est pas encore confirmée par une étude comparative ou par l'observation d'utilisateurs réels.

## Constats détaillés

### PDR-001 — Nature contradictoire de l'Inventory

- **Observation :** `20_UBIQUITOUS_LANGUAGE` définit l'Inventaire comme un ensemble délimité de biens, tandis que `21_INVENTORY_DOMAIN` le définit comme une connaissance organisée et délimitée de cet ensemble. Le premier assimile le concept aux biens ; le second à leur représentation connue.
- **Impact :** cette divergence affecte le périmètre, l'existence des Inventory Items, la notion d'appartenance et toute future responsabilité de conservation. Deux architectures valides mais incompatibles pourraient en découler.
- **Recommandation :** choisir une définition canonique. La formulation la plus cohérente avec le reste du produit est « une connaissance organisée et délimitée à propos d'un ensemble de biens », en distinguant explicitement l'Inventory de l'ensemble réel inventorié.
- **Priorité :** **P0 — Bloquant**.

### PDR-002 — Absence de responsabilité pour la connaissance acceptée

- **Observation :** les documents utilisent fréquemment « information acceptée », « connaissance actuelle », « état retenu » et « arbitrage ». Aucun objet métier ne représente clairement l'énoncé accepté qui est soutenu par des Observations ou Evidence et modifié par un Change. `Information d'inventaire` existe dans le langage initial mais pas dans le Blueprint du domaine.
- **Impact :** Evidence ne possède pas de cible stable au-delà d'Observation, Change ne sait pas précisément ce qu'il fait évoluer, et Status risque de devenir un substitut trop général. La traçabilité centrale du produit demeure conceptuellement incomplète.
- **Recommandation :** décider si `Information d'inventaire` porte cette responsabilité ou si un autre concept métier autonome est nécessaire. Définir ensuite sa frontière avec Observation, Evidence, Documentation et Status.
- **Priorité :** **P0 — Bloquant**.

### PDR-003 — Identité et granularité non arbitrées

- **Observation :** les invariants exigent une identité distincte et stable, mais les cas ouverts ne déterminent pas si un Inventory Item représente un bien individuel ou un ensemble, ni comment reconnaître un même bien dans plusieurs Inventories.
- **Impact :** unicité, quantité, doublons, fusion, séparation, appartenance et historique ne peuvent pas être raisonnés de manière fiable. Une solution future devrait inventer ces règles.
- **Recommandation :** prendre des décisions métier sur la granularité minimale, l'identité dans un Inventory, la reconnaissance inter-Inventories et la sortie du périmètre. Ne définir aucun format technique à ce stade.
- **Priorité :** **P0 — Bloquant**.

### PDR-004 — Source, Evidence et Documentation insuffisamment alignées

- **Observation :** `20_UBIQUITOUS_LANGUAGE` définit Source, tandis que le domaine utilise Evidence et Documentation sans expliquer si une Source est leur origine, leur équivalent ou un concept distinct. Un document peut soutenir une information, mais Documentation est actuellement seulement décrite comme pouvant référencer des Evidence.
- **Impact :** un même élément pourrait être présenté différemment selon le parcours. L'utilisateur ne saurait pas toujours ce qui constitue l'origine, l'élément probant ou l'explication.
- **Recommandation :** normaliser les trois responsabilités et décider explicitement si une Documentation peut aussi jouer le rôle d'Evidence dans un contexte déterminé. Reporter la décision dans le langage ubiquitaire.
- **Priorité :** **P0 — Bloquant**.

### PDR-005 — Roadmap en contradiction avec l'historique

- **Observation :** `30_ROADMAP` maintient EPIC-002 au statut Planned alors que quatre Features ont été réalisées. Elle attribue EPIC-003 à Catalogs alors que la présente séquence a ouvert EPIC-003 comme Product Experience. Les Features accomplies n'y sont pas visibles.
- **Impact :** la source de planification ne permet plus de comprendre ce qui existe, ce qui est actif ni à quelle Epic rattacher les travaux. Deux EPIC-003 concurrentes sont désormais possibles.
- **Recommandation :** réconcilier les identifiants, noms et statuts avec l'historique réel avant toute nouvelle Epic. Préserver un identifiant unique par Epic et distinguer clairement travaux terminés, actifs et planifiés.
- **Priorité :** **P0 — Bloquant de gouvernance**.

### PDR-006 — Import planifié mais absent du produit complet

- **Observation :** la Roadmap prévoit EPIC-006 « Import / Export ». Les capacités et le Scope 1.0 définissent Export mais aucune capacité Import, alors que la Release 1.0 est présentée comme complète selon la vision actuelle.
- **Impact :** la Roadmap et le Scope fonctionnel décrivent deux produits différents. Il est impossible de savoir si Import est requis pour 1.0, différé au-delà de 1.0 ou abandonné.
- **Recommandation :** décider si Import apporte une capacité produit durable. L'admettre et l'affecter à une Release, ou renommer l'Epic afin que la Roadmap reflète uniquement Export.
- **Priorité :** **P0 — Bloquant de périmètre**.

### PDR-007 — Frontières incomplètes de plusieurs capacités

- **Observation :** consulter un bien est un parcours central mais pas une capacité explicite. Archiver regroupe Inventory et Inventory Item malgré des conséquences métier différentes. Partager ne distingue pas consultation et contribution. Comparer ne possède pas encore de dimensions métier déterminées.
- **Impact :** les critères d'achèvement et les responsabilités fonctionnelles resteraient ambigus. Certaines capacités pourraient devenir trop vastes ou être reproduites dans plusieurs Features.
- **Recommandation :** statuer sur la consultation comme capacité autonome ou responsabilité transversale ; séparer ou justifier les deux formes d'archivage ; borner Partager et Comparer par leur résultat métier.
- **Priorité :** **P1 — Important**.

### PDR-008 — Progression des Releases non reliée à un profil cible

- **Observation :** la Release 0.1 convient surtout à un utilisateur individuel. La Release 0.5 est dite utilisable au quotidien mais exclut Partager, alors que les petites équipes appartiennent au public visé. Aucun profil n'est désigné comme cible de certification pour chaque Release.
- **Impact :** « utilisable » et « utilisable au quotidien » peuvent recevoir des interprétations différentes selon la personne évaluant la Release.
- **Recommandation :** associer à chaque Release un profil cible principal et des résultats observables. Conserver les autres profils comme bénéficiaires secondaires sans élargir silencieusement le Scope.
- **Priorité :** **P1 — Important**.

### PDR-009 — Critères d'acceptation fonctionnels absents

- **Observation :** `24_RELEASE_SCOPE` décrit des capacités et une valeur, mais aucun critère vérifiable n'établit qu'une Release permet réellement d'accomplir ses résultats utilisateur.
- **Impact :** une architecture pourrait satisfaire nominalement la liste des capacités tout en échouant à produire l'expérience attendue. Le Freeze et la certification d'une Release resteraient subjectifs.
- **Recommandation :** définir les Acceptance Criteria produit de la Release 0.1 à partir des capacités et parcours, avant de détailler une solution.
- **Priorité :** **P0 — Bloquant avant architecture de Release**.

### PDR-010 — Tension entre la traçabilité et le Scope 0.1

- **Observation :** `INV-TRA-001` exige une origine identifiable pour toute connaissance acceptée. La Release 0.1 exclut Associer une Evidence, tout en permettant l'ajout, la documentation et l'actualisation.
- **Impact :** sans clarification, une réalisation pourrait soit violer l'invariant, soit introduire implicitement une capacité Evidence pourtant exclue.
- **Recommandation :** préciser quelles origines sont valides en 0.1 — par exemple Observation directe, Documentation contextualisée ou arbitrage explicite — et réserver Evidence à la justification complémentaire définie pour 0.5.
- **Priorité :** **P1 — Important**.

### PDR-011 — Sémantique encore ouverte de Status, Location, Category et Catalog

- **Observation :** ces concepts ont une responsabilité générale, mais leurs frontières restent ouvertes : vocabulaire des Status, différence exacte entre Location attendue et observée, multiplicité des Categories et articulation entre Category et Catalog.
- **Impact :** une future architecture serait contrainte d'inventer des règles de propriété, de cohérence et d'évolution qui devraient appartenir au domaine.
- **Recommandation :** définir uniquement les distinctions et invariants métier nécessaires au Scope 0.1 puis 0.5. Différer les variations non nécessaires plutôt que construire une taxonomie exhaustive.
- **Priorité :** **P1 — Important**.

### PDR-012 — Seuil de Change significatif non défini

- **Observation :** History doit conserver les Changes significatifs, mais aucun critère métier ne distingue un changement à préserver d'une variation sans importance.
- **Impact :** l'historique pourrait devenir soit incomplet, soit envahissant. L'expérience « comprendre pourquoi » ne serait pas constante.
- **Recommandation :** identifier les familles minimales de Changes qui modifient l'identité, l'appartenance, la localisation retenue, le Status, les Relationships ou une connaissance acceptée.
- **Priorité :** **P1 — Important**.

### PDR-013 — Redondance normative et registre de décisions vide

- **Observation :** les principes d'incertitude, de traçabilité, de continuité et d'arbitrage humain sont reformulés dans `10_PRODUCT_PRINCIPLES`, `22_DOMAIN_INVARIANTS` et `25_USER_EXPERIENCE`. Cette répétition est cohérente aujourd'hui mais son autorité n'est pas déclarée. Parallèlement, `50_DECISIONS` reste vide malgré plusieurs décisions structurantes sur le domaine et les Releases.
- **Impact :** les reformulations peuvent diverger et il devient difficile de savoir où modifier une règle. L'historique des décisions produit n'explique pas les choix déjà effectués.
- **Recommandation :** attribuer une responsabilité canonique compacte à chaque document : principes pour la direction, invariants pour les vérités métier, UX pour leurs conséquences expérientielles. Déterminer quelles décisions structurantes doivent être enregistrées sans dupliquer leur contenu normatif.
- **Priorité :** **P1 — Important**.

### PDR-014 — Vision d'architecture prématurément prescriptive et incomplète

- **Observation :** `40_ARCHITECTURE_VISION` suppose cinq parties nommées Frontend, Backend, Persistence, Domain et API. Cette séparation reste abstraite, mais elle est posée avant les contraintes produit qui permettraient de démontrer sa nécessité. Le document ne précise pas les qualités attendues concernant confidentialité, propriété des informations, accessibilité, fonctionnement déconnecté, volume, continuité ou partage.
- **Impact :** l'architecture technique risque de reproduire une forme prédéterminée plutôt que de répondre aux besoins réels. À l'inverse, les choix structurants ne pourront pas être évalués faute de qualités produit mesurables.
- **Recommandation :** traiter les cinq parties comme des responsabilités conceptuelles non obligatoirement déployées séparément. Définir les contraintes et qualités produit avant de retenir une topologie technique.
- **Priorité :** **P0 — Bloquant avant architecture technique**.

### PDR-015 — Accessibilité reconnue mais non engagée

- **Observation :** l'expérience exige une compréhension accessible, mais les besoins d'accessibilité restent une question ouverte et ne figurent ni dans les principes produit ni dans le Scope des Releases.
- **Impact :** l'accessibilité pourrait devenir une correction tardive plutôt qu'une qualité constitutive des premiers parcours.
- **Recommandation :** définir un socle d'expérience accessible et vérifiable pour la Release 0.1, indépendamment de toute future présentation.
- **Priorité :** **P1 — Important**.

### PDR-016 — Langage bilingue instable

- **Observation :** le langage ubiquitaire est français, tandis que les documents du domaine, des capacités et de l'expérience alternent termes français et anglais : Inventory, Inventory Item, Evidence, History, Change, Catalog et Status.
- **Impact :** le principe « un langage partagé » n'est pas pleinement respecté. Les futurs noms pourraient devenir une décision implicite de réalisation plutôt qu'un choix produit compris par les utilisateurs.
- **Recommandation :** choisir un terme produit canonique pour chaque concept et conserver les équivalents uniquement comme index de traduction, pas comme vocabulaire concurrent.
- **Priorité :** **P2 — Amélioration**.

### PDR-017 — Diagramme du domaine encore partiel

- **Observation :** le diagramme ne représente pas l'information acceptée, montre Relationship comme associant un seul Inventory Item et ne relie pas directement Change aux objets autres que l'article alors que le texte lui donne un périmètre plus large.
- **Impact :** un lecteur extérieur pourrait comprendre un modèle plus pauvre ou plus fermé que celui décrit dans le texte.
- **Recommandation :** réviser le diagramme uniquement après résolution des constats sémantiques PDR-001 à PDR-004, afin qu'il reste une conséquence du domaine et non sa source.
- **Priorité :** **P2 — Amélioration**.

## Redondances acceptables

- Le README résume correctement la vision sans la remplacer.
- Le Release Scope référence les capacités par identifiant et justifie leur apparition sans les redéfinir entièrement.
- Les parcours UX réutilisent les invariants pour expliquer les résultats attendus.

Ces répétitions restent utiles si leur caractère descriptif est déclaré et si la source canonique de chaque règle demeure identifiable.

## Concepts absents ou candidats

### À résoudre avant architecture

- **Information acceptée / connaissance retenue :** responsabilité centrale actuellement sans objet métier explicite.
- **Identité métier :** principe défini, mais nature et portée non arbitrées.
- **Granularité :** distinction entre article individuel, ensemble et quantité.
- **Sortie du périmètre :** différence entre archive, retrait, absence et existence incertaine.
- **Import :** capacité planifiée mais absente du produit défini.

### À approfondir sans admission automatique

- Niveau ou qualité d'une Evidence.
- Famille de Status métier.
- Type de partage : consultation ou contribution.
- Dimensions de comparaison.
- Portée d'une Relationship vers un objet extérieur à l'Inventory.

Ces candidats ne doivent pas devenir des concepts uniquement pour compléter une liste. Ils doivent d'abord démontrer une responsabilité durable et distincte.

## Risques de complexité

- Le modèle épistémique peut rendre un ajout courant trop lourd si Observation, Evidence, Documentation, Status et Change sont tous exposés simultanément.
- History, Relationships, comparaison et partage peuvent transformer un inventaire simple en gestionnaire générique de connaissances.
- Les conflits et niveaux d'incertitude peuvent devenir difficiles à comprendre sans vocabulaire limité et stable.
- Les Catalogs multiples et Categories flexibles peuvent reproduire le problème d'organisation que le produit cherche à résoudre.
- La traçabilité complète peut augmenter l'effort demandé pour des biens de faible importance.

## Risques de sur-conception

- Quatorze capacités, vingt invariants et douze objets métier sont définis avant validation par des utilisateurs réels.
- L'architecture en cinq parties peut devenir une contrainte de solution sans justification produit.
- Les variantes de Evidence, Relationship, Status et History pourraient être détaillées avant qu'un parcours 0.1 ne démontre leur nécessité.
- La recherche d'une cohérence conceptuelle parfaite peut retarder l'apprentissage obtenu avec un périmètre utilisateur minimal.

La réponse recommandée n'est pas de supprimer la rigueur actuelle, mais de stabiliser uniquement les décisions nécessaires à la Release 0.1 et de différer les extensions.

## Recommandations ordonnées

### Avant toute architecture technique

1. Réconcilier la définition d'Inventory et le langage ubiquitaire.
2. Attribuer une responsabilité métier explicite à la connaissance acceptée.
3. Décider la granularité, l'identité, l'appartenance et la sortie d'un Inventory Item.
4. Clarifier Source, Evidence et Documentation.
5. Réconcilier la Roadmap, notamment EPIC-002, EPIC-003 et Import / Export.
6. Définir les Acceptance Criteria produit de la Release 0.1.
7. Définir les qualités et contraintes produit qui permettront d'évaluer une architecture.

### Avant les spécifications détaillées

8. Fermer les frontières de consultation, archivage, comparaison et partage.
9. Désigner le profil cible principal de chaque Release.
10. Clarifier la traçabilité autorisée en 0.1 sans la capacité Evidence.
11. Définir le minimum sémantique de Status, Location, Category, Catalog et Change.
12. Déclarer l'autorité respective des principes, invariants et conséquences UX.
13. Formaliser un socle d'accessibilité produit pour la première Release.

### Après stabilisation

14. Normaliser le vocabulaire français et anglais.
15. Mettre à jour le diagramme conceptuel.
16. Valider la différenciation et la simplicité du produit auprès d'utilisateurs représentatifs.

## Questions à résoudre avant l'architecture technique

- L'Inventory est-il l'ensemble réel des biens ou la connaissance maintenue à son sujet ?
- Quel objet porte une information acceptée et comment se distingue-t-il d'Observation, Evidence, Documentation et Status ?
- Qu'est-ce qui rend un Inventory Item identique à lui-même dans le temps ?
- Un article représente-t-il un bien, un ensemble ou les deux selon une règle explicite ?
- Un même bien peut-il appartenir à plusieurs Inventories ?
- Import appartient-il au Scope 1.0 ?
- Quel profil et quels résultats observables certifient la Release 0.1 ?
- Quelles exigences de confidentialité, propriété, accessibilité, volume, continuité et partage contraignent réellement le produit ?
- La consultation et le partage sont-ils des capacités autonomes, et jusqu'où s'étendent-ils ?

## Niveau de maturité produit

| Domaine évalué | Niveau | Justification |
| --- | --- | --- |
| Vision et principes | Stable | Mission, valeur et limites sont cohérentes et durables. |
| Langage ubiquitaire | Emerging | Vocabulaire initial utile mais incomplet et contradictoire avec le domaine. |
| Domaine métier | Emerging | Responsabilités riches, mais connaissance acceptée, identité et granularité restent ouvertes. |
| Invariants | Stable dans leur forme | Ensemble vérifiable et cohérent, dépendant toutefois de concepts encore ambigus. |
| Capacités | Emerging | Couverture large, avec plusieurs frontières à fermer. |
| Périmètres de Release | Emerging | Progression logique, mais Import, profils cibles et critères d'acceptation manquent. |
| Expérience utilisateur | Stable comme intention | Parcours et principes solides, sans critères UX certifiables. |
| Roadmap | Draft | Statuts et identifiants ne reflètent plus l'historique réel. |
| Vision d'architecture | Draft | Responsabilités utiles, mais hypothèses et qualités produit non validées. |
| Gouvernance des décisions | Draft | Registre vide et autorités locales non déclarées. |

**Maturité globale : Emerging.**

## Décision de préparation

### Prêt à commencer l'architecture technique : NON

Le produit est suffisamment défini pour poursuivre la conception produit, mais pas pour engager une architecture technique responsable. Les blocages P0 portent sur le sens du domaine, l'identité, le périmètre 1.0, la gouvernance de la Roadmap, les critères de la première Release et les contraintes qui doivent guider l'architecture.

Commencer maintenant obligerait l'architecture à décider silencieusement des questions qui appartiennent encore au produit. La prochaine étape doit être une stabilisation ciblée, limitée aux constats P0, suivie d'une courte Readiness Review.
