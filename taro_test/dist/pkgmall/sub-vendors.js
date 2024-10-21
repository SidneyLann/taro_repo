"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgmall/sub-vendors"],{

/***/ "./src/pkgmall/page/mall/CmmdListTemplate.tsx":
/*!****************************************************!*\
  !*** ./src/pkgmall/page/mall/CmmdListTemplate.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_view_ComponentView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/view/ComponentView */ "./src/view/ComponentView.tsx");
/* harmony import */ var tsx_layout_GridLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/GridLayout */ "./src/layout/GridLayout.tsx");
/* harmony import */ var tsx_layout_CommodityLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/CommodityLayout */ "./src/layout/CommodityLayout.tsx");
/* harmony import */ var tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/form/SelectInput */ "./src/form/SelectInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);













var CmmdListTemplate = /*#__PURE__*/function (_React$Component) {
  function CmmdListTemplate(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, CmmdListTemplate);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, CmmdListTemplate, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this, "sortingChanged", function (item) {
      var value = item.value;
      _this.setState({
        sorting: value
      });
      _this.props.onSortChange(value);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this, "go2CommodityDetail", function (item, index) {
      var commodityId = item.commodityId;
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_COMMODITY_DETAIL + '?commodityId=' + commodityId);
    });
    _this.state = {
      sortingOptions: [{
        value: 1,
        label: '按价格升序'
      }, {
        value: 3,
        label: '按价格降序'
      }, {
        value: 5,
        label: '按销量升序'
      }, {
        value: 7,
        label: '按销量降序'
      }],
      sorting: 1
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__["default"])(CmmdListTemplate, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(CmmdListTemplate, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
        sorting = _this$state.sorting,
        sortingOptions = _this$state.sortingOptions;
      var labelKey = 'label';
      var valueKey = 'value';
      var data = this.props.data;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(tsx_view_ComponentView__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          options: sortingOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: sorting,
          onChange: this.sortingChanged,
          label: "\u6392\u5E8F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(tsx_layout_GridLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
          data: data,
          columnSize: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(tsx_layout_CommodityLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onClick: this.go2CommodityDetail
          })
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (CmmdListTemplate);

/***/ })

}]);
//# sourceMappingURL=sub-vendors.js.map