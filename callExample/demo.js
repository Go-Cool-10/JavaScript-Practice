let order_1 = {
    oderId: 10129,
    totalPrice: 10000,
    purchaseDate: new Date()
}
let order_2 = {
    oderId: 938012,
    totalPrice: 4000,
    purchaseDate: new Date()
}

function displayOderDetails(gst, discount) {
    let discountPrice = this.totalPrice * (discount / 100)
    let gstPrice = (this.totalPrice - discountPrice) * (gst / 100)

    console.log("ORDER ID: " + this.oderId)
    console.log("Purchase Date: " + this.purchaseDate)
    console.log("Price: " + this.totalPrice)
    console.log(`${discount}% Discount : ` + discountPrice)
    console.log(`${gst}% GST : ` + gstPrice)
    
    this.totalPrice = this.totalPrice - discountPrice + gstPrice
    console.log("Total Bill amount: " + this.totalPrice)
}


displayOderDetails.call(order_1, 10, 20);
console.log()
displayOderDetails.call(order_2, 18, 10);
