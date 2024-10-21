"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgsubject/page/supplier/SupplierVisitList"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierVisitList!./src/pkgsubject/page/supplier/SupplierVisitList.tsx":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierVisitList!./src/pkgsubject/page/supplier/SupplierVisitList.tsx ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/Permissions */ "./src/common/Permissions.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/form/CascadeBox */ "./src/form/CascadeBox.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);















var SupplierVisitList = /*#__PURE__*/function (_React$Component) {
  function SupplierVisitList(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, SupplierVisitList);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, SupplierVisitList, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "labels", {
      supplierId: '供应商编号',
      intervieweeName: '被访人姓名'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "fetchSupplierVisit", function (_ref) {
      var _ref$pageNo = _ref.pageNo,
        pageNo = _ref$pageNo === void 0 ? 1 : _ref$pageNo,
        _ref$supplierId = _ref.supplierId,
        supplierId = _ref$supplierId === void 0 ? _this.params.supplierId : _ref$supplierId,
        _ref$intervieweeName = _ref.intervieweeName,
        intervieweeName = _ref$intervieweeName === void 0 ? _this.params.intervieweeName : _ref$intervieweeName,
        _ref$createBy = _ref.createBy,
        createBy = _ref$createBy === void 0 ? _this.params.createBy : _ref$createBy,
        _ref$createTime = _ref.createTime,
        createTime = _ref$createTime === void 0 ? _this.params.createTime : _ref$createTime,
        _ref$createTime2 = _ref.createTime2,
        createTime2 = _ref$createTime2 === void 0 ? _this.params.createTime2 : _ref$createTime2;
      var searchParam = {
        supplierId: supplierId,
        intervieweeName: intervieweeName,
        createBy: createBy,
        createTime: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].appendTime(createTime),
        createTime2: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].appendTime(createTime2)
      };
      var uri = "/sp/pub/visit/search";
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          var data = result.body;
          _this.setState({
            entities: data,
            totalRecords: result.totalRecords
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(searchParam), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "getSupplierVisitOptions", function (records) {
      var options = [];
      records.map(function (item, indx) {
        var desc = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
          justifyContent: "space-between",
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN + 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: item.supplierId
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: item.intervieweeName
          })]
        });
        options.push({
          value: item.id,
          label: item.supplierName,
          desc: desc
        });
      });
      return options;
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "detailFunc", function (mode) {
      return function (event) {
        var checkedList = _this.state.checkedList;
        if (checkedList.length == 0) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
        } else if (checkedList.length > 1) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只能选择一条记录');
        } else {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].SUPPLIER_VISIT_ENTITY + '?mode=' + mode + '&id=' + checkedList[0]);
        }
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "onCheckBoxesAllChanged", function (name, selectedValues) {
      if (selectedValues.length == 0) {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, name, []));
      } else {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, name, _this.checkedAllList));
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "onCascadeBoxChanged", function (name, selectedValues) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, name, selectedValues));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, name, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "onClose", function (name) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, name, false));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.state = {
      entities: [],
      supplierId: '',
      intervieweeName: '',
      remark: '',
      totalRecords: 0,
      checkedList: [],
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_13__["default"])(SupplierVisitList, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_14__["default"])(SupplierVisitList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSupplierVisit({});
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        entities = _this$state.entities,
        checkedList = _this$state.checkedList;
      var options = this.getSupplierVisitOptions(entities);
      var topNavBarTitle = '供应商访问列表';
      var commandLabel5 = '';
      var command5 = this.approvePrepare;
      if (tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasRole(tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].authorities.OP_SALEMAN) && !tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasRole(tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].authorities.OP_ROOT)) {
        //commandLabel5='编辑';
        //command5=this.detailFunc(cnst.SHOW_MODE_EDIT);
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        that: this,
        topNavBarTitle: topNavBarTitle,
        bottomLabel1: '全选',
        bottomFunc1: this.onCheckBoxesAllChanged,
        bottomLabel2: '明细',
        bottomFunc2: this.detailFunc(tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_VIEW),
        bottomLabel5: commandLabel5,
        bottomFunc5: command5,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
          name: "checkedList",
          options: options,
          value: checkedList,
          onChange: this.onCascadeBoxChanged
        })
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (SupplierVisitList);

/***/ }),

/***/ "./src/pkgsubject/page/supplier/SupplierVisitList.tsx":
/*!************************************************************!*\
  !*** ./src/pkgsubject/page/supplier/SupplierVisitList.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_supplier_SupplierVisitList_SupplierVisitList_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierVisitList!./SupplierVisitList.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/supplier/SupplierVisitList!./src/pkgsubject/page/supplier/SupplierVisitList.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_supplier_SupplierVisitList_SupplierVisitList_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgsubject/page/supplier/SupplierVisitList', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_supplier_SupplierVisitList_SupplierVisitList_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pkgsubject/page/supplier/SupplierVisitList.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=SupplierVisitList.js.map