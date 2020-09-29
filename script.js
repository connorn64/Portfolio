// Selectors
const sideBar = document.querySelector(".sidebar");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const menuContainer = document.querySelector(".menu-container");

function closeMenu () {
    sideBar.style.width="0%";
}

function openMenu () {
    sideBar.style.width="20%";
}

// Event Listeners
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);