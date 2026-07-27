(function (global) {
  "use strict";

  var lastDialogTrigger = null;
  var dialogHandlersReady = false;
  var catalogControlHandlersReady = false;
  var allCatalogItems = [];
  var filterCatalogItems = null;

  function renderDashboard(summary, mode) {
    var message;
    document.getElementById("item-count").textContent = String(summary.itemCount);
    document.getElementById("project-count").textContent = String(summary.projectCount);
    document.getElementById("category-count").textContent = String(summary.categoryCount);
    message = mode === "demo" ? "Jeu de démonstration chargé." : "Catalogue local chargé.";
    document.getElementById("app-message").textContent = message;
    document.getElementById("empty-state").hidden = summary.itemCount !== 0;
  }

  function appendTextElement(parent, tagName, className, text) {
    var element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    element.textContent = text;
    parent.appendChild(element);
    return element;
  }

  function appendMetadata(list, term, value, rowClassName) {
    var group = document.createElement("div");
    group.className = rowClassName || "card-metadata-row";
    appendTextElement(group, "dt", null, term);
    appendTextElement(group, "dd", null, value);
    list.appendChild(group);
  }

  function createPlaceholder(item) {
    var placeholder = document.createElement("div");
    placeholder.className = "card-placeholder";
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", "Aucune image disponible pour " + item.name);
    appendTextElement(placeholder, "span", "placeholder-mark", item.categoryName.slice(0, 1).toUpperCase());
    appendTextElement(placeholder, "span", "placeholder-label", "Aucune image");
    return placeholder;
  }

  function createMedia(item, className) {
    var media = document.createElement("div");
    media.className = className || "card-media";
    if (!item.imagePath) {
      media.appendChild(createPlaceholder(item));
      return media;
    }

    var image = document.createElement("img");
    image.src = item.imagePath;
    image.alt = "Photo de " + item.name;
    image.loading = "lazy";
    image.addEventListener("error", function () {
      media.replaceChildren(createPlaceholder(item));
    }, { once: true });
    media.appendChild(image);
    return media;
  }

  function closeItemDialog() {
    var dialog = document.getElementById("item-dialog");
    if (dialog.open) {
      dialog.close();
    }
  }

  function ensureDialogHandlers() {
    var dialog;
    if (dialogHandlersReady) {
      return;
    }
    dialog = document.getElementById("item-dialog");
    document.getElementById("item-dialog-close").addEventListener("click", closeItemDialog);
    dialog.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeItemDialog();
    });
    dialog.addEventListener("close", function () {
      document.body.classList.remove("dialog-open");
      if (lastDialogTrigger && document.contains(lastDialogTrigger)) {
        lastDialogTrigger.focus();
      }
      lastDialogTrigger = null;
    });
    dialogHandlersReady = true;
  }

  function openItemDialog(item, trigger) {
    var dialog = document.getElementById("item-dialog");
    var metadata = document.getElementById("item-dialog-metadata");
    var descriptionSection = document.getElementById("item-dialog-description-section");

    document.getElementById("item-dialog-title").textContent = item.name;
    document.getElementById("item-dialog-media").replaceChildren(createMedia(item, "detail-media"));
    metadata.replaceChildren();
    appendMetadata(metadata, "Catégorie", item.categoryName, "detail-metadata-row");
    appendMetadata(metadata, "Emplacement", item.locationName, "detail-metadata-row");
    appendMetadata(metadata, "Quantité", item.quantityLabel, "detail-metadata-row");
    if (item.projectName) {
      appendMetadata(metadata, "Projet", item.projectName, "detail-metadata-row");
    }

    descriptionSection.hidden = !item.description;
    document.getElementById("item-dialog-description").textContent = item.description || "";
    lastDialogTrigger = trigger;
    document.body.classList.add("dialog-open");
    dialog.showModal();
    document.getElementById("item-dialog-close").focus();
  }

  function createCatalogCard(item) {
    var card = document.createElement("article");
    var action = document.createElement("div");
    var titleId = "catalog-item-" + item.id;
    card.className = "catalog-card";
    card.setAttribute("role", "listitem");
    action.className = "catalog-card-action";
    action.setAttribute("role", "button");
    action.setAttribute("tabindex", "0");
    action.setAttribute("aria-haspopup", "dialog");
    action.setAttribute("aria-controls", "item-dialog");
    action.setAttribute("aria-labelledby", titleId);
    action.appendChild(createMedia(item));

    var content = document.createElement("div");
    content.className = "card-content";
    appendTextElement(content, "p", "card-category", item.categoryName);
    var title = appendTextElement(content, "h3", "card-title", item.name);
    title.id = titleId;

    var metadata = document.createElement("dl");
    metadata.className = "card-metadata";
    appendMetadata(metadata, "Emplacement", item.locationName);
    appendMetadata(metadata, "Quantité", item.quantityLabel);
    if (item.projectName) {
      appendMetadata(metadata, "Projet", item.projectName);
    }
    content.appendChild(metadata);
    action.appendChild(content);
    action.addEventListener("click", function () {
      openItemDialog(item, action);
    });
    action.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openItemDialog(item, action);
      }
    });
    card.appendChild(action);
    return card;
  }

  function renderCatalog(items) {
    var view = document.getElementById("catalog-view");
    ensureDialogHandlers();
    renderCatalogCards(items);
    document.getElementById("catalog-summary").textContent = formatItemCount(items.length);
    view.hidden = items.length === 0;
  }

  function formatItemCount(count) {
    return count + (count > 1 ? " articles" : " article");
  }

  function renderCatalogCards(items) {
    var grid = document.getElementById("catalog-grid");
    grid.replaceChildren();
    items.forEach(function (item) {
      grid.appendChild(createCatalogCard(item));
    });
  }

  function appendFilterOption(select, value, label) {
    var option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  }

  function populateFilter(select, defaultLabel, values) {
    select.replaceChildren();
    appendFilterOption(select, "", defaultLabel);
    values.forEach(function (value) {
      appendFilterOption(select, value, value);
    });
    select.value = "";
  }

  function updateCatalogResults() {
    var input = document.getElementById("catalog-search-input");
    var categoryFilter = document.getElementById("catalog-category-filter");
    var locationFilter = document.getElementById("catalog-location-filter");
    var hasCriteria = input.value.trim().length > 0 || categoryFilter.value || locationFilter.value;
    var items = filterCatalogItems(allCatalogItems, {
      query: input.value,
      categoryName: categoryFilter.value,
      locationName: locationFilter.value
    });
    var noResults = Boolean(hasCriteria) && items.length === 0;
    renderCatalogCards(items);
    document.getElementById("catalog-grid").hidden = noResults;
    document.getElementById("catalog-no-results").hidden = !noResults;
    document.getElementById("catalog-summary").textContent = hasCriteria
      ? formatItemCount(items.length) + " sur " + allCatalogItems.length
      : formatItemCount(allCatalogItems.length);
  }

  function initializeCatalogControls(items, filterItems, getFilterValues) {
    var input = document.getElementById("catalog-search-input");
    var categoryFilter = document.getElementById("catalog-category-filter");
    var locationFilter = document.getElementById("catalog-location-filter");
    var filterValues = getFilterValues(items);
    allCatalogItems = items.slice();
    filterCatalogItems = filterItems;
    input.value = "";
    populateFilter(categoryFilter, "Toutes les catégories", filterValues.categories);
    populateFilter(locationFilter, "Tous les emplacements", filterValues.locations);
    if (!catalogControlHandlersReady) {
      input.addEventListener("input", updateCatalogResults);
      categoryFilter.addEventListener("change", updateCatalogResults);
      locationFilter.addEventListener("change", updateCatalogResults);
      catalogControlHandlersReady = true;
    }
    updateCatalogResults();
  }

  function renderError(error) {
    ["item-count", "project-count", "category-count"].forEach(function (id) {
      document.getElementById(id).textContent = "—";
    });
    document.getElementById("app-message").textContent = "L'initialisation a échoué.";
    document.getElementById("error-message").textContent = error.message || String(error);
    document.getElementById("error-state").hidden = false;
  }

  global.AtelierCatalog = global.AtelierCatalog || {};
  global.AtelierCatalog.ui = {
    renderDashboard: renderDashboard,
    renderCatalog: renderCatalog,
    initializeCatalogControls: initializeCatalogControls,
    renderError: renderError
  };
}(window));
