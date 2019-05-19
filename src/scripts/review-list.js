/*
    Author: Lindsey Maddox
    Name: review-list.js
    Purpose: fetch reviews from API
*/

import reviewFactory from "./review"
import reviewAPI from "./review-data"

function reviewList() {
  reviewAPI.getReviews().then(reviewObject => {
      reviewFactory(reviewObject);
  });
}

export default reviewList