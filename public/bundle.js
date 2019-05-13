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

_reviewList.default.buildReviewDOM();

var _default = () => console.log("product");

exports.default = _default;

},{"./review-list":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
};
var _default = API;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewData = _interopRequireDefault(require("./review-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const output = document.getElementById("output");
const reviewDOM = {
  buildReviewDOM: function (parsedReview) {
    function setAttributes(element, attributes) {
      for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
    }

    let loadReview = _reviewData.default.getReviews().then(parsedReviews => {
      output.innerHTML = "";
      parsedReviews.forEach(parsedReview => {
        buildReviewDOM(parsedReview);
      });
    });

    let reviewCard = document.createElement("section");
    setAttributes(reviewCard, {
      id: `review_section_${parsedReview.id}`,
      class: "review_card"
    });
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
    output.appendChild(reviewCard);
    reviewCard.appendChild(reviewTitle);
    reviewCard.appendChild(reviewDetails);
  }
};
var _default = reviewDOM;
exports.default = _default;

},{"./review-data":6}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC1kYXRhLmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0LWxpc3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiLCIuLi9zY3JpcHRzL3Jldmlldy1kYXRhLmpzIiwiLi4vc2NyaXB0cy9yZXZpZXctbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7O0FBQ0E7Ozs7QUFHQTtBQUNBOzs7Ozs7Ozs7O2VDTGUsTUFBTSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosQzs7Ozs7Ozs7Ozs7O2VDQU4sTUFBTSxPQUFPLENBQUMsR0FBUixDQUFZLGNBQVosQzs7Ozs7Ozs7Ozs7O0FDQXJCOztBQUNBOzs7O0FBRUE7QUFDQTs7ZUFFZSxNQUFNLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWixDOzs7Ozs7Ozs7Ozs7QUNQckI7Ozs7QUFFQSxvQkFBVSxjQUFWOztlQUVlLE1BQU0sT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEM7Ozs7Ozs7Ozs7O0FDSnJCLElBQUksT0FBTyxHQUFHLGdDQUFkO0FBRUEsTUFBTSxHQUFHLEdBQUc7QUFDVixFQUFBLFVBQVUsRUFBRSxTQUFTLE9BQVQsR0FBbUI7QUFDN0IsSUFBQSxLQUFLLENBQUMsT0FBRCxDQUFMLENBQWUsSUFBZixDQUFvQixPQUFPLElBQUksT0FBTyxDQUFDLElBQVIsRUFBL0I7QUFDRCxHQUhTO0FBSVYsRUFBQSxZQUFZLEVBQUUsU0FBUyxNQUFULENBQWdCLFFBQWhCLEVBQTBCO0FBQ3RDLElBQUEsS0FBSyxDQUFFLEdBQUUsT0FBUSxJQUFHLFFBQVMsRUFBeEIsRUFBMkI7QUFDOUIsTUFBQSxNQUFNLEVBQUUsS0FEc0I7QUFFOUIsTUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUZxQixLQUEzQixDQUFMLENBS0csSUFMSCxDQUtRLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQUxwQjtBQU1EO0FBWFMsQ0FBWjtlQWNlLEc7Ozs7Ozs7Ozs7O0FDaEJmOzs7O0FBRUEsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUVBLE1BQU0sU0FBUyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxFQUFFLFVBQVUsWUFBVixFQUF3QjtBQUV0QyxhQUFTLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBaEMsRUFBNEM7QUFDMUMsV0FBSyxJQUFJLEdBQVQsSUFBZ0IsVUFBaEIsRUFBNEI7QUFDMUIsUUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixHQUFyQixFQUEwQixVQUFVLENBQUMsR0FBRCxDQUFwQztBQUNEO0FBQ0Y7O0FBRUQsUUFBSSxVQUFVLEdBQUcsb0JBQUksVUFBSixHQUFpQixJQUFqQixDQUFzQixhQUFhLElBQUk7QUFDdEQsTUFBQSxNQUFNLENBQUMsU0FBUCxHQUFtQixFQUFuQjtBQUNBLE1BQUEsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsWUFBWSxJQUFJO0FBQ3BDLFFBQUEsY0FBYyxDQUFDLFlBQUQsQ0FBZDtBQUNELE9BRkQ7QUFHRCxLQUxnQixDQUFqQjs7QUFPQSxRQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBLElBQUEsYUFBYSxDQUFDLFVBQUQsRUFBYTtBQUN4QixNQUFBLEVBQUUsRUFBRyxrQkFBaUIsWUFBWSxDQUFDLEVBQUcsRUFEZDtBQUV4QixNQUFBLEtBQUssRUFBRTtBQUZpQixLQUFiLENBQWI7QUFJQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBeUI7O09BQXpCO0FBR0EsUUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQSxJQUFBLFlBQVksQ0FBQyxTQUFiLEdBQTBCOztnQkFFZCxZQUFZLENBQUMsT0FBUTtnQkFDckIsWUFBWSxDQUFDLE9BQVE7Z0JBQ3JCLFlBQVksQ0FBQyxPQUFROztPQUpqQztBQU9BLElBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsVUFBbkI7QUFDQSxJQUFBLFVBQVUsQ0FBQyxXQUFYLENBQXVCLFdBQXZCO0FBQ0EsSUFBQSxVQUFVLENBQUMsV0FBWCxDQUF1QixhQUF2QjtBQUNEO0FBcENlLENBQWxCO2VBdUNlLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXZcIlxyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdC1saXN0XCJcclxuXHJcblxyXG5OYXYoKVxyXG5Qcm9kdWN0TGlzdCgpXHJcblxyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBjb25zb2xlLmxvZyhcIm5hdlwiKSIsIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBjb25zb2xlLmxvZyhcInByb2R1Y3QtZGF0YVwiKSIsIlxyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0XCJcclxuaW1wb3J0IFByb2R1Y3REYXRhIGZyb20gXCIuL3Byb2R1Y3QtZGF0YVwiXHJcblxyXG5Qcm9kdWN0KClcclxuUHJvZHVjdERhdGEoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gY29uc29sZS5sb2coXCJwcm9kdWN0LWxpc3RcIik7XHJcbiIsImltcG9ydCByZXZpZXdET00gZnJvbSBcIi4vcmV2aWV3LWxpc3RcIlxyXG5cclxucmV2aWV3RE9NLmJ1aWxkUmV2aWV3RE9NKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IGNvbnNvbGUubG9nKFwicHJvZHVjdFwiKTtcclxuIiwibGV0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0c1wiO1xyXG5cclxuY29uc3QgQVBJID0ge1xyXG4gIGdldFJldmlld3M6IGZ1bmN0aW9uIHJldmlld3MoKSB7XHJcbiAgICBmZXRjaChiYXNlVXJsKS50aGVuKHJlc3VsdHMgPT4gcmVzdWx0cy5qc29uKCkpO1xyXG4gIH0sXHJcbiAgZ2V0T25lUmV2aWV3OiBmdW5jdGlvbiByZXZpZXcocmV2aWV3SWQpIHtcclxuICAgIGZldGNoKGAke2Jhc2VVcmx9LyR7cmV2aWV3SWR9YCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBUEkiLCJpbXBvcnQgQVBJIGZyb20gXCIuL3Jldmlldy1kYXRhXCJcclxuXHJcbmNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpO1xyXG5cclxuY29uc3QgcmV2aWV3RE9NID0ge1xyXG4gIGJ1aWxkUmV2aWV3RE9NOiBmdW5jdGlvbiAocGFyc2VkUmV2aWV3KSB7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxvYWRSZXZpZXcgPSBBUEkuZ2V0UmV2aWV3cygpLnRoZW4ocGFyc2VkUmV2aWV3cyA9PiB7XHJcbiAgICAgIG91dHB1dC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBwYXJzZWRSZXZpZXdzLmZvckVhY2gocGFyc2VkUmV2aWV3ID0+IHtcclxuICAgICAgICBidWlsZFJldmlld0RPTShwYXJzZWRSZXZpZXcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCByZXZpZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcclxuICAgIHNldEF0dHJpYnV0ZXMocmV2aWV3Q2FyZCwge1xyXG4gICAgICBpZDogYHJldmlld19zZWN0aW9uXyR7cGFyc2VkUmV2aWV3LmlkfWAsXHJcbiAgICAgIGNsYXNzOiBcInJldmlld19jYXJkXCIsXHJcbiAgICB9KVxyXG4gICAgbGV0IHJldmlld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJldmlld1RpdGxlLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxoMz5SZXZpZXdzPC9oMz5cclxuICAgICAgYDtcclxuICAgIGxldCByZXZpZXdEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBhcnNlZFJldmlldy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPiR7cGFyc2VkUmV2aWV3LnJldmlldzF9PC9saT5cclxuICAgICAgICAgIDxsaT4ke3BhcnNlZFJldmlldy5yZXZpZXcyfTwvbGk+XHJcbiAgICAgICAgICA8bGk+JHtwYXJzZWRSZXZpZXcucmV2aWV3M308L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIGA7XHJcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQocmV2aWV3Q2FyZClcclxuICAgIHJldmlld0NhcmQuYXBwZW5kQ2hpbGQocmV2aWV3VGl0bGUpXHJcbiAgICByZXZpZXdDYXJkLmFwcGVuZENoaWxkKHJldmlld0RldGFpbHMpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXZpZXdET01cclxuIl19
