"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["page/mall/Home"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/Home!./src/page/mall/Home.tsx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/Home!./src/page/mall/Home.tsx ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_FloorLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/FloorLayout */ "./src/layout/FloorLayout.tsx");
/* harmony import */ var tsx_layout_CardLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/CardLayout */ "./src/layout/CardLayout.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_view_LegenImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/view/LegenImage */ "./src/view/LegenImage.tsx");
/* harmony import */ var tsx_view_LinkTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/view/LinkTag */ "./src/view/LinkTag.tsx");
/* harmony import */ var tsx_layout_GridLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/layout/GridLayout */ "./src/layout/GridLayout.tsx");
/* harmony import */ var tsx_layout_CommodityLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/layout/CommodityLayout */ "./src/layout/CommodityLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);





var _dec, _class;














var Home = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_13__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_13__.observer)(_class = /*#__PURE__*/function (_Component) {
  function Home(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__["default"])(this, Home);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_15__["default"])(this, Home, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "searchFloorInfo", function () {
      var mallType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currMallType');
      var currOperatorId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOperatorId');
      var supplierId = _this.params.supplierId;
      if (!supplierId) supplierId = currOperatorId;
      var param = JSON.stringify({
        operatorId: currOperatorId,
        supplierId: supplierId,
        mallType: mallType
      });
      var uri = '/ml/pub/floor/search';
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          var floorRecords = result.body;
          _this.setState({
            floorRecords: floorRecords
          });
          var _mallType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currMallType');
          var _supplierId = _this.params.supplierId;
          floorRecords.map(function (item, idx) {
            _this.searchCommoditybyType(_supplierId, _mallType, item.floorNumber);
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, param, succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "searchByKeyWord", function (keyWord) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MALL_COMMODITY_LIST_KEYWORD + '?commodityName=' + keyWord);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "searchMore", function (showType2No) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MALL_SHOW_LIST_BY_TYPE + '?categoryId=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_TYPE_FLOOR + '&category2Id=' + showType2No);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "renderKeywords", function (start, floor) {
      var words = [];
      for (var i = 1; i <= 8; i += 1) {
        var key = start + i;
        if (floor[key]) {
          words.push(floor[key]);
        }
      }
      if (words) {
        return words.map(function (keyword) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(tsx_view_LinkTag__WEBPACK_IMPORTED_MODULE_8__["default"], {
            onClick: _this.searchByKeyWord(keyword),
            children: [keyword, "\u2002"]
          }, keyword);
        });
      }
      return null;
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "searchCommoditybyType", function (supplierId, mallType, floorNumber) {
      var floorDetails = _this.state.floorDetails;
      //if (floorDetails[floorNumber])
      //	return;

      var categoryId = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_TYPE_FLOOR;
      var category2Id = floorNumber;
      var pageNo = 1;
      var pageSize = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COUNT_FLOOR_COMMODITY;
      var operatorId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOperatorId');
      if (!supplierId) {
        supplierId = operatorId;
      }
      var param = JSON.stringify({
        operatorId: operatorId,
        supplierId: supplierId,
        mallType: mallType,
        category: categoryId,
        category2: category2Id,
        pageNo: pageNo,
        pageSize: pageSize
      });
      var uri = '/ml/pub/commodity/show/search';
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          var commodities = result.body;
          floorDetails[floorNumber] = commodities;
          _this.setState({
            floorDetails: floorDetails
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, param, succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "go2CommodityDetail", function (item, index) {
      var commodityId = item.commodityId || item.id;
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MALL_COMMODITY_DETAIL + '?commodityId=' + commodityId);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.state = {
      floorRecords: [],
      floorDetails: {},
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_17__["default"])(Home, _Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_18__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var currOperatorId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOperatorId');
      if (!currOperatorId) {
        //this.currOperatorId = '595655767936204801';//cnst.ID_HQ;
        //const currOperatorName = '南宁运营中心';//cnst.NAME_HQ
        //this.mallType = cnst.MALL_TYPE_R_B2C;//cnst.MALL_TYPE_G_B2C;
        //JsUtil.setAppItem('lastOperatorId', this.currOperatorId);//comment this line when default site is HQ
        //JsUtil.setAppItem('lastProvinceId', '4522003');//comment this line when default site is HQ
        var _currOperatorId = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ID_HQ;
        var currOperatorName = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NAME_HQ;
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currOperatorId', _currOperatorId);
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currOperatorName', currOperatorName);
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C);
      }
      this.searchFloorInfo();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      console.log('Home componentDidShow');
      this.searchFloorInfo();
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(event) {
      if (event.from === 'button') {
        console.log(event.target);
      } else {
        console.log(event.webViewUrl);
      }
      return {
        title: '积分商城',
        path: tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MALL_HOME,
        imageUrl: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE_PREFIX + '/1599878051032/big11.png',
        success: function success(res) {
          console.log(res);
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
      var _this2 = this;
      var floorRecords = this.state.floorRecords;
      var floorDetails = this.state.floorDetails;
      var mallType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currMallType');
      var supplierId = this.params.supplierId;
      var imgPrefix = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE_PREFIX;
      var width = -90;
      if (false) {} else {
        width = -96;
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(tsx_layout_FloorLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
        }), floorRecords.map(function (floor, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(tsx_layout_CardLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: floor.floorName,
            thumb: imgPrefix + floor.smallImageUri,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
              justifyContent: "flex-end",
              backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE,
              children: _this2.renderKeywords('keyword1', floor)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(tsx_view_LegenImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
              src: imgPrefix + floor.bigImageUri,
              width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
              height: -50
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(tsx_layout_GridLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
              data: floorDetails[floor.floorNumber],
              columnSize: 2,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(tsx_layout_CommodityLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
                onClick: _this2.go2CommodityDetail
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__["default"], {
              height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
              backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
              alignSelf: "flex-start",
              backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE,
              children: [_this2.renderKeywords('keyword2', floor), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(tsx_view_LinkTag__WEBPACK_IMPORTED_MODULE_8__["default"], {
                onClick: _this2.searchMore(floor.floorNumber),
                alignSelf: "flex-end",
                children: "\u66F4\u591A>"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__["default"], {
              height: 36,
              backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
            })]
          }, floor.floorName + i);
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/page/mall/Home.tsx":
/*!********************************!*\
  !*** ./src/page/mall/Home.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_mall_Home_Home_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/Home!./Home.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/Home!./src/page/mall/Home.tsx");


var config = {};

_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_mall_Home_Home_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].enableShareAppMessage = true
var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_mall_Home_Home_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'page/mall/Home', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_mall_Home_Home_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/page/mall/Home.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=Home.js.map