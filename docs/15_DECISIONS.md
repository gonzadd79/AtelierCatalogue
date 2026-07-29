# Journal de décisions

> **Autorité documentaire : registre ADR canonique.** Ce document est la source unique des Architecture Decisions acceptées. [`product/40_ARCHITECTURE_DECISIONS.md`](product/40_ARCHITECTURE_DECISIONS.md) est uniquement un portail et ne contient aucune décision concurrente. Les documents d'architecture appliquent ce registre sans le redéfinir.

Statut de toutes les décisions ci-dessous : **acceptée pour la V1**.

## ADR-001 — Nom AtelierCatalog

**Contexte.** Le produit relie atelier et catalogue. **Décision.** Utiliser AtelierCatalog comme nom canonique. **Conséquences.** Espace de noms et documentation sont cohérents. **Alternatives rejetées.** Nom limité à l'électronique ou simple « Inventory ». **Réévaluation.** Conflit juridique, ambiguïté majeure ou changement de mission.

## ADR-002 — Application statique en V1

**Contexte.** La consultation doit être autonome. **Décision.** HTML, CSS et JavaScript statiques sans build obligatoire. **Conséquences.** Déploiement par copie ; limites sur édition et gros volumes. **Alternatives rejetées.** SPA compilée ou backend dès la fondation. **Réévaluation.** Besoins mesurés impossibles à satisfaire proprement en statique.

## ADR-003 — Compatibilité directe avec `file://`

**Contexte.** L'ouverture se fait par double-clic. **Décision.** Le parcours principal fonctionne depuis une URL fichier. **Conséquences.** Tests spécifiques et prudence avec politiques navigateur. **Alternatives rejetées.** Serveur local imposé. **Réévaluation.** Plateformes cibles supprimant durablement cette capacité, avec solution portable équivalente.

## ADR-004 — Données JavaScript plutôt que `fetch()` JSON en V1

**Contexte.** `fetch()` local peut être bloqué. **Décision.** Scripts exposant `window.AtelierCatalogData`. **Conséquences.** Chargement fiable en `file://`, global contrôlé et génération future possible. **Alternatives rejetées.** JSON chargé par `fetch()`, données encodées dans HTML. **Réévaluation.** Adoption d'un runtime ou serveur optionnel sans perte du mode portable.

## ADR-005 — Aucun framework JavaScript initial

**Contexte.** L'interface initiale est réduite. **Décision.** APIs natives. **Conséquences.** Zéro dépendance, discipline modulaire nécessaire. **Alternatives rejetées.** Framework et chaîne Node prématurés. **Réévaluation.** Complexité UI démontrée et coût natif supérieur, avec build distribuable autonome.

## ADR-006 — Aucun serveur obligatoire

**Contexte.** Installation et réseau ne doivent pas conditionner la lecture. **Décision.** Le serveur reste absent de V1. **Conséquences.** Pas d'API ni édition multi-utilisateur. **Alternatives rejetées.** Backend local permanent. **Réévaluation.** Outil d'administration optionnel, sans retirer la consultation statique.

## ADR-007 — Chemins relatifs uniquement

**Contexte.** Le dossier change de lecteur et d'emplacement. **Décision.** Tous les liens internes sont relatifs. **Conséquences.** Conventions de racine et tests de casse. **Alternatives rejetées.** Lettres de lecteur, chemins UNC ou racines machine. **Réévaluation.** Jamais pour les ressources essentielles ; exceptions externes restent des URL explicitement non hors-ligne.

## ADR-008 — Distinction photo réelle et photo externe

**Contexte.** Des variantes visuellement proches rendent une illustration trompeuse. **Décision.** Origine, rôle et `showsOwnedItem` sont explicites. **Conséquences.** UI et modèle affichent la distinction. **Alternatives rejetées.** Galerie indifférenciée. **Réévaluation.** Le vocabulaire peut évoluer, pas la distinction.

## ADR-009 — Sources et niveau de confiance

**Contexte.** Les informations viennent de preuves inégales. **Décision.** Conserver sources, statut et confiance qualitative. **Conséquences.** Saisie plus riche, décisions explicables. **Alternatives rejetées.** Valeurs sans provenance ou score pseudo-scientifique. **Réévaluation.** Après usages réels, pour simplifier ou préciser l'échelle sans masquer l'incertitude.

## ADR-010 — Exemples séparés des données réelles

**Contexte.** Les démos peuvent être prises pour du stock. **Décision.** `samples/` utilise un espace de noms distinct et n'est pas chargé par défaut. **Conséquences.** Démonstration explicite, aucune pollution. **Alternatives rejetées.** Entrées `demo` dans `data/`. **Réévaluation.** Uniquement si un mécanisme garantit la même séparation de façon plus forte.

## ADR-011 — Modèle ouvert à plusieurs catégories d'objets

**Contexte.** L'atelier dépasse l'électronique. **Décision.** Catégories et spécifications extensibles, socle commun réduit. **Conséquences.** Pas de schéma rigide par famille à la fondation. **Alternatives rejetées.** Champs exclusivement électriques. **Réévaluation.** Lorsque des familles stabilisées justifient des profils validés optionnels.

## ADR-012 — Validation humaine des identifications ambiguës

**Contexte.** Photos, clones et marquages partiels produisent des hypothèses. **Décision.** Toute identification ambiguë reste non affirmative avant validation humaine. **Conséquences.** Brouillons et audit futurs obligatoires. **Alternatives rejetées.** Publication automatique du candidat le plus probable. **Réévaluation.** Le seuil et le workflow peuvent évoluer ; l'ambiguïté ne sera jamais masquée.
