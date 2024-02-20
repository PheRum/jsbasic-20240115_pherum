function initCarousel() {
  const carousel = document.querySelector(".carousel__inner");
  const width = carousel.firstElementChild.offsetWidth;
  const countChild = carousel.childElementCount;
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  let offset = 0;

  arrowLeft.style.display = "none";

  arrowRight.addEventListener("click", () => {
    offset -= width;

    arrowLeft.style.display = offset >= 0 ? "none" : "";
    arrowRight.style.display = offset <= (countChild - 1) * width * -1 ? "none" : "";

    carousel.style.transform = `translateX(${offset}px)`;
  });

  arrowLeft.addEventListener("click", () => {
    offset += width;

    arrowLeft.style.display = offset >= 0 ? "none" : "";
    arrowRight.style.display = offset <= (countChild - 1) * width * -1 ? "none" : "";

    carousel.style.transform = `translateX(${offset}px)`;
  });
}
