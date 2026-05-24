(function () {
  var searchInput = document.getElementById("article-search");
  var categoryButtons = document.querySelectorAll(".category-btn");
  var postCards = document.querySelectorAll(".post-card");
  var resultsCount = document.getElementById("results-count");
  var noResults = document.getElementById("no-results");

  if (!searchInput || !postCards.length) {
    return;
  }

  var activeCategory = "all";

  function updateResults() {
    var query = searchInput.value.trim().toLowerCase();
    var visibleCount = 0;

    postCards.forEach(function (card) {
      var title = card.dataset.title || "";
      var excerpt = card.dataset.excerpt || "";
      var categories = (card.dataset.categories || "").split(",");
      var matchesSearch = !query || title.includes(query) || excerpt.includes(query) || categories.some(function (c) { return c.includes(query); });
      var matchesCategory = activeCategory === "all" || categories.includes(activeCategory);
      var visible = matchesSearch && matchesCategory;

      card.hidden = !visible;
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

  searchInput.addEventListener("input", updateResults);

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
