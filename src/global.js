"use strict";

let log = console.log;

const hamburger = document.querySelector(".nav-btn");
const menu = document.querySelector(".list-ul");
const menucontain = document.querySelector(".navbar");
let isShow = false;

hamburger.addEventListener("click", (e) => {
  if (isShow) {
    isShow = false
    menucontain.style.display = "flex";
    menucontain.classList.add("opacity-close")
    menucontain.classList.remove("opacity-open")
    menu.classList.add("slider-close");
    menu.classList.remove("slider-open");
  } else {
    isShow = true
    menucontain.style.display = "flex";   
    menucontain.classList.remove("opacity-close");
    menucontain.classList.add("opacity-open");
    menu.classList.remove("slider-close");
    menu.classList.add("slider-open");
    // menu.classList.add("slider-open");
  }
});