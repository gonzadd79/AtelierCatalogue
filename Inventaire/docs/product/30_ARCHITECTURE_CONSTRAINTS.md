# Contraintes d'architecture produit

Ce document définit les exigences non fonctionnelles que toute architecture d'Inventaire doit respecter. Il constitue le contrat entre la définition produit et la future architecture : il fixe des résultats et des limites, sans prescrire de structure, de composant ni de technologie.

Les contraintes complètent les capacités, les invariants et les critères d'acceptation. Elles ne peuvent ni modifier leur sens ni autoriser leur contournement.

## Niveaux de priorité

- **Obligatoire :** la contrainte doit être satisfaite dans l'horizon indiqué. Une architecture qui ne la respecte pas n'est pas acceptable pour cet horizon.
- **Recommandée :** la contrainte doit orienter les choix et ne peut être écartée sans justification produit explicite.
- **Optionnelle :** la qualité n'appartient pas au Scope actuellement engagé. Elle peut être admise ultérieurement sans constituer une obligation d'anticipation.

## Contraintes

### ARC-CON-001 — Confidentialité

- **Objectif :** préserver la connaissance d'un Inventaire de tout accès, exposition ou partage non explicitement autorisé.
- **Justification produit :** un Inventaire peut décrire les biens d'une personne ou d'une petite équipe, leurs emplacements et leur contexte. Cette connaissance est privée par défaut ; la capacité Partager est absente des Releases 0.1 et 0.5.
- **Conséquence sur l'architecture :** les connaissances conservées, utilisées, sauvegardées ou restituées doivent rester dans une frontière de confidentialité identifiable. Aucune dépendance nécessaire aux capacités 0.1 ne doit exposer cette connaissance à un tiers. Tout partage futur devra résulter d'une action explicite et préserver les mêmes garanties.
- **Priorité :** **Obligatoire dès la Release 0.1**.

### ARC-CON-002 — Propriété et maîtrise des informations

- **Objectif :** garantir que l'utilisateur reste maître des Informations retenues, de leur arbitrage et de leur destination.
- **Justification produit :** la direction reste humaine et aucune Observation, Documentation ou dépendance externe ne doit devenir automatiquement la connaissance acceptée.
- **Conséquence sur l'architecture :** aucun élément extérieur au périmètre produit ne peut devenir l'autorité silencieuse sur la connaissance. L'utilisateur doit pouvoir comprendre quelles informations sont conservées, d'où elles proviennent et quel arbitrage établit l'état courant. Toute future contribution partagée devra rendre l'autorité et ses limites explicites.
- **Priorité :** **Obligatoire dès la Release 0.1**.

### ARC-CON-003 — Fonctionnement hors ligne

- **Objectif :** permettre l'usage complet du Scope 0.1 sans dépendre d'une connexion continue ni de la disponibilité d'un service extérieur.
- **Justification produit :** le premier produit utilisable concerne une personne maintenant un Inventaire limité. Aucune capacité réseau ou de partage n'appartient à ce Scope, et la connaissance doit rester disponible au moment où le bien est consulté ou observé.
- **Conséquence sur l'architecture :** créer, consulter, observer, documenter, actualiser, rechercher et suivre l'Historique doivent rester possibles hors ligne. Une indisponibilité réseau ne doit ni bloquer ces capacités ni altérer leur connaissance.
- **Priorité :** **Obligatoire dès la Release 0.1**.

### ARC-CON-004 — Synchronisation future

- **Objectif :** encadrer une éventuelle synchronisation sans la transformer en exigence actuelle.
- **Justification produit :** aucune capacité de synchronisation n'est approuvée. Le partage prévu en 1.0 porte sur la diffusion d'une compréhension commune, sans décider d'un modèle de copies concurrentes.
- **Conséquence sur l'architecture :** aucune synchronisation n'est requise avant ou pour la Release 1.0. Si cette capacité est admise ultérieurement, elle devra préserver l'identité, les Sources, l'Historique, les contradictions et l'arbitrage humain ; elle ne pourra pas fusionner silencieusement des connaissances incompatibles.
- **Priorité :** **Optionnelle après la Release 1.0**.

### ARC-CON-005 — Sauvegarde et restauration

