(function (global) {
  "use strict";

  var STATES = {
    AVAILABLE: "AVAILABLE",
    INSUFFICIENT: "INSUFFICIENT",
    MISSING: "MISSING"
  };

  function indexInventory(items) {
    return (Array.isArray(items) ? items : []).reduce(function (index, item) {
      if (item && typeof item.id === "string") {
        index[item.id] = item;
      }
      return index;
    }, Object.create(null));
  }

  function analyzeUsage(usage, inventoryIndex, getAvailableQuantity) {
    var item = inventoryIndex[usage.itemId];
    var availableQuantity;
    if (!item) {
      return {
        state: STATES.MISSING,
        availableQuantity: null
      };
    }
    availableQuantity = getAvailableQuantity(item.quantity);
    return {
      state: typeof availableQuantity === "number" && availableQuantity >= usage.quantity
        ? STATES.AVAILABLE
        : STATES.INSUFFICIENT,
      availableQuantity: availableQuantity
    };
  }

  function analyzeProject(project, inventoryItems, getAvailableQuantity) {
    var usages = project && Array.isArray(project.itemUsages) ? project.itemUsages : [];
    var inventoryIndex = indexInventory(inventoryItems);
    var results = usages.map(function (usage) {
      return analyzeUsage(usage, inventoryIndex, getAvailableQuantity);
    });
    var summary = results.reduce(function (counts, result) {
      counts.total += 1;
      if (result.state === STATES.AVAILABLE) {
        counts.available += 1;
      } else if (result.state === STATES.INSUFFICIENT) {
        counts.insufficient += 1;
      } else {
        counts.missing += 1;
      }
      return counts;
    }, { total: 0, available: 0, insufficient: 0, missing: 0 });

    return {
      usages: results,
      summary: summary
    };
  }

  global.AtelierCatalog = global.AtelierCatalog || {};
  global.AtelierCatalog.feasibility = {
    STATES: STATES,
    analyzeProject: analyzeProject
  };
}(window));
