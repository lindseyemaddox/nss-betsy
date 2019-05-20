(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./product-list"));

var _reviewList = _interopRequireDefault(require("./review-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nav.default)();
(0, _productList.default)();
(0, _reviewList.default)();

},{"./nav":2,"./product-list":4,"./review-list":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
    Author: Lindsey Maddox
    Name: nav.js
    Purpose: create nav component and print to dom
*/
function createNav() {
  const navOutput = document.getElementById("main-nav");
  const navDetails = `
    <ul>
      <li><a href="/">Categories</a></li>
      <li><a href="/">Orders</a></li>
      <li><a href="/">Logout</a></li>
    </ul>
  `;
  navOutput.innerHTML = navDetails;
}

createNav();
var _default = createNav;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
    Author: Lindsey Maddox
    Name: review-data.js
    Purpose: fetch products from database
*/
const baseURL = "http://localhost:8088";
const productAPI = {
  getProducts: function () {
    return fetch(`${baseURL}/products`).then(response => response.json());
  }
};
productAPI.getProducts();
var _default = productAPI;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _product = _interopRequireDefault(require("./product"));

var _productData = _interopRequireDefault(require("./product-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Lindsey Maddox
    Name: product.js
    Purpose: accept product object and send through the factory
*/
function productList() {
  _productData.default.getProducts().then(productObject => {
    (0, _product.default)(productObject);
  });
}

var _default = productList;
exports.default = _default;

},{"./product":5,"./product-data":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
    Author: Lindsey Maddox
    Name: product.js
    Purpose: render HTML element to DOM
*/
function productFactory(productObject) {
  productObject.forEach(product => {
    buildProductHTML(product);
  });
}

function buildProductHTML(product) {
  const productOutput = document.getElementById("product-output");
  const productCard = document.createElement("div");
  const productDetails = `
    <h2>${product.title}</h2>
    <p>${"Description: " + product.description}</p>
    <p>${"Cost: $" + product.price}</p>
  `;
  productCard.innerHTML = productDetails; // let productTitle = document.createElement("h2");
  // let productDescription = document.createElement("p");
  // let productPrice = document.createElement("p");
  // productTitle.textContent = product.title;
  // productDescription.textContent = "Description: " + product.description;
  // productPrice.textContent = "Cost: $" + product.price;
  // productCard.appendChild(productTitle);
  // productCard.appendChild(productDescription);
  // productCard.appendChild(productPrice);

  productOutput.appendChild(productCard);
}

var _default = productFactory;
exports.default = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
    Author: Lindsey Maddox
    Name: review-data.js
    Purpose: fetch reviews from database
*/
const baseURL = "http://localhost:8088";
const reviewAPI = {
  getReviews: function () {
    return fetch(`${baseURL}/reviews`).then(response => response.json());
  }
};
reviewAPI.getReviews();
var _default = reviewAPI;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _review = _interopRequireDefault(require("./review"));

var _reviewData = _interopRequireDefault(require("./review-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Lindsey Maddox
    Name: review-list.js
    Purpose: fetch reviews from API
*/
function reviewList() {
  _reviewData.default.getReviews().then(reviewObject => {
    (0, _review.default)(reviewObject);
  });
}

var _default = reviewList;
exports.default = _default;

},{"./review":8,"./review-data":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
    Author: Lindsey Maddox
    Name: review.js
    Purpose: accept review objects and render HTML element to DOM
*/
function reviewFactory(reviewObject) {
  reviewObject.forEach(review => {
    buildreviewHTML(review);
  });
}

function buildreviewHTML(review) {
  const reviewOutput = document.getElementById("review-output");
  const reviewCard = document.createElement("div");
  const reviewDetails = `
  <h3>${review.title}</h3>
  <p>${review.body}</p>
  `;
  reviewCard.innerHTML = reviewDetails;
  reviewOutput.appendChild(reviewCard);
}

var _default = reviewFactory;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC1kYXRhLmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0LWxpc3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiLCIuLi9zY3JpcHRzL3Jldmlldy1kYXRhLmpzIiwiLi4vc2NyaXB0cy9yZXZpZXctbGlzdC5qcyIsIi4uL3NjcmlwdHMvcmV2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7QUFDQTs7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1JBOzs7OztBQU1BLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixRQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4QixDQUFsQjtBQUVBLFFBQU0sVUFBVSxHQUFJOzs7Ozs7R0FBcEI7QUFPQSxFQUFBLFNBQVMsQ0FBQyxTQUFWLEdBQXNCLFVBQXRCO0FBQ0Q7O0FBRUQsU0FBUztlQUVNLFM7Ozs7Ozs7Ozs7O0FDckJmOzs7OztBQU1BLE1BQU0sT0FBTyxHQUFHLHVCQUFoQjtBQUVBLE1BQU0sVUFBVSxHQUFHO0FBQ2pCLEVBQUEsV0FBVyxFQUFFLFlBQVk7QUFDdkIsV0FBTyxLQUFLLENBQUUsR0FBRSxPQUFRLFdBQVosQ0FBTCxDQUNKLElBREksQ0FDQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEYixDQUFQO0FBRUQ7QUFKZ0IsQ0FBbkI7QUFPQSxVQUFVLENBQUMsV0FBWDtlQUVlLFU7Ozs7Ozs7Ozs7O0FDWGY7O0FBQ0E7Ozs7QUFQQTs7Ozs7QUFTQSxTQUFTLFdBQVQsR0FBdUI7QUFDckIsdUJBQVcsV0FBWCxHQUF5QixJQUF6QixDQUE4QixhQUFhLElBQUk7QUFDN0MsMEJBQWUsYUFBZjtBQUNELEdBRkQ7QUFHRDs7ZUFFYyxXOzs7Ozs7Ozs7OztBQ2ZmOzs7OztBQU1BLFNBQVMsY0FBVCxDQUF3QixhQUF4QixFQUF1QztBQUNyQyxFQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLE9BQU8sSUFBSTtBQUMvQixJQUFBLGdCQUFnQixDQUFDLE9BQUQsQ0FBaEI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUNqQyxRQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdEI7QUFDQSxRQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFwQjtBQUVBLFFBQU0sY0FBYyxHQUFJO1VBQ2hCLE9BQU8sQ0FBQyxLQUFNO1NBQ2Ysa0JBQWtCLE9BQU8sQ0FBQyxXQUFZO1NBQ3RDLFlBQVksT0FBTyxDQUFDLEtBQU07R0FIakM7QUFLQSxFQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXdCLGNBQXhCLENBVGlDLENBV2pDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLFdBQTFCO0FBQ0Q7O2VBRWMsYzs7Ozs7Ozs7Ozs7QUN0Q2Y7Ozs7O0FBTUEsTUFBTSxPQUFPLEdBQUcsdUJBQWhCO0FBRUEsTUFBTSxTQUFTLEdBQUc7QUFDaEIsRUFBQSxVQUFVLEVBQUUsWUFBWTtBQUN0QixXQUFPLEtBQUssQ0FBRSxHQUFFLE9BQVEsVUFBWixDQUFMLENBQ0osSUFESSxDQUNDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURiLENBQVA7QUFFRDtBQUplLENBQWxCO0FBT0EsU0FBUyxDQUFDLFVBQVY7ZUFHZSxTOzs7Ozs7Ozs7OztBQ1pmOztBQUNBOzs7O0FBUEE7Ozs7O0FBU0EsU0FBUyxVQUFULEdBQXNCO0FBQ3BCLHNCQUFVLFVBQVYsR0FBdUIsSUFBdkIsQ0FBNEIsWUFBWSxJQUFJO0FBQ3hDLHlCQUFjLFlBQWQ7QUFDSCxHQUZEO0FBR0Q7O2VBRWMsVTs7Ozs7Ozs7Ozs7QUNmZjs7Ozs7QUFNQSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUM7QUFDbkMsRUFBQSxZQUFZLENBQUMsT0FBYixDQUFxQixNQUFNLElBQUk7QUFDN0IsSUFBQSxlQUFlLENBQUMsTUFBRCxDQUFmO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVMsZUFBVCxDQUF5QixNQUF6QixFQUFpQztBQUMvQixRQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixlQUF4QixDQUFyQjtBQUNBLFFBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBRUEsUUFBTSxhQUFhLEdBQUk7UUFDakIsTUFBTSxDQUFDLEtBQU07T0FDZCxNQUFNLENBQUMsSUFBSztHQUZqQjtBQUlBLEVBQUEsVUFBVSxDQUFDLFNBQVgsR0FBdUIsYUFBdkI7QUFDQSxFQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFVBQXpCO0FBQ0Q7O2VBRWMsYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG5pbXBvcnQgY3JlYXRlTmF2IGZyb20gXCIuL25hdlwiO1xyXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdC1saXN0XCI7XHJcbmltcG9ydCByZXZpZXdMaXN0IGZyb20gXCIuL3Jldmlldy1saXN0XCI7XHJcblxyXG5cclxuY3JlYXRlTmF2KCk7XHJcbnByb2R1Y3RMaXN0KCk7XHJcbnJldmlld0xpc3QoKTtcclxuXHJcblxyXG4iLCIvKlxyXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxyXG4gICAgTmFtZTogbmF2LmpzXHJcbiAgICBQdXJwb3NlOiBjcmVhdGUgbmF2IGNvbXBvbmVudCBhbmQgcHJpbnQgdG8gZG9tXHJcbiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2T3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdlwiKTtcclxuXHJcbiAgY29uc3QgbmF2RGV0YWlscyA9IGBcclxuICAgIDx1bD5cclxuICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+Q2F0ZWdvcmllczwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cIi9cIj5PcmRlcnM8L2E+PC9saT5cclxuICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+TG9nb3V0PC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIGBcclxuICBuYXZPdXRwdXQuaW5uZXJIVE1MID0gbmF2RGV0YWlscztcclxufVxyXG5cclxuY3JlYXRlTmF2KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXYiLCIvKlxyXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxyXG4gICAgTmFtZTogcmV2aWV3LWRhdGEuanNcclxuICAgIFB1cnBvc2U6IGZldGNoIHByb2R1Y3RzIGZyb20gZGF0YWJhc2VcclxuKi9cclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OFwiO1xyXG5cclxuY29uc3QgcHJvZHVjdEFQSSA9IHtcclxuICBnZXRQcm9kdWN0czogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVUkx9L3Byb2R1Y3RzYClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICB9XHJcbn1cclxuXHJcbnByb2R1Y3RBUEkuZ2V0UHJvZHVjdHMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RBUEk7IiwiLypcclxuICAgIEF1dGhvcjogTGluZHNleSBNYWRkb3hcclxuICAgIE5hbWU6IHByb2R1Y3QuanNcclxuICAgIFB1cnBvc2U6IGFjY2VwdCBwcm9kdWN0IG9iamVjdCBhbmQgc2VuZCB0aHJvdWdoIHRoZSBmYWN0b3J5XHJcbiovXHJcblxyXG5pbXBvcnQgcHJvZHVjdEZhY3RvcnkgZnJvbSBcIi4vcHJvZHVjdFwiXHJcbmltcG9ydCBwcm9kdWN0QVBJIGZyb20gXCIuL3Byb2R1Y3QtZGF0YVwiXHJcblxyXG5mdW5jdGlvbiBwcm9kdWN0TGlzdCgpIHtcclxuICBwcm9kdWN0QVBJLmdldFByb2R1Y3RzKCkudGhlbihwcm9kdWN0T2JqZWN0ID0+IHtcclxuICAgIHByb2R1Y3RGYWN0b3J5KHByb2R1Y3RPYmplY3QpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TGlzdDsiLCIvKlxyXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxyXG4gICAgTmFtZTogcHJvZHVjdC5qc1xyXG4gICAgUHVycG9zZTogcmVuZGVyIEhUTUwgZWxlbWVudCB0byBET01cclxuKi9cclxuXHJcbmZ1bmN0aW9uIHByb2R1Y3RGYWN0b3J5KHByb2R1Y3RPYmplY3QpIHtcclxuICBwcm9kdWN0T2JqZWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICBidWlsZFByb2R1Y3RIVE1MKHByb2R1Y3QpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFByb2R1Y3RIVE1MKHByb2R1Y3QpIHtcclxuICBjb25zdCBwcm9kdWN0T3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LW91dHB1dFwiKTtcclxuICBjb25zdCBwcm9kdWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3REZXRhaWxzID0gYFxyXG4gICAgPGgyPiR7cHJvZHVjdC50aXRsZX08L2gyPlxyXG4gICAgPHA+JHtcIkRlc2NyaXB0aW9uOiBcIiArIHByb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPHA+JHtcIkNvc3Q6ICRcIiArIHByb2R1Y3QucHJpY2V9PC9wPlxyXG4gIGBcclxuICBwcm9kdWN0Q2FyZC5pbm5lckhUTUwgPSBwcm9kdWN0RGV0YWlscztcclxuXHJcbiAgLy8gbGV0IHByb2R1Y3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAvLyBsZXQgcHJvZHVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgLy8gbGV0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAvLyBwcm9kdWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9kdWN0LnRpdGxlO1xyXG4gIC8vIHByb2R1Y3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgcHJvZHVjdC5kZXNjcmlwdGlvbjtcclxuICAvLyBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBcIkNvc3Q6ICRcIiArIHByb2R1Y3QucHJpY2U7XHJcblxyXG4gIC8vIHByb2R1Y3RDYXJkLmFwcGVuZENoaWxkKHByb2R1Y3RUaXRsZSk7XHJcbiAgLy8gcHJvZHVjdENhcmQuYXBwZW5kQ2hpbGQocHJvZHVjdERlc2NyaXB0aW9uKTtcclxuICAvLyBwcm9kdWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9kdWN0UHJpY2UpO1xyXG5cclxuICBwcm9kdWN0T3V0cHV0LmFwcGVuZENoaWxkKHByb2R1Y3RDYXJkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdEZhY3RvcnkiLCIvKlxyXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxyXG4gICAgTmFtZTogcmV2aWV3LWRhdGEuanNcclxuICAgIFB1cnBvc2U6IGZldGNoIHJldmlld3MgZnJvbSBkYXRhYmFzZVxyXG4qL1xyXG5cclxuY29uc3QgYmFzZVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4XCI7XHJcblxyXG5jb25zdCByZXZpZXdBUEkgPSB7XHJcbiAgZ2V0UmV2aWV3czogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVUkx9L3Jldmlld3NgKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgfVxyXG59XHJcblxyXG5yZXZpZXdBUEkuZ2V0UmV2aWV3cygpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJldmlld0FQSTsiLCIvKlxyXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxyXG4gICAgTmFtZTogcmV2aWV3LWxpc3QuanNcclxuICAgIFB1cnBvc2U6IGZldGNoIHJldmlld3MgZnJvbSBBUElcclxuKi9cclxuXHJcbmltcG9ydCByZXZpZXdGYWN0b3J5IGZyb20gXCIuL3Jldmlld1wiXHJcbmltcG9ydCByZXZpZXdBUEkgZnJvbSBcIi4vcmV2aWV3LWRhdGFcIlxyXG5cclxuZnVuY3Rpb24gcmV2aWV3TGlzdCgpIHtcclxuICByZXZpZXdBUEkuZ2V0UmV2aWV3cygpLnRoZW4ocmV2aWV3T2JqZWN0ID0+IHtcclxuICAgICAgcmV2aWV3RmFjdG9yeShyZXZpZXdPYmplY3QpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXZpZXdMaXN0IiwiLypcclxuICAgIEF1dGhvcjogTGluZHNleSBNYWRkb3hcclxuICAgIE5hbWU6IHJldmlldy5qc1xyXG4gICAgUHVycG9zZTogYWNjZXB0IHJldmlldyBvYmplY3RzIGFuZCByZW5kZXIgSFRNTCBlbGVtZW50IHRvIERPTVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gcmV2aWV3RmFjdG9yeShyZXZpZXdPYmplY3QpIHtcclxuICByZXZpZXdPYmplY3QuZm9yRWFjaChyZXZpZXcgPT4ge1xyXG4gICAgYnVpbGRyZXZpZXdIVE1MKHJldmlldyk7XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRyZXZpZXdIVE1MKHJldmlldykge1xyXG4gIGNvbnN0IHJldmlld091dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmV2aWV3LW91dHB1dFwiKTtcclxuICBjb25zdCByZXZpZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgY29uc3QgcmV2aWV3RGV0YWlscyA9IGBcclxuICA8aDM+JHtyZXZpZXcudGl0bGV9PC9oMz5cclxuICA8cD4ke3Jldmlldy5ib2R5fTwvcD5cclxuICBgXHJcbiAgcmV2aWV3Q2FyZC5pbm5lckhUTUwgPSByZXZpZXdEZXRhaWxzO1xyXG4gIHJldmlld091dHB1dC5hcHBlbmRDaGlsZChyZXZpZXdDYXJkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3RmFjdG9yeSJdfQ==
