"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["page/member/Mine"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/member/Mine!./src/page/member/Mine.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/member/Mine!./src/page/member/Mine.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/view/Level2View */ "./src/view/Level2View.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_view_ListView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/view/ListView */ "./src/view/ListView.tsx");
/* harmony import */ var tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/view/ListItem */ "./src/view/ListItem.tsx");
/* harmony import */ var tsx_view_SimpleIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/view/SimpleIcon */ "./src/view/SimpleIcon.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tsx/form/GeneralButton */ "./src/form/GeneralButton.tsx");
/* harmony import */ var img_p_setting_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! img/p/setting.png */ "./src/static/images/p/setting.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);




















var Mine = /*#__PURE__*/function (_React$Component) {
  function Mine(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_15__["default"])(this, Mine);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this, Mine, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "memberReceiptAdress", function () {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].LOGISTICS_ADDRESS_ENTITY + '?mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_NEW + '&orgType=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "memberReceiptAdressList", function () {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].LOGISTICS_ADDRESS_LIST + '?mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_LIST + '&mallType=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C + '&orgType=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB + '&menuParam=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "memberPickupAdressList", function () {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].LOGISTICS_ADDRESS_LIST + '?menuParam=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C + '&mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_LIST2);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "orderViewBox", function () {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].ORDER_VIEW_LIST);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "orderList", function (mallType, menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].ORDER_SEARCH_BOX + '?mallType=' + mallType + '&menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "shipSearchBox", function (menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].ORDER_SHIP_SEARCH_BOX + '?menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "createWithdraw", function (menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].FINANCE_WITHDRAW_ENTITY + '?menuParam=' + menuParam + '&subjectType=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "searchWithdraw", function (menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].FINANCE_WITHDRAW_LIST + '?menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "createCashDeposit", function (menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].FINANCE_CASH_DEPOSIT_ENTITY + '?menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "searchCashDeposit", function (menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].FINANCE_CASH_DEPOSIT_LIST + '?menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "searchIdea", function () {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].IDE_IDEA_SEARCH_BOX);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "createArtDetection", function (artType) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].ART_DETECTION_CREATE + '?artType=' + artType);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "searchArtDetection", function (artType) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].ART_DETECTION_SEARCH_BOX + '?artType=' + artType);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "go2Map", function (menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].LOGISTICS_MAP + '?menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "go2Login", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MEMBER_LOGIN);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "go2Register", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MEMBER_REGISTER);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "onSettings", function (event) {
      console.log('onSettings');
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "getWeUser", function () {
      var avatarUrl = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('avatarUrl');
      var nickName = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('nickName');
      if (!nickName) nickName = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserName');
      return {
        avatarUrl: avatarUrl,
        nickName: nickName
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "quit", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('currUserId', null);
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('token', null);
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].setAppItem('authorities', null);
      _this.setState({
        isLogin: false
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.state = {
      currOrgType: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgType'),
      isLogin: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId') ? true : false,
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_18__["default"])(Mine, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__["default"])(Mine, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.setState({
        isLogin: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId') ? true : false
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      var isLogin = this.state.isLogin;
      var _this$getWeUser = this.getWeUser(),
        _this$getWeUser$avata = _this$getWeUser.avatarUrl,
        avatarUrl = _this$getWeUser$avata === void 0 ? {
          HomeImage: img_p_setting_png__WEBPACK_IMPORTED_MODULE_13__
        } : _this$getWeUser$avata,
        _this$getWeUser$nickN = _this$getWeUser.nickName,
        nickName = _this$getWeUser$nickN === void 0 ? '' : _this$getWeUser$nickN;
      var commandLabl = '注册';
      var command = this.go2Register;
      if (isLogin) {
        commandLabl = '退出';
        command = this.quit;
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          justifyContent: "space-between",
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [isLogin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_SimpleIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
              value: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE_PREFIX + avatarUrl
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
              children: nickName
            })]
          }), !isLogin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
            type: "primary",
            size: "mini",
            onClick: this.go2Login,
            children: "\u767B\u5F55"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_SimpleIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
            value: img_p_setting_png__WEBPACK_IMPORTED_MODULE_13__,
            color: "#1976d2",
            onClick: this.onSettings
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_6__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '我的订单',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orderViewBox()
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_6__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '新增会员收货地址',
              arrow: 'right',
              hasBorder: true,
              onClick: this.memberReceiptAdress()
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '会员收货地址列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.memberReceiptAdressList()
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_6__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '全国b2c订单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orderList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '地方b2c订单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orderList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_R_B2C)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '运单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.shipSearchBox(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C)
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_6__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '物流地图',
              arrow: 'right',
              hasBorder: true,
              onClick: this.go2Map(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_R_B2C)
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_6__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '新增提现',
              arrow: 'right',
              hasBorder: true,
              onClick: this.createWithdraw(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '提现列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.searchWithdraw(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '新增存款',
              arrow: 'right',
              hasBorder: true,
              onClick: this.createCashDeposit(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '存款列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.searchCashDeposit(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C)
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_6__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '创意列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.searchIdea()
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '新增绘画检测',
              arrow: 'right',
              hasBorder: true,
              onClick: this.createArtDetection(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].BIZZ_CAT_DRAW)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '绘画检测列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.searchArtDetection(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].BIZZ_CAT_DRAW)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '新增钢琴检测',
              arrow: 'right',
              hasBorder: true,
              onClick: this.createArtDetection(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].BIZZ_CAT_PINAO)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: '钢琴检测列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.searchArtDetection(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].BIZZ_CAT_PINAO)
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: 60,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_6__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
            width: 90,
            onClick: command,
            children: commandLabl
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (Mine);

/***/ }),

/***/ "./src/page/member/Mine.tsx":
/*!**********************************!*\
  !*** ./src/page/member/Mine.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_member_Mine_Mine_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/member/Mine!./Mine.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/member/Mine!./src/page/member/Mine.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_member_Mine_Mine_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'page/member/Mine', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_member_Mine_Mine_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/page/member/Mine.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=Mine.js.map