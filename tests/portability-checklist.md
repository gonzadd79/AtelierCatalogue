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
- [ ] Vérifier plusieurs colonnes sur desktop, moins sur tablette et une colonne sous `40rem`.
- [ ] Vérifier que `index.html` avec les données réelles vides ne montre aucune grille.
- [ ] Vérifier que `demo.html` ne charge aucun fichier de `data/`.
- [ ] Utiliser « Revenir au catalogue réel » et retrouver les compteurs `0`, `0`, `0`.

Résultat attendu à la fondation : pages statiques lisibles, collection réelle vide, démonstration explicitement signalée et zéro ressource distante. Les vues, recherche, images et documents seront vérifiés lorsqu'ils existeront.
