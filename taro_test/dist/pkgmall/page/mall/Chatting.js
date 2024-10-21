"use strict";require("../../sub-vendors.js");require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgmall/page/mall/Chatting"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/Chatting!./src/pkgmall/page/mall/Chatting.tsx":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/Chatting!./src/pkgmall/page/mall/Chatting.tsx ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/layout/ColumnLayout */ "./src/layout/ColumnLayout.tsx");
/* harmony import */ var tsx_form_ImagePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/form/ImagePicker */ "./src/form/ImagePicker.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_view_LegenImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/view/LegenImage */ "./src/view/LegenImage.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);



















var Message = /*#__PURE__*/(0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(function Message() {
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this, Message);
  this.buyerUserId = '';
  this.buyerUserName = '';
  this.sellerUserId = '';
  this.sellerUserName = '';
  this.interactContent = '';
  this.directType = 1; // 1顾客发的，3商家发的
  this.contentType = 1; // 1文本，3图片
  this.orgId = '';
});
var Chatting = /*#__PURE__*/function (_React$Component) {
  function Chatting(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this, Chatting);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_14__["default"])(this, Chatting, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "errors", {
      interactContent: false
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "params", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "currUserId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "currOrgId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "initWebSocket", function () {
      var token = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('token');
      var orgId = _this.params.orgId;
      var orgName = _this.params.orgName;
      var buyerUserId = _this.params.buyerUserId;
      var buyerUserName = _this.params.buyerUserName;
      var sellerUserId = _this.params.sellerUserId;
      var sellerUserName = _this.params.sellerUserName;
      var directType = _this.params.directType;
      var status = 1;

      // 初始化websocket
      var url = '';
      if (directType == 3) {
        url = "wss://www.pc8g.com:443/pcng-biz-member/websocket/service?token=".concat(token, "&orgId=").concat(orgId, "&buyerUserId=").concat(buyerUserId);
        status = 3;
      } else {
        buyerUserId = _this.currUserId;
        buyerUserName = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserName');
        url = "wss://www.pc8g.com:443/pcng-biz-member/websocket/service?token=".concat(token, "&orgId=").concat(orgId);
      }
      console.log(url);
      // 初始化消息模板
      _this.message = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_16__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, _this.message), {}, {
        mallType: _this.params.mallType,
        orgId: orgId,
        orgName: orgName,
        buyerUserName: buyerUserName,
        buyerUserId: buyerUserId,
        sellerUserId: sellerUserId,
        sellerUserName: sellerUserName,
        directType: directType,
        status: status
      });
      var websocket;
      if ("weapp" === tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TARO_ENV_WEAPP) {
        websocket = wx.connectSocket({
          url: url
        });
      } else if (false) {} else {
        websocket = new WebSocket(url);
      }
      var that = _this;
      if ("weapp" === tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TARO_ENV_WEAPP) {
        websocket.onOpen(function (res) {
          console.log('WebSocket连接已打开！');
        });
        websocket.onMessage(function (res) {
          console.log('onMessage');
          var msg = JSON.parse(res.data);
          msg.from = false;
          if (msg.directType == 3) {
            that.message.sellerUserId = msg.sellerUserId;
            that.message.sellerUserName = msg.sellerUserName;
          }
          that.setState(function (pre) {
            return {
              entities: [].concat((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_17__["default"])(pre.entities), [msg])
            };
          });
        });
        websocket.onError(function (res) {
          console.log('onError！');
        });
        websocket.onClose(function (res) {
          console.log('onClose！');
          if ("weapp" === tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TARO_ENV_WEAPP) {
            websocket = wx.connectSocket({
              url: url
            });
          } else if (false) {} else {
            websocket = new WebSocket(url);
          }
          that.setState({
            websocket: websocket
          });
        });
      } else {
        websocket.onopen = function (event) {
          that.setState({
            isOpen: true
          });
          console.log('WebSocket5连接已打开！');
        };
        websocket.onmessage = function (event) {
          console.log('onMessage');
          var msg = JSON.parse(event.data);
          msg.from = false;
          if (msg.directType == 3) {
            that.message.sellerUserId = msg.sellerUserId;
            that.message.sellerUserName = msg.sellerUserName;
          }
          that.setState(function (pre) {
            return {
              entities: [].concat((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_17__["default"])(pre.entities), [msg])
            };
          });
        };
        websocket.onerror = function (event) {
          console.log('onError！');
        };
        websocket.onclose = function (event) {
          console.log('onClose！');
          if ("weapp" === tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TARO_ENV_WEAPP) {
            websocket = wx.connectSocket({
              url: url
            });
          } else if (false) {} else {
            websocket = new WebSocket(url);
          }
          that.setState({
            websocket: websocket
          });
        };
      }
      _this.setState({
        websocket: websocket
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "search", function () {
      if (_this.params.directType != 3) return;
      var params = {
        id: _this.params.id,
        orgId: _this.params.orgId
      };
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          var data = result.body;
          var disabled = false;
          if (_this.params.status == 3) disabled = true;
          _this.setState({
            entities: data,
            totalRecords: result.totalRecords,
            disabled: disabled
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, "/ml/pub/customer/service/search", JSON.stringify(params), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])({}, name, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "handleClickSend", function () {
      var _this$state = _this.state,
        websocket = _this$state.websocket,
        isOpen = _this$state.isOpen,
        interactContent = _this$state.interactContent;
      if (!isOpen) {
        alert('连接未建立,请稍等');
        return;
      }
      if (!interactContent) {
        return;
      }
      var msg = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, _this.message);
      msg.interactContent = interactContent;
      msg.from = true;
      websocket.send({
        data: JSON.stringify(msg)
      });
      _this.setState(function (pre) {
        return {
          entities: [].concat((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_17__["default"])(pre.entities), [msg]),
          interactContent: ''
        };
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "onImageFileChanged", function (newValue, opType, uriOrIdx) {
      if ('add' == opType) {
        _this.setState({
          imageUri: uriOrIdx
        });
        _this.handleChangePic(uriOrIdx);
      } else if ('rm' == opType) {
        _this.setState({
          imageUri: ''
        });
      }
      _this.setState({
        imageFile: newValue
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "handleChangePic", function (imageUri) {
      var _this$state2 = _this.state,
        websocket = _this$state2.websocket,
        isOpen = _this$state2.isOpen;
      if (!isOpen) {
        alert('连接未建立,请稍等');
        return;
      }
      var msg = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, _this.message);
      msg.interactContent = imageUri;
      msg.contentType = 3;
      msg.from = true;
      websocket.send({
        data: JSON.stringify(msg)
      });
      _this.setState(function (pre) {
        return {
          entities: [].concat((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_17__["default"])(pre.entities), [msg])
        };
      });
    });
    _this.state = {
      path: '',
      entities: [],
      interactContent: '',
      imageUri: '',
      imageFile: [],
      disabled: false,
      isOpen: false,
      websocket: undefined
    };
    _this.message = new Message();
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_18__["default"])(Chatting, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Chatting, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.search();
      this.initWebSocket();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state3 = this.state,
        entities = _this$state3.entities,
        interactContent = _this$state3.interactContent,
        imageUri = _this$state3.imageUri;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        topNavBarTitle: '客服会话',
        that: this,
        postFunc: this.handleChangePic,
        bottomLabel4: '发送',
        bottomFunc4: this.handleClickSend,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_layout_ColumnLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
          justifyContent: 'flex-end',
          children: entities.map(function (item) {
            var isFrom = item.directType == 1 && item.buyerUserId == _this2.currUserId || item.directType == 3 && item.orgId == _this2.currOrgId ? true : false;
            var justifyContent = isFrom == true ? 'flex-end' : 'flex-start';
            var bcolor = isFrom == true ? 'COLOR_BACKGROUND_NEAR_WHITE' : 'COLOR_BACKGROUND_WHITE';
            return item.contentType == 3 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_LegenImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
              src: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE_PREFIX + item.interactContent,
              width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
              height: -33
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
              justifyContent: justifyContent,
              backgroundColor: bcolor,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: item.interactContent
              })
            });
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: 10,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
          name: 'interactContent',
          label: '回复内容',
          type: 'text',
          value: this.state.interactContent,
          error: this.errors.interactContent,
          onChange: this.onInputChanged,
          focus: true,
          disabled: this.state.disabled
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(tsx_form_ImagePicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
          that: this,
          files: this.state.imageFile,
          onChange: this.onImageFileChanged,
          count: 1,
          category: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].BIZZ_CAT_SUBJECT,
          disabled: false
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (Chatting);

/***/ }),

/***/ "./src/pkgmall/page/mall/Chatting.tsx":
/*!********************************************!*\
  !*** ./src/pkgmall/page/mall/Chatting.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_Chatting_Chatting_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/Chatting!./Chatting.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgmall/page/mall/Chatting!./src/pkgmall/page/mall/Chatting.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_Chatting_Chatting_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgmall/page/mall/Chatting', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgmall_page_mall_Chatting_Chatting_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgmall/page/mall/Chatting.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=Chatting.js.map