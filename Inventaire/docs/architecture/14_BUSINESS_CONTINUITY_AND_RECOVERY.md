# Business Continuity & Recovery

## Purpose

Ce document définit les responsabilités architecturales nécessaires pour préserver la continuité métier de Release 0.1 avant, pendant et après une interruption. Il complète la couverture de `ARC-CON-005` et son articulation avec `ARC-CON-006`, sans concevoir de moyen technique ni modifier une autorité métier.

La continuité métier signifie qu'après une interruption, le dernier ensemble d'états autoritaires explicitement confirmé peut être rétabli sans perte de sens, d'identité, de provenance, de contenu documentaire ou d'Historique. Si cette garantie ne peut pas être établie, la restauration est refusée et l'indisponibilité reste visible.

## Sources et portée

La décision dérive exclusivement :

- des invariants de `22_DOMAIN_INVARIANTS.md` ;
- des critères globaux de `29_RELEASE_0.1_ACCEPTANCE.md` ;
- de `ARC-CON-005` et `ARC-CON-006` dans `30_ARCHITECTURE_CONSTRAINTS.md` ;
- des autorités définies dans `05_AGGREGATE_DESIGN.md` ;
- de la complétude inter-Aggregates définie dans `06_DOMAIN_SERVICE_ANALYSIS.md` ;
- des faits métier de `07_DOMAIN_EVENTS.md` ;
- des Application Services de `10_APPLICATION_SERVICES.md` ;
- des contrats de Port de `12_PORT_DESIGN.md` ;
- de l'écart bloquant constaté dans `13_ARCHITECTURE_READINESS_REVIEW.md`.

Le document couvre uniquement le Scope de Release 0.1. Les capacités futures d'export, d'archivage, de partage ou de synchronisation ne sont ni utilisées ni anticipées.

## Principes de continuité métier

1. **La restauration rétablit ; elle ne décide pas.** Elle remet à disposition un état déjà reconnu sans produire un nouvel état métier.
2. **L'ensemble autoritaire est indivisible.** Une restauration partielle ne peut jamais être présentée comme une restauration réussie.
3. **Le dernier état confirmé prévaut.** Une intention interrompue avant confirmation ne fait pas partie de l'état restaurable.
4. **Chaque autorité reste propriétaire de son sens.** La restauration ne fusionne, ne corrige et ne réinterprète aucun Aggregate.
5. **L'Historique est une autorité.** Il est restauré avec les états courants et n'est ni recalculé ni déduit de ceux-ci.
6. **Les projections sont dérivées.** Elles sont reconstruites à partir des autorités restaurées et ne servent jamais de source de restauration.
7. **Les Domain Events ne sont pas rejoués.** Une restauration ne recrée aucun fait métier et ne réexécute aucune décision.
8. **La Documentation appartient au métier.** Son contenu, son contexte, sa Source et son rattachement sont préservés avec AGG-05.
9. **Toute incertitude bloque la déclaration de réussite.** L'inconnu, l'incomplétude et l'incompatibilité restent explicites.

## Définition de la continuité pour Release 0.1

### Avant une interruption

Seuls les états résultant d'une décision entièrement confirmée sont admissibles à la continuité :

- une décision individuelle doit avoir reçu la confirmation attendue par PC-01-P ;
- une décision significative impliquant plusieurs Aggregates doit avoir reçu la confirmation globale attendue par PC-02 ;
- AGG-06 doit contenir la continuité exigée pour tout Changement significatif ;
- les références entre Aggregate Roots doivent désigner les mêmes identités que lors de la confirmation ;
- la portée et la fraîcheur de l'ensemble préservé doivent être identifiables ;
- aucun état en cours de décision ne peut être inclus comme s'il était reconnu.

### Pendant une interruption

- aucune intention en cours n'est supposée réussie ;
- aucun état partiellement préservé ne devient autoritaire ;
- le dernier ensemble entièrement confirmé reste la seule base admissible de reprise ;
- une indisponibilité ne devient ni une absence ni une suppression ;
- aucun Application Service, Port ou Domain Service ne poursuit silencieusement une coordination interrompue.

### Après une interruption

La continuité est rétablie seulement si :

