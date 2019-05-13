/*
    Author: Lindsey Maddox
    Name: review-list.js
    Purpose: get all reviews from API, then run them through review factory for output to DOM
*/

import reviewFactory from "./review"
import API from "./review-data"

function reviewList() {
  document.getElementById("output").innerHTML = "";
  API.getReviews().then(parsed => {
    parsed.forEach(review => {
      reviewFactory(review);
    });
  });
}

export default reviewList