- **Objectif :** permettre de préserver et de restaurer un Inventaire cohérent après une perte ou une détérioration de son contexte d'usage.
- **Justification produit :** la connaissance doit durer, l'Historique doit rester intelligible et aucune perte ne peut être silencieuse.
- **Conséquence sur l'architecture :** l'ensemble cohérent formé par l'Inventaire, ses Articles, ses Informations, leurs Sources, les Observations, la Documentation et l'Historique doit pouvoir être sauvegardé puis restauré sans changement de sens. La portée et la fraîcheur d'une sauvegarde doivent être identifiables ; une sauvegarde ou une restauration incomplète ne peut pas être présentée comme réussie.
- **Priorité :** **Obligatoire dès la Release 0.1**.

### ARC-CON-006 — Continuité de service

- **Objectif :** préserver un usage fiable après une interruption ordinaire, sans exiger une disponibilité permanente.
- **Justification produit :** un Inventaire utilisé dans le temps perd sa valeur si une interruption laisse son état ambigu ou incohérent.
- **Conséquence sur l'architecture :** après une interruption, le dernier état explicitement confirmé doit être restitué de manière cohérente. Si cette restitution est impossible, l'échec ou l'incertitude doit être visible et aucune connaissance partielle ne doit être présentée comme complète. Aucun engagement de disponibilité continue n'est imposé en 0.1.
- **Priorité :** **Obligatoire dès la Release 0.1**.

### ARC-CON-007 — Portabilité

- **Objectif :** permettre à la connaissance de quitter son contexte d'usage courant sans perdre son sens ni son autorité.
- **Justification produit :** `CAP-012` — Exporter est incluse en Release 0.5 afin de préserver une restitution indépendante du contexte actif.
- **Conséquence sur l'architecture :** la connaissance doit pouvoir être restituée avec son périmètre, ses identités, ses Sources, ses incertitudes, ses relations admises et son Historique pertinent. L'architecture 0.1 ne doit pas rendre cette restitution future impossible ni confondre portabilité et partage.
- **Priorité :** **Recommandée dès la Release 0.1 et obligatoire à partir de la Release 0.5**.

### ARC-CON-008 — Performance perçue

- **Objectif :** préserver la continuité de pensée pendant les usages courants.
- **Justification produit :** Inventaire doit réduire le temps nécessaire pour retrouver et comprendre un bien ; une interaction lente déplacerait le problème au lieu de le résoudre.
- **Conséquence sur l'architecture :** au volume de référence 0.1, créer ou consulter un Article, enregistrer une Observation ou une Documentation, actualiser une Information, rechercher et consulter l'Historique doivent produire un résultat perceptible en moins de deux secondes dans des conditions normales d'usage hors ligne. Un échec ou une attente exceptionnelle doit rester explicite.
- **Priorité :** **Obligatoire dès la Release 0.1**.

### ARC-CON-009 — Volumétrie de référence

- **Objectif :** garantir que la Release 0.1 reste utile au-delà d'une démonstration minimale.
- **Justification produit :** un utilisateur particulier ou passionné peut maintenir un Inventaire croissant ; la recherche et l'Historique doivent conserver leur valeur lorsque la mémoire seule ne suffit plus.
- **Conséquence sur l'architecture :** la Release 0.1 doit respecter ses critères fonctionnels et de performance pour un Inventaire comportant jusqu'à **5 000 Articles d'inventaire**, chacun pouvant posséder plusieurs Informations, Sources, Observations, Documentation et Changements. Ce seuil ne constitue ni une limite fonctionnelle imposée à l'utilisateur ni un engagement pour les volumes ultérieurs.
- **Priorité :** **Obligatoire dès la Release 0.1**.

### ARC-CON-010 — Scalabilité

- **Objectif :** distinguer l'augmentation future des volumes ou des usages simultanés de la volumétrie exigée pour le produit actuel.
- **Justification produit :** la Release 1.0 vise une personne ou une petite équipe, mais aucun besoin de très grande échelle ni de concurrence massive n'est établi.
- **Conséquence sur l'architecture :** aucune architecture distribuée ni capacité de croissance indéfinie n'est requise. Si des volumes ou des usages simultanés supérieurs sont admis après 1.0, leur prise en charge devra conserver les invariants, la confidentialité et la cohérence de l'Historique plutôt que les affaiblir au profit de l'échelle.
- **Priorité :** **Optionnelle après la Release 1.0**.

