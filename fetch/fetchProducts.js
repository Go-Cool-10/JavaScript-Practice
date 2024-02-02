const fetchProducts = async () => {
    let products
    try {
        let response = await fetch("https://fakestoreapi.com/products")
        products = response.json() // only data from the response object
        console.log(products)
        return products
    }
    catch (error) {
        console.log(error)
    }
}
let products = fetchProducts()
console.log(products)