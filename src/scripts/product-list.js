/*
    Author: Lindsey Maddox
    Name: product.js
    Purpose: accept product objects and render HTML element to DOM
*/

import productFactory from "./product"
import productAPI from "./product-data"

function productList() {
  document.getElementById("output").innerHTML = "";
  productAPI.getProducts().then(parsed => {
    parsed.forEach(product => {
      productFactory(product)
    });
  });
}

export default productList
