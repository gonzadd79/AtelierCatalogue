# Semantic Reference

Ce document organise les concepts employés par DevelopmentPlaybook. Il constitue leur référence officielle et accueille chaque concept sous une entrée autonome.

## Metamodel

### Concept

Status: Approved

#### Definition

Un concept est une unité de sens distincte et durable qui représente une seule idée. Son identité réside dans sa signification, indépendamment du nom qui le désigne, de l'entrée documentaire qui le décrit ou de la représentation qui le rend visible.

#### Purpose

Il fournit une signification commune et stable qui peut être comprise, utilisée et reliée à d'autres significations sans dépendre d'une formulation ou d'un format particulier.

#### Rules

- Un concept doit représenter une seule idée identifiable.
- Son nom le désigne mais ne constitue pas sa signification.
- Son entrée documentaire le décrit mais ne se confond pas avec lui.
- Sa représentation peut évoluer sans modifier son identité tant que sa signification demeure inchangée.
- Une même signification ne doit pas être introduite sous plusieurs noms comme des concepts distincts.
- Sa définition doit permettre de le comprendre indépendamment de ses relations avec d'autres concepts.

#### Examples

- Une même notion conserve son identité lorsqu'elle est désignée par un autre nom sans changement de sens.
- Une notion présentée successivement dans un paragraphe, un tableau ou un schéma reste le même concept.
- Deux entrées portant des noms différents mais exprimant exactement la même idée représentent un seul concept.

#### Related Concepts

- Definition
- Semantic Relation
- Semantic Domain

### Definition

Status: Approved

#### Definition

Une définition est un énoncé autonome qui établit la signification essentielle d'un concept et permet de le distinguer des autres. Elle est indépendante de sa représentation documentaire ; la section intitulée `Definition` est uniquement le conteneur qui l'accueille dans une entrée.

#### Purpose

Elle fournit une compréhension précise, stable et partagée du concept afin que son usage ne dépende ni du contexte immédiat ni d'une interprétation implicite.

#### Rules

- Une définition doit porter sur un seul concept.
- Elle doit exprimer sa signification essentielle de manière claire et non ambiguë.
- Elle doit permettre de distinguer le concept des notions avec lesquelles il pourrait être confondu.
- Elle doit pouvoir être comprise sans dépendre des exemples ou des relations associés au concept.
- Elle ne doit pas être confondue avec son titre, sa mise en forme ou la section documentaire qui la contient.
- Une modification de représentation ne constitue pas une modification de la définition tant que le sens demeure inchangé.

#### Examples

- Un même énoncé conserve sa fonction de définition lorsqu'il est présenté dans une page, une fiche ou un tableau.
- Le déplacement d'une définition vers un autre conteneur documentaire ne modifie pas le concept qu'elle définit.
- Une illustration peut faciliter la compréhension d'une définition sans en faire partie.

#### Related Concepts

- Concept

### Semantic Relation

Status: Approved

#### Definition

Une relation sémantique est un lien explicite de sens entre deux concepts. Elle signale que leur compréhension peut être rapprochée sans définir l'un par l'autre.

#### Purpose

Elle rend visibles les rapprochements utiles entre les concepts et facilite la navigation dans le modèle sans compromettre leur autonomie.

#### Rules

- Une relation sémantique doit relier des concepts existants et distincts.
- Elle doit exprimer un lien de sens pertinent pour leur compréhension.
- Elle doit compléter les définitions sans s'y substituer.
- Elle ne doit pas être nécessaire pour comprendre la signification essentielle de l'un des concepts reliés.
- Elle n'implique par elle-même ni équivalence, ni dépendance, ni hiérarchie, ni autorité.
- Elle peut être représentée par une liste de Related Concepts sans se confondre avec cette représentation.
- Aucun type de relation ne doit être introduit sans besoin distinct et durable.

#### Examples

- Deux concepts peuvent être reliés parce que leur distinction évite une confusion fréquente.
- Un concept peut être relié à un autre qui complète sa compréhension sans participer à sa définition.
- Le même lien de sens peut être présenté dans une liste ou un schéma sans changer de nature.

#### Related Concepts

- Concept

### Semantic Domain

Status: Approved

#### Definition

Un domaine sémantique est un ensemble cohérent de concepts réunis autour d'un sujet commun afin de faciliter leur organisation et leur gouvernance. Il ne possède aucune autorité propre ; l'autorité des définitions demeure celle du Semantic Reference.

#### Purpose

Il permet d'examiner, de maintenir et de faire évoluer ensemble des concepts qui participent à une même compréhension générale, sans réduire leur autonomie individuelle.

#### Rules

- Un domaine sémantique doit regrouper des concepts présentant une cohérence de sujet identifiable.
- Il doit faciliter leur organisation et leur gouvernance sans modifier leur signification.
- Il ne doit posséder aucune autorité distincte de celle de la référence qui contient les concepts.
- Il existe indépendamment de sa représentation ; une catégorie Markdown peut le rendre visible mais ne le constitue pas.
- Il ne doit pas être confondu avec un Scope, qui délimite ce qui est inclus ou exclu d'une initiative.
- Il ne doit pas être confondu avec une Reference, qui est un artefact documentaire doté d'un rôle déclaré.
- L'appartenance à un domaine ne doit pas remplacer la définition autonome d'un concept.

