/*
    Author: Lindsey Maddox
    Name: product.js
    Purpose: accept product object and render HTML element to DOM
*/

function productFactory(productObject) {
  const output = document.getElementById("output")
  const productCard = document.createElement("div")
  const productDetails = `
    <h2>${productObject.title}</h2>
    <p>${productObject.description}</p>
  `
  productCard.innerHTML = productDetails
  output.appendChild(productCard)
}

const productObject = {
  "id": 1,
  "title": "Bluetooth Banana Phone",
  "price": "40.00",
  "quantity": "7",
  "image": "./img/banana-phone.png",
  "description": "Add slapstick style to your phone with this handset worthy of a Marx Brothers gag. It connects through Bluetooth for wireless conversations that keep phone radiation away from your coconut. Just pair it with your device to receive calls and use your favorite voice assistant (like Siri) to make them. Talk for up to 10 hours with the USB-rechargeable battery and know you're helping keep the jungle green thanks to the 100% recycled plastic cover. Made in China."
}

productFactory(productObject)