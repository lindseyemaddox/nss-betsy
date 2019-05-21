/*
    Author: Lindsey Maddox
    Name: ratings.js
    Purpose: translate and send stars to review.js
*/

function ratingsFactory(ratingsObject) {
  ratingsObject.forEach(rating => {
    buildRatingHTML(rating);
  });
}

function buildRatingHTML(review) {
  const ratingsOutput = document.getElementById("review-output div");
  const ratingSpan = document.createElement("span");
  ratingsOutput.appendChild(ratingSpan);

  if (review.rating === ("5")) {
    ratingSpan.innerHTML = `
    <i class = 'icon-star-full'></i>
  `}
  else if (review.rating === ("4.5")) {
    ratingSpan.innerHTML = `
    <i class = 'icon-star-half'></i>
  `}
  else () {
    ratingSpan.innerHTML = `
    <i class = 'icon-star-empty'></i>
  `}
}
}

export default ratingsFactory