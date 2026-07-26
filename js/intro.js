document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const home = document.getElementById("home");


    // Keep the intro visible for 2.5 seconds
    setTimeout(() => {

        // Start hiding the intro
        intro.classList.add("hide-intro");


        // Start revealing the Home page
        home.classList.add("home-visible");


    }, 2500);  // in miliseconds

});