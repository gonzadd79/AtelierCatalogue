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
