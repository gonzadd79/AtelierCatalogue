# Portabilité

La portabilité est un comportement vérifié : le dossier complet peut être copié sur un disque, une clé USB ou un NAS et consulté sous Windows sans installation.

## Règles vérifiables

- aucun chemin absolu, lettre de lecteur, chemin UNC ou dépendance à la racine d'origine ;
- chemins internes relatifs, séparateurs `/` dans HTML et données Web, casse cohérente ;
- aucune ressource distante obligatoire, CDN ou police Web ;
- ouverture principale par `file://` sans `fetch()` des collections ;
- noms compatibles Windows, sans caractères interdits ni noms réservés ;
- chemins avec espaces et contenus accentués supportés ;
- sauvegarde et restauration portent sur le dossier complet, y compris données, médias et annexes ;
- fichiers manquants détectables et présentés comme tels.

## Test manuel de déplacement

1. ouvrir le catalogue dans son emplacement initial ;
2. copier le dossier complet sans modifier son contenu ;
3. ouvrir la copie depuis un autre lecteur, puis depuis un chemin contenant des espaces ;
4. vérifier recherche, images, documents et fiches disponibles au stade testé ;
5. couper la connexion et répéter le parcours ;
6. comparer les erreurs console et contrôler les fichiers manquants.

La checklist opérationnelle se trouve dans `tests/portability-checklist.md`. Une simple absence d'erreur sur le chemin de développement ne prouve pas la portabilité.
