
import {products} from "../data/products.js"
import {cart, addToCart, calculator} from "../data/cart.js"


for (let i = 0; i < products.length; i++) {
    document.querySelector(".js-products-grid").innerHTML += 
    `<div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src= ${products[i].image}>
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${products[i].name}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="images/ratings/rating-${products[i].rating.stars}.png">
                    <div class="product-rating-count link-primary">
                    ${products[i]["rating"]["count"]}
                    </div>
                </div>

                <div class="product-price">
                    ${products[i].price}
                </div>

                <div class="product-quantity-container">
                    <select class="js-select-${products[i].id}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                <div class="product-spacer"></div>

                <div class="added-to-cart js-add-${products[i].id}">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>

                <button class="add-to-cart-button button-primary js-add-to-cart" data-id = "${products[i].id}">
                    Add to Cart
                </button>
                </div>
                `
};

let interValid = {};
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", function() {
        const productId = this.dataset.id;
        const selectQuantity = document.querySelector(`.js-select-${productId}`);
        const select = Number(selectQuantity.value)
        
        addToCart(select, productId)

        document.querySelector(".js-cart-quantity").innerHTML = calculator();

        document.querySelector(`.js-add-${productId}`).classList.add("active");
        if (interValid[productId]) {
            clearTimeout(interValid[productId])
        };
        interValid[productId] = setTimeout(() => {
            document.querySelector(`.js-add-${productId}`).classList.remove("active");
        }, 1000);
       
    });
});
document.querySelector(".js-cart-quantity").innerHTML = calculator();