"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/12702cfb32531b5ebdc3365f120aca73"],{

/***/ "./node_modules/validator/lib/util/multilineRegex.js":
/*!***********************************************************!*\
  !*** ./node_modules/validator/lib/util/multilineRegex.js ***!
  \***********************************************************/
/***/ (function(module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = multilineRegexp;
/**
 * Build RegExp object from an array
 * of multiple/multi-line regexp parts
 *
 * @param {string[]} parts
 * @param {string} flags
 * @return {object} - RegExp object
 */
function multilineRegexp(parts, flags) {
  var regexpAsStringLiteral = parts.join('');
  return new RegExp(regexpAsStringLiteral, flags);
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ })

}]);
//# sourceMappingURL=12702cfb32531b5ebdc3365f120aca73.js.map