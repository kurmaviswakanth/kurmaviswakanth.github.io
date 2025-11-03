document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector("#nav-links");

  // Toggle menu
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open"); // FIXED
  });

  // Close when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("active")) {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    }
  });

  function closeMenu() {
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open"); // FIXED
  }
});
