"use strict";require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgorder/page/others/ShipDetail"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/others/ShipDetail!./src/pkgorder/page/others/ShipDetail.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/others/ShipDetail!./src/pkgorder/page/others/ShipDetail.tsx ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_BaseView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/view/BaseView */ "./src/view/BaseView.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);





var _dec, _class;










var ShipDetail = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_9__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_9__.observer)(_class = /*#__PURE__*/function (_React$Component) {
  function ShipDetail(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, ShipDetail);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, ShipDetail, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "labels", {
      totalAmount: '营业额',
      cashPayAmount: '现金支付',
      platformFreight: '履约服务费',
      awardAmount: "奖励金额",
      platformAmount: '技术服务费',
      supplierAmount: '供应商金额'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.state = {
      entity: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_13__["default"])(ShipDetail, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_14__["default"])(ShipDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.load();
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var param = {};
      var orderIds = this.props.store.orderStore.orderIds;
      param = orderIds;
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this2, result)) {
          _this2.setState({
            entity: result.body
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this2, result, true);
      };
      param = JSON.stringify(param);
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(this, "/od/pub/b2c/common/ship/search", param, succ, err);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$entity = this.state.entity,
        totalAmount = _this$state$entity.totalAmount,
        cashPayAmount = _this$state$entity.cashPayAmount,
        platformFreight = _this$state$entity.platformFreight,
        awardAmount = _this$state$entity.awardAmount,
        platformAmount = _this$state$entity.platformAmount,
        supplierAmount = _this$state$entity.supplierAmount,
        orders = _this$state$entity.orders;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        that: this,
        topNavBarTitle: '运单明细',
        bottomLabel4: '关闭',
        bottomFunc4: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].goBack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'totalAmount',
            label: this.labels.totalAmount,
            type: 'text',
            value: totalAmount,
            disabled: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'cashPayAmount',
            label: this.labels.cashPayAmount,
            type: 'text',
            value: cashPayAmount,
            disabled: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'platformFreight',
            label: this.labels.platformFreight,
            type: 'text',
            value: platformFreight,
            disabled: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'awardAmount',
            label: this.labels.awardAmount,
            type: 'text',
            value: awardAmount,
            disabled: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'platformAmount',
            label: this.labels.platformAmount,
            type: 'text',
            value: platformAmount,
            disabled: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'supplierAmount',
            label: this.labels.supplierAmount,
            type: 'text',
            value: supplierAmount,
            disabled: true
          })]
        }), orders && orders.map(function (item, idx) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_view_BaseView__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
              width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
              children: item.commodityName
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
              borderWidth: 1,
              borderColor: [[255, 255, 255, 0.5], [25, 114, 210, 0.5], [25, 114, 210, 0.5], [25, 114, 210, 0.5]],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
                width: -30,
                children: ["\u4EF7\u683C:\xA0", item.price]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
                width: -30,
                children: ["\u6570\u91CF:\xA0", item.finalQty]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
                width: -40,
                children: ["\u8FD0\u8D39:\xA0", item.supplierFreight]
              })]
            })]
          });
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component))) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (ShipDetail);

/***/ }),

/***/ "./src/pkgorder/page/others/ShipDetail.tsx":
/*!*************************************************!*\
  !*** ./src/pkgorder/page/others/ShipDetail.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_others_ShipDetail_ShipDetail_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/others/ShipDetail!./ShipDetail.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/others/ShipDetail!./src/pkgorder/page/others/ShipDetail.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_others_ShipDetail_ShipDetail_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgorder/page/others/ShipDetail', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_others_ShipDetail_ShipDetail_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgorder/page/others/ShipDetail.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=ShipDetail.js.map