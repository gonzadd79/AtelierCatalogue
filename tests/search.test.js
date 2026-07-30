"use strict";

var assert = require("node:assert/strict");
var fs = require("node:fs");
var path = require("node:path");
var test = require("node:test");
var vm = require("node:vm");

function loadBrowserModule(relativePath) {
  var sandbox = { window: {} };
  var source = fs.readFileSync(path.join(__dirname, "..", relativePath), "utf8");
  vm.runInNewContext(source, sandbox, { filename: relativePath });
  return sandbox.window.AtelierCatalog;
}

var search = loadBrowserModule("app/js/search.js").search;

var items = [
  {
    id: "item-1",
    name: "Carte de contrôle",
    brand: "Atelier Labs",
    model: "Pilot X200",
    reference: "CTRL-2026-A",
    categoryName: "Électronique",
    locationName: "Tiroir rouge",
    projectName: "Station météo",
    tags: ["prototype"]
  },
  {
    id: "item-2",
    name: "Capteur thermique",
    brand: "Mesure & Co",
    model: "Thermo Mini",
    reference: "TMP-42",
    categoryName: "Capteurs",
    locationName: "Boîte bleue",
    projectName: "Four expérimental",
    tags: ["température"]
  }
];

function resultIds(queryOrCriteria) {
  return Array.from(search.filterItems(items, queryOrCriteria), function (item) {
    return item.id;
  });
}

test("une recherche vide conserve tous les articles", function () {
  assert.deepEqual(resultIds(""), ["item-1", "item-2"]);
});

test("la recherche partielle est insensible à la casse", function () {
  assert.deepEqual(resultIds("CONTRÔ"), ["item-1"]);
});

test("la recherche couvre la marque", function () {
  assert.deepEqual(resultIds("atelier labs"), ["item-1"]);
});

test("la recherche couvre le modèle", function () {
  assert.deepEqual(resultIds("x200"), ["item-1"]);
});

test("la recherche couvre la référence", function () {
  assert.deepEqual(resultIds("mp-4"), ["item-2"]);
});

test("la requête texte ignore les champs hors périmètre", function () {
  ["Électronique", "Tiroir rouge", "Station météo", "prototype"].forEach(function (query) {
    assert.deepEqual(resultIds(query), []);
  });
});

test("les filtres existants restent indépendants de la requête texte", function () {
  assert.deepEqual(resultIds({ query: "", categoryName: "Capteurs", locationName: "" }), ["item-2"]);
  assert.deepEqual(resultIds({ query: "", categoryName: "", locationName: "Tiroir rouge" }), ["item-1"]);
});

test("le catalogue expose les quatre valeurs recherchables", function () {
  var catalog = loadBrowserModule("app/js/catalog.js").catalog;
  var data = {
    inventory: {
      items: [{
        id: "item-3",
        name: "Module de test",
        manufacturer: "Fabrique locale",
        variant: "Modèle B",
        reference: "REF-B",
        locationIds: [],
        media: []
      }]
    },
    catalogs: { categories: [] },
    locations: { locations: [] },
    projects: { projects: [] }
  };
  var item = catalog.getCatalogItems(data)[0];
  assert.equal(item.name, "Module de test");
  assert.equal(item.brand, "Fabrique locale");
  assert.equal(item.model, "Modèle B");
  assert.equal(item.reference, "REF-B");
});

test("les projets associés sont projetés depuis Project.itemUsages uniquement", function () {
  var catalog = loadBrowserModule("app/js/catalog.js").catalog;
  var data = {
    inventory: {
      items: [{
        id: "item-4",
        name: "Composant utilisé",
        projectIds: ["relation-inverse-interdite"],
        locationIds: [],
        media: []
      }]
    },
    catalogs: { categories: [] },
    locations: { locations: [] },
    projects: {
      projects: [{
        id: "projet-canonique",
        name: "Projet canonique",
        itemUsages: [{ itemId: "item-4", quantity: 1 }]
      }]
    }
  };
  assert.equal(catalog.getCatalogItems(data)[0].projectName, "Projet canonique");
});
