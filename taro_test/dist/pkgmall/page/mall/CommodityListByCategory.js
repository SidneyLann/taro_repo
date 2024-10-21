"use strict";require("../../sub-vendors.js");require("../../sub-common/a17657dccca7e779c4fac325d343ad00.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgmall/page/mall/CommodityListByCategory"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityListByCategory!./src/pkgmall/page/mall/CommodityListByCategory.tsx":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityListByCategory!./src/pkgmall/page/mall/CommodityListByCategory.tsx ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var _CmmdListTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CmmdListTemplate */ "./src/pkgmall/page/mall/CmmdListTemplate.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);











var CommodityListByCategory = /*#__PURE__*/function (_React$Component) {
  function CommodityListByCategory(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CommodityListByCategory);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, CommodityListByCategory, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "tradeType", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currMallType'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "operatorId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOperatorId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "sendRequest", function () {
      var uri = '';
      if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B == _this.tradeType) {
        uri = '/cm/pub/b2b/global/commodity/search';
      } else if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C == _this.tradeType) {
        uri = '/cm/pub/b2c/global/commodity/search';
      } else if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B == _this.tradeType) {
        uri = '/cm/pub/b2b/region/commodity/search';
      } else if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C == _this.tradeType) {
        uri = '/cm/pub/b2c/region/commodity/search';
      }
      var succ = function succ(result) {
        var commodities = result.body;
        var gridArr = [];
        var picUri = '';
        commodities.map(function (commodity) {
          picUri = commodity.id ? JSON.parse(commodity.bigImageUri)[0] : commodity.commodityPicUri;
          gridArr.push({
            commodityId: commodity.commodityId || commodity.id,
            commodityPicUri: picUri,
            value: commodity.commodityName,
            price: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].currFormat(commodity.price),
            awardRate: commodity.awardRate
          });
        });
        _this.setState({
          data: gridArr
        });
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      if (!_this.operatorId) {
        _this.operatorId = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ID_NO;
      }
      var supplierId = _this.params.supplierId;
      var category1Id = _this.params.category1Id;
      var category2Id = _this.params.category2Id;
      var category3Id = _this.params.category3Id;
      var param = {
        operatorId: _this.operatorId,
        supplierId: supplierId,
        category1Id: category1Id,
        category2Id: category2Id,
        category3Id: category3Id,
        status: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COMMODITY_STATUS_ON_SALE,
        sorting: sorting,
        pageNo: _this.state.pageNo,
        pageSize: _this.state.pageSize
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(param), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "handleSortChanged", function (sort) {
      _this.setState({
        sorting: sort
      }, function () {
        return _this.sendRequest();
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.state = {
      data: [],
      sorting: 1
    };
    _this.sendRequest();
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__["default"])(CommodityListByCategory, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__["default"])(CommodityListByCategory, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        that: this,
        topNavBarTitle: "\u5546\u54C1\u5217\u8868",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CmmdListTemplate__WEBPACK_IMPORTED_MODULE_4__["default"], {
          data: this.state.data,
          onSortChange: function onSortChange(sort) {
            return _this2.handleSortChanged(sort);
          }
        })
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (CommodityListByCategory);

/***/ }),

/***/ "./src/pkgmall/page/mall/CommodityListByCategory.tsx":
/*!***********************************************************!*\
  !*** ./src/pkgmall/page/mall/CommodityListByCategory.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_CommodityListByCategory_CommodityListByCategory_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityListByCategory!./CommodityListByCategory.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityListByCategory!./src/pkgmall/page/mall/CommodityListByCategory.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_CommodityListByCategory_CommodityListByCategory_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgmall/page/mall/CommodityListByCategory', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_CommodityListByCategory_CommodityListByCategory_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pkgmall/sub-vendors","sub-common/a17657dccca7e779c4fac325d343ad00","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgmall/page/mall/CommodityListByCategory.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=CommodityListByCategory.js.map