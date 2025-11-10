const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// Toggle do menu mobile
if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });
}

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});

// Detecta a página atual
const path = window.location.pathname;
let currentPage = path.split("/").pop();

if (!currentPage || currentPage === "" || currentPage === "index" || currentPage === "/") {
  currentPage = "index.html";
}

// Marca somente o link correto como ativo
const navLinks = document.querySelectorAll(".navbar a");

// REMOVE TODOS os 'active' primeiro
navLinks.forEach((link) => {
  link.classList.remove("active");
});

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (!href.startsWith("#") && href === currentPage) {
    link.classList.add("active");
  }
});

// Scrollspy funciona só na index.html
if (currentPage === "index.html") {
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else if (link.getAttribute("href").startsWith("#")) {
            link.classList.remove("active");
          }
        });
      }
    });
  });
}
