const input = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
const addButton = document.getElementById("tasks__add");

function some() {
    let task = `<div class='task'>
                        <div class='task__title'>
                            ${input.value}
                        </div>
                        <a href="#" class='task__remove'>&times;</a>
                    </div>`;

        taskList.insertAdjacentHTML("afterbegin", task);
        
        input.value = "";
        const removeItem = document.querySelectorAll(".task__remove");

        for (let remove of removeItem) {
            remove.addEventListener("click", () => {
                remove.parentElement.remove();
            })
        }
}

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value != "") {
        some();
        e.preventDefault();

    } else if (e.key === "Enter" && input.value == "") {
        e.preventDefault();
    }
});

addButton.addEventListener("click", (e) => {
    if (input.value != "") {
        some();
        e.preventDefault();

    } else if (input.value == "") {
        e.preventDefault();
    }
});