(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./product-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nav.default)();
(0, _productList.default)();

},{"./nav":2,"./product-list":4}],2:[function(require,module,exports){
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
    Purpose: fetch reviews from database
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
  const output = document.getElementById("product-output");
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

  output.appendChild(productCard);
}

var _default = productFactory;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC1kYXRhLmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0LWxpc3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBOztBQUNBOzs7O0FBR0E7QUFDQTs7Ozs7Ozs7OztlQ0xlLE1BQU0sT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEM7Ozs7Ozs7Ozs7OztBQ0RyQjs7Ozs7QUFNQSxNQUFNLE9BQU8sR0FBRyx1QkFBaEI7QUFFQSxNQUFNLFVBQVUsR0FBRztBQUNqQixFQUFBLFdBQVcsRUFBRSxZQUFZO0FBQ3ZCLFdBQU8sS0FBSyxDQUFFLEdBQUUsT0FBUSxXQUFaLENBQUwsQ0FBNkIsSUFBN0IsQ0FBa0MsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBQTlDLENBQVA7QUFDRDtBQUhnQixDQUFuQjtBQUtBLFVBQVUsQ0FBQyxXQUFYO2VBRWUsVTs7Ozs7Ozs7Ozs7QUNUZjs7QUFDQTs7OztBQVBBOzs7OztBQVNBLFNBQVMsV0FBVCxHQUF1QjtBQUNyQix1QkFBVyxXQUFYLEdBQXlCLElBQXpCLENBQThCLGFBQWEsSUFBSTtBQUM3QywwQkFBZSxhQUFmO0FBQ0QsR0FGRDtBQUdEOztlQUVjLFc7Ozs7Ozs7Ozs7O0FDZmY7Ozs7O0FBTUEsU0FBUyxjQUFULENBQXdCLGFBQXhCLEVBQXVDO0FBQ3JDLEVBQUEsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsT0FBTyxJQUFJO0FBQy9CLElBQUEsZ0JBQWdCLENBQUMsT0FBRCxDQUFoQjtBQUNELEdBRkQ7QUFJRDs7QUFFRCxTQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DO0FBQ2pDLFFBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLGdCQUF4QixDQUFmO0FBQ0EsUUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFFQSxRQUFNLGNBQWMsR0FBSTtVQUNoQixPQUFPLENBQUMsS0FBTTtTQUNmLGtCQUFrQixPQUFPLENBQUMsV0FBWTtTQUN0QyxZQUFZLE9BQU8sQ0FBQyxLQUFNO0dBSGpDO0FBS0EsRUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QixjQUF4QixDQVRpQyxDQVdqQztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixXQUFuQjtBQUNEOztlQUVjLGMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2XCI7XG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdC1saXN0XCI7XG5cblxuTmF2KCk7XG5wcm9kdWN0TGlzdCgpO1xuXG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gY29uc29sZS5sb2coXCJuYXZcIikiLCIvKlxuICAgIEF1dGhvcjogTGluZHNleSBNYWRkb3hcbiAgICBOYW1lOiByZXZpZXctZGF0YS5qc1xuICAgIFB1cnBvc2U6IGZldGNoIHJldmlld3MgZnJvbSBkYXRhYmFzZVxuKi9cblxuY29uc3QgYmFzZVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4XCI7XG5cbmNvbnN0IHByb2R1Y3RBUEkgPSB7XG4gIGdldFByb2R1Y3RzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVUkx9L3Byb2R1Y3RzYCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59XG5wcm9kdWN0QVBJLmdldFByb2R1Y3RzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RBUEk7IiwiLypcbiAgICBBdXRob3I6IExpbmRzZXkgTWFkZG94XG4gICAgTmFtZTogcHJvZHVjdC5qc1xuICAgIFB1cnBvc2U6IGFjY2VwdCBwcm9kdWN0IG9iamVjdCBhbmQgc2VuZCB0aHJvdWdoIHRoZSBmYWN0b3J5XG4qL1xuXG5pbXBvcnQgcHJvZHVjdEZhY3RvcnkgZnJvbSBcIi4vcHJvZHVjdFwiXG5pbXBvcnQgcHJvZHVjdEFQSSBmcm9tIFwiLi9wcm9kdWN0LWRhdGFcIlxuXG5mdW5jdGlvbiBwcm9kdWN0TGlzdCgpIHtcbiAgcHJvZHVjdEFQSS5nZXRQcm9kdWN0cygpLnRoZW4ocHJvZHVjdE9iamVjdCA9PiB7XG4gICAgcHJvZHVjdEZhY3RvcnkocHJvZHVjdE9iamVjdCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TGlzdCIsIi8qXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxuICAgIE5hbWU6IHByb2R1Y3QuanNcbiAgICBQdXJwb3NlOiByZW5kZXIgSFRNTCBlbGVtZW50IHRvIERPTVxuKi9cblxuZnVuY3Rpb24gcHJvZHVjdEZhY3RvcnkocHJvZHVjdE9iamVjdCkge1xuICBwcm9kdWN0T2JqZWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgYnVpbGRQcm9kdWN0SFRNTChwcm9kdWN0KTtcbiAgfSk7XG5cbn1cblxuZnVuY3Rpb24gYnVpbGRQcm9kdWN0SFRNTChwcm9kdWN0KSB7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1vdXRwdXRcIik7XG4gIGNvbnN0IHByb2R1Y3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBwcm9kdWN0RGV0YWlscyA9IGBcbiAgICA8aDI+JHtwcm9kdWN0LnRpdGxlfTwvaDI+XG4gICAgPHA+JHtcIkRlc2NyaXB0aW9uOiBcIiArIHByb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgIDxwPiR7XCJDb3N0OiAkXCIgKyBwcm9kdWN0LnByaWNlfTwvcD5cbiAgYFxuICBwcm9kdWN0Q2FyZC5pbm5lckhUTUwgPSBwcm9kdWN0RGV0YWlscztcblxuICAvLyBsZXQgcHJvZHVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAvLyBsZXQgcHJvZHVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIC8vIGxldCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBwcm9kdWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9kdWN0LnRpdGxlO1xuICAvLyBwcm9kdWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIHByb2R1Y3QuZGVzY3JpcHRpb247XG4gIC8vIHByb2R1Y3RQcmljZS50ZXh0Q29udGVudCA9IFwiQ29zdDogJFwiICsgcHJvZHVjdC5wcmljZTtcblxuICAvLyBwcm9kdWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9kdWN0VGl0bGUpO1xuICAvLyBwcm9kdWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9kdWN0RGVzY3JpcHRpb24pO1xuICAvLyBwcm9kdWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9kdWN0UHJpY2UpO1xuXG4gIG91dHB1dC5hcHBlbmRDaGlsZChwcm9kdWN0Q2FyZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RGYWN0b3J5Il19
