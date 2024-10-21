"use strict";require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");require("../../sub-common/df5d0bc6f71f596ab4b59a770bc05ed1.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgorder/page/others/ShipSearchBox"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/others/ShipSearchBox!./src/pkgorder/page/others/ShipSearchBox.tsx":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/others/ShipSearchBox!./src/pkgorder/page/others/ShipSearchBox.tsx ***!
  \**************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/common/Statuses */ "./src/common/Statuses.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/form/SelectInput */ "./src/form/SelectInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);















var ShipSearchBox = /*#__PURE__*/function (_React$Component) {
  function ShipSearchBox(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, ShipSearchBox);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, ShipSearchBox, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "labels", {
      receiptPerson: '收货人',
      shipNo: '运单号',
      status: '状态'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "currOrgId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "currUserId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, name, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "search", function () {
      var receiptPerson = _this.state.receiptPerson;
      var shipNo = _this.state.shipNo;
      var status = _this.state.status;
      var menu = _this.params.menuParam;
      var sellerId = '';
      var deliverymanId = '';
      var buyerId = '';
      if (menu == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_G_B2C) sellerId = _this.currOrgId;else if (menu == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2C) deliverymanId = _this.currUserId;else if (menu == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2C) buyerId = _this.currUserId;
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].ORDER_OTHERS_SHIP_LIST + '?sellerId=' + sellerId + '&deliverymanId=' + deliverymanId + '&buyerId=' + buyerId + '&receiptPerson=' + receiptPerson + '&shipNo=' + shipNo + '&status=' + status);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.state = {
      receiptPerson: '',
      shipNo: '',
      statusOptions: [{
        value: '',
        label: '全部'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].stats.STATUS_NEW,
        label: '新建'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].stats.STATUS_FINISHED,
        label: '已完成'
      }],
      status: '',
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_13__["default"])(ShipSearchBox, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_14__["default"])(ShipSearchBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        statusOptions = _this$state.statusOptions,
        status = _this$state.status;
      var labelKey = 'label';
      var valueKey = 'value';
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        that: this,
        topNavBarTitle: '查找运单',
        bottomLabel4: '查找',
        bottomFunc4: this.search,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: 'receiptPerson',
          label: this.labels.receiptPerson,
          type: 'text',
          value: this.state.receiptPerson,
          onChange: this.onInputChanged
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: 'shipNo',
          label: this.labels.shipNo,
          type: 'text',
          value: this.state.shipNo,
          onChange: this.onInputChanged
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
          options: statusOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: status,
          onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].onValueChange(this, 'status'),
          label: this.labels.status
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (ShipSearchBox);

/***/ }),

/***/ "./src/pkgorder/page/others/ShipSearchBox.tsx":
/*!****************************************************!*\
  !*** ./src/pkgorder/page/others/ShipSearchBox.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_others_ShipSearchBox_ShipSearchBox_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/others/ShipSearchBox!./ShipSearchBox.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/others/ShipSearchBox!./src/pkgorder/page/others/ShipSearchBox.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_others_ShipSearchBox_ShipSearchBox_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgorder/page/others/ShipSearchBox', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_others_ShipSearchBox_ShipSearchBox_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","sub-common/df5d0bc6f71f596ab4b59a770bc05ed1","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgorder/page/others/ShipSearchBox.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=ShipSearchBox.js.map