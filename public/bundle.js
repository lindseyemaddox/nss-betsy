(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nav.default)();
(0, _product.default)();

},{"./nav":2,"./product":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = () => console.log("nav");

exports.default = _default;

},{}],3:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7O0FBQ0E7Ozs7QUFHQTtBQUNBOzs7Ozs7Ozs7O2VDTGUsTUFBTSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosQzs7Ozs7OztBQ0RyQjs7Ozs7QUFNQSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUM7QUFDckMsUUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLFFBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQXBCO0FBQ0EsUUFBTSxjQUFjLEdBQUk7VUFDaEIsYUFBYSxDQUFDLEtBQU07U0FDckIsYUFBYSxDQUFDLFdBQVk7R0FGakM7QUFJQSxFQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXdCLGNBQXhCO0FBQ0EsRUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixXQUFuQjtBQUNEOztBQUVELE1BQU0sYUFBYSxHQUFHO0FBQ3BCLFFBQU0sQ0FEYztBQUVwQixXQUFTLHdCQUZXO0FBR3BCLFdBQVMsT0FIVztBQUlwQixjQUFZLEdBSlE7QUFLcEIsV0FBUyx3QkFMVztBQU1wQixpQkFBZTtBQU5LLENBQXRCO0FBU0EsY0FBYyxDQUFDLGFBQUQsQ0FBZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdlwiXHJcbmltcG9ydCBwcm9kdWN0RmFjdG9yeSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcblxyXG5cclxuTmF2KClcclxucHJvZHVjdEZhY3RvcnkoKVxyXG5cclxuXHJcblxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gY29uc29sZS5sb2coXCJuYXZcIikiLCIvKlxyXG4gICAgQXV0aG9yOiBMaW5kc2V5IE1hZGRveFxyXG4gICAgTmFtZTogcHJvZHVjdC5qc1xyXG4gICAgUHVycG9zZTogYWNjZXB0IHByb2R1Y3Qgb2JqZWN0IGFuZCByZW5kZXIgSFRNTCBlbGVtZW50IHRvIERPTVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gcHJvZHVjdEZhY3RvcnkocHJvZHVjdE9iamVjdCkge1xyXG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXHJcbiAgY29uc3QgcHJvZHVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgY29uc3QgcHJvZHVjdERldGFpbHMgPSBgXHJcbiAgICA8aDI+JHtwcm9kdWN0T2JqZWN0LnRpdGxlfTwvaDI+XHJcbiAgICA8cD4ke3Byb2R1Y3RPYmplY3QuZGVzY3JpcHRpb259PC9wPlxyXG4gIGBcclxuICBwcm9kdWN0Q2FyZC5pbm5lckhUTUwgPSBwcm9kdWN0RGV0YWlsc1xyXG4gIG91dHB1dC5hcHBlbmRDaGlsZChwcm9kdWN0Q2FyZClcclxufVxyXG5cclxuY29uc3QgcHJvZHVjdE9iamVjdCA9IHtcclxuICBcImlkXCI6IDEsXHJcbiAgXCJ0aXRsZVwiOiBcIkJsdWV0b290aCBCYW5hbmEgUGhvbmVcIixcclxuICBcInByaWNlXCI6IFwiNDAuMDBcIixcclxuICBcInF1YW50aXR5XCI6IFwiN1wiLFxyXG4gIFwiaW1hZ2VcIjogXCIuL2ltZy9iYW5hbmEtcGhvbmUucG5nXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFkZCBzbGFwc3RpY2sgc3R5bGUgdG8geW91ciBwaG9uZSB3aXRoIHRoaXMgaGFuZHNldCB3b3J0aHkgb2YgYSBNYXJ4IEJyb3RoZXJzIGdhZy4gSXQgY29ubmVjdHMgdGhyb3VnaCBCbHVldG9vdGggZm9yIHdpcmVsZXNzIGNvbnZlcnNhdGlvbnMgdGhhdCBrZWVwIHBob25lIHJhZGlhdGlvbiBhd2F5IGZyb20geW91ciBjb2NvbnV0LiBKdXN0IHBhaXIgaXQgd2l0aCB5b3VyIGRldmljZSB0byByZWNlaXZlIGNhbGxzIGFuZCB1c2UgeW91ciBmYXZvcml0ZSB2b2ljZSBhc3Npc3RhbnQgKGxpa2UgU2lyaSkgdG8gbWFrZSB0aGVtLiBUYWxrIGZvciB1cCB0byAxMCBob3VycyB3aXRoIHRoZSBVU0ItcmVjaGFyZ2VhYmxlIGJhdHRlcnkgYW5kIGtub3cgeW91J3JlIGhlbHBpbmcga2VlcCB0aGUganVuZ2xlIGdyZWVuIHRoYW5rcyB0byB0aGUgMTAwJSByZWN5Y2xlZCBwbGFzdGljIGNvdmVyLiBNYWRlIGluIENoaW5hLlwiXHJcbn1cclxuXHJcbnByb2R1Y3RGYWN0b3J5KHByb2R1Y3RPYmplY3QpIl19
