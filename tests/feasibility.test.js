"use strict";

var assert = require("node:assert/strict");
var fs = require("node:fs");
var path = require("node:path");
var test = require("node:test");
var vm = require("node:vm");

function loadModules() {
  var sandbox = { window: {} };
  ["quantities.js", "feasibility.js"].forEach(function (fileName) {
    var source = fs.readFileSync(path.join(__dirname, "..", "app", "js", fileName), "utf8");
    vm.runInNewContext(source, sandbox, { filename: "app/js/" + fileName });
  });
  return sandbox.window.AtelierCatalog;
}

function loadDemoData() {
  var sandbox = { window: {} };
  ["sample-inventory-data.js", "sample-projects-data.js"].forEach(function (fileName) {
    var source = fs.readFileSync(path.join(__dirname, "..", "samples", fileName), "utf8");
    vm.runInNewContext(source, sandbox, { filename: "samples/" + fileName });
  });
  return sandbox.window.AtelierCatalogSampleData;
}

function analyze(modules, project, inventory) {
  return modules.feasibility.analyzeProject(
    project,
    inventory,
    modules.quantities.getAvailableQuantity
  );
}

var modules = loadModules();

test("la quantité disponible est dérivée uniquement des quantités canoniques", function () {
  assert.equal(modules.quantities.getAvailableQuantity({
    total: 10,
    reserved: 2,
    used: 3,
    outOfService: 1,
    available: 99
  }), 4);
  assert.equal(modules.quantities.getAvailableQuantity({ total: 10, reserved: 2, used: 3 }), null);
  assert.equal(modules.quantities.getAvailableQuantity({
    total: 2,
    reserved: 1,
    used: 1,
    outOfService: 1
  }), null);
});

test("un article dont la quantité disponible suffit est AVAILABLE", function () {
  var result = analyze(modules, {
    itemUsages: [{ itemId: "item-a", quantity: 4 }]
  }, [{
    id: "item-a",
    quantity: { total: 10, reserved: 2, used: 3, outOfService: 1 }
  }]);

  assert.equal(result.usages[0].state, "AVAILABLE");
  assert.equal(result.usages[0].availableQuantity, 4);
});

test("un article dont la quantité disponible ne suffit pas est INSUFFICIENT", function () {
  var result = analyze(modules, {
    itemUsages: [{ itemId: "item-a", quantity: 5 }]
  }, [{
    id: "item-a",
    quantity: { total: 10, reserved: 2, used: 3, outOfService: 1 }
  }]);

  assert.equal(result.usages[0].state, "INSUFFICIENT");
  assert.equal(result.usages[0].availableQuantity, 4);
});

test("un article introuvable est MISSING", function () {
  var result = analyze(modules, {
    itemUsages: [{ itemId: "item-absent", quantity: 1 }]
  }, []);

  assert.equal(result.usages[0].state, "MISSING");
  assert.equal(result.usages[0].availableQuantity, null);
});

test("l'analyse est recalculée après une modification de l'inventaire", function () {
  var project = { itemUsages: [{ itemId: "item-a", quantity: 2 }] };
  var inventory = [{
    id: "item-a",
    quantity: { total: 1, reserved: 0, used: 0, outOfService: 0 }
  }];

  assert.equal(analyze(modules, project, inventory).usages[0].state, "INSUFFICIENT");
  inventory[0].quantity.total = 3;
  assert.equal(analyze(modules, project, inventory).usages[0].state, "AVAILABLE");
});

test("l'analyse ne persiste ni ne modifie aucun état calculé", function () {
  var project = { id: "projet", itemUsages: [{ itemId: "item-a", quantity: 1 }] };
  var inventory = [{
    id: "item-a",
    quantity: { total: 1, reserved: 0, used: 0, outOfService: 0 }
  }];
  var projectBefore = JSON.stringify(project);
  var inventoryBefore = JSON.stringify(inventory);

  analyze(modules, project, inventory);

  assert.equal(JSON.stringify(project), projectBefore);
  assert.equal(JSON.stringify(inventory), inventoryBefore);
  assert.equal(Object.hasOwn(project.itemUsages[0], "state"), false);
  assert.equal(Object.hasOwn(project.itemUsages[0], "availableQuantity"), false);
});

test("le résumé reflète exactement les états des utilisations", function () {
  var result = analyze(modules, {
    itemUsages: [
      { itemId: "available", quantity: 2 },
      { itemId: "insufficient", quantity: 3 },
      { itemId: "missing", quantity: 1 }
    ]
  }, [
    { id: "available", quantity: { total: 4, reserved: 1, used: 1, outOfService: 0 } },
    { id: "insufficient", quantity: { total: 2, reserved: 0, used: 0, outOfService: 0 } }
  ]);

  assert.deepEqual(
    JSON.parse(JSON.stringify(result.summary)),
    { total: 3, available: 1, insufficient: 1, missing: 1 }
  );
});

test("les données de démonstration illustrent les trois états de faisabilité", function () {
  var data = loadDemoData();
  var states = new Set();
  data.projects.projects.forEach(function (project) {
    var result = analyze(modules, project, data.inventory.items);
    result.usages.forEach(function (usage) {
      states.add(usage.state);
    });
  });

  assert.deepEqual(Array.from(states).sort(), ["AVAILABLE", "INSUFFICIENT", "MISSING"]);
});
