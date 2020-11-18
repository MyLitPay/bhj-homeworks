const loader = document.getElementById("loader");
const items = document.getElementById("items");


let xhr = new XMLHttpRequest();
xhr.open("get", "https://netology-slow-rest.herokuapp.com");
xhr.addEventListener("readystatechange", function() {
    if (this.readyState == xhr.DONE && this.status == 200) {
        let data = JSON.parse(this.responseText);
        let valutes = data.response.Valute;

        for (let val in valutes) {
            let code = valutes[val].CharCode;
            let value = valutes[val].Value;
            let out = `<div class="item__code">
                            ${code}
                        </div>
                        <div class="item__value">
                            ${value}
                        </div>
                        <div class="item__currency">
                            руб.
                        </div>`

            items.insertAdjacentHTML("beforeend", out);
        }
    }
    loader.classList.toggle("loader_active");
});
xhr.send();
