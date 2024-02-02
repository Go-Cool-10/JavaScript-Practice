let is_shop_open = true
function placeHolder() {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            resolve("Your order is placed")
        }
        else {
            reject("Your order is rejected")
        }
    })
}

async function order() {
    console.log("I")
    console.log("II")
    try {
        let response = await placeHolder()
        console.log(response)
        console.log("Payment")
    }
    catch (error) {
        console.log(error)
    }
    console.log("III")
    console.log("IV")
}
order()