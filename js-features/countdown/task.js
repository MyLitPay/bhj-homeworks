let startTime = document.getElementById("timer");
let num = Number(startTime.textContent);
let myInterval = setInterval(() => {
    num -= 1;
    startTime.textContent = num;
    if (num <= 0) {
        clearInterval(myInterval);
        alert("Вы победили в конкурсе!");
    };
}, 1000);