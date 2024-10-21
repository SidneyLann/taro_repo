"use strict";require("../../sub-vendors.js");require("../../sub-common/112e8284cfb26df80d2edf645e76293b.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgmall/page/mall/CommodityDetail"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityDetail!./src/pkgmall/page/mall/CommodityDetail.tsx":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityDetail!./src/pkgmall/page/mall/CommodityDetail.tsx ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/layout/ColumnLayout */ "./src/layout/ColumnLayout.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/view/Level2View */ "./src/view/Level2View.tsx");
/* harmony import */ var tsx_view_TabPane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/view/TabPane */ "./src/view/TabPane.tsx");
/* harmony import */ var tsx_view_LegenImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/view/LegenImage */ "./src/view/LegenImage.tsx");
/* harmony import */ var tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tsx/form/GeneralButton */ "./src/form/GeneralButton.tsx");
/* harmony import */ var tsx_form_RadioBoxes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tsx/form/RadioBoxes */ "./src/form/RadioBoxes.tsx");
/* harmony import */ var tsx_form_IntegerInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tsx/form/IntegerInput */ "./src/form/IntegerInput.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_view_LinkTag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tsx/view/LinkTag */ "./src/view/LinkTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);







var _dec, _class;



















//import '@tarojs/taro/html5.css'

