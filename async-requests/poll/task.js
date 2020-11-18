const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("get", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.addEventListener("readystatechange", function() {
    if (this.readyState == xhr.DONE && this.status == 200) {
        let data = JSON.parse(this.responseText).data;
        let title = data.title;
        pollTitle.insertAdjacentText("afterbegin", title);

        for (let answer in data.answers) {
            let ans = `<button class="poll__answer">${data.answers[answer]}</button>`
            pollAnswers.insertAdjacentHTML("beforeend", ans);
        }

        const buttons = document.querySelectorAll(".poll__answer");
        for (let but of buttons) {
            but.addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!");
                location.reload();
            })
        }
    }
});
xhr.send();