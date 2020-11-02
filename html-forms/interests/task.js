let check = document.querySelectorAll(".interest__check");

for (let c of check) {
    c.addEventListener("change", () => {
        let subCheck = c.closest(".interest").querySelectorAll(".interest__check");
        if (c.checked) {
            for (let i = 1; i < subCheck.length; i++) {
                subCheck[i].setAttribute("checked", "");
            }
        } else {
            for (let i = 1; i < subCheck.length; i++) {
                subCheck[i].removeAttribute("checked");
            }
        }
    })
}