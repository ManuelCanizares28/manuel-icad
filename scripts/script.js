const menu = document.querySelector(".menu");
const openMenuBTN = document.querySelector(".open-menu");
const closeMenuBTN = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBTN.addEventListener('click', toggleMenu);
closeMenuBTN.addEventListener('click', toggleMenu);


const productsBTN = document.getElementById('productsButton');
const products = document.getElementById('productsSection');

function showProducts() {
    products.classList.toggle("show");
}

productsBTN.addEventListener('click', showProducts);
