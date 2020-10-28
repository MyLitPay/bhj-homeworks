const reveal = document.querySelectorAll(".reveal");
const windowHeight = window.innerHeight;

const showBanner = function() {
    for (let rev of reveal) {
        let top = rev.getBoundingClientRect().top;
        let bottom = rev.getBoundingClientRect().bottom;
        if (top < windowHeight) {
            rev.classList.add("reveal_active");
        }
        if (bottom < 0) {
            rev.classList.remove("reveal_active");
        }
    }
}

document.addEventListener("scroll", showBanner);
