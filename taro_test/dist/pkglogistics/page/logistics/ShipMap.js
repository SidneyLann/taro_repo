"use strict";require("../../sub-vendors.js");require("../../sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pkglogistics/page/logistics/ShipMap"],{

/***/ "./src/static/images/p/loc-red.png":
/*!*****************************************!*\
  !*** ./src/static/images/p/loc-red.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/p/loc-red.png";

/***/ }),

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkglogistics/page/logistics/ShipMap!./src/pkglogistics/page/logistics/ShipMap.tsx":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkglogistics/page/logistics/ShipMap!./src/pkglogistics/page/logistics/ShipMap.tsx ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsx/common/JsUtil */ "./src/common/JsUtil.tsx");
/* harmony import */ var tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/common/Constant */ "./src/common/Constant.tsx");
/* harmony import */ var tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/layout/HeadLayout */ "./src/layout/HeadLayout.tsx");
/* harmony import */ var tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/layout/RowLayout */ "./src/layout/RowLayout.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tsx/form/GeneralInput */ "./src/form/GeneralInput.tsx");
/* harmony import */ var tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tsx/form/SelectInput */ "./src/form/SelectInput.tsx");
/* harmony import */ var tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tsx/view/TextLabel */ "./src/view/TextLabel.tsx");
/* harmony import */ var tsx_component_MyMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tsx/component/MyMap */ "./src/component/MyMap.tsx");
/* harmony import */ var img_p_loc_green_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! img/p/loc-green.png */ "./src/static/images/p/loc-green.png");
/* harmony import */ var img_p_loc_red_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! img/p/loc-red.png */ "./src/static/images/p/loc-red.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);






var _dec, _class;















