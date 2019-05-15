/*
    Author: Lindsey Maddox
    Name: product.js
    Purpose: accept product objects and render HTML element to DOM
*/

import productList from "./product-list"
import reviewList from "./review-list"

function productFactory(productObject) {
  const output = document.getElementById("output")
  const productCard = document.createElement("div")
  const productDetails = `
    <h2>${productObject}</h2>
    <p>${productObject}</p>
  `
  productCard.innerHTML = productDetails
  output.appendChild(productCard)
  output.appendChild(productList)
  output.appendChild(reviewList)
}


export default productFactory