#### Examples

- Un domaine peut réunir des concepts décrivant la direction et les limites d'une initiative.
- Un domaine peut regrouper les notions nécessaires pour décrire des artefacts documentaires.
- Un même domaine reste inchangé lorsqu'il est représenté par une section, un index ou une autre organisation documentaire.

#### Related Concepts

- Concept

## Product

### Vision

Status: Approved

#### Definition

Une vision est une description concise de l'état futur recherché pour un produit, un projet ou une organisation, ainsi que de la valeur durable que cet état doit rendre possible. Elle donne une direction commune sans préciser les moyens de l'atteindre.

#### Purpose

Elle aligne durablement les décisions et les efforts autour d'une aspiration commune afin que les évolutions successives contribuent à la même direction.

#### Rules

- Une vision doit décrire un état futur et la valeur qui lui est associée.
- Elle doit exprimer une direction durable plutôt qu'une réponse à une circonstance temporaire.
- Elle doit être concise et compréhensible sans explication détaillée.
- Elle ne doit prescrire ni solution, ni méthode, ni moyen particulier.
- Elle ne doit pas énumérer de résultats détaillés, d'étapes ou de livrables.
- Elle ne doit définir ni l'activité quotidienne, ni les limites précises du travail.
- Elle doit être suffisamment ambitieuse pour orienter les choix tout en restant crédible.

#### Examples

- Une éducation de qualité est accessible à chacun, quels que soient son lieu et ses ressources.
- Chaque déplacement urbain est une expérience sûre, simple et inclusive.
- Les organisations transforment durablement leur connaissance collective en décisions comprises et partagées.

#### Related Concepts

- Mission
- Goal
- Scope

### Mission

Status: Approved

#### Definition

Une mission est l'énoncé concis de la raison d'être d'un produit, d'un projet ou d'une organisation. Elle précise la valeur apportée, les bénéficiaires de cette valeur et le rôle durable assumé pour la produire.

#### Purpose

Elle relie l'activité présente à une contribution utile et fournit un repère stable pour orienter les décisions vers cette contribution.

#### Rules

- Une mission doit exprimer une raison d'être et la valeur apportée.
- Elle doit indiquer à qui ou à quoi cette valeur bénéficie.
- Elle doit décrire un rôle durable exercé dans le présent, et non un état futur recherché.
- Elle doit être concise, compréhensible et suffisamment stable pour guider les décisions dans le temps.
- Elle ne doit prescrire ni solution, ni méthode, ni moyen particulier.
- Elle ne doit pas énumérer de résultats détaillés, d'étapes ou de livrables.
- Elle ne doit pas définir les limites précises du travail.
- Elle doit être compatible avec la vision sans la répéter.

#### Examples

- Aider les petites organisations à rendre leurs informations essentielles claires, accessibles et durables.
- Faciliter l'accès autonome des personnes aux services dont elles ont besoin au quotidien.
- Préserver et transmettre des connaissances fiables afin de soutenir des décisions comprises et partagées.

#### Related Concepts

- Vision
- Goal
- Scope

### Goal

Status: Approved

#### Definition

Un goal est l'énoncé d'un résultat recherché, observable et intentionnel qu'un produit, un projet ou une organisation cherche à atteindre. Il traduit une direction en changement attendu sans prescrire la manière de le produire.

#### Purpose

Il concentre les décisions et les efforts sur un résultat explicite, permet d'en apprécier la progression et indique ce que la réussite doit rendre observable.

#### Rules

- Un goal doit exprimer un résultat attendu plutôt qu'une activité ou un livrable.
- Il doit être observable au moyen d'éléments permettant d'apprécier sa progression ou son atteinte.
- Il doit préciser la valeur ou le changement recherché.
- Il doit être formulé de manière claire et non ambiguë.
- Il doit rester compatible avec la vision et contribuer à la mission.
- Il ne doit prescrire ni méthode, ni solution, ni séquence de travail.
- Il ne doit pas définir les limites précises du produit, du projet ou de l'organisation.
- Son horizon ou ses conditions d'atteinte doivent être indiqués lorsqu'ils sont nécessaires pour l'évaluer.

#### Examples

- Réduire de moitié le délai moyen nécessaire pour traiter une demande complète.
- Permettre à neuf personnes sur dix d'accomplir une démarche essentielle sans assistance.
- Faire en sorte que chaque décision active dispose d'une justification accessible lors de la prochaine revue.

#### Related Concepts

- Vision
- Mission
- Non-goal
- Scope

### Non-goal

Status: Approved

#### Definition

