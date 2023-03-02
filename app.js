const navMenu = document.querySelector(".hamburger-menu");
const sidePanel = document.querySelector(".side-panel");
const cross = document.querySelector(".cross");
const mainBody = document.querySelector('.Victor');
const navLinks = document.querySelector('.nav-links').children;
console.log(navLinks);

// display and hide navigation
navMenu.addEventListener("click", function(e){
    sidePanel.style.display = "block";
    mainBody.style.opacity = "0.5";
    document.body.style.height = "100%";
    document.body.style.overflowY = "hidden";
});

cross.addEventListener("click", hideSidePanel);


function hideSidePanel(){
    sidePanel.style.display = "none";
    document.body.style = 'initial';
    mainBody.style = "initial";
}



