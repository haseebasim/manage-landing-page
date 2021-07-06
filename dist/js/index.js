const togglerBtn = document.querySelector(".toggler-btn");
const navContainer = document.querySelector(".nav-container");
const togglerImg = togglerBtn.children[0];
const overlay = document.querySelector(".overlay");
const sliderContent = document.querySelectorAll(".slider-content");
const sliderActions = document.querySelectorAll(".action");
let navOpen = false;
let lastOpenSlide = 0;

togglerBtn.addEventListener("click", openNav);
sliderActions.forEach((e) => {
  e.addEventListener("click", changeSlide);
});

function changeSlide(e) {
  slideIndex = parseInt(e.target.value);
  if (slideIndex !== lastOpenSlide) {
    sliderContent[lastOpenSlide].classList.toggle("show-slide");
    sliderContent[slideIndex].classList.toggle("show-slide");
    sliderActions[slideIndex].style.backgroundColor = "hsl(12, 88%, 59%)";
    sliderActions[lastOpenSlide].style.backgroundColor = "transparent";
    lastOpenSlide = slideIndex;
  }
}

function openNav() {
  if (!navOpen) {
    togglerImg.src = "./dist/images/icon-close.svg";
    navContainer.classList.toggle("open");
    overlay.style.display = "block";
    navOpen = true;
  } else {
    togglerImg.src = "./dist/images/icon-hamburger.svg";
    navContainer.classList.toggle("open");
    overlay.style.display = "none";
    navOpen = false;
  }
}
