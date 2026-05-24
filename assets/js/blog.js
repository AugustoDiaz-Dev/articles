(function () {
  var searchInput = document.getElementById("article-search");
  var categoryButtons = document.querySelectorAll(".category-btn");
  var postCards = document.querySelectorAll(".accordion-item.post-card");
  var resultsCount = document.getElementById("results-count");
  var noResults = document.getElementById("no-results");
  var accordionTriggers = document.querySelectorAll(".accordion-trigger");

  var activeCategory = "all";

  function updateResults() {
    if (!searchInput || !postCards.length) {
      return;
    }

    var query = searchInput.value.trim().toLowerCase();
    var visibleCount = 0;

    postCards.forEach(function (card) {
      var title = card.dataset.title || "";
      var excerpt = card.dataset.excerpt || "";
      var categories = (card.dataset.categories || "").split(",");
      var matchesSearch =
        !query ||
        title.includes(query) ||
        excerpt.includes(query) ||
        categories.some(function (c) {
          return c.includes(query);
        });
      var matchesCategory = activeCategory === "all" || categories.includes(activeCategory);
      var visible = matchesSearch && matchesCategory;

      card.hidden = !visible;
      if (!visible) {
        closeAccordion(card);
      }
      if (visible) {
        visibleCount += 1;
      }
    });

    if (resultsCount) {
      resultsCount.textContent = visibleCount + (visibleCount === 1 ? " article" : " articles");
    }

    if (noResults) {
      noResults.hidden = visibleCount !== 0;
    }
  }

  function closeAccordion(item) {
    var trigger = item.querySelector(".accordion-trigger");
    var panel = item.querySelector(".accordion-panel");
    if (!trigger || !panel) {
      return;
    }
    trigger.setAttribute("aria-expanded", "false");
    panel.hidden = true;
    item.classList.remove("is-open");
  }

  function openAccordion(item) {
    var trigger = item.querySelector(".accordion-trigger");
    var panel = item.querySelector(".accordion-panel");
    if (!trigger || !panel) {
      return;
    }
    trigger.setAttribute("aria-expanded", "true");
    panel.hidden = false;
    item.classList.add("is-open");
  }

  accordionTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var item = trigger.closest(".accordion-item");
      var panel = item.querySelector(".accordion-panel");
      var isOpen = trigger.getAttribute("aria-expanded") === "true";

      postCards.forEach(function (card) {
        if (card !== item) {
          closeAccordion(card);
        }
      });

      if (isOpen) {
        closeAccordion(item);
      } else {
        openAccordion(item);
      }
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", updateResults);
  }

  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      categoryButtons.forEach(function (btn) {
        btn.classList.remove("is-active");
      });
      button.classList.add("is-active");
      activeCategory = button.dataset.category || "all";
      updateResults();
    });
  });

  updateResults();
})();

(function () {
  var yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
