(function (global) {
  "use strict";

  function requireCollection(data, namespace, collectionName, description) {
    if (!data || !data[namespace] || !Array.isArray(data[namespace][collectionName])) {
      throw new Error("Le fichier de données " + description + " est absent ou invalide.");
    }
    return data[namespace][collectionName];
  }

  function getDashboardSummary(data) {
    return {
      itemCount: requireCollection(data, "inventory", "items", "d'inventaire").length,
      projectCount: requireCollection(data, "projects", "projects", "des projets").length,
      categoryCount: requireCollection(data, "catalogs", "categories", "des catalogues").length
    };
  }

  function indexById(collection) {
    return collection.reduce(function (index, entry) {
      if (entry && typeof entry.id === "string") {
        index[entry.id] = entry;
      }
      return index;
    }, Object.create(null));
  }

  function firstRelatedName(ids, index, fallback) {
    if (!Array.isArray(ids)) {
      return fallback;
    }
    for (var position = 0; position < ids.length; position += 1) {
      if (index[ids[position]] && index[ids[position]].name) {
        return index[ids[position]].name;
      }
    }
    return fallback;
  }

  function formatQuantity(quantity, stockUnit) {
    if (!quantity || quantity.unknown === true || typeof quantity.total !== "number") {
      return "Quantité inconnue";
    }

    if (stockUnit === "piece") {
      return quantity.total + (quantity.total > 1 ? " pièces" : " pièce");
    }
    if (stockUnit === "pair") {
      return quantity.total + (quantity.total > 1 ? " paires" : " paire");
    }
    return stockUnit ? quantity.total + " " + stockUnit : String(quantity.total);
  }

  function getLocalImagePath(media) {
    if (!Array.isArray(media)) {
      return null;
    }
    var preferred = media.find(function (asset) { return asset && asset.isPrimary; }) || media[0];
    if (!preferred || typeof preferred.path !== "string") {
      return null;
    }
    var path = preferred.thumbnailPath || preferred.path;
    if (/^(?:[a-z]+:|\/|\\|\/\/)/i.test(path) || /(?:^|\/)\.\.(?:\/|$)/.test(path)) {
      return null;
    }
    return path;
  }

  function getCatalogItems(data) {
    var items = requireCollection(data, "inventory", "items", "d'inventaire");
    var categories = indexById(requireCollection(data, "catalogs", "categories", "des catalogues"));
    var locations = indexById(requireCollection(data, "locations", "locations", "des emplacements"));
    var projects = indexById(requireCollection(data, "projects", "projects", "des projets"));

    return items.map(function (item) {
      return {
        id: item.id,
        name: item.name || "Article sans nom",
        categoryName: item.categoryId && categories[item.categoryId]
          ? categories[item.categoryId].name
          : "Catégorie inconnue",
        locationName: firstRelatedName(item.locationIds, locations, "Emplacement inconnu"),
        quantityLabel: formatQuantity(item.quantity, item.stockUnit),
        projectName: firstRelatedName(item.projectIds, projects, null),
        imagePath: getLocalImagePath(item.media)
      };
    });
  }

  global.AtelierCatalog = global.AtelierCatalog || {};
  global.AtelierCatalog.catalog = {
    getDashboardSummary: getDashboardSummary,
    getCatalogItems: getCatalogItems
  };
}(window));
