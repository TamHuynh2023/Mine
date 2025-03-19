export let cart = JSON.parse(localStorage.getItem("cartShopee")) || [
    {
        id: "item8",
        quantity: 1
    },
    {
        id: "item9",
        quantity: 1
    }];

export function removeItemFromCartShopee(productId) {
    cart = cart.filter((item) => item.id !== productId);
};

export function storeItemCartShopee() {
    localStorage.setItem("cartShopee", JSON.stringify(cart))
};

export function calculatorShopee() {
    let calculator = 0; 
    cart.forEach((item) => {
       calculator += item.quantity
    });
    return calculator
};