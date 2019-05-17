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
    Purpose: accept product objects and render HTML element to DOM
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

/*
    Author: Lindsey Maddox
    Name: product.js
    Purpose: accept product object and render HTML element to DOM
*/
function productFactory(productObject) {
  const output = document.getElementById("output");
  const productCard = document.createElement("div");
  const productDetails = `
    <h2>${productObject.title}</h2>
    <p>${productObject.description}</p>
  `;
  productCard.innerHTML = productDetails;
  output.appendChild(productCard);
}

const productObject = {
  "id": 1,
  "title": "Bluetooth Banana Phone",
  "price": "40.00",
  "quantity": "7",
  "image": "./img/banana-phone.png",
  "description": "Add slapstick style to your phone with this handset worthy of a Marx Brothers gag. It connects through Bluetooth for wireless conversations that keep phone radiation away from your coconut. Just pair it with your device to receive calls and use your favorite voice assistant (like Siri) to make them. Talk for up to 10 hours with the USB-rechargeable battery and know you're helping keep the jungle green thanks to the 100% recycled plastic cover. Made in China."
};
productFactory(productObject);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC1kYXRhLmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0LWxpc3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBOztBQUNBOzs7O0FBR0E7QUFDQTs7Ozs7Ozs7OztlQ0xlLE1BQU0sT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEM7Ozs7Ozs7Ozs7OztBQ0RyQjs7Ozs7QUFNQSxNQUFNLE9BQU8sR0FBRyx1QkFBaEI7QUFFQSxNQUFNLFVBQVUsR0FBRztBQUNqQixFQUFBLFdBQVcsRUFBRSxZQUFZO0FBQ3ZCLFdBQU8sS0FBSyxDQUFFLEdBQUUsT0FBUSxXQUFaLENBQUwsQ0FBNkIsSUFBN0IsQ0FBa0MsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBQTlDLENBQVA7QUFDRDtBQUhnQixDQUFuQjtBQUtBLFVBQVUsQ0FBQyxXQUFYO2VBRWUsVTs7Ozs7Ozs7Ozs7QUNUZjs7QUFDQTs7OztBQVBBOzs7OztBQVNBLFNBQVMsV0FBVCxHQUF1QjtBQUNyQix1QkFBVyxXQUFYLEdBQXlCLElBQXpCLENBQThCLGFBQWEsSUFBSTtBQUM3QyxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksYUFBWjtBQUNBLDBCQUFlLGFBQWY7QUFDRCxHQUhEO0FBSUQ7O2VBRWMsVzs7Ozs7O0FDaEJmOzs7OztBQU1BLFNBQVMsY0FBVCxDQUF3QixhQUF4QixFQUF1QztBQUNyQyxRQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsUUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQSxRQUFNLGNBQWMsR0FBSTtVQUNoQixhQUFhLENBQUMsS0FBTTtTQUNyQixhQUFhLENBQUMsV0FBWTtHQUZqQztBQUlBLEVBQUEsV0FBVyxDQUFDLFNBQVosR0FBd0IsY0FBeEI7QUFDQSxFQUFBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLFdBQW5CO0FBQ0Q7O0FBRUQsTUFBTSxhQUFhLEdBQUc7QUFDcEIsUUFBTSxDQURjO0FBRXBCLFdBQVMsd0JBRlc7QUFHcEIsV0FBUyxPQUhXO0FBSXBCLGNBQVksR0FKUTtBQUtwQixXQUFTLHdCQUxXO0FBTXBCLGlCQUFlO0FBTkssQ0FBdEI7QUFTQSxjQUFjLENBQUMsYUFBRCxDQUFkIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdlwiO1xuaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3QtbGlzdFwiO1xuXG5cbk5hdigpO1xucHJvZHVjdExpc3QoKTtcblxuXG4iLCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IGNvbnNvbGUubG9nKFwibmF2XCIpIiwiLypcbiAgICBBdXRob3I6IExpbmRzZXkgTWFkZG94XG4gICAgTmFtZTogcmV2aWV3LWRhdGEuanNcbiAgICBQdXJwb3NlOiBmZXRjaCByZXZpZXdzIGZyb20gZGF0YWJhc2VcbiovXG5cbmNvbnN0IGJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OFwiO1xuXG5jb25zdCBwcm9kdWN0QVBJID0ge1xuICBnZXRQcm9kdWN0czogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmZXRjaChgJHtiYXNlVVJMfS9wcm9kdWN0c2ApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxucHJvZHVjdEFQSS5nZXRQcm9kdWN0cygpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0QVBJOyIsIi8qXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxuICAgIE5hbWU6IHByb2R1Y3QuanNcbiAgICBQdXJwb3NlOiBhY2NlcHQgcHJvZHVjdCBvYmplY3RzIGFuZCByZW5kZXIgSFRNTCBlbGVtZW50IHRvIERPTVxuKi9cblxuaW1wb3J0IHByb2R1Y3RGYWN0b3J5IGZyb20gXCIuL3Byb2R1Y3RcIlxuaW1wb3J0IHByb2R1Y3RBUEkgZnJvbSBcIi4vcHJvZHVjdC1kYXRhXCJcblxuZnVuY3Rpb24gcHJvZHVjdExpc3QoKSB7XG4gIHByb2R1Y3RBUEkuZ2V0UHJvZHVjdHMoKS50aGVuKHByb2R1Y3RPYmplY3QgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RPYmplY3QpO1xuICAgIHByb2R1Y3RGYWN0b3J5KHByb2R1Y3RPYmplY3QpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdExpc3RcbiIsIi8qXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxuICAgIE5hbWU6IHByb2R1Y3QuanNcbiAgICBQdXJwb3NlOiBhY2NlcHQgcHJvZHVjdCBvYmplY3QgYW5kIHJlbmRlciBIVE1MIGVsZW1lbnQgdG8gRE9NXG4qL1xuXG5mdW5jdGlvbiBwcm9kdWN0RmFjdG9yeShwcm9kdWN0T2JqZWN0KSB7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpO1xuICBjb25zdCBwcm9kdWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2R1Y3REZXRhaWxzID0gYFxuICAgIDxoMj4ke3Byb2R1Y3RPYmplY3QudGl0bGV9PC9oMj5cbiAgICA8cD4ke3Byb2R1Y3RPYmplY3QuZGVzY3JpcHRpb259PC9wPlxuICBgXG4gIHByb2R1Y3RDYXJkLmlubmVySFRNTCA9IHByb2R1Y3REZXRhaWxzO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQocHJvZHVjdENhcmQpO1xufVxuXG5jb25zdCBwcm9kdWN0T2JqZWN0ID0ge1xuICBcImlkXCI6IDEsXG4gIFwidGl0bGVcIjogXCJCbHVldG9vdGggQmFuYW5hIFBob25lXCIsXG4gIFwicHJpY2VcIjogXCI0MC4wMFwiLFxuICBcInF1YW50aXR5XCI6IFwiN1wiLFxuICBcImltYWdlXCI6IFwiLi9pbWcvYmFuYW5hLXBob25lLnBuZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQWRkIHNsYXBzdGljayBzdHlsZSB0byB5b3VyIHBob25lIHdpdGggdGhpcyBoYW5kc2V0IHdvcnRoeSBvZiBhIE1hcnggQnJvdGhlcnMgZ2FnLiBJdCBjb25uZWN0cyB0aHJvdWdoIEJsdWV0b290aCBmb3Igd2lyZWxlc3MgY29udmVyc2F0aW9ucyB0aGF0IGtlZXAgcGhvbmUgcmFkaWF0aW9uIGF3YXkgZnJvbSB5b3VyIGNvY29udXQuIEp1c3QgcGFpciBpdCB3aXRoIHlvdXIgZGV2aWNlIHRvIHJlY2VpdmUgY2FsbHMgYW5kIHVzZSB5b3VyIGZhdm9yaXRlIHZvaWNlIGFzc2lzdGFudCAobGlrZSBTaXJpKSB0byBtYWtlIHRoZW0uIFRhbGsgZm9yIHVwIHRvIDEwIGhvdXJzIHdpdGggdGhlIFVTQi1yZWNoYXJnZWFibGUgYmF0dGVyeSBhbmQga25vdyB5b3UncmUgaGVscGluZyBrZWVwIHRoZSBqdW5nbGUgZ3JlZW4gdGhhbmtzIHRvIHRoZSAxMDAlIHJlY3ljbGVkIHBsYXN0aWMgY292ZXIuIE1hZGUgaW4gQ2hpbmEuXCJcbn1cblxucHJvZHVjdEZhY3RvcnkocHJvZHVjdE9iamVjdCk7Il19
