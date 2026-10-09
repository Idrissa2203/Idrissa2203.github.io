/* filters.js — Filtrage des projets par catégorie
   HTML attendu : des boutons .filter-btn[data-filter="web|data|reseaux|iot|autres|all"]
   et des cartes .project-card[data-category="web"] (plusieurs catégories possibles : "web data"). */
(function () {
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".project-card");
  var status = document.getElementById("filter-status");
  if (!buttons.length || !cards.length) return;

  function applyFilter(filter) {
    var visible = 0;

    cards.forEach(function (card) {
      var categories = (card.getAttribute("data-category") || "").split(" ");
      var show = filter === "all" || categories.indexOf(filter) !== -1;
      card.hidden = !show;
      if (show) visible++;
    });

    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-filter") === filter));
    });

    // Annonce le résultat aux lecteurs d'écran (région aria-live)
    if (status) {
      status.textContent = visible === 0
        ? "Aucun projet dans cette catégorie pour le moment."
        : visible + (visible > 1 ? " projets affichés." : " projet affiché.");
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyFilter(btn.getAttribute("data-filter"));
    });
  });

  applyFilter("all");
})();