Un non-goal est l'énoncé explicite d'un résultat qu'un produit, un projet ou une organisation choisit de ne pas rechercher. Il établit une limite d'intention afin qu'une attente étrangère à la direction retenue ne soit pas interprétée comme un engagement.

#### Purpose

Il clarifie les ambitions volontairement écartées, prévient les attentes erronées et aide à préserver la cohérence des décisions.

#### Rules

- Un non-goal doit exprimer un choix intentionnel.
- Il doit décrire un résultat non recherché, et non une activité ou un élément simplement absent du travail.
- Il ne doit représenter ni une incapacité, ni une contrainte, ni une limitation temporaire.
- Un travail différé ne devient pas un non-goal du seul fait qu'il n'est pas réalisé immédiatement.
- Il doit être formulé de manière explicite et non ambiguë ; il ne peut pas être déduit d'un simple silence.
- Sa justification doit être indiquée lorsqu'elle est nécessaire pour éviter une interprétation erronée.
- Il doit rester compatible avec la vision, la mission et les goals approuvés.
- Il demeure valable jusqu'à ce qu'un changement d'intention explicite le remplace.

#### Examples

- Ne pas chercher à imposer une manière unique de travailler.
- Ne pas viser l'autonomie totale au détriment de la responsabilité des décisions.
- Ne pas considérer le nombre de fonctionnalités comme une mesure suffisante de réussite.

#### Related Concepts

- Goal
- Vision
- Mission
- Scope

### Scope

Status: Approved

#### Definition

Un scope est l'énoncé des limites du périmètre couvert par un produit, un projet, une initiative ou une organisation. Il précise les sujets, les situations ou les populations inclus et exclus, sans décrire la manière dont le travail est réalisé.

#### Purpose

Il établit une compréhension commune de ce qui relève ou non du périmètre et permet de déterminer si un élément donné doit être considéré dans ce cadre.

#### Rules

- Un scope doit identifier clairement l'entité et le contexte auxquels il s'applique.
- Il doit rendre explicites les inclusions et les exclusions nécessaires à la compréhension du périmètre.
- Ses limites doivent reposer sur des critères suffisamment précis pour traiter les cas courants sans ambiguïté.
- Il ne doit formuler ni état futur recherché, ni raison d'être, ni résultat attendu ou volontairement écarté.
- Il ne doit décrire ni moyens, ni activités, ni priorités, ni contraintes techniques.
- Un élément exclu du scope ne devient pas un non-goal du seul fait de cette exclusion.
- Toute ambiguïté sur une limite doit être résolue en précisant le critère d'inclusion ou d'exclusion concerné.
- Toute évolution du périmètre doit résulter d'un changement explicite du scope.

#### Examples

- Le périmètre couvre les demandes provenant des équipes internes et exclut celles émises par des partenaires externes.
- Le périmètre concerne les établissements situés dans une région définie et exclut ceux situés hors de cette région.
- Le périmètre couvre les équipements détenus par une organisation et exclut les biens confiés temporairement par des tiers.

#### Related Concepts

- Vision
- Mission
- Goal
- Non-goal

## Documentation

### Document

Status: Approved

#### Definition

Un document est un ensemble structuré d'informations conçu pour être consulté et compris comme une unité. Il communique, conserve ou encadre un sujet pour un public et un usage déterminés.

#### Purpose

Il rend une information accessible, partageable et durable afin de soutenir la compréhension, l'action et la continuité d'un projet.

#### Rules

- Un document possède un objectif, un périmètre et un public identifiables.
- Sa structure doit faciliter la recherche et la compréhension de l'information.
- Son statut et son niveau d'autorité doivent être explicites.
- Toute information inconnue, incomplète ou incertaine doit être signalée comme telle.
- Sa responsabilité et ses conditions de révision doivent pouvoir être déterminées.
- Il doit rester cohérent avec les références qui font autorité et rendre visibles les divergences éventuelles.
- Il est actualisé lorsque son sujet évolue ou clairement signalé lorsqu'il devient obsolète.

#### Examples

- Une présentation générale expose le contexte, les objectifs et le périmètre d'une initiative.
- Une procédure décrit une suite d'actions et les conditions de leur réalisation.
- Une spécification énonce les exigences et les limites d'un produit.
- Un rapport de revue consigne des observations et une conclusion.

#### Related Concepts

- Artifact
- Reference
- Source of Truth
- Template
- Example

### Artifact

Status: Approved

#### Definition

Un artefact est un résultat identifiable produit, utilisé ou maintenu au cours d'un projet. Il matérialise une information, une décision, un livrable ou une preuve utile à la conduite et à la compréhension du projet.

#### Purpose

Il rend un résultat observable, consultable, transmissible et vérifiable afin qu'il puisse soutenir le travail collectif et conserver sa valeur dans le temps.

#### Rules

- Un artefact possède un objectif identifiable.
- Son contenu et sa forme doivent être adaptés à l'usage auquel il est destiné.
- Sa responsabilité et son état doivent pouvoir être déterminés.
- Son origine et ses relations avec d'autres artefacts doivent rester traçables lorsque cela est nécessaire.
- Il est maintenu tant qu'il demeure utile ou fait autorité, puis clairement signalé lorsqu'il devient obsolète.
- Son caractère officiel, dérivé ou informatif doit être explicite.

