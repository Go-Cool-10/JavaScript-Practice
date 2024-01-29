import products from "./products.js";

let container = document.getElementById("container");

products.forEach((product) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input type="checkbox"> ${product.title} - $${product.price}`;
  container.appendChild(listItem);
});
