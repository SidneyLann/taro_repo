"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgfinance/page/finance/CashDepositList"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgfinance/page/finance/CashDepositList!./src/pkgfinance/page/finance/CashDepositList.tsx":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgfinance/page/finance/CashDepositList!./src/pkgfinance/page/finance/CashDepositList.tsx ***!
  \************************************************************************************************************************************************************/
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
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/form/CascadeBox */ "./src/form/CascadeBox.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);














var CashDepositList = /*#__PURE__*/function (_React$Component) {
  function CashDepositList(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, CashDepositList);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, CashDepositList, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "checkedAllList", []);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "currUserId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "searchCashDeposites", function (_ref) {
      var _ref$pageNo = _ref.pageNo,
        pageNo = _ref$pageNo === void 0 ? 1 : _ref$pageNo,
        _ref$pageSize = _ref.pageSize,
        pageSize = _ref$pageSize === void 0 ? tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].PAGE_SIZE : _ref$pageSize;
      var mode = _this.params.mode;
      var uri = '/fn/pub/deposit/search';
      var params = {
        memberId: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ID_NO
      };
      if (_this.currUserId) params.memberId = _this.currUserId;
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          var data = result.body;
          var checkedList = [];
          data.map(function (item, idx) {
            checkedList.push(item.id);
          });
          _this.checkedAllList = [].concat(checkedList);
          _this.setState({
            cashDeposites: data,
            totalRecords: result.totalRecords
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(params), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "editCashDeposit", function (event) {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
      } else if (checkedList.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只能选择一条记录');
      } else {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].FINANCE_CASH_DEPOSIT_ENTITY + '?mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_EDIT + '&id=' + checkedList[0]);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "deleteCashDeposit", function () {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
        return;
      }
      var uri = '/fn/pub/deposit/delete';
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(checkedList), function (res) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, res, true)) {
          _this.setState({
            checkedList: []
          });
          _this.searchCashDeposites({});
        }
      }, function (err) {
        return tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, err, true);
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "detailView", function (event) {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
      } else if (checkedList.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只能选择一条记录');
      } else {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_3__["default"].FINANCE_CASH_DEPOSIT_ENTITY + '?mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_VIEW + '&id=' + checkedList[0]);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "getCashDepositOptions", function (records) {
      var options = [];
      records.map(function (item, indx) {
        var desc = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          justifyContent: "space-between",
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN + 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: item.depositAmount
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: item.interestAmount
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: item.totalAmount
          })]
        });
        options.push({
          value: item.id,
          label: item.memberId,
          desc: desc
        });
      });
      return options;
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "onCheckBoxesAllChanged", function (name, selectedValues) {
      if (selectedValues.length == 0) {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, name, []));
      } else {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, name, _this.checkedAllList));
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "onCascadeBoxChanged", function (name, selectedValues) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, name, selectedValues));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.state = {
      cashDeposites: [],
      checkedList: [],
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_12__["default"])(CashDepositList, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__["default"])(CashDepositList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.searchCashDeposites({});
    }
  }, {
    key: "render",
    value: function render() {
      var mode = this.params.mode;
      var _this$state = this.state,
        cashDeposites = _this$state.cashDeposites,
        checkedList = _this$state.checkedList;
      var options = this.getCashDepositOptions(cashDeposites);
      var topNavBarTitle = '存款列表';
      var commandLabel3 = '删除';
      var commandLabel4 = '编辑';
      var command4 = this.editCashDeposit;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        topNavBarTitle: topNavBarTitle,
        bottomLabel1: '全选',
        bottomFunc1: this.onCheckBoxesAllChanged,
        bottomLabel2: '明细',
        bottomFunc2: this.detailView,
        bottomLabel3: commandLabel3,
        bottomFunc3: this.deleteCashDeposit,
        bottomLabel4: commandLabel4,
        bottomFunc4: command4,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: "checkedList",
          options: options,
          value: checkedList,
          onChange: this.onCascadeBoxChanged,
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
          BrHeight: 1
        })
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (CashDepositList);

/***/ }),

/***/ "./src/pkgfinance/page/finance/CashDepositList.tsx":
/*!*********************************************************!*\
  !*** ./src/pkgfinance/page/finance/CashDepositList.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgfinance_page_finance_CashDepositList_CashDepositList_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgfinance/page/finance/CashDepositList!./CashDepositList.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgfinance/page/finance/CashDepositList!./src/pkgfinance/page/finance/CashDepositList.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgfinance_page_finance_CashDepositList_CashDepositList_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgfinance/page/finance/CashDepositList', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgfinance_page_finance_CashDepositList_CashDepositList_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pkgfinance/page/finance/CashDepositList.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=CashDepositList.js.map