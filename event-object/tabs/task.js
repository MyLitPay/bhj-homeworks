const tabsList = document.querySelectorAll(".tab");
const tabContentList = document.querySelectorAll(".tab__content");

for (let i = 0; i < tabsList.length; i++) {
    tabsList[i].onclick = () => {
        for (let j = 0; j < tabsList.length; j++) {
            tabsList[j].setAttribute("class", "tab");
            tabContentList[j].setAttribute("class", "tab__content");
        }

        tabsList[i].classList.toggle("tab_active");
        tabContentList[i].classList.toggle("tab__content_active");
    }
}