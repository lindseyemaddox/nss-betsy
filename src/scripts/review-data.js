/*
    Author: Lindsey Maddox
    Name: review-data.js
    Purpose: fetch reviews from database
*/

const baseURL = "http://localhost:8088";

const reviewAPI = {
  getReviews: function (productId) {
    return fetch(`${baseURL}/reviews/?id=${productId}`)
      .then(results => results.json())
  }
}

export default reviewAPI