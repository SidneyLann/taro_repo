"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/3e4f33945b09ba74f16d0c8d34bb4ea3"],{

/***/ "./node_modules/validator/lib/isISO6346.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isISO6346.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isFreightContainerID = void 0;
exports.isISO6346 = isISO6346;
var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// https://en.wikipedia.org/wiki/ISO_6346
// according to ISO6346 standard, checksum digit is mandatory for freight container but recommended
// for other container types (J and Z)
var isISO6346Str = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/;
var isDigit = /^[0-9]$/;
function isISO6346(str) {
  (0, _assertString.default)(str);
  str = str.toUpperCase();
  if (!isISO6346Str.test(str)) return false;
  if (str.length === 11) {
    var sum = 0;
    for (var i = 0; i < str.length - 1; i++) {
      if (!isDigit.test(str[i])) {
        var convertedCode = void 0;
        var letterCode = str.charCodeAt(i) - 55;
        if (letterCode < 11) convertedCode = letterCode;else if (letterCode >= 11 && letterCode <= 20) convertedCode = 12 + letterCode % 11;else if (letterCode >= 21 && letterCode <= 30) convertedCode = 23 + letterCode % 21;else convertedCode = 34 + letterCode % 31;
        sum += convertedCode * Math.pow(2, i);
      } else sum += str[i] * Math.pow(2, i);
    }
    var checkSumDigit = sum % 11;
    return Number(str[str.length - 1]) === checkSumDigit;
  }
  return true;
}
var isFreightContainerID = exports.isFreightContainerID = isISO6346;

/***/ })

}]);
//# sourceMappingURL=3e4f33945b09ba74f16d0c8d34bb4ea3.js.map