var ShipMap = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_14__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_14__.observer)(_class = /*#__PURE__*/function (_React$Component) {
  function ShipMap(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_15__["default"])(this, ShipMap);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this, ShipMap, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "labels0", (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])({
      memberId: '会员编号',
      orgId: '机构id',
      receiptPerson: '收货人',
      receiptPhone: '收货电话',
      regionId: '地区',
      detailAddress: '详细地址',
      fromAddress: '发货地址',
      fromLongitude: '发货地址',
      fromLatitude: '发货地址'
    }, "fromAddress", '发货地址'), "toAddress", '收货地址'), "shipCompanyId", '主体'), "deliveryType", '方式'), "status", '状态'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "labels", (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_18__["default"])({}, _this.labels0));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "validateFields", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "validateForm", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "params", void 0);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "currOrgType", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getAppItem('currOrgType'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "currOrgId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getAppItem('currOrgId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "currUserId", tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getAppItem('currUserId'));
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "currLocation", function () {
      var that = _this;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getLocation({
        type: 'wgs84',
        success: function success(res) {
          that.setState({
            latitude: res.latitude,
            longitude: res.longitude
          });
        }
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "search", function (longitude, latitude) {
      var uri = '/od/pub/ship/search';
      var shipCompanyId = _this.state.shipCompanyId;
      var deliveryType = _this.state.deliveryType;
      var status = _this.state.status;
      var param = {
        shipCompanyId: shipCompanyId,
        deliveryType: deliveryType,
        status: status,
        fromLongitude: longitude,
        fromLatitude: latitude,
        llRange: 6
      };
      //	  if(shipCompanyId==cnst.EXPRESS_FIRM_ID_SELF_PICKUP){
      //		  param.status = cnst.STATUS_FINISHED;
      //		  param.buyerId = this.currUserId;
      //	  }else if(shipCompanyId==cnst.EXPRESS_FIRM_ID_SELF_PICKUP){
      //		  param.status = cnst.STATUS_FINISHED;
      //		  param.sellerId = this.currOrgId;
      //	  }

      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].handleMessage(_this, result)) {
          var entities = result.body;
          _this.setState({
            entities: entities
          });
          _this.getMarker();
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].handleMessage(_this, result);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].asyncHttpPost(_this, uri, JSON.stringify(param), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "guide1", function () {
      _this.getLine({
        name: _this.state.entity.fromAddress,
        longitude: _this.state.entity.fromLongitude,
        latitude: _this.state.entity.fromLatitude
      }, {
        name: _this.state.entity.toAddress,
        longitude: _this.state.entity.toLongitude,
        latitude: _this.state.entity.toLatitude
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "guide2", function () {
      _this.getLine({
        name: '当前位置',
        longitude: _this.state.longitude,
        latitude: _this.state.latitude
      }, {
        name: _this.state.entity.fromAddress,
        longitude: _this.state.entity.fromLongitude,
        latitude: _this.state.entity.fromLatitude
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "guide3", function () {
      _this.getLine({
        name: '当前位置',
        longitude: _this.state.longitude,
        latitude: _this.state.latitude
      }, {
        name: _this.state.entity.toAddress,
        longitude: _this.state.entity.toLongitude,
        latitude: _this.state.entity.toLatitude
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "bid", function () {
      var id = _this.state.entity.id;
      var deliverymanId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getAppItem('currUserId');
      if (!id) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].showMsgBox(_this, '请选中一条记录');
        return;
      }
      var param = {
        id: id,
        deliverymanId: deliverymanId
      };
      var uri = '/od/pub/ship/bid';
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            entity: {}
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].asyncHttpPost(_this, uri, JSON.stringify(param), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "finish", function () {
      var id = _this.state.entity.id;
      var deliverymanId = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getAppItem('currUserId');
      var orderIds = _this.state.entity.orderIds;
      if (!id) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].showMsgBox(_this, '请选中一条记录');
        return;
      }
      var param = {
        id: id,
        deliverymanId: deliverymanId,
        orderIds: orderIds
      };
      var uri = '/od/pub/ship/finish';
      var succ = function succ(result) {
        if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].handleMessage(_this, result, true)) {
          _this.setState({
            entity: {}
          });
        }
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].asyncHttpPost(_this, uri, JSON.stringify(param), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "goBack", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].goBack();
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "onInputChanged", function (name, value) {
      _this.setState((0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])({}, name, value));
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "getMarker", function () {
      var markers = [];
      var indx = 0;
      var callImage = undefined;
      var callColor = undefined;
      var width = undefined;
      var anchorX0 = 0;
      var anchorY0 = 0;
      var anchorXes = {};
      var anchorX = undefined;
      var anchorY = undefined;
      var llKey = undefined;
      var entities = _this.state.entities;
      //	  const shownEntities = [];
      //	  entities.map((item) =>{
      //	     shownEntities.push(item);
      //	  });

      entities.map(function (item, idx) {
        if (item.deliveryType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].DELIVERY_TYPE_IMMEDIATELY) {
          callImage = img_p_loc_red_png__WEBPACK_IMPORTED_MODULE_12__;
          width = 10;
          item.deliverymanId ? callColor = '#00FF00' : callColor = '#FF0000';
        } else {
          callImage = img_p_loc_green_png__WEBPACK_IMPORTED_MODULE_11__;
          width = 20;
          item.deliverymanId ? callColor = '#00BFFF' : callColor = '#000000';
        }
        llKey = item.fromLongitude + '-' + item.fromLatitude;
        anchorX = anchorXes[llKey];
        if (anchorX || anchorX === 0) {
          anchorX > 0 ? anchorX = 0 - anchorX : anchorX = 0 - anchorX + 15;
          anchorXes[llKey] = anchorX;
        } else {
          anchorX = anchorX0;
          anchorXes[llKey] = anchorX0;
        }
        anchorY = anchorY0;
        markers.push({
          id: indx++,
          iconPath: callImage,
          longitude: item.fromLongitude,
          latitude: item.fromLatitude,
          callout: {
            content: indx,
            color: callColor,
            anchorX: anchorX,
            anchorY: anchorY,
            display: "ALWAYS"
          },
          width: width,
          height: 20
        });
        llKey = item.toLongitude + '-' + item.toLatitude;
        anchorX = anchorXes[llKey];
        if (anchorX || anchorX === 0) {
          anchorX > 0 ? anchorX = 0 - anchorX : anchorX = 0 - anchorX + 15;
          anchorXes[llKey] = anchorX;
        } else {
          anchorX = anchorX0;
          anchorXes[llKey] = anchorX0;
        }
        markers.push({
          id: indx++,
          iconPath: callImage,
          longitude: item.toLongitude,
          latitude: item.toLatitude,
          callout: {
            content: indx,
            color: callColor,
            anchorX: anchorX,
            anchorY: anchorY,
            display: "ALWAYS"
          },
          width: width,
          height: 20
        });
      });
      _this.setState({
        markers: markers
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "onCalloutTap", function (event) {
      var that = _this;
      var markerId = event.markerId / 2;
      markerId = parseInt(markerId);
      var entity = that.state.entities[markerId];
      that.setState({
        entity: entity
      });
      //that.setState({receiptPerson: entity.receiptPerson, receiptPhone: entity.receiptPhone, fromAddress: entity.fromAddress, toAddress: entity.toAddress,
      //fromLongitude: entity.fromLongitude, fromLatitude: entity.fromLatitude, toLongitude: entity.toLongitude, toLatitude: entity.toLatitude});
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "onAddrNo", function (item) {
      return function (event) {
        _this.setState({
          entity: item
        });
      };
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "onRegionchange", function (longitude, latitude) {
      _this.setState({
        longitude: longitude,
        latitude: latitude
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "getLine", function (from, to) {
      var key = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].TENCENT_MAP_KEY; //使用在腾讯位置服务申请的key
      var referer = '柏君商城'; //调用插件的app的名称
      var startPoint = JSON.stringify(from);
      var endPoint = JSON.stringify(to);
      if ("weapp" === tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].TARO_ENV_WEAPP) {
        var plugin = requirePlugin('routePlan');
        wx.navigateTo({
          url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&startPoint=' + startPoint + '&endPoint=' + endPoint
        });
      }
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "onConfirm", function () {
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].closeMsgBox(_this);
    });
    _this.params = tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getUrlParams(_this);
    _this.state = {
      entities: [],
      entity: {},
      mode: _this.params.mode || tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].SHOW_MODE_NEW,
      disabled: true,
      longitude: '',
      latitude: '',
      markers: [],
      shipCompanyIdOptions: [],
      shipCompanyId: 0,
      deliveryTypeOptions: [],
      deliveryType: 0,
      statusOptions: [{
        value: 1,
        label: '新建'
      }, {
        value: 3,
        label: '已抢'
      }, {
        value: 10,
        label: '完成'
      }],
      status: 1,
      messages: {},
      errors: {
        receiptPerson: false,
        receiptPhone: false,
        fromAddress: false,
        toAddress: false
      }
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_19__["default"])(ShipMap, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_20__["default"])(ShipMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var shipCompanyIdOptions = [];
      var shipCompanyId = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].EXPRESS_FIRM_ID_SELF_PICKUP;
      var deliveryTypeOptions = [];
      var deliveryType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].DELIVERY_TYPE_SELF_PICKUP;
      if (this.params.menuParam == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].MENU_MB_R_B2C) {
        shipCompanyIdOptions.push({
          value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].EXPRESS_FIRM_ID_SELF_PICKUP,
          label: '买家'
        });
        deliveryTypeOptions.push({
          value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].DELIVERY_TYPE_SELF_PICKUP,
          label: '自提'
        });
      } else {
        if (this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].ORG_TYPE_SS) {
          shipCompanyIdOptions.push({
            value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].EXPRESS_FIRM_ID_PCG,
            label: '柏君配送'
          });
          shipCompanyId = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].EXPRESS_FIRM_ID_PCG;
          deliveryTypeOptions.push({
            value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].DELIVERY_TYPE_EXPRESS,
            label: '快递'
          });
          deliveryTypeOptions.push({
            value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].DELIVERY_TYPE_EXPRESS_CHANGE,
            label: '转运'
          });
          deliveryTypeOptions.push({
            value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].DELIVERY_TYPE_IMMEDIATELY,
            label: '即时送'
          });
          deliveryType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].DELIVERY_TYPE_EXPRESS;
        } else if (this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].ORG_TYPE_SP_R || this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].ORG_TYPE_SP_B) {
          shipCompanyIdOptions.push({
            value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].EXPRESS_FIRM_ID_SELF_DELIVERY,
            label: '卖家'
          });
          shipCompanyId = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].EXPRESS_FIRM_ID_SELF_DELIVERY;
          deliveryTypeOptions.push({
            value: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].DELIVERY_TYPE_EXPRESS_CHANGE,
            label: '转运'
          });
          deliveryType = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].DELIVERY_TYPE_EXPRESS_CHANGE;
        }
      }
      this.setState({
        shipCompanyIdOptions: shipCompanyIdOptions,
        shipCompanyId: shipCompanyId,
        deliveryTypeOptions: deliveryTypeOptions,
        deliveryType: deliveryType
      });
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      //this.currLocation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var mode = this.state.mode;
      var labelWidth = -10;
      var valueWidth = tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].NUM_WIDTH_MAIN - labelWidth;
      var valueWidth2 = valueWidth / 2 - labelWidth - 4.8;
      var valueWidth3 = valueWidth / 3 - labelWidth - 3;
      var disabled = this.state.disabled;
      var entities = this.state.entities;
      var _this$state = this.state,
        shipCompanyId = _this$state.shipCompanyId,
        shipCompanyIdOptions = _this$state.shipCompanyIdOptions,
        deliveryType = _this$state.deliveryType,
        deliveryTypeOptions = _this$state.deliveryTypeOptions,
        status = _this$state.status,
        statusOptions = _this$state.statusOptions;
      var labelKey = 'label';
      var valueKey = 'value';
      var topNavBarTitle = '物流地图';
      var commandLabel2 = '导1';
      var command2 = this.guide1;
      var commandLabel3 = '导2';
      var command3 = this.guide2;
      var commandLabel4 = '导3';
      var command4 = this.guide3;
      var commandLabel5 = this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].ORG_TYPE_SS ? '抢单' : '';
      var command5 = this.bid;
      var commandLabel6 = this.currOrgType == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].ORG_TYPE_SS ? '完成' : '';
      var command6 = this.finish;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_HeadLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        that: this,
        topNavBarTitle: topNavBarTitle,
        bottomLabel2: commandLabel2,
        bottomFunc2: command2,
        bottomLabel3: commandLabel3,
        bottomFunc3: command3,
        bottomLabel4: commandLabel4,
        bottomFunc4: command4,
        bottomLabel5: commandLabel5,
        bottomFunc5: command5,
        bottomLabel6: commandLabel6,
        bottomFunc6: command6,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          backgroundColor: [255, 255, 255, 1],
          justifyContent: 'space-between',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
            options: shipCompanyIdOptions,
            labelKey: labelKey,
            valueKey: valueKey,
            value: shipCompanyId,
            onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].onValueChange(this, 'shipCompanyId'),
            label: this.labels.shipCompanyId,
            labelWidth: labelWidth,
            valueWidth: valueWidth3
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
            options: deliveryTypeOptions,
            labelKey: labelKey,
            valueKey: valueKey,
            value: deliveryType,
            onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].onValueChange(this, 'deliveryType'),
            label: this.labels.deliveryType,
            labelWidth: labelWidth,
            valueWidth: valueWidth3
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
            options: statusOptions,
            labelKey: labelKey,
            valueKey: valueKey,
            value: status,
            onChange: tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_2__["default"].onValueChange(this, 'status'),
            label: this.labels.status,
            labelWidth: labelWidth,
            valueWidth: valueWidth3
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].COLOR_BACKGROUND_TRANS_WHITE,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'receiptPerson',
            label: this.labels.receiptPerson,
            type: 'text',
            value: this.state.entity.receiptPerson,
            error: this.state.errors.receiptPerson,
            onChange: this.onInputChanged,
            disabled: disabled,
            labelWidth: labelWidth,
            valueWidth: valueWidth2
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'receiptPhone',
            label: this.labels.receiptPhone,
            type: 'text',
            value: this.state.entity.receiptPhone,
            error: this.state.errors.receiptPhone,
            onChange: this.onInputChanged,
            disabled: disabled,
            labelWidth: labelWidth,
            valueWidth: valueWidth2
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: 'fromAddress',
          label: this.labels.fromAddress,
          type: 'text',
          value: this.state.entity.fromAddress,
          error: this.state.errors.fromAddress,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_form_GeneralInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: 'toAddress',
          label: this.labels.toAddress,
          type: 'text',
          value: this.state.entity.toAddress,
          error: this.state.errors.toAddress,
          onChange: this.onInputChanged,
          disabled: disabled,
          labelWidth: labelWidth,
          valueWidth: valueWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(tsx_layout_RowLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          justifyContent: 'space-between',
          backgroundColor: [255, 255, 255, 0.99],
          children: [entities.map(function (item, idx) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_TextLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
              onClick: _this2.onAddrNo(item),
              children: idx
            });
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_6__["default"], {
            height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].NUM_HEIGHT_LINE,
            backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_3__["default"].COLOR_BACKGROUND_WHITE
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(tsx_component_MyMap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          popup: false,
          longitude: this.state.longitude,
          latitude: this.state.latitude,
          markers: this.state.markers,
          onRegionchange: this.onRegionchange,
          onCalloutTap: this.onCalloutTap
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component))) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (ShipMap);

/***/ }),

/***/ "./src/pkglogistics/page/logistics/ShipMap.tsx":
/*!*****************************************************!*\
  !*** ./src/pkglogistics/page/logistics/ShipMap.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkglogistics_page_logistics_ShipMap_ShipMap_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkglogistics/page/logistics/ShipMap!./ShipMap.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pkglogistics/page/logistics/ShipMap!./src/pkglogistics/page/logistics/ShipMap.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkglogistics_page_logistics_ShipMap_ShipMap_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pkglogistics/page/logistics/ShipMap', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pkglogistics_page_logistics_ShipMap_ShipMap_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pkglogistics/sub-vendors","sub-common/33a0dcff8dd1ce1d5a5cd746a363af7f","taro","vendors","common"], function() { return __webpack_exec__("./src/pkglogistics/page/logistics/ShipMap.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=ShipMap.js.map