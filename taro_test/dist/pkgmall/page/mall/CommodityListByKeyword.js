"use strict";require("../../sub-vendors.js");require("../../sub-common/df5d0bc6f71f596ab4b59a770bc05ed1.js");require("../../sub-common/a17657dccca7e779c4fac325d343ad00.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgmall/page/mall/CommodityListByKeyword"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityListByKeyword!./src/pkgmall/page/mall/CommodityListByKeyword.tsx":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityListByKeyword!./src/pkgmall/page/mall/CommodityListByKeyword.tsx ***!
  \**************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/Statuses */ "./src/common/Statuses.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var _CmmdListTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CmmdListTemplate */ "./src/pkgmall/page/mall/CmmdListTemplate.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);












var CommodityListByKeyword = /*#__PURE__*/function (_React$Component) {
  function CommodityListByKeyword(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, CommodityListByKeyword);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, CommodityListByKeyword, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "searchMallCommodity", function () {
      var mallType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currMallType');
      var operatorId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOperatorId');
      if (!operatorId) {
        operatorId = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ID_NO;
      }
      var supplierId = _this.params.supplierId;
      var commodityName = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].decode(_this.params.commodityName);
      var uri = '';
      if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B == mallType) {
        uri = '/cm/pub/b2b/global/commodity/search';
      } else if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C == mallType) {
        uri = '/cm/pub/b2c/global/commodity/search';
      } else if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B == mallType) {
        uri = '/cm/pub/b2b/region/commodity/search';
      } else if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C == mallType) {
        uri = '/cm/pub/b2c/region/commodity/search';
      }
      var param = {
        operatorId: operatorId,
        commodityName: commodityName,
        deliveryType: _this.params.deliveryType,
        receiptAddrId: _this.params.receiptAddrId,
        status: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].cmd.STATUS_ON_SALE,
        pageNo: _this.state.pageNo,
        sorting: _this.state.sorting
      };
      if (supplierId) param.supplierId = supplierId;
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          var commodities = result.body;
          if (commodities.length == 0) {
            tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '没有搜索到商品，您可以切换到其它商城(主页-->商城-->切换商城)；或切换到其它收货地址；或推荐朋友开店供货(您会有提成)');
            return;
          }
          var gridArr = [];
          var picUri = '';
          commodities.map(function (commodity) {
            picUri = commodity.id ? JSON.parse(commodity.bigImageUri)[0] : commodity.commodityPicUri;
            gridArr.push({
              commodityId: commodity.commodityId || commodity.id,
              commodityPicUri: picUri,
              commodityName: commodity.commodityName,
              price: commodity.price,
              awardRate: commodity.awardRate,
              presentRate: commodity.presentRate,
              voucherRate: commodity.voucherRate
            });
          });
          _this.setState({
            data: gridArr
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(param), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleSortChanged", function (sort) {
      _this.setState({
        sorting: sort
      }, function () {
        return _this.searchMallCommodity();
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.state = {
      data: [],
      sorting: 1
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__["default"])(CommodityListByKeyword, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(CommodityListByKeyword, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.searchMallCommodity();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        topNavBarTitle: "\u5173\u952E\u5B57\u641C\u7D22",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CmmdListTemplate__WEBPACK_IMPORTED_MODULE_5__["default"], {
          data: this.state.data,
          onSortChange: function onSortChange(sort) {
            return _this2.handleSortChanged(sort);
          }
        })
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (CommodityListByKeyword);

/***/ }),

/***/ "./src/pkgmall/page/mall/CommodityListByKeyword.tsx":
/*!**********************************************************!*\
  !*** ./src/pkgmall/page/mall/CommodityListByKeyword.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_CommodityListByKeyword_CommodityListByKeyword_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityListByKeyword!./CommodityListByKeyword.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityListByKeyword!./src/pkgmall/page/mall/CommodityListByKeyword.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_CommodityListByKeyword_CommodityListByKeyword_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgmall/page/mall/CommodityListByKeyword', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_CommodityListByKeyword_CommodityListByKeyword_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pkgmall/sub-vendors","sub-common/df5d0bc6f71f596ab4b59a770bc05ed1","sub-common/a17657dccca7e779c4fac325d343ad00","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgmall/page/mall/CommodityListByKeyword.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=CommodityListByKeyword.js.map