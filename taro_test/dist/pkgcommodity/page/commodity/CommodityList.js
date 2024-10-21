"use strict";require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");require("../../sub-common/df5d0bc6f71f596ab4b59a770bc05ed1.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgcommodity/page/commodity/CommodityList"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgcommodity/page/commodity/CommodityList!./src/pkgcommodity/page/commodity/CommodityList.tsx":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgcommodity/page/commodity/CommodityList!./src/pkgcommodity/page/commodity/CommodityList.tsx ***!
  \****************************************************************************************************************************************************************/
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
/* harmony import */ var tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/Permissions */ "./src/common/Permissions.tsx");
/* harmony import */ var tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/common/Statuses */ "./src/common/Statuses.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tsx/form/CascadeBox */ "./src/form/CascadeBox.tsx");
/* harmony import */ var tsx_component_TaroModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tsx/component/TaroModal */ "./src/component/TaroModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);




















var CommodityList = /*#__PURE__*/function (_React$Component) {
  function CommodityList(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__["default"])(this, CommodityList);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_15__["default"])(this, CommodityList, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "labels0", {
      remark: '备注'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "labels1", (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_17__["default"])({}, _this.labels0));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "labels", (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_17__["default"])({}, _this.labels1));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "errors", {
      remark: false
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "checkedAllList", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "topNavBarTitle", '商品列表');
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "searchCommodity", function (_ref) {
      var _ref$pageNo = _ref.pageNo,
        pageNo = _ref$pageNo === void 0 ? 1 : _ref$pageNo,
        _ref$commodityName = _ref.commodityName,
        commodityName = _ref$commodityName === void 0 ? _this.params.commodityName : _ref$commodityName,
        _ref$supplierName = _ref.supplierName,
        supplierName = _ref$supplierName === void 0 ? _this.params.supplierName : _ref$supplierName,
        _ref$commodityNo = _ref.commodityNo,
        commodityNo = _ref$commodityNo === void 0 ? _this.params.commodityNo : _ref$commodityNo,
        _ref$status = _ref.status,
        status = _ref$status === void 0 ? _this.params.status : _ref$status,
        _ref$remark = _ref.remark,
        remark = _ref$remark === void 0 ? _this.params.remark : _ref$remark,
        _ref$createTime = _ref.createTime,
        createTime = _ref$createTime === void 0 ? _this.params.createTime : _ref$createTime,
        _ref$createTime2 = _ref.createTime2,
        createTime2 = _ref$createTime2 === void 0 ? _this.params.createTime2 : _ref$createTime2;
      var operatorId = _this.params.operatorId;
      var supplierId = _this.params.supplierId;
      if (!operatorId) {
        //operatorId = cnst.ID_NO;
      }
      var params = {
        operatorId: operatorId,
        supplierId: supplierId,
        commodityName: commodityName,
        supplierName: supplierName,
        commodityNo: commodityNo,
        status: status,
        remark: remark,
        createTime: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].appendTime(createTime),
        createTime2: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].appendTime(createTime2),
        pageNo: pageNo
      };
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          var data = result.body;
          var checkedList = [];
          data.map(function (item, idx) {
            checkedList.push(item.id);
          });
          _this.checkedAllList = [].concat(checkedList);
          _this.setState({
            commodities: data,
            totalRecords: result.totalRecords
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      var uri = '';
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B) {
        uri = "/cm/pub/b2b/global/commodity/";
        _this.topNavBarTitle = '全国b2b商品列表';
      } else if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) {
        uri = "/cm/pub/b2c/global/commodity/";
        _this.topNavBarTitle = '全国b2c商品列表';
      } else if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) {
        uri = "/cm/pub/b2b/region/commodity/";
        _this.topNavBarTitle = '地方b2b商品列表';
      } else if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) {
        uri = "/cm/pub/b2c/region/commodity/";
        _this.topNavBarTitle = '地方b2c商品列表';
      }
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri + "search", JSON.stringify(params), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "editFunc", function (event) {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
      } else if (checkedList.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只能选择一条记录');
      } else {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_5__["default"].COMMODITY_COMMODITY_PUBLISH + '?mallType=' + _this.params.mallType + '&mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_EDIT + '&id=' + checkedList[0] + '&activeStep=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MAX_STEP_NUM);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "detailFunc", function (event) {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
      } else if (checkedList.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只能选择一条记录');
      } else {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_5__["default"].COMMODITY_COMMODITY_PUBLISH + '?mallType=' + _this.params.mallType + '&mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_VIEW + '&id=' + checkedList[0] + '&activeStep=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MAX_STEP_NUM);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "pullOn", function (event) {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请至少选中一项");
        return;
      }
      var uri = "/cm/pub/b2b/global/commodity/pullon/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/cm/pub/b2c/global/commodity/pullon/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/cm/pub/b2b/region/commodity/pullon/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/cm/pub/b2c/region/commodity/pullon/update";
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(checkedList), function (result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            checkedList: []
          });
          _this.searchCommodity({});
        }
      }, function (err) {
        return tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, err.message);
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "approvePrepare", function () {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请至少选中一项");
      } else {
        _this.setState({
          popupApprove: true
        });
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "approve", function () {
      _this.approval(true);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "reject", function () {
      _this.approval(false);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "approval", function (pass) {
      var remark = _this.state.remark;
      if (!pass && !remark) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请填写备注');
        return;
      }
      var checkedList = _this.state.checkedList;
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            checkedList: []
          });
          _this.searchCommodity({});
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请求失败:' + result.message);
      };
      var ids = '';
      checkedList.map(function (id) {
        ids = ids + 'ids=' + id + '&';
      });
      var uri = "/cm/pub/b2b/global/commodity/approve/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/cm/pub/b2c/global/commodity/approve/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/cm/pub/b2b/region/commodity/approve/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/cm/pub/b2c/region/commodity/approve/update";
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, ids + 'pass=' + pass + '&remark=' + remark, succ, err, "application/x-www-form-urlencoded");
      _this.setState({
        remark: '',
        popupApprove: false
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "pullofPrepare", function () {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请至少选中一项");
      } else {
        _this.setState({
          popuppullOff: true
        });
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "pullOff", function () {
      var checkedList = _this.state.checkedList;
      var remark = _this.state.remark;
      if (!remark) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请填写备注');
        return;
      }
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            checkedList: []
          });
          _this.searchCommodity({});
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请求失败:' + result.message);
      };
      var ids = '';
      checkedList.map(function (id) {
        ids = ids + 'ids=' + id + '&';
      });
      var uri = "/cm/pub/b2b/global/commodity/pulloff/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/cm/pub/b2c/global/commodity/pulloff/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/cm/pub/b2b/region/commodity/pulloff/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/cm/pub/b2c/region/commodity/pulloff/update";
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri + '?' + ids + '&remark=' + remark, null, succ, err, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].REQUEST_TYPE_WWW);
      _this.setState({
        remark: '',
        popuppullOff: false
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "remove", function () {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
        return;
      }
      var uri = "/cm/pub/b2b/global/commodity/delete";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/cm/pub/b2c/global/commodity/delete";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/cm/pub/b2b/region/commodity/delete";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/cm/pub/b2c/region/commodity/delete";
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            checkedList: []
          });
          _this.searchCommodity({});
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(checkedList), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "getListOptions", function (records) {
      var options = [];
      records.map(function (item, indx) {
        var desc = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
          justifyContent: "space-around",
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN + 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
            color: "red",
            children: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].currFormat(item.price)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: item.supplierName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_4__["default"].cmdLabel(item.status)
          })]
        });
        options.push({
          value: item.id,
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: item.commodityName
          }),
          desc: desc
        });
      });
      return options;
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onCheckBoxesAllChanged", function (name, selectedValues) {
      if (selectedValues.length == 0) {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, name, []));
      } else {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, name, _this.checkedAllList));
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onCascadeBoxChanged", function (name, selectedValues) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, name, selectedValues));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, name, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onClose", function (name) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, name, false));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.state = {
      commodities: [],
      commodityName: '',
      createTime2: ' ',
      commodityNo: '',
      supplierName: '',
      createTime: ' ',
      remark: '',
      image: '',
      ids: '',
      page: 1,
      rowsPerPage: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].PAGE_SIZE,
      totalRecords: 0,
      checkedList: []
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_18__["default"])(CommodityList, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__["default"])(CommodityList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.searchCommodity({});
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        commodities = _this$state.commodities,
        totalRecords = _this$state.totalRecords,
        rowsPerPage = _this$state.rowsPerPage,
        currentStatus = _this$state.currentStatus,
        checkedList = _this$state.checkedList;
      var show = {
        edit: false,
        pullOn: false,
        approve: false,
        pullOff: false,
        remove: false
      };
      if (tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasRole(tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].authorities.HQ_BASIC) || tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasRole(tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].authorities.OP_BASIC)) {
        show.approve = true;
        show.pullOff = true;
      } else if (tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasRole(tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].authorities.SP_BASIC_R) || tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasRole(tsx_common_Permissions__WEBPACK_IMPORTED_MODULE_3__["default"].authorities.SP_BASIC_G)) {
        show.edit = true;
        show.pullOn = true;
        show.pullOff = true;
        show.remove = true;
      }
      var options = this.getListOptions(commodities);
      var commandLabel3 = show.remove ? '删除' : '';
      var commandLabel4 = show.edit ? '编辑' : '';
      var commandLabel5 = show.pullOn ? '上架' : '';
      var commandLabel6 = show.pullOff ? '下架' : '';
      var commandLabel7 = show.approve ? '审批' : '';
      var command4 = this.editFunc;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        that: this,
        topNavBarTitle: this.topNavBarTitle,
        bottomLabel1: '全选',
        bottomFunc1: this.onCheckBoxesAllChanged,
        bottomLabel2: '明细',
        bottomFunc2: this.detailFunc,
        bottomLabel3: commandLabel3,
        bottomFunc3: this.remove,
        bottomLabel4: commandLabel4,
        bottomFunc4: command4,
        bottomLabel5: commandLabel5,
        bottomFunc5: this.pullOn,
        bottomLabel6: commandLabel6,
        bottomFunc6: this.pullofPrepare,
        bottomLabel7: commandLabel7,
        bottomFunc7: this.approvePrepare,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_8__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_NEAR_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
          name: "checkedList",
          options: options,
          value: checkedList,
          onChange: this.onCascadeBoxChanged
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_component_TaroModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
          isOpened: this.state.popupApprove,
          onClose: function onClose(e) {
            return _this2.onClose('popupApprove', e);
          },
          onConfirm: this.approve,
          onCancel: this.reject,
          confirmText: "\u901A\u8FC7",
          cancelText: "\u62D2\u7EDD",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: 'remark',
            label: this.labels.remark,
            type: 'text',
            value: this.state.remark,
            error: this.errors.remark,
            onChange: this.onInputChanged
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_component_TaroModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
          isOpened: this.state.popuppullOff,
          onClose: function onClose(e) {
            return _this2.onClose('popuppullOff', e);
          },
          onConfirm: this.pullOff,
          confirmText: "\u786E\u5B9A",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: 'remark',
            label: this.labels.remark,
            type: 'text',
            value: this.state.remark,
            error: this.errors.remark,
            onChange: this.onInputChanged
          })
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (CommodityList);

/***/ }),

/***/ "./src/pkgcommodity/page/commodity/CommodityList.tsx":
/*!***********************************************************!*\
  !*** ./src/pkgcommodity/page/commodity/CommodityList.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgcommodity_page_commodity_CommodityList_CommodityList_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgcommodity/page/commodity/CommodityList!./CommodityList.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgcommodity/page/commodity/CommodityList!./src/pkgcommodity/page/commodity/CommodityList.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgcommodity_page_commodity_CommodityList_CommodityList_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgcommodity/page/commodity/CommodityList', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgcommodity_page_commodity_CommodityList_CommodityList_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","sub-common/df5d0bc6f71f596ab4b59a770bc05ed1","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgcommodity/page/commodity/CommodityList.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=CommodityList.js.map