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

  function filterItems(items, criteria) {
    var normalizedQuery;
    criteria = typeof criteria === "string" ? { query: criteria } : criteria || {};
    normalizedQuery = normalize(criteria.query);
    return items.filter(function (item) {
      var matchesQuery = !normalizedQuery || [item.name, item.categoryName, item.locationName].some(function (value) {
        return normalize(value).indexOf(normalizedQuery) !== -1;
      });
      var matchesCategory = !criteria.categoryName || item.categoryName === criteria.categoryName;
      var matchesLocation = !criteria.locationName || item.locationName === criteria.locationName;
      return matchesQuery && matchesCategory && matchesLocation;
    });
  }

  function getFilterValues(items) {
    function uniqueSorted(fieldName) {
      var values = items.map(function (item) {
        return item[fieldName];
      }).filter(function (value, index, allValues) {
        return value && allValues.indexOf(value) === index;
      });
      return values.sort(function (left, right) {
        return left.localeCompare(right, "fr", { sensitivity: "base" });
      });
    }
    return {
      categories: uniqueSorted("categoryName"),
      locations: uniqueSorted("locationName")
    };
  }

  global.AtelierCatalog = global.AtelierCatalog || {};
  global.AtelierCatalog.search = {
    filterItems: filterItems,
    getFilterValues: getFilterValues
  };
}(window));
