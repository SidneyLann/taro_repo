"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgsubject/page/servicestation/ServiceStationList"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/servicestation/ServiceStationList!./src/pkgsubject/page/servicestation/ServiceStationList.tsx":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/servicestation/ServiceStationList!./src/pkgsubject/page/servicestation/ServiceStationList.tsx ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);












var ServiceStationList = /*#__PURE__*/function (_React$Component) {
  function ServiceStationList(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, ServiceStationList);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, ServiceStationList, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "currOrgId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "orgType", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currOrgType'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "fetchStore", function (_ref) {
      var _ref$pageNo = _ref.pageNo,
        pageNo = _ref$pageNo === void 0 ? 1 : _ref$pageNo,
        _ref$status = _ref.status,
        status = _ref$status === void 0 ? _this.state.currentStatus : _ref$status,
        _ref$pageSize = _ref.pageSize,
        pageSize = _ref$pageSize === void 0 ? _this.state.rowsPerPage : _ref$pageSize,
        _ref$storeName = _ref.storeName,
        storeName = _ref$storeName === void 0 ? _this.state.storeName : _ref$storeName,
        _ref$createTime = _ref.createTime,
        createTime = _ref$createTime === void 0 ? _this.state.createTime : _ref$createTime,
        _ref$createTime2 = _ref.createTime2,
        createTime2 = _ref$createTime2 === void 0 ? _this.state.createTime2 : _ref$createTime2;
      var searchParam = {
        pageNo: pageNo,
        status: status,
        pageSize: pageSize,
        storeName: storeName,
        createTime: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].appendTime(createTime),
        createTime2: createTime2
      };
      searchParam.operatorId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem("currOrgId");
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          _this.setState({
            serviceStations: res.body
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, "/ss/pub/search", JSON.stringify(searchParam), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "changeStore", function (event, id) {
      if (_this.state.selected.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请先选中才可以修改");
      } else if (_this.state.selected.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "每次只能修改一个社区店");
      } else {
        _this.props.history.push("/mgt/createStore?mode=3&id=" + id);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "detailStore", function (event, id) {
      if (_this.state.selected.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请先选中才可以明细");
      } else if (_this.state.selected.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "每次只能明细一个社区店");
      } else {
        _this.props.history.push("/mgt/createStore?mode=5&id=" + id);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "amountDelete", function () {
      console.log("amount delete");
      if (_this.state.selected.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请先选中才可以删除");
      } else {
        var succ = function succ(result) {
          if (result.code == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].CODE_COMM_0_SUCCESS) {
            _that.fetchStore({});
          } else tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(this, result.message);
        };
        var err = function err(result) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(this, "请求失败:" + result.message);
        };
        var _that = _this;
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, "/ss/pub/delete", JSON.stringify(_this.state.selected), succ, err);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleChange", function (name) {
      return function (event) {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, event.target.value));
        console.log(event.target.value);
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "checkStore", function (event, id) {
      if (_this.state.selected.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请先选中才可以审批");
      } else if (_this.state.selected.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "每次只能审批一个社区店");
      } else {
        _this.setState({
          openCheckDialog: true
        });
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "passcheck", function (rowId, reason, pass) {
      function succ(result) {
        if (result.code == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].CODE_COMM_0_SUCCESS) {
          that.fetchStore({});
        } else tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(this, result.message);
      }
      function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(this, "请求失败:" + result.message);
      }
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, "/ss/pub/approve/update", "id=" + rowId + "&pass=" + pass + "&remark=" + reason, succ, err, "application/x-www-form-urlencoded");
      _this.setState({
        openCheckDialog: false
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "closeCheckDialog", function () {
      _this.setState({
        openCheckDialog: false
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleSelectAllClick", function (event) {
      if (event.target.checked) {
        _this.setState(function (state) {
          return {
            selected: state.stores.map(function (n) {
              return n.id;
            })
          };
        });
        return;
      }
      _this.setState({
        selected: []
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "getServiceStationOptions", function (records) {
      var options = [];
      records.map(function (item, indx) {
        var desc = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
          justifyContent: "space-between",
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN + 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: item.legalRepresentative
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: item.contactName
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
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "onCheckBoxesAllChanged", function (name, selectedValues) {
      if (selectedValues.length == 0) {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, []));
      } else {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, _this.checkedAllList));
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "onCascadeBoxChanged", function (name, selectedValues) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, selectedValues));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.state = {
      serviceStations: [],
      checkedList: [],
      supplierName: "",
      messages: {}
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__["default"])(ServiceStationList, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(ServiceStationList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchStore({});
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        serviceStations = _this$state.serviceStations,
        currPage = _this$state.currPage,
        totalRecords = _this$state.totalRecords,
        checkedList = _this$state.checkedList;
      var options = this.getServiceStationOptions(serviceStations);
      var topNavBarTitle = this.params.orgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB ? '会员收货地址列表' : '机构收货地址列表';
      var commandLabel3 = '删除';
      var commandLabel4 = '编辑';
      var command4 = this.editAddress;
      if (this.params.mode == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_LIST2) {
        if (this.params.orgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_MB) {
          commandLabel4 = '';
        } else {
          commandLabel3 = '';
          commandLabel4 = '添加';
          command4 = this.cloneAddress;
        }
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        that: this,
        topNavBarTitle: topNavBarTitle,
        bottomLabel1: '全选',
        bottomFunc1: this.onCheckBoxesAllChanged,
        bottomLabel2: '明细',
        bottomFunc2: this.detailAddresss,
        bottomLabel3: commandLabel3,
        bottomFunc3: this.deleteAddress,
        bottomLabel4: commandLabel4,
        bottomFunc4: command4,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CascadeBox, {
          name: "checkedList",
          options: options,
          value: checkedList,
          onChange: this.onCascadeBoxChanged
        })
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (ServiceStationList);

/***/ }),

/***/ "./src/pkgsubject/page/servicestation/ServiceStationList.tsx":
/*!*******************************************************************!*\
  !*** ./src/pkgsubject/page/servicestation/ServiceStationList.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_servicestation_ServiceStationList_ServiceStationList_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/servicestation/ServiceStationList!./ServiceStationList.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgsubject/page/servicestation/ServiceStationList!./src/pkgsubject/page/servicestation/ServiceStationList.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_servicestation_ServiceStationList_ServiceStationList_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgsubject/page/servicestation/ServiceStationList', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgsubject_page_servicestation_ServiceStationList_ServiceStationList_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pkgsubject/page/servicestation/ServiceStationList.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=ServiceStationList.js.map