1. toutes les autorités requises sont présentes dans un même ensemble cohérent ;
2. leurs identités et références restent compatibles ;
3. AGG-06 est compatible avec les états courants et conserve leur continuité ;
4. le contenu et le contexte de chaque AGG-05 sont disponibles sans altération ;
5. aucune autorité courante plus récente ne serait remplacée silencieusement ;
6. la portée et la fraîcheur de l'ensemble sont connues ;
7. les projections peuvent être déclarées indisponibles jusqu'à leur reconstruction complète ;
8. aucun Domain Event n'est produit, recréé ou rejoué par la restauration.

Après admission, les états restaurés redeviennent accessibles par PC-01-L. Les nouveaux Use Cases peuvent alors prendre des décisions normales. Aucune opération antérieure n'est automatiquement reprise.

## États autoritaires et états dérivés

### États devant être préservés sans perte

L'ensemble autoritaire de Release 0.1 comprend :

- l'état courant reconnu d'AGG-01 à AGG-05 et AGG-07 ;
- l'Historique détenu par AGG-06 ;
- les identités des Aggregate Roots ;
- les appartenances, Sources et autres références reconnues entre ces autorités ;
- les incertitudes, contradictions et inconnus explicitement conservés ;
- les contenus documentaires, leur contexte, leur provenance et leur rattachement ;
- les informations nécessaires pour établir la portée et la fraîcheur de l'ensemble restaurable.

La perte de l'un de ces éléments peut changer le sens de la connaissance. Aucun ne peut être remplacé par une déduction ou une projection.

### États pouvant être reconstruits ou régénérés

Peuvent être reconstruits à partir de l'ensemble autoritaire :

- les projections de recherche ;
- les synthèses d'Inventaire ;
- les projections de consultation d'un Article ;
- les représentations dérivées de la connaissance courante ;
- les synthèses historiques non autoritaires ;
- les regroupements et résultats calculés fournis par PC-03.

Ces éléments peuvent être régénérés parce qu'ils ne possèdent aucune décision métier. Leur reconstruction doit conserver la provenance, les identités, les contradictions, les incertitudes et l'état de complétude. Elle ne peut jamais compléter une information absente.

### États ne devant pas être préservés comme autorité

- l'état temporaire d'un Application Service pendant une coordination ;
- une intention non confirmée ;
- une réponse ou un échec de Port déjà présenté ;
- une projection dérivée ;
- un résultat de recherche ;
- un Domain Event utilisé comme commande de reconstruction ;
- une conclusion intermédiaire qui n'a pas été acceptée par son Aggregate destinataire.

## Autorités métier par Aggregate

### AGG-01 — Inventaire

- **État autoritaire :** identité, finalité, limites du périmètre et existence reconnue.
- **Restaurable :** l'état autoritaire complet et ses références reconnues.
- **Doit rester inchangé :** identité et sens du périmètre au point de continuité retenu.
- **Ne doit jamais être reconstruit :** finalité, limites ou existence à partir des Articles, d'une projection ou de l'Historique seul.
- **Autorité après restauration :** AGG-01, inchangée.

### AGG-02 — Article d'inventaire

- **État autoritaire :** identité, granularité, appartenance et état de cycle de vie reconnu.
- **Restaurable :** l'état autoritaire complet avec la référence à l'Inventaire.
- **Doit rester inchangé :** identité et appartenance reconnues au point restauré.
- **Ne doit jamais être reconstruit :** identité depuis une Observation, une Documentation, une Source, une localisation ou une ressemblance.
- **Autorité après restauration :** AGG-02, inchangée.

### AGG-03 — Information d'inventaire

- **État autoritaire :** question de connaissance, position courante, provenance, incertitude, conflit et arbitrage reconnus.
- **Restaurable :** l'état complet avec ses références aux apports et Sources.
- **Doit rester inchangé :** position, origine et incertitude au point restauré.
- **Ne doit jamais être reconstruit :** connaissance acceptée depuis les seuls apports, projections ou faits historiques.
- **Autorité après restauration :** AGG-03, inchangée.

### AGG-04 — Observation

- **État autoritaire :** constat, contexte, Article concerné et provenance reconnue.
- **Restaurable :** l'Observation complète avec ses références.
- **Doit rester inchangé :** constat et contexte reconnus au point restauré.
- **Ne doit jamais être reconstruit :** constat depuis la connaissance courante, la Documentation ou l'Historique.
- **Autorité après restauration :** AGG-04, inchangée.

### AGG-05 — Documentation

