"use strict";require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgsubject/page/others/OrgJoinApplication"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/others/OrgJoinApplication!./src/pkgsubject/page/others/OrgJoinApplication.tsx":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/others/OrgJoinApplication!./src/pkgsubject/page/others/OrgJoinApplication.tsx ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/form/SelectInput */ "./src/form/SelectInput.tsx");
/* harmony import */ var tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/form/CascadeBox */ "./src/form/CascadeBox.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
















var OrgJoinApplication = /*#__PURE__*/function (_React$Component) {
  function OrgJoinApplication(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, OrgJoinApplication);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_12__["default"])(this, OrgJoinApplication, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "labels", (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])({}, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B, '供应商名称'), tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ, '总部名称'), tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP, '运营中心名称'), tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS, '服务站名称'), "personType", '人员类型'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "currOrgType", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgType'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "searchOrgList", function () {
      var orgType = _this.state.orgType;
      var uriName = '';
      if (orgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B) uriName = 'supplier';else if (orgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ) uriName = 'headquarter';else if (orgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP) uriName = 'operator';else if (orgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS) uriName = 'servicestation';
      var uri = "/".concat(uriName, "/name/search");
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          _this.setState({
            entities: result.body
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])({
        orgType: orgType
      }, "".concat(uriName, "Name"), _this.state.orgName)), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "getOrgOptions", function (records) {
      var options = [];
      records.map(function (item, indx) {
        var desc = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: item.first
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: item.third
          })]
        });
        options.push({
          value: item.first,
          label: item.second,
          desc: desc
        });
      });
      return options;
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "submitFunc", function () {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
        return;
      } else if (checkedList.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只能选择一条记录');
        return;
      }
      var id = checkedList[0];
      var orgName = _this.state.entities.find(function (e) {
        return e.first == id;
      }).second;
      var personType = _this.state.personType;
      var uri = "/mb/pub/org/join?orgId=".concat(id, "&orgName=").concat(orgName, "&personType=").concat(personType);
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {}
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpGet(_this, uri, succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "onCascadeBoxChanged", function (name, selectedValues) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])({}, name, selectedValues));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "onInputChanged", function (name, value) {
      // if (this.state.mode != cnst.SHOW_MODE_LIST)
      // this.validateFields(this, validator, name, value);

      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])({}, name, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "goBack", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].goBack();
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.state = {
      entities: [],
      orgType: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B,
      orgTypeOptions: [{
        value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SP_B,
        label: '供应商'
      }, {
        value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_HQ,
        label: '总部'
      }, {
        value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_OP,
        label: '运营中心'
      }, {
        value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS,
        label: '服务站'
      }],
      orgName: '',
      personTypeOptions: [{
        value: 1,
        label: '兼职'
      }, {
        value: 3,
        label: '全职'
      }],
      personType: 1,
      checkedList: [],
      errors: {
        orgName: false
      }
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_14__["default"])(OrgJoinApplication, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__["default"])(OrgJoinApplication, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        entities = _this$state.entities,
        orgTypeOptions = _this$state.orgTypeOptions,
        orgType = _this$state.orgType,
        orgName = _this$state.orgName,
        personTypeOptions = _this$state.personTypeOptions,
        personType = _this$state.personType,
        checkedList = _this$state.checkedList;
      var options = this.getOrgOptions(entities);
      var labelKey = 'label';
      var valueKey = 'value';
      var labelWidth = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_LABEL;
      var valueWidth = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_VALUE;
      var topNavBarTitle = '加入机构申请';
      var command1Label = '查找';
      var command1 = this.searchOrgList;
      var command2Label = '申请';
      var command2 = this.submitFunc;
      var disabled = false;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        topNavBarTitle: topNavBarTitle,
        bottomLabel3: command1Label,
        bottomFunc3: command1,
        bottomLabel4: command2Label,
        bottomFunc4: command2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_3__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
          options: orgTypeOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: orgType,
          onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].onValueChange(this, 'orgType'),
          label: '*机构类型',
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_3__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: 'orgName',
          label: this.labels[orgType],
          type: 'text',
          value: orgName,
          error: this.state.errors.orgName,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_3__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
          options: personTypeOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: personType,
          onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].onValueChange(this, 'personType'),
          label: '*' + this.labels.personType,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_3__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "checkedList",
          options: options,
          value: checkedList,
          onChange: this.onCascadeBoxChanged
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (OrgJoinApplication);

/***/ }),

/***/ "./src/pkgsubject/page/others/OrgJoinApplication.tsx":
/*!***********************************************************!*\
  !*** ./src/pkgsubject/page/others/OrgJoinApplication.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_others_OrgJoinApplication_OrgJoinApplication_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/others/OrgJoinApplication!./OrgJoinApplication.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/others/OrgJoinApplication!./src/pkgsubject/page/others/OrgJoinApplication.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_others_OrgJoinApplication_OrgJoinApplication_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgsubject/page/others/OrgJoinApplication', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_others_OrgJoinApplication_OrgJoinApplication_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgsubject/page/others/OrgJoinApplication.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=OrgJoinApplication.js.map