### ARC-CON-011 — Extensibilité fonctionnelle

- **Objectif :** permettre l'ajout progressif des capacités prévues sans fragiliser le socle déjà utilisable.
- **Justification produit :** les Releases sont cumulatives et une connaissance créée avec une Release antérieure doit rester valable lorsque le produit s'enrichit.
- **Conséquence sur l'architecture :** l'ajout ultérieur d'Éléments probants, de Catalogues, de Relations, de comparaison, d'export, de partage ou d'archivage ne doit pas changer silencieusement le sens des Inventaires, Articles, Informations, Sources, Observations, Documentation ou Historiques existants.
- **Priorité :** **Recommandée dès la Release 0.1**.

### ARC-CON-012 — Interopérabilité

- **Objectif :** permettre une restitution compréhensible de la connaissance vers un autre contexte sans imposer aujourd'hui de partenaire ni de convention d'échange.
- **Justification produit :** l'export 0.5 doit préserver la continuité hors du contexte actif ; de futures interactions externes ne doivent pas créer une seconde interprétation du domaine.
- **Conséquence sur l'architecture :** toute interaction admise avec un autre contexte devra préserver le sens des termes canoniques, les identités, les Sources, les incertitudes et les limites du périmètre. Aucun format, protocole ou intégrateur particulier n'est imposé.
- **Priorité :** **Recommandée dès la Release 0.5**.

### ARC-CON-013 — Accessibilité

- **Objectif :** rendre les parcours essentiels perceptibles, utilisables et compréhensibles sans dépendre d'une capacité sensorielle, d'un indice unique ou d'une expertise préalable du produit.
- **Justification produit :** la compréhension doit rester accessible, le produit doit être utilisable sans documentation externe et les incertitudes comme les conflits doivent être visibles pour tous les utilisateurs.
- **Conséquence sur l'architecture :** toutes les capacités 0.1 doivent pouvoir être utilisées par navigation au clavier ou moyen équivalent ; le sens ne doit pas dépendre uniquement de la couleur, de la position ou d'un effet visuel ; les intitulés, états, erreurs, origines et changements doivent être restituables aux technologies d'assistance ; l'ordre et la structure de lecture doivent rester cohérents.
- **Priorité :** **Obligatoire dès la Release 0.1**.

### ARC-CON-014 — Internationalisation

- **Objectif :** distinguer la conservation fidèle des contenus de l'utilisateur d'une future traduction du produit.
- **Justification produit :** le langage canonique initial est français. Aucun besoin de proposer plusieurs langues d'usage n'est établi pour les Releases actuelles, mais les noms, références et documentations des biens peuvent provenir de contextes linguistiques variés.
- **Conséquence sur l'architecture :** les contenus saisis ou conservés ne doivent pas être altérés en raison de leur langue. La traduction de l'expérience et du vocabulaire produit n'est pas requise avant ou pour la Release 1.0 ; si elle est admise ensuite, elle devra conserver l'unicité sémantique des concepts canoniques.
- **Priorité :** **Optionnelle après la Release 1.0** pour la traduction ; la conservation fidèle des contenus est **Obligatoire dès la Release 0.1**.

### ARC-CON-015 — Traçabilité

- **Objectif :** permettre de comprendre l'origine de toute Information retenue et les éléments qui expliquent son état courant.
- **Justification produit :** la traçabilité est un invariant du domaine et une condition globale d'acceptation de la Release 0.1.
- **Conséquence sur l'architecture :** la Source d'une Information retenue doit rester identifiable pendant sa conservation, sa consultation, son actualisation, sa sauvegarde et sa restauration. Les liens nécessaires entre Information, Observation, Documentation, arbitrage et Changement ne peuvent pas être perdus ou remplacés par une provenance implicite.
- **Priorité :** **Obligatoire dès la Release 0.1**.

### ARC-CON-016 — Auditabilité métier

- **Objectif :** permettre à une personne d'examiner après coup les Changements significatifs et les arbitrages ayant conduit à la connaissance actuelle.
- **Justification produit :** l'Historique sert à comprendre, non à surveiller ; le présent ne doit pas effacer le passé.
- **Conséquence sur l'architecture :** l'état antérieur, le Changement significatif, son origine et son rapport avec l'état courant doivent rester examinables. L'auditabilité ne requiert pas l'enregistrement indistinct de toute activité et ne doit pas devenir une surveillance de l'utilisateur.
- **Priorité :** **Obligatoire dès la Release 0.1**.