#### Examples

- Une feuille de route présente les grandes étapes d'évolution d'un produit.
- Un relevé de décision consigne un choix, sa justification et ses conséquences.
- Un rapport de revue conserve les constats et la conclusion d'une évaluation.
- Un template établit la structure attendue d'un livrable récurrent.

#### Related Concepts

- Document
- Reference
- Template
- Example
- Source of Truth

### Reference

Status: Approved

#### Definition

Une référence est un artefact explicitement désigné comme point de consultation reconnu pour un sujet et un périmètre donnés. Contrairement à un document, dont la nature ne présume pas l'autorité, une référence se distingue par le rôle qui lui est attribué dans l'interprétation, la décision ou la vérification d'une information.

#### Purpose

Elle fournit un repère commun et fiable pour retrouver, comprendre ou vérifier une information, tout en réduisant les interprétations divergentes.

#### Rules

- Le rôle de référence doit être attribué explicitement.
- Son sujet, son périmètre et son niveau d'autorité doivent être identifiables.
- Elle doit être accessible aux personnes qui en ont l'usage.
- Elle doit être tenue à jour tant qu'elle conserve son rôle ou clairement signalée lorsqu'elle ne fait plus autorité.
- Lorsque plusieurs références couvrent un même sujet, leur priorité ou leur complémentarité doit être explicite.
- Une copie ou une synthèse ne devient pas une référence sans désignation explicite.
- Une référence peut conduire à une source de vérité sans être elle-même cette source.

#### Examples

- Un document terminologique approuvé sert de référence pour les termes officiels d'une organisation.
- Une politique publiée sert de référence pour les règles applicables dans son périmètre.
- Un registre maintenu sert de référence pour consulter l'état reconnu des éléments suivis.

#### Related Concepts

- Source of Truth
- Artifact
- Document

### Template

Status: Approved

#### Definition

Un template est une structure réutilisable qui organise les éléments attendus lors de la création d'artefacts cohérents. Il fournit une forme, des rubriques ou des repères à compléter sans déterminer le contenu propre à chaque artefact.

#### Purpose

Il facilite la production répétée d'artefacts comparables, réduit les omissions et préserve une structure commune sans remplacer le jugement nécessaire à leur contenu.

#### Rules

- Un template possède un objectif et un type d'artefact attendu clairement identifiables.
- Il ne contient que la structure, les repères et les indications nécessaires à son remplissage.
- Les éléments fixes doivent être distingués des éléments à compléter.
- Il reste générique et ne préjuge pas du contenu propre à un usage particulier.
- Son utilisation ne garantit ni la qualité, ni l'approbation, ni l'autorité de l'artefact produit.
- Il évolue lorsque les besoins communs de structure changent, sans altérer rétroactivement les artefacts déjà produits.
- Chaque artefact produit demeure autonome et doit pouvoir être compris indépendamment du template.

#### Examples

- Une structure de rapport de revue indique les rubriques attendues sans fournir les constats.
- Un cadre de relevé de décision réserve des emplacements pour le contexte, le choix et les conséquences.
- Une trame de présentation initiale organise les objectifs, le périmètre et les parties prenantes à renseigner.

#### Related Concepts

- Artifact
- Document
- Reference

### Example

Status: Approved

#### Definition

Un exemple est une illustration concrète et non normative d'une manière possible d'appliquer, de représenter ou de comprendre une idée, une règle ou une structure. Il présente un cas particulier sans prescrire sa reproduction.

#### Purpose

Il rend une notion abstraite plus facile à comprendre, montre un résultat possible et aide à interpréter une intention sans exclure d'autres solutions valides.

#### Rules

- Un exemple doit être clairement présenté comme illustratif et non obligatoire.
- Son contexte et ses hypothèses doivent être suffisamment explicites pour éviter une généralisation abusive.
- Il doit rester cohérent avec l'idée, la règle ou la structure qu'il illustre.
- Il doit privilégier la clarté et ne pas introduire implicitement de nouvelles exigences.
- Une variation par rapport à un exemple n'est pas une erreur lorsqu'elle respecte les exigences applicables.
- Lorsqu'il illustre un template, il montre une manière de le compléter sans modifier ni remplacer sa structure.
- Il ne devient ni une référence ni une source de vérité par sa seule existence.

#### Examples

- Un dossier fictif complété montre une utilisation possible d'un template de cadrage.
- Un relevé de décision fictif illustre un niveau de détail adapté à une situation donnée.
- Une entrée terminologique renseignée montre une présentation possible d'une définition.

#### Related Concepts

- Template
- Artifact
- Document
- Reference
- Source of Truth

### Prompt

Status: Approved

#### Definition

