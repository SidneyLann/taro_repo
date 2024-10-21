"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/5ef06e55aec97a834e922531eb96b33c"],{

/***/ "./src/component/OperatorSelect.tsx":
/*!******************************************!*\
  !*** ./src/component/OperatorSelect.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/form/SelectInput */ "./src/form/SelectInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);










var OperatorSelect = /*#__PURE__*/function (_React$Component) {
  function OperatorSelect() {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, OperatorSelect);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, OperatorSelect, [].concat(args));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "optionType", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "disabled", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "init", function () {
      if (_this.optionType && _this.props.optionType == _this.optionType) return;
      if (_this.props.mode == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_VIEW || _this.props.optionType > tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].OP_OPTION_TYPE_SUPPLIER) _this.disabled = true;
      _this.optionType = _this.props.optionType;
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setOperatorOptions(_this.props.that, _this.props.optionType, _this.props.checkedId);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "operatorChanged", function (item) {
      var operatorId = item.first;
      var operatorName = item.second;
      _this.props.that.setState({
        operatorId: operatorId,
        operatorName: operatorName
      });
    });
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(OperatorSelect, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(OperatorSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.init();
    }
  }, {
    key: "render",
    value: function render() {
      var labelKey = 'second';
      var valueKey = 'first';
      var operatorLabel = ' ';
      var labelWidth = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getCssNumValue(this.props.labelWidth, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_LABEL);
      var valueWidth = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getCssNumValue(this.props.valueWidth, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_VALUE);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        options: this.props.that.state.operatorOptions,
        labelKey: labelKey,
        valueKey: valueKey,
        value: this.props.that.state.operatorId,
        onChange: this.operatorChanged,
        label: "\u8FD0\u8425\u4E2D\u5FC3",
        optionLabel: operatorLabel,
        disabled: this.disabled,
        labelWidth: labelWidth,
        valueWidth: valueWidth
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (OperatorSelect);

/***/ })

}]);
//# sourceMappingURL=5ef06e55aec97a834e922531eb96b33c.js.map