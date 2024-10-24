"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/5e2d597681b28330d06adc8b7fabd0c7"],{

/***/ "./node_modules/validator/lib/isAbaRouting.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isAbaRouting.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isAbaRouting;
var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// http://www.brainjar.com/js/validation/
// https://www.aba.com/news-research/research-analysis/routing-number-policy-procedures
// series reserved for future use are excluded
var isRoutingReg = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
function isAbaRouting(str) {
  (0, _assertString.default)(str);
  if (!isRoutingReg.test(str)) return false;
  var checkSumVal = 0;
  for (var i = 0; i < str.length; i++) {
    if (i % 3 === 0) checkSumVal += str[i] * 3;else if (i % 3 === 1) checkSumVal += str[i] * 7;else checkSumVal += str[i] * 1;
  }
  return checkSumVal % 10 === 0;
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ })

}]);
//# sourceMappingURL=5e2d597681b28330d06adc8b7fabd0c7.js.map