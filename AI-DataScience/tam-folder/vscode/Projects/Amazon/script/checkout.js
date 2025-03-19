import { cart, removeItemCart, newInput, calculator } from "../data/cart.js";
import { products } from "../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
const today = dayjs();
const deliveryDate = today.add(7, "days");
console.log(deliveryDate.format("dddd, DD MMMM YYYY, h:mma"))


for (let i = 0; i < cart.length; i++) {
  let item = products.find((item) => item.id === cart[i].id);
  if (item) {
    document.querySelector(".js-order-summary").innerHTML += 
    `<div class="cart-item-container js-cart-item-container-${item.id}" data-id = "${item.id}">
                <div class="delivery-date">
                  Delivery date: Tuesday, June 21
                </div>
    
                <div class="cart-item-details-grid">
                  <img class="product-image"
                    src=${item.image}>
    
                  <div class="cart-item-details">
                    <div class="product-name">
                    ${item.name}
                    </div>
                    <div class="product-price">
                    ${(item.price).toFixed(2)}
                    </div>
                    <div class="product-quantity-${item.id}">
                      <span>
                        Quantity: <span class="quantity-label js-quantity-label-${item.id}">${cart[i].quantity}</span>
                      </span>
                      <span class="update-quantity-link link-primary js-update-quantity-link" data-id = "${item.id}">
                        Update
                      </span>
                      <input class="quantity-input js-quantity-input-${item.id}" data-id = "${item.id}">
                      <span class="save-quantity-link js-save-quantity-link" data-id = "${item.id}">Save</span>
                      <span class="delete-quantity-link link-primary js-delete-link"
                      data-id = "${item.id}">
                        Delete
                      </span>
                    </div>
                  </div>
    
                  <div class="delivery-options">
                    <div class="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    <div class="delivery-option">
                      <input type="radio" checked
                        class="delivery-option-input"
                        name="delivery-option-${item.id}">
                      <div>
                        <div class="delivery-option-date">
                          Tuesday, June 21
                        </div>
                        <div class="delivery-option-price">
                          FREE Shipping
                        </div>
                      </div>
                    </div>
                    <div class="delivery-option">
                      <input type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${item.id}">
                      <div>
                        <div class="delivery-option-date">
                          Wednesday, June 15
                        </div>
                        <div class="delivery-option-price">
                          $4.99 - Shipping
                        </div>
                      </div>
                    </div>
                    <div class="delivery-option">
                      <input type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${item.id}">
                      <div>
                        <div class="delivery-option-date">
                          Monday, June 13
                        </div>
                        <div class="delivery-option-price">
                          $9.99 - Shipping
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `;
  };
};

document.querySelectorAll(".js-delete-link").forEach((deleteButton) => {
  deleteButton.addEventListener("click", function() {
    const productId = this.dataset.id;
    removeItemCart(productId);
    document.querySelector(`.js-cart-item-container-${productId}`).remove();
    
    document.querySelector(".return-to-home-link").innerHTML = calculator()
  });
});
document.querySelector(".return-to-home-link").innerHTML = calculator();


// click update
document.querySelectorAll(".js-update-quantity-link").forEach((updateButton) => {
  updateButton.addEventListener("click", function() {
    const productId = this.dataset.id;
    document.querySelector(`.product-quantity-${productId}`).classList.add("active")
  });
});

// click save
document.querySelectorAll(".js-save-quantity-link").forEach((saveButton) => {
  saveButton.addEventListener("click", function() {
    const productId = this.dataset.id;
    document.querySelector(`.product-quantity-${productId}`).classList.remove("active");

    const inputElement = document.querySelector(`.js-quantity-input-${productId}`);
    const inputForQuantity = Number(inputElement.value);

    
    if (inputForQuantity < 0 || inputForQuantity > 1000) {
      alert("Your products should be greater 0 or less 1000");
      return;
    };
    
    const newQuantityInput = newInput(productId, inputForQuantity);
    document.querySelector(`.js-quantity-label-${productId}`).innerHTML = newQuantityInput;
    document.querySelector(".return-to-home-link").innerHTML = calculator();
    inputElement.value = "";
    
    
  });
});