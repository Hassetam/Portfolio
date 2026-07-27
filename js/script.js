const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");

});