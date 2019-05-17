/*
    Author: Lindsey Maddox
    Name: product.js
    Purpose: render HTML element to DOM
*/

function productFactory(productObject) {
  productObject.forEach(product => {
    buildProductHTML(product);
  });

}

function buildProductHTML(product) {
  const output = document.getElementById("output");
  const productCard = document.createElement("div");

  // const productDetails = `
  //   <h2>${product.title}</h2>
  //   <p>${product.description}</p>
  // `
  // productCard.innerHTML = productDetails;

  let productTitle = document.createElement("h2");
  let productDescription = document.createElement("p");
  let productPrice = document.createElement("p");

  productTitle.textContent = product.title;
  productDescription.textContent = "Description: " + product.description;
  productPrice.textContent = "Cost: $" + product.price;

  productCard.appendChild(productTitle);
  productCard.appendChild(productDescription);
  productCard.appendChild(productPrice);

  output.appendChild(productCard);
}

export default productFactory