### ARC-CON-017 — Évolutivité de la connaissance

- **Objectif :** permettre au produit et à ses représentations futures d'évoluer sans rendre la connaissance existante ambiguë ou inutilisable.
- **Justification produit :** l'Inventaire doit rester durablement compréhensible, les Releases sont cumulatives et l'architecture ne doit pas redéfinir silencieusement les concepts du domaine.
- **Conséquence sur l'architecture :** toute évolution de la représentation ou des règles doit préserver ou expliquer explicitement le sens, l'identité, la provenance et l'Historique des connaissances existantes. Une transformation incompatible ne peut pas être appliquée comme si elle était neutre ; son impact doit être identifiable avant adoption.
- **Priorité :** **Obligatoire dès la Release 0.1**.

## Contraintes obligatoires dès la Release 0.1

La future architecture doit satisfaire dès la première Release :

- la confidentialité par défaut (`ARC-CON-001`) ;
- la maîtrise des Informations par l'utilisateur (`ARC-CON-002`) ;
- l'usage complet du Scope 0.1 hors ligne (`ARC-CON-003`) ;
- la sauvegarde et la restauration cohérentes (`ARC-CON-005`) ;
- la continuité après une interruption ordinaire (`ARC-CON-006`) ;
- un résultat perceptible en moins de deux secondes pour les usages courants au volume de référence (`ARC-CON-008`) ;
- la prise en charge d'un Inventaire allant jusqu'à 5 000 Articles (`ARC-CON-009`) ;
- l'accessibilité des parcours essentiels (`ARC-CON-013`) ;
- la conservation fidèle des contenus, quelle que soit leur langue (`ARC-CON-014`) ;
- la traçabilité des Informations retenues (`ARC-CON-015`) ;
- l'auditabilité des Changements significatifs (`ARC-CON-016`) ;
- l'évolution explicable de la connaissance (`ARC-CON-017`).

La portabilité et l'extensibilité fonctionnelle orientent également l'architecture 0.1, sans imposer d'implémenter les capacités des Releases ultérieures.

## Contraintes engagées par les Releases ultérieures

### À partir de la Release 0.5

- La portabilité devient obligatoire avec `CAP-012` — Exporter.
- L'interopérabilité devient une qualité attendue de toute restitution vers un autre contexte.
- Les garanties de traçabilité et de continuité s'étendent aux Éléments probants, Catalogues, Relations et archives admis dans cette Release.

### À partir de la Release 1.0

- La confidentialité et la maîtrise des Informations s'appliquent au partage avec une frontière d'autorité explicite.
- La comparaison doit préserver les distinctions d'identité, l'incertitude et les contradictions.
- Les qualités déjà obligatoires restent applicables aux usages d'une petite équipe ; aucun changement d'échelle non défini n'est implicite.

## Contraintes différables après la Release 1.0

Les qualités suivantes ne sont pas des obligations de l'architecture actuelle :

- la synchronisation entre plusieurs copies ou contextes actifs (`ARC-CON-004`) ;
- la scalabilité au-delà de la volumétrie et des profils approuvés (`ARC-CON-010`) ;
- la traduction de l'expérience dans plusieurs langues (`ARC-CON-014`).

Leur admission future devra partir d'un besoin produit validé. Elle ne pourra ni affaiblir les contraintes déjà obligatoires ni être utilisée pour justifier une complexité anticipée dans la Release 0.1.

## Règles d'utilisation par la phase Architecture

- Toute proposition d'architecture doit démontrer sa conformité à chaque contrainte obligatoire applicable à la Release visée.
- Un compromis entre deux contraintes doit être explicite et soumis à une décision produit ; l'architecture ne peut pas modifier seule leur priorité.
- Une contrainte recommandée écartée exige une justification et une analyse de son impact sur les Releases suivantes.
- Une contrainte optionnelle ne justifie aucune complexité tant que son besoin n'est pas admis dans le Scope produit.
- Les seuils de performance et de volumétrie peuvent être renforcés par une future Release, mais ne peuvent être réduits pour la Release 0.1 sans décision produit explicite.
