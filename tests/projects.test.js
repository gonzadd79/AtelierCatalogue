"use strict";

var assert = require("node:assert/strict");
var fs = require("node:fs");
var path = require("node:path");
var test = require("node:test");
var vm = require("node:vm");

function loadProjectsModule() {
  var sandbox = { window: {} };
  var source = fs.readFileSync(path.join(__dirname, "..", "app", "js", "projects.js"), "utf8");
  vm.runInNewContext(source, sandbox, { filename: "app/js/projects.js" });
  return sandbox.window.AtelierCatalog.projects;
}

function memoryStorage() {
  var values = Object.create(null);
  return {
    getItem: function (key) {
      return Object.prototype.hasOwnProperty.call(values, key) ? values[key] : null;
    },
    setItem: function (key, value) {
      values[key] = String(value);
    }
  };
}

var projects = loadProjectsModule();

test("un projet minimal respecte la représentation Project existante", function () {
  var project = projects.createProject([], {
    name: "Station météo",
    description: "Mesure locale",
    status: "en-cours",
    coverImage: "media/projects/station-meteo/cover.jpg",
    notes: "Prototype"
  });

  assert.equal(project.id, "station-meteo");
  assert.equal(project.name, "Station météo");
  assert.equal(project.status, "en-cours");
  assert.deepEqual(Object.keys(project), ["id", "name", "description", "status", "media", "notes", "itemUsages"]);
  assert.deepEqual(Array.from(project.itemUsages), []);
  assert.equal(project.media[0].role, "cover");
  assert.equal(project.media[0].isPrimary, true);
  assert.equal(project.media[0].showsOwnedItem, false);
});

