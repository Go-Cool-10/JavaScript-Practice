import products from "./products.js";

let display = " ";
products.forEach((product) => {
  display =
    display +
    `<input type="checkbox" class="mycheckbox" value="${product.image}"> ${product.title} - $${product.price} <br>`;

  document.getElementById("container").innerHTML = display;

  let checkboxes = document.querySelectorAll(".mycheckbox");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", displaySelectedValue);
  }

  function displaySelectedValue() {
    let selectedValue = " ";

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedValue = selectedValue + `<img src="${checkboxes[i].value}" alt="image" height="200px" width="200px"> <br>`;
      }
    }

    document.getElementById("selector").innerHTML = selectedValue;
  }
});
