/*
    Author: Lindsey Maddox
    Name: review-list.js
    Purpose: fetch reviews from API
*/

import reviewFactory from "./review"
import reviewAPI from "./review-data"

function reviewList() {
  document.getElementById("output").innerHTML = "";
  reviewAPI.getReviews().then(parsed => {
    parsed.forEach(review => {
      reviewFactory(review);
    });
  });
}

export default reviewList