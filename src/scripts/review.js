/*
    Author: Lindsey Maddox
    Name: review.js
    Purpose: accept review objects and render HTML element to DOM
*/

import ratingsFactory from "./ratings";

function reviewFactory(reviewObject) {
  reviewObject.forEach(review => {
    buildreviewHTML(review);
    ratingsFactory(review);
  })
}

function buildreviewHTML(review) {
  const reviewOutput = document.getElementById("review-output");
  const reviewCard = document.createElement("div");

  const reviewDetails = `
  <h3>${review.title}</h3>
  <p>${review.body}</p>
  `
  reviewCard.innerHTML = reviewDetails;
  reviewOutput.appendChild(reviewCard);
}

export default reviewFactory