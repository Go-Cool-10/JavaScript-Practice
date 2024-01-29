import products from "./products.js";

let container = document.getElementById("container");

products.forEach((product) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${product.title} - $${product.price}`;
  container.appendChild(listItem);
});
