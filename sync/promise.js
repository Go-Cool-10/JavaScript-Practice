let is_product_available = true;

function placeOrder() {
    return new Promise((reject, resolve) => {
        if (is_product_available) {
            resolve(`Ready to place your order 😊`)
        }
        else {
            reject(`Product is currently unavailable 🥲`)
        }
    })
}

placeOrder().then((data) => console.log(data))
    .catch((error) => console.log(error))