var CommodityDetail = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_17__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_17__.observer)(_class = /*#__PURE__*/function (_React$Component) {
  function CommodityDetail(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_18__["default"])(this, CommodityDetail);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_19__["default"])(this, CommodityDetail, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "label0", {
      memberId: '用户编号'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "currUserId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "operatorId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOperatorId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "loadCommodity", function (commodityId, mallType) {
      var uri;
      if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B == mallType) {
        uri = '/cm/pub/b2b/global/commodity/load/search';
      } else if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C == mallType) {
        uri = '/cm/pub/b2c/global/commodity/load/search';
      } else if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B == mallType) {
        uri = '/cm/pub/b2b/region/commodity/load/search';
      } else if (tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C == mallType) {
        uri = '/cm/pub/b2c/region/commodity/load/search';
      }
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          var commodity = result.body;
          var commoditySpecs = commodity.commoditySpecs,
            bigImageUri = commodity.bigImageUri,
            attributes = commodity.attributes;
          var specMap = new Map();
          var selectedSpecCombinationMap = new Map();
          var _iterator = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_21__["default"])(commoditySpecs),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var spec = _step.value;
              var specValues = JSON.parse(spec.specValues);
              var _iterator2 = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_21__["default"])(specValues),
                _step2;
              try {
                var _loop = function _loop() {
                  var value = _step2.value;
                  if (specMap.has(value.ni)) {
                    var mapList = specMap.get(value.ni);
                    if (!mapList.find(function (e) {
                      return e.vi === value.vi;
                    })) {
                      specMap.get(value.ni).push(value);
                    }
                  } else {
                    selectedSpecCombinationMap.set(value.ni, value.vi);
                    specMap.set(value.ni, [value]);
                  }
                };
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          _this.setState({
            commodity: commodity,
            commodityName: commodity.commodityName,
            bigImageUri: JSON.parse(bigImageUri),
            attributes: JSON.parse(attributes).filter(function (e) {
              return !!e;
            }),
            descriptions: commodity.descriptions,
            specMap: specMap,
            selectedSpecCombinationMap: selectedSpecCombinationMap
          });
          if (commodity.tradeType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TRADE_TYPE_GROUPON) {
            _this.setRemainTime();
          }
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpGet(_this, "".concat(uri, "?id=").concat(commodityId), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "onSpecOptionClick", function (value) {
      return function (event) {
        var selectedSpecCombinationMap = _this.state.selectedSpecCombinationMap;
        var nextSpecSelected = selectedSpecCombinationMap;
        nextSpecSelected.set(value, event.detail.value);
        _this.setState({
          selectedSpecCombinationMap: nextSpecSelected
        });
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "getCurrentSpecList", function () {
      var _this$state = _this.state,
        specMap = _this$state.specMap,
        selectedSpecCombinationMap = _this$state.selectedSpecCombinationMap;
      var specNamesAndValuesToShow = [];
      var _iterator3 = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_21__["default"])(specMap),
        _step3;
      try {
        var _loop2 = function _loop2() {
          var _step3$value = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_22__["default"])(_step3.value, 2),
            ni = _step3$value[0],
            values = _step3$value[1];
          var selectedSpecValueId = selectedSpecCombinationMap.get(ni);
          var options = [];
          values.map(function (item) {
            return options.push({
              label: item.v,
              value: item.vi
            });
          });
          specNamesAndValuesToShow.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
              children: [values[0].n, ": "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_form_RadioBoxes__WEBPACK_IMPORTED_MODULE_12__["default"], {
              options: options,
              value: selectedSpecValueId,
              onChange: _this.onSpecOptionClick(ni)
            })]
          }, ni));
        };
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return specNamesAndValuesToShow;
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "getSelectedSpecEntityFromcommoditySpecs", function () {
      if (!_this.state.commodity) return {};
      var selectedSpecCombinationMap = _this.state.selectedSpecCombinationMap;
      var commoditySpecs = _this.state.commodity.commoditySpecs;
      return commoditySpecs.find(function (item) {
        var currentSpecValues = JSON.parse(item.specValues);
        var _iterator4 = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_21__["default"])(currentSpecValues),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var specValue = _step4.value;
            if (selectedSpecCombinationMap.get(specValue.ni) !== specValue.vi) {
              return false;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        return true;
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "handleQuantity", function (inventories) {
      return function (name, value) {
        var quantity = value;
        if (quantity < 1) quantity = 1;else if (quantity - inventories.inventories > 0) quantity = inventories.inventories;
        _this.setState({
          buyQuantity: quantity
        });
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "initCartStore", function () {
      var orderStore = _this.props.store.orderStore;
      if (_this.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B) {
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B);
      } else if (_this.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) {
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C);
      } else if (_this.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) {
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B);
      } else if (_this.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) {
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
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "buyStraightway", function () {
      //if (!JsUtil.checkLogin(this, '/od/pub/create')) return;
      var _this$getSelectedSpec = _this.getSelectedSpecEntityFromcommoditySpecs(),
        id = _this$getSelectedSpec.id;
      var quantity = _this.state.buyQuantity;
      var mallType = _this.state.commodity.mallType;
      _this.initCartStore();

      //mallType = (mallType == cnst.MALL_TYPE_G_B2B || mallType == cnst.MALL_TYPE_R_B2B) ? cnst.MALL_TYPE_G_B2B : cnst.MALL_TYPE_G_B2C;

      var b2bGlobalQty = [];
      var b2bGlobalSpecIds = [];
      var b2cGlobalQty = [];
      var b2cGlobalSpecIds = [];
      var B2bRegionQty = [];
      var B2bRegionSpecIds = [];
      var b2cRegionQty = [];
      var b2cRegionSpecIds = [];
      var orderStore = _this.props.store.orderStore;
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B) {
        b2bGlobalQty.push(quantity);
        b2bGlobalSpecIds.push(id);
        orderStore.setB2bGlobalSpecIds(b2bGlobalSpecIds);
        orderStore.setB2bGlobalQty(b2bGlobalQty);
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B);
      } else if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) {
        b2cGlobalQty.push(quantity);
        b2cGlobalSpecIds.push(id);
        orderStore.setB2cGlobalSpecIds(b2cGlobalSpecIds);
        orderStore.setB2cGlobalQty(b2cGlobalQty);
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C);
      } else if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) {
        B2bRegionQty.push(quantity);
        B2bRegionSpecIds.push(id);
        orderStore.setB2bRegionSpecIds(B2bRegionSpecIds);
        orderStore.setB2bRegionQty(B2bRegionQty);
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B);
      } else if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) {
        b2cRegionQty.push(quantity);
        b2cRegionSpecIds.push(id);
        orderStore.setB2cRegionSpecIds(b2cRegionSpecIds);
        orderStore.setB2cRegionQty(b2cRegionQty);
        orderStore.setMallType(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C);
      }
      orderStore.setBuyImmediately(1);
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].ORDER_PLACE_ORDER);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "add2Cart", function () {
      var _this$getSelectedSpec2 = _this.getSelectedSpecEntityFromcommoditySpecs(),
        id = _this$getSelectedSpec2.id,
        specName = _this$getSelectedSpec2.specName,
        ourPrice = _this$getSelectedSpec2.ourPrice;
      var param = {
        commodityName: _this.state.commodity.commodityName,
        commodityImageUri: JSON.parse(_this.state.commodity.bigImageUri)[0],
        memberId: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId'),
        quantity: _this.state.buyQuantity,
        specId: id,
        specName: specName,
        specPrice: ourPrice,
        supplierId: _this.state.commodity.supplierId,
        supplierName: _this.state.commodity.supplierName
      };
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Tab(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MALL_HOME);
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      var mallType = _this.state.commodity.mallType;
      var uri = '';
      // b2b全国
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B) {
        if (_this.currOrgType != tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, '只有运营中心能购买全国b2b商品');
          return;
        }
        uri = '/cm/pub/b2b/global/cart/create';
      }

      // b2c全国
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) {
        uri = '/cm/pub/b2c/global/cart/create';
      }

      // b2b地方
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) {
        if (_this.currOrgType != tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, '只有社区店能购买地方b2b商品');
          return;
        }
        uri = '/cm/pub/b2b/region/cart/create';
      }

      // b2c地方
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) {
        uri = '/cm/pub/b2c/region/cart/create';
      }
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(param), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "changeTab", function (value) {
      _this.setState({
        currTabIdx: value
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "share", function () {
      var memberId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId');
      if (!memberId) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请先登录。未登录的转发无效');
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "setRemainTime", function () {
      var onsaleTime = _this.state.commodity.onsaleTime;
      var grouponDays = _this.state.commodity.grouponDays;
      var remainingTime = Date.parse(onsaleTime) / 1000;
      var currTime = Math.floor(Date.now() / 1000);
      remainingTime = remainingTime + grouponDays * 24 * 60 * 60 - currTime;
      if (remainingTime < 0) {
        remainingTime = 0;
        _this.setState({
          timeFormat: '00:00:00',
          disabled: true
        });
      } else {
        var downloadTimer = setInterval(function () {
          remainingTime -= 1;
          if (remainingTime < 0) {
            clearInterval(downloadTimer);
          }
          var hours = Math.floor(remainingTime / 3600);
          var minutes = Math.floor(remainingTime % 3600 / 60);
          var seconds = remainingTime % 60;
          var timeFormat = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
          _this.setState({
            timeFormat: timeFormat
          });
        }, 1000);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "openChatting", function () {
      var commodity = _this.state.commodity;
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MALL_CHATTING + '?directType=1' + '&mallType=' + commodity.mallType + '&orgId=' + commodity.supplierId + '&orgName=' + commodity.supplierName);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "searchSupplierCommodity", function () {
      var commodity = _this.state.commodity;
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MALL_COMMODITY_SEARCH_BOX + '?supplierId=' + commodity.supplierId);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "go2ShopHome", function (supplierId, supplierName) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MALL_SHOP_HOME + '?supplierId=' + supplierId + '&supplierName=' + supplierName);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.state = {
      buyQuantity: 1,
      orgType: 0,
      commodity: {},
      commodityName: '',
      bigImageUri: [],
      specMap: new Map(),
      selectedSpecCombinationMap: new Map(),
      attributes: [],
      descriptions: '',
      currTabIdx: 0,
      messages: {},
      remainingTime: 0,
      timeFormat: '',
      disabled: false
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_23__["default"])(CommodityDetail, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_24__["default"])(CommodityDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var recommend = this.params;
      var commodityId = recommend.commodityId;
      var mallType = recommend.mallType;
      if (!mallType) mallType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currMallType');
      var weId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('weId');
      if ("weapp" == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TARO_ENV_WEAPP) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createWechat(this);
        if (!weId && recommend.wePid) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('recommend', recommend);
        }
      }
      if (this.currUserId && recommend.memberPid || weId && recommend.wePid) tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createRecommend(this, recommend);
      this.loadCommodity(commodityId, mallType);
      console.log('componentDidShow');
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      console.log('CD componentDidHide');
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(event) {
      if (event.from === 'button') {
        console.log(event.target);
      } else {
        console.log(event.webViewUrl);
      }
      var weId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('weId');
      if (!weId) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(this, '获取不到微信编号，请重新打开微信小程序');
        //return;
      }
      var memberId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId');
      if (!memberId) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(this, '请先登录，未登录的转发无效');
        //return;
      }
      var lastProvinceId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('lastProvinceId') || '';
      var uri = tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MALL_COMMODITY_DETAIL + '?wePid=' + weId + '&memberPid=' + memberId + '&lastProvinceId=' + lastProvinceId + '&operatorId=' + this.operatorId + '&mallType=' + this.state.commodity.mallType + '&commodityId=' + this.state.commodity.id;
      return {
        title: this.state.commodityName,
        path: uri,
        imageUrl: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE_PREFIX + this.state.bigImageUri[0],
        success: function success(res) {
          console.log('转发成功:' + JSON.stringify(res));
        },
        fail: function fail(res) {
          console.log('转发失败:' + JSON.stringify(res));
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
        commodity = _this$state2.commodity,
        buyQuantity = _this$state2.buyQuantity,
        bigImageUri = _this$state2.bigImageUri,
        descriptions = _this$state2.descriptions,
        commodityName = _this$state2.commodityName,
        attributes = _this$state2.attributes;
      if (!commodityName) return null;
      var imgPrefix = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE_PREFIX;
      var specNamesAndValuesToShow = this.getCurrentSpecList();
      var _this$getSelectedSpec3 = this.getSelectedSpecEntityFromcommoditySpecs(),
        inventories = _this$getSelectedSpec3.inventories,
        marketPrice = _this$getSelectedSpec3.marketPrice,
        ourPrice = _this$getSelectedSpec3.ourPrice;
      var showPrice = '登录明细';
      if (commodity) {
        if (commodity.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C || commodity.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) showPrice = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].currFormat(ourPrice);else if (commodity.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B && this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP) showPrice = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].currFormat(ourPrice);else if (commodity.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B && this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS) showPrice = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].currFormat(ourPrice);
      }
      var tabOptions = [{
        idx: 0,
        title: '商品介绍'
      }, {
        idx: 1,
        title: '商品属性'
      }, {
        idx: 2,
        title: '客户评价'
      }];
      var currTabIdx = this.state.currTabIdx;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        topNavBarTitle: '商品详情',
        bottomLabel3: '立购',
        bottomFunc3: this.buyStraightway,
        bottomLabel4: '加车',
        bottomFunc4: this.add2Cart,
        bottomLabel5: '搜索',
        bottomFunc5: this.searchSupplierCommodity,
        bottomLabel6: '客服',
        bottomFunc6: this.openChatting,
        shareLabel: '分享',
        shareFunc: this.share,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          justifyContent: "space-between",
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_LinkTag__WEBPACK_IMPORTED_MODULE_15__["default"], {
            onClick: this.go2ShopHome(commodity.supplierId, commodity.supplierName + '店'),
            children: commodity.supplierName + '店'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_LinkTag__WEBPACK_IMPORTED_MODULE_15__["default"], {
            onClick: this.openChatting,
            children: '联系客服'
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_LegenImage__WEBPACK_IMPORTED_MODULE_10__["default"], {
          src: imgPrefix + bigImageUri[0],
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
          height: -50
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
          children: commodityName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
          children: ["\u5E02\u573A\u4EF7:\xA0\u300C", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].currFormat(marketPrice), "\u300D"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
            width: 64,
            children: "\u552E\u4EF7:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
            color: "red",
            children: showPrice
          }), this.currUserId == '650976821923282945' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            type: "primary",
            openType: "contact",
            size: "mini",
            children: '联系客服'
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
          children: ["\u5E93\u5B58:\xA0\xA0\xA0\xA0\xA0", inventories]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: 16
        }), specNamesAndValuesToShow, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          justifyContent: "flex-start",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
            children: "\u8D2D\u4E70\u6570\u91CF: \xA0\xA0\xA0"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_form_IntegerInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
            name: 'quantity',
            min: 1,
            max: 999,
            value: buyQuantity,
            onChange: this.handleQuantity({
              inventories: inventories
            })
          }), commodity && commodity.tradeType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TRADE_TYPE_GROUPON && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
            width: 100,
            color: "red",
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE,
            children: this.state.timeFormat
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_view_TabPane__WEBPACK_IMPORTED_MODULE_9__["default"], {
          currTabIdx: currTabIdx,
          tabOptions: tabOptions,
          onClick: this.changeTab,
          children: [currTabIdx == 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
            className: "taro_html fullWidth",
            style: {
              width: 'auto',
              fontSize: 14
            },
            dangerouslySetInnerHTML: {
              __html: descriptions
            }
          }), currTabIdx == 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
              borderWidth: 1,
              borderColor: [[255, 255, 255, 0.5], [25, 114, 210, 0.5], [25, 114, 210, 0.5], [25, 114, 210, 0.5]],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
                width: -30,
                justifyContent: 'flex-end',
                children: "\u5C5E\u6027\u540D\u79F0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
                width: -70,
                children: "\xA0\xA0\xA0\u5C5E\u6027\u503C"
              })]
            }), attributes.map(function (row) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
                borderWidth: 1,
                borderColor: [[255, 255, 255, 0.5], [25, 114, 210, 0.99], [25, 114, 210, 0.5], [25, 114, 210, 0.5]],
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
                  width: -30,
                  justifyContent: 'flex-end',
                  children: [row.n, ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
                  width: -70,
                  color: "gray",
                  children: ["\xA0\xA0", row.v]
                })]
              }, row.ni);
            })]
          }), currTabIdx == 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: 36,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component))) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CommodityDetail);

