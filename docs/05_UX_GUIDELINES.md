# Lignes directrices UX

## Intention

L'utilisateur ne doit jamais avoir l'impression de consulter une base de données. Il doit avoir l'impression **d'ouvrir son atelier**.

Chaque écran répond rapidement à au moins une question concrète :

- Que possède-je ?
- Où est-ce ?
- Puis-je l'utiliser ?
- Dans quels projets l'ai-je déjà utilisé ?
- Que dois-je encore vérifier ?

L'interface réduit les recherches ; elle ne les déplace pas dans une navigation complexe. Elle emploie le vocabulaire du glossaire avant celui du stockage et évite la densité visuelle d'un ERP.

## Premier lancement et catalogue vide

Le catalogue vide est un état normal, jamais une erreur. Au premier lancement, l'accueil doit afficher :

- le nom du catalogue ;
- un message confirmant qu'il est prêt ;
- une action principale « Commencer l'inventaire » ;
- un lien vers le guide d'import des premières photos.

L'action principale doit expliquer la prochaine étape disponible. Tant que l'import fonctionnel n'existe pas, l'interface ne doit pas simuler son existence : elle peut orienter vers le workflow documenté.

Il faut distinguer trois états : catalogue réellement vide, recherche sans résultat et données impossibles à charger. Chacun possède un titre, une explication et une suite possible.

## Accueil : un tableau de bord

L'accueil n'est pas une longue liste. Lorsque les fonctions correspondantes seront développées, il synthétisera :

- la recherche principale ;
- le nombre total d'articles ;
- le nombre de catégories ;
- le nombre de projets ;
- le nombre d'articles à confirmer ;
- les derniers ajouts ;
- des accès rapides aux catégories principales.

Les catégories sont présentées sous forme de cartes reconnaissables, par exemple Électronique, Réseau, Audio, Informatique, Outils, Mécanique, Mesure et Alimentation. Ces catégories sont des exemples de navigation, pas des données réelles préchargées ni une taxonomie fermée.

Chaque indicateur doit mener à une action utile ou à la collection correspondante. Aucun chiffre décoratif, calcul ambigu ou bloc vide ne doit surcharger l'accueil.

## Recherche principale

Depuis FEATURE-005, la recherche est visible au-dessus d'un catalogue contenant des articles. Elle filtre instantanément les cartes selon le nom, la catégorie ou l'emplacement et accepte naturellement des termes tels que `ESP32`, `Raspberry` ou `relais`. Le catalogue réellement vide conserve son accueil dédié sans afficher un champ inutile.

La V1 reste textuelle et explicable. Elle ne prétend pas comprendre sémantiquement une demande. La saisie annonce le nombre de cartes correspondantes, laisse les compteurs généraux inchangés et permet une réinitialisation immédiate par effacement. La conservation de la recherche entre plusieurs vues reste une évolution future.

## Cartes d'objets

Une carte permet de décider en un regard si l'article est probablement exploitable. Elle contient, lorsque les données existent :

- photo principale, personnelle en priorité ;
- nom ;
- catégorie ;
- emplacement principal ;
- quantité ou état inconnu ;
- projet associé, lorsqu'il existe.

FEATURE-003 limite volontairement la carte à ces informations de parcours. Référence et état d'identification restent destinés aux futures vues qui les justifieront. Une absence de photo, quantité ou emplacement reste explicite.

Depuis FEATURE-004, toute la carte constitue une action explicite ouvrant une fiche en lecture seule. Elle expose sa nature de bouton et l'ouverture d'une fenêtre de dialogue aux technologies d'assistance. Clic, Entrée et Espace produisent le même résultat ; aucun autre geste ou action secondaire n'est caché dans la carte.

## Fiche d'un objet

La première fiche de FEATURE-004 reste volontairement courte. Elle s'ouvre dans une fenêtre modale afin de conserver le catalogue visible en contexte et présente uniquement le nom, la catégorie, l'emplacement, la quantité, le premier projet associé, la description disponible et l'image ou son placeholder. Elle n'offre aucune édition ni navigation vers une vue supplémentaire.

