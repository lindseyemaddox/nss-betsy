/*
    Author: Lindsey Maddox
    Name: review-data.js
    Purpose: fetch products from database
*/

const baseURL = "http://localhost:8088";

const productAPI = {
  getProducts: function () {
    return fetch(`${baseURL}/products`)
      .then(response => response.json());
  }
}

productAPI.getProducts();

export default productAPI;