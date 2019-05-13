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

var _default = () => console.log("product-data");

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

(0, _product.default)();
(0, _productData.default)();

var _default = () => console.log("product-list");

exports.default = _default;

},{"./product":5,"./product-data":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewList = _interopRequireDefault(require("./review-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reviewList.default)();

var _default = () => console.log("product");

exports.default = _default;

},{"./review-list":7}],6:[function(require,module,exports){
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
const baseURL = "localhost:8088/products";
const API = {
  getReviews: function () {
    return fetch(baseURL).then(results => results.json());
  }
};
var _default = API;
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
    Purpose: get all reviews from API, then run them through review factory for output to DOM
*/
function reviewList() {
  document.getElementById("output").innerHTML = "";

  _reviewData.default.getReviews().then(parsed => {
    parsed.forEach(review => {
      (0, _review.default)(review);
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
    <h3>${reviewObject.reviews.title}</h3>
    <p>${reviewObject.reviews.body}</p>
  `;
  reviewCard.innerHTML = reviewDetails;
  output.appendChild(reviewCard);
}

var _default = reviewFactory;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC1kYXRhLmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0LWxpc3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiLCIuLi9zY3JpcHRzL3Jldmlldy1kYXRhLmpzIiwiLi4vc2NyaXB0cy9yZXZpZXctbGlzdC5qcyIsIi4uL3NjcmlwdHMvcmV2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7ZUNMZSxNQUFNLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWixDOzs7Ozs7Ozs7Ozs7ZUNBTixNQUFNLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWixDOzs7Ozs7Ozs7Ozs7QUNBckI7O0FBQ0E7Ozs7QUFFQTtBQUNBOztlQUVlLE1BQU0sT0FBTyxDQUFDLEdBQVIsQ0FBWSxjQUFaLEM7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUVBOztlQUVlLE1BQU0sT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEM7Ozs7Ozs7Ozs7OztBQ0xyQjs7Ozs7QUFNQSxNQUFNLE9BQU8sR0FBRyx5QkFBaEI7QUFFQSxNQUFNLEdBQUcsR0FBRztBQUNWLEVBQUEsVUFBVSxFQUFFLFlBQVk7QUFDdEIsV0FBTyxLQUFLLENBQUMsT0FBRCxDQUFMLENBQ0osSUFESSxDQUNDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBUixFQURaLENBQVA7QUFFRDtBQUpTLENBQVo7ZUFPZSxHOzs7Ozs7Ozs7OztBQ1RmOztBQUNBOzs7O0FBUEE7Ozs7O0FBU0EsU0FBUyxVQUFULEdBQXNCO0FBQ3BCLEVBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBbEMsR0FBOEMsRUFBOUM7O0FBQ0Esc0JBQUksVUFBSixHQUFpQixJQUFqQixDQUFzQixNQUFNLElBQUk7QUFDOUIsSUFBQSxNQUFNLENBQUMsT0FBUCxDQUFlLE1BQU0sSUFBSTtBQUN2QiwyQkFBYyxNQUFkO0FBQ0QsS0FGRDtBQUdELEdBSkQ7QUFLRDs7ZUFFYyxVOzs7Ozs7Ozs7OztBQ2xCZjs7Ozs7QUFNQSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUM7QUFDbkMsUUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLFFBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0EsUUFBTSxhQUFhLEdBQUk7VUFDZixZQUFZLENBQUMsT0FBYixDQUFxQixLQUFNO1NBQzVCLFlBQVksQ0FBQyxPQUFiLENBQXFCLElBQUs7R0FGakM7QUFJQSxFQUFBLFVBQVUsQ0FBQyxTQUFYLEdBQXVCLGFBQXZCO0FBQ0EsRUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixVQUFuQjtBQUNEOztlQUVjLGEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXZcIlxyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdC1saXN0XCJcclxuXHJcblxyXG5OYXYoKVxyXG5Qcm9kdWN0TGlzdCgpXHJcblxyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBjb25zb2xlLmxvZyhcIm5hdlwiKSIsIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBjb25zb2xlLmxvZyhcInByb2R1Y3QtZGF0YVwiKSIsIlxyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0XCJcclxuaW1wb3J0IFByb2R1Y3REYXRhIGZyb20gXCIuL3Byb2R1Y3QtZGF0YVwiXHJcblxyXG5Qcm9kdWN0KClcclxuUHJvZHVjdERhdGEoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gY29uc29sZS5sb2coXCJwcm9kdWN0LWxpc3RcIik7XHJcbiIsIlxyXG5pbXBvcnQgcmV2aWV3TGlzdCBmcm9tIFwiLi9yZXZpZXctbGlzdFwiXHJcblxyXG5yZXZpZXdMaXN0KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IGNvbnNvbGUubG9nKFwicHJvZHVjdFwiKTtcclxuIiwiLypcclxuICAgIEF1dGhvcjogTGluZHNleSBNYWRkb3hcclxuICAgIE5hbWU6IHJldmlldy1kYXRhLmpzXHJcbiAgICBQdXJwb3NlOiBmZXRjaCByZXZpZXdzIGZyb20gZGF0YWJhc2VcclxuKi9cclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcImxvY2FsaG9zdDo4MDg4L3Byb2R1Y3RzXCI7XHJcblxyXG5jb25zdCBBUEkgPSB7XHJcbiAgZ2V0UmV2aWV3czogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGJhc2VVUkwpXHJcbiAgICAgIC50aGVuKHJlc3VsdHMgPT4gcmVzdWx0cy5qc29uKCkpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBUEkiLCIvKlxyXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxyXG4gICAgTmFtZTogcmV2aWV3LWxpc3QuanNcclxuICAgIFB1cnBvc2U6IGdldCBhbGwgcmV2aWV3cyBmcm9tIEFQSSwgdGhlbiBydW4gdGhlbSB0aHJvdWdoIHJldmlldyBmYWN0b3J5IGZvciBvdXRwdXQgdG8gRE9NXHJcbiovXHJcblxyXG5pbXBvcnQgcmV2aWV3RmFjdG9yeSBmcm9tIFwiLi9yZXZpZXdcIlxyXG5pbXBvcnQgQVBJIGZyb20gXCIuL3Jldmlldy1kYXRhXCJcclxuXHJcbmZ1bmN0aW9uIHJldmlld0xpc3QoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICBBUEkuZ2V0UmV2aWV3cygpLnRoZW4ocGFyc2VkID0+IHtcclxuICAgIHBhcnNlZC5mb3JFYWNoKHJldmlldyA9PiB7XHJcbiAgICAgIHJldmlld0ZhY3RvcnkocmV2aWV3KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXZpZXdMaXN0IiwiLypcclxuICAgIEF1dGhvcjogTGluZHNleSBNYWRkb3hcclxuICAgIE5hbWU6IHJldmlldy5qc1xyXG4gICAgUHVycG9zZTogYWNjZXB0IHJldmlldyBvYmplY3RzIGFuZCByZW5kZXIgSFRNTCBlbGVtZW50IHRvIERPTVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gcmV2aWV3RmFjdG9yeShyZXZpZXdPYmplY3QpIHtcclxuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxyXG4gIGNvbnN0IHJldmlld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgY29uc3QgcmV2aWV3RGV0YWlscyA9IGBcclxuICAgIDxoMz4ke3Jldmlld09iamVjdC5yZXZpZXdzLnRpdGxlfTwvaDM+XHJcbiAgICA8cD4ke3Jldmlld09iamVjdC5yZXZpZXdzLmJvZHl9PC9wPlxyXG4gIGBcclxuICByZXZpZXdDYXJkLmlubmVySFRNTCA9IHJldmlld0RldGFpbHNcclxuICBvdXRwdXQuYXBwZW5kQ2hpbGQocmV2aWV3Q2FyZClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3RmFjdG9yeSJdfQ==
