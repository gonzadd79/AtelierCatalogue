(function (global) {
  "use strict";

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("fr")
      .replace(/\s+/g, " ")
      .trim();
  }

  function filterItems(items, query) {
    var normalizedQuery = normalize(query);
    if (!normalizedQuery) {
      return items.slice();
    }
    return items.filter(function (item) {
      return [item.name, item.categoryName, item.locationName].some(function (value) {
        return normalize(value).indexOf(normalizedQuery) !== -1;
      });
    });
  }

  global.AtelierCatalog = global.AtelierCatalog || {};
  global.AtelierCatalog.search = { filterItems: filterItems };
}(window));