/***/ }),

/***/ "./src/form/RadioBoxes.tsx":
/*!*********************************!*\
  !*** ./src/form/RadioBoxes.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "webpack/container/remote/@linaria/react");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_linaria_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





var _templateObject, _templateObject2;




var RadioGroup0 = (0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.RadioGroup)(_templateObject || (_templateObject = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n   display: flex;\n   flex-direction: row;\n   justify-content: space-between;\n"])));
var Radio0 = (0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Radio)(_templateObject2 || (_templateObject2 = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n   display: flex;\n   flex-direction: row;\n"])));
var RadioBoxes = /*#__PURE__*/function (_React$Component) {
  function RadioBoxes() {
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RadioBoxes);
    return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, RadioBoxes, arguments);
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__["default"])(RadioBoxes, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(RadioBoxes, [{
    key: "render",
    value: function render() {
      var options = this.props.options;
      var value = this.props.value;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RadioGroup0, {
        onChange: this.props.onChange,
        children: options.map(function (option, idx) {
          var isChecked = option.value === value;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Radio0, {
            value: option.value,
            checked: isChecked,
            style: {
              fontSize: 14
            },
            children: option.label
          }, idx);
        })
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (RadioBoxes);

/***/ }),

/***/ "./src/pkgmall/page/mall/CommodityDetail.tsx":
/*!***************************************************!*\
  !*** ./src/pkgmall/page/mall/CommodityDetail.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_CommodityDetail_CommodityDetail_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityDetail!./CommodityDetail.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/CommodityDetail!./src/pkgmall/page/mall/CommodityDetail.tsx");


var config = {};

_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_CommodityDetail_CommodityDetail_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].enableShareAppMessage = true
var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_CommodityDetail_CommodityDetail_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgmall/page/mall/CommodityDetail', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_CommodityDetail_CommodityDetail_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/112e8284cfb26df80d2edf645e76293b","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgmall/page/mall/CommodityDetail.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=CommodityDetail.js.map