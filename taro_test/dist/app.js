"use strict";
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react-dom_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-RYHU52L4_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-XDFXK7K5_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-DXSFDNQZ_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_linaria_react_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_taro_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_jsx-runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_js.js");

require("./common");
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var _store_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/address */ "./src/store/address.ts");
/* harmony import */ var _store_commodity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/commodity */ "./src/store/commodity.ts");
/* harmony import */ var _store_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/common */ "./src/store/common.ts");
/* harmony import */ var _store_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/order */ "./src/store/order.ts");
/* harmony import */ var _store_payment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/payment */ "./src/store/payment.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);















var store = {
  addressStore: _store_address__WEBPACK_IMPORTED_MODULE_3__["default"],
  commodityStore: _store_commodity__WEBPACK_IMPORTED_MODULE_4__["default"],
  commonStore: _store_common__WEBPACK_IMPORTED_MODULE_5__["default"],
  orderStore: _store_order__WEBPACK_IMPORTED_MODULE_6__["default"],
  paymentStore: _store_payment__WEBPACK_IMPORTED_MODULE_7__["default"]
};
var App = /*#__PURE__*/function (_Component) {
  function App() {
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, App);
    return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, App, arguments);
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__["default"])(App, _Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrPosition();
      if ("weapp" == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TARO_ENV_WEAPP) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createWechat(this);
      }
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}

    // this.props.children 就是要渲染的页面
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(mobx_react__WEBPACK_IMPORTED_MODULE_13__.Provider, {
        store: store,
        children: this.props.children
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./app.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);











var config = {"pages":["page/mall/Home","page/mall/Mall","page/mall/ShoppingCart","page/subject/Merchant","page/member/Mine"],"subPackages":[{"root":"pkgart","pages":["page/IdeaEntity","page/IdeaList","page/IdeaSearchBox","page/DetectionEntity","page/DetectionSearchBox","page/DetectionList"]},{"root":"pkgcommodity","pages":["page/commodity/CommodityPublish","page/commodity/CommodityList","page/commodity/CommoditySearchBox"]},{"root":"pkglogistics","pages":["page/logistics/AddressEntity","page/logistics/AddressList","page/logistics/FreightTemplateEntity","page/logistics/FreightTemplateList","page/logistics/FreightTempSearchBox","page/logistics/ShipMap"]},{"root":"pkgorder","pages":["page/order/OrderPlace","page/order/OrderEntity","page/order/OrderSearchBox","page/order/OrderList","page/order/OrderViewBox","page/order/OrderViewList","page/others/ShipEntity","page/others/ShipDetail","page/others/ShipSearchBox","page/others/ShipList","page/payment/Payment","page/payment/Payment3","page/payment/Payment5"]},{"root":"pkgfinance","pages":["page/finance/CashDepositEntity","page/finance/CashDepositSearchBox","page/finance/CashDepositList","page/finance/WithdrawEntity","page/finance/WithdrawSearchBox","page/finance/WithdrawList"]},{"root":"pkgmall","pages":["page/mall/Chatting","page/mall/CommodityDetail","page/mall/CommoditySearchBox","page/mall/CommodityListByCategory","page/mall/CommodityListByKeyword","page/mall/MessageList","page/mall/MessageSearch","page/mall/ShowListByType","page/mall/ShopHome"]},{"root":"pkgsubject","pages":["page/member/Login","page/member/Register","page/member/CommissionBelongtoEntity","page/servicestation/ServiceStationSearchBox","page/servicestation/ServiceStationEntity","page/servicestation/ServiceStationList","page/supplier/Supplier2OperatorEntity","page/supplier/Supplier2OperatorList","page/supplier/SupplierSearchBox","page/supplier/SupplierEntity","page/supplier/SupplierList","page/supplier/SupplierVisitSearch","page/supplier/SupplierVisitEntity","page/supplier/SupplierVisitList","page/others/OrgJoinApplication"]}],"window":{"backgroundTextStyle":"light","navigationStyle":"custom","backgroundColor":"#eeeeee","navigationBarBackgroundColor":"#1bcaca","navigationBarTitleText":"柏君商城","navigationBarTextStyle":"black"},"tabBar":{"custom":false,"color":"#000000","selectedColor":"#DC143C","backgroundColor":"#ffffff","list":[{"pagePath":"page/mall/Home","selectedIconPath":"./static/images/p/home_selected.png","iconPath":"./static/images/p/home.png","text":"首页"},{"pagePath":"page/mall/Mall","selectedIconPath":"./static/images/p/mall_selected.png","iconPath":"./static/images/p/mall.png","text":"商城"},{"pagePath":"page/mall/ShoppingCart","selectedIconPath":"./static/images/p/cart_selected.png","iconPath":"./static/images/p/cart.png","text":"购物车"},{"pagePath":"page/subject/Merchant","selectedIconPath":"./static/images/p/merchant_selected.png","iconPath":"./static/images/p/merchant.png","text":"商家"},{"pagePath":"page/member/Mine","selectedIconPath":"./static/images/p/mine_selected.png","iconPath":"./static/images/p/mine.png","text":"我"}]},"plugins":{"routePlan":{"version":"1.0.19","provider":"wx50b5593e81dd937a"}},"requiredPrivateInfos":["getLocation"],"permission":{"scope.userLocation":{"desc":"你的位置信息将用于送货"}}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__.createReactApp)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], react__WEBPACK_IMPORTED_MODULE_5__, (react_dom__WEBPACK_IMPORTED_MODULE_6___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905},
  baseFontSize: 20,
  unitPrecision: undefined,
  targetUnit: undefined
})


