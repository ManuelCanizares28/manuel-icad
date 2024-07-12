const menu = document.querySelector(".menu");
const openMenuBTN = document.querySelector(".open-menu");
const closeMenuBTN = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBTN.addEventListener('click', toggleMenu);
closeMenuBTN.addEventListener('click', toggleMenu);

const productsBTN = document.querySelector(".selected");
const productsSection = document.querySelector(".products");

function showProducts() {
    productsSection.classList.toggle("show");
}

productsBTN.addEventListener('click', showProducts);


const shoeBTN = document.querySelector(".shoe-design-BTN");
const productsContainer = document.querySelector(".container-products");

function showContainer() {
    productsContainer.classList.toggle("show-container");
}

shoeBTN.addEventListener('click', showContainer);





