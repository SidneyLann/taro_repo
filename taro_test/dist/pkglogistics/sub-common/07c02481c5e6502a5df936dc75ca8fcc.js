"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/07c02481c5e6502a5df936dc75ca8fcc"],{

/***/ "./node_modules/validator/lib/util/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
/***/ (function(module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;
  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ })

}]);
//# sourceMappingURL=07c02481c5e6502a5df936dc75ca8fcc.js.map