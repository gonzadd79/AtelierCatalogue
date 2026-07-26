# Médias et annexes

Un **média** sert principalement à voir : photo, schéma, brochage, illustration ou capture. Une **annexe** est un fichier à consulter ou conserver : datasheet, notice, facture, note Markdown, configuration, firmware ou archive. Leur nature, origine et droits restent attachés aux métadonnées.

## Organisation

```text
media/items/<item-id>/
annexes/items/<item-id>/
media/projects/<project-id>/
annexes/projects/<project-id>/
media/shared/
annexes/shared/
```

Nom recommandé : `<id>-<role>-<vue>-YYYYMMDD-vNN.<extension>`, en minuscules ASCII, tirets, sans caractères interdits Windows (`<>:"/\\|?*`) ni nom réservé. Exemple de forme : `item-123-owned-front-20260726-v01.jpg`. Le nom décrit, mais les métadonnées restent la référence.

## Originaux et dérivés

Les originaux déposés dans `intake/` sont conservés sans modification automatique. Une optimisation ou miniature est un nouveau fichier relié à l'original ; aucun écrasement silencieux. Une collision crée une nouvelle version ou déclenche une validation. Les doublons sont signalés avant suppression. Un fichier absent reste référencé comme manquant avec un diagnostic visible, sans substitution trompeuse.

Photos personnelles, photos de lots, références externes, schémas, brochages, captures et photos de projet ont des rôles distincts. Une photo Web ne devient jamais une photo de l'objet possédé. Son URL, sa source, ses droits et sa date de consultation sont conservés.

## Droits et hors-ligne

Une image trouvée sur Internet ne peut pas être copiée automatiquement sans vérification des droits et conditions d'utilisation. Datasheets, notices et firmwares conservent leurs licences. `isAvailableOffline` indique si une annexe locale existe ; une URL seule ne garantit rien hors ligne. Factures et photos privées demandent une décision de confidentialité avant partage ou versionnement.
