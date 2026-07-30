(function (global) {
  "use strict";

  var STORAGE_PREFIX = "ateliercatalog.projects.v1.";

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function normalizeText(value) {
    var text = typeof value === "string" ? value.trim() : "";
    return text || null;
  }

  function slugify(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("fr")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "projet";
  }

  function uniqueId(name, projects) {
    var base = slugify(name);
    var candidate = base;
    var suffix = 2;
    var ids = projects.reduce(function (knownIds, project) {
      knownIds[project.id] = true;
      return knownIds;
    }, Object.create(null));

    while (ids[candidate]) {
      candidate = base + "-" + suffix;
      suffix += 1;
    }
    return candidate;
  }

  function isSafeRelativePath(path) {
    return typeof path === "string"
      && path.trim().length > 0
      && !/^(?:[a-z]+:|\/|\\|\/\/)/i.test(path)
      && !/(?:^|[\\/])\.\.(?:[\\/]|$)/.test(path)
      && path.indexOf("\\") === -1;
  }

  function normalizeInput(input) {
    var name = normalizeText(input && input.name);
    var status = normalizeText(input && input.status);
    var coverImage = normalizeText(input && input.coverImage);

    if (!name) {
      throw new Error("Le nom du projet est obligatoire.");
    }
    if (!status) {
      throw new Error("Le statut du projet est obligatoire.");
    }
    if (coverImage && !isSafeRelativePath(coverImage)) {
      throw new Error("L'image de couverture doit utiliser un chemin local relatif sûr.");
    }

    return {
      name: name,
      description: normalizeText(input.description),
      status: status,
      coverImage: coverImage,
      notes: normalizeText(input.notes)
    };
  }

  function coverMedia(projectId, path) {
    if (!path) {
      return [];
    }
    return [{
      id: projectId + "-cover",
      type: "image",
      role: "cover",
      path: path,
      isPrimary: true,
      showsOwnedItem: false
    }];
  }

  function getCoverImage(project) {
    var media = project && Array.isArray(project.media) ? project.media : [];
    var cover = media.find(function (entry) {
      return entry && entry.role === "cover" && isSafeRelativePath(entry.path);
    });
    return cover ? cover.path : null;
  }

  function requireProject(projects, projectId) {
    var project = projects.find(function (entry) {
      return entry.id === projectId;
    });
    if (!project) {
      throw new Error("Le projet est introuvable.");
    }
    return project;
  }

  function normalizeUsageInput(input, inventoryItems) {
    var itemId = normalizeText(input && input.itemId);
    var quantity = input && input.quantity !== "" && input.quantity !== null && input.quantity !== undefined
      ? Number(input.quantity)
      : NaN;
    var itemExists = Array.isArray(inventoryItems) && inventoryItems.some(function (item) {
      return item && item.id === itemId;
    });

    if (!itemExists) {
      throw new Error("L'article sélectionné n'existe pas dans l'inventaire.");
    }
    if (!Number.isFinite(quantity) || quantity <= 0) {
      throw new Error("La quantité doit être un nombre strictement positif.");
    }

    return {
      itemId: itemId,
      quantity: quantity,
      role: normalizeText(input.role),
      notes: normalizeText(input.notes)
    };
  }

  function requireUsage(project, usageIndex) {
    var usages = Array.isArray(project.itemUsages) ? project.itemUsages : [];
    if (!Number.isInteger(usageIndex) || usageIndex < 0 || usageIndex >= usages.length) {
      throw new Error("L'utilisation d'article est introuvable.");
    }
    return usages;
  }

  function addItemUsage(project, input, inventoryItems) {
    var usage = normalizeUsageInput(input, inventoryItems);
    var usages = Array.isArray(project.itemUsages) ? project.itemUsages : [];
    return Object.assign({}, project, {
      itemUsages: usages.concat([usage])
    });
  }

  function updateItemUsage(project, usageIndex, input, inventoryItems) {
    var usages = requireUsage(project, usageIndex);
    var values = normalizeUsageInput(input, inventoryItems);
    return Object.assign({}, project, {
      itemUsages: usages.map(function (usage, index) {
        return index === usageIndex ? Object.assign({}, usage, values) : usage;
      })
    });
  }

  function removeItemUsage(project, usageIndex) {
    var usages = requireUsage(project, usageIndex);
    return Object.assign({}, project, {
      itemUsages: usages.filter(function (_usage, index) {
        return index !== usageIndex;
      })
    });
  }

  function createProject(projects, input) {
    var values = normalizeInput(input);
    var id = uniqueId(values.name, projects);
    return {
      id: id,
      name: values.name,
      description: values.description,
      status: values.status,
      media: coverMedia(id, values.coverImage),
      notes: values.notes,
      itemUsages: []
    };
  }

  function updateProject(projects, projectId, input) {
    var values = normalizeInput(input);
    var project = projects.find(function (entry) {
      return entry.id === projectId;
    });
    if (!project) {
      throw new Error("Le projet à modifier est introuvable.");
    }
    return Object.assign({}, project, {
      name: values.name,
      description: values.description,
      status: values.status,
      media: coverMedia(project.id, values.coverImage),
      notes: values.notes
    });
  }

  function requireStorage(storage) {
    if (!storage || typeof storage.getItem !== "function" || typeof storage.setItem !== "function") {
      throw new Error("La sauvegarde locale des projets n'est pas disponible dans cet environnement.");
    }
    return storage;
  }

  function createStore(initialProjects, storage, mode, inventoryItems) {
    var targetStorage = requireStorage(storage);
    var storageKey = STORAGE_PREFIX + (mode === "demo" ? "demo" : "real");
    var storedValue = targetStorage.getItem(storageKey);
    var projects;

    if (storedValue === null) {
      projects = clone(initialProjects || []);
    } else {
      try {
        projects = JSON.parse(storedValue);
      } catch (error) {
        throw new Error("La sauvegarde locale des projets est illisible.");
      }
      if (!Array.isArray(projects)) {
        throw new Error("La sauvegarde locale des projets est invalide.");
      }
    }

    function persist(nextProjects) {
      targetStorage.setItem(storageKey, JSON.stringify(nextProjects));
    }

    return {
      list: function () {
        return clone(projects);
      },
      create: function (input) {
        var project = createProject(projects, input);
        var nextProjects = projects.concat([project]);
        persist(nextProjects);
        projects = nextProjects;
        return clone(project);
      },
      update: function (projectId, input) {
        var updated = updateProject(projects, projectId, input);
        var nextProjects = projects.map(function (project) {
          return project.id === projectId ? updated : project;
        });
        persist(nextProjects);
        projects = nextProjects;
        return clone(updated);
      },
      remove: function (projectId) {
        var remaining = projects.filter(function (project) {
          return project.id !== projectId;
        });
        if (remaining.length === projects.length) {
          throw new Error("Le projet à supprimer est introuvable.");
        }
        persist(remaining);
        projects = remaining;
      },
      addItemUsage: function (projectId, input) {
        var updated = addItemUsage(requireProject(projects, projectId), input, inventoryItems);
        var nextProjects = projects.map(function (project) {
          return project.id === projectId ? updated : project;
        });
        persist(nextProjects);
        projects = nextProjects;
        return clone(updated.itemUsages[updated.itemUsages.length - 1]);
      },
      updateItemUsage: function (projectId, usageIndex, input) {
        var updated = updateItemUsage(requireProject(projects, projectId), usageIndex, input, inventoryItems);
        var nextProjects = projects.map(function (project) {
          return project.id === projectId ? updated : project;
        });
        persist(nextProjects);
        projects = nextProjects;
        return clone(updated.itemUsages[usageIndex]);
      },
      removeItemUsage: function (projectId, usageIndex) {
        var updated = removeItemUsage(requireProject(projects, projectId), usageIndex);
        var nextProjects = projects.map(function (project) {
          return project.id === projectId ? updated : project;
        });
        persist(nextProjects);
        projects = nextProjects;
      }
    };
  }

  global.AtelierCatalog = global.AtelierCatalog || {};
  global.AtelierCatalog.projects = {
    createProject: createProject,
    updateProject: updateProject,
    createStore: createStore,
    addItemUsage: addItemUsage,
    updateItemUsage: updateItemUsage,
    removeItemUsage: removeItemUsage,
    getCoverImage: getCoverImage,
    isSafeRelativePath: isSafeRelativePath
  };
}(window));
