let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
      x.className += " responsive";
    } 
    
    else {
      x.className = "topnav";
    }
  }