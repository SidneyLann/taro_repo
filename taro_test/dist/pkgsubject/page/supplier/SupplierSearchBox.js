"use strict";require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");require("../../sub-common/5ef06e55aec97a834e922531eb96b33c.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgsubject/page/supplier/SupplierSearchBox"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierSearchBox!./src/pkgsubject/page/supplier/SupplierSearchBox.tsx":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierSearchBox!./src/pkgsubject/page/supplier/SupplierSearchBox.tsx ***!
  \******************************************************************************************************************************************************************/
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
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/form/SelectInput */ "./src/form/SelectInput.tsx");
/* harmony import */ var tsx_component_OperatorSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/component/OperatorSelect */ "./src/component/OperatorSelect.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);















var SupplierSearchBox = /*#__PURE__*/function (_React$Component) {
  function SupplierSearchBox(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, SupplierSearchBox);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, SupplierSearchBox, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "labels", {
      operatorName: '运营中心名称',
      supplierName: '供应商名称',
      status: '状态'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "currOrgType", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "opOptionType", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, id, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "search", function () {
      //if (!JsUtil.checkLogin(this, cnst.REQURIED_LOGIN_URI)) return;
      var operatorId = _this.state.operatorId;
      if (!operatorId && _this.currOrgType != tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请选择运营中心');
        return;
      }
      var supplierName = _this.state.supplierName;
      var status = _this.state.status;
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].SUPPLIER_SUPPLIER_LIST + '?operatorId=' + operatorId + '&supplierName=' + supplierName + '&status=' + status + '&menuParam=' + _this.params.menuParam);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.currOrgType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgType');
    _this.opOptionType = _this.getOpOptionType();
    _this.state = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({
      operatorId: '',
      operatorOptions: [],
      operator: -1,
      supplierName: '',
      supplierNo: '',
      status: '',
      statusOptions: [{
        value: '',
        label: '全部'
      }, {
        value: 1,
        label: '新建'
      }, {
        value: 3,
        label: '申请'
      }, {
        value: 5,
        label: '拒审'
      }, {
        value: 7,
        label: '正常'
      }, {
        value: 9,
        label: '停用'
      }]
    }, "status", '');
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_13__["default"])(SupplierSearchBox, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_14__["default"])(SupplierSearchBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getOpOptionType",
    value: function getOpOptionType() {
      var opOptionType = '';
      if (this.params.menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_R_B2C || this.params.menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2C) {
        opOptionType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].OP_OPTION_TYPE_SUPPLIER;
      } else if (this.params.menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_OP_R_B2C) {
        opOptionType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].OP_OPTION_TYPE_SELF;
      } else if (this.params.menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_HQ_R_B2C) {
        opOptionType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].OP_OPTION_TYPE_ALL;
      }
      return opOptionType;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
        mode = _this$state2.mode,
        operatorOptions = _this$state2.operatorOptions,
        operatorId = _this$state2.operatorId,
        statusOptions = _this$state2.statusOptions,
        status = _this$state2.status;
      var labelKey = 'label';
      var valueKey = 'value';
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        topNavBarTitle: '查找供应商',
        bottomLabel4: '查找',
        bottomFunc4: this.search,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_component_OperatorSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
          mode: mode,
          optionType: this.opOptionType,
          checkedId: '',
          that: this
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'supplierName',
          label: this.labels.supplierName,
          type: 'text',
          value: this.state.supplierName,
          onChange: this.onInputChanged
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          options: statusOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: status,
          onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].onValueChange(this, 'status'),
          label: this.labels.status
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (SupplierSearchBox);

/***/ }),

/***/ "./src/pkgsubject/page/supplier/SupplierSearchBox.tsx":
/*!************************************************************!*\
  !*** ./src/pkgsubject/page/supplier/SupplierSearchBox.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_supplier_SupplierSearchBox_SupplierSearchBox_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierSearchBox!./SupplierSearchBox.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierSearchBox!./src/pkgsubject/page/supplier/SupplierSearchBox.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_supplier_SupplierSearchBox_SupplierSearchBox_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgsubject/page/supplier/SupplierSearchBox', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_supplier_SupplierSearchBox_SupplierSearchBox_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","sub-common/5ef06e55aec97a834e922531eb96b33c","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgsubject/page/supplier/SupplierSearchBox.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=SupplierSearchBox.js.map