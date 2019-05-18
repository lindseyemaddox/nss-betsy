/*
    Author: Lindsey Maddox
    Name: product.js
    Purpose: accept product object and send through the factory
*/

import productFactory from "./product"
import productAPI from "./product-data"

function productList() {
  productAPI.getProducts().then(productObject => {
    productFactory(productObject);
  });
}

export default productList