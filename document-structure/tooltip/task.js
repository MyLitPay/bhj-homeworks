const tip = document.querySelectorAll(".has-tooltip");

for (let t of tip) {
    t.addEventListener("click", (e) => {
        let elem = `<div class='tooltip'>${t.title}</div>`;

        if (t.nextSibling.textContent == t.title) {
            t.nextSibling.remove();
        } else {
            t.insertAdjacentHTML("afterend", elem);
            t.nextSibling.style.display = "block";
        }
        e.preventDefault();
    });
}