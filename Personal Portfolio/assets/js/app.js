var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
// typed animation
const typed = new Typed('.multiple-text', {
    strings: [
        '', // Empty string for quick disappearance
        'Frontend Developer', 
        'Backend Developer', 
        'Python Programmer', 
        'C++ Programmer'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    startDelay: 500, // Set a shorter start delay for the first string
    loop: true
});


// side-menu

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right= "-200px"}