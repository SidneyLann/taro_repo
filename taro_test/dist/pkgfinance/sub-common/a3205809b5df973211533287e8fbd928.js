"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/a3205809b5df973211533287e8fbd928"],{

/***/ "./node_modules/validator/lib/isPort.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isPort.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isPort;
var _isInt = _interopRequireDefault(__webpack_require__(/*! ./isInt */ "./node_modules/validator/lib/isInt.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function isPort(str) {
  return (0, _isInt.default)(str, {
    allow_leading_zeroes: false,
    min: 0,
    max: 65535
  });
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ })

}]);
//# sourceMappingURL=a3205809b5df973211533287e8fbd928.js.map