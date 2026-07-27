# Checklist de portabilité — fondation

Noter navigateur, version, système, chemin source, chemin copié et date.

- [ ] Ouvrir directement `index.html` par double-clic (`file://`).
- [ ] Vérifier l'absence d'erreur critique dans la console.
- [ ] Vérifier la version, le statut Fondation et les compteurs Articles, Projets et Catégories.
- [ ] Avec les données initiales, vérifier que les trois compteurs affichent `0`.
- [ ] Vérifier que l'état vide indique que le catalogue est prêt et non en erreur.
- [ ] Vérifier que « Commencer l'inventaire » est désactivé et que son indisponibilité est expliquée.
- [ ] Vérifier qu'aucune requête réseau n'est émise.
- [ ] Désactiver le réseau, recharger et retrouver le même écran.
- [ ] Copier le dossier complet dans un autre dossier et rouvrir la copie.
- [ ] Copier sur un autre lecteur ou support et rouvrir.
- [ ] Tester un chemin contenant plusieurs espaces.
- [ ] Inspecter HTML, CSS, JS et données : chemins internes relatifs uniquement.
- [ ] Vérifier que les contenus accentués s'affichent correctement.
- [ ] Parcourir au clavier et vérifier le focus visible sur tout contrôle présent.
- [ ] Activer le mode sombre système et vérifier lisibilité/contraste.
- [ ] Renommer temporairement une copie d'un fichier de données et vérifier le message d'erreur compréhensible, puis restaurer le fichier.
- [ ] Confirmer que les exemples de `samples/` ne sont pas chargés.
- [ ] Ouvrir directement `demo.html` sous `file://` et vérifier la bannière de démonstration.
- [ ] Vérifier les compteurs fictifs : `15` articles, `3` projets et `8` catégories.
- [ ] Vérifier l'affichage de `15` cartes dans la vue Catalogue de démonstration.
- [ ] Vérifier sur chaque carte : placeholder, nom, catégorie, emplacement et quantité ; projet seulement lorsqu'il existe.
- [ ] Vérifier que les cartes sont parcourables au clavier et que le focus est visible.
- [ ] Ouvrir une fiche par clic sur une carte et vérifier que le catalogue reste en contexte.
- [ ] Ouvrir une fiche avec Entrée, puis avec Espace.
- [ ] Vérifier nom, catégorie, emplacement, quantité, projet éventuel, description et placeholder sans donnée supplémentaire.
- [ ] Fermer la fiche avec le bouton « Fermer » et vérifier le retour du focus sur la carte.
- [ ] Fermer la fiche avec Échap et vérifier le même retour du focus.
- [ ] Vérifier que le focus ne quitte pas la fenêtre tant qu'elle est ouverte.
- [ ] Vérifier la fiche en largeur desktop et mobile.
- [ ] Dans `demo.html`, saisir un nom, une catégorie puis un emplacement et vérifier le filtrage immédiat des cartes.
- [ ] Vérifier que la recherche ignore la casse et les accents.
- [ ] Saisir un terme présent uniquement dans une description, puis uniquement dans un projet, et vérifier qu'aucune carte ne correspond.
- [ ] Saisir un terme absent et vérifier le message « Aucun composant ne correspond à votre recherche. ».
- [ ] Effacer entièrement le champ et vérifier le retour des `15` cartes.
- [ ] Pendant chaque recherche, vérifier que les compteurs restent à `15` articles, `3` projets et `8` catégories.
- [ ] Parcourir le champ et les cartes filtrées au clavier, puis ouvrir et fermer une fiche.
- [ ] Vérifier plusieurs colonnes sur desktop, moins sur tablette et une colonne sous `40rem`.
- [ ] Vérifier que `index.html` avec les données réelles vides ne montre aucune grille.
- [ ] Vérifier que `demo.html` ne charge aucun fichier de `data/`.
- [ ] Utiliser « Revenir au catalogue réel » et retrouver les compteurs `0`, `0`, `0`.

Résultat attendu : pages statiques lisibles, collection réelle vide, démonstration explicitement signalée, recherche locale opérationnelle et zéro ressource distante. Les images réelles et documents seront vérifiés lorsqu'ils existeront.
