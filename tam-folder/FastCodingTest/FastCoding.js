const slideShow = document.querySelector(".sliderShow");
const backGroundImgs = Array.from(slideShow.children);
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let currentIndex = 0;

let intervalNext = setInterval(sliderShowNext, 2000);
function sliderShowNext() {
  for (let img of backGroundImgs) {
    img.style.display = "none";
  }
  currentIndex++;
  if (currentIndex > backGroundImgs.length - 1) {
    currentIndex = 0;
  }
  backGroundImgs[currentIndex].style.display = "block";
}
next.addEventListener("click", function () {
  clearInterval(intervalNext);
  sliderShowNext();
  intervalNext = setInterval(sliderShowNext, 2000);
});
///////////////////////////////////////////////////////////////////////
function sliderShowPrevious() {
  for (let img of backGroundImgs) {
    img.style.display = "none";
  }
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = backGroundImgs.length - 1;
  }
  backGroundImgs[currentIndex].style.display = "block";
}
previous.addEventListener("click", function () {
  clearInterval(intervalNext);
  sliderShowPrevious();
  intervalNext = setInterval(sliderShowNext, 2000);
});
////////////////////////////////////////////////////////////////////////////////////////
const ulElement = document.querySelector(".header__nav section:first-child ul");
const headerNav = document.querySelector(".header__nav section:first-child");
const navBar = document.querySelector(".nav__bar");

navBar.addEventListener("click", function () {
  const ulDisplay = window
    .getComputedStyle(ulElement)
    .getPropertyValue("display");
  ulElement.style.display = ulDisplay === "none" ? "flex" : "none";

  const headerDisplay = headerNav.style.backgroundColor;
  headerNav.style.backgroundColor = headerDisplay === "" ? "#080114" : "";
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1200) {
      headerNav.style.backgroundColor = ""; // Đặt lại màu nền
      ulElement.style.display = "flex";
    } else if (window.innerWidth < 1100) {
      ulElement.style.display = "none"
      if (ulElement.style.display === "none") {
        headerNav.style.backgroundColor = "";
      } else {
        headerNav.style.backgroundColor = "#080114";
        ulElement.style.display === "flex"
      }
    }
  });
});

// window.addEventListener("resize", function () {
//   if (window.innerWidth > 1200) {
//     headerNav.style.backgroundColor = ""; // Đặt lại màu nền
//   } else if (window.innerWidth < 1100) {
//     headerNav.style.backgroundColor = "#080114"
//   }
// });
