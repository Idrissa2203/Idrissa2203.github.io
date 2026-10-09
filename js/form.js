/* form.js — Validation côté client du formulaire de contact.
   Site statique (pas de serveur) : une fois le formulaire valide, il ouvre
   l'application e-mail du visiteur avec le message pré-rempli (mailto),
   et propose des liens de secours Gmail / Outlook. */
(function () {
  var CONTACT_EMAIL = "wade.idrissa@uam.edu.sn";

  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");

  // Règles de validation : un message d'erreur par champ
  var rules = {
    name: function (v) {
      return v.trim().length >= 2 ? "" : "Indique ton nom (2 caractères minimum).";
    },
    email: function (v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Indique une adresse e-mail valide.";
    },
    subject: function (v) {
      return v.trim().length >= 3 ? "" : "Indique un sujet (3 caractères minimum).";
    },
    message: function (v) {
      return v.trim().length >= 20 ? "" : "Ton message doit contenir au moins 20 caractères.";
    }
  };

  function validateField(field) {
    var rule = rules[field.name];
    if (!rule) return true;

    var error = rule(field.value);
    var errorBox = document.getElementById(field.id + "-error");

    field.setAttribute("aria-invalid", error ? "true" : "false");
    if (errorBox) errorBox.textContent = error;
    return !error;
  }

  var fields = form.querySelectorAll("input[name], textarea[name]");

  // Validation « en direct » une fois que le champ a été quitté
  fields.forEach(function (field) {
    field.addEventListener("blur", function () { validateField(field); });
    field.addEventListener("input", function () {
      if (field.getAttribute("aria-invalid") === "true") validateField(field);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.className = "form__status";
    status.textContent = "";

    var firstInvalid = null;
    fields.forEach(function (field) {
      if (!validateField(field) && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      status.classList.add("form__status--error");
      status.textContent = "Merci de corriger les champs signalés.";
      return;
    }

    var data = new FormData(form);
    var subject = data.get("subject");
    var body = data.get("message") + "\n\n— " + data.get("name") + " (" + data.get("email") + ")";
    var to = encodeURIComponent(CONTACT_EMAIL);
    var s = encodeURIComponent(subject);
    var b = encodeURIComponent(body);

    // 1) Essaie d'ouvrir l'application mail par défaut
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + s + "&body=" + b;

    // 2) Propose des liens de secours (webmail)
    status.classList.add("form__status--ok");
    status.textContent = "Rien ne s'est ouvert ? Envoie ton message avec : ";
    [
      ["Gmail", "https://mail.google.com/mail/?view=cm&fs=1&to=" + to + "&su=" + s + "&body=" + b],
      ["Outlook", "https://outlook.live.com/mail/0/deeplink/compose?to=" + to + "&subject=" + s + "&body=" + b]
    ].forEach(function (item, i) {
      var a = document.createElement("a");
      a.href = item[1];
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = item[0];
      if (i) status.appendChild(document.createTextNode(" · "));
      status.appendChild(a);
    });

    form.reset();
  });
})();