- **État autoritaire :** contenu documentaire, contexte, Article concerné, provenance et rattachement reconnus.
- **Restaurable :** l'ensemble complet, y compris le contenu lui-même.
- **Doit rester inchangé :** contenu, contexte et provenance au point restauré.
- **Ne doit jamais être reconstruit :** contenu depuis un résumé, une projection, une Source ou la connaissance courante.
- **Autorité après restauration :** AGG-05, inchangée.

### AGG-06 — Historique

- **État autoritaire :** continuité, ordre métier, états antérieurs, origine et justification des Changements significatifs.
- **Restaurable :** l'Historique complet correspondant aux états courants restaurés.
- **Doit rester inchangé :** ordre, contenu, origine et lien avec chaque sujet historique.
- **Ne doit jamais être reconstruit :** passé depuis le seul état courant, une projection ou une suite de Domain Events.
- **Autorité après restauration :** AGG-06, inchangée.

### AGG-07 — Source

- **État autoritaire :** identité et contexte commun de la provenance partagée.
- **Restaurable :** l'état complet avec les références qui la désignent.
- **Doit rester inchangé :** identité et contexte reconnus au point restauré.
- **Ne doit jamais être reconstruit :** Source depuis les Informations, Observations ou Documentations qui la citent.
- **Autorité après restauration :** AGG-07, inchangée.

## Projections

Les projections ne sont pas restaurées comme partie de l'état métier. Elles sont reconstruites à partir des Aggregate Roots et de leurs références après admission de l'ensemble autoritaire.

Cette décision est nécessaire parce que :

- PC-03 définit toute projection comme dérivée et non autoritaire ;
- restaurer une projection comme vérité pourrait réintroduire un état ancien ou incomplet ;
- une reconstruction permet de vérifier sa provenance et son écart éventuel avec l'autorité restaurée ;
- l'indisponibilité ou l'incomplétude peut déjà être exprimée par `PF-06` et `PF-07`.

Une reconstruction incomplète n'annule pas l'existence des autorités restaurées, mais elle interdit de déclarer les Use Cases dépendant de PC-03 pleinement disponibles. Aucun résultat de recherche ou de consultation ne peut être présenté comme complet tant que les garanties de PC-03 ne sont pas satisfaites.

## Historique

AGG-06 est l'autorité de la continuité temporelle. Il fait partie de l'ensemble à restaurer au même titre que les états courants.

L'Historique :

- doit être restauré sans modification ;
- ne peut pas être recalculé depuis les états courants ;
- ne peut pas être reconstitué depuis les Domain Events ;
- ne peut pas être remplacé par une projection historique ;
- doit rester compatible avec l'identité, l'état courant et les Changements significatifs de chaque sujet ;
- protège la continuité en empêchant qu'un présent restauré efface ou invente son passé.

Si l'Historique requis est absent, incomplet, désordonné ou incompatible avec l'état courant, la restauration de l'ensemble est refusée.

## Documentation

Le contenu documentaire fait partie de l'état métier possédé par AGG-05. Il n'est pas une ressource extérieure substituable dans le Scope 0.1.

Les garanties attendues sont :

- contenu restauré fidèlement ;
- contexte, provenance et rattachement préservés ;
- absence de remplacement par un résumé ou une projection ;
- distinction maintenue entre Documentation, Observation et Information acceptée ;
- impossibilité de déclarer l'ensemble complet si un contenu requis ou son rattachement manque ;
- confidentialité et lisibilité identiques à celles attendues avant l'interruption.

Une Documentation orpheline, privée de son contenu ou rattachée à une identité incompatible entraîne un refus de restauration.

## Domain Events

Les Domain Events sont des faits métier reconnus au moment où une décision aboutit. Ils ne constituent pas une source de reconstruction des Aggregate Roots.

Pendant une restauration :

- ils ne sont pas rejoués ;
- ils ne sont pas recréés ;
- ils ne sont pas réémis ;
- ils ne sont pas interprétés pour produire une nouvelle décision ;
- leur éventuelle conservation ne remplace jamais AGG-06 ;
- seuls les faits déjà représentés dans les autorités restaurées et dans l'Historique conservent leur portée.

Une restauration n'est pas un fait métier nouveau dans le catalogue `DE-001` à `DE-017`. Elle rétablit la disponibilité d'un état déjà reconnu. Créer artificiellement des Domain Events pendant cette opération ferait croire que les décisions métier ont eu lieu une seconde fois.

## Responsabilités

### Responsabilité architecturale de continuité métier

