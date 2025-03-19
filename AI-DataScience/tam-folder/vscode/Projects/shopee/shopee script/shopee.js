import { mainSecondSection } from "../shopee data/shopee-data-shopee.js";



for (let i = 0; i < mainSecondSection.length; i++) {
    document.querySelector(".main-second-section ul").innerHTML += 
    `
    <li>
        <img src=${mainSecondSection[i].img} alt="">
        <p>${mainSecondSection[i].name}</p>
    </li>
    `
};


import {firstRowItem} from "../shopee data/shopee-data-shopee.js";
for (let i = 0; i < firstRowItem.length; i++) {
    document.querySelector(".first-row-item").innerHTML += 
    `
    <div class="column">
        <img src=${firstRowItem[i].img} alt="">
        <p>${firstRowItem[i].name}</p>
    </div>
    
    `
};


import { secondRowItem } from "../shopee data/shopee-data-shopee.js";
for (let i = 0; i < secondRowItem.length; i++) {
    document.querySelector(".second-row-item").innerHTML += 
    `
    <div class="column">
        <img src=${secondRowItem[i].img} alt="">
        <p>${secondRowItem[i].name}</p>
    </div>
    
    `
};


document.getElementById("next").addEventListener("click", function() {
    const firstRow = document.querySelector(".first-row-item");
    const secondRow = document.querySelector(".second-row-item");

    firstRow.style.scrollBehavior = 'smooth';
    secondRow.style.scrollBehavior = 'smooth';
    firstRow.scrollBy(500, 0); secondRow.scrollBy(500, 0);

    let checkScroll = setInterval(() => {
    if (firstRow.scrollLeft  + firstRow.clientWidth >= firstRow.scrollWidth || secondRow.scrollLeft  + secondRow.clientWidth >= secondRow.scrollWidth) {
        document.getElementById("previous").style.display = "block";
        this.style.display = "none";
        clearInterval(checkScroll)
    };
    }, 1);
});
document.getElementById("previous").addEventListener("click", function() {
    const firstRow = document.querySelector(".first-row-item");
    const secondRow = document.querySelector(".second-row-item");

    firstRow.style.scrollBehavior = 'smooth';
    secondRow.style.scrollBehavior = 'smooth';

    firstRow.scrollBy(-500, 0); secondRow.scrollBy(-500, 0);
    let checkScroll = setInterval(() => {
    if (firstRow.scrollLeft  === 0 || secondRow.scrollLeft  === 0) {
        document.getElementById("next").style.display = "block";
        this.style.display = "none";
        clearInterval(checkScroll)
    };
    }, 1);
});


import { firstRowSale } from "../shopee data/shopee-data-shopee.js";
for (let i = 0; i < firstRowSale.length; i++) {

    
        document.querySelector(".row-sale").innerHTML += 
        `
        <div class="first-row-sale">
            <img src= ${firstRowSale[i].img} alt="">
            <div class="price">
                <h3>${firstRowSale[i].price}</h3>
                <p class="sale">${firstRowSale[i].sale}</p>
                <p style="width: ${firstRowSale[i].width}" class="red"></p>
                <p></p>
            </div>
        </div>
        `
};


document.querySelector(".next").addEventListener("click", function() {
    const rowSale = document.querySelector(".row-sale");
    rowSale.style.scrollBehavior = "smooth";
    rowSale.scrollBy(1000, 0);

    let checkScroll = setInterval(() => {
    if (rowSale.scrollLeft + rowSale.clientWidth >= rowSale.scrollWidth) {
        document.querySelector(".previous").style.display = "block";
        this.style.display = "none";
        clearInterval(checkScroll);
    }
    }, 1);
});
document.querySelector(".previous").addEventListener("click", function() {
    const rowSale = document.querySelector(".row-sale");
    rowSale.style.scrollBehavior = "smooth";
    rowSale.scrollBy(-1000, 0);

    let checkScroll = setInterval(() => {
    if (rowSale.scrollLeft === 0) {
        this.style.display = "none"
        document.querySelector(".next").style.display = "block";
        clearInterval(checkScroll);
    }
    }, 1);
});



import { firstRowMall } from "../shopee data/shopee-data-shopee.js";
for (let i = 0; i < firstRowMall.length; i++) {
    document.querySelector(".first-row-mall").innerHTML +=
    `
    <div class="column">
    <img src=${firstRowMall[i].img} alt="">
    <p>${firstRowMall[i].name}</p>
    </div>
    `
};


import { secondRowMall } from "../shopee data/shopee-data-shopee.js";
for (let i = 0; i < secondRowMall.length; i++) {
    if (i === secondRowMall.length - 1) {
        document.querySelector(".second-row-mall").innerHTML +=
        `
        <div class="column">
            <h5>${secondRowMall[i].name}</h5>
        </div>
        `;
    } else {
        document.querySelector(".second-row-mall").innerHTML +=
        `
        <div class="column">
            <img src=${secondRowMall[i].img} alt="">
            <p>${secondRowMall[i].name}</p>
        </div>
        `;
    }
};



