"use strict";

exports.__esModule = true;
exports.DropdownItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("../_common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DropdownItem = function DropdownItem(props) {
  return _react["default"].createElement(_common.ListItem, props);
};

exports.DropdownItem = DropdownItem;
DropdownItem.propTypes = {
  icon: _propTypes["default"].string
};
DropdownItem.defaultProps = {
  icon: null
};