Un prompt est un ensemble d'instructions fourni à un système capable de les interpréter afin de guider l'exécution d'une tâche ou l'adoption d'un comportement. Il exprime une intention, les contraintes applicables et, lorsque nécessaire, le résultat attendu.

#### Purpose

Il transforme une intention en indications exploitables, réduit les ambiguïtés et oriente l'exécution vers un résultat conforme au besoin exprimé.

#### Rules

- Un prompt doit énoncer clairement la tâche ou le comportement attendu.
- Il doit fournir le contexte nécessaire sans introduire d'informations sans rapport avec l'objectif.
- Les contraintes, priorités et limites applicables doivent être explicites.
- Les instructions doivent être cohérentes et ordonnées lorsque leur séquence est importante.
- Le résultat attendu doit être décrit avec un niveau de précision proportionné au besoin.
- Les informations absentes ou incertaines ne doivent pas être présentées comme acquises.
- Un prompt peut être réutilisable, mais sa nature ne dépend pas de cette réutilisabilité.
- Lorsqu'il utilise un template, il guide son emploi sans se confondre avec la structure fournie par celui-ci.

#### Examples

- Une instruction demande de résumer un document pour un public donné dans une longueur déterminée.
- Une instruction guide la comparaison de deux artefacts selon des points explicitement indiqués.
- Une instruction demande de produire un document à partir d'informations fournies et d'un template, tout en signalant les éléments manquants.

#### Related Concepts

- Artifact
- Document
- Template
- Example

## Methodology

### Knowledge

Status: Approved

#### Definition

Une connaissance est une compréhension tenue pour suffisamment fondée pour informer un jugement, une décision ou une action. Elle reste révisable lorsque de nouveaux éléments remettent en cause ce qui la soutient.

#### Purpose

Elle rend une compréhension utilisable, partageable et durable sans la présenter comme une certitude définitive.

#### Rules

- Une connaissance doit reposer sur des éléments identifiables plutôt que sur une affirmation sans fondement.
- Son niveau d'incertitude et les limites de sa validité doivent rester explicites lorsqu'ils sont pertinents.
- Une observation isolée ne devient pas une connaissance sans interprétation suffisamment étayée.
- Elle doit pouvoir être révisée lorsqu'une validation ou de nouvelles observations la contredisent.
- Sa reconnaissance comme connaissance ne lui confère pas automatiquement une autorité normative.
- Elle peut exister avant, pendant ou après un cycle d'évolution de la connaissance.

#### Examples

- Une régularité constatée dans plusieurs situations comparables est retenue comme suffisamment fiable pour orienter de prochains choix.
- Une explication est considérée comme établie après avoir été confrontée à plusieurs observations concordantes.
- Une compréhension précédemment admise est révisée lorsque de nouveaux éléments montrent qu'elle ne vaut que dans certaines conditions.

#### Related Concepts

- Observation
- Validation

### Observation

Status: Approved

#### Definition

Une observation est l'énoncé explicite d'un phénomène constaté dans un contexte donné, sans lui attribuer par elle-même une explication ni décider de ses conséquences.

#### Purpose

Elle rend un constat disponible pour être examiné, comparé ou utilisé comme point de départ d'une évolution de la connaissance.

#### Rules

- Une observation doit décrire ce qui est constaté sans le présenter comme une explication.
- Son contexte et ses conditions doivent être indiqués lorsqu'ils influencent sa compréhension.
- Toute incertitude concernant le constat doit rester visible.
- Elle ne constitue par elle-même ni une décision ni une connaissance établie.
- Elle peut être conservée sans conduire obligatoirement à une question ou à une action ultérieure.

#### Examples

- Un même résultat varie régulièrement lorsque les conditions d'utilisation changent.
- Une information est interprétée différemment par plusieurs personnes confrontées au même énoncé.
- Un comportement attendu ne se produit pas dans une situation précisément décrite.

#### Related Concepts

- Knowledge
- Question

### Question

Status: Approved

#### Definition

Une question est la formulation explicite d'une incertitude dont la résolution améliorerait la compréhension d'un sujet. Elle précise ce qui doit être examiné sans présumer de la réponse.

#### Purpose

Elle délimite l'incertitude à traiter et oriente l'examen vers un besoin de connaissance identifiable.

#### Rules

- Une question doit rendre l'incertitude compréhensible et suffisamment précise pour être examinée.
- Elle ne doit contenir ni réponse implicite ni choix déjà arrêté.
- Elle peut provenir d'une observation, d'une contradiction ou d'une limite de connaissance.
- Elle doit rester ouverte à plusieurs réponses possibles tant qu'aucun élément ne permet de les départager.
- Elle n'impose pas la formulation immédiate d'une hypothèse.

#### Examples

- Quelles conditions expliquent la variation observée entre deux situations comparables ?
- Quelle information manque pour distinguer deux interprétations possibles ?
- Le constat reste-t-il valable lorsque le contexte change ?

#### Related Concepts

- Observation
- Hypothesis

### Hypothesis

Status: Approved

#### Definition

