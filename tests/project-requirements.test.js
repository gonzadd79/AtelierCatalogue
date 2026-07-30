"use strict";

var assert = require("node:assert/strict");
var fs = require("node:fs");
var path = require("node:path");
var test = require("node:test");
var vm = require("node:vm");

function loadModules() {
  var sandbox = { window: {} };
  ["quantities.js", "feasibility.js", "project-requirements.js"].forEach(function (fileName) {
    var source = fs.readFileSync(path.join(__dirname, "..", "app", "js", fileName), "utf8");
    vm.runInNewContext(source, sandbox, { filename: "app/js/" + fileName });
  });
  return sandbox.window.AtelierCatalog;
}

function createProjection(modules, project, inventory) {
  var feasibility = modules.feasibility.analyzeProject(
    project,
    inventory,
    modules.quantities.getAvailableQuantity
  );
  return modules.projectRequirements.create(project, inventory, feasibility);
}

function item(id, available) {
  return {
    id: id,
    name: "Article " + id,
    quantity: { total: available, reserved: 0, used: 0, outOfService: 0 }
  };
}

var modules = loadModules();

test("aucun besoin n'est produit lorsque tous les articles sont disponibles", function () {
  var projection = createProjection(modules, {
    itemUsages: [{ itemId: "a", quantity: 2 }]
  }, [item("a", 2)]);

  assert.deepEqual(Array.from(projection.requirements), []);
  assert.equal(projection.summary.total, 0);
  assert.equal(projection.summary.totalMissingQuantity, 0);
});

test("un article insuffisant devient un besoin sans recalculer sa disponibilité", function () {
  var project = { itemUsages: [{ itemId: "a", quantity: 5 }] };
  var inventory = [item("a", 2)];
  var feasibility = modules.feasibility.analyzeProject(
    project,
    inventory,
    modules.quantities.getAvailableQuantity
  );
  inventory[0].quantity.total = 100;
  var projection = modules.projectRequirements.create(project, inventory, feasibility);

  assert.equal(projection.requirements[0].state, "INSUFFICIENT");
  assert.equal(projection.requirements[0].availableQuantity, 2);
  assert.equal(projection.requirements[0].missingQuantity, 3);
});

test("un article manquant est présenté avec une disponibilité nulle", function () {
  var projection = createProjection(modules, {
    itemUsages: [{ itemId: "absent", quantity: 4 }]
  }, []);

  assert.equal(projection.requirements[0].state, "MISSING");
  assert.equal(projection.requirements[0].availableQuantity, 0);
  assert.equal(projection.requirements[0].missingQuantity, 4);
});

test("plusieurs besoins conservent l'ordre des utilisations", function () {
  var projection = createProjection(modules, {
    itemUsages: [
      { itemId: "a", quantity: 3 },
      { itemId: "b", quantity: 1 },
      { itemId: "absent", quantity: 2 }
    ]
  }, [item("a", 1), item("b", 1)]);

  assert.deepEqual(
    Array.from(projection.requirements, function (requirement) { return requirement.itemId; }),
    ["a", "absent"]
  );
});

test("la quantité totale manquante additionne uniquement les écarts calculés", function () {
  var projection = createProjection(modules, {
    itemUsages: [
      { itemId: "a", quantity: 5 },
      { itemId: "absent", quantity: 4 }
    ]
  }, [item("a", 2)]);

  assert.equal(projection.requirements[0].missingQuantity, 3);
  assert.equal(projection.requirements[1].missingQuantity, 4);
  assert.equal(projection.summary.totalMissingQuantity, 7);
});

test("la Liste des besoins est recalculée après modification de l'inventaire", function () {
  var project = { itemUsages: [{ itemId: "a", quantity: 2 }] };
  var inventory = [item("a", 1)];

  assert.equal(createProjection(modules, project, inventory).summary.total, 1);
  inventory[0].quantity.total = 2;
  assert.equal(createProjection(modules, project, inventory).summary.total, 0);
});

test("la projection ne persiste et ne modifie aucune information", function () {
  var project = { id: "projet", itemUsages: [{ itemId: "a", quantity: 2 }] };
  var inventory = [item("a", 1)];
  var feasibility = modules.feasibility.analyzeProject(
    project,
    inventory,
    modules.quantities.getAvailableQuantity
  );
  var projectBefore = JSON.stringify(project);
  var inventoryBefore = JSON.stringify(inventory);
  var feasibilityBefore = JSON.stringify(feasibility);

  modules.projectRequirements.create(project, inventory, feasibility);

  assert.equal(JSON.stringify(project), projectBefore);
  assert.equal(JSON.stringify(inventory), inventoryBefore);
  assert.equal(JSON.stringify(feasibility), feasibilityBefore);
  assert.equal(Object.hasOwn(project.itemUsages[0], "missingQuantity"), false);
});
