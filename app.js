const navMenu = document.querySelector(".hamburger-menu");
const sidePanel = document.querySelector(".side-panel");
const cross = document.querySelector(".cross");
const image = document.querySelector(".image");
const frame = document.querySelector(".frame");

// display and hide navigation
navMenu.addEventListener("click", function(e){
    sidePanel.style.display = "block";
});

cross.addEventListener("click", function(e){
    sidePanel.style.display = "none";
})

// Image hover frame animation

image.addEventListener("mouseover", function(e){
    frame.classList.add("frame-up");

})


image.addEventListener("mouseout", function(e){
    frame.classList.remove("frame-up");

})


