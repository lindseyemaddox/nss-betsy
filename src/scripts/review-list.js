import API from "./review-data"

const output = document.getElementById("output");

const reviewDOM = {
  buildReviewDOM: function (parsedReview) {

    function setAttributes(element, attributes) {
      for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
    }

    let loadReview = API.getReviews().then(parsedReviews => {
      output.innerHTML = "";
      parsedReviews.forEach(parsedReview => {
        buildReviewDOM(parsedReview);
      });
    });

    let reviewCard = document.createElement("section")
    setAttributes(reviewCard, {
      id: `review_section_${parsedReview.id}`,
      class: "review_card",
    })
    let reviewTitle = document.createElement("div");
    reviewTitle.innerHTML = `
          <h3>Reviews</h3>
      `;
    let reviewDetails = document.createElement("div");
    parsedReview.innerHTML = `
        <ul>
          <li>${parsedReview.review1}</li>
          <li>${parsedReview.review2}</li>
          <li>${parsedReview.review3}</li>
        </ul>
      `;
    output.appendChild(reviewCard)
    reviewCard.appendChild(reviewTitle)
    reviewCard.appendChild(reviewDetails)
  }
}

export default reviewDOM
