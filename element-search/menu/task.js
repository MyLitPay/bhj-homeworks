const links = document.querySelectorAll(".menu__link");

getMenuItem = (index) => {
    return links.item(index);
}

for (let i = 0; i < links.length; i++) {
    getMenuItem(i).onclick = () => {
        // console.log(getMenuItem(i));
        let sub = getMenuItem(i).parentElement.querySelector("ul");
        if (sub != null) {
            sub.classList.toggle("menu_active");
            return false;
        }
    }
}