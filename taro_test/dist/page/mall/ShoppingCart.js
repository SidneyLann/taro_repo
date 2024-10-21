"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["page/mall/ShoppingCart"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/ShoppingCart!./src/page/mall/ShoppingCart.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/ShoppingCart!./src/page/mall/ShoppingCart.tsx ***!
  \**************************************************************************************************************************/
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
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_view_TabPane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/view/TabPane */ "./src/view/TabPane.tsx");
/* harmony import */ var pkgmall_mall_ShoppingCartDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pkgmall/mall/ShoppingCartDetail */ "./src/pkgmall/page/mall/ShoppingCartDetail.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);














var ShoppingCart = /*#__PURE__*/function (_React$Component) {
  function ShoppingCart(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, ShoppingCart);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, ShoppingCart, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "currOrgType", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgType'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "selectedSpecIds", []);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "changeTab", function (value) {
      _this.setState({
        currTabIdx: value
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "onCheckBoxesAllChanged", function (name, selectedValues) {
      _this.setState({
        checkAll: selectedValues.length
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "setSelectedSpecIds", function (selectedSpecIds) {
      _this.selectedSpecIds = selectedSpecIds;
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "deleteFunc", function () {
      if (_this.selectedSpecIds.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请选中商品');
        return;
      }
      var currTabIdx = _this.state.currTabIdx;
      var uri = '';
      if (currTabIdx == 0) {
        uri = '/cm/pub/b2c/global/cart/spec/delete';
      } else if (currTabIdx == 1) {
        uri = '/cm/pub/b2c/region/cart/spec/delete';
      } else if (currTabIdx == 2) {
        if (_this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP) {
          uri = '/cm/pub/b2b/global/cart/spec/delete';
        } else if (_this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_ST) {
          uri = '/cm/pub/b2b/region/cart/spec/delete';
        }
      }
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          _this.setState({
            refreshDetail: _this.state.refreshDetail + 1
          });

          //JsUtil.go2Tab(URI.MALL_HOME)
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(_this.selectedSpecIds), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "preOrder", function () {
      if (_this.selectedSpecIds.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请选中商品');
      } else {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].ORDER_PLACE_ORDER);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.state = {
      currTabIdx: 0,
      checkAll: 0,
      refreshDetail: 0,
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_12__["default"])(ShoppingCart, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__["default"])(ShoppingCart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('ShoppingCart componentDidMount');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('ShoppingCart componentWillUnmount');
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      console.log('ShoppingCart componentDidShow');
      this.setState({
        refreshDetail: this.state.refreshDetail + 1
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      console.log('ShoppingCart componentDidHide');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var tabOptions = [];
      var idx = 0;
      tabOptions.push({
        idx: idx++,
        title: '全国b2c',
        mallType: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C
      });
      tabOptions.push({
        idx: idx++,
        title: '地方b2c',
        mallType: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C
      });
      if (this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP) tabOptions.push({
        idx: idx++,
        title: '全国b2b',
        mallType: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B
      });
      if (this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_ST) tabOptions.push({
        idx: idx++,
        title: '地方b2b',
        mallType: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B
      });
      var currTabIdx = this.state.currTabIdx;
      var checkAll = this.state.checkAll;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        bottomLabel1: '全选',
        bottomFunc1: this.onCheckBoxesAllChanged,
        bottomLabel2: '删除',
        bottomFunc2: this.deleteFunc,
        bottomLabel4: '结算',
        bottomFunc4: this.preOrder,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_view_TabPane__WEBPACK_IMPORTED_MODULE_6__["default"], {
          currTabIdx: currTabIdx,
          tabOptions: tabOptions,
          onClick: this.changeTab,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_5__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(pkgmall_mall_ShoppingCartDetail__WEBPACK_IMPORTED_MODULE_7__["default"], {
            mallType: tabOptions[currTabIdx].mallType,
            setSelectedSpecIds: function setSelectedSpecIds(selectedSpecIds) {
              return _this2.setSelectedSpecIds(selectedSpecIds);
            },
            checkAll: checkAll,
            refreshDetail: this.state.refreshDetail
          })]
        })
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (ShoppingCart);

/***/ }),

/***/ "./src/page/mall/ShoppingCart.tsx":
/*!****************************************!*\
  !*** ./src/page/mall/ShoppingCart.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_mall_ShoppingCart_ShoppingCart_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/ShoppingCart!./ShoppingCart.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/ShoppingCart!./src/page/mall/ShoppingCart.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_mall_ShoppingCart_ShoppingCart_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'page/mall/ShoppingCart', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_mall_ShoppingCart_ShoppingCart_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/pkgmall/page/mall/ShoppingCartDetail.tsx":
/*!******************************************************!*\
  !*** ./src/pkgmall/page/mall/ShoppingCartDetail.tsx ***!
  \******************************************************/
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
/* harmony import */ var tsx_view_DivView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/view/DivView */ "./src/view/DivView.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_component_TaroModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/component/TaroModal */ "./src/component/TaroModal.tsx");
/* harmony import */ var tsx_view_LegenImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/view/LegenImage */ "./src/view/LegenImage.tsx");
/* harmony import */ var tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/form/CascadeBox */ "./src/form/CascadeBox.tsx");
/* harmony import */ var tsx_form_IntegerInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/form/IntegerInput */ "./src/form/IntegerInput.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);





var _dec, _class;













var ShoppingCartDetail = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_12__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_12__.observer)(_class = /*#__PURE__*/function (_React$Component) {
  function ShoppingCartDetail(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this, ShoppingCartDetail);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_14__["default"])(this, ShoppingCartDetail, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "memberId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "records", []);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "checkedAllList", []);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "checkedAllList2", []);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "getQty", function (records) {
      var checkedList = [];
      var checkedList2 = [];
      var quantityList2 = [];
      records.map(function (item, idx) {
        var checkedList22 = [];
        var quantityList22 = [];
        item.second.map(function (item2, idx2) {
          checkedList22.push(item2.specId);
          quantityList22.push(item2.quantity);
        });
        checkedList2.push([].concat(checkedList22));
        quantityList2.push(quantityList22);
        checkedList.push('' + idx);
      });
      _this.checkedAllList = checkedList;
      _this.checkedAllList2 = checkedList2;
      return quantityList2;
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "handleQuantity", function (idx, idxp) {
      return function (name, value) {
        var preQuantity2 = _this.state.quantityList2;
        preQuantity2[idxp][idx] = value;
        _this.setState({
          quantityList2: preQuantity2
        });
        _this.save2Store();
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "initCartStore", function (mallType) {
      var orderStore = _this.props.store.orderStore;
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B) {
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B);
      } else if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) {
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C);
      } else if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) {
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B);
      } else if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) {
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C);
      }
      orderStore.setB2bGlobalSpecIds([]);
      orderStore.setB2bGlobalQty([]);
      orderStore.setB2cGlobalSpecIds([]);
      orderStore.setB2cGlobalQty([]);
      orderStore.setB2bRegionSpecIds([]);
      orderStore.setB2bRegionQty([]);
      orderStore.setB2cRegionSpecIds([]);
      orderStore.setB2cRegionQty([]);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "save2Store", function () {
      var mallType = _this.props.mallType;
      _this.initCartStore(mallType);
      var checkedList2 = _this.state.checkedList2;
      var quantityList2 = _this.state.quantityList2;
      var checkedAllList2 = _this.checkedAllList2;
      var selectedSpecIds = [];
      var selectedSpecQty = [];
      checkedAllList2.map(function (item, indx) {
        item.map(function (item2, indx2) {
          if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].containEleValue(checkedList2, item2)) {
            selectedSpecIds.push(item2);
            selectedSpecQty.push(quantityList2[indx][indx2]);
          }
        });
      });
      var orderStore = _this.props.store.orderStore;
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B) {
        orderStore.setB2bGlobalSpecIds(selectedSpecIds);
        orderStore.setB2bGlobalQty(selectedSpecQty);
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B);
      } else if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) {
        orderStore.setB2cGlobalSpecIds(selectedSpecIds);
        orderStore.setB2cGlobalQty(selectedSpecQty);
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C);
      } else if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) {
        orderStore.setB2bRegionSpecIds(selectedSpecIds);
        orderStore.setB2bRegionQty(selectedSpecQty);
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B);
      } else if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) {
        orderStore.setB2cRegionSpecIds(selectedSpecIds);
        orderStore.setB2cRegionQty(selectedSpecQty);
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C);
      }
      _this.props.setSelectedSpecIds(selectedSpecIds);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "getCommodityOptions", function (records) {
      var options = [];
      var quantityList2 = _this.state.quantityList2;
      records.map(function (item, indx) {
        var options2 = [];
        item.second.map(function (item2, indx2) {
          options2.push({
            idxp: indx,
            value: item2.specId,
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_LegenImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
                src: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE_PREFIX + item2.commodityImageUri,
                width: 25,
                height: 25
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
                width: -75,
                children: item2.commodityName
              })]
            }),
            desc: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
              justifyContent: "space-around",
              width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
                color: "red",
                children: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].currFormat(item2.specPrice)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_form_IntegerInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
                name: indx + '-' + indx2,
                min: 1,
                max: 999,
                value: quantityList2[indx][indx2],
                onChange: _this.handleQuantity(indx2, indx)
              })]
            })
          });
        });
        var checkedList2 = _this.state.checkedList2;
        var checkedList2i = checkedList2.length > 0 ? checkedList2[indx] : [];
        var desc = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
          name: 'checkedList2-' + indx,
          options: options2,
          value: checkedList2i,
          onChange: _this.onCheckBox2Changed,
          idxp: indx
        });
        options.push({
          idxp: 0,
          value: '' + indx,
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
            alignItems: "center",
            children: item.first
          }),
          desc: desc
        });
      });
      return options;
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "onCheckBox1Changed", function (name, selectedValues, changedValue, idx, idxp) {
      var preValue = _this.state.checkedList;
      var preValue2 = _this.state.checkedList2;
      _this.getQty(_this.records);
      var checkedAllList2 = _this.checkedAllList2;
      if (selectedValues.find(function (e) {
        return e == changedValue;
      }) == undefined) preValue2[idx] = [];else preValue2[idx] = checkedAllList2[idx];
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])({}, name, selectedValues), "checkedList2", preValue2), function () {
        return _this.save2Store();
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "onCheckBox2Changed", function (name, selectedValues, changedValue, idx, idxp) {
      var preValue = _this.state.checkedList;
      var preValue2 = _this.state.checkedList2;
      preValue2[idxp] = selectedValues;
      var length = _this.checkedAllList2[idxp].length;
      if (selectedValues.length < length) {
        var isExists = false;
        preValue.map(function (item, indx) {
          if (item == idxp) isExists = true;
        });
        if (isExists) preValue = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].delEleByValue(preValue, '' + idxp);
      } else if (selectedValues.length == length) {
        var _isExists = false;
        preValue.map(function (item, indx) {
          if (item == idxp) _isExists = true;
        });
        if (!_isExists) preValue.push('' + idxp);
      }
      _this.setState({
        checkedList: preValue,
        checkedList2: preValue2
      }, function () {
        return _this.save2Store();
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.state = {
      checkedList: [],
      checkedList2: [],
      quantityList2: [],
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_16__["default"])(ShoppingCartDetail, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_17__["default"])(ShoppingCartDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('ShoppingCartDetail componentDidMount');
      this.fetchShopingCart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProps, preState, spanshot) {
      var _this2 = this;
      if (this.props.mallType != preProps.mallType || this.props.refreshDetail != preProps.refreshDetail) {
        this.fetchShopingCart();
      }
      var checkAll = this.props.checkAll;
      if (checkAll != preProps.checkAll) {
        if (checkAll == 0) {
          this.setState({
            checkedList: [],
            checkedList2: []
          }, function () {
            return _this2.save2Store();
          });
        } else if (this.checkedAllList) {
          this.getQty(this.records);
          this.setState({
            checkedList: this.checkedAllList,
            checkedList2: this.checkedAllList2
          }, function () {
            return _this2.save2Store();
          });
        }
      }
    }
  }, {
    key: "fetchShopingCart",
    value: function fetchShopingCart() {
      var _this3 = this;
      var path = '';
      if (this.props.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B) {
        path = 'b2b/global';
      } else if (this.props.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) {
        path = 'b2c/global';
      } else if (this.props.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) {
        path = 'b2b/region';
      } else if (this.props.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) {
        path = 'b2c/region';
      }
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this3, result)) {
          _this3.records = result.body;

          // this.setState({ [name]2: checkedList2, quantityList2: quantityList2 });
          _this3.setState({
            quantityList2: _this3.getQty(_this3.records)
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this3, result, true, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpGet(this, "/cm/pub/".concat(path, "/cart/2/search?memberId=").concat(this.memberId), succ, err);
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.getCommodityOptions(this.records);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(tsx_view_DivView__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
          name: "checkedList",
          options: options,
          value: this.state.checkedList,
          onChange: this.onCheckBox1Changed
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_component_TaroModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isOpened: this.state.messages.isOpened,
          messages: this.state.messages
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component))) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (ShoppingCartDetail);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/page/mall/ShoppingCart.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=ShoppingCart.js.map