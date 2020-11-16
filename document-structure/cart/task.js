const cart = document.querySelector(".cart__products");
const buttonsAdd = document.querySelectorAll(".product__add");
const increments = document.querySelectorAll(".product__quantity-control_inc");
const decrements = document.querySelectorAll(".product__quantity-control_dec");

for (let inc of increments) {
    inc.addEventListener("click", () => {
        let num = inc.parentElement.querySelector(".product__quantity-value");
        num.textContent = Number(num.textContent) + 1;
    })
}

for (let dec of decrements) {
    dec.addEventListener("click", () => {
        let num = dec.parentElement.querySelector(".product__quantity-value");
        if (Number(num.textContent) > 1) {
            num.textContent = Number(num.textContent) - 1;
        }
    })
}

for (let button of buttonsAdd) {
    button.addEventListener("click", () => {

        const parent = button.closest(".product");

        let dataID = parent.getAttribute("data-id");
        let image = parent.querySelector(".product__image").getAttribute("src");
        let count = Number(parent.querySelector(".product__quantity-value").textContent);

        for (let prod of cart.querySelectorAll(".cart__product")) {
            if (prod.getAttribute("data-id") == dataID) {
                let oldCount = prod.querySelector(".cart__product-count");
                count += Number(oldCount.textContent);
                prod.remove();
            }
        }

        let cartItem = `<div class="cart__product" data-id="${dataID}">
                            <img class="cart__product-image" src="${image}">
                            <div class="cart__product-count">${count}</div>
                        </div>`;

        cart.insertAdjacentHTML("afterbegin", cartItem);

    })
}