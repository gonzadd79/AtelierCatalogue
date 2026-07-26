// DÉMONSTRATION FICTIVE — ces emplacements n'existent pas dans l'atelier de l'utilisateur.
window.AtelierCatalogSampleData = window.AtelierCatalogSampleData || {};
window.AtelierCatalogSampleData.locations = {
  schemaVersion: "1.0.0",
  generatedAt: null,
  locations: [
    { id: "demo-workshop", name: "Atelier de démonstration", parentId: null, type: "room" },
    { id: "demo-drawer-electronics", name: "Tiroir électronique fictif", parentId: "demo-workshop", type: "drawer" },
    { id: "demo-drawer-power", name: "Tiroir alimentation fictif", parentId: "demo-workshop", type: "drawer" },
    { id: "demo-shelf-computing", name: "Étagère informatique fictive", parentId: "demo-workshop", type: "shelf" },
    { id: "demo-shelf-network", name: "Étagère réseau fictive", parentId: "demo-workshop", type: "shelf" },
    { id: "demo-drawer-audio", name: "Tiroir audio fictif", parentId: "demo-workshop", type: "drawer" },
    { id: "demo-workbench", name: "Banc de démonstration", parentId: "demo-workshop", type: "workbench" },
    { id: "demo-tool-drawer", name: "Tiroir à outils fictif", parentId: "demo-workshop", type: "drawer" }
  ]
};