Une hypothèse est une proposition provisoire susceptible d'expliquer un phénomène ou de répondre à une question et pouvant être examinée à partir d'éléments pertinents.

#### Purpose

Elle rend une explication ou une réponse possible explicite afin qu'elle puisse être comparée, discutée et éprouvée sans être confondue avec une connaissance établie.

#### Rules

- Une hypothèse doit exprimer une proposition identifiable et examinable.
- Elle doit rester présentée comme provisoire tant qu'elle n'est pas suffisamment étayée.
- Plusieurs hypothèses peuvent coexister pour une même question.
- Elle doit pouvoir être confrontée à des observations, des connaissances ou d'autres éléments pertinents.
- Son rejet ne constitue pas un échec lorsque son examen réduit l'incertitude.
- Elle ne devient ni une décision ni une connaissance par sa seule formulation.

#### Examples

- La variation constatée pourrait dépendre d'une condition présente dans un seul des contextes observés.
- Deux interprétations divergentes pourraient provenir d'un terme insuffisamment défini.
- Un résultat inattendu pourrait être lié à une hypothèse initiale qui ne vaut pas dans toutes les situations.

#### Related Concepts

- Question
- Review

### Review

Status: Approved

#### Definition

Une review est un examen structuré d'un ou plusieurs éléments visant à apprécier leur cohérence, leur pertinence et le niveau de soutien dont ils disposent. Elle confronte les interprétations possibles sans déterminer automatiquement le choix à retenir.

#### Purpose

Elle rend l'évaluation explicite, met en évidence les accords et les divergences et fournit des éléments utiles à une décision ou à un approfondissement.

#### Rules

- Une review doit préciser les éléments examinés et les critères utilisés.
- Elle doit distinguer les constats disponibles des interprétations qui en sont tirées.
- Elle peut confronter plusieurs hypothèses sans devoir en retenir une.
- Ses conclusions et les incertitudes restantes doivent être explicites.
- Elle ne constitue pas automatiquement une décision, une validation ou une approbation.
- Elle peut être réalisée chaque fois qu'un examen structuré apporte une valeur, sans dépendre d'une séquence obligatoire.

#### Examples

- Plusieurs explications possibles sont comparées aux observations disponibles et leurs limites respectives sont consignées.
- Un ensemble d'énoncés est examiné afin d'identifier les contradictions et les ambiguïtés.
- Les éléments soutenant un choix envisagé sont confrontés aux incertitudes encore présentes.

#### Related Concepts

- Hypothesis
- Decision

### Decision

Status: Approved

#### Definition

Une décision est un choix explicite entre plusieurs possibilités ou orientations, effectué à partir des éléments disponibles dans un périmètre donné. Elle établit ce qui est retenu sans transformer ce choix en vérité générale.

#### Purpose

Elle permet d'orienter la suite des actions tout en conservant la raison du choix, son périmètre et les incertitudes qui subsistent.

#### Rules

- Une décision doit exprimer clairement le choix retenu.
- Son périmètre, sa justification et ses conséquences significatives doivent pouvoir être identifiés.
- Les incertitudes pertinentes ne doivent pas être masquées par le fait qu'un choix a été arrêté.
- Elle doit pouvoir être réexaminée lorsque les éléments qui la soutiennent évoluent.
- Elle ne transforme pas automatiquement une hypothèse en connaissance.
- Elle peut exister sans être immédiatement mise en application.

#### Examples

- Parmi plusieurs explications possibles, l'une est retenue comme base de travail et les raisons de ce choix sont consignées.
- Une règle commune est choisie pour résoudre une ambiguïté récurrente dans un périmètre défini.
- Une orientation antérieure est remplacée après l'apparition d'éléments qui invalident sa justification.

#### Related Concepts

- Review
- Implementation

### Implementation

Status: Approved

#### Definition

Une implémentation est l'application concrète d'une décision au moyen d'un changement, d'une action, d'une disposition ou d'une pratique observable. Elle matérialise le choix sans démontrer par elle-même qu'il produit le résultat recherché.

#### Purpose

Elle rend les effets d'une décision observables afin qu'ils puissent être utilisés, examinés et éventuellement validés.

#### Rules

- Une implémentation doit pouvoir être reliée à la décision qu'elle applique.
- Elle doit respecter le périmètre et l'intention déclarés de cette décision.
- Elle peut être partielle lorsque ses limites sont explicites.
- Elle ne doit pas être confondue avec le développement logiciel ni limitée à celui-ci.
- Sa réalisation ne constitue ni une validation ni une preuve de pertinence.
- Elle peut être adaptée ou retirée lorsque la décision évolue.

#### Examples

- Une règle choisie est appliquée à un ensemble de situations afin de rendre ses effets observables.
- Une nouvelle manière de classer une information est mise en pratique dans le périmètre retenu.
- Une orientation est matérialisée par un changement d'organisation dont les résultats pourront être examinés.

#### Related Concepts

- Decision
- Validation

### Validation

Status: Approved

#### Definition

