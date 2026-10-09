/* theme.js — Bascule thème sombre / clair, mémorisée avec localStorage.
   Le thème initial est appliqué par le petit script inline du <head> (évite le « flash »). */
(function () {
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  var root = document.documentElement;

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function render() {
    var isLight = currentTheme() === "light";
    button.textContent = isLight ? "☾" : "☀";
    button.setAttribute("aria-label", isLight ? "Passer au thème sombre" : "Passer au thème clair");
  }

  button.addEventListener("click", function () {
    var next = currentTheme() === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* localStorage indisponible (navigation privée) : le thème vaut pour cette visite seulement */
    }
    render();
  });

  render();
})();