document.querySelector(".third-section .main-third-section-mall .describe .next").addEventListener("click", function() {
    const firstRowMall = document.querySelector(".first-row-mall");
    const secondRowMall = document.querySelector(".second-row-mall");
    firstRowMall.style.scrollBehavior = "smooth";
    secondRowMall.style.scrollBehavior = "smooth";

    firstRowMall.scrollBy(1000,0);
    secondRowMall.scrollBy(1000,0);

    setTimeout(() => {
        if (secondRowMall.scrollLeft + secondRowMall.clientWidth >= secondRowMall.scrollWidth) {
            document.querySelector(".third-section .main-third-section-mall .describe .previous").style.display = "block";
            this.style.display = "none"
        }
    }, 500);
});


document.querySelector(".third-section .main-third-section-mall .describe .previous").addEventListener("click", function() {
    const firstRowMall = document.querySelector(".first-row-mall");
    const secondRowMall = document.querySelector(".second-row-mall");
    firstRowMall.style.scrollBehavior = "smooth";
    secondRowMall.style.scrollBehavior = "smooth";

    firstRowMall.scrollBy(-1000,0);
    secondRowMall.scrollBy(-1000,0);

    setTimeout(() => {
        if (secondRowMall.scrollLeft + secondRowMall.clientWidth <= secondRowMall.scrollWidth) {
            document.querySelector(".third-section .main-third-section-mall .describe .next").style.display = "block";
            this.style.display = "none"
        };
    }, 500);
});



import { rowHotSearch } from "../shopee data/shopee-data-shopee.js";
for (let i = 0; i < rowHotSearch.length; i++) {
    document.querySelector(".row-hotsearch").innerHTML +=
    `
    <div class="column">
        <div class="column-top"><img src=${rowHotSearch[i].imgTop} alt=""></div>
        <div class="column-imagie"><img src=${rowHotSearch[i].imgItem} alt=""></div>
        <div data-p = "${rowHotSearch[i].sell}" class="column-sell">
        </div>
        <div class="column-name">
            <p>${rowHotSearch[i].name}</p>
        </div>
  </div>
    `
};
document.querySelector(".main-four-section-hotsearch .next").addEventListener("click", function() {
    const rowHotSearch = document.querySelector(".row-hotsearch");
    rowHotSearch.style.scrollBehavior = "smooth";
    rowHotSearch.scrollBy(1200, 0);

    setTimeout(() => {
        if (rowHotSearch.scrollLeft + rowHotSearch.offsetWidth >= rowHotSearch.scrollWidth) {
            this.style.display = "none";
            document.querySelector(".main-four-section-hotsearch .previous").style.display = "block"
        }
    }, 500);
});
document.querySelector(".main-four-section-hotsearch .previous").addEventListener("click", function() {
    const rowHotSearch = document.querySelector(".row-hotsearch");
    rowHotSearch.style.scrollBehavior = "smooth";
    rowHotSearch.scrollBy(-1200, 0);

    setTimeout(() => {
        if (rowHotSearch.scrollLeft === 0) {
            this.style.display = "none";
            document.querySelector(".main-four-section-hotsearch .next").style.display = "block"
        }
    }, 500);
});










//////////////////////////////////////////////////////////////////////////////////////////////////
import { product } from "../shopee data/product.js";
import { cart, storeItemCartShopee, calculatorShopee } from "../shopee data/cart.js";



for (let i = 0; i < product.length; i++) {
    document.querySelector('.main-fifth-section-body-grid').innerHTML +=
    `
    <div data-flash = "${product[i].flash}" class="column" style="display: ${product[i].display}">
        <div class="first-img">
            <button data-id = "${product[i].id}" class="js-mua">Mua Hàng</button>
            <img src=${product[i].firstImg} alt="">
        </div>
        <div class="second-img">
            <img src=${product[i].secondImg} alt="">
        </div>
        <p class="textOfFifthSection">${product[i].name}</p>
        <div data-sales = "${product[i].sales}" class="sold">
            <p>${product[i].price}</p>
            <p>${product[i].sell}</p>
            
        </div>
    </div>
    `
};


document.querySelector(".btn button").addEventListener("click", function() {
    document.querySelectorAll(".column").forEach((event) => {
        if (event.style.display === "none") {
            event.style.display = "block";
        }
    });
});


document.querySelectorAll(".js-mua").forEach((button) => {
    button.addEventListener("click", function() {
        const productId = this.dataset.id;
        const uniqueItem = cart.find((item) => item.id === productId);
        
        if (uniqueItem) {
            uniqueItem.quantity += 1
        }
        else {
            cart.push({
                id: productId,
                quantity: 1
            })
        };
        
         document.querySelector(".js-cart-quantity").innerHTML = calculatorShopee();
         
         storeItemCartShopee()
    });
});
document.querySelector(".js-cart-quantity").innerHTML = calculatorShopee();