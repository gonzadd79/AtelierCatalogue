# ADR-002 — Documentation Authority Model

## Status

Accepted

## Context

L'architecture documentaire répartit la connaissance entre le MASTER, les References, les ADR, la Roadmap et les actifs dérivés sans définir précisément leur autorité respective. Cette situation crée des ambiguïtés, permet la duplication de définitions et ne fournit ni règle commune de résolution des conflits ni modèle officiel de dépendances.

## Decision

- `MASTER_SPECIFICATION.md` devient la Constitution du Framework et son registre d'autorité documentaire.
- Une question normative possède une seule source canonique.
- Chaque Reference fait autorité uniquement dans son périmètre déclaré.
- Le Semantic Reference est la seule source normative des concepts. Les autres documents peuvent les citer, mais jamais les redéfinir.
- Les ADR documentent les décisions, leur contexte et leurs conséquences. Les règles permanentes issues de ces décisions sont maintenues dans la source canonique concernée.
- La Roadmap fait autorité uniquement sur la planification et le statut des évolutions.
- Le README est un portail descriptif et non normatif.
- Les Templates, Examples et Prompts sont des actifs dérivés non normatifs. Ils ne peuvent introduire aucune règle absente d'une source canonique.
- Un conflit est résolu d'abord selon le périmètre concerné, puis selon l'autorité documentaire : la Constitution prévaut pour les principes du Framework, le Semantic Reference pour les concepts et la Reference propriétaire pour les règles de son domaine.
- Les References peuvent dépendre de la Constitution, du Semantic Reference et d'autres References lorsque cette dépendance est explicite et non circulaire. Les actifs dérivés peuvent dépendre des References ; aucune source normative ne peut dépendre d'un actif dérivé.

## Consequences

- Les doublons normatifs doivent être supprimés ; les résumés éventuels restent non normatifs et renvoient à leur source canonique.
- Le MASTER devient une Constitution compacte et un registre des autorités, sans reproduire les contenus spécialisés.
- Chaque document possède une responsabilité et un niveau d'autorité explicites.
- De nouvelles References spécialisées peuvent être admises sans modifier le modèle d'autorité lorsqu'elles respectent ses règles.
- La gouvernance documentaire est simplifiée par l'unicité des sources canoniques et par des dépendances explicites.

## Migration

1. Mettre à jour le MASTER afin qu'il remplisse son rôle de Constitution et de registre d'autorité.
2. Supprimer les définitions et règles concurrentes des documents qui ne sont pas leur source canonique.
3. Désigner officiellement le périmètre et la source canonique de chaque domaine documentaire.
4. Aligner progressivement les References et les actifs existants sur le modèle d'autorité et de dépendances.
