// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carouselcontainer");
const prevButton = document.querySelector(".carouselbutton--prev");
const nextButton = document.querySelector(".carouselbutton--next");
const premierItem = document.querySelector(".carouselitem");

if (carousel) {
  prevButton.addEventListener("click", () => {
    const scrollAmount = premierItem.clientWidth;
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });;
  });

  nextButton.addEventListener("click", () => {
    const scrollAmount = premierItem.clientWidth;
    carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });;
  });
}