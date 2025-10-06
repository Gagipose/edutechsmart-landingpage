//Hamburgermeny

const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");

const menuContainer = document.querySelector("#menu-container")
const modeIcon = document.querySelector(".mode-icon");
const logo = document.querySelector(".logo");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open")
    menuContainer.classList.toggle("open")
    
    if (menu.classList.contains("open")) {
        menuIcon.innerText = "X"
    } else {
        menuIcon.innerText = "☰"
    }
});

const modeIcon = document.querySelector(".mode-icon");

// Darkmode och lightmode
// Funktion för rätt ikon och logga
function updateModeIcon() {
  const isDark = document.body.classList.contains("dark-mode");
  modeIcon.src = isDark ? "icon/dark-mode.svg" : "icon/light-mode.svg";
  logo.src = isDark ? "images/logo-white.png" : "images/logo.png";
}
// Funktion när knappen klickas
function toggleMode() {
  document.body.classList.toggle("dark-mode"); // Växlar dark-mode klassen
  document.body.classList.toggle("light-mode"); // Växlar light-mode klassen
  // Byter ikon
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
  updateModeIcon();
  // Sparar valet i localStorage
}
// När man laddar om sidan: kollar om light mode är valt, annars används dark mode

if (localStorage.getItem("darkMode") === "false") {
  toggleMode();
  // Växlar till light mode om darkMode är false
}


window.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "false") {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  }
  updateModeIcon();
});

