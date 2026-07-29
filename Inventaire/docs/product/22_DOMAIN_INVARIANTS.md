# Invariants du domaine Inventaire

Ce document est la référence métier des vérités qui doivent rester valides dans le domaine Inventaire. Il complète le Blueprint du domaine sans redéfinir ses objets et s'applique indépendamment de toute représentation ou architecture future.

Un invariant est respecté lorsqu'une personne peut examiner la connaissance disponible et constater que son énoncé demeure vrai. Lorsqu'un arbitrage est impossible, l'incertitude ou le conflit doit rester explicite.

## Identité

### INV-ID-001 — Identité distincte

- **Identifier :** `INV-ID-001`
- **Énoncé :** chaque Article d'inventaire doit représenter une unité de gestion distinguable des autres Articles du même Inventaire, qu'il s'agisse d'un bien individuel ou d'un ensemble volontairement indivisible ; un même bien ne peut pas être simultanément actif comme membre d'un tel ensemble et comme Article individuel dans cet Inventaire.
- **Justification :** un inventaire ne peut être fiable si deux biens différents sont traités comme un même article ou si un article est compté plusieurs fois sans intention explicite.
- **Conséquence si violé :** les observations, documents, localisations et changements peuvent être attribués au mauvais bien.
- **Objets concernés :** Inventaire, Article d'inventaire.

### INV-ID-002 — Identité indépendante du contexte mutable

- **Identifier :** `INV-ID-002`
- **Énoncé :** l'identité d'un Article d'inventaire ne doit pas dépendre uniquement de son Emplacement, de son Statut, de sa Catégorie, de son Catalogue ou de sa Documentation.
- **Justification :** ces éléments peuvent évoluer sans que le bien cesse d'être le même article.
- **Conséquence si violé :** un déplacement, un reclassement ou une mise à jour documentaire pourrait créer une fausse disparition ou un faux doublon.
- **Objets concernés :** Article d'inventaire, Emplacement, Statut, Catégorie, Catalogue, Documentation.

## Existence

### INV-EXI-001 — Inclusion explicite

- **Identifier :** `INV-EXI-001`
- **Énoncé :** un Article d'inventaire n'existe dans le domaine que si son inclusion dans un Inventaire déterminé est explicite ; il n'appartient qu'à un seul Inventaire à un instant donné.
- **Justification :** l'existence métier exprime l'appartenance à un périmètre de connaissance unique, et non une simple mention isolée ou une propriété juridique.
- **Conséquence si violé :** des articles sans périmètre clair pourraient être interprétés à tort comme inventoriés.
- **Objets concernés :** Inventaire, Article d'inventaire.

### INV-EXI-002 — Existence métier distincte de la présence constatée

- **Identifier :** `INV-EXI-002`
- **Énoncé :** l'absence d'une Observation récente, l'impossibilité de retrouver un Article ou son archivage ne suffisent pas à supprimer son existence historique dans l'Inventaire.
- **Justification :** une absence de constat n'est pas un constat d'absence et peut seulement augmenter l'incertitude.
- **Conséquence si violé :** la connaissance antérieure serait effacée sans fondement et l'historique deviendrait trompeur.
- **Objets concernés :** Article d'inventaire, Observation, Emplacement, Statut, Historique.

## Traçabilité

### INV-TRA-001 — Origine identifiable

- **Identifier :** `INV-TRA-001`
- **Énoncé :** toute Information d'inventaire retenue dans la connaissance acceptée doit avoir une Source identifiable, y compris lorsqu'elle provient d'une Observation directe, d'une Documentation contextualisée ou d'un arbitrage explicite.
- **Justification :** la fiabilité d'une information ne peut être appréciée sans comprendre d'où elle provient.
- **Conséquence si violé :** l'information devient impossible à expliquer, vérifier ou remettre en question.
- **Objets concernés :** Inventaire, Article d'inventaire, Information d'inventaire, Source, Observation, Élément probant, Documentation, Changement, Historique.

## Observation

