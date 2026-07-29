# Vision d'architecture

Cette vision répartit les responsabilités cibles du produit sans prescrire de technologie, de protocole ou de structure de données. Chaque partie doit conserver une responsabilité identifiable et éviter de redéfinir les règles appartenant à une autre partie.

## Frontend

Présente le produit et permet à l'utilisateur d'interagir avec ses capacités. Il distingue les Informations retenues de leurs Sources, Observations, Éléments probants et Documentation, tout en rendant l'incertitude visible, sans devenir la source des règles du produit.

## Backend

Coordonne les demandes adressées au produit et l'application de ses règles. Il relie les points d'entrée, le domaine et la conservation des Informations sans décider de leur acceptation ni attribuer de sens métier nouveau.

## Persistence

Préserve les Inventaires, Articles, Informations, Sources, Observations, Éléments probants, Documentation et Historiques. Elle assure leur restitution fidèle sans définir leur signification ni confondre état courant et connaissance passée.

## Domain

Porte le sens du produit, son langage partagé et les règles qui garantissent la cohérence de l'Inventaire comme connaissance délimitée à propos de biens réels. Il définit l'identité des Articles et la distinction entre provenance, constat, justification, Information retenue et Historique, indépendamment de leur présentation et de leur mode de conservation.

## API

Définit la frontière explicite par laquelle les capacités du produit peuvent être sollicitées. Elle expose des contrats cohérents avec le domaine sans créer de règle concurrente. Aucun contrat, échange ou point d'accès n'est défini à ce stade.
