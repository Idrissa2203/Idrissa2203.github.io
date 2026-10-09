/* scroll-top.js — Bouton « retour en haut », visible après 400 px de défilement */
(function () {
  var button = document.getElementById("back-to-top");
  if (!button) return;

  function update() {
    button.classList.toggle("is-visible", window.scrollY > 400);
  }

  window.addEventListener("scroll", update, { passive: true });
  update();

  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
