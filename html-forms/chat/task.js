const chatWidget = document.querySelector(".chat-widget");
const chatInput = document.getElementById("chat-widget__input");
const messages = document.getElementById("chat-widget__messages");
const robotAnswers = [
    "Добрый день",
    "Свободная касса",
    "Стоимость товара 50$",
    "Я вам не домохозяйка",
    "Это не кофе, а сборная солянка",
    "Кто здесь?",
    "Всего доброго"
]

chatWidget.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");
});

chatInput.addEventListener("keydown", (e) => {
    if ((e.key === "Enter") && (chatInput.value != "")) {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
                <div class="message__text">
                ${chatInput.value}
                </div>
            </div>
        `;
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
                <div class="message__text">
                ${robotAnswers[Math.floor(Math.random() * robotAnswers.length)]}
                </div>
            </div>
        `;
    }
});