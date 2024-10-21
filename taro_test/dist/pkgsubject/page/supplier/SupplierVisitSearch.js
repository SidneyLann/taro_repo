"use strict";require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgsubject/page/supplier/SupplierVisitSearch"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierVisitSearch!./src/pkgsubject/page/supplier/SupplierVisitSearch.tsx":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierVisitSearch!./src/pkgsubject/page/supplier/SupplierVisitSearch.tsx ***!
  \**********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);













var SupplierVisitSearch = /*#__PURE__*/function (_React$Component) {
  function SupplierVisitSearch(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, SupplierVisitSearch);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, SupplierVisitSearch, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this, "labels", {
      supplierId: '供应商编号',
      intervieweeName: '被访人姓名'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this, "currOrgType", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])({}, id, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this, "search", function () {
      var supplierId = _this.state.supplierId;
      var intervieweeName = _this.state.intervieweeName;
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].SUPPLIER_VISIT_LIST + '?supplierId=' + supplierId + '&intervieweeName=' + intervieweeName);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.currOrgType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgType');
    _this.state = {
      supplierId: '',
      intervieweeName: ''
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__["default"])(SupplierVisitSearch, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(SupplierVisitSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var mode = this.state.mode;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        topNavBarTitle: '查找供应商',
        bottomLabel4: '查找',
        bottomFunc4: this.search,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'supplierId',
          label: this.labels.supplierId,
          type: 'text',
          value: this.state.supplierId,
          onChange: this.onInputChanged
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'intervieweeName',
          label: this.labels.intervieweeName,
          type: 'text',
          value: this.state.intervieweeName,
          onChange: this.onInputChanged
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (SupplierVisitSearch);

/***/ }),

/***/ "./src/pkgsubject/page/supplier/SupplierVisitSearch.tsx":
/*!**************************************************************!*\
  !*** ./src/pkgsubject/page/supplier/SupplierVisitSearch.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_supplier_SupplierVisitSearch_SupplierVisitSearch_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierVisitSearch!./SupplierVisitSearch.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierVisitSearch!./src/pkgsubject/page/supplier/SupplierVisitSearch.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_supplier_SupplierVisitSearch_SupplierVisitSearch_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgsubject/page/supplier/SupplierVisitSearch', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_supplier_SupplierVisitSearch_SupplierVisitSearch_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgsubject/page/supplier/SupplierVisitSearch.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=SupplierVisitSearch.js.map