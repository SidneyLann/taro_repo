"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["sub-common/df5d0bc6f71f596ab4b59a770bc05ed1"],{

/***/ "./src/common/Statuses.tsx":
/*!*********************************!*\
  !*** ./src/common/Statuses.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var statuses = {};
var stats = {
  STATUS_NEW: 1,
  STATUS_PROCESS3: 3,
  STATUS_PROCESS5: 5,
  STATUS_ACTIVE: 7,
  STATUS_PROCESS9: 9,
  STATUS_FINISHED: 10
};
statuses.stats = stats;
var cmd = {
  STATUS_NEW: 1,
  // 等待编辑
  STATUS_WAIT_APPROVE: 10,
  // 等待审核
  STATUS_APPROVE_FAIL: 20,
  // 审核失败
  STATUS_ON_SALE: 30,
  // 在售商品
  STATUS_NO_STOCK: 40,
  // 缺货商品
  STATUS_OFF_SALE: 50,
  // 下架商品
  STATUS_VIOLATION: 60 // 违规下架
};
statuses.cmd = cmd;
var cmdLabel = function cmdLabel(status) {
  var label = '';
  switch (status) {
    case cmd.STATUS_NEW:
      label = '等待编辑';
      break;
    case cmd.STATUS_WAIT_APPROVE:
      label = '等待审核';
      break;
    case cmd.STATUS_APPROVE_FAIL:
      label = '在售商品';
      break;
    case cmd.STATUS_ON_SALE:
      label = '在售商品';
      break;
    case cmd.STATUS_NO_STOCK:
      label = '缺货商品';
      break;
    case cmd.STATUS_OFF_SALE:
      label = '下架商品';
      break;
    case cmd.STATUS_VIOLATION:
      label = '违规下架';
      break;
    default:
      label = '全部';
      break;
  }
  return label;
};
statuses.cmdLabel = cmdLabel;
var obj = {
  STATUS_NEW: 1,
  // 新建
  STATUS_APPROVE_FAIL: 3,
  // 审核失败
  STATUS_APPROVED: 5,
  // 已审核
  STATUS_STOP: 7 // 已停用
};
statuses.obj = obj;
var objLabel = function objLabel(status) {
  var label = '';
  switch (status) {
    case obj.STATUS_NEW:
      label = '新建';
      break;
    case obj.STATUS_APPROVE_FAIL:
      label = '审核失败';
      break;
    case obj.STATUS_APPROVED:
      label = '已审核';
      break;
    case obj.STATUS_STOP:
      label = '已停用';
      break;
    default:
      label = '';
      break;
  }
  return label;
};
statuses.objLabel = objLabel;
var spStatus = {
  STATUS_NEW: 1,
  // 新建
  STATUS_APPLICATION: 3,
  // 在申请
  STATUS_APPROVE_FAIL: 5,
  // 审核失败
  STATUS_ACTIVE: 7,
  // 已审核
  STATUS_INACTIVE: 9 // 已停用
};
statuses.spStatus = spStatus;
var spStatusLabel = function spStatusLabel(status) {
  var label = '';
  switch (status) {
    case spStatus.STATUS_NEW:
      label = '新建';
      break;
    case spStatus.STATUS_APPLICATION:
      label = '在申请';
      break;
    case spStatus.STATUS_APPROVE_FAIL:
      label = '审核失败';
      break;
    case spStatus.STATUS_ACTIVE:
      label = '已审核';
      break;
    case spStatus.STATUS_INACTIVE:
      label = '已停用';
      break;
    default:
      label = '';
      break;
  }
  return label;
};
statuses.spStatusLabel = spStatusLabel;
var ord = {
  STATUS_WAIT_PAY: 1,
  // 待付款
  STATUS_WAIT_GROUPON: 10208,
  // 待拼团
  STATUS_WAIT_SHIP: 10308,
  // 待发货
  STATUS_WAIT_DELIVER: 10408,
  // 待送货
  STATUS_WAIT_TAKE: 10508,
  // 待收货
  STATUS_WAIT_COMMENT: 10608,
  // 待评价
  STATUS_WAIT_RETURN: 10708,
  // 待退货
  STATUS_WAIT_RETURN_APPROVE: 10808,
  // 退货待审
  STATUS_RETURN_APPROVE_FAILED: 10908,
  // 退审失败
  STATUS_WAIT_RETURN_DELIVER: 11008,
  // 待发退货，如果超时不发，则订单进入结算流程
  STATUS_WAIT_RECEIVE_RETURN: 11108,
  // 待收退货
  STATUS_RETURN_RECEIVE_FAILED: 11208,
  // 退货失败
  STATUS_WAIT_RETURN_REFUND: 11308,
  // 待退款
  STATUS_ORDER_CANCELED: 11408,
  // 已取消
  STATUS_ORDER_REFUNDED: 11508,
  // 已退款
  STATUS_WAIT_SETTLE: 11608,
  // 待结算
  STATUS_SET_TRADE_FEE: 11708,
  // 设置手续费
  STATUS_ORDER_SETTLED: 11808,
  // 已结算
  STATUS_DIVIDING: 11908,
  // 分账中
  STATUS_DIVIDE_FAIL: 12008,
  // 分账失败
  STATUS_DIVIDED: 12108,
  // 已分账
  STATUS_TOBE_RELEASE: 12208,
  // 待解冻
  STATUS_RELEASING: 12308,
  // 解冻中
  STATUS_RELEASE_FAIL: 12408,
  // 解冻失败
  STATUS_RELEASED: 12508 // 已解冻
};
statuses.ord = ord;
var ordLabel = function ordLabel(status) {
  var label = '未知';
  switch (status) {
    case ord.STATUS_WAIT_PAY:
      label = '待付款';
      break;
    case ord.STATUS_WAIT_GROUPON:
      label = '待拼团';
      break;
    case ord.STATUS_WAIT_SHIP:
      label = '待发货';
      break;
    case ord.STATUS_WAIT_DELIVER:
      label = '待送货';
      break;
    case ord.STATUS_WAIT_TAKE:
      label = '待收货';
      break;
    case ord.STATUS_WAIT_COMMENT:
      label = '待评价';
      break;
    case ord.STATUS_WAIT_RETURN:
      label = '待退货';
      break;
    case ord.STATUS_WAIT_RETURN_APPROVE:
      label = '退货待审';
      break;
    case ord.STATUS_RETURN_APPROVE_FAILED:
      label = '退审失败';
      break;
    case ord.STATUS_WAIT_RETURN_DELIVER:
      label = '待发退货';
      break;
    case ord.STATUS_WAIT_RECEIVE_RETURN:
      label = '待收退货';
      break;
    case ord.STATUS_RETURN_RECEIVE_FAILED:
      label = '退货失败';
      break;
    case ord.STATUS_WAIT_RETURN_REFUND:
      label = '待退款';
      break;
    case ord.STATUS_ORDER_CANCELED:
      label = '已取消';
      break;
    case ord.STATUS_ORDER_REFUNDED:
      label = '已退款';
      break;
    case ord.STATUS_WAIT_SETTLE:
      label = '待结算';
      break;
    case ord.STATUS_SET_TRADE_FEE:
      label = '设置手续费';
      break;
    case ord.STATUS_ORDER_SETTLED:
      label = '已结算';
      break;
    case ord.STATUS_DIVIDING:
      label = '分账中';
      break;
    case ord.STATUS_DIVIDE_FAIL:
      label = '分账失败';
      break;
    case ord.STATUS_DIVIDED:
      label = '已分账';
      break;
    case ord.STATUS_TOBE_RELEASE:
      label = '待解冻';
      break;
    case ord.STATUS_RELEASING:
      label = '解冻中';
      break;
    case ord.STATUS_RELEASE_FAIL:
      label = '解冻失败';
      break;
    case ord.STATUS_RELEASED:
      label = '已解冻';
      break;
    default:
      label = '全部';
      break;
  }
  return label;
};
statuses.ordLabel = ordLabel;
var supplier = {
  STATUS_NEW: 1,
  // 新建
  STATUS_APPLICATION: 3,
  // 申请
  STATUS_APPROVE_FAIL: 5,
  // 拒审
  STATUS_ACTIVE: 7,
  // 活动
  STATUS_INACTIVE: 9 // 停用
};
statuses.supplier = supplier;
var pay = {
  WAIT_PAY: 1,
  // 待付款
  ALREADY_PAY: 2 // 已付款
};
statuses.pay = pay;
var withdraw = {
  WAIT_CHECK: 1,
  // 等待审批
  CHECK_UNPASS: 3,
  // 审批不通过
  CHECK_PASS: 5 // 审批通过
};
statuses.withdraw = withdraw;
var ideaLabel = function ideaLabel(status) {
  var label = '未知';
  switch (status) {
    case stats.STATUS_NEW:
      label = '新建';
      break;
    case stats.STATUS_PROCESS3:
      label = '已处理';
      break;
    case stats.STATUS_ACTIVE:
      label = '已发布';
      break;
    default:
      label = '全部';
      break;
  }
  return label;
};
statuses.ideaLabel = ideaLabel;
var artDetectLabel = function artDetectLabel(status) {
  var label = '未知';
  switch (status) {
    case stats.STATUS_NEW:
      label = '新建';
      break;
    case stats.STATUS_PROCESS3:
      label = '已处理';
      break;
    case stats.STATUS_FINISHED:
      label = '已完成';
      break;
    default:
      label = '全部';
      break;
  }
  return label;
};
statuses.artDetectLabel = artDetectLabel;
/* harmony default export */ __webpack_exports__["default"] = (statuses);

/***/ })

}]);
//# sourceMappingURL=df5d0bc6f71f596ab4b59a770bc05ed1.js.map