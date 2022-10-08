"use strict";

const bgSwitches = document.querySelector(".bg-switches");
const leftSwitch = bgSwitches.querySelector('.left');
const rightSwitch = bgSwitches.querySelector('.right');
const videoFlower = document.querySelector(".bgvideo-2");

rightSwitch.addEventListener('click', () => {
    videoFlower.style.transform = "translateX(-0%)";
    videoFlower.style.transform = "-ms-translateX(-0%)";
    videoFlower.style.transition = "1s all";
    videoFlower.style.width = "100%"
})

leftSwitch.addEventListener('click', () => {
    videoFlower.style.transform = "translateX(100%)"
})

const orderLink = document.querySelector(".order-link");
const linkSymbol = document.querySelector(".link-symbol");

orderLink.addEventListener('mouseover', () => {
    linkSymbol.style.marginLeft = "20px";
    linkSymbol.style.transition = "0.3s all";
})
orderLink.addEventListener('mouseleave', () => {
    linkSymbol.style.marginLeft = "0px";
})

