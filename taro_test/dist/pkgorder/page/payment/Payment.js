"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgorder/page/payment/Payment"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/payment/Payment!./src/pkgorder/page/payment/Payment.tsx":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/payment/Payment!./src/pkgorder/page/payment/Payment.tsx ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/layout/ColumnLayout */ "./src/layout/ColumnLayout.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_form_CheckBoxes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/form/CheckBoxes */ "./src/form/CheckBoxes.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/form/GeneralButton */ "./src/form/GeneralButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);





var _dec, _class;













var Payment = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_12__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_12__.observer)(_class = /*#__PURE__*/function (_React$Component) {
  function Payment(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this, Payment);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_14__["default"])(this, Payment, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "payFunc", function (paymentId) {
      return function (event) {
        console.log('paymentId=' + paymentId);
        var uri =  false ? 0 : tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].PAYMENT_PAY3;
        //JsUtil.go2Page(uri + '?paymentId=' + paymentId + '&orderType=' + orderType + '&onlineAmount='+onlinePayAmount);
        if ("weapp" != tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TARO_ENV_WEAPP) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '支付通道未接入, 请使用微信小程序支付');
          return;
        }
        var succ = function succ(result) {
          if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
            var item = result.body;
            console.log(item);
            wx.requestPayment((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])({
              "timeStamp": item.timeStamp,
              "nonceStr": item.nonceStr,
              "package": "prepay_id=" + item.prepay_id,
              "signType": "RSA",
              "paySign": item.paySign
            }, "signType", "RSA"), "success", function success(res) {}), "fail", function fail(res) {}), "complete", function complete(res) {}));
          }
        };
        var err = function err(result) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true, true);
        };
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, '/fn/pub/payment/wx/jsapi/order/search?payType=1&paymentId=' + paymentId, null, succ, err);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.payments = _this.props.store.paymentStore.payments;
    _this.state = {};
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_16__["default"])(Payment, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_17__["default"])(Payment, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var options = [];
      options.push({
        value: 1,
        label: '微信支付'
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        topNavBarTitle: '支付',
        bottomLabel2: '关闭',
        bottomFunc2: function bottomFunc2(event) {
          return tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].goHome();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: 8
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: "\u4ED8\u6B3E\u65B9\u5F0F:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_form_CheckBoxes__WEBPACK_IMPORTED_MODULE_8__["default"], {
          name: "checkedList",
          value: [1],
          options: options
        }), this.payments.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(tsx_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
              width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
              height: 8,
              backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: "\u8BA2\u5355\u53F7:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: item.id
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
              height: 16
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: "\u5E94\u4ED8\u91D1\u989D:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
              justifyContent: 'space-between',
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
                color: "red",
                children: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].currFormat(item.onlineAmount)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
                type: "primary",
                size: "mini",
                width: 50,
                onClick: _this2.payFunc(item.id),
                children: "\u652F\u4ED8"
              }), "\xA0"]
            })]
          }, item.id);
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component))) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Payment);

/***/ }),

/***/ "./src/pkgorder/page/payment/Payment.tsx":
/*!***********************************************!*\
  !*** ./src/pkgorder/page/payment/Payment.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_payment_Payment_Payment_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/payment/Payment!./Payment.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/payment/Payment!./src/pkgorder/page/payment/Payment.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_payment_Payment_Payment_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgorder/page/payment/Payment', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_payment_Payment_Payment_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pkgorder/page/payment/Payment.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=Payment.js.map