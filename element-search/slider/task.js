const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

const items = document.querySelectorAll(".slider__item");

let numOfSlide = 0;

prev.onclick = () => {
    items[numOfSlide].setAttribute("class", "slider__item");

    numOfSlide -= 1;
    if (numOfSlide < 0) {
        numOfSlide = items.length - 1;
    }

    items[numOfSlide].setAttribute("class", "slider__item slider__item_active");
}

next.onclick = () => {
    items[numOfSlide].setAttribute("class", "slider__item");

    numOfSlide += 1;
    if (numOfSlide >= items.length) {
        numOfSlide = 0;
    }

    items[numOfSlide].setAttribute("class", "slider__item slider__item_active");
}