La fermeture est disponible par un bouton nommé et par Échap. Pendant l'ouverture, le focus reste dans la fenêtre ; après fermeture, il revient à la carte ayant déclenché l'action. Le titre de la fiche nomme la fenêtre pour les technologies d'assistance.

À terme, une fiche complète pourra être organisée en sections indépendantes :

1. Identité
2. Galerie
3. Caractéristiques techniques
4. Stock et emplacements
5. Documents
6. Sources
7. Projets liés
8. Équivalents
9. Notes

L'identité et les informations nécessaires à une décision immédiate apparaissent avant le détail. Les sections peuvent être repliées, tout en restant accessibles au clavier et en conservant un intitulé ainsi qu'un résumé utile. Un mécanisme d'accès direct aux sections évite le défilement interminable. L'état ouvert ou fermé ne doit jamais masquer une erreur ou une incertitude critique.

## Projets et navigation bidirectionnelle

Une fiche projet rend immédiatement visibles composants utilisés, quantités, photos, documents et notes techniques. Depuis un composant, les projets qui l'utilisent sont accessibles sans nouvelle recherche. La navigation projet → objet et objet → projet conserve le contexte et propose un retour prévisible.

## Identification et incertitude

Chaque fiche affiche l'un des états canoniques : Non analysé, Proposition, À confirmer, Confirmé ou Ambigu. Le modèle prévoit aussi « Non identifié » lorsque l'analyse ne produit aucun candidat exploitable.

Ces états sont visibles mais discrets. Ils reposent sur un libellé, pas sur la couleur seule. Une proposition ne ressemble jamais à une confirmation. L'inconnu n'est représenté ni par zéro ni par un tiret ambigu.

## Photos

Une photo personnelle est privilégiée et identifiée comme montrant l'exemplaire ou le lot possédé. Une photo de référence externe reste possible, mais son origine et son rôle sont visibles. Si aucune photo personnelle n'existe, l'interface le dit ; elle ne remplace pas silencieusement ce manque par une image externe.

## Erreurs et données partielles

Aucun message ne doit être cryptique. Il décrit la situation dans le langage du produit et, lorsque cela est possible, propose une action :

- « Photo introuvable » avec le chemin relatif concerné et une invitation à vérifier le fichier ;
- « Document absent » sans bloquer le reste de la fiche ;
- « Donnée incomplète » avec les champs concernés ;
- « Référence à confirmer » avec accès aux sources ou observations.

Une erreur locale ne doit pas rendre indisponible une fiche entière si le reste peut être consulté. Les détails techniques restent accessibles pour le diagnostic sans remplacer le message utilisateur.

## Accessibilité et adaptation

Utiliser HTML sémantique, ordre de titres cohérent, focus visible, navigation complète au clavier, libellés associés, textes alternatifs contextualisés, contrastes suffisants et zones tactiles raisonnables. La couleur ne porte jamais seule une information.

Le zoom, les petits écrans et les chemins ou valeurs longues ne doivent masquer aucune information essentielle. Le thème suit `prefers-color-scheme` sans rendre un mode moins lisible. Les sections repliables exposent correctement leur état aux technologies d'assistance.

## Performance perçue

Ouverture d'une fiche, recherche et changement de vue doivent paraître instantanés, y compris avec plusieurs milliers d'articles. Les implémentations futures devront mesurer le temps de chargement, éviter les rendus complets inutiles et conserver une interaction réactive. Aucun seuil chiffré de volume ou de temps n'est garanti avant des tests représentatifs.

## Contenus non fiables et vie privée

Les notes sont rendues comme texte, jamais comme HTML de confiance. Les liens externes sont identifiables et ne conditionnent pas la consultation locale. Photos personnelles et annexes sensibles suivent les règles de sécurité et de partage documentées.

## Critère ultime

Le succès UX n'est pas le nombre de fonctions. Le parcours de référence est :

> Retrouver en moins de trente secondes un composant acheté il y a trois ans, avec les informations utiles pour le reconnaître, le localiser et décider de son usage.

Ce critère doit être testé sur des scénarios réalistes. À la fermeture, l'utilisateur doit sentir son atelier organisé, documenté, compréhensible et pérenne — et penser à AtelierCatalog avant de commencer un nouveau projet.
