/*
    Author: Lindsey Maddox
    Name: review-data.js
    Purpose: fetch reviews from database
*/

const baseURL = "http://localhost:8088";

const reviewAPI = {
  getReviews: function () {
    return fetch(`${baseURL}/reviews`)
      .then(response => response.json())
  }
}

reviewAPI.getReviews();


export default reviewAPI;