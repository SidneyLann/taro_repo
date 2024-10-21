"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["page/subject/Merchant"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/subject/Merchant!./src/page/subject/Merchant.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/subject/Merchant!./src/page/subject/Merchant.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/Permissions */ "./src/common/Permissions.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/view/Level2View */ "./src/view/Level2View.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_view_ListView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/view/ListView */ "./src/view/ListView.tsx");
/* harmony import */ var tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/view/ListItem */ "./src/view/ListItem.tsx");
/* harmony import */ var tsx_view_SimpleIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tsx/view/SimpleIcon */ "./src/view/SimpleIcon.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tsx/form/GeneralButton */ "./src/form/GeneralButton.tsx");
/* harmony import */ var img_p_setting_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! img/p/setting.png */ "./src/static/images/p/setting.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);





















var Merchant = /*#__PURE__*/function (_React$Component) {
  function Merchant(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this, Merchant);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_17__["default"])(this, Merchant, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "onSettings", function (orgType) {
      return function (event) {
        var uri = tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].SUPPLIER_SUPPLIER_ENTITY;
        if (orgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS) uri = tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].SERVICE_STATION_ENTITY;
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(uri + '?mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_VIEW + '&id=' + tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgId'));
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "orgReceiptAdress", function (mallType) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].LOGISTICS_ADDRESS_ENTITY + '?mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_NEW + '&mallType=' + mallType + '&orgType=' + _this.state.currOrgType);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "orgReceiptAdressList", function (mallType) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].LOGISTICS_ADDRESS_LIST + '?mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_LIST + '&mallType=' + mallType + '&orgType=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G + '&menuParam=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_G_B2C);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "addFreightTemplate", function (mallType) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].LOGISTICS_FREIGHT_TEMPLATE_ENTITY + '?mallType=' + mallType);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "freightTemplateList", function (mallType) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].LOGISTICS_FREIGHT_TEMPLATE_LIST + '?mallType=' + mallType);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "publishCommodity", function (mallType) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].COMMODITY_COMMODITY_PUBLISH + '?mallType=' + mallType);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "commodityList", function (mallType, menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].COMMODITY_COMMODITY_SEARCH_BOX + '?mallType=' + mallType + '&menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "orderList", function (mallType, menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].ORDER_SEARCH_BOX + '?mallType=' + mallType + '&menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "shipSearchBox", function (menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].ORDER_SHIP_SEARCH_BOX + '?menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "supplierSearchBox", function (menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].SUPPLIER_SEARCH_BOX + '?menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "supplierVisitSearch", function () {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].SUPPLIER_VISIT_SEARCH);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "customerServiceSearch", function () {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].MALL_MESSAGE_SEARCH);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "applySupplier", function () {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].SUPPLIER_OPERATOR_ENTITY);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "applyJoinOrg", function () {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].ORG_JOIN_APPLICATION);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "supplierAuditList", function (mallType) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].SUPPLIER_OPERATOR_LIST + '?mallType=' + mallType + '&createBy=' + tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId'));
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "addEditSupplier", function (orgType) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].SUPPLIER_SUPPLIER_ENTITY + '?createBy=' + tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId') + '&orgType=' + orgType);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "applyOperator", function (event) {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].OPERATOR_OPERATOR_ENTITY);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "applyServiceStation", function (event) {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].SERVICE_STATION_ENTITY);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "go2Map", function (menuParam) {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].LOGISTICS_MAP + '?menuParam=' + menuParam);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "addCommissionBelongto", function () {
      return function (event) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].MEMBER_COMMISSION_BELONGTO);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "go2Login", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].MEMBER_LOGIN);
    });
    _this.state = {
      currOrgType: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgType'),
      currOrgName: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgName'),
      isLogin: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId') ? true : false,
      isSaleman: false,
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_19__["default"])(Merchant, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_20__["default"])(Merchant, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      if (tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasRole(tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].authorities.OP_SALEMAN) && !tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasRole(tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].authorities.OP_ROOT)) {
        this.setState({
          isSaleman: true
        });
      }
      var currOrgType = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgType');
      var currOrgName = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgName');
      var isLogin = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId') ? true : false;
      this.setState({
        currOrgType: currOrgType,
        currOrgName: currOrgName,
        isLogin: isLogin
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      var isLogin = this.state.isLogin;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        that: this,
        children: [isLogin && (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
          justifyContent: "space-between",
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
            children: this.state.currOrgName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_SimpleIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
            value: img_p_setting_png__WEBPACK_IMPORTED_MODULE_14__,
            color: "#1976d2",
            onClick: this.onSettings(this.state.currOrgType)
          })]
        }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_7__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [(this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '新增全国商城b2c运费模板',
              arrow: 'right',
              hasBorder: true,
              onClick: this.addFreightTemplate(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '全国商城b2c运费模板列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.freightTemplateList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '新增地方商城b2c运费模板',
              arrow: 'right',
              hasBorder: true,
              onClick: this.addFreightTemplate(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方商城b2c运费模板列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.freightTemplateList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C)
            })]
          })]
        }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP && !this.state.isSaleman) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_7__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [(this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '发布全国商城b2c商品',
              arrow: 'right',
              hasBorder: true,
              onClick: this.publishCommodity(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '全国商城b2c商品列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.commodityList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_HQ_G_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '发布地方商城b2c商品',
              arrow: 'right',
              hasBorder: true,
              onClick: this.publishCommodity(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方商城b2c商品列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.commodityList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_R_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方商城b2c商品列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.commodityList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_HQ_R_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方商城b2c商品列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.commodityList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_OP_R_B2C)
            })]
          })]
        }), this.state.currOrgType != tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ && this.state.currOrgType != tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB && !this.state.isSaleman && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_7__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [(this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '新增全国商城b2c机构收货地址',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orgReceiptAdress(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '全国商城b2c机构收货地址列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orgReceiptAdressList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '新增地方商城b2c机构收货地址',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orgReceiptAdress(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方商城b2c机构收货地址列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orgReceiptAdressList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C)
            })]
          })]
        }), !this.state.isSaleman && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_7__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [(this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '全国商城b2c订单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orderList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_G_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '全国商城b2c订单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orderList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_HQ_G_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '全国商城b2c订单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orderList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方商城b2c订单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orderList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_R_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方商城b2c订单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orderList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_HQ_R_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP && !this.state.isSaleman && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方商城b2c订单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orderList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_OP_R_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方商城b2c订单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.orderList(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2C)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '运单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.shipSearchBox(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_G_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '运单列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.shipSearchBox(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2C)
            })]
          })]
        }), this.state.currOrgType != tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_7__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [(this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '客服消息列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.customerServiceSearch()
            }), this.state.isSaleman && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '展业申请',
              arrow: 'right',
              hasBorder: true,
              onClick: this.addCommissionBelongto()
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB || this.state.isSaleman) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '新增/编辑供应商',
              arrow: 'right',
              hasBorder: true,
              onClick: this.addEditSupplier(this.state.currOrgType)
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '申请成为供应商',
              arrow: 'right',
              hasBorder: true,
              onClick: this.applySupplier()
            }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP && !this.state.isSaleman || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_G || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '供应商审批列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.supplierAuditList()
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '申请加入机构',
              arrow: 'right',
              hasBorder: true,
              onClick: this.applyJoinOrg()
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '全国供应商列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.supplierSearchBox(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_HQ_G_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方供应商列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.supplierSearchBox(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_HQ_R_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方供应商列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.supplierSearchBox(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_OP_R_B2C)
            }), this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '地方供应商拜访列表',
              arrow: 'right',
              hasBorder: true,
              onClick: this.supplierVisitSearch()
            })]
          })]
        }), (this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_R || this.state.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(tsx_view_Level2View__WEBPACK_IMPORTED_MODULE_7__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListView__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: '物流地图',
              arrow: 'right',
              hasBorder: true,
              onClick: this.go2Map(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2C)
            })
          })]
        }), !isLogin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
          type: "primary",
          size: "mini",
          onClick: this.go2Login,
          children: "\u767B\u5F55"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (Merchant);

/***/ }),

/***/ "./src/page/subject/Merchant.tsx":
/*!***************************************!*\
  !*** ./src/page/subject/Merchant.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_subject_Merchant_Merchant_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/subject/Merchant!./Merchant.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=page/subject/Merchant!./src/page/subject/Merchant.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_subject_Merchant_Merchant_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'page/subject/Merchant', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_page_subject_Merchant_Merchant_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/page/subject/Merchant.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=Merchant.js.map