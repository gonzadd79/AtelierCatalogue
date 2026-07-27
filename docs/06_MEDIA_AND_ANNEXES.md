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

Les images fictives restent séparées sous `samples/assets/images/`. Elles ne doivent jamais être copiées dans `media/` ni associées à un article réel.

## Association d'une photo à un article

Une photo est associée explicitement dans le tableau `media` de l'article. Son champ `path` contient un chemin relatif à `index.html`, par exemple `media/items/item-123/item-123-owned-front-20260726-v01.jpg`. `isPrimary: true` désigne la photo affichée en priorité sur la carte et dans la fiche. Si aucune image principale n'est définie, la première image locale valide est utilisée.

Le chemin doit rester relatif, utiliser des barres obliques `/` et ne contenir ni URL, ni chemin absolu, ni remontée `../`. Un `thumbnailPath` local peut être fourni et sera préféré ; si ce chemin est invalide, l'image principale reste utilisable. Lorsqu'un fichier référencé est absent ou illisible, l'interface rétablit automatiquement le placeholder sans afficher d'icône cassée.

Exemple minimal :

```js
media: [{
  id: "item-123-photo-main",
  type: "photo",
  role: "main",
  path: "media/items/item-123/item-123-owned-front-20260726-v01.jpg",
  isPrimary: true,
  showsOwnedItem: true
}]
```

Nom recommandé : `<id>-<role>-<vue>-YYYYMMDD-vNN.<extension>`, en minuscules ASCII, tirets, sans caractères interdits Windows (`<>:"/\\|?*`) ni nom réservé. Exemple de forme : `item-123-owned-front-20260726-v01.jpg`. Le nom décrit, mais les métadonnées restent la référence.

## Originaux et dérivés

Les originaux déposés dans `intake/` sont conservés sans modification automatique. Une optimisation ou miniature est un nouveau fichier relié à l'original ; aucun écrasement silencieux. Une collision crée une nouvelle version ou déclenche une validation. Les doublons sont signalés avant suppression. Un fichier absent reste référencé comme manquant avec un diagnostic visible, sans substitution trompeuse.

Photos personnelles, photos de lots, références externes, schémas, brochages, captures et photos de projet ont des rôles distincts. Une photo Web ou générée ne devient jamais une photo de l'objet possédé. Son URL ou son origine, sa source, ses droits et sa date de consultation sont conservés ; `showsOwnedItem` reste alors à `false`.

## Droits et hors-ligne

Une image trouvée sur Internet ne peut pas être copiée automatiquement sans vérification des droits et conditions d'utilisation. Datasheets, notices et firmwares conservent leurs licences. `isAvailableOffline` indique si une annexe locale existe ; une URL seule ne garantit rien hors ligne. Factures et photos privées demandent une décision de confidentialité avant partage ou versionnement.
