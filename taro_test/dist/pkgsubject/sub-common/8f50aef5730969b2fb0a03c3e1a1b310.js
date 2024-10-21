"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/8f50aef5730969b2fb0a03c3e1a1b310"],{

/***/ "./src/component/RegionField5.tsx":
/*!****************************************!*\
  !*** ./src/component/RegionField5.tsx ***!
  \****************************************/
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
/* harmony import */ var tsx_view_BaseView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsx/view/BaseView */ "./src/view/BaseView.tsx");
/* harmony import */ var tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsx/view/BrView */ "./src/view/BrView.tsx");
/* harmony import */ var tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsx/form/SelectInput */ "./src/form/SelectInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);












var RegionField5 = /*#__PURE__*/function (_React$Component) {
  function RegionField5(props) {
    var _this;
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, RegionField5);
    _this = (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, RegionField5, [props]);
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "loadRegionTreeInfoByBottomId", function (villageId) {
      if (!villageId) return;
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpGet(_this, "/lg/pub/region/load/search?id=".concat(villageId), function (villageRes) {
        var townId = villageRes.body.parentId;
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, '/lg/pub/region/search', JSON.stringify({
          parentId: townId
        }), function (villagesRes) {
          var options = villagesRes.body;
          var item = options.find(function (e) {
            return e.id == villageId;
          });
          _this.setState({
            villageOptions: options,
            villageId: villageId
          });
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpGet(_this, "/lg/pub/region/load/search?id=".concat(townId), function (townRes) {
            var countyId = townRes.body.parentId;
            tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, '/lg/pub/region/search', JSON.stringify({
              parentId: countyId
            }), function (townsRes) {
              var options = townsRes.body;
              var item = options.find(function (e) {
                return e.id == townId;
              });
              _this.setState({
                townOptions: options,
                townId: townId
              });
              tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpGet(_this, "/lg/pub/region/load/search?id=".concat(countyId), function (countyRes) {
                var cityId = countyRes.body.parentId;
                tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, '/lg/pub/region/search', JSON.stringify({
                  parentId: cityId
                }), function (countiesRes) {
                  var options = countiesRes.body;
                  _this.setState({
                    countyOptions: options,
                    countyId: countyId
                  });
                  tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpGet(_this, "/lg/pub/region/load/search?id=".concat(cityId), function (cityRes) {
                    var provinceId = cityRes.body.parentId;
                    tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, '/lg/pub/region/search', JSON.stringify({
                      parentId: provinceId
                    }), function (citiesRes) {
                      var options = citiesRes.body;
                      _this.setState({
                        cityOptions: options,
                        cityId: cityId
                      });
                      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, '/lg/pub/region/search', JSON.stringify({
                        parentId: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ID_TOP_REGION
                      }), function (provinceRes) {
                        var options = provinceRes.body;
                        _this.setState({
                          provinceOptions: options,
                          provinceId: provinceId
                        });
                      }, function (provinceErr) {
                        return console.log(provinceErr);
                      });
                    }, function (citiesErr) {
                      return console.log(citiesErr);
                    });
                  }, function (cityErr) {
                    return console.log(cityErr);
                  });
                }, function (countiesErr) {
                  return console.log(countiesErr);
                });
              }, function (countyErr) {
                return console.log(countyErr);
              });
            }, function (townsErr) {
              return console.log(townsErr);
            });
          }, function (townErr) {
            return console.log(townErr);
          });
        }, function (villagesErr) {
          return console.log(villagesErr);
        });
      }, function (villageErr) {
        return console.log(villageErr);
      });
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "provinceChanged", function (item) {
      var parentId = item.id;
      _this.onValueChange('');
      var params = {
        parentId: parentId
      };
      var succ = function succ(result) {
        _this.setState({
          provinceId: parentId,
          cityOptions: result.body,
          countyOptions: [],
          townOptions: [],
          villageOptions: []
        });
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, '/lg/pub/region/search', JSON.stringify(params), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "cityChanged", function (item) {
      var parentId = item.id;
      _this.onValueChange('');
      var params = {
        parentId: parentId
      };
      var succ = function succ(result) {
        console.log(result.body);
        _this.setState({
          cityId: parentId,
          countyOptions: result.body,
          townOptions: [],
          villageOptions: []
        });
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, '/lg/pub/region/search', JSON.stringify(params), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "countyChanged", function (item) {
      var parentId = item.id;
      _this.onValueChange('');
      var params = {
        parentId: parentId
      };
      var succ = function succ(result) {
        console.log(result.body);
        _this.setState({
          countyId: parentId,
          townOptions: result.body,
          villageOptions: []
        });
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, '/lg/pub/region/search', JSON.stringify(params), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "townChanged", function (item) {
      var parentId = item.id;
      var params = {
        parentId: parentId
      };
      var succ = function succ(result) {
        console.log(result.body);
        var villageOptions = result.body;
        var selectedVillageId = null;
        if (villageOptions && villageOptions.length > 0) selectedVillageId = villageOptions[0].id;
        _this.setState({
          townId: parentId,
          villageOptions: villageOptions
        });
        _this.onValueChange(selectedVillageId);
      };
      var err = function err(result) {
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this, result, true);
      };
      tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(_this, '/lg/pub/region/search', JSON.stringify(params), succ, err);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "villageChanged", function (item) {
      _this.setState({
        villageId: item.id
      });
      _this.onValueChange(item.id);
    });
    (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "onValueChange", function (value) {
      _this.props.that.setState({
        regionId: value
      });
    });
    _this.state = {
      provinceId: 0,
      cityId: 0,
      countyId: 0,
      townId: 0,
      villageId: 0,
      provinceOptions: [],
      cityOptions: [],
      countyOptions: [],
      townOptions: [],
      villageOptions: []
    };
    return _this;
  }
  (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__["default"])(RegionField5, _React$Component);
  return (0,c_taro_i_bizz_client_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(RegionField5, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.value == this.props.value) {
        return;
      }
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      if (this.props.mode == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_EDIT || this.props.mode == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_VIEW) {
        this.loadRegionTreeInfoByBottomId(this.props.value);
      } else {
        var param = {
          parentId: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].ID_TOP_REGION
        };
        var succ = function succ(result) {
          if (tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this2, result)) {
            _this2.setState({
              provinceOptions: result.body
            });
          }
        };
        var err = function err(result) {
          tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].handleMessage(_this2, result, true);
        };
        tsx_common_JsUtil__WEBPACK_IMPORTED_MODULE_1__["default"].asyncHttpPost(this, '/lg/pub/region/search', JSON.stringify(param), succ, err);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var mode = this.props.mode;
      var _this$state = this.state,
        provinceOptions = _this$state.provinceOptions,
        cityOptions = _this$state.cityOptions,
        countyOptions = _this$state.countyOptions,
        townOptions = _this$state.townOptions,
        villageOptions = _this$state.villageOptions;
      var _this$state2 = this.state,
        provinceId = _this$state2.provinceId,
        cityId = _this$state2.cityId,
        countyId = _this$state2.countyId,
        townId = _this$state2.townId,
        villageId = _this$state2.villageId;
      var labelKey = 'regionFullName';
      var valueKey = 'id';
      var provinceLabel = ' ';
      var cityLabel = ' ';
      var countyLabel = ' ';
      var townLabel = ' ';
      var villageLabel = ' ';
      //		if (provinceOptions.length > 0) provinceLabel = provinceOptions.find(item=>item.id==provinceId).regionFullName
      //		if (cityOptions.length > 0) cityLabel = cityOptions.find(item=>item.id==cityId).regionFullName
      //		if (countyOptions.length > 0) countyLabel = countyOptions.find(item=>item.id==countyId).regionFullName
      //		if (townOptions.length > 0) townLabel = townOptions.find(item=>item.id==townId).regionFullName
      //		if (villageOptions.length > 0) villageLabel = villageOptions.find(item=>item.id==villageId).regionFullName
      var required = '*';
      var disabled = false;
      if (mode == tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_MODE_VIEW) disabled = true;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(tsx_view_BaseView__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [provinceOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          options: provinceOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: provinceId,
          onChange: this.provinceChanged,
          label: '省(市)',
          optionLabel: provinceLabel,
          disabled: disabled
        }), provinceOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          options: cityOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: cityId,
          onChange: this.cityChanged,
          label: '市(州)',
          optionLabel: cityLabel,
          disabled: disabled
        }), cityOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), countyOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          options: countyOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: countyId,
          onChange: this.countyChanged,
          label: '县(区)',
          optionLabel: countyLabel,
          disabled: disabled
        }), countyOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), townOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          options: townOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: townId,
          onChange: this.townChanged,
          label: '镇(街道)',
          optionLabel: townLabel,
          disabled: disabled
        }), townOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_view_BrView__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].NUM_HEIGHT_LINE,
          backgroundColor: tsx_common_Constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_BACKGROUND_WHITE
        }), villageOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tsx_form_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          options: villageOptions,
          labelKey: labelKey,
          valueKey: valueKey,
          value: villageId,
          onChange: this.villageChanged,
          label: required + '村(社区)',
          optionLabel: villageLabel,
          disabled: disabled
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ __webpack_exports__["default"] = (RegionField5);

/***/ })

}]);
//# sourceMappingURL=8f50aef5730969b2fb0a03c3e1a1b310.js.map