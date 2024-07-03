"use strict";

let log = console.log;

const hamburger = document.querySelector(".nav-btn");
const menu = document.querySelector(".list-ul");
const menucontain = document.querySelector(".navbar");
let isShow = false;

hamburger.addEventListener("click", (e) => {
  if (isShow) {
    isShow = false;
    menucontain.style.display = "none";
    menucontain.classList.add("opacity-close");
    menucontain.classList.remove("opacity-open");
    menu.classList.add("slider-close");
    menu.classList.remove("slider-open");
  } else {
    isShow = true;
    menucontain.style.display = "flex";
    menucontain.classList.remove("opacity-close");
    menucontain.classList.add("opacity-open");
    menu.classList.remove("slider-close");
    menu.classList.add("slider-open");
  }
});

function checkScreenSize() {
  const maxWidth = 600; // Change this to your desired breakpoint (600px in this case)
  if (window.innerWidth <= maxWidth) {
    // Your existing code remains untouched
  } else {
    // Reset menu state for larger screens (optional)
    menucontain.style.display = ""; // Reset display style
    menucontain.classList.remove("opacity-close", "opacity-open"); // Remove both opacity classes
    menu.classList.remove("slider-close", "slider-open"); // Remove both slider classes
  }
}

// Call the function on page load
checkScreenSize();

// Add window resize event listener
window.addEventListener("resize", checkScreenSize);
