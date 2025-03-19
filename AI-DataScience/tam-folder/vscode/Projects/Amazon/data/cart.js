export let cart = JSON.parse(localStorage.getItem("cart")) ||    [{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
},
{
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];



export function saveToLocal() {
    localStorage.setItem("cart", JSON.stringify(cart))
};

export function addToCart(select, productId) {
    let item = cart.find((item) => item.id === productId);
    if (item) {
        item.quantity += select
    } else {
        cart.push({
            id: productId,
            quantity: 1
        })
    };
    saveToLocal()
};

export function removeItemCart(productId) {
    let newCart = [];
    newCart = cart.filter((item) => item.id !== productId);
    cart = newCart;
    saveToLocal()
};

export function calculator() {
    let calculator = 0;
    for (let i = 0; i < cart.length; i++) {
        calculator += cart[i].quantity
    };
    return calculator
};

export function newInput(productId, inputForQuantity) {
    let input = cart.find((item) => item.id === productId);
    if (input) {
        input.quantity += inputForQuantity;
        inputForQuantity = input.quantity
    }
    saveToLocal()
    return inputForQuantity
};

