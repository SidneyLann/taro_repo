"use strict";require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");require("../../sub-common/df5d0bc6f71f596ab4b59a770bc05ed1.js");require("../../sub-common/5ef06e55aec97a834e922531eb96b33c.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgorder/page/order/OrderSearchBox"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderSearchBox!./src/pkgorder/page/order/OrderSearchBox.tsx":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderSearchBox!./src/pkgorder/page/order/OrderSearchBox.tsx ***!
  \**************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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
/* harmony import */ var tsx_component_OperatorSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/component/OperatorSelect */ "./src/component/OperatorSelect.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
















var OrderSearchBox = /*#__PURE__*/function (_React$Component) {
  function OrderSearchBox(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, OrderSearchBox);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_12__["default"])(this, OrderSearchBox, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "opOptionType", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "currOrgId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "currOrgType", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgType'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "labels", {
      operatorName: '运营中心名称',
      commodityName: '商品名称',
      supplierName: '供应商名称',
      payType: '支付类型',
      tradeType: '交易类型',
      status: '状态'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])({}, name, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "search", function () {
      //if (!JsUtil.checkLogin(this, cnst.REQURIED_LOGIN_URI)) return;
      var operatorId = _this.state.operatorId;
      if (!operatorId && _this.currOrgType != tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请选择运营中心');
        return;
      }
      var supplierId = '';
      var commodityName = _this.state.commodityName;
      var supplierName = _this.state.supplierName;
      var payType = _this.state.payType;
      var tradeType = _this.state.tradeType;
      var status = _this.state.status;
      if (_this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || _this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || _this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) supplierId = _this.currOrgId;
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].ORDER_ORDER_LIST + '?mallType=' + _this.params.mallType + '&menuParam=' + _this.params.menuParam + '&status=' + status + '&operatorId=' + operatorId + '&supplierId=' + supplierId + '&commodityName=' + commodityName + '&payType=' + payType + '&tradeType=' + tradeType + '&supplierName=' + supplierName);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.opOptionType = _this.getOpOptionType();
    _this.state = {
      operatorId: '',
      operatorOptions: [],
      commodityName: '',
      supplierName: '',
      payTypeOptions: [{
        value: '',
        label: '全部'
      }, {
        value: 1,
        label: '在线支付'
      }, {
        value: 3,
        label: '货到付款'
      }],
      payType: 0,
      tradeTypeOptions: [{
        value: '',
        label: '全部'
      }, {
        value: 1,
        label: '普通'
      }, {
        value: 3,
        label: '推荐'
      }, {
        value: 5,
        label: '团购'
      }],
      tradeType: 0,
      statusOptions: [{
        value: '',
        label: '全部'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_WAIT_PAY,
        label: '待付款'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_WAIT_GROUPON,
        label: '待拼团'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_WAIT_SHIP,
        label: '待发货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_WAIT_DELIVER,
        label: '待送货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_WAIT_TAKE,
        label: '待收货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_WAIT_COMMENT,
        label: '待评价'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_WAIT_RETURN,
        label: '待退货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_WAIT_RETURN_APPROVE,
        label: '退货待审'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_RETURN_APPROVE_FAILED,
        label: '退审失败'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_WAIT_RETURN_DELIVER,
        label: '待发退货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_WAIT_RECEIVE_RETURN,
        label: '待收退货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_RETURN_RECEIVE_FAILED,
        label: '退货失败'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].ord.STATUS_ORDER_FINISHED,
        label: '已完成'
      }],
      status: '',
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_14__["default"])(OrderSearchBox, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__["default"])(OrderSearchBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getOpOptionType",
    value: function getOpOptionType() {
      var opOptionType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].OP_OPTION_TYPE_HQ;
      if (this.params.menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_HQ_R_B2C || this.params.menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_R_B2C) {
        opOptionType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].OP_OPTION_TYPE_ALL;
      } else if (this.params.menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_R_B2C) {
        opOptionType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].OP_OPTION_TYPE_SUPPLIER;
      } else if (this.params.menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_OP_R_B2C) {
        opOptionType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].OP_OPTION_TYPE_SELF;
      } else if (this.params.menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2C) {
        opOptionType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].OP_OPTION_TYPE_SERVICE_STATION;
      }
      return opOptionType;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        operatorId = _this$state.operatorId,
        payTypeOptions = _this$state.payTypeOptions,
        payType = _this$state.payType,
        tradeTypeOptions = _this$state.tradeTypeOptions,
        tradeType = _this$state.tradeType,
        statusOptions = _this$state.statusOptions,
        status = _this$state.status;
      var menuParam = this.params.menuParam;
      var labelKey = 'label';
      var valueKey = 'value';
      var labelKeyOperator = 'second';
      var valueKeyOperator = 'first';
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        that: this,
        topNavBarTitle: '查找订单',
        bottomLabel4: '查找',
        bottomFunc4: this.search,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_component_OperatorSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
          mode: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_NEW,
          optionType: this.opOptionType,
          checkedId: operatorId,
          that: this
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: 'commodityName',
          label: this.labels.commodityName,
          type: 'text',
          value: this.state.commodityName,
          onChange: this.onInputChanged
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: 'supplierName',
          label: this.labels.supplierName,
          type: 'text',
          value: this.state.supplierName,
          onChange: this.onInputChanged
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
          options: payTypeOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: payType,
          onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].onValueChange(this, 'payType'),
          label: this.labels.payType
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
          options: tradeTypeOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: tradeType,
          onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].onValueChange(this, 'tradeType'),
          label: this.labels.tradeType
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
          options: statusOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: status,
          onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].onValueChange(this, 'status'),
          label: this.labels.status
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (OrderSearchBox);

/***/ }),

/***/ "./src/pkgorder/page/order/OrderSearchBox.tsx":
/*!****************************************************!*\
  !*** ./src/pkgorder/page/order/OrderSearchBox.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_order_OrderSearchBox_OrderSearchBox_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderSearchBox!./OrderSearchBox.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderSearchBox!./src/pkgorder/page/order/OrderSearchBox.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_order_OrderSearchBox_OrderSearchBox_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgorder/page/order/OrderSearchBox', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_order_OrderSearchBox_OrderSearchBox_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","sub-common/df5d0bc6f71f596ab4b59a770bc05ed1","sub-common/5ef06e55aec97a834e922531eb96b33c","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgorder/page/order/OrderSearchBox.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=OrderSearchBox.js.map