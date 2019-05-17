/*
    Author: Lindsey Maddox
    Name: product.js
    Purpose: accept product objects and render HTML element to DOM
*/

import productFactory from "./product"
import productAPI from "./product-data"

function productList() {
  productAPI.getProducts().then(productObject => {
    console.log(productObject);
    productFactory(productObject);
  });
}

export default productList