Une responsabilité architecturale extérieure à l'application porte l'admissibilité et l'indivisibilité de la restauration. Elle n'est ni un Aggregate, ni un Domain Service, ni un Application Service, ni un Port, ni un Adapter.

Elle doit :

- identifier le dernier ensemble d'états entièrement confirmé ;
- établir sa portée et sa fraîcheur ;
- vérifier la présence de toutes les autorités requises ;
- vérifier la cohérence des identités et références ;
- vérifier la compatibilité d'AGG-06 avec les états courants ;
- refuser toute restauration partielle, ambiguë ou incompatible ;
- rendre l'ensemble disponible de manière indivisible ;
- maintenir les projections indisponibles ou explicitement incomplètes jusqu'à leur reconstruction ;
- restituer un échec explicite lorsque la continuité ne peut pas être garantie.

Cette responsabilité décide uniquement si un ensemble déjà reconnu est admissible à la restauration. Elle ne décide jamais si le contenu métier est correct, ne valide aucun Aggregate et ne change aucune autorité.

### Aggregates et Domain Services

- les Aggregates restent les seules autorités de leurs états et de leurs invariants ;
- les Domain Services ne sont pas rejoués pendant une restauration ;
- DS-01 et DS-05 ne réévaluent pas les identités déjà reconnues ;
- DS-04 ne recrée pas la complétude : celle-ci doit déjà être présente dans l'ensemble restauré ;
- toute nouvelle décision après reprise suit les contrats ordinaires.

### Application Services

Aucun Application Service existant ne porte la restauration. Celle-ci ne correspond à aucun des 16 Use Cases et ne doit pas être ajoutée implicitement à leur orchestration.

Les Application Services doivent seulement :

- interrompre un Use Case lorsque ses autorités sont indisponibles ;
- ne pas reprendre automatiquement une intention interrompue ;
- utiliser les Ports ordinaires après confirmation de la restauration ;
- conserver les catégories d'échec sans les transformer en résultat métier.

### Adapters

Un Adapter peut transmettre une observation d'indisponibilité ou le résultat de la responsabilité de continuité. Il ne décide jamais qu'un ensemble est cohérent, complet ou restaurable. Aucune validation de restauration ne lui appartient.

## Suffisance des Ports existants

### PC-01

- PC-01-L rend les Aggregate Roots restaurées accessibles après admission de l'ensemble.
- PC-01-P continue de préserver les nouvelles décisions individuelles après reprise.
- PC-01 ne réalise pas la restauration et ne peut pas reconstruire une autorité manquante.

### PC-02

- PC-02 garantit avant l'interruption que les décisions reconnues par DS-04 deviennent durables comme un ensemble.
- Cette garantie détermine quels états coordonnés sont admissibles à la continuité.
- PC-02 ne rejoue pas une coordination et ne restaure pas l'ensemble du produit.

### PC-03

- PC-03 restitue les projections reconstruites après restauration des autorités.
- `PF-06` et `PF-07` signalent leur indisponibilité ou leur incomplétude.
- PC-03 ne participe jamais à la décision de restauration.

### PC-04

PC-04 reste différé. La restauration ne constitue pas une mise à disposition de Domain Events et ne justifie pas son activation.

### Décision concernant un nouveau Port

**Aucun nouveau Port n'est nécessaire.**

Un Port exprime un besoin d'un Application Service. Or aucun Application Service ne porte la restauration et aucun Use Case 0.1 ne la déclenche. Créer un Port transférerait artificiellement une responsabilité de continuité vers l'application ou imposerait un nouveau Use Case.

La responsabilité architecturale de continuité agit sur la disponibilité cohérente de l'ensemble autoritaire, avant que l'application ne reprenne ses activités. PC-01, PC-02 et PC-03 suffisent ensuite à maintenir leurs contrats ordinaires.

## Décision de restauration

### Admission

Une restauration est admise seulement si toutes les conditions suivantes sont satisfaites :

1. la portée de l'ensemble est connue et couvre toutes les autorités 0.1 concernées ;
2. sa fraîcheur est identifiable ;
3. chaque Aggregate Root attendue est présente une seule fois ;
4. les références entre Aggregates sont résolues et compatibles ;
5. AGG-06 est présent et cohérent avec les états courants ;
6. chaque contenu documentaire requis est présent avec son contexte et sa provenance ;
7. les inconnus, incertitudes et contradictions sont préservés ;
8. aucune autorité courante plus récente ou incompatible ne serait remplacée silencieusement ;
9. l'ensemble peut être rendu disponible sans état partiel ;
10. aucune décision, aucun fait et aucune information ne doivent être inventés pour compléter l'ensemble.

