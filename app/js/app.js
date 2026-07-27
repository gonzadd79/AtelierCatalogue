(function (global) {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    try {
      var mode = document.body.getAttribute("data-catalog-mode") === "demo" ? "demo" : "real";
      var data = mode === "demo" ? global.AtelierCatalogSampleData : global.AtelierCatalogData;
      if (!data) {
        throw new Error(mode === "demo"
          ? "Les données fictives n'ont pas été chargées. Vérifiez les fichiers du dossier samples/."
          : "Les données locales AtelierCatalog n'ont pas été chargées. Vérifiez les fichiers du dossier data/.");
      }
      var summary = global.AtelierCatalog.catalog.getDashboardSummary(data);
      var items = global.AtelierCatalog.catalog.getCatalogItems(data);
      global.AtelierCatalog.ui.renderDashboard(summary, mode);
      global.AtelierCatalog.ui.renderCatalog(items);
      global.AtelierCatalog.ui.initializeSearch(items, global.AtelierCatalog.search.filterItems);
    } catch (error) {
      global.AtelierCatalog.ui.renderError(error);
    }
  });
}(window));
