const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    let formData = new formData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("post", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.addEventListener("readystatechange", function() {
        switch (this.readyState) {
            case 1: progress.value = 0.25;
                    break;
            case 2: progress.value = 0.5;
                    break;
            case 3: progress.value = 0.75;
                    break;
            case 4: progress.value = 1.0;
                    break;
            default: progress.value = 0.0;
                    break;
        }
    });
    xhr.send(formData);
    e.preventDefault();
});