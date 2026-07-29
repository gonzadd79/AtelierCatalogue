# Vision — contexte narratif

> **Statut documentaire : support descriptif.** La Vision canonique du produit est [`product/30_PRODUCT_VISION.md`](product/30_PRODUCT_VISION.md). Le présent document développe le problème, la proposition de valeur et l'expérience recherchée sans créer une seconde autorité. En cas de divergence, la Vision canonique prévaut. Le périmètre de la V1 appartient exclusivement à [`02_SCOPE.md`](02_SCOPE.md).

## Le problème réel

Un atelier accumule vite des objets dont la valeur ne se résume pas au prix : savoir ce qu'ils font, où ils sont et pourquoi ils ont été conservés. Plusieurs mois après un achat, une carte devient « le module bleu dans une boîte », sa référence n'est plus certaine, sa documentation reste dans un navigateur et ses photos dans un téléphone. Chercher, racheter en double ou utiliser une variante incompatible coûte du temps et fragilise les projets.

Les outils habituels dissocient l'objet physique, la photo de l'exemplaire, la documentation, les observations et le projet où il est employé. Une feuille de stock compte ; un dossier de photos montre ; un répertoire de PDF documente. Aucun ne restitue seul le contexte technique.

## Proposition de valeur

AtelierCatalog réunit localement identité, stock, emplacement, caractéristiques, médias, documents, sources, incertitudes et usages projet. L'utilisateur principal est la personne qui possède et entretient l'atelier. Elle garde le contrôle du dossier, peut le copier et le consulter sans réseau.

Le produit doit répondre honnêtement à des questions comme :

- Ai-je un convertisseur acceptant 12 V en entrée et fournissant au moins 5 A ?
- Où sont rangés mes BMS 4S ?
- Quel amplificateur puis-je utiliser avec deux haut-parleurs 4 ohms ?
- Quels projets utilisent ce Raspberry Pi ?
- Combien de modules ESP32 sont encore disponibles ?
- Quelles informations de cette fiche restent à confirmer ?
- Quelle photo montre mon exemplaire réel ?
- Quels documents sont disponibles hors ligne ?

Une réponse utile explique ses limites : elle distingue valeur observée, déclaration utilisateur, documentation et déduction. Une recommandation future doit exposer les conditions électriques ou mécaniques qui la rendent plausible et ne jamais transformer une valeur maximale en usage conseillé.

## Expérience attendue

Ouvrir `index.html` doit donner l'impression d'ouvrir son atelier, pas une base de données. L'accueil synthétise l'état du catalogue et maintient la recherche au premier plan. Retrouver un objet avec les mots dont on se souvient, reconnaître visuellement son propre exemplaire, voir son emplacement, sa disponibilité et les projets liés, puis ouvrir les annexes locales doit former un parcours direct. L'inconnu et l'ambigu sont visibles sans rendre la lecture anxiogène.

Au premier lancement, le catalogue vide est présenté comme prêt à recevoir un inventaire. Une action claire indique comment commencer et le guide d'import des photos reste accessible ; l'absence de données n'est jamais confondue avec une panne.

AtelierCatalog devient ainsi la **mémoire technique personnelle de l'atelier** : une connaissance durable, explicable et transportable, plus riche qu'un stock mais plus simple qu'un ERP.

## Réussite à long terme

Le catalogue réussit si un composant acheté trois ans auparavant peut être retrouvé en moins de trente secondes avec les informations utiles pour le reconnaître, le localiser et décider de son usage. Une information ancienne reste sourcée, un changement de disque ne casse rien, les doublons d'achat diminuent et un projet peut être repris après une longue pause. Le produit doit accueillir électronique, informatique, mécanique, outillage, réseau et futures catégories sans refonte fondamentale.

Il ne doit devenir ni ERP, ni logiciel comptable ou commercial, ni PDM industriel, CAO, gestionnaire complet de fournisseurs ou système d'achat automatisé. La sophistication n'est admise que lorsqu'elle sert une question réelle de l'atelier.
