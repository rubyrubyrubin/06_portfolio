// const toggleButton = document.getElementById("toggle-button");
// const navList = document.getElementById("navi-list");

// toggleButton.addEventListener("click", () => {
//   navList.classList.toggle("active");
// });

// const burger = document.querySelector(".burger");
// const navMenu = document.querySelector(".nav-menu");

// burger.addEventListener("click", () => {
//   burger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

// document.querySelectorAll(".nav-link").forEach((n) =>
//   n.addEventListener("click", () => {
//     burger.classList.remove("active");
//     navMenu.classList.remove("active");
//   })
// );

// const toggleButton = document.getElementById("toggle-button");
// const navList = document.getElementById("navi-list");

// toggleButton.addEventListener("click", () => {
//   navList.classList.toggle("active");
// });

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
