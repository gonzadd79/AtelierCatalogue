(function (global) {
  "use strict";

  var COMPONENTS = ["total", "reserved", "used", "outOfService"];

  function getAvailableQuantity(quantity) {
    var values;
    var unavailable;
    if (!quantity || typeof quantity !== "object") {
      return null;
    }
    values = COMPONENTS.map(function (component) {
      return quantity[component];
    });
    unavailable = values.some(function (value) {
      return typeof value !== "number" || !Number.isFinite(value) || value < 0;
    });
    if (unavailable || values[1] + values[2] + values[3] > values[0]) {
      return null;
    }
    return values[0] - values[1] - values[2] - values[3];
  }

  global.AtelierCatalog = global.AtelierCatalog || {};
  global.AtelierCatalog.quantities = {
    getAvailableQuantity: getAvailableQuantity
  };
}(window));
