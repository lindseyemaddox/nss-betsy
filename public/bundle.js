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

var _default = () => console.log("nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC1kYXRhLmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0LWxpc3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiLCIuLi9zY3JpcHRzL3Jldmlldy1kYXRhLmpzIiwiLi4vc2NyaXB0cy9yZXZpZXctbGlzdC5qcyIsIi4uL3NjcmlwdHMvcmV2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7QUFDQTs7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztlQ1BlLE1BQU0sT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEM7Ozs7Ozs7Ozs7OztBQ0RyQjs7Ozs7QUFNQSxNQUFNLE9BQU8sR0FBRyx1QkFBaEI7QUFFQSxNQUFNLFVBQVUsR0FBRztBQUNqQixFQUFBLFdBQVcsRUFBRSxZQUFZO0FBQ3ZCLFdBQU8sS0FBSyxDQUFFLEdBQUUsT0FBUSxXQUFaLENBQUwsQ0FDSixJQURJLENBQ0MsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRGIsQ0FBUDtBQUVEO0FBSmdCLENBQW5CO0FBT0EsVUFBVSxDQUFDLFdBQVg7ZUFFZSxVOzs7Ozs7Ozs7OztBQ1hmOztBQUNBOzs7O0FBUEE7Ozs7O0FBU0EsU0FBUyxXQUFULEdBQXVCO0FBQ3JCLHVCQUFXLFdBQVgsR0FBeUIsSUFBekIsQ0FBOEIsYUFBYSxJQUFJO0FBQzdDLDBCQUFlLGFBQWY7QUFDRCxHQUZEO0FBR0Q7O2VBRWMsVzs7Ozs7Ozs7Ozs7QUNmZjs7Ozs7QUFNQSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUM7QUFDckMsRUFBQSxhQUFhLENBQUMsT0FBZCxDQUFzQixPQUFPLElBQUk7QUFDL0IsSUFBQSxnQkFBZ0IsQ0FBQyxPQUFELENBQWhCO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUM7QUFDakMsUUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXRCO0FBQ0EsUUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFFQSxRQUFNLGNBQWMsR0FBSTtVQUNoQixPQUFPLENBQUMsS0FBTTtTQUNmLGtCQUFrQixPQUFPLENBQUMsV0FBWTtTQUN0QyxZQUFZLE9BQU8sQ0FBQyxLQUFNO0dBSGpDO0FBS0EsRUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QixjQUF4QixDQVRpQyxDQVdqQztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixXQUExQjtBQUNEOztlQUVjLGM7Ozs7Ozs7Ozs7O0FDdENmOzs7OztBQU1BLE1BQU0sT0FBTyxHQUFHLHVCQUFoQjtBQUVBLE1BQU0sU0FBUyxHQUFHO0FBQ2hCLEVBQUEsVUFBVSxFQUFFLFlBQVk7QUFDdEIsV0FBTyxLQUFLLENBQUUsR0FBRSxPQUFRLFVBQVosQ0FBTCxDQUNKLElBREksQ0FDQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEYixDQUFQO0FBRUQ7QUFKZSxDQUFsQjtBQU9BLFNBQVMsQ0FBQyxVQUFWO2VBR2UsUzs7Ozs7Ozs7Ozs7QUNaZjs7QUFDQTs7OztBQVBBOzs7OztBQVNBLFNBQVMsVUFBVCxHQUFzQjtBQUNwQixzQkFBVSxVQUFWLEdBQXVCLElBQXZCLENBQTRCLFlBQVksSUFBSTtBQUN4Qyx5QkFBYyxZQUFkO0FBQ0gsR0FGRDtBQUdEOztlQUVjLFU7Ozs7Ozs7Ozs7O0FDZmY7Ozs7O0FBTUEsU0FBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDO0FBQ25DLEVBQUEsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsTUFBTSxJQUFJO0FBQzdCLElBQUEsZUFBZSxDQUFDLE1BQUQsQ0FBZjtBQUNELEdBRkQ7QUFHRDs7QUFFRCxTQUFTLGVBQVQsQ0FBeUIsTUFBekIsRUFBaUM7QUFDL0IsUUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBckI7QUFDQSxRQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUVBLFFBQU0sYUFBYSxHQUFJO1FBQ2pCLE1BQU0sQ0FBQyxLQUFNO09BQ2QsTUFBTSxDQUFDLElBQUs7R0FGakI7QUFJQSxFQUFBLFVBQVUsQ0FBQyxTQUFYLEdBQXVCLGFBQXZCO0FBQ0EsRUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixVQUF6QjtBQUNEOztlQUVjLGEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2XCI7XG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdC1saXN0XCI7XG5pbXBvcnQgcmV2aWV3TGlzdCBmcm9tIFwiLi9yZXZpZXctbGlzdFwiO1xuXG5cbk5hdigpO1xucHJvZHVjdExpc3QoKTtcbnJldmlld0xpc3QoKTtcblxuXG4iLCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IGNvbnNvbGUubG9nKFwibmF2XCIpIiwiLypcbiAgICBBdXRob3I6IExpbmRzZXkgTWFkZG94XG4gICAgTmFtZTogcmV2aWV3LWRhdGEuanNcbiAgICBQdXJwb3NlOiBmZXRjaCBwcm9kdWN0cyBmcm9tIGRhdGFiYXNlXG4qL1xuXG5jb25zdCBiYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODhcIjtcblxuY29uc3QgcHJvZHVjdEFQSSA9IHtcbiAgZ2V0UHJvZHVjdHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVSTH0vcHJvZHVjdHNgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxuXG5wcm9kdWN0QVBJLmdldFByb2R1Y3RzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RBUEk7IiwiLypcbiAgICBBdXRob3I6IExpbmRzZXkgTWFkZG94XG4gICAgTmFtZTogcHJvZHVjdC5qc1xuICAgIFB1cnBvc2U6IGFjY2VwdCBwcm9kdWN0IG9iamVjdCBhbmQgc2VuZCB0aHJvdWdoIHRoZSBmYWN0b3J5XG4qL1xuXG5pbXBvcnQgcHJvZHVjdEZhY3RvcnkgZnJvbSBcIi4vcHJvZHVjdFwiXG5pbXBvcnQgcHJvZHVjdEFQSSBmcm9tIFwiLi9wcm9kdWN0LWRhdGFcIlxuXG5mdW5jdGlvbiBwcm9kdWN0TGlzdCgpIHtcbiAgcHJvZHVjdEFQSS5nZXRQcm9kdWN0cygpLnRoZW4ocHJvZHVjdE9iamVjdCA9PiB7XG4gICAgcHJvZHVjdEZhY3RvcnkocHJvZHVjdE9iamVjdCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TGlzdCIsIi8qXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxuICAgIE5hbWU6IHByb2R1Y3QuanNcbiAgICBQdXJwb3NlOiByZW5kZXIgSFRNTCBlbGVtZW50IHRvIERPTVxuKi9cblxuZnVuY3Rpb24gcHJvZHVjdEZhY3RvcnkocHJvZHVjdE9iamVjdCkge1xuICBwcm9kdWN0T2JqZWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgYnVpbGRQcm9kdWN0SFRNTChwcm9kdWN0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUHJvZHVjdEhUTUwocHJvZHVjdCkge1xuICBjb25zdCBwcm9kdWN0T3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LW91dHB1dFwiKTtcbiAgY29uc3QgcHJvZHVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHByb2R1Y3REZXRhaWxzID0gYFxuICAgIDxoMj4ke3Byb2R1Y3QudGl0bGV9PC9oMj5cbiAgICA8cD4ke1wiRGVzY3JpcHRpb246IFwiICsgcHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgPHA+JHtcIkNvc3Q6ICRcIiArIHByb2R1Y3QucHJpY2V9PC9wPlxuICBgXG4gIHByb2R1Y3RDYXJkLmlubmVySFRNTCA9IHByb2R1Y3REZXRhaWxzO1xuXG4gIC8vIGxldCBwcm9kdWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIC8vIGxldCBwcm9kdWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgLy8gbGV0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIC8vIHByb2R1Y3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2R1Y3QudGl0bGU7XG4gIC8vIHByb2R1Y3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgcHJvZHVjdC5kZXNjcmlwdGlvbjtcbiAgLy8gcHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gXCJDb3N0OiAkXCIgKyBwcm9kdWN0LnByaWNlO1xuXG4gIC8vIHByb2R1Y3RDYXJkLmFwcGVuZENoaWxkKHByb2R1Y3RUaXRsZSk7XG4gIC8vIHByb2R1Y3RDYXJkLmFwcGVuZENoaWxkKHByb2R1Y3REZXNjcmlwdGlvbik7XG4gIC8vIHByb2R1Y3RDYXJkLmFwcGVuZENoaWxkKHByb2R1Y3RQcmljZSk7XG5cbiAgcHJvZHVjdE91dHB1dC5hcHBlbmRDaGlsZChwcm9kdWN0Q2FyZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RGYWN0b3J5IiwiLypcbiAgICBBdXRob3I6IExpbmRzZXkgTWFkZG94XG4gICAgTmFtZTogcmV2aWV3LWRhdGEuanNcbiAgICBQdXJwb3NlOiBmZXRjaCByZXZpZXdzIGZyb20gZGF0YWJhc2VcbiovXG5cbmNvbnN0IGJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OFwiO1xuXG5jb25zdCByZXZpZXdBUEkgPSB7XG4gIGdldFJldmlld3M6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVSTH0vcmV2aWV3c2ApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH1cbn1cblxucmV2aWV3QVBJLmdldFJldmlld3MoKTtcblxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdBUEk7IiwiLypcbiAgICBBdXRob3I6IExpbmRzZXkgTWFkZG94XG4gICAgTmFtZTogcmV2aWV3LWxpc3QuanNcbiAgICBQdXJwb3NlOiBmZXRjaCByZXZpZXdzIGZyb20gQVBJXG4qL1xuXG5pbXBvcnQgcmV2aWV3RmFjdG9yeSBmcm9tIFwiLi9yZXZpZXdcIlxuaW1wb3J0IHJldmlld0FQSSBmcm9tIFwiLi9yZXZpZXctZGF0YVwiXG5cbmZ1bmN0aW9uIHJldmlld0xpc3QoKSB7XG4gIHJldmlld0FQSS5nZXRSZXZpZXdzKCkudGhlbihyZXZpZXdPYmplY3QgPT4ge1xuICAgICAgcmV2aWV3RmFjdG9yeShyZXZpZXdPYmplY3QpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3TGlzdCIsIi8qXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxuICAgIE5hbWU6IHJldmlldy5qc1xuICAgIFB1cnBvc2U6IGFjY2VwdCByZXZpZXcgb2JqZWN0cyBhbmQgcmVuZGVyIEhUTUwgZWxlbWVudCB0byBET01cbiovXG5cbmZ1bmN0aW9uIHJldmlld0ZhY3RvcnkocmV2aWV3T2JqZWN0KSB7XG4gIHJldmlld09iamVjdC5mb3JFYWNoKHJldmlldyA9PiB7XG4gICAgYnVpbGRyZXZpZXdIVE1MKHJldmlldyk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGJ1aWxkcmV2aWV3SFRNTChyZXZpZXcpIHtcbiAgY29uc3QgcmV2aWV3T3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXZpZXctb3V0cHV0XCIpO1xuICBjb25zdCByZXZpZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCByZXZpZXdEZXRhaWxzID0gYFxuICA8aDM+JHtyZXZpZXcudGl0bGV9PC9oMz5cbiAgPHA+JHtyZXZpZXcuYm9keX08L3A+XG4gIGBcbiAgcmV2aWV3Q2FyZC5pbm5lckhUTUwgPSByZXZpZXdEZXRhaWxzO1xuICByZXZpZXdPdXRwdXQuYXBwZW5kQ2hpbGQocmV2aWV3Q2FyZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldmlld0ZhY3RvcnkiXX0=