### Refus

La restauration est refusée dans les situations suivantes :

- état autoritaire incomplet ;
- Aggregate Root requise absente ou dupliquée ;
- référence invalide ou identité incohérente ;
- cohérence inter-Aggregates rompue ;
- état courant plus récent ou incompatible ;
- Historique absent, incomplet, altéré ou incompatible ;
- contenu documentaire absent, altéré ou orphelin ;
- portée ou fraîcheur inconnue ;
- projection présentée comme autorité ;
- nécessité de déduire une information manquante ;
- impossibilité de garantir la disponibilité indivisible ;
- échec non classifiable.

### Échecs et résultat observable

Les catégories existantes suffisent :

- `PF-02` pour une référence invalide ;
- `PF-03` pour une autorité ou une capacité indisponible ;
- `PF-05` pour un conflit avec un état plus récent ;
- `PF-06` et `PF-07` pour les projections après restauration ;
- `PF-08` pour une cohérence, une complétude ou une continuité non garantie ;
- `PF-09` lorsqu'aucune catégorie plus précise n'est établie.

Une restauration refusée laisse l'application indisponible pour les Use Cases dépendant des autorités concernées. Elle n'est jamais convertie en restauration partielle ou en succès assorti d'une correction implicite.

## Interdictions

Il est interdit :

- de restaurer un état en contournant ses invariants ou son autorité ;
- de rendre disponible seulement une partie de l'ensemble comme si la restauration était complète ;
- de reconstruire une Aggregate Root depuis une projection ;
- de déduire l'Historique depuis l'état courant ;
- de modifier, compléter, réordonner ou nettoyer l'Historique ;
- de produire, rejouer ou recréer des Domain Events ;
- d'inventer une Information, une Source, une Observation ou une Documentation manquante ;
- de remplacer un contenu documentaire par un résumé ;
- de convertir une indisponibilité en absence ;
- de remplacer silencieusement un état plus récent ;
- de reprendre automatiquement un Use Case interrompu ;
- de confier la validation de la restauration à un Adapter ;
- d'utiliser PC-03 comme source autoritaire ;
- d'activer PC-04 pour réaliser la continuité.

## Matrice de continuité

| Élément métier | Autoritaire | Restaurable | Reconstruisible | Recalculable | Responsable de la décision |
| --- | --- | --- | --- | --- | --- |
| État d'AGG-01 | Oui | Oui, intégralement | Non | Non | AGG-01 pour le sens ; responsabilité de continuité pour l'admission de l'ensemble |
| État d'AGG-02 | Oui | Oui, intégralement | Non | Non | AGG-02 pour le sens ; responsabilité de continuité pour l'admission de l'ensemble |
| État d'AGG-03 | Oui | Oui, intégralement | Non | Non | AGG-03 pour le sens ; responsabilité de continuité pour l'admission de l'ensemble |
| État d'AGG-04 | Oui | Oui, intégralement | Non | Non | AGG-04 pour le sens ; responsabilité de continuité pour l'admission de l'ensemble |
| État et contenu d'AGG-05 | Oui | Oui, intégralement | Non | Non | AGG-05 pour le sens ; responsabilité de continuité pour l'admission de l'ensemble |
| État d'AGG-06 | Oui | Oui, intégralement | Non | Non | AGG-06 pour la continuité ; responsabilité de continuité pour l'admission de l'ensemble |
| État d'AGG-07 | Oui | Oui, intégralement | Non | Non | AGG-07 pour le sens ; responsabilité de continuité pour l'admission de l'ensemble |
| Références reconnues entre Aggregates | Oui, chez leur propriétaire | Oui avec leurs propriétaires | Non | Non | Aggregate propriétaire de chaque référence |
| Inconnus, incertitudes et contradictions | Oui, dans l'Aggregate concerné | Oui sans changement | Non | Non | Aggregate propriétaire de la connaissance concernée |
| Informations de portée et de fraîcheur de l'ensemble | Non, elles qualifient la continuité | Oui avec l'ensemble concerné | Non | Non | Responsabilité architecturale de continuité |
| Projections PC-03 | Non | Non comme état métier | Oui | Oui, depuis les autorités | Responsabilité de projection sous les garanties de PC-03 |
| Domain Events | Faits reconnus, pas états de restauration | Non comme source indépendante | Non | Non | Émetteur original pour le fait ; AGG-06 pour sa portée historique |
| État temporaire d'un Application Service | Non | Non | Non | Non | Aucune autorité ; l'intention doit être exprimée à nouveau |
| Résultat ou échec de Port | Non | Non | Non | Non | Port pour la catégorie du résultat courant uniquement |

