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
