const navMenu = document.querySelector(".hamburger-menu");
const sidePanel = document.querySelector(".side-panel");
const cross = document.querySelector(".cross");

// display and hide navigation
navMenu.addEventListener("click", function(e){
    sidePanel.style.display = "block";
});

cross.addEventListener("click", function(e){
    sidePanel.style.display = "none";
})



