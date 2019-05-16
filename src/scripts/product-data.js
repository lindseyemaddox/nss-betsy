/*
    Author: Lindsey Maddox
    Name: review-data.js
    Purpose: fetch reviews from database
*/

const baseURL = "http://localhost:8088";

const productAPI = {
  getProducts: function (parsed) {
    return fetch(`${baseURL}/products`)
      .then(response => response.json(parsed));
  }
}

export default productAPI