"use strict";
const indicator = document.querySelector(".scroll-indicator .progress");
// const updatedScroll = () => {
//   const scrollHeight =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   const scrollTop = document.documentElement.scrollTop;
//   const scrolled = (scrollTop / scrollHeight) * 100;
//   indicator.style.width = `${scrolled}%`;
// };
// window.addEventListener("scroll", updatedScroll);
// console.log(updatedScroll);

const scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
//console.log(scrollHeight);
// console.log(indicator);

//EventListener for window
window.addEventListener("scroll", updatedScroll);

function updatedScroll() {
  const scrollTop = document.documentElement.scrollTop;
  const scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}

// scrollHeight: Represents the total height of the document, minus the height of the visible viewport.
// scrollTop: Represents the number of pixels that the document is currently scrolled vertically.
// scrolled: Calculates the percentage of how far the user has scrolled down the page.
// indicator.style.width: Sets the width of the progress indicator based on the calculated percentage.