### INV-OBS-001 — Contexte préservé

- **Identifier :** `INV-OBS-001`
- **Énoncé :** une Observation doit conserver sa Source et le contexte nécessaire pour comprendre ce qui a été constaté et dans quelles circonstances.
- **Justification :** un constat privé de contexte peut changer de sens ou être appliqué à tort à une autre situation.
- **Conséquence si violé :** l'Observation devient ambiguë et ne peut plus soutenir un raisonnement fiable.
- **Objets concernés :** Observation, Source, Inventaire, Article d'inventaire, Emplacement, Statut.

### INV-OBS-002 — Constat distinct de la conclusion

- **Identifier :** `INV-OBS-002`
- **Énoncé :** une Observation ne devient pas automatiquement une Information d'inventaire retenue, un Statut ou une décision sur l'Inventaire.
- **Justification :** constater, interpréter et accepter une conclusion sont des responsabilités distinctes.
- **Conséquence si violé :** une perception partielle ou erronée pourrait être présentée comme une vérité établie.
- **Objets concernés :** Observation, Information d'inventaire, Élément probant, Statut, Changement, Article d'inventaire.

## Éléments probants

### INV-EVD-001 — Élément probant identifiable

- **Identifier :** `INV-EVD-001`
- **Énoncé :** un Élément probant doit posséder une Source identifiable et préciser l'Information d'inventaire ou l'interprétation d'Observation qu'il soutient, nuance ou contredit.
- **Justification :** un Élément probant sans cible ni provenance compréhensible n'apporte aucune justification vérifiable.
- **Conséquence si violé :** la confiance accordée à l'information reposerait sur une association implicite.
- **Objets concernés :** Élément probant, Source, Information d'inventaire, Observation, Documentation, Article d'inventaire.

### INV-EVD-002 — Élément probant distinct de la vérité

- **Identifier :** `INV-EVD-002`
- **Énoncé :** aucun Élément probant ne confère, par sa seule présence, un caractère certain ou définitif à l'Information qu'il soutient.
- **Justification :** plusieurs éléments probants peuvent être incomplets, obsolètes ou contradictoires.
- **Conséquence si violé :** un indice serait traité comme une preuve absolue et l'incertitude serait masquée.
- **Objets concernés :** Élément probant, Information d'inventaire, Observation, Documentation, Statut.

### INV-EVD-003 — Contradiction conservée

- **Identifier :** `INV-EVD-003`
- **Énoncé :** des Éléments probants contradictoires doivent rester distinguables jusqu'à ce qu'un arbitrage explicite permette de les interpréter.
- **Justification :** supprimer l'élément contraire ne résout pas le conflit et détruit la traçabilité du raisonnement.
- **Conséquence si violé :** l'état retenu semblerait certain alors qu'il résulte d'un choix non documenté.
- **Objets concernés :** Élément probant, Information d'inventaire, Observation, Documentation, Changement, Historique.

## Documentation

### INV-DOC-001 — Documentation distincte de l'objet et de l'autorité

- **Identifier :** `INV-DOC-001`
- **Énoncé :** la Documentation doit posséder une Source, rester distincte de l'objet qu'elle décrit et ne faire autorité ni jouer le rôle d'Élément probant par sa seule existence.
- **Justification :** un document peut être incomplet, générique, ancien ou concerner un autre article similaire.
- **Conséquence si violé :** le contenu documentaire pourrait remplacer abusivement l'observation du bien réel.
- **Objets concernés :** Documentation, Source, Article d'inventaire, Observation, Élément probant, Information d'inventaire.

## Historique

### INV-HIS-001 — Continuité des changements significatifs

- **Identifier :** `INV-HIS-001`
- **Énoncé :** tout Changement qui modifie de manière significative une Information retenue, une identité, une appartenance, un Emplacement, un Statut ou une Relation doit rester compréhensible dans l'Historique.
- **Justification :** l'état courant ne suffit pas à expliquer comment et pourquoi la connaissance a évolué.
- **Conséquence si violé :** les états antérieurs et les arbitrages deviendraient impossibles à reconstituer.
- **Objets concernés :** Historique, Changement, Inventaire, Article d'inventaire, Information d'inventaire.

