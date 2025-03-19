import { product } from "../shopee data/product.js";
import { cart, removeItemFromCartShopee, calculatorShopee, storeItemCartShopee } from "../shopee data/cart.js";


for (let i = 0; i < cart.length; i++) { 
    let matchingItem = product.find((item) => item.id === cart[i].id);
    if (matchingItem) {
        document.querySelector(".main-four-section").innerHTML +=
    `
    <div class="four-section-body js-four-section-body-${matchingItem.id}">
        <div class="item-header">
        <input type="checkbox" style="width: 15px; border: none;">
        <p>Yêu thích</p>
        <span>${matchingItem.nameShop}</span>
        <svg viewBox="0 0 16 16" style="fill: orangered" class="shopee-svg-icon bTa6Yo"><g fill-rule="evenodd"><path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z"></path></g></svg>
        </div>

        <div class="item">
        <div class="combo">
            <p>${matchingItem.combo}</p>
            <span>${matchingItem.discount}</span>
            <a href="#">Thêm ></a>
        </div>

        <div class="clothes" style="background-color: ${matchingItem.backgroundColor}">
            ${matchingItem.inputOrText}
            <div class="clothes-imagie-name">
            <img src=${matchingItem.firstImg} alt="">
            <div class="name">
                <p>${matchingItem.name}</p>
                ${matchingItem.imgOrText}
            </div>
            </div>
            <div class="size">
            <p>
                Phân Loại Hàng:
            </p>
            <span>${matchingItem.size}</span>
            </div>
            <div class="price">
                <p>${matchingItem.oldPrice}</p>
                <span>${matchingItem.price}</span>
            </div>
           

             <div class="quantity">
                <button data-id = "${matchingItem.id}" class="js-minus">-</button>
                <input class="js-quantity-input-${matchingItem.id}" type="text" value="${cart[i].quantity}">
                <button data-id = "${matchingItem.id}" class="js-plus">+</button>
            </div>
            <p>${matchingItem.price}</p>
            <div class="remove">
                <a>
                <p data-id= "${matchingItem.id}" class="js-remove-item">Xóa</p>
                <span>Tìm sản phẩm tương tự</span>
                </a>
                <svg enable-background="new 0 0 15 15" style="width: 10px; fill: #f53d2d" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon XHOHXQ icon-down-arrow-filled"><path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z"></path></svg>
            </div>
        </div>
        </div>

        <div class="voucher">
        <svg fill="orangered" viewBox="0 -2 23 22" class="shopee-svg-icon L-deCr icon-voucher-line"><g filter="url(#voucher-filter0_d)"><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"></path></mask><path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)"></path></g><path clip-rule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"></path><defs><filter id="voucher-filter0_d" x="0" y="1" width="20" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
        <p style="display: ${matchingItem.display}">${matchingItem.voucher} <span>${matchingItem.imgvoucher}</span></p>
        <a href="#">Xem thêm voucher</a>
        </div>

        <div class="ship">
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png" alt="">
            <p>${matchingItem.ship}
            </p>
            <a href="#">Tìm hiểu thêm</a>
        </div>
    </div>
    `;
    };
};

document.querySelectorAll(".clothes .remove .js-remove-item").forEach((deleteItem) => {
    deleteItem.addEventListener("click", function() {
        const productId = this.dataset.id;
        
        removeItemFromCartShopee(productId);
        document.querySelector(`.js-four-section-body-${productId}`).remove();
        document.getElementById("total").innerHTML = calculatorShopee()

        storeItemCartShopee()
    });
});
document.getElementById("total").innerHTML = calculatorShopee()


////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector(".final-check .js-remove-item").addEventListener("click", function() {
        cart.splice(0, cart.length);

        document.querySelectorAll(".four-section-body").forEach((item) => {
            item.remove()
        });
        document.getElementById("total").innerHTML = calculatorShopee()
       storeItemCartShopee();
});

/////////////////////////////////////////////////////////////////////////////////////////

document.querySelector(".checkbox-total").addEventListener("click", function(event) {
    document.querySelectorAll('input[type=checkbox]').forEach((input) => {
        input.checked = event.target.checked;
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".js-plus").forEach((add) => {
    add.addEventListener("click", function() {
        const productId = this.dataset.id;

        let input = document.querySelector(`.js-quantity-input-${productId}`);
        let inputValue = Number(input.value); 
        inputValue += 1;
        input.value = inputValue;
        
        let product = cart.find((item) => item.id === productId);
        if (product) {
            product.quantity = inputValue
        };

        document.getElementById("total").innerHTML = calculatorShopee();
        storeItemCartShopee()
        
    });
});


 
document.querySelectorAll(".js-minus").forEach((add) => {
    add.addEventListener("click", function() {
        const productId = this.dataset.id;

        let input = document.querySelector(`.js-quantity-input-${productId}`);
        let inputValue = Number(input.value); 
        if (inputValue > 1) {
            inputValue -= 1;
        } else if (inputValue === 1) {
            inputValue = 1
        };

        input.value = inputValue;
        let item = cart.find((item) => item.id === productId);
        if (item) {
            item.quantity = inputValue
        };

        document.getElementById("total").innerHTML = calculatorShopee();
        storeItemCartShopee()
    });
});

////////////////////////////////////////////////////////////////////////////////////////////
import { fifthSectionBodyGridCart } from "../shopee data/shopee-data-shopee.js";
for (let i = 0; i < fifthSectionBodyGridCart.length; i++) {
    document.querySelector('.main-fifth-section-body-grid').innerHTML +=
    `
    <div data-flash = "${fifthSectionBodyGridCart[i].flash}" class="column">
        <div class="first-img">
            <button>Mua Hàng</button>
            <img src=${fifthSectionBodyGridCart[i].firstImg} alt="">
        </div>
        <div class="second-img">
            <img src=${fifthSectionBodyGridCart[i].secondImg} alt="">
        </div>
        <p class="textOfFifthSection">${fifthSectionBodyGridCart[i].name}</p>
        <div data-sales = "${fifthSectionBodyGridCart[i].sales}" class="sold">
            <p>${fifthSectionBodyGridCart[i].price}</p>
            <p>${fifthSectionBodyGridCart[i].sell}</p>   
        </div>
    </div>
    `
};

