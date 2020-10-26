const button = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");

const listItems = document.querySelectorAll(".dropdown__link");

button.addEventListener("click", () => {
    list.classList.toggle("dropdown__list_active");
})

for (let i = 0; i < listItems.length; i++) {
    listItems[i].onclick = event => {
        let text = event.target.textContent;
        button.textContent = text;
        list.classList.toggle("dropdown__list_active");
        return false;
    }
}