var images = new Array();
function preloadImages() {
  for (i = 0; i < preloadImages.arguments.length; i++) {
    images[i] = new Image();

    images[i].src = preloadImages.arguments[i];
  }
}
preloadImages("mig.png", "ligger.png", "v3_02.webp", "v1_02.webp", "v4_02.webp", "v2_02.webp", "crazy8_03.webp");

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
