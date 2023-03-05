const navMenu = document.querySelector(".hamburger-menu");
const sidePanel = document.querySelector(".side-panel");
const cross = document.querySelector(".cross");
const mainBody = document.querySelector('.Victor');
const navLinks = document.querySelectorAll('.nav-links');
const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const faders = document.querySelectorAll('.fade-in');
let lastScroll = 140;



function showSidePanel(e){
    sidePanel.style.display = "block";
    sidePanel.style.right = "0";
    mainBody.classList.add("blur-effect");
    document.body.style.height = "100%";
    document.body.style.overflowY = "hidden";
}


// hiding SidePanel
function hideSidePanel(){
    sidePanel.style.right = "-100%";
    // sidePanel.style.display = "none";
    document.body.style = 'initial';
    mainBody.style = "initial";
    mainBody.classList.remove("blur-effect");
    setTimeout(function(){
        sidePanel.style.display = "none"
    }, 500);
    

    
}


function changeHeader(event){
    let currentScroll = mainBody.getBoundingClientRect().top;
    if(currentScroll < lastScroll){
        header.style.top = "-80px";
    }
    else {
        header.style.top = "0";
    }
    lastScroll = currentScroll;
}


// Execution starts here.
navMenu.addEventListener("click", showSidePanel);

window.addEventListener('scroll', changeHeader);

cross.addEventListener("click", hideSidePanel);

navLinks.forEach(link => {
    link.addEventListener("click", hideSidePanel);
});


// Element fade-in on Scroll animation
const appearOptions = {
    threshold: 0.5
};

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
    ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting)
            return;
        else{
            console.log(entry)
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})







