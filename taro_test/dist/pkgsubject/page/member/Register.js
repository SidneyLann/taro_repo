"use strict";require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgsubject/page/member/Register"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/member/Register!./src/pkgsubject/page/member/Register.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/member/Register!./src/pkgsubject/page/member/Register.tsx ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_layout_CardLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/layout/CardLayout */ "./src/layout/CardLayout.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/form/GeneralButton */ "./src/form/GeneralButton.tsx");
/* harmony import */ var tsx_form_UploadButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/form/UploadButton */ "./src/form/UploadButton.tsx");
/* harmony import */ var tsx_view_SimpleIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tsx/view/SimpleIcon */ "./src/view/SimpleIcon.tsx");
/* harmony import */ var img_p_setting_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! img/p/setting.png */ "./src/static/images/p/setting.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);



















var Register = /*#__PURE__*/function (_React$Component) {
  function Register(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__["default"])(this, Register);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_15__["default"])(this, Register, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "labels0", {
      avatar: '头像',
      nickName: '昵称',
      loginName: '登录名称',
      password: '密码'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "register", function (uri) {
      var loginName = _this.state.loginName;
      var password = _this.state.password;
      var wxNickName = _this.state.wxNickName;
      var wxAvatar = _this.state.wxAvatar;
      var weId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('weId');
      if ("weapp" == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TARO_ENV_WEAPP) {
        if (!weId) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '微信编号不能为空, 请重新打开如下微信小程序：柏君商城');
          return;
        }
        if (!wxAvatar) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '头像不能为空');
          return;
        }
        if (!wxNickName) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '昵称不能为空');
          return;
        }
      }
      if (!loginName) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '登录名不能为空');
        return;
      }
      if (!password) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '密码不能为空');
        return;
      } else if (password.length < 8 || password.length > 20) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '密码长度应在8到20之间');
        return;
      }
      var param = {
        loginName: loginName,
        password: password,
        weId: weId,
        wxNickName: wxNickName,
        wxAvatar: wxAvatar
      };
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].sleep(3000).then(function () {
            tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
            tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].MEMBER_LOGIN);
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      console.log(wxNickName);
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(param), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onRegister", function () {
      _this.register('/mb/pub/2/create');
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onAssociate", function () {
      _this.register('/mb/pub/wechat/associate/2/update');
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, name, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onInputNickName", function (event) {
      var value = event.detail.value;
      _this.setState({
        wxNickName: value
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "setWxAvatar", function (event) {
      var avatarUrl = event.detail.avatarUrl;
      var file = {};
      file.path = avatarUrl;
      file.fileCategory = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].BIZZ_CAT_NOAUTH;
      file.targetUri = '/rs/pub/file/upload/2/create';
      var succ = function succ(result) {
        if (result.statusCode) result = JSON.parse(result.data);
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          _this.setState({
            wxAvatar: result.body
          });
        }
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].uploadSingleFile(_this, file, succ);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "cancelDialog", function () {
      _this.setState({
        open: false
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "confirmDialog", function () {});
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.state = {
      loginName: '',
      password: '',
      wxNickName: '',
      wxAvatar: '',
      open: false,
      backgroundImage: 'data:image/jpg;base64,',
      cutoutImage: 'data:image/jpg;base64,',
      serialNo: '',
      topLeftY: 0,
      topLeftX: 0,
      timeLeft: 0,
      buttonText: "获取验证码",
      buttonDisabled: false,
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_17__["default"])(Register, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_18__["default"])(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "onCutoutPositionMatch",
    value: function onCutoutPositionMatch() {
      var that = this;
      setTimeout(function () {
        that.setState({
          open: false,
          timeLeft: 120,
          buttonDisabled: true
        });
      }, 500);
      var downloadTimer = setInterval(function () {
        var text = "(" + that.state.timeLeft + ")";
        var nextTimeleft = that.state.timeLeft - 1;
        that.setState({
          buttonText: text,
          timeLeft: nextTimeleft
        });
        if (that.state.timeLeft < 0) {
          clearInterval(downloadTimer);
          that.setState({
            timeLeft: 0,
            buttonDisabled: false,
            buttonText: "获取验证码"
          });
        }
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var ui4NickNameAndAvatar = [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 16,
        backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        justifyContent: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_UploadButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          openType: "chooseAvatar",
          onChooseAvatar: this.setWxAvatar,
          type: "secondary",
          size: "mini",
          children: "\u9009\u62E9\u5934\u50CF"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_SimpleIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
          value: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE_PREFIX + this.state.wxAvatar
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 16,
        backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "nickname",
        name: "wxNickName",
        label: "\u6635\u79F0",
        value: this.state.wxNickName,
        onChange: this.onInputChanged,
        bindblur: this.onInputChanged
      })];
      var ui4Association = [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 32,
        backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "primary",
        size: "mini",
        onClick: this.onAssociate,
        children: "\u5173\u8054\u5DF2\u6709\u5E10\u53F7"
      })];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        topNavBarTitle: "\u6CE8\u518C",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_CardLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: '注册',
          thumb: img_p_setting_png__WEBPACK_IMPORTED_MODULE_12__,
          children: [ui4NickNameAndAvatar, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: 16,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
            type: "text",
            name: "loginName",
            label: "\u767B\u5F55\u540D",
            value: this.state.loginName,
            onChange: this.onInputChanged
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: 16,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
            type: "text",
            name: "password",
            label: "\u5BC6\u7801",
            value: this.state.password,
            onChange: this.onInputChanged,
            password: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: 64,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            type: "primary",
            size: "mini",
            onClick: this.onRegister,
            children: "\u6CE8\u518C\u65B0\u8D26\u53F7"
          }), "weapp" == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].TARO_ENV_WEAPP && ui4Association]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: 106,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_TRANS_WHITE
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./src/form/UploadButton.tsx":
/*!***********************************!*\
  !*** ./src/form/UploadButton.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "webpack/container/remote/@linaria/react");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_linaria_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





var _templateObject;





var Button0 = (0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Button)(_templateObject || (_templateObject = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__["default"])(["\ndisplay: flex;\nflex-direction: row;\nposition: relative;\njustify-content: ", ";\nalign-items: ", ";\nalign-self: ", ";\nwidth: ", ";\nheight: ", ";\nbackground-color: ", ";\n"])), function (props) {
  return props.justifyContent;
}, function (props) {
  return props.alignItems;
}, function (props) {
  return props.alignSelf;
}, function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.backgroundColor;
});
var UploadButton = /*#__PURE__*/function (_React$Component) {
  function UploadButton() {
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, UploadButton);
    return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, UploadButton, arguments);
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(UploadButton, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(UploadButton, [{
    key: "render",
    value: function render() {
      var left = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssWidthValue(this.props.left, 0);
      var bottom = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssHeightValue(this.props.bottom, 0);
      var top = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssHeightValue(this.props.top, 0);
      var right = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssWidthValue(this.props.right, 0);
      var justifyContent = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssStrValue(this.props.justifyContent, 'flex-start');
      var alignItems = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssStrValue(this.props.alignItems, 'flex-start');
      var alignSelf = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssStrValue(this.props.alignSelf, 'flex-start');
      var width = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssWidthValue(this.props.width, 'auto');
      var height = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssHeightValue(this.props.height, 'auto');
      var marginTop = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssHeightValue(this.props.marginTop, 0);
      var marginBottom = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getCssHeightValue(this.props.marginBottom, 0);
      var backgroundColor = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getColorValue(this.props.backgroundColor);
      var type = this.props.type ? this.props.type : 'primary';
      var size = this.props.size ? this.props.size : 'mini';
      var plain = this.props.plain ? true : false;
      var disabled = this.props.disabled ? true : false;
      var paddingLeft = 3;
      if (false) {}
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: type,
        size: size,
        openType: this.props.openType,
        onChooseAvatar: this.props.onChooseAvatar,
        disabled: disabled,
        backgroundColor: backgroundColor,
        onClick: this.props.onClick,
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          width: width,
          height: height,
          fontSize: 10,
          marginTop: 0,
          marginLeft: 0,
          paddingLeft: paddingLeft,
          paddingRight: 0,
          paddingTop: 0
        },
        children: this.props.children
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (UploadButton);

/***/ }),

/***/ "./src/pkgsubject/page/member/Register.tsx":
/*!*************************************************!*\
  !*** ./src/pkgsubject/page/member/Register.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_member_Register_Register_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/member/Register!./Register.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/member/Register!./src/pkgsubject/page/member/Register.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_member_Register_Register_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgsubject/page/member/Register', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_member_Register_Register_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgsubject/page/member/Register.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=Register.js.map