test("les identifiants restent uniques et conformes au motif du schéma", function () {
  var existing = [{ id: "station-meteo" }];
  var project = projects.createProject(existing, { name: "Station météo", status: "prévu" });
  assert.equal(project.id, "station-meteo-2");
  assert.match(project.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
});

test("la modification conserve l'identité et remplace uniquement les champs éditables", function () {
  var initial = {
    id: "station-meteo",
    name: "Station météo",
    description: null,
    status: "prévu",
    media: [],
    notes: null,
    itemUsages: [{ itemId: "item-1", quantity: 1, role: null, notes: null }]
  };
  var updated = projects.updateProject([initial], initial.id, {
    name: "Station météo extérieure",
    description: "Installée au jardin",
    status: "en-cours",
    coverImage: "",
    notes: "À protéger"
  });
  assert.equal(updated.id, initial.id);
  assert.equal(updated.name, "Station météo extérieure");
  assert.equal(updated.status, "en-cours");
  assert.deepEqual(Array.from(updated.media), []);
  assert.equal(updated.itemUsages[0].itemId, "item-1");
});

test("la création, la modification et la suppression sont persistées", function () {
  var storage = memoryStorage();
  var store = projects.createStore([], storage, "real");
  var created = store.create({ name: "Banc de test", status: "prévu" });
  store.update(created.id, { name: "Banc réseau", status: "en-cours", notes: "Local" });

  var reloaded = projects.createStore([], storage, "real");
  assert.equal(reloaded.list()[0].name, "Banc réseau");
  reloaded.remove(created.id);
  assert.deepEqual(Array.from(reloaded.list()), []);
  assert.deepEqual(Array.from(projects.createStore([], storage, "real").list()), []);
});

test("un nom, un statut et un chemin relatif sûr sont exigés", function () {
  assert.throws(function () {
    projects.createProject([], { name: "", status: "prévu" });
  }, /nom/);
  assert.throws(function () {
    projects.createProject([], { name: "Projet", status: "" });
  }, /statut/);
  assert.throws(function () {
    projects.createProject([], { name: "Projet", status: "prévu", coverImage: "C:\\photo.jpg" });
  }, /chemin local relatif/);
});

test("le mode démonstration et le mode réel utilisent des sauvegardes séparées", function () {
  var storage = memoryStorage();
  projects.createStore([], storage, "real").create({ name: "Projet réel", status: "actif" });
  projects.createStore([], storage, "demo").create({ name: "Projet fictif", status: "demo" });
  assert.equal(projects.createStore([], storage, "real").list()[0].name, "Projet réel");
  assert.equal(projects.createStore([], storage, "demo").list()[0].name, "Projet fictif");
});

test("les utilisations sont ajoutées dans l'ordre avec les champs canoniques", function () {
  var inventory = [{ id: "item-a", name: "Article A" }, { id: "item-b", name: "Article B" }];
  var project = { id: "projet", name: "Projet", itemUsages: [] };
  var first = projects.addItemUsage(project, {
    itemId: "item-a",
    quantity: "2",
    role: "Contrôle",
    notes: "Principal"
  }, inventory);
  var second = projects.addItemUsage(first, {
    itemId: "item-b",
    quantity: 1,
    role: "",
    notes: ""
  }, inventory);

  assert.deepEqual(Array.from(second.itemUsages, function (usage) { return usage.itemId; }), ["item-a", "item-b"]);
  assert.deepEqual(Object.keys(second.itemUsages[0]), ["itemId", "quantity", "role", "notes"]);
  assert.equal(second.itemUsages[0].quantity, 2);
  assert.equal(second.itemUsages[1].role, null);
});

test("la modification conserve la position et les propriétés existantes de l'utilisation", function () {
  var inventory = [{ id: "item-a" }, { id: "item-b" }, { id: "item-c" }];
  var project = {
    id: "projet",
    itemUsages: [
      { itemId: "item-a", quantity: 1, isMissing: false },
      { itemId: "item-b", quantity: 2 }
    ]
  };
  var updated = projects.updateItemUsage(project, 0, {
    itemId: "item-c",
    quantity: 3,
    role: "Mesure",
    notes: "Révisé"
  }, inventory);

  assert.deepEqual(Array.from(updated.itemUsages, function (usage) { return usage.itemId; }), ["item-c", "item-b"]);
  assert.equal(updated.itemUsages[0].isMissing, false);
  assert.equal(updated.itemUsages[1], project.itemUsages[1]);
});

test("la suppression retire uniquement l'utilisation ciblée sans réordonner les autres", function () {
  var project = {
    id: "projet",
    itemUsages: [
      { itemId: "item-a", quantity: 1 },
      { itemId: "item-b", quantity: 1 },
      { itemId: "item-c", quantity: 1 }
    ]
  };
  var updated = projects.removeItemUsage(project, 1);
  assert.deepEqual(Array.from(updated.itemUsages, function (usage) { return usage.itemId; }), ["item-a", "item-c"]);
});

test("les utilisations sont persistées sans créer de relation inverse dans l'article", function () {
  var storage = memoryStorage();
  var inventory = [{ id: "item-a", name: "Article A" }, { id: "item-b", name: "Article B" }];
  var store = projects.createStore([{ id: "projet", name: "Projet", itemUsages: [] }], storage, "real", inventory);
  store.addItemUsage("projet", { itemId: "item-a", quantity: 2, role: "Support", notes: "Fixe" });
  store.addItemUsage("projet", { itemId: "item-b", quantity: 1 });

  var reloaded = projects.createStore([], storage, "real", inventory);
  assert.deepEqual(
    Array.from(reloaded.list()[0].itemUsages, function (usage) { return usage.itemId; }),
    ["item-a", "item-b"]
  );
  assert.equal(reloaded.list()[0].itemUsages[0].quantity, 2);
  assert.deepEqual(Object.keys(inventory[0]), ["id", "name"]);
});

test("une utilisation invalide est refusée avant toute persistance", function () {
  var storage = memoryStorage();
  var inventory = [{ id: "item-a" }];
  var store = projects.createStore([{ id: "projet", itemUsages: [] }], storage, "real", inventory);
  assert.throws(function () {
    store.addItemUsage("projet", { itemId: "absent", quantity: 1 });
  }, /n'existe pas/);
  assert.throws(function () {
    store.addItemUsage("projet", { itemId: "item-a", quantity: 0 });
  }, /strictement positif/);
  assert.throws(function () {
    store.updateItemUsage("projet", 0, { itemId: "item-a", quantity: 1 });
  }, /introuvable/);
  assert.deepEqual(Array.from(store.list()[0].itemUsages), []);
});

test("les deux points d'entrée chargent le formulaire et ses modules dans le bon ordre", function () {
  ["index.html", "demo.html"].forEach(function (fileName) {
    var html = fs.readFileSync(path.join(__dirname, "..", fileName), "utf8");
    var quantitiesModule = html.indexOf('src="app/js/quantities.js"');
    var feasibilityModule = html.indexOf('src="app/js/feasibility.js"');
    var requirementsModule = html.indexOf('src="app/js/project-requirements.js"');
    var projectModule = html.indexOf('src="app/js/projects.js"');
    var projectUiModule = html.indexOf('src="app/js/project-ui.js"');
    var applicationModule = html.indexOf('src="app/js/app.js"');
    var statusSelect = html.match(/<select id="project-status"[\s\S]*?<\/select>/);
    [
      "new-project-button",
      "project-list",
      "project-dialog",
      "project-form",
      "project-name",
      "project-description",
      "project-status",
      "project-cover-image",
      "project-notes",
      "project-usage-dialog",
      "project-usage-form",
      "usage-item",
      "usage-quantity",
      "usage-role",
      "usage-notes"
    ].forEach(function (id) {
      assert.match(html, new RegExp('id="' + id + '"'), fileName + " doit contenir #" + id);
    });
    var ids = Array.from(html.matchAll(/\sid="([^"]+)"/g), function (match) { return match[1]; });
    assert.equal(new Set(ids).size, ids.length, fileName + " ne doit contenir aucun identifiant dupliqué");
    assert.ok(statusSelect, fileName + " doit utiliser une sélection pour le statut");
    assert.match(statusSelect[0], /value="prévu"/);
    assert.match(statusSelect[0], /value="en-cours"/);
    assert.doesNotMatch(html, /<input id="project-status"/);
    if (fileName === "demo.html") {
      assert.match(statusSelect[0], /value="demo"/);
    } else {
      assert.doesNotMatch(statusSelect[0], /value="demo"/);
    }
    assert.ok(
      quantitiesModule >= 0
        && feasibilityModule > quantitiesModule
        && requirementsModule > feasibilityModule
        && projectModule > requirementsModule
        && projectUiModule > projectModule
        && applicationModule > projectUiModule
    );
  });
});

test("la fiche Projet suit la hiérarchie UX validée et distingue un projet vide", function () {
  var source = fs.readFileSync(path.join(__dirname, "..", "app", "js", "project-ui.js"), "utf8");
  var cardStart = source.indexOf("function createProjectCard");
  var cardEnd = source.indexOf("function renderProjects", cardStart);
  var cardSource = source.slice(cardStart, cardEnd);

  assert.match(source, /Ajoutez des articles au projet pour analyser ses besoins\./);
  assert.ok(cardSource.indexOf("createFeasibilityOverview") < cardSource.indexOf("createRequirementsSection"));
  assert.ok(cardSource.indexOf("createRequirementsSection") < cardSource.indexOf("createUsageSection"));
  assert.ok(cardSource.indexOf("createUsageSection") < cardSource.indexOf("project-notes-section"));
  assert.ok(cardSource.indexOf("project-notes-section") < cardSource.indexOf("project-actions"));
});

test("chaque opération réussie possède un feedback utilisateur", function () {
  var source = fs.readFileSync(path.join(__dirname, "..", "app", "js", "project-ui.js"), "utf8");
  [
    "Projet « ",
    " » créé.",
    " » modifié.",
    " » supprimé.",
    "Article « ",
    " » ajouté au projet.",
    "Utilisation de « ",
    " » modifiée.",
    " » supprimée."
  ].forEach(function (fragment) {
    assert.ok(source.includes(fragment), "feedback manquant : " + fragment);
  });
});
