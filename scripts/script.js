const menu = document.querySelector(".menu");
const openMenuBTN = document.querySelector(".open-menu");
const closeMenuBTN = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBTN.addEventListener('click', toggleMenu);
closeMenuBTN.addEventListener('click', toggleMenu);