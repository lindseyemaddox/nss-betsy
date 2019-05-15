(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nav.default)();
(0, _product.default)();

},{"./nav":2,"./product":5}],2:[function(require,module,exports){
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
  getAllProducts: function () {
    return fetch(`${baseURL}/products`).then(response => response.json());
  },
  getOneProduct: function (productId) {
    return fetch(`${baseURL}/products/${productId}`).then(response => response.json());
  }
};
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
    Purpose: accept product objects and render HTML element to DOM
*/
function productList() {
  document.getElementById("output").innerHTML = "";

  _productData.default.getProducts().then(parsed => {
    parsed.forEach(product => {
      (0, _product.default)(product);
    });
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

var _productList = _interopRequireDefault(require("./product-list"));

var _reviewList = _interopRequireDefault(require("./review-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Lindsey Maddox
    Name: product.js
    Purpose: accept product objects and render HTML element to DOM
*/
function productFactory(productObject) {
  const output = document.getElementById("output");
  const productCard = document.createElement("div");
  const productDetails = `
    <h2>${productObject}</h2>
    <p>${productObject}</p>
  `;
  productCard.innerHTML = productDetails;
  output.appendChild(productCard);
  output.appendChild(_productList.default);
  output.appendChild(_reviewList.default);
}

var _default = productFactory;
exports.default = _default;

},{"./product-list":4,"./review-list":7}],6:[function(require,module,exports){
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
  getReviews: function (productId) {
    return fetch(`${baseURL}/reviews/?productId=${productId}`).then(results => results.json());
  }
};
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
function reviewList(productId) {
  document.getElementById("output").innerHTML = "";

  _reviewData.default.getReviews(productId).then(review => {
    review.forEach(title => {
      (0, _review.default)(title);
    });
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
  const output = document.getElementById("output");
  const reviewCard = document.createElement("div");
  const reviewDetails = `
    <h3>${reviewObject}</h3>
    <p>${reviewObject}</p>
  `;
  reviewCard.innerHTML = reviewDetails;
  output.appendChild(reviewCard);
}

var _default = reviewFactory;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC1kYXRhLmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0LWxpc3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiLCIuLi9zY3JpcHRzL3Jldmlldy1kYXRhLmpzIiwiLi4vc2NyaXB0cy9yZXZpZXctbGlzdC5qcyIsIi4uL3NjcmlwdHMvcmV2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7ZUNMZSxNQUFNLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWixDOzs7Ozs7Ozs7Ozs7QUNEckI7Ozs7O0FBTUEsTUFBTSxPQUFPLEdBQUcsdUJBQWhCO0FBRUEsTUFBTSxVQUFVLEdBQUc7QUFDakIsRUFBQSxjQUFjLEVBQUUsWUFBWTtBQUMxQixXQUFPLEtBQUssQ0FBRSxHQUFFLE9BQVEsV0FBWixDQUFMLENBQ0osSUFESSxDQUNDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURiLENBQVA7QUFFRCxHQUpnQjtBQUtqQixFQUFBLGFBQWEsRUFBRSxVQUFVLFNBQVYsRUFBcUI7QUFDbEMsV0FBTyxLQUFLLENBQUUsR0FBRSxPQUFRLGFBQVksU0FBVSxFQUFsQyxDQUFMLENBQ0osSUFESSxDQUNDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURiLENBQVA7QUFHRDtBQVRnQixDQUFuQjtlQVllLFU7Ozs7Ozs7Ozs7O0FDZGY7O0FBQ0E7Ozs7QUFQQTs7Ozs7QUFTQSxTQUFTLFdBQVQsR0FBdUI7QUFDckIsRUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUF4QixFQUFrQyxTQUFsQyxHQUE4QyxFQUE5Qzs7QUFDQSx1QkFBVyxXQUFYLEdBQXlCLElBQXpCLENBQThCLE1BQU0sSUFBSTtBQUN0QyxJQUFBLE1BQU0sQ0FBQyxPQUFQLENBQWUsT0FBTyxJQUFJO0FBQ3hCLDRCQUFlLE9BQWY7QUFDRCxLQUZEO0FBR0QsR0FKRDtBQUtEOztlQUVjLFc7Ozs7Ozs7Ozs7O0FDWmY7O0FBQ0E7Ozs7QUFQQTs7Ozs7QUFTQSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUM7QUFDckMsUUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLFFBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQXBCO0FBQ0EsUUFBTSxjQUFjLEdBQUk7VUFDaEIsYUFBYztTQUNmLGFBQWM7R0FGckI7QUFJQSxFQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXdCLGNBQXhCO0FBQ0EsRUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixXQUFuQjtBQUNBLEVBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsb0JBQW5CO0FBQ0EsRUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixtQkFBbkI7QUFDRDs7ZUFHYyxjOzs7Ozs7Ozs7OztBQ3ZCZjs7Ozs7QUFNQSxNQUFNLE9BQU8sR0FBRyx1QkFBaEI7QUFFQSxNQUFNLFNBQVMsR0FBRztBQUNoQixFQUFBLFVBQVUsRUFBRSxVQUFVLFNBQVYsRUFBcUI7QUFDL0IsV0FBTyxLQUFLLENBQUUsR0FBRSxPQUFRLHVCQUFzQixTQUFVLEVBQTVDLENBQUwsQ0FDSixJQURJLENBQ0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFSLEVBRFosQ0FBUDtBQUVEO0FBSmUsQ0FBbEI7ZUFPZSxTOzs7Ozs7Ozs7OztBQ1RmOztBQUNBOzs7O0FBUEE7Ozs7O0FBU0EsU0FBUyxVQUFULENBQW9CLFNBQXBCLEVBQStCO0FBQzdCLEVBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBbEMsR0FBOEMsRUFBOUM7O0FBQ0Esc0JBQVUsVUFBVixDQUFxQixTQUFyQixFQUNHLElBREgsQ0FDUSxNQUFNLElBQUk7QUFDZCxJQUFBLE1BQU0sQ0FBQyxPQUFQLENBQWUsS0FBSyxJQUFJO0FBQ3RCLDJCQUFjLEtBQWQ7QUFDRCxLQUZEO0FBR0QsR0FMSDtBQU1EOztlQUVjLFU7Ozs7Ozs7Ozs7O0FDbkJmOzs7OztBQU1BLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQztBQUNuQyxRQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsUUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFDQSxRQUFNLGFBQWEsR0FBSTtVQUNmLFlBQWE7U0FDZCxZQUFhO0dBRnBCO0FBSUEsRUFBQSxVQUFVLENBQUMsU0FBWCxHQUF1QixhQUF2QjtBQUNBLEVBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsVUFBbkI7QUFDRDs7ZUFFYyxhIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2XCJcclxuaW1wb3J0IHByb2R1Y3RGYWN0b3J5IGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuXHJcblxyXG5OYXYoKVxyXG5wcm9kdWN0RmFjdG9yeSgpXHJcblxyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBjb25zb2xlLmxvZyhcIm5hdlwiKSIsIi8qXHJcbiAgICBBdXRob3I6IExpbmRzZXkgTWFkZG94XHJcbiAgICBOYW1lOiByZXZpZXctZGF0YS5qc1xyXG4gICAgUHVycG9zZTogZmV0Y2ggcmV2aWV3cyBmcm9tIGRhdGFiYXNlXHJcbiovXHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODhcIjtcclxuXHJcbmNvbnN0IHByb2R1Y3RBUEkgPSB7XHJcbiAgZ2V0QWxsUHJvZHVjdHM6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHtiYXNlVVJMfS9wcm9kdWN0c2ApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgfSxcclxuICBnZXRPbmVQcm9kdWN0OiBmdW5jdGlvbiAocHJvZHVjdElkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVSTH0vcHJvZHVjdHMvJHtwcm9kdWN0SWR9YClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdEFQSSIsIi8qXHJcbiAgICBBdXRob3I6IExpbmRzZXkgTWFkZG94XHJcbiAgICBOYW1lOiBwcm9kdWN0LmpzXHJcbiAgICBQdXJwb3NlOiBhY2NlcHQgcHJvZHVjdCBvYmplY3RzIGFuZCByZW5kZXIgSFRNTCBlbGVtZW50IHRvIERPTVxyXG4qL1xyXG5cclxuaW1wb3J0IHByb2R1Y3RGYWN0b3J5IGZyb20gXCIuL3Byb2R1Y3RcIlxyXG5pbXBvcnQgcHJvZHVjdEFQSSBmcm9tIFwiLi9wcm9kdWN0LWRhdGFcIlxyXG5cclxuZnVuY3Rpb24gcHJvZHVjdExpc3QoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICBwcm9kdWN0QVBJLmdldFByb2R1Y3RzKCkudGhlbihwYXJzZWQgPT4ge1xyXG4gICAgcGFyc2VkLmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgIHByb2R1Y3RGYWN0b3J5KHByb2R1Y3QpXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdExpc3RcclxuIiwiLypcclxuICAgIEF1dGhvcjogTGluZHNleSBNYWRkb3hcclxuICAgIE5hbWU6IHByb2R1Y3QuanNcclxuICAgIFB1cnBvc2U6IGFjY2VwdCBwcm9kdWN0IG9iamVjdHMgYW5kIHJlbmRlciBIVE1MIGVsZW1lbnQgdG8gRE9NXHJcbiovXHJcblxyXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdC1saXN0XCJcclxuaW1wb3J0IHJldmlld0xpc3QgZnJvbSBcIi4vcmV2aWV3LWxpc3RcIlxyXG5cclxuZnVuY3Rpb24gcHJvZHVjdEZhY3RvcnkocHJvZHVjdE9iamVjdCkge1xyXG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXHJcbiAgY29uc3QgcHJvZHVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgY29uc3QgcHJvZHVjdERldGFpbHMgPSBgXHJcbiAgICA8aDI+JHtwcm9kdWN0T2JqZWN0fTwvaDI+XHJcbiAgICA8cD4ke3Byb2R1Y3RPYmplY3R9PC9wPlxyXG4gIGBcclxuICBwcm9kdWN0Q2FyZC5pbm5lckhUTUwgPSBwcm9kdWN0RGV0YWlsc1xyXG4gIG91dHB1dC5hcHBlbmRDaGlsZChwcm9kdWN0Q2FyZClcclxuICBvdXRwdXQuYXBwZW5kQ2hpbGQocHJvZHVjdExpc3QpXHJcbiAgb3V0cHV0LmFwcGVuZENoaWxkKHJldmlld0xpc3QpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0RmFjdG9yeVxyXG4iLCIvKlxyXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxyXG4gICAgTmFtZTogcmV2aWV3LWRhdGEuanNcclxuICAgIFB1cnBvc2U6IGZldGNoIHJldmlld3MgZnJvbSBkYXRhYmFzZVxyXG4qL1xyXG5cclxuY29uc3QgYmFzZVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4XCI7XHJcblxyXG5jb25zdCByZXZpZXdBUEkgPSB7XHJcbiAgZ2V0UmV2aWV3czogZnVuY3Rpb24gKHByb2R1Y3RJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVUkx9L3Jldmlld3MvP3Byb2R1Y3RJZD0ke3Byb2R1Y3RJZH1gKVxyXG4gICAgICAudGhlbihyZXN1bHRzID0+IHJlc3VsdHMuanNvbigpKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3QVBJIiwiLypcclxuICAgIEF1dGhvcjogTGluZHNleSBNYWRkb3hcclxuICAgIE5hbWU6IHJldmlldy1saXN0LmpzXHJcbiAgICBQdXJwb3NlOiBmZXRjaCByZXZpZXdzIGZyb20gQVBJXHJcbiovXHJcblxyXG5pbXBvcnQgcmV2aWV3RmFjdG9yeSBmcm9tIFwiLi9yZXZpZXdcIlxyXG5pbXBvcnQgcmV2aWV3QVBJIGZyb20gXCIuL3Jldmlldy1kYXRhXCJcclxuXHJcbmZ1bmN0aW9uIHJldmlld0xpc3QocHJvZHVjdElkKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICByZXZpZXdBUEkuZ2V0UmV2aWV3cyhwcm9kdWN0SWQpXHJcbiAgICAudGhlbihyZXZpZXcgPT4ge1xyXG4gICAgICByZXZpZXcuZm9yRWFjaCh0aXRsZSA9PiB7XHJcbiAgICAgICAgcmV2aWV3RmFjdG9yeSh0aXRsZSlcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3TGlzdCIsIi8qXHJcbiAgICBBdXRob3I6IExpbmRzZXkgTWFkZG94XHJcbiAgICBOYW1lOiByZXZpZXcuanNcclxuICAgIFB1cnBvc2U6IGFjY2VwdCByZXZpZXcgb2JqZWN0cyBhbmQgcmVuZGVyIEhUTUwgZWxlbWVudCB0byBET01cclxuKi9cclxuXHJcbmZ1bmN0aW9uIHJldmlld0ZhY3RvcnkocmV2aWV3T2JqZWN0KSB7XHJcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIilcclxuICBjb25zdCByZXZpZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIGNvbnN0IHJldmlld0RldGFpbHMgPSBgXHJcbiAgICA8aDM+JHtyZXZpZXdPYmplY3R9PC9oMz5cclxuICAgIDxwPiR7cmV2aWV3T2JqZWN0fTwvcD5cclxuICBgXHJcbiAgcmV2aWV3Q2FyZC5pbm5lckhUTUwgPSByZXZpZXdEZXRhaWxzXHJcbiAgb3V0cHV0LmFwcGVuZENoaWxkKHJldmlld0NhcmQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJldmlld0ZhY3RvcnkiXX0=
