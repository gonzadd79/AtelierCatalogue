# Projets

Un projet donne le contexte d'usage qui manque à un inventaire : pourquoi l'objet a été choisi, comment il est relié et quels fichiers permettent de reprendre le travail. Il peut réunir description, statut, photographies, documents, plans, schémas, firmware, configurations, notes, objets utilisés, quantités, rôles, objets manquants et alternatives.

`ProjectItemUsage` relie un projet à un article par identifiant, quantité et rôle. Il ne modifie pas automatiquement le stock dans la fondation. Une alternative est une possibilité documentée, pas une compatibilité garantie.

La navigation est bidirectionnelle : la fiche projet liste ses usages ; la fiche article liste les projets correspondants. Une future validation d'intégrité détectera liens orphelins et divergences. Les documents suivent `annexes/projects/<project-id>/`, les photos `media/projects/<project-id>/`.

La V1 n'est pas un gestionnaire de projet : pas de tâches, planning, budget, diagramme de Gantt, collaboration ou automatisation de workflow. Le statut reste un repère simple pour comprendre le contexte technique.
