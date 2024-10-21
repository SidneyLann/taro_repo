"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/315c14bf030faea4e99ebfc9791ff88b"],{

/***/ "./node_modules/validator/lib/isMD5.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isMD5.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isMD5;
var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var md5 = /^[a-f0-9]{32}$/;
function isMD5(str) {
  (0, _assertString.default)(str);
  return md5.test(str);
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ })

}]);
//# sourceMappingURL=315c14bf030faea4e99ebfc9791ff88b.js.map