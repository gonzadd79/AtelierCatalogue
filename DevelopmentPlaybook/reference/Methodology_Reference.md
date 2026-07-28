# Methodology Reference

Objectif : accueillir le développement détaillé de la méthodologie.

Ce document sera rempli progressivement.

# Concept Governance

## Purpose

L'ajout d'un concept est encadré afin que le référentiel demeure cohérent, stable et extensible. Chaque concept supplémentaire accroît le nombre de distinctions et de relations à comprendre et à maintenir. Il n'est admis que s'il apporte une valeur réelle et durable au référentiel.

## Admission Criteria

Un concept peut être admis lorsqu'il satisfait l'ensemble des critères suivants :

- il représente une idée distincte ;
- il ne duplique aucun concept existant ;
- il est applicable à plusieurs projets ;
- il est indépendant des technologies et des outils ;
- il possède une responsabilité clairement identifiable ;
- il reste pertinent dans le temps.

Lorsqu'un concept proposé ne satisfait pas ces critères, il est reformulé, rattaché à un concept existant ou écarté.

## Evolution Rules

Un concept existant peut être clarifié, enrichi ou relié à d'autres concepts lorsque cela améliore sa compréhension sans altérer son identité.

Sa signification ne doit pas changer sans décision explicite. Toute évolution sémantique doit exposer l'intention du changement et ses conséquences sur les usages existants.

## Architectural Changes

Toute modification de la structure du Semantic Reference relève d'une Architecture Decision. Cela comprend notamment les changements de catégories, de domaines, d'organisation ou de niveau d'abstraction.

Ces changements ne sont pas décidés progressivement au fil des Features. Ils sont examinés comme des décisions structurantes avant d'être appliqués.

## Review

- Chaque concept est relu individuellement afin de vérifier sa clarté, sa distinction et sa cohérence.
- Chaque domaine fait l'objet d'une Domain Review afin de vérifier la cohérence de l'ensemble de ses concepts.
- Une Architecture Review peut être réalisée avant l'ouverture d'un nouveau domaine lorsque sa structure ou son niveau d'abstraction nécessite une validation préalable.

# Semantic Quality Standard

Tout concept admis dans le Semantic Reference doit respecter l'ensemble des principes suivants.

## Atomicité

Un concept représente une seule idée. Il ne doit pas réunir plusieurs notions pouvant être définies et utilisées indépendamment.

## Unicité

Chaque concept ne possède qu'une seule entrée dans le Semantic Reference. Les synonymes sont évités lorsqu'ils créent plusieurs représentations d'une même notion.

## Autorité

Toute définition normative d'un concept appartient exclusivement au Semantic Reference. Les autres documents peuvent utiliser le concept et renvoyer vers sa définition canonique, mais ne doivent ni le redéfinir ni lui attribuer une signification concurrente.

## Indépendance

La définition d'un concept doit être compréhensible par elle-même. Les relations avec d'autres concepts peuvent compléter cette compréhension, mais ne doivent pas être nécessaires pour établir sa signification fondamentale.

## Stabilité

Une définition ne doit évoluer que lorsqu'une évolution conceptuelle est nécessaire. Une préférence stylistique ou une reformulation sans changement de sens ne suffit pas à justifier sa modification.

## Relations

Les Related Concepts servent uniquement à établir des liens sémantiques pertinents. Ils complètent la navigation et la compréhension du référentiel, mais ne constituent jamais une définition.

## Admission

Avant d'ajouter un concept, il faut vérifier :

- qu'il n'existe pas déjà dans le Semantic Reference ;
- qu'il représente une notion autonome ;
- qu'il possède une utilité durable ;
- qu'il n'est pas spécifique à un outil.

Un concept qui ne satisfait pas l'ensemble de ces critères ne doit pas être admis.

# Knowledge Evolution

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

## Purpose

Toute évolution importante du Playbook suit ce cycle. Une idée ne devient pas immédiatement une règle, et une règle ne devient pas immédiatement une référence. Chaque étape réduit l'incertitude en apportant un niveau supplémentaire d'examen, de choix ou de confirmation.

## Principles

- Une Observation ne constitue pas une Decision.
- Une Question rend explicite l'incertitude à examiner.
- Plusieurs Hypotheses peuvent coexister tant qu'aucun choix n'a été formalisé.
- Une Review confronte les Hypotheses aux éléments disponibles et à l'intention recherchée.
- Une Decision formalise un choix et rend sa justification explicite.
- Une Implementation applique le choix afin qu'il puisse être observé et évalué.
- Une Validation confirme le choix ou le remet en question à partir de ses résultats.
- Une connaissance validée peut devenir une référence officielle.
- Une Validation qui remet le choix en question ouvre un nouveau cycle de connaissance.

## Scope

Cette section décrit uniquement la maturation de la connaissance.

Elle ne décrit ni le développement logiciel, ni Git, ni les Epics.
