"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/6cdc360ccc7aa6d273ad94b6e530db1d"],{

/***/ "./node_modules/validator/lib/isEthereumAddress.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/isEthereumAddress.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isEthereumAddress;
var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var eth = /^(0x)[0-9a-f]{40}$/i;
function isEthereumAddress(str) {
  (0, _assertString.default)(str);
  return eth.test(str);
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ })

}]);
//# sourceMappingURL=6cdc360ccc7aa6d273ad94b6e530db1d.js.map