const input = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value != "") {

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

        e.preventDefault();
    }
});