## Relations

### INV-REL-001 — Relation explicite et signifiante

- **Identifier :** `INV-REL-001`
- **Énoncé :** toute Relation doit identifier les objets qu'elle associe et exprimer un sens métier compréhensible, y compris lorsqu'elle préserve une continuité entre deux Inventaires.
- **Justification :** la simple proximité entre deux objets ne suffit pas à établir la nature de leur lien.
- **Conséquence si violé :** la relation pourrait être interprétée de plusieurs façons incompatibles.
- **Objets concernés :** Relation et les objets du domaine qu'elle associe.

### INV-REL-002 — Absence d'implication cachée

- **Identifier :** `INV-REL-002`
- **Énoncé :** une Relation ne doit pas impliquer une propriété, une dépendance, une hiérarchie ou une causalité qui n'a pas été explicitement établie.
- **Justification :** un lien ne porte que le sens qui lui est reconnu dans le domaine.
- **Conséquence si violé :** des conclusions non justifiées pourraient modifier la compréhension ou le traitement des articles liés.
- **Objets concernés :** Relation, Article d'inventaire, Documentation.

## Localisation

### INV-LOC-001 — Nature de la localisation explicite

- **Identifier :** `INV-LOC-001`
- **Énoncé :** un Emplacement doit permettre de distinguer une situation observée, une situation attendue et une situation incertaine.
- **Justification :** savoir où un article devrait se trouver n'équivaut pas à constater sa présence.
- **Conséquence si violé :** l'utilisateur pourrait rechercher au mauvais endroit ou considérer à tort un article comme présent ou perdu.
- **Objets concernés :** Emplacement, Article d'inventaire, Observation, Statut.

## Catalogues

### INV-CAT-001 — Organisation distincte du périmètre

- **Identifier :** `INV-CAT-001`
- **Énoncé :** un Catalogue ou une Catégorie peut organiser des Articles d'inventaire, mais ne détermine ni leur identité ni leur appartenance à l'Inventaire.
- **Justification :** organiser la consultation est une responsabilité différente de définir le périmètre inventorié.
- **Conséquence si violé :** retirer un article d'un catalogue ou changer sa catégorie pourrait être interprété comme sa suppression de l'inventaire.
- **Objets concernés :** Catalogue, Catégorie, Inventaire, Article d'inventaire.

## Changement

### INV-CHG-001 — Changement explicable et non destructif

- **Identifier :** `INV-CHG-001`
- **Énoncé :** un Changement doit exprimer une évolution ayant un sens métier et ne doit pas réécrire silencieusement les Informations antérieurement retenues.
- **Justification :** une évolution n'est compréhensible que si la situation précédente et la raison du changement restent accessibles.
- **Conséquence si violé :** l'état courant pourrait contredire le passé sans explication et rompre la confiance dans l'inventaire.
- **Objets concernés :** Changement, Historique, Information d'inventaire, Observation, Inventaire, Article d'inventaire.

## Statut

### INV-STA-001 — Statut contextualisé

- **Identifier :** `INV-STA-001`
- **Énoncé :** un Statut doit exprimer un état métier déterminé sans remplacer les Informations, Observations, Éléments probants ou incertitudes qui permettent de le comprendre.
- **Justification :** un statut synthétise une position retenue, mais ne contient pas toute la connaissance disponible.
- **Conséquence si violé :** une qualification courte pourrait masquer un conflit, une information manquante ou un changement en cours d'examen.
- **Objets concernés :** Statut, Article d'inventaire, Information d'inventaire, Observation, Élément probant, Changement.

## Cohérence globale

### INV-COH-001 — Conflit explicite

