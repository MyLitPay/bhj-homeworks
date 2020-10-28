const book = document.getElementById("book");
const controls = document.querySelectorAll(".font-size");

for (let control of controls) {
    control.onclick = function() {
        for (let c of controls) {
            c.classList.remove("font-size_active");
        }
        this.classList.add("font-size_active");

        if (this.classList.contains("font-size_small")) {
            book.setAttribute("class", "book book_fs-small");
        } else if (this.classList.contains("font-size_big")) {
            book.setAttribute("class", "book book_fs-big");
        } else {
            book.setAttribute("class", "book");
        }
        
        return false;
    }
}