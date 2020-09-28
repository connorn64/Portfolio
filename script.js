// Selectors
const sideBar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".fa-angle-double-left");
const menuContainer = document.querySelector(".menu-container");

function closeMenu () {
    sideBar.style.width="0%";
}

function openMenu () {
    sideBar.style.width="25%";
    menuContainer.style.width="27%";
}

// Event Listeners
menuBtn.addEventListener('click', openMenu);