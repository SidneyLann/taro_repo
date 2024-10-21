"use strict";require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");require("../../sub-common/df5d0bc6f71f596ab4b59a770bc05ed1.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgorder/page/order/OrderEntity"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderEntity!./src/pkgorder/page/order/OrderEntity.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderEntity!./src/pkgorder/page/order/OrderEntity.tsx ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/Statuses */ "./src/common/Statuses.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/form/SelectInput */ "./src/form/SelectInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);














var OrderEntity = /*#__PURE__*/function (_React$Component) {
  function OrderEntity(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, OrderEntity);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, OrderEntity, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "currOrgId", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "currOrgType", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "labels", {
      paymentId: '订单号',
      commodityName: '商品名称',
      supplierName: '供应商名称',
      finalQty: '交易量',
      price: '价格',
      supplierFreight: '运费',
      totalAmount: '总金额',
      onlineAmount: '在线支付金额',
      payType: '支付类型',
      tradeType: '交易类型',
      status: '状态',
      updateTime: '更新时间'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "onIdChange", function (name) {
      return function (item) {
        var value = item.id;
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, name, value));
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "payTypeChanged", function (event) {
      var idx = event.detail.value;
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({
        payType: idx
      }, "payType", _this.state.payTypeOptions[idx].value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "tradeTypeChanged", function (event) {
      var idx = event.detail.value;
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({
        tradeType: idx
      }, "tradeType", _this.state.tradeTypeOptions[idx].value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "statusChanged", function (event) {
      var idx = event.detail.value;
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({
        status: idx
      }, "status", _this.state.statusOptions[idx].value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, name, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "previous", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].goBack();
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.currOrgId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgId');
    _this.currOrgType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgType');
    _this.state = {
      disabled: true,
      operatorId: '',
      operatorOptions: [],
      paymentId: '',
      commodityName: '',
      supplierName: '',
      finalQty: 0,
      price: 0,
      supplierFreight: 0,
      totalAmount: 0,
      onlineAmount: 0,
      payTypeOptions: [{
        value: 11,
        label: '微信支付'
      }, {
        value: 91,
        label: '货到付款'
      }],
      payType: 0,
      tradeTypeOptions: [{
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
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_PAY,
        label: '待付款'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_GROUPON,
        label: '待拼团'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_SHIP,
        label: '待发货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_DELIVER,
        label: '待送货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_TAKE,
        label: '待收货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_COMMENT,
        label: '待评价'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_RETURN,
        label: '待退货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_RETURN_APPROVE_FAILED,
        label: '退审失败'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_RETURN_REFUND,
        label: '待收退货'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_SETTLE,
        label: '待结算'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_RETURN_RECEIVE_FAILED,
        label: '退货失败'
      }, {
        value: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_ORDER_SETTLED,
        label: '已结算'
      }],
      status: '',
      updateTime: ''
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_12__["default"])(OrderEntity, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__["default"])(OrderEntity, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this2, result)) {
          _this2.preData = result.body;
          var _result$body = result.body,
            paymentId = _result$body.paymentId,
            commodityName = _result$body.commodityName,
            supplierName = _result$body.supplierName,
            finalQty = _result$body.finalQty,
            price = _result$body.price,
            supplierFreight = _result$body.supplierFreight,
            totalAmount = _result$body.totalAmount,
            onlineAmount = _result$body.onlineAmount,
            payType = _result$body.payType,
            tradeType = _result$body.tradeType,
            status = _result$body.status,
            updateTime = _result$body.updateTime;

          //        const payTypeOptions = this.state.payTypeOptions;
          //        const payType = payTypeOptions.findIndex(item => item.value == payType);
          //        const tradeTypeOptions = this.state.tradeTypeOptions;
          //        const tradeType = tradeTypeOptions.findIndex(item => item.value == tradeType);
          //        const statusOptions = this.state.statusOptions;
          //        const status = statusOptions.findIndex(item => item.value == status);

          _this2.setState({
            paymentId: paymentId,
            commodityName: commodityName,
            supplierName: supplierName,
            finalQty: finalQty,
            price: price,
            supplierFreight: supplierFreight,
            totalAmount: totalAmount,
            onlineAmount: onlineAmount,
            payType: payType,
            tradeType: tradeType,
            status: status
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this2, result, true);
      };
      var uri = "/od/pub/b2b/global/ord/load/search";
      if (this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/od/pub/b2c/global/ord/load/search";
      if (this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/od/pub/b2b/region/ord/load/search";
      if (this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/od/pub/b2c/region/ord/load/search";
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpGet(this, "".concat(uri, "?id=").concat(this.params.id), succ, err);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        mode = _this$state.mode,
        disabled = _this$state.disabled,
        payTypeOptions = _this$state.payTypeOptions,
        payType = _this$state.payType,
        tradeTypeOptions = _this$state.tradeTypeOptions,
        tradeType = _this$state.tradeType,
        statusOptions = _this$state.statusOptions,
        status = _this$state.status;
      var labelKey = 'label';
      var valueKey = 'value';
      var labelWidth = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_LABEL;
      var valueWidth = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_VALUE;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        topNavBarTitle: '订单明细',
        bottomLabel4: '关闭',
        bottomFunc4: this.previous,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'paymentId',
          label: this.labels.paymentId,
          type: 'text',
          value: this.state.paymentId,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'commodityName',
          label: this.labels.commodityName,
          type: 'text',
          value: this.state.commodityName,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'supplierName',
          label: this.labels.supplierName,
          type: 'text',
          value: this.state.supplierName,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'price',
          label: this.labels.price,
          type: 'text',
          value: this.state.price,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'finalQty',
          label: this.labels.finalQty,
          type: 'text',
          value: this.state.finalQty,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'supplierFreight',
          label: this.labels.supplierFreight,
          type: 'text',
          value: this.state.supplierFreight,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'totalAmount',
          label: this.labels.totalAmount,
          type: 'text',
          value: this.state.totalAmount,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'onlineAmount',
          label: this.labels.onlineAmount,
          type: 'text',
          value: this.state.onlineAmount,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          options: payTypeOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: payType,
          onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].onValueChange(this, 'payType'),
          label: this.labels.payType,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          options: tradeTypeOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: tradeType,
          onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].onValueChange(this, 'tradeType'),
          label: this.labels.tradeType,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          options: statusOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: status,
          onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].onValueChange(this, 'status'),
          label: this.labels.status,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), mode == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_VIEW && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: 'updateTime',
          label: this.labels.updateTime,
          type: 'text',
          value: this.state.updateTime,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (OrderEntity);

/***/ }),

/***/ "./src/pkgorder/page/order/OrderEntity.tsx":
/*!*************************************************!*\
  !*** ./src/pkgorder/page/order/OrderEntity.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_order_OrderEntity_OrderEntity_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderEntity!./OrderEntity.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderEntity!./src/pkgorder/page/order/OrderEntity.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_order_OrderEntity_OrderEntity_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgorder/page/order/OrderEntity', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_order_OrderEntity_OrderEntity_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","sub-common/df5d0bc6f71f596ab4b59a770bc05ed1","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgorder/page/order/OrderEntity.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=OrderEntity.js.map