Une validation est une évaluation fondée sur des éléments observables visant à déterminer si une proposition, une décision, une implémentation ou une connaissance demeure suffisamment soutenue dans son périmètre. Elle peut confirmer, nuancer ou remettre en question ce qui est évalué.

#### Purpose

Elle réduit l'incertitude en confrontant ce qui est attendu ou tenu pour valable aux résultats et aux éléments effectivement disponibles.

#### Rules

- Une validation doit préciser ce qui est évalué, dans quel périmètre et sur quels éléments elle repose.
- Ses critères doivent être identifiables avant que sa conclusion soit interprétée.
- Elle doit distinguer les résultats observés de la conclusion qui en est tirée.
- Elle ne doit pas être confondue avec l'implémentation de ce qu'elle évalue.
- Elle ne produit pas une certitude définitive et reste valable dans les limites des éléments examinés.
- Un résultat défavorable ou ambigu doit rester visible et peut conduire à réviser une décision ou une connaissance.
- Elle peut intervenir chaque fois qu'une affirmation doit être éprouvée, sans constituer obligatoirement la dernière étape d'une séquence.

#### Examples

- Les effets observés après l'application d'un choix sont comparés aux résultats attendus.
- Une explication tenue pour valable est réexaminée dans un contexte différent afin d'en vérifier les limites.
- Des éléments nouveaux conduisent à confirmer une compréhension tout en réduisant son domaine de validité.

#### Related Concepts

- Implementation
- Knowledge

## Delivery

### Architecture Decision

Status: Approved

#### Definition

Une architecture decision est un choix explicite et durable qui détermine une structure, une responsabilité, une frontière ou une dépendance significative. Elle conserve le contexte du choix et les conséquences nécessaires à sa compréhension dans le temps.

#### Purpose

Elle rend une orientation structurante compréhensible et réexaminable afin que les évolutions ultérieures restent compatibles avec les raisons qui l'ont fondée.

#### Rules

- Une architecture decision doit porter sur un choix dont les effets dépassent une modification locale ou temporaire.
- Elle doit rendre explicites le problème traité, le choix retenu et ses conséquences significatives.
- Son périmètre et son état doivent pouvoir être identifiés.
- Elle doit conserver les éléments nécessaires pour comprendre pourquoi le choix a été effectué.
- Elle ne doit pas se réduire à une préférence de réalisation ou à un détail d'exécution.
- Elle peut orienter une ou plusieurs epics, mais l'existence de l'une n'impose pas celle de l'autre.
- Elle ne remplace pas les règles durables établies dans les références qui en ont la responsabilité.

#### Examples

- Une organisation choisit de séparer les connaissances normatives des contenus uniquement illustratifs.
- Une responsabilité durable est attribuée à une partie déterminée d'un système afin d'éviter des interprétations concurrentes.
- Une direction de dépendance est retenue entre deux ensembles afin de préserver leur autonomie.

#### Related Concepts

- Epic

### Epic

Status: Approved

#### Definition

Une epic est une unité de planification qui décrit un objectif majeur d'évolution dont la réalisation nécessite plusieurs features cohérentes. Elle exprime le résultat d'ensemble recherché sans détailler chaque unité de travail.

#### Purpose

Elle regroupe et oriente des évolutions complémentaires vers un objectif commun suffisamment important pour dépasser la portée d'une seule feature.

#### Rules

- Une epic doit exprimer un objectif majeur et identifiable.
- Elle doit réunir plusieurs features contribuant au même résultat d'ensemble.
- Son périmètre doit rester suffisamment cohérent pour permettre une appréciation globale de sa progression et de son achèvement.
- Elle ne doit pas détailler les tâches ou les moyens de réalisation.
- Elle doit pouvoir évoluer lorsque les connaissances disponibles modifient la compréhension de l'objectif.
- Elle ne nécessite une architecture decision que lorsqu'un choix architectural durable doit être formalisé.
- La relation entre ses features décrit une composition conceptuelle et n'impose aucun workflow particulier.

#### Examples

- Établir un système complet de gouvernance documentaire au moyen de plusieurs capacités complémentaires.
- Rendre un service durablement accessible en réunissant les évolutions nécessaires à sa consultation, sa compréhension et son usage.
- Structurer la gestion d'une connaissance partagée à travers plusieurs évolutions coordonnées.

#### Related Concepts

- Architecture Decision
- Feature

### Feature

Status: Approved

#### Definition

Une feature est une évolution cohérente qui apporte une capacité identifiable et contribue à l'objectif d'une epic. Elle possède une portée suffisamment délimitée pour que son résultat puisse être compris et évalué.

#### Purpose

Elle transforme une partie d'un objectif majeur en une capacité concrète pouvant être examinée indépendamment tout en restant reliée à l'évolution d'ensemble.

#### Rules

