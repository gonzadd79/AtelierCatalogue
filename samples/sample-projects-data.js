// DÉMONSTRATION FICTIVE — aucun projet ne provient de l'utilisateur.
window.AtelierCatalogSampleData = window.AtelierCatalogSampleData || {};
window.AtelierCatalogSampleData.projects = {
  schemaVersion: "1.0.0",
  generatedAt: null,
  projects: [
    {
      id: "demo-environment-monitor",
      name: "Suivi environnemental de démonstration",
      description: "Projet fictif reliant une carte, un capteur et une alimentation de démonstration.",
      status: "demo",
      itemUsages: [
        { itemId: "demo-esp32-board", quantity: 1, role: "Contrôleur fictif", isMissing: false, alternativeItemIds: [] },
        { itemId: "demo-temperature-sensor", quantity: 1, role: "Mesure fictive", isMissing: false, alternativeItemIds: [] },
        { itemId: "demo-dc-dc-module", quantity: 1, role: "Alimentation fictive", isMissing: false, alternativeItemIds: [] }
      ],
      media: [], documents: [], notes: "Données exclusivement destinées aux essais."
    },
    {
      id: "demo-media-terminal",
      name: "Terminal multimédia de démonstration",
      description: "Projet fictif réunissant informatique et audio.",
      status: "demo",
      itemUsages: [
        { itemId: "demo-raspberry-pi", quantity: 1, role: "Calcul fictif", isMissing: false, alternativeItemIds: [] },
        { itemId: "demo-audio-amplifier", quantity: 1, role: "Amplification fictive", isMissing: false, alternativeItemIds: [] },
        { itemId: "demo-missing-speaker-pair", quantity: 1, role: "Restitution audio fictive", isMissing: false, alternativeItemIds: [] }
      ],
      media: [], documents: [], notes: "Données exclusivement destinées aux essais."
    },
    {
      id: "demo-network-bench",
      name: "Banc réseau de démonstration",
      description: "Projet fictif pour tester les relations entre équipements réseau et informatique.",
      status: "demo",
      itemUsages: [
        { itemId: "demo-thin-client", quantity: 1, role: "Machine de test fictive", isMissing: false, alternativeItemIds: [] },
        { itemId: "demo-network-switch", quantity: 1, role: "Interconnexion fictive", isMissing: false, alternativeItemIds: [] },
        { itemId: "demo-usb-network-adapter", quantity: 1, role: "Interface fictive", isMissing: false, alternativeItemIds: [] }
      ],
      media: [], documents: [], notes: "Données exclusivement destinées aux essais."
    }
  ]
};
