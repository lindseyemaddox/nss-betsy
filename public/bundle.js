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
    console.log(productObject);
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
  const output = document.getElementById("output");
  const productCard = document.createElement("div"); // const productDetails = `
  //   <h2>${product.title}</h2>
  //   <p>${product.description}</p>
  // `
  // productCard.innerHTML = productDetails;

  let productTitle = document.createElement("h2");
  let productDescription = document.createElement("p");
  let productPrice = document.createElement("p");
  productTitle.textContent = product.title;
  productDescription.textContent = "Description: " + product.description;
  productPrice.textContent = "Cost: $" + product.price;
  productCard.appendChild(productTitle);
  productCard.appendChild(productDescription);
  productCard.appendChild(productPrice);
  output.appendChild(productCard);
}

var _default = productFactory;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC1kYXRhLmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0LWxpc3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBOztBQUNBOzs7O0FBR0E7QUFDQTs7Ozs7Ozs7OztlQ0xlLE1BQU0sT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEM7Ozs7Ozs7Ozs7OztBQ0RyQjs7Ozs7QUFNQSxNQUFNLE9BQU8sR0FBRyx1QkFBaEI7QUFFQSxNQUFNLFVBQVUsR0FBRztBQUNqQixFQUFBLFdBQVcsRUFBRSxZQUFZO0FBQ3ZCLFdBQU8sS0FBSyxDQUFFLEdBQUUsT0FBUSxXQUFaLENBQUwsQ0FBNkIsSUFBN0IsQ0FBa0MsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBQTlDLENBQVA7QUFDRDtBQUhnQixDQUFuQjtBQUtBLFVBQVUsQ0FBQyxXQUFYO2VBRWUsVTs7Ozs7Ozs7Ozs7QUNUZjs7QUFDQTs7OztBQVBBOzs7OztBQVNBLFNBQVMsV0FBVCxHQUF1QjtBQUNyQix1QkFBVyxXQUFYLEdBQXlCLElBQXpCLENBQThCLGFBQWEsSUFBSTtBQUM3QyxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksYUFBWjtBQUNBLDBCQUFlLGFBQWY7QUFDRCxHQUhEO0FBSUQ7O2VBRWMsVzs7Ozs7Ozs7Ozs7QUNoQmY7Ozs7O0FBTUEsU0FBUyxjQUFULENBQXdCLGFBQXhCLEVBQXVDO0FBQ3JDLEVBQUEsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsT0FBTyxJQUFJO0FBQy9CLElBQUEsZ0JBQWdCLENBQUMsT0FBRCxDQUFoQjtBQUNELEdBRkQ7QUFJRDs7QUFFRCxTQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DO0FBQ2pDLFFBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxRQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFwQixDQUZpQyxDQUlqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQW5CO0FBQ0EsTUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUF6QjtBQUNBLE1BQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQW5CO0FBRUEsRUFBQSxZQUFZLENBQUMsV0FBYixHQUEyQixPQUFPLENBQUMsS0FBbkM7QUFDQSxFQUFBLGtCQUFrQixDQUFDLFdBQW5CLEdBQWlDLGtCQUFrQixPQUFPLENBQUMsV0FBM0Q7QUFDQSxFQUFBLFlBQVksQ0FBQyxXQUFiLEdBQTJCLFlBQVksT0FBTyxDQUFDLEtBQS9DO0FBRUEsRUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixZQUF4QjtBQUNBLEVBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0Isa0JBQXhCO0FBQ0EsRUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixZQUF4QjtBQUVBLEVBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsV0FBbkI7QUFDRDs7ZUFFYyxjIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdlwiO1xuaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3QtbGlzdFwiO1xuXG5cbk5hdigpO1xucHJvZHVjdExpc3QoKTtcblxuXG4iLCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IGNvbnNvbGUubG9nKFwibmF2XCIpIiwiLypcbiAgICBBdXRob3I6IExpbmRzZXkgTWFkZG94XG4gICAgTmFtZTogcmV2aWV3LWRhdGEuanNcbiAgICBQdXJwb3NlOiBmZXRjaCByZXZpZXdzIGZyb20gZGF0YWJhc2VcbiovXG5cbmNvbnN0IGJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OFwiO1xuXG5jb25zdCBwcm9kdWN0QVBJID0ge1xuICBnZXRQcm9kdWN0czogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmZXRjaChgJHtiYXNlVVJMfS9wcm9kdWN0c2ApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxucHJvZHVjdEFQSS5nZXRQcm9kdWN0cygpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0QVBJOyIsIi8qXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxuICAgIE5hbWU6IHByb2R1Y3QuanNcbiAgICBQdXJwb3NlOiBhY2NlcHQgcHJvZHVjdCBvYmplY3QgYW5kIHNlbmQgdGhyb3VnaCB0aGUgZmFjdG9yeVxuKi9cblxuaW1wb3J0IHByb2R1Y3RGYWN0b3J5IGZyb20gXCIuL3Byb2R1Y3RcIlxuaW1wb3J0IHByb2R1Y3RBUEkgZnJvbSBcIi4vcHJvZHVjdC1kYXRhXCJcblxuZnVuY3Rpb24gcHJvZHVjdExpc3QoKSB7XG4gIHByb2R1Y3RBUEkuZ2V0UHJvZHVjdHMoKS50aGVuKHByb2R1Y3RPYmplY3QgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RPYmplY3QpO1xuICAgIHByb2R1Y3RGYWN0b3J5KHByb2R1Y3RPYmplY3QpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdExpc3QiLCIvKlxuICAgIEF1dGhvcjogTGluZHNleSBNYWRkb3hcbiAgICBOYW1lOiBwcm9kdWN0LmpzXG4gICAgUHVycG9zZTogcmVuZGVyIEhUTUwgZWxlbWVudCB0byBET01cbiovXG5cbmZ1bmN0aW9uIHByb2R1Y3RGYWN0b3J5KHByb2R1Y3RPYmplY3QpIHtcbiAgcHJvZHVjdE9iamVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgIGJ1aWxkUHJvZHVjdEhUTUwocHJvZHVjdCk7XG4gIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGJ1aWxkUHJvZHVjdEhUTUwocHJvZHVjdCkge1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKTtcbiAgY29uc3QgcHJvZHVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIGNvbnN0IHByb2R1Y3REZXRhaWxzID0gYFxuICAvLyAgIDxoMj4ke3Byb2R1Y3QudGl0bGV9PC9oMj5cbiAgLy8gICA8cD4ke3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAvLyBgXG4gIC8vIHByb2R1Y3RDYXJkLmlubmVySFRNTCA9IHByb2R1Y3REZXRhaWxzO1xuXG4gIGxldCBwcm9kdWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGxldCBwcm9kdWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIHByb2R1Y3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2R1Y3QudGl0bGU7XG4gIHByb2R1Y3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgcHJvZHVjdC5kZXNjcmlwdGlvbjtcbiAgcHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gXCJDb3N0OiAkXCIgKyBwcm9kdWN0LnByaWNlO1xuXG4gIHByb2R1Y3RDYXJkLmFwcGVuZENoaWxkKHByb2R1Y3RUaXRsZSk7XG4gIHByb2R1Y3RDYXJkLmFwcGVuZENoaWxkKHByb2R1Y3REZXNjcmlwdGlvbik7XG4gIHByb2R1Y3RDYXJkLmFwcGVuZENoaWxkKHByb2R1Y3RQcmljZSk7XG5cbiAgb3V0cHV0LmFwcGVuZENoaWxkKHByb2R1Y3RDYXJkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdEZhY3RvcnkiXX0=
