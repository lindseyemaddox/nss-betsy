/*
    Author: Lindsey Maddox
    Name: review-data.js
    Purpose: fetch reviews from database
*/

const baseURL = "http://localhost:8088/products";

const API = {
  getReviews: function () {
    return fetch(baseURL)
      .then(results => results.json())
  }
}

export default API