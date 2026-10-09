/* reveal.js — Apparition douce des éléments .reveal au défilement */
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Pas d'animation si l'utilisateur la refuse ou si le navigateur est trop ancien
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // une seule fois
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach(function (el) { observer.observe(el); });
})();
