/*
    Author: Lindsey Maddox
    Name: review-list.js
    Purpose: fetch reviews from API
*/

import reviewFactory from "./review"
import reviewAPI from "./review-data"

function reviewList(productId) {
  document.getElementById("output").innerHTML = "";
  reviewAPI.getReviews(productId)
    .then(review => {
      review.forEach(title => {
        reviewFactory(title)
      });
    });
}

export default reviewList