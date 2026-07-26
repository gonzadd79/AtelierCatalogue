# Playbook de développement

## Déroulement d'une Story

1. comprendre l'intention produit et la question utilisateur ;
2. sélectionner une Story limitée avec critères observables ;
3. lire les documents et ADR concernés ;
4. implémenter uniquement le périmètre annoncé ;
5. tester fonctions, données, erreurs et cas vide ;
6. réaliser une revue UX/accessibilité si l'interface change ;
7. vérifier la portabilité dans les conditions affectées ;
8. mettre à jour documentation, schémas et changelog pertinents ;
9. produire un travail cohérent prêt à committer ;
10. faire correspondre un objectif cohérent à un commit cohérent.

## Règles permanentes

Pas de fonctionnalité cachée, donnée inventée, dépendance inutile, changement architectural silencieux, refactoring hors périmètre sans justification ou faux succès. Un état inconnu reste visible. Documentation, UX et portabilité font partie du livrable ; la portabilité est testée, jamais supposée. Les originaux ne sont pas altérés automatiquement. Une vérification non exécutée est dite non exécutée.

## Définition de prêt et de terminé

Avant travail : intention, données touchées, risques et test principal sont compris. À la fin : critères satisfaits, console sans erreur critique connue, chemins et ressources contrôlés, documentation alignée, différences Git relues, limites rapportées. Un commit n'est exécuté que sur demande explicite.

## Rapport Codex attendu

- **Résumé** : résultat et valeur ;
- **Fichiers créés** et **fichiers modifiés** : listes exactes ;
- **Comportement ajouté** : observable, sans annoncer le futur ;
- **Tests** : commandes/parcours, résultats et tests non exécutés ;
- **Documentation** : documents synchronisés ;
- **Limites** : ce qui reste hors périmètre ;
- **Points à valider** : décisions humaines nécessaires ;
- **Statut Git** : branche et changements, sans masquer l'existant ;
- **Proposition de message de commit** : une phrase à l'impératif, sans créer le commit sauf demande.
