/* ============================================================
   Andrés Urtado — interacciones
   ============================================================ */
(function () {
  "use strict";

  /* ---- Header: fondo al hacer scroll ---- */
  const header = document.getElementById("header");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menú móvil ---- */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("mobile-menu");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setMenu(false))
  );
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });

  /* ---- Reveal al hacer scroll ---- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---- Año dinámico en el footer ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------
     Reemplazo automático de placeholders por imágenes reales.
     Cuando exista el archivo indicado en data-fill (p.ej. images/hero.jpg),
     se muestra la foto; si no existe, se mantiene el placeholder.
     Así podés ir agregando fotos sin tocar el HTML.
     ------------------------------------------------------------ */
  document.querySelectorAll(".img-placeholder[data-fill]").forEach((ph) => {
    const src = ph.getAttribute("data-fill");
    const img = new Image();
    img.onload = () => {
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      ph.replaceWith(img);
    };
    img.src = src;
  });
})();
