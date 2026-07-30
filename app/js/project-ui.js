(function (global) {
  "use strict";

  var store;
  var getCoverImage;
  var inventoryItems = [];
  var inventoryById = Object.create(null);
  var analyzeProjectFeasibility;
  var getAvailableQuantity;
  var buildProjectRequirements;
  var editingProjectId = null;
  var editingUsage = null;
  var lastDialogTrigger = null;
  var lastUsageDialogTrigger = null;

  function appendText(parent, tagName, className, text) {
    var element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    element.textContent = text;
    parent.appendChild(element);
    return element;
  }

  function createProjectCover(project) {
    var media = document.createElement("div");
    var path = getCoverImage(project);
    media.className = "project-cover";
    if (path) {
      var image = document.createElement("img");
      image.src = path;
      image.alt = "Image de couverture de " + project.name;
      image.addEventListener("error", function () {
        media.replaceChildren();
        appendText(media, "span", "project-cover-placeholder", project.name.slice(0, 1).toUpperCase());
      }, { once: true });
      media.appendChild(image);
    } else {
      appendText(media, "span", "project-cover-placeholder", project.name.slice(0, 1).toUpperCase());
    }
    return media;
  }

  function openForm(project, trigger) {
    var dialog = document.getElementById("project-dialog");
    editingProjectId = project ? project.id : null;
    lastDialogTrigger = trigger || null;
    document.getElementById("project-dialog-title").textContent = project ? "Modifier le projet" : "Nouveau projet";
    document.getElementById("project-submit").textContent = project ? "Enregistrer" : "Créer le projet";
    document.getElementById("project-name").value = project ? project.name : "";
    document.getElementById("project-description").value = project && project.description ? project.description : "";
    document.getElementById("project-status").value = project && project.status ? project.status : "";
    document.getElementById("project-cover-image").value = project ? getCoverImage(project) || "" : "";
    document.getElementById("project-notes").value = project && project.notes ? project.notes : "";
    document.getElementById("project-form-error").hidden = true;
    document.body.classList.add("dialog-open");
    dialog.showModal();
    document.getElementById("project-name").focus();
  }

  function closeForm() {
    var dialog = document.getElementById("project-dialog");
    if (dialog.open) {
      dialog.close();
    }
  }

  function projectValues() {
    return {
      name: document.getElementById("project-name").value,
      description: document.getElementById("project-description").value,
      status: document.getElementById("project-status").value,
      coverImage: document.getElementById("project-cover-image").value,
      notes: document.getElementById("project-notes").value
    };
  }

  function populateItemSelect(selectedItemId) {
    var select = document.getElementById("usage-item");
    var placeholder = document.createElement("option");
    select.replaceChildren();
    placeholder.value = "";
    placeholder.textContent = "Sélectionner un article";
    placeholder.disabled = true;
    placeholder.selected = !selectedItemId;
    select.appendChild(placeholder);
    inventoryItems.forEach(function (item) {
      var option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.name || item.id;
      select.appendChild(option);
    });
    select.value = selectedItemId || "";
  }

  function openUsageForm(project, usageIndex, trigger) {
    var usages = Array.isArray(project.itemUsages) ? project.itemUsages : [];
    var usage = Number.isInteger(usageIndex) ? usages[usageIndex] : null;
    var dialog = document.getElementById("project-usage-dialog");
    editingUsage = { projectId: project.id, index: usage ? usageIndex : null };
    lastUsageDialogTrigger = trigger || null;
    document.getElementById("usage-dialog-title").textContent = usage
      ? "Modifier l'article utilisé"
      : "Ajouter un article";
    document.getElementById("usage-submit").textContent = usage ? "Enregistrer" : "Ajouter";
    populateItemSelect(usage ? usage.itemId : null);
    document.getElementById("usage-quantity").value = usage && typeof usage.quantity === "number"
      ? String(usage.quantity)
      : "1";
    document.getElementById("usage-role").value = usage && usage.role ? usage.role : "";
    document.getElementById("usage-notes").value = usage && usage.notes ? usage.notes : "";
    document.getElementById("usage-form-error").hidden = true;
    document.body.classList.add("dialog-open");
    dialog.showModal();
    document.getElementById("usage-item").focus();
  }

  function closeUsageForm() {
    var dialog = document.getElementById("project-usage-dialog");
    if (dialog.open) {
      dialog.close();
    }
  }

  function usageValues() {
    return {
      itemId: document.getElementById("usage-item").value,
      quantity: document.getElementById("usage-quantity").value,
      role: document.getElementById("usage-role").value,
      notes: document.getElementById("usage-notes").value
    };
  }

  function usageItemName(usage) {
    return inventoryById[usage.itemId] && inventoryById[usage.itemId].name
      ? inventoryById[usage.itemId].name
      : "Article introuvable (" + usage.itemId + ")";
  }

  function feasibilityPresentation(state) {
    if (state === "AVAILABLE") {
      return { label: "🟢 Disponible", className: "feasibility-available" };
    }
    if (state === "MISSING") {
      return { label: "🔴 Manquant", className: "feasibility-missing" };
    }
    return { label: "🟡 Quantité insuffisante", className: "feasibility-insufficient" };
  }

  function announceSuccess(message) {
    document.getElementById("app-message").textContent = message;
  }

  function formatProjectedQuantity(value) {
    return typeof value === "number" ? String(value) : "Indéterminée";
  }

  function createUsageRow(project, usage, usageIndex, feasibilityResult) {
    var row = document.createElement("tr");
    var actions = document.createElement("div");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    var presentation = feasibilityPresentation(feasibilityResult.state);
    appendText(row, "td", "usage-item-name", usageItemName(usage));
    appendText(row, "td", null, String(usage.quantity));
    appendText(row, "td", "feasibility-state " + presentation.className, presentation.label);
    appendText(row, "td", null, usage.role || "—");
    appendText(row, "td", null, usage.notes || "—");
    var actionCell = document.createElement("td");
    actions.className = "usage-actions";
    editButton.type = "button";
    editButton.className = "button-secondary button-compact";
    editButton.textContent = "Modifier";
    editButton.addEventListener("click", function () {
      openUsageForm(project, usageIndex, editButton);
    });
    deleteButton.type = "button";
    deleteButton.className = "button-danger button-compact";
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", function () {
      if (global.confirm("Supprimer l'utilisation de « " + usageItemName(usage) + " » ?")) {
        var removedItemName = usageItemName(usage);
        store.removeItemUsage(project.id, usageIndex);
        renderProjects();
        announceSuccess("Utilisation de « " + removedItemName + " » supprimée.");
      }
    });
    actions.append(editButton, deleteButton);
    actionCell.appendChild(actions);
    row.appendChild(actionCell);
    return row;
  }

  function createFeasibilityOverview(project, feasibility) {
    var section = document.createElement("section");
    var titleId = "project-feasibility-" + project.id;
    var title = appendText(section, "h4", null, "Faisabilité");
    var summary = document.createElement("dl");
    section.className = "project-feasibility";
    section.setAttribute("aria-labelledby", titleId);
    title.id = titleId;
    summary.className = "feasibility-summary";
    [
      ["Total", feasibility.summary.total],
      ["Disponibles", feasibility.summary.available],
      ["Insuffisants", feasibility.summary.insufficient],
      ["Manquants", feasibility.summary.missing]
    ].forEach(function (entry) {
      var group = document.createElement("div");
      appendText(group, "dt", null, entry[0]);
      appendText(group, "dd", null, String(entry[1]));
      summary.appendChild(group);
    });
    section.appendChild(summary);
    return section;
  }

  function createUsageSection(project, feasibility) {
    var usages = Array.isArray(project.itemUsages) ? project.itemUsages : [];
    var section = document.createElement("section");
    var heading = document.createElement("div");
    var titleId = "project-usages-" + project.id;
    var addButton = document.createElement("button");
    section.className = "project-usages";
    section.setAttribute("aria-labelledby", titleId);
    heading.className = "project-usages-heading";
    var title = appendText(heading, "h4", null, "Articles utilisés");
    title.id = titleId;
    addButton.type = "button";
    addButton.className = "button-secondary button-compact";
    addButton.textContent = "Ajouter un article";
    addButton.disabled = inventoryItems.length === 0;
    addButton.addEventListener("click", function () {
      openUsageForm(project, null, addButton);
    });
    heading.appendChild(addButton);
    section.appendChild(heading);

    if (usages.length === 0) {
      appendText(
        section,
        "p",
        "usage-empty",
        inventoryItems.length === 0
          ? "Ajoutez d'abord un article à l'inventaire."
          : "Aucun article associé à ce projet."
      );
      return section;
    }

    var wrapper = document.createElement("div");
    var table = document.createElement("table");
    var head = document.createElement("thead");
    var headRow = document.createElement("tr");
    var body = document.createElement("tbody");
    ["Nom", "Quantité", "État", "Rôle", "Remarque", "Actions"].forEach(function (label) {
      appendText(headRow, "th", null, label).scope = "col";
    });
    usages.forEach(function (usage, usageIndex) {
      body.appendChild(createUsageRow(project, usage, usageIndex, feasibility.usages[usageIndex]));
    });
    head.appendChild(headRow);
    table.append(head, body);
    wrapper.className = "usage-table-wrapper";
    wrapper.appendChild(table);
    section.appendChild(wrapper);
    return section;
  }

  function createRequirementsSection(project, feasibility) {
    var projection = buildProjectRequirements(project, inventoryItems, feasibility);
    var section = document.createElement("section");
    var titleId = "project-requirements-" + project.id;
    var title = appendText(section, "h4", null, "Liste des besoins");
    var summary = document.createElement("dl");
    section.className = "project-requirements";
    section.setAttribute("aria-labelledby", titleId);
    title.id = titleId;
    summary.className = "feasibility-summary requirements-summary";
    [
      ["Besoins", projection.summary.total],
      ["Quantité totale manquante", formatProjectedQuantity(projection.summary.totalMissingQuantity)]
    ].forEach(function (entry) {
      var group = document.createElement("div");
      appendText(group, "dt", null, entry[0]);
      appendText(group, "dd", null, String(entry[1]));
      summary.appendChild(group);
    });
    section.appendChild(summary);

    if (projection.requirements.length === 0) {
      appendText(
        section,
        "p",
        "requirements-empty",
        !Array.isArray(project.itemUsages) || project.itemUsages.length === 0
          ? "Ajoutez des articles au projet pour analyser ses besoins."
          : "Tous les articles nécessaires sont disponibles."
      );
      return section;
    }

    var wrapper = document.createElement("div");
    var table = document.createElement("table");
    var head = document.createElement("thead");
    var headRow = document.createElement("tr");
    var body = document.createElement("tbody");
    ["Article", "Demandé", "Disponible", "Manquant", "État"].forEach(function (label) {
      appendText(headRow, "th", null, label).scope = "col";
    });
    projection.requirements.forEach(function (requirement) {
      var row = document.createElement("tr");
      var presentation = feasibilityPresentation(requirement.state);
      appendText(row, "td", "usage-item-name", requirement.itemName);
      appendText(row, "td", null, formatProjectedQuantity(requirement.requestedQuantity));
      appendText(row, "td", null, formatProjectedQuantity(requirement.availableQuantity));
      appendText(row, "td", "requirement-missing-quantity", formatProjectedQuantity(requirement.missingQuantity));
      appendText(row, "td", "feasibility-state " + presentation.className, presentation.label);
      body.appendChild(row);
    });
    head.appendChild(headRow);
    table.append(head, body);
    wrapper.className = "usage-table-wrapper";
    wrapper.appendChild(table);
    section.appendChild(wrapper);
    return section;
  }

  function createProjectCard(project) {
    var card = document.createElement("article");
    var content = document.createElement("div");
    var actions = document.createElement("div");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    var feasibility = analyzeProjectFeasibility(project, inventoryItems, getAvailableQuantity);
    card.className = "project-card";
    card.setAttribute("role", "listitem");
    card.appendChild(createProjectCover(project));
    content.className = "project-card-content";
    appendText(content, "h3", "project-card-title", project.name);
    if (project.description) {
      appendText(content, "p", "project-description", project.description);
    }
    appendText(content, "p", "project-status", project.status);
    content.appendChild(createFeasibilityOverview(project, feasibility));
    content.appendChild(createRequirementsSection(project, feasibility));
    content.appendChild(createUsageSection(project, feasibility));
    if (project.notes) {
      var notesSection = document.createElement("section");
      notesSection.className = "project-notes-section";
      appendText(notesSection, "h4", null, "Notes");
      appendText(notesSection, "p", "project-notes", project.notes);
      content.appendChild(notesSection);
    }

    actions.className = "project-actions";
    editButton.type = "button";
    editButton.className = "button-secondary";
    editButton.textContent = "Modifier le projet";
    editButton.addEventListener("click", function () {
      openForm(project, editButton);
    });
    deleteButton.type = "button";
    deleteButton.className = "button-danger";
    deleteButton.textContent = "Supprimer le projet";
    deleteButton.addEventListener("click", function () {
      if (global.confirm("Supprimer le projet « " + project.name + " » ?")) {
        store.remove(project.id);
        renderProjects();
        announceSuccess("Projet « " + project.name + " » supprimé.");
      }
    });
    actions.append(editButton, deleteButton);
    content.appendChild(actions);
    card.appendChild(content);
    return card;
  }

  function renderProjects() {
    var projects = store.list();
    var list = document.getElementById("project-list");
    list.replaceChildren();
    projects.forEach(function (project) {
      list.appendChild(createProjectCard(project));
    });
    document.getElementById("project-empty-state").hidden = projects.length !== 0;
    document.getElementById("project-summary").textContent = projects.length + (projects.length > 1 ? " projets" : " projet");
    document.getElementById("project-count").textContent = String(projects.length);
  }

  function submitForm(event) {
    event.preventDefault();
    try {
      var values = projectValues();
      var savedProject;
      if (editingProjectId) {
        savedProject = store.update(editingProjectId, values);
      } else {
        savedProject = store.create(values);
      }
      var message = editingProjectId
        ? "Projet « " + savedProject.name + " » modifié."
        : "Projet « " + savedProject.name + " » créé.";
      closeForm();
      renderProjects();
      announceSuccess(message);
    } catch (error) {
      var errorElement = document.getElementById("project-form-error");
      errorElement.textContent = error.message || String(error);
      errorElement.hidden = false;
    }
  }

  function submitUsageForm(event) {
    event.preventDefault();
    try {
      var values = usageValues();
      var itemName = inventoryById[values.itemId] && inventoryById[values.itemId].name
        ? inventoryById[values.itemId].name
        : values.itemId;
      var message;
      if (Number.isInteger(editingUsage.index)) {
        store.updateItemUsage(editingUsage.projectId, editingUsage.index, values);
        message = "Utilisation de « " + itemName + " » modifiée.";
      } else {
        store.addItemUsage(editingUsage.projectId, values);
        message = "Article « " + itemName + " » ajouté au projet.";
      }
      closeUsageForm();
      renderProjects();
      announceSuccess(message);
    } catch (error) {
      var errorElement = document.getElementById("usage-form-error");
      errorElement.textContent = error.message || String(error);
      errorElement.hidden = false;
    }
  }

  function initialize(
    projectStore,
    coverImageReader,
    availableItems,
    feasibilityAnalyzer,
    availabilityReader,
    requirementsBuilder
  ) {
    var dialog = document.getElementById("project-dialog");
    var usageDialog = document.getElementById("project-usage-dialog");
    store = projectStore;
    getCoverImage = coverImageReader;
    analyzeProjectFeasibility = feasibilityAnalyzer;
    getAvailableQuantity = availabilityReader;
    buildProjectRequirements = requirementsBuilder;
    inventoryItems = Array.isArray(availableItems) ? availableItems.slice() : [];
    inventoryById = inventoryItems.reduce(function (index, item) {
      if (item && item.id) {
        index[item.id] = item;
      }
      return index;
    }, Object.create(null));
    document.getElementById("new-project-button").addEventListener("click", function (event) {
      openForm(null, event.currentTarget);
    });
    document.getElementById("project-form").addEventListener("submit", submitForm);
    document.getElementById("project-cancel").addEventListener("click", closeForm);
    document.getElementById("project-dialog-close").addEventListener("click", closeForm);
    dialog.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeForm();
    });
    dialog.addEventListener("close", function () {
      document.body.classList.remove("dialog-open");
      editingProjectId = null;
      if (lastDialogTrigger && document.contains(lastDialogTrigger)) {
        lastDialogTrigger.focus();
      }
      lastDialogTrigger = null;
    });

    document.getElementById("project-usage-form").addEventListener("submit", submitUsageForm);
    document.getElementById("usage-cancel").addEventListener("click", closeUsageForm);
    document.getElementById("usage-dialog-close").addEventListener("click", closeUsageForm);
    usageDialog.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeUsageForm();
    });
    usageDialog.addEventListener("close", function () {
      document.body.classList.remove("dialog-open");
      editingUsage = null;
      if (lastUsageDialogTrigger && document.contains(lastUsageDialogTrigger)) {
        lastUsageDialogTrigger.focus();
      }
      lastUsageDialogTrigger = null;
    });
    renderProjects();
  }

  function renderUnavailable(error, projectCount) {
    var emptyState = document.getElementById("project-empty-state");
    document.getElementById("new-project-button").disabled = true;
    document.getElementById("project-summary").textContent = "Sauvegarde locale indisponible";
    document.getElementById("project-count").textContent = String(projectCount || 0);
    emptyState.hidden = false;
    emptyState.querySelector("h3").textContent = "Gestion des projets indisponible";
    emptyState.querySelector("p").textContent = error.message || String(error);
  }

  global.AtelierCatalog = global.AtelierCatalog || {};
  global.AtelierCatalog.projectUi = {
    initialize: initialize,
    renderUnavailable: renderUnavailable
  };
}(window));
