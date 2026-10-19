/* KickTime 2028 – Support- & Infoseite. Ohne Bibliotheken, ohne Tracking. */
(function () {
  "use strict";

  // Menü auf dem Handy
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Sanftes Einblenden beim Scrollen
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    items.forEach(function (el) {
      io.observe(el);
    });
  } else {
    items.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // Jahr in der Fußzeile
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Kontaktformular: absenden ohne Seitenwechsel
  var form = document.getElementById("support-form");
  if (form && window.fetch) {
    var status = form.querySelector(".form-status");
    var button = form.querySelector("button[type=submit]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      status.className = "form-status";
      status.textContent = "Wird gesendet …";
      button.disabled = true;
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          form.reset();
          status.className = "form-status ok";
          status.textContent = "Danke! Deine Nachricht ist angekommen – ich melde mich so schnell wie möglich.";
        })
        .catch(function () {
          status.className = "form-status err";
          status.textContent =
            "Das hat leider nicht geklappt. Bitte schreib direkt an info.kicktime@gmx.de.";
        })
        .then(function () {
          button.disabled = false;
        });
    });
  }
})();
