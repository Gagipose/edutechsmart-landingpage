//Hamburgermeny

const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const menuContainer = document.querySelector("#menu-container")

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open")
    menuContainer.classList.toggle("open")
    
    if (menu.classList.contains("open")) {
        menuIcon.innerText = "X"
    } else {
        menuIcon.innerText = "☰"
    }
});