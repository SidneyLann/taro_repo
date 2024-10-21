"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["page/mall/Mall"],{

/***/ "./src/static/images/p/mall_selected.png":
/*!***********************************************!*\
  !*** ./src/static/images/p/mall_selected.png ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/p/mall_selected.png";

/***/ }),

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/Mall!./src/page/mall/Mall.tsx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/Mall!./src/page/mall/Mall.tsx ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_layout_CardLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/layout/CardLayout */ "./src/layout/CardLayout.tsx");
/* harmony import */ var tsx_view_BaseView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/view/BaseView */ "./src/view/BaseView.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/form/GeneralButton */ "./src/form/GeneralButton.tsx");
/* harmony import */ var tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tsx/form/SelectInput */ "./src/form/SelectInput.tsx");
/* harmony import */ var img_p_mall_selected_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! img/p/mall_selected.png */ "./src/static/images/p/mall_selected.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);




















var Mall = /*#__PURE__*/function (_React$Component) {
  function Mall(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__["default"])(this, Mall);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_15__["default"])(this, Mall, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "change2b2c", function () {
      _this.setState({
        isB2C: !_this.state.isB2C
      });
      var currMallType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currMallType');
      if (currMallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C);
      } else if (currMallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B);
      } else if (currMallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C);
      } else if (currMallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "changeGlobleRegion", function () {
      _this.setState({
        isGlobal: !_this.state.isGlobal
      }, function () {
        return _this.setMallType();
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "setMallType", function () {
      var isB2C = _this.state.isB2C;
      var isGlobal = _this.state.isGlobal;
      if (isGlobal) {
        if (isB2C) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C);
        } else {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B);
        }
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currOperatorId', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ID_HQ);
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currOperatorName', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NAME_HQ);
      } else {
        if (isB2C) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C);
        } else {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B);
        }
        var lastProvinceId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('lastProvinceId');
        if (lastProvinceId) _this.provinceChanged({
          id: lastProvinceId
        });
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "provinceChanged", function (item) {
      var provinceId = item.id;
      var lastOperatorId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('lastOperatorId');
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('lastProvinceId', provinceId);
      var succ = function succ(result) {
        var cityOptions = result.body;
        var operator = cityOptions.find(function (e) {
          return e.third == lastOperatorId;
        });
        if (operator) _this.setState({
          provinceId: provinceId,
          cityOptions: cityOptions
        }, function () {
          return _this.cityChanged((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_17__["default"])({}, operator));
        });else _this.setState({
          provinceId: provinceId,
          cityOptions: cityOptions
        });
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpGet(_this, "/lg/pub/region/op/pub/city/search?firstLevelId=".concat(provinceId), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "cityChanged", function (item) {
      var id = item.third;
      var opInfo = _this.state.cityOptions.find(function (option) {
        return option.third == id;
      });
      if (!opInfo.first) return;
      _this.setState({
        operatorId: id
      });
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currOperatorId', opInfo.third);
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currOperatorName', opInfo.second);
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('lastOperatorId', opInfo.third);
      var currMallType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currMallType');
      if (currMallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B);
      } else if (currMallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currMallType', tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "openChatting", function () {
      var orgId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOperatorId');
      var orgName = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOperatorName');
      var mallType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currMallType');
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MALL_CHATTING + '?directType=1' + '&mallType=' + mallType + '&orgId=' + orgId + '&orgName=' + orgName);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    var _currMallType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currMallType');
    _this.state = {
      isB2C: _currMallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C || _currMallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C ? true : false,
      isGlobal: _currMallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B || _currMallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C ? false : true,
      provinceId: -1,
      operatorId: -1,
      provinceOptions: [],
      cityOptions: [],
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_18__["default"])(Mall, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__["default"])(Mall, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var lastProvinceId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('lastProvinceId');
      var param = {
        parentId: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ID_TOP_REGION
      };
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this2, result)) {
          var provinceOptions = result.body;
          if (lastProvinceId) _this2.setState({
            provinceOptions: provinceOptions,
            provinceId: lastProvinceId
          }, function () {
            return _this2.provinceChanged({
              id: lastProvinceId
            });
          });else _this2.setState({
            provinceOptions: provinceOptions
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this2, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(this, '/lg/pub/region/search', JSON.stringify(param), succ, err);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        provinceOptions = _this$state.provinceOptions,
        cityOptions = _this$state.cityOptions,
        provinceId = _this$state.provinceId,
        operatorId = _this$state.operatorId;
      var labelKey1 = 'regionFullName';
      var labelKey2 = 'second';
      var valueKey1 = 'id';
      var valueKey2 = 'third';
      var label2Bor2C = 'b2b商城';
      if (this.state.isB2C) {
        label2Bor2C = 'b2c商城';
      }
      var labelGlobalorRegion = '地方商城';
      if (this.state.isGlobal) {
        labelGlobalorRegion = '全国商城';
      }
      var labelWidth = -18;
      var valueWidth = -76;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_CardLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "\u5546\u57CE\u5207\u6362",
          thumb: img_p_mall_selected_png__WEBPACK_IMPORTED_MODULE_12__,
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
          height: -90,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
            height: 20,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
            alignSelf: "flex-start",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: "\u6279\u53D1\u96F6\u552E"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
              type: "primary",
              size: "mini",
              width: 68,
              onClick: this.change2b2c,
              children: label2Bor2C
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: 20,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
            alignSelf: "flex-start",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: "\u5730\u65B9\u5168\u56FD"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
              type: "primary",
              size: "mini",
              width: 68,
              onClick: this.changeGlobleRegion,
              children: labelGlobalorRegion
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), !this.state.isGlobal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_view_BaseView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            alignSelf: "flex-start",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
              options: provinceOptions,
              labelKey: labelKey1,
              valueKey: valueKey1,
              value: provinceId,
              onChange: this.provinceChanged,
              label: '省(市)',
              labelWidth: labelWidth,
              valueWidth: valueWidth
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
              options: cityOptions,
              labelKey: labelKey2,
              valueKey: valueKey2,
              value: operatorId,
              onChange: this.cityChanged,
              label: '市(州)',
              labelWidth: labelWidth,
              valueWidth: valueWidth
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: 100,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: 20,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: 150,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
            type: "primary",
            size: "mini",
            width: 68,
            onClick: this.openChatting,
            children: '商城客服'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: 150,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
          })]
        })
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (Mall);

/***/ }),

/***/ "./src/page/mall/Mall.tsx":
/*!********************************!*\
  !*** ./src/page/mall/Mall.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_mall_Mall_Mall_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/Mall!./Mall.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/mall/Mall!./src/page/mall/Mall.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_mall_Mall_Mall_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'page/mall/Mall', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_mall_Mall_Mall_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/page/mall/Mall.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=Mall.js.map