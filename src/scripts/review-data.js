let baseUrl = "http://localhost:8088/products";

const API = {
  getReviews: function reviews() {
    fetch(baseUrl).then(results => results.json());
  },
  getOneReview: function review(reviewId) {
    fetch(`${baseUrl}/${reviewId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  }
}

export default API