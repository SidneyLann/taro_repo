"use strict";require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");require("../../sub-common/df5d0bc6f71f596ab4b59a770bc05ed1.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkgorder/page/order/OrderList"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderList!./src/pkgorder/page/order/OrderList.tsx":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderList!./src/pkgorder/page/order/OrderList.tsx ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/Statuses */ "./src/common/Statuses.tsx");
/* harmony import */ var tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/common/URI */ "./src/common/URI.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/form/CascadeBox */ "./src/form/CascadeBox.tsx");
/* harmony import */ var tsx_form_IntegerInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tsx/form/IntegerInput */ "./src/form/IntegerInput.tsx");
/* harmony import */ var tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tsx/form/SelectInput */ "./src/form/SelectInput.tsx");
/* harmony import */ var tsx_component_TaroModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tsx/component/TaroModal */ "./src/component/TaroModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);






var _dec, _class;
















var OrderList = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_15__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_15__.observer)(_class = /*#__PURE__*/function (_React$Component) {
  function OrderList(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this, OrderList);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_17__["default"])(this, OrderList, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "labels0", {
      returnAddressId: '收货地址',
      remark: '备注'
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "labels1", (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_19__["default"])({}, _this.labels0));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "labels", (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_19__["default"])({}, _this.labels1));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "checkedAllList", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "topNavBarTitle", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "shipType", 1);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "currUserId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem('currUserId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "currOrgId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem("currOrgId"));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "currOrgType", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getAppItem("currOrgType"));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "searchOrder", function (_ref) {
      var _ref$pageNo = _ref.pageNo,
        pageNo = _ref$pageNo === void 0 ? 1 : _ref$pageNo,
        _ref$commodityName = _ref.commodityName,
        commodityName = _ref$commodityName === void 0 ? _this.params.commodityName : _ref$commodityName,
        _ref$supplierName = _ref.supplierName,
        supplierName = _ref$supplierName === void 0 ? _this.params.supplierName : _ref$supplierName,
        _ref$payType = _ref.payType,
        payType = _ref$payType === void 0 ? _this.params.payType : _ref$payType,
        _ref$tradeType = _ref.tradeType,
        tradeType = _ref$tradeType === void 0 ? _this.params.tradeType : _ref$tradeType,
        _ref$status = _ref.status,
        status = _ref$status === void 0 ? _this.params.status : _ref$status,
        _ref$createTime = _ref.createTime,
        createTime = _ref$createTime === void 0 ? _this.params.createTime : _ref$createTime,
        _ref$createTime2 = _ref.createTime2,
        createTime2 = _ref$createTime2 === void 0 ? _this.params.createTime2 : _ref$createTime2;
      var operatorId = _this.params.operatorId;
      var supplierId = _this.params.supplierId;
      var menuParam = _this.params.menuParam;
      if (!operatorId) {
        //operatorId = cnst.ID_NO;
      }
      var params = {
        operatorId: operatorId,
        supplierId: supplierId,
        pageNo: pageNo,
        commodityName: commodityName,
        supplierName: supplierName,
        payType: payType,
        tradeType: tradeType,
        status: status,
        createTime: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].appendTime(createTime),
        createTime2: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].appendTime(createTime2)
      };
      if (menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_R_B2C) {
        params.payerId = _this.currUserId;
        params.supplierId = '';
      }
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result)) {
          var records = result.body;
          var checkedList = [];
          records.map(function (item, idx) {
            checkedList.push(item.id);
          });
          _this.checkedAllList = [].concat(checkedList);
          _this.setState({
            entities: records,
            totalRecords: result.totalRecords
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result);
      };
      var uri = '';
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2B) {
        uri = "/od/pub/b2b/global/ord/";
        _this.topNavBarTitle = '全国b2b订单列表';
      } else if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) {
        uri = "/od/pub/b2c/global/ord/";
        _this.topNavBarTitle = '全国b2c订单列表';
      } else if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) {
        uri = "/od/pub/b2b/region/ord/";
        _this.topNavBarTitle = '地方b2b订单列表';
      } else if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) {
        uri = "/od/pub/b2c/region/ord/";
        _this.topNavBarTitle = '地方b2c订单列表';
      }
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri + "search", JSON.stringify(params), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "detailFunc", function (event) {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
      } else if (checkedList.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只能选择一条记录');
      } else {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].ORDER_ORDER_ENTITY + '?mallType=' + _this.params.mallType + '&mode=' + tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_VIEW + '&id=' + checkedList[0]);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "cancel", function () {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
        return;
      }
      var mallType = _this.params.mallType;
      var uri = "/od/pub/b2b/global/ord/cancel/update";
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/od/pub/b2c/global/ord/cancel/update";
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/od/pub/b2b/region/ord/cancel/update";
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/od/pub/b2c/region/ord/cancel/update";
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            'checkedList': []
          });
          _this.searchOrder({});
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(checkedList), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "deliver", function () {
      var _this$state = _this.state,
        checkedList = _this$state.checkedList,
        entities = _this$state.entities;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
        return;
      }
      var immediatelyTrueCount = 0;
      var immediatelyFalseCount = 0;
      var returnAddressId = '';
      var receiptAddressId = '';
      var selectedOrders = [];
      var invalidStatus = false;
      var addrDiffReceive = false;
      var addrDiffReturn = false;
      var invalidRole = false;
      var menuParam = _this.params.menuParam;
      entities.map(function (item) {
        if (checkedList.includes(item.id)) {
          if (item.immediately === true) immediatelyTrueCount++;else immediatelyFalseCount++;
          if (menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_R_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_OP_G_B2B || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2B) {
            if (!(item.status == tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_SHIP || item.status == tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_RETURN_DELIVER)) {
              invalidStatus = true;
            }
            if (!item.returnAddressId || item.returnAddressId != returnAddressId && returnAddressId != '') {
              addrDiffReturn = true;
            }
            _this.shipType = 3;
          } else if (menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_G_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_R_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_G_B2B || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_R_B2B || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2C) {
            if (!(item.status == tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_SHIP || item.status == tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ord.STATUS_WAIT_RETURN_DELIVER)) {
              invalidStatus = true;
            }
            if (!item.receiptAddressId || item.receiptAddressId != receiptAddressId && receiptAddressId != '') {
              addrDiffReceive = true;
            }
          } else {
            invalidRole = true;
          }
          selectedOrders.push(item);
          returnAddressId = item.returnAddressId;
          receiptAddressId = item.receiptAddressId;
        }
      });
      if (immediatelyTrueCount > 0 && immediatelyFalseCount > 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '即时配送和普通配送不能一起发货');
        return;
      }
      if (invalidRole == true) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只有供应商能发货或买家发退货');
        return;
      }
      if (invalidStatus == true) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '订单不是待发货状态');
        return;
      }
      if (addrDiffReceive == true) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '收货地址不能是多个地址');
        return;
      }
      if (addrDiffReturn == true) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '订单不处于待发退货状态或退货地址不能是多个地址');
        return;
      }
      var orderStore = _this.props.store.orderStore;
      orderStore.orderIds = checkedList;
      var order = selectedOrders[0];
      if (order.deliveryType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].DELIVERY_TYPE_EXPRESS_CHANGE && _this.currOrgType != tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ORG_TYPE_SS) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只能由服务站转发');
        return;
      }
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].ORDER_OTHERS_SHIP_ENTITY + '?menuParam=' + menuParam + '&paymentId=' + order.id + '&shipType=' + _this.shipType + '&supplierId=' + order.supplierId + '&receiptAddressId=' + order.receiptAddressId + '&returnAddressId=' + order.returnAddressId + '&deliveryType=' + order.deliveryType + '&payerId=' + order.payerId + '&orderIdsStr=' + checkedList);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "receive", function () {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
        return;
      }
      var mallType = _this.params.mallType;
      var uri = "/od/pub/b2b/global/ord/receipt/update";
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/od/pub/b2c/global/ord/receipt/update";
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/od/pub/b2b/region/ord/receipt/update";
      if (mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/od/pub/b2c/region/ord/receipt/update";
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            'checkedList': []
          });
          _this.searchOrder({});
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请求失败:" + result.message);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(checkedList), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "go2Pay", function (event) {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
      } else {
        var entities = _this.state.entities;
        var _checkedList = _this.state.checkedList;
        var payments = [];
        var lastPaymentId = 0;
        var _loop = function _loop(i) {
          var order = entities.find(function (item) {
            return item.id == _checkedList[i];
          });
          var paymentId = order.payment.id;
          var onlineAmount = order.onlineAmount;
          if (paymentId == lastPaymentId) {
            var payment = payments.find(function (item) {
              return item.id == paymentId;
            });
            payment.onlineAmount += onlineAmount;
          } else {
            payments.push({
              id: paymentId,
              onlineAmount: onlineAmount
            });
          }
          lastPaymentId = paymentId;
        };
        for (var i = 0; i < _checkedList.length; i++) {
          _loop(i);
        }
        console.log('payments:', payments);
        var paymentStore = _this.paymentStore;
        paymentStore.setPayments(payments);
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].PAYMENT_PAY);
        //JsUtil.go2Page(URI.PAYMENT_PAY + '?paymentId=' + orderItem.paymentId + '&orderType=' + orderType + '&onlineAmount='+orderItem.onlineAmount);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "evaluate", function (event) {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请至少选中一项');
      } else if (checkedList.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只能选择一条记录');
      } else {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].go2Page(tsx_common_URI__WEBPACK_IMPORTED_MODULE_4__["default"].ORDER_ORDER_SECOND + '?mallType=' + _this.params.mallType + '&id=' + checkedList[0]);
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "applyReturn", function (event) {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请至少选中一项");
        return;
      } else if (checkedList.length > 1) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '只能选择一条记录');
        return;
      } else {
        var entities = _this.state.entities;
        var _checkedList2 = _this.state.checkedList;
        var finalQty = entities.find(function (item) {
          return item.id == _checkedList2[0];
        }).finalQty;
        _this.setState({
          popupReturn: true,
          finalQty: finalQty
        });
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "returnQtyFn", function (name, value) {
      var max = _this.state.finalQty;
      var quantity = value;
      if (quantity < 1) quantity = 1;else if (quantity - max > 0) quantity = max;
      _this.setState({
        returnQty: quantity
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "applyReturnConfirm", function (event) {
      var uri = "/od/pub/b2b/global/ord/return/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/od/pub/b2c/global/ord/return/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/od/pub/b2b/region/ord/return/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/od/pub/b2c/region/ord/return/update";
      var order = {
        id: _this.state.checkedList[0],
        returnQty: _this.state.returnQty,
        remark: _this.state.remark
      };
      var param = [];
      param.push(order);
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, JSON.stringify(param), function (result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            'checkedList': []
          });
          _this.searchOrder({});
        }
      }, function (err) {
        return tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, err.message);
      });
      _this.setState({
        remark: '',
        popupReturn: false
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "approveReturnPre", function () {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请至少选中一项");
      } else {
        _this.initReturnAddrs();
        _this.setState({
          popupApproveReturn: true
        });
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "approveReturnYes", function () {
      _this.approveReturn(true);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "approveReturnNo", function () {
      _this.approveReturn(false);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "approveReturn", function (pass) {
      var returnAddressId = _this.state.returnAddressId;
      if (!returnAddressId) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请选择收货地址');
        return;
      }
      var remark = _this.state.remark;
      if (!pass && !remark) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请填写备注');
        return;
      }
      var checkedList = _this.state.checkedList;
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            'checkedList': []
          });
          _this.searchOrder({});
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请求失败:' + result.message);
      };
      var ids = '';
      checkedList.map(function (id) {
        ids = ids + 'ids=' + id + '&';
      });
      var uri = "/od/pub/b2b/global/ord/return/approve/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/od/pub/b2c/global/ord/return/approve/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/od/pub/b2b/region/ord/return/approve/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/od/pub/b2c/region/ord/return/approve/update";
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri + '?' + ids + 'pass=' + pass + '&remark=' + remark + '&returnAddressId=' + returnAddressId, null, succ, err);
      _this.setState({
        remark: '',
        popupApproveReturn: false
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "receiveReturnPre", function () {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请至少选中一项");
      } else {
        _this.setState({
          popupReceiveReturn: true
        });
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "receiveReturnYes", function () {
      _this.receiveReturn(true);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "receiveReturnNo", function () {
      _this.receiveReturn(false);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "receiveReturn", function (pass) {
      var remark = _this.state.remark;
      if (!pass && !remark) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请填写备注');
        return;
      }
      var checkedList = _this.state.checkedList;
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            'checkedList': []
          });
          _this.searchOrder({});
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请求失败:' + result.message);
      };
      var ids = '';
      checkedList.map(function (id) {
        ids = ids + 'ids=' + id + '&';
      });
      var uri = "/od/pub/b2b/global/ord/receive/return/approve/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/od/pub/b2c/global/ord/receive/return/approve/update";else if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/od/pub/b2b/region/ord/receive/return/approve/update";else if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/od/pub/b2c/region/ord/receive/return/approve/update";
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri + '?' + ids + 'pass=' + pass + '&remark=' + remark, null, succ, err, tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].REQUEST_TYPE_WWW);
      _this.setState({
        remark: '',
        popupReceiveReturn: false
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "settlePre", function () {
      var checkedList = _this.state.checkedList;
      if (checkedList.length == 0) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, "请至少选中一项");
      } else {
        _this.setState({
          popupSettle: true
        });
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "settleYes", function () {
      var remark = _this.state.remark;
      if (!remark) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请填写备注');
        return;
      }
      var checkedList = _this.state.checkedList;
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            'checkedList': []
          });
          _this.searchOrder({});
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].showMsgBox(_this, '请求失败:' + result.message);
      };
      var ids = '';
      checkedList.map(function (id) {
        ids = ids + 'ids=' + id + '&';
      });
      var uri = "/od/pub/b2b/global/ord/settl/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_G_B2C) uri = "/od/pub/b2c/global/ord/settl/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2B) uri = "/od/pub/b2b/region/ord/settl/update";
      if (_this.params.mallType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MALL_TYPE_R_B2C) uri = "/od/pub/b2c/global/ord/settl/update";
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, uri, ids + 'remark=' + remark, succ, err);
      _this.setState({
        remark: '',
        popupSettle: false
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "getListOptions", function (records) {
      var options = [];
      records.map(function (item, indx) {
        var desc = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
          justifyContent: 'space-between',
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN + 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
            color: "red",
            children: [tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].currFormat(item.price), "x", item.finalQty]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: item.supplierName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: tsx_common_Statuses__WEBPACK_IMPORTED_MODULE_3__["default"].ordLabel(item.status)
          })]
        });
        options.push({
          value: item.id,
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: item.commodityName
          }),
          desc: desc
        });
      });
      return options;
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "onCheckBoxesAllChanged", function (name, selectedValues) {
      if (selectedValues.length == 0) {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])({}, name, []));
      } else {
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])({}, name, _this.checkedAllList));
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "onCascadeBoxChanged", function (name, selectedValues) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])({}, name, selectedValues));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])({}, name, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "changeHandler", function (name) {
      return function (item) {
        var value = item.id;
        _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])({}, name, value));
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "onClose", function (name) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])({}, name, false));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlParams(_this);
    _this.paymentStore = _this.props.store.paymentStore;
    _this.state = {
      entities: [],
      returnAddressId: '',
      returnAddressOptions: [],
      commodityName: '',
      commodityNo: '',
      supplierName: '',
      remark: '',
      createTime: ' ',
      createTime2: ' ',
      page: 1,
      totalRecords: 0,
      checkedList: [],
      finalQty: 0,
      returnQty: 0,
      popupReturn: false,
      popupApproveReturn: false,
      popupReceiveReturn: false,
      popupSettle: false,
      errors: {
        remark: false
      }
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_20__["default"])(OrderList, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_21__["default"])(OrderList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.searchOrder({});
    }
  }, {
    key: "initReturnAddrs",
    value: function initReturnAddrs() {
      var _this2 = this;
      var orgId = this.currOrgId;
      if (!orgId) {
        return;
      }
      var param = {
        subjectId: orgId
      };
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this2, result)) _this2.setState({
          returnAddressOptions: result.body
        });
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this2, result);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(this, "/lg/pub/receipt/address/organization/search", JSON.stringify(param), succ, err);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state2 = this.state,
        entities = _this$state2.entities,
        totalRecords = _this$state2.totalRecords,
        checkedList = _this$state2.checkedList,
        returnQty = _this$state2.returnQty,
        returnAddressOptions = _this$state2.returnAddressOptions,
        returnAddressId = _this$state2.returnAddressId;
      var menuParam = this.params.menuParam;
      var show = {
        pay: true,
        cancel: false,
        deliver: false,
        receive: false,
        evaluate: false,
        applyReturn: false,
        approveReturn: false,
        buyerDeliver: false,
        receiveReturn: false
      };
      if (menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_G_B2B || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_G_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_R_B2B || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_R_B2C) {
        show.deliver = true;
      }
      if (menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_R_B2C) {
        show.cancel = true;
      }
      if (menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_R_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_OP_G_B2B || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2C) {
        show.deliver = true;
      }
      if (menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_R_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_OP_G_B2B || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2B) {
        show.receive = true;
        show.evaluate = false;
      }
      if (menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_G_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_MB_R_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_OP_G_B2B || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SS_R_B2B) {
        show.applyReturn = true;
      }
      if (menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_G_B2B || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_G_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_R_B2B || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_SP_R_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_HQ_G_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_HQ_R_B2C || menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].MENU_OP_R_B2C) {
        show.approveReturn = true;
        show.receiveReturn = true;
      }
      var options = this.getListOptions(entities);
      var commandLabel0 = show.pay ? '支付' : '';
      var commandLabel3 = show.cancel ? '取消' : '';
      var commandLabel4 = show.deliver ? '发货' : '';
      var commandLabel5 = show.receive ? '收货' : '';
      var commandLabel6 = show.evaluate ? '评价' : '';
      var commandLabel7 = show.applyReturn ? '退货' : '';
      var commandLabel8 = show.approveReturn ? '退审' : '';
      var commandLabel9 = show.receiveReturn ? '收退货' : '';
      var commandLabel10 = show.settle ? '结算' : '';
      var labelKey = 'detailAddress';
      var valueKey = 'id';
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        that: this,
        topNavBarTitle: this.topNavBarTitle,
        bottomLabel0: commandLabel0,
        bottomFunc0: this.go2Pay,
        bottomLabel1: '全选',
        bottomFunc1: this.onCheckBoxesAllChanged,
        bottomLabel2: '明细',
        bottomFunc2: this.detailFunc,
        bottomLabel3: commandLabel3,
        bottomFunc3: this.cancel,
        bottomLabel4: commandLabel4,
        bottomFunc4: this.deliver,
        bottomLabel5: commandLabel5,
        bottomFunc5: this.receive,
        bottomLabel6: commandLabel6,
        bottomFunc6: this.evaluate,
        bottomLabel7: commandLabel7,
        bottomFunc7: this.applyReturn,
        bottomLabel8: commandLabel8,
        bottomFunc8: this.approveReturnPre,
        bottomLabel9: commandLabel9,
        bottomFunc9: this.receiveReturnPre,
        bottomLabel10: commandLabel10,
        bottomFunc10: this.settlePre,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_form_CascadeBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
          name: "checkedList",
          options: options,
          value: checkedList,
          onChange: this.onCascadeBoxChanged,
          width: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_WIDTH_MAIN,
          BrHeight: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_component_TaroModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
          isOpened: this.state.popupReturn,
          onClose: function onClose(e) {
            return _this3.onClose('popupReturn', e);
          },
          onConfirm: this.applyReturnConfirm,
          confirmText: "\u786E\u5B9A",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
            justifyContent: "flex-start",
            children: ["\u9000\u8D27\u6570\u91CF: \xA0\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_form_IntegerInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
              name: 'quantity',
              min: 1,
              max: 9999,
              value: returnQty,
              onChange: this.returnQtyFn
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
            name: 'remark',
            label: this.labels.remark,
            type: 'text',
            value: this.state.remark,
            error: this.state.errors.remark,
            onChange: this.onInputChanged
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(tsx_component_TaroModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
          isOpened: this.state.popupApproveReturn,
          onClose: function onClose(e) {
            return _this3.onClose('popupApproveReturn', e);
          },
          onConfirm: this.approveReturnYes,
          onCancel: this.approveReturnNo,
          confirmText: "\u901A\u8FC7",
          cancelText: "\u62D2\u7EDD",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
            options: returnAddressOptions,
            labelKey: labelKey,
            valueKey: valueKey,
            value: returnAddressId,
            onChange: this.changeHandler('returnAddressId'),
            label: this.labels.returnAddressId
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
            name: 'remark',
            label: this.labels.remark,
            type: 'text',
            value: this.state.remark,
            error: this.state.errors.remark,
            onChange: this.onInputChanged
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_component_TaroModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
          isOpened: this.state.popupReceiveReturn,
          onClose: function onClose(e) {
            return _this3.onClose('popupReceiveReturn', e);
          },
          onConfirm: this.receiveReturnYes,
          onCancel: this.receiveReturnNo,
          confirmText: "\u901A\u8FC7",
          cancelText: "\u62D2\u7EDD",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
            name: 'remark',
            label: this.labels.remark,
            type: 'text',
            value: this.state.remark,
            error: this.state.errors.remark,
            onChange: this.onInputChanged
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_component_TaroModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
          isOpened: this.state.popupSettle,
          onClose: function onClose(e) {
            return _this3.onClose('popupSettle', e);
          },
          onConfirm: this.settleYes,
          confirmText: "\u901A\u8FC7",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
            name: 'remark',
            label: this.labels.remark,
            type: 'text',
            value: this.state.remark,
            error: this.state.errors.remark,
            onChange: this.onInputChanged
          })
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component))) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (OrderList);

/***/ }),

/***/ "./src/pkgorder/page/order/OrderList.tsx":
/*!***********************************************!*\
  !*** ./src/pkgorder/page/order/OrderList.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_order_OrderList_OrderList_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderList!./OrderList.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkgorder/page/order/OrderList!./src/pkgorder/page/order/OrderList.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_order_OrderList_OrderList_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkgorder/page/order/OrderList', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkgorder_page_order_OrderList_OrderList_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","sub-common/df5d0bc6f71f596ab4b59a770bc05ed1","taro","vendors","common"], function() { return __webpack_exec__("./src/pkgorder/page/order/OrderList.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=OrderList.js.map