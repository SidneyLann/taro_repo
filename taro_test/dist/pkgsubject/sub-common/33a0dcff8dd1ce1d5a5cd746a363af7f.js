"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f"],{

/***/ "./src/form/GeneralInput.tsx":
/*!***********************************!*\
  !*** ./src/form/GeneralInput.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "webpack/container/remote/@linaria/react");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_linaria_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






var _templateObject;








var Input0 = (0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Input)(_templateObject || (_templateObject = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__["default"])(["\ndisplay: flex;\nflex-direction: row;\njustify-content: ", ";\nalign-items: ", ";\nwidth: ", ";\nheight: ", ";\nborder-style: solid;\nborder-width: 1px;\nborder-color: rgba(0,255,255,1);\nmargin-top: ", ";\nmargin-bottom: ", ";\nfont-size: 14\n"])), function (props) {
  return props.justifyContent;
}, function (props) {
  return props.alignItems;
}, function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.marginTop;
}, function (props) {
  return props.marginBottom;
});
var GeneralInput = /*#__PURE__*/function (_React$Component) {
  function GeneralInput() {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, GeneralInput);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, GeneralInput, [].concat(args));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "onInput", function (event) {
      _this.props.onChange(_this.props.name, event.detail.value);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "onBlur", function (event) {
      _this.props.onChange(_this.props.name, event.detail.value);
    });
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_12__["default"])(GeneralInput, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__["default"])(GeneralInput, [{
    key: "render",
    value: function render() {
      var position = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssStrValue(this.props.position, 'relative');
      var zIndex = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssNumValue(this.props.zIndex, 0);
      var top = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssWidthValue(this.props.top, 0);
      var right = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssWidthValue(this.props.right, 0);
      var justifyContent = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssStrValue(this.props.justifyContent, 'flex-start');
      var alignItems = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssStrValue(this.props.alignItems, 'stretch');
      var labelWidth = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssWidthValue(this.props.labelWidth, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].NUM_WIDTH_LABEL);
      var valueWidth = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssWidthValue(this.props.valueWidth, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].NUM_WIDTH_VALUE);
      var valueWidth2 = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssWidthValue(this.props.valueWidth + 10, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].NUM_WIDTH_VALUE);
      var height = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssHeightValue(this.props.height, 'auto');
      var marginTop = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssHeightValue(this.props.marginTop, 0);
      var marginBottom = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssHeightValue(this.props.marginBottom, 0);
      var type = this.props.type ? this.props.type : 'text';
      var value = this.props.value; //? this.props.value: ''
      var focus = this.props.focus ? this.props.focus : false;
      var password = this.props.password ? true : false;
      var plain = this.props.plain ? true : false;
      var disabled = this.props.disabled ? true : false;
      var labelColor = this.props.error ? 'red' : 'black';
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        justifyContent: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
          width: labelWidth,
          children: this.props.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Input0, (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({
          type: this.props.type,
          disabled: this.props.disabled,
          placeholder: this.props.placeholder,
          value: value,
          onInput: this.onInput,
          onBlur: this.onBlur,
          focus: focus,
          maxlength: -1,
          password: password,
          position: position,
          zIndex: zIndex,
          top: top,
          right: right,
          justifyContent: justifyContent,
          alignItems: alignItems,
          width: valueWidth,
          height: height,
          marginTop: marginTop,
          marginBottom: marginBottom,
          plain: plain
        }, "disabled", disabled), "style", {
          fontSize: 14
        }))]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (GeneralInput);

/***/ })

}]);
//# sourceMappingURL=33a0dcff8dd1ce1d5a5cd746a363af7f.js.map