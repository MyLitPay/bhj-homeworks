const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
let num = Number(counter.textContent);
cookie.onclick = () => {
    count = num += 1;
    counter.textContent = count;
    if (cookie.getAttribute("width") == 200) {
        cookie.setAttribute("width", 250);
    } else if (cookie.getAttribute("width") == 250) {
        cookie.setAttribute("width", 200);
    }
}