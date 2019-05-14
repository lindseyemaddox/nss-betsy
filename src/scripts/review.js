/*
    Author: Lindsey Maddox
    Name: review.js
    Purpose: accept review objects and render HTML element to DOM
*/

function reviewFactory(reviewObject) {
  const output = document.getElementById("output")
  const reviewCard = document.createElement("div")
  const reviewDetails = `
    <h3>${reviewObject}</h3>
    <p>${reviewObject}</p>
  `
  reviewCard.innerHTML = reviewDetails
  output.appendChild(reviewCard)
}

export default reviewFactory