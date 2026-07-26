# Principes produit

Chaque principe est permanent ; une exception exige une décision documentée.

## 1. Inconnu reste inconnu

**Énoncé.** L'absence de connaissance n'est ni zéro ni valeur par défaut. **Pourquoi.** Une fausse certitude est plus dangereuse qu'un trou visible. **Conséquence.** Champ omis, `null` ou statut inconnu. **Violation.** Saisir quantité `1` parce qu'une photo montre un exemplaire.

## 2. Ne jamais inventer

**Énoncé.** Référence, fabricant, mesure, compatibilité et certification exigent une preuve. **Pourquoi.** Le catalogue doit mériter confiance. **Conséquence.** La donnée cite sa source ou reste à confirmer. **Violation.** Copier les spécifications d'un module visuellement voisin.

## 3. Observation et déduction sont distinctes

**Énoncé.** Ce qui est vu, déclaré, documenté, estimé ou déduit garde sa nature. **Pourquoi.** Deux faits semblables n'ont pas le même poids. **Conséquence.** Sources et statut accompagnent les affirmations. **Violation.** Présenter « probablement 10 A » comme un marquage lu.

## 4. Incertitude visible

**Énoncé.** Identification et caractéristiques affichent statut et confiance. **Pourquoi.** L'interface ne doit pas rendre une hypothèse affirmative. **Conséquence.** « proposé », « ambigu » et « à confirmer » restent visibles. **Violation.** Masquer une faible confiance dans la fiche.

## 5. Expliquer avant de recommander

**Énoncé.** Toute recommandation future expose contraintes, sources et inconnues. **Pourquoi.** Une compatibilité dépend des conditions d'usage. **Conséquence.** Montrer tension, courant, dissipation et marges. **Violation.** Conseiller un convertisseur sur sa seule puissance annoncée.

## 6. Photo personnelle et photo externe ne se confondent pas

**Énoncé.** Une photo de référence ne représente jamais l'exemplaire possédé. **Pourquoi.** Variantes et clones se ressemblent. **Conséquence.** `showsOwnedItem`, rôle, origine et source sont explicites. **Violation.** Utiliser une annonce vendeur comme photo principale réelle.

## 7. Portabilité réelle

**Énoncé.** Le dossier complet doit fonctionner après déplacement. **Pourquoi.** La propriété des données implique leur mobilité. **Conséquence.** Chemins relatifs et tests de copie. **Violation.** Lier une photo par un chemin propre à la machine.

## 8. Fonctionnement hors ligne

**Énoncé.** La consultation essentielle ne dépend pas du réseau. **Pourquoi.** L'atelier et les archives doivent rester accessibles. **Conséquence.** Ressources essentielles locales, aucun CDN. **Violation.** Charger une bibliothèque ou police distante obligatoire.

## 9. Propriété des données

**Énoncé.** L'utilisateur peut copier, sauvegarder, versionner et restaurer son catalogue. **Pourquoi.** Aucun service tiers ne doit le retenir. **Conséquence.** Formats lisibles et dossier autonome. **Violation.** Exiger un compte cloud pour ouvrir une fiche.

## 10. Documentation vivante

**Énoncé.** Règles et architecture évoluent avec le produit. **Pourquoi.** Un comportement non documenté devient une dette. **Conséquence.** Une Story met à jour les documents concernés. **Violation.** Changer le format de données sans ADR ni modèle.

## 11. Simplicité

**Énoncé.** La solution la plus petite répondant au besoin est préférée. **Pourquoi.** Le catalogue personnel doit rester maintenable. **Conséquence.** Pas de serveur ni framework en V1. **Violation.** Introduire une base distribuée pour afficher une collection locale.

## 12. Développement incrémental

**Énoncé.** Chaque Story apporte une tranche testable. **Pourquoi.** Les retours réels doivent guider la suite. **Conséquence.** Petits changements prêts à committer. **Violation.** Développer toute l'administration avant une première fiche consultable.

## 13. Aucune fonctionnalité cachée

**Énoncé.** Aucun traitement ou transfert invisible. **Pourquoi.** L'utilisateur doit comprendre le système. **Conséquence.** Les actions sont explicites. **Violation.** Envoyer silencieusement une photo à un service.

## 14. Aucun changement architectural silencieux

**Énoncé.** Une nouvelle dépendance ou frontière est décidée publiquement. **Pourquoi.** La portabilité repose sur des invariants. **Conséquence.** ADR et documentation avant adoption. **Violation.** Rendre un serveur obligatoire lors d'une Story UI.
