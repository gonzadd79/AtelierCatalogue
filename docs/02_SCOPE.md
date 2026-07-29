# Périmètre

> **Autorité documentaire : canonique pour le Scope.** Ce document définit seul le périmètre de la V1, ses exclusions et ses critères de réussite. Il dérive de la [Vision canonique](product/30_PRODUCT_VISION.md). La [Roadmap](14_ROADMAP.md) organise sa réalisation sans pouvoir l'étendre ni le réduire ; toute décision architecturale associée est consignée dans le [registre ADR](15_DECISIONS.md).

## V1

Les exigences fonctionnelles de la V1 sont identifiées comme suit. Ces identifiants servent uniquement à la traçabilité et ne modifient pas le périmètre.

| ID | Exigence V1 |
| --- | --- |
| S-001 | Consultation statique ouverte via `file://`. |
| S-002 | Lecture de données locales. |
| S-003 | Accueil sous forme de tableau de bord. |
| S-004 | Recherche principale toujours visible. |
| S-005 | Vue cartes. |
| S-006 | Vue tableau. |
| S-007 | Recherche textuelle. |
| S-008 | Filtres simples. |
| S-009 | Fiches détaillées structurées en sections repliables. |
| S-010 | Consultation des photos. |
| S-011 | Consultation des documents. |
| S-012 | Consultation des spécifications. |
| S-013 | Consultation des quantités. |
| S-014 | Consultation des emplacements. |
| S-015 | Consultation des projets associés. |
| S-016 | Consultation des sources et des niveaux de confiance. |
| S-017 | Lecture des données sans constituer un outil d'édition complet. |
| S-018 | Présentation du catalogue vide comme un état prêt à l'emploi au premier lancement. |
| S-019 | Action permettant de commencer l'inventaire. |
| S-020 | Accès au guide d'import des photos. |
| S-021 | Orientation honnête vers le workflow documenté tant que l'outil d'import n'existe pas. |

## Hors périmètre V1

| ID | Décision Hors V1 |
| --- | --- |
| HV1-001 | Comptes. |
| HV1-002 | Collaboration. |
| HV1-003 | Synchronisation cloud. |
| HV1-004 | OCR complet. |
| HV1-005 | Reconnaissance d'image intégrée. |
| HV1-006 | Téléchargement automatique de datasheets. |
| HV1-007 | Comptabilité. |
| HV1-008 | Commandes fournisseurs. |
| HV1-009 | Application mobile native. |
| HV1-010 | SQL ou serveur obligatoire. |
| HV1-011 | IA embarquée. |
| HV1-012 | Historique complexe de mouvements de stock. |

## Futur envisageable

Les éléments suivants restent possibles, mais sont explicitement hors V1. Aucun n'est actuellement disponible ni promis sans validation.

| ID | Élément futur Hors V1 |
| --- | --- |
| HV1-013 | Outil local d'administration. |
| HV1-014 | Import photo assisté. |
| HV1-015 | Validation des identifications. |
| HV1-016 | QR codes. |
| HV1-017 | Exports. |
| HV1-018 | Sauvegardes. |
| HV1-019 | Historique de stock. |
| HV1-020 | Suggestions projet. |
| HV1-021 | Interrogation en langage naturel. |
| HV1-022 | Emballage desktop. |

## Critères mesurables de réussite V1

- **S-022 —** `index.html` ouvre le catalogue depuis deux lecteurs et un chemin avec espaces sans serveur ni réseau.
- **S-023 —** 100 % des ressources indispensables sont locales et référencées relativement.
- **S-024 —** Les cartes et le tableau rendent une collection validée et un état vide sans erreur critique.
- **S-025 —** Les fiches rendent une collection validée et un état vide sans erreur critique.
- **S-026 —** Le tableau de bord distingue catalogue vide et données indisponibles.
- **S-027 —** L'absence de résultat de recherche est distinguée des autres états.
- **S-028 —** La recherche principale reste accessible depuis les vues de consultation.
- **S-029 —** Une recherche retrouve nom, référence, tags et texte sans tenir compte de la casse ni des accents.
- **S-030 —** Chaque filtre V1 annoncé produit un résultat vérifiable et réinitialisable.
- **S-031 —** Chaque média indique s'il montre l'objet possédé.
- **S-032 —** Chaque incertitude reste visible.
- **S-033 —** Les liens bidirectionnels objet-projet sont navigables.
- **S-034 —** Les emplacements multiples sont navigables.
- **S-035 —** La checklist de portabilité passe manuellement.
- **S-036 —** Le parcours clavier passe manuellement.
- **S-037 —** Le mode sombre passe manuellement.
- **S-038 —** Un test utilisateur représentatif retrouve un article ancien, son emplacement et ses informations décisives en moins de trente secondes.

Ces critères décrivent la cible V1, pas l'état actuel de la fondation.
