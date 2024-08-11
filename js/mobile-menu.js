const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const toogleMenu = () => mobileMenu.classList.toggle("is-open");

menuBtnClose.addEventListener("click", toogleMenu);
menuBtnOpen.addEventListener("click", toogleMenu);
