const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalCloseMain = document.querySelector("#modal_main .modal__close");
const modalCloseSuccess = document.querySelector("#modal_success .modal__close");
const showSuccess = document.querySelector(".show-success");

modalMain.setAttribute("class", "modal modal_active");

modalCloseMain.onclick = () => {
    modalMain.setAttribute("class", "modal");
}

modalCloseSuccess.onclick = () => {
    modalSuccess.setAttribute("class", "modal_success");
}

showSuccess.onclick = () => {
    modalSuccess.setAttribute("class", "modal_success modal_active");
    modalMain.style.display = "none";
}