- Une feature doit apporter une capacité ou un résultat identifiable.
- Elle doit contribuer explicitement à une epic.
- Son périmètre doit être cohérent et suffisamment limité pour permettre une évaluation distincte.
- Elle ne doit pas être définie par un moyen, un outil ou une technique de réalisation.
- Elle peut être décomposée en stories lorsque plusieurs unités de travail sont nécessaires.
- Ses conditions d'achèvement doivent être vérifiables.
- Sa relation avec les stories décrit leur contribution conceptuelle et n'impose aucune méthode de conduite du travail.

#### Examples

- Définir les règles permettant d'admettre de nouveaux documents dans un système de gouvernance.
- Fournir une capacité permettant de retrouver une information selon des critères clairement délimités.
- Établir un mécanisme cohérent de validation pour une famille d'éléments.

#### Related Concepts

- Epic
- Story

### Story

Status: Approved

#### Definition

Une story est une unité de travail délimitée qui contribue à une feature en produisant un résultat identifiable. Elle décrit ce qui doit être accompli dans un contexte donné sans imposer la manière de le réaliser.

#### Purpose

Elle rend une contribution suffisamment précise pour être comprise, réalisée et évaluée séparément tout en conservant son lien avec la capacité recherchée.

#### Rules

- Une story doit contribuer à une feature identifiable.
- Elle doit viser un résultat unique et délimité.
- Elle doit fournir le contexte nécessaire pour comprendre la contribution attendue.
- Elle ne doit pas prescrire un outil, une technologie ou une méthode particulière sans nécessité propre au résultat.
- Ses acceptance criteria doivent rendre son achèvement vérifiable.
- Elle peut porter sur une analyse, une décision, une documentation ou toute autre forme de travail utile à la feature.
- Elle ne constitue pas une étape obligatoire d'un workflow particulier.

#### Examples

- Examiner une distinction précise afin de déterminer si elle doit devenir une notion officielle.
- Documenter les conditions permettant d'appliquer une règle dans un périmètre délimité.
- Vérifier qu'une capacité produit le résultat attendu dans une situation représentative.

#### Related Concepts

- Feature
- Acceptance Criteria

### Acceptance Criteria

Status: Approved

#### Definition

Les acceptance criteria sont les conditions explicites et vérifiables permettant de déterminer si une story ou une feature peut être considérée comme terminée dans son périmètre déclaré.

#### Purpose

Ils établissent une compréhension commune du résultat attendu et fournissent une base observable pour en apprécier l'achèvement.

#### Rules

- Les acceptance criteria doivent être rattachés à une story ou à une feature identifiable.
- Chaque condition doit être claire, observable et vérifiable.
- Ils doivent décrire le résultat nécessaire sans imposer inutilement la manière de l'obtenir.
- Ils doivent couvrir les conditions indispensables à l'achèvement dans le périmètre déclaré.
- Ils doivent être établis avant que l'achèvement soit évalué, sauf lorsqu'une connaissance nouvelle exige leur révision explicite.
- Leur satisfaction ne démontre pas automatiquement l'atteinte de l'objectif plus large d'une epic.
- Ils permettent une évaluation sans imposer un processus ou un workflow particulier.

#### Examples

- Le résultat attendu est présent et peut être consulté par le public auquel il est destiné.
- Chaque information obligatoire est renseignée ou explicitement signalée comme inconnue.
- Les limites déclarées sont respectées et les cas exclus ne sont pas présentés comme couverts.

#### Related Concepts

- Story

## Architecture

### Source of Truth

Status: Approved

#### Definition

Une source de vérité est l'autorité désignée pour un ensemble d'informations. En cas de divergence avec une autre représentation, son contenu prévaut dans les limites de son périmètre.

#### Purpose

Elle permet de savoir quelle information fait foi, de prévenir les contradictions et de maintenir une compréhension commune au fil des changements.

#### Rules

- Un ensemble d'informations possède une seule source de vérité désignée.
- Son périmètre, son autorité et sa responsabilité doivent être explicites.
- Une copie ou une synthèse ne devient pas une source de vérité par simple duplication.
- Toute modification appelée à faire autorité est effectuée dans la source de vérité avant d'être répercutée ailleurs.
- Toute divergence est résolue à partir de la source de vérité ou par une décision explicite qui la remplace.
- Une information inconnue ou non validée demeure signalée comme telle.

#### Examples

- Un document approuvé fait autorité pour le périmètre d'un produit, tandis que ses résumés restent informatifs.
- Un référentiel terminologique établit les termes officiels repris dans les autres documents.
- Un registre de référence détermine l'état des éléments suivis, tandis que les rapports en présentent des vues dérivées.

#### Related Concepts

- Reference
- Document
- Artifact

### Layer

Status: Planned

Description:

(TODO)

### Dependency

Status: Planned

Description:

(TODO)

### Responsibility

Status: Planned

Description:

(TODO)

### Boundary

Status: Planned

Description:

(TODO)

## Quality

### Definition of Done

Status: Planned

Description:

(TODO)

### Consistency

Status: Planned

Description:

(TODO)

### Traceability

Status: Planned

Description:

(TODO)

### Maintainability

Status: Planned

Description:

(TODO)
