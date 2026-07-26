# Stratégie de tests

La fondation utilise une vérification manuelle et des contrôles statiques sans dépendance. Les futures Stories ajouteront proportionnellement :

- tests de données : schémas, identifiants, relations, enums et vérité des collections principales vides ;
- tests de fonctions : lecture, normalisation, recherche, tri et erreurs ;
- tests DOM : états vide, résultat, erreur et fichiers manquants ;
- tests d'accessibilité : structure, clavier, focus, contrastes et technologies d'assistance ;
- tests de portabilité : `file://`, copie, autre lecteur, espaces et hors-ligne ;
- tests de liens : chemins relatifs, cibles, casse et annexes externes signalées ;
- tests de fichiers manquants : diagnostic visible sans blocage global.

Un futur outillage ne doit pas devenir nécessaire à la simple ouverture du catalogue. Les commandes, navigateurs et résultats sont consignés dans chaque rapport de Story. La checklist manuelle immédiate est dans `portability-checklist.md`.
