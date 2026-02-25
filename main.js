const menuButton = document.getElementById('menu-button');
menuButton.addEventListener("click", toggleMenu);
const nav = document.querySelector('nav');
const menuLinks = document.querySelectorAll("nav ul li a");

const toggleMenu = () => {
    nav.classList.toggle("open");
    menuButton.classList.toggle("open");
}

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.classList.remove("open");
    });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("open");
    menuButton.classList.remove("open");
  }
});