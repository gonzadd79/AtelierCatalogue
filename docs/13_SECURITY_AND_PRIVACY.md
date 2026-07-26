# Sécurité et vie privée

AtelierCatalog ne comporte ni compte ni télémétrie. Les données restent locales, mais elles ne sont pas pour autant sans risque : une copie ou un partage du dossier expose son contenu.

Factures et documents peuvent contenir nom, adresse, coordonnées, numéros de commande ou moyens de paiement. Les photos peuvent révéler domicile, étiquettes, écrans ou réseau privé. Avant versionnement, sauvegarde distante ou partage, inventorier et retirer ce qui n'est pas nécessaire ; les décisions de conservation restent ouvertes.

## Règles applicatives

- traiter notes, noms, légendes et champs importés comme du texte, jamais comme du HTML de confiance ; utiliser `textContent` et éviter l'injection ;
- valider que les chemins publiés sont relatifs, restent dans les dossiers autorisés et n'utilisent pas de traversée `..` ;
- neutraliser noms réservés, doubles extensions trompeuses et caractères dangereux ;
- signaler clairement un lien externe et laisser l'utilisateur décider de l'ouvrir ;
- ne charger aucun JavaScript tiers ; toute future dépendance exige revue, copie locale justifiée et ADR ;
- considérer PDF, archives, firmwares et documents entrants comme potentiellement malveillants ; les ouvrir avec des logiciels à jour, sans exécution automatique ;
- sauvegarder plusieurs copies, vérifier leur lisibilité et protéger les supports selon leur sensibilité.

Le catalogue statique n'offre ni chiffrement ni contrôle d'accès. Le système de fichiers et la politique de sauvegarde portent ces protections. Une publication destinée à autrui doit être une copie revue et expurgée, jamais le dossier personnel partagé par défaut.
