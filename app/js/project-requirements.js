(function (global) {
  "use strict";

  function indexInventory(items) {
    return (Array.isArray(items) ? items : []).reduce(function (index, item) {
      if (item && typeof item.id === "string") {
        index[item.id] = item;
      }
      return index;
    }, Object.create(null));
  }

  function createProjectRequirements(project, inventoryItems, feasibility) {
    var usages = project && Array.isArray(project.itemUsages) ? project.itemUsages : [];
    var feasibilityUsages = feasibility && Array.isArray(feasibility.usages) ? feasibility.usages : [];
    var inventoryIndex = indexInventory(inventoryItems);
    var requirements;
    var totalMissingQuantity;

    if (feasibilityUsages.length !== usages.length) {
      throw new Error("L'analyse de faisabilité ne correspond pas aux utilisations du projet.");
    }

    requirements = usages.reduce(function (result, usage, usageIndex) {
      var feasibilityResult = feasibilityUsages[usageIndex];
      var item;
      var availableQuantity;
      var missingQuantity;
      if (feasibilityResult.state !== "INSUFFICIENT" && feasibilityResult.state !== "MISSING") {
        return result;
      }
      item = inventoryIndex[usage.itemId];
      availableQuantity = feasibilityResult.state === "MISSING"
        ? 0
        : feasibilityResult.availableQuantity;
      missingQuantity = typeof availableQuantity === "number"
        ? Math.max(usage.quantity - availableQuantity, 0)
        : null;
      result.push({
        itemId: usage.itemId,
        itemName: item && item.name ? item.name : "Article introuvable (" + usage.itemId + ")",
        requestedQuantity: usage.quantity,
        availableQuantity: availableQuantity,
        missingQuantity: missingQuantity,
        state: feasibilityResult.state
      });
      return result;
    }, []);

    totalMissingQuantity = requirements.every(function (requirement) {
      return typeof requirement.missingQuantity === "number";
    })
      ? requirements.reduce(function (total, requirement) {
        return total + requirement.missingQuantity;
      }, 0)
      : null;

    return {
      requirements: requirements,
      summary: {
        total: requirements.length,
        totalMissingQuantity: totalMissingQuantity
      }
    };
  }

  global.AtelierCatalog = global.AtelierCatalog || {};
  global.AtelierCatalog.projectRequirements = {
    create: createProjectRequirements
  };
}(window));