/***/ }),

/***/ "./src/store/address.ts":
/*!******************************!*\
  !*** ./src/store/address.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");

var addressStore = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({
  addressList: [],
  setAddressList: function setAddressList(addressList) {
    this.addressList = addressList;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (addressStore);

/***/ }),

/***/ "./src/store/commodity.ts":
/*!********************************!*\
  !*** ./src/store/commodity.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");

var commodityStore = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({
  commodityId: '',
  setCommodityId: function setCommodityId(commodityId) {
    this.commodityId = commodityId;
  },
  category: [],
  setCategory: function setCategory(category) {
    this.category = category;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (commodityStore);

/***/ }),

/***/ "./src/store/common.ts":
/*!*****************************!*\
  !*** ./src/store/common.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");

var commonStore = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({
  topNavBarTitle: '',
  orderType: 0,
  onlinePayAmount: 0,
  setTopNavBarTitle: function setTopNavBarTitle(topNavBarTitle) {
    this.topNavBarTitle = topNavBarTitle;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (commonStore);

/***/ }),

/***/ "./src/store/order.ts":
/*!****************************!*\
  !*** ./src/store/order.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");

var orderStore = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({
  b2bGlobalQty: [],
  b2bGlobalSpecIds: [],
  b2cGlobalQty: [],
  b2cGlobalSpecIds: [],
  b2bRegionQty: [],
  b2bRegionSpecIds: [],
  b2cRegionQty: [],
  b2cRegionSpecIds: [],
  mallType: 0,
  buyImmediately: 0,
  orderIds: [],
  setB2bGlobalQty: function setB2bGlobalQty(b2bGlobalQty) {
    this.b2bGlobalQty = b2bGlobalQty;
  },
  setB2bGlobalSpecIds: function setB2bGlobalSpecIds(b2bGlobalSpecIds) {
    this.b2bGlobalSpecIds = b2bGlobalSpecIds;
  },
  setB2cGlobalQty: function setB2cGlobalQty(b2cGlobalQty) {
    this.b2cGlobalQty = b2cGlobalQty;
  },
  setB2cGlobalSpecIds: function setB2cGlobalSpecIds(b2cGlobalSpecIds) {
    this.b2cGlobalSpecIds = b2cGlobalSpecIds;
  },
  setB2bRegionQty: function setB2bRegionQty(b2bRegionQty) {
    this.b2bRegionQty = b2bRegionQty;
  },
  setB2bRegionSpecIds: function setB2bRegionSpecIds(b2bRegionSpecIds) {
    this.b2bRegionSpecIds = b2bRegionSpecIds;
  },
  setB2cRegionQty: function setB2cRegionQty(b2cRegionQty) {
    this.b2cRegionQty = b2cRegionQty;
  },
  setB2cRegionSpecIds: function setB2cRegionSpecIds(b2cRegionSpecIds) {
    this.b2cRegionSpecIds = b2cRegionSpecIds;
  },
  setMallType: function setMallType(mallType) {
    this.mallType = mallType;
  },
  setBuyImmediately: function setBuyImmediately(buyImmediately) {
    this.buyImmediately = buyImmediately;
  },
  setOrderIds: function setOrderIds(orderIds) {
    this.orderIds = orderIds;
  },
  getOrderIds: function getOrderIds() {
    return this.orderIds;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (orderStore);

/***/ }),

/***/ "./src/store/payment.ts":
/*!******************************!*\
  !*** ./src/store/payment.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");

var paymentStore = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({
  payments: {},
  orderType: 0,
  onlinePayAmount: 0,
  setPayments: function setPayments(payments) {
    this.payments = payments;
  },
  setOrderType: function setOrderType(orderType) {
    this.orderType = orderType;
  },
  setOnlinePayAmount: function setOnlinePayAmount(onlinePayAmount) {
    this.onlinePayAmount = onlinePayAmount;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (paymentStore);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/app.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map