- **Identifier :** `INV-COH-001`
- **Énoncé :** deux Informations d'inventaire incompatibles ne doivent pas être présentées simultanément comme une connaissance acceptée et non contestée.
- **Justification :** le domaine peut contenir des désaccords, mais il doit les distinguer d'un état cohérent.
- **Conséquence si violé :** l'utilisateur ne pourrait pas déterminer quelle compréhension guide l'inventaire.
- **Objets concernés :** tous les objets du domaine portant ou expliquant une information.

### INV-COH-002 — L'inconnu reste inconnu

- **Identifier :** `INV-COH-002`
- **Énoncé :** une Information absente, insuffisamment étayée ou non arbitrée doit rester inconnue, incertaine ou contestée selon le cas.
- **Justification :** la complétude apparente ne doit jamais être obtenue en inventant ou en déduisant une certitude injustifiée.
- **Conséquence si violé :** l'inventaire donnerait une confiance trompeuse et pourrait conduire à des décisions erronées.
- **Objets concernés :** Inventaire, Article d'inventaire, Information d'inventaire, Observation, Élément probant, Documentation, Emplacement, Statut, Historique.

## Conflits possibles

Les conflits suivants appartiennent au domaine et ne doivent pas être masqués :

- deux articles revendiquent la même identité ou un article semble exister en double ;
- des Observations décrivent des situations incompatibles ;
- des Éléments probants soutiennent des Informations opposées ;
- une Documentation contredit une Observation du bien réel ;
- un Emplacement attendu diffère du dernier Emplacement observé ;
- plusieurs Statuts paraissent applicables au même moment ;
- un Catalogue ou une Catégorie suggère une appartenance différente du périmètre de l'Inventaire ;
- deux Changements proposent des chronologies incompatibles.

L'existence d'un conflit ne constitue pas en elle-même une violation. Le conflit devient une violation lorsqu'il est dissimulé, résolu sans trace ou présenté comme une connaissance univoque.

## Ambiguïtés métier

Une ambiguïté apparaît lorsque plusieurs interprétations restent raisonnables avec la connaissance disponible. Les ambiguïtés les plus probables concernent :

- la frontière entre deux articles similaires et un même article observé à des moments différents ;
- la différence entre absence temporaire, perte, sortie du périmètre et existence incertaine ;
- la portée d'une Documentation générique par rapport à un article particulier ;
- le niveau de précision nécessaire pour qu'un Emplacement soit utile ;
- le seuil à partir duquel une évolution devient un Changement significatif ;
- le sens exact d'une Relation lorsque son contexte est incomplet.

Une ambiguïté doit rester nommée tant qu'aucun arbitrage n'est suffisamment fondé.

## Arbitrages attendus

Lorsqu'un conflit ou une ambiguïté affecte la connaissance acceptée :

1. les constats, interprétations et informations acceptées sont distingués ;
2. les Sources, Observations, Informations, Éléments probants et Documentation pertinents sont conservés avec leur contexte ;
3. les informations incompatibles restent visibles pendant l'examen ;
4. la pertinence, le contexte et l'actualité des éléments disponibles sont appréciés ;
5. l'utilisateur valide explicitement la position retenue ;
6. toute évolution de la connaissance acceptée devient un Changement compréhensible dans l'Historique ;
7. si aucun choix n'est suffisamment fondé, le résultat reste incertain, contesté ou inconnu.

Un arbitrage choisit la compréhension qui guide l'inventaire. Il ne transforme pas rétroactivement les éléments contraires en informations inexistantes.

## Cas volontairement laissés ouverts

Les invariants ne tranchent pas encore :

- si une Relation peut viser un objet extérieur à tout Inventaire ;
- combien de Catégories ou de Catalogues peuvent organiser un même article ;
- quels Statuts métier seront nécessaires et comment leur sens sera gouverné ;
- comment comparer la force relative de plusieurs Éléments probants ;
- quelles évolutions sont suffisamment significatives pour appartenir à l'Historique ;
- quels critères détaillés distinguent un transfert, une décomposition et une correction d'identité.

Ces questions nécessitent des décisions produit distinctes. Tant qu'elles restent ouvertes, aucune interprétation ne doit être présentée comme une règle du domaine.