## Risques

| Risque | Cause | Impact | Prévention |
| --- | --- | --- | --- |
| Perte d'autorité | Une projection ou une responsabilité extérieure choisit l'état restauré | Double autorité et décision métier implicite | Restaurer uniquement des états déjà confirmés ; maintenir chaque Aggregate comme propriétaire du sens |
| Restauration partielle | Certaines autorités deviennent disponibles avant les autres | Faux succès, références brisées et connaissance incohérente | Admettre et rendre disponible l'ensemble autoritaire de manière indivisible |
| Projection utilisée comme autorité | Une projection disponible remplace un état manquant | Information ancienne ou dérivée présentée comme vraie | Exclure les projections de l'ensemble restaurable et les reconstruire après admission |
| Historique incohérent | AGG-06 manque, diverge ou est recalculé | Présent sans passé explicable et violation de `INV-HIS-001` | Restaurer AGG-06 intégralement et refuser toute incompatibilité |
| Documentation orpheline | Contenu, contexte, Source ou Article manque | Perte de sens et violation de `INV-DOC-001` | Restaurer AGG-05 avec son contenu et toutes ses références ou refuser l'ensemble |
| Événements recréés | La restauration rejoue ou réémet des faits | Décisions comptées deux fois et réactions indues | Interdire tout rejeu, toute recréation et toute réémission |
| Rupture de continuité métier | Une intention interrompue est supposée réussie ou un état récent est écrasé | Perte silencieuse et état contradictoire | Revenir au dernier ensemble confirmé, détecter les conflits récents et exiger une nouvelle intention |

## Impact sur l'architecture existante

| Élément | Modification requise | Justification |
| --- | --- | --- |
| Aggregates | Aucune | Leurs autorités et invariants restent inchangés |
| Domain Services | Aucune | Aucune décision n'est rejouée pendant la restauration |
| Domain Events | Aucune | Le catalogue reste inchangé et aucun fait nouveau n'est créé |
| Use Cases | Aucune | La restauration n'est pas ajoutée comme intention métier implicite |
| Application Services | Aucune | Ils reprennent uniquement après admission de l'ensemble |
| Ports | Aucune | PC-01, PC-02 et PC-03 conservent leurs contrats ; PC-04 reste différé |
| Projections | Aucune autorité nouvelle | Elles sont reconstruites sous les garanties existantes de PC-03 |
| Architecture globale | Responsabilité complétée | La continuité possède désormais une frontière, des critères d'admission et une décision de refus explicite |

La nouvelle responsabilité n'acquiert aucune information métier et ne concurrence aucun propriétaire existant. Elle ferme uniquement la question : « cet ensemble déjà reconnu peut-il être rétabli sans rupture d'autorité ni de cohérence ? »

## Contrôles de conformité

- `ARC-CON-005` dispose désormais d'une responsabilité architecturale explicite.
- `ARC-CON-006` est reliée au dernier ensemble entièrement confirmé et à l'absence de reprise silencieuse.
- toutes les autorités de Release 0.1 sont incluses dans l'ensemble restaurable.
- AGG-06 et AGG-05 sont reconnus comme des états métier indispensables.
- les projections sont reconstruites et restent non autoritaires.
- les Domain Events ne sont ni rejoués ni recréés.
- les échecs de restauration utilisent les catégories existantes.
- aucun Aggregate, Domain Service, Application Service, Use Case ou Port n'est modifié.
- aucun nouveau Port n'est nécessaire.

## Conclusion

**READY FOR ARCHITECTURE CERTIFICATION**

La continuité métier de Release 0.1 possède désormais une frontière explicite. Seul un ensemble complet d'états déjà reconnus peut être restauré ; les autorités, l'Historique et la Documentation restent inchangés, tandis que les projections sont reconstruites et que les Domain Events ne sont jamais recréés.

Cette responsabilité ferme l'écart `ARC-CON-005` sans modifier les Aggregates, Domain Services, Application Services, Use Cases ou Ports. L'architecture peut être soumise à une nouvelle certification.
