# Projets

Un projet donne le contexte d'usage qui manque à un inventaire : pourquoi l'objet a été choisi, comment il est relié et quels fichiers permettent de reprendre le travail. Il peut réunir description, statut, photographies, documents, plans, schémas, firmware, configurations, notes, objets utilisés, quantités, rôles, objets manquants et alternatives.

`Project.itemUsages` est l'unique source de vérité de la relation Projet ↔ Article. Chaque `ProjectItemUsage` relie le projet qui le possède à un article par identifiant, quantité et rôle. Il ne modifie pas automatiquement le stock dans la fondation. Une alternative est une possibilité documentée, pas une compatibilité garantie. Le contrat canonique de la relation est défini dans le [modèle de données](04_DATA_MODEL.md#project-et-projectitemusage).

La navigation reste bidirectionnelle : la fiche projet présente ses usages et la fiche article calcule les projets correspondants à partir de ces usages. Cette projection ne possède ni ne recopie la relation. Les documents suivent `annexes/projects/<project-id>/`, les photos `media/projects/<project-id>/`.

La V1 n'est pas un gestionnaire de projet : pas de tâches, planning, budget, diagramme de Gantt, collaboration ou automatisation de workflow. Le statut reste un repère simple pour comprendre le contexte technique.
