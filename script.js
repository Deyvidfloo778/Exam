// Cargar Navbar y Footer dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });

  // Footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });

  // Botón de contacto en index
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      window.location.href = "contacto.html";
    });
  }
});
