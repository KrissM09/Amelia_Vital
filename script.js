document.addEventListener("DOMContentLoaded", () => {
  const backTop = document.getElementById("backToTop");
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  // Botón volver arriba
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backTop.classList.add("show");
    } else {
      backTop.classList.remove("show");
    }
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Cierra el menú móvil al seleccionar una sección.
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Formulario de demostración.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.classList.remove("d-none");
    form.reset();
    message.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
