"use strict";

exports.__esModule = true;
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "icon"]);

  return _react["default"].createElement(_style.StyledButton, _extends({}, props, {
    iconOnly: !!icon && !children
  }), icon && _react["default"].createElement(_style.StyledIcon, {
    icon: icon,
    hasChildren: !!children
  }), children);
};

exports.Button = Button;
Button.propTypes = {
  /** Apply primary style */
  primary: _propTypes["default"].bool,

  /** Apply secondary style */
  secondary: _propTypes["default"].bool,

  /** Apply danger style */
  danger: _propTypes["default"].bool,

  /** Apply small size */
  small: _propTypes["default"].bool,

  /** Apply large size */
  large: _propTypes["default"].bool,

  /** Apply width 100% */
  block: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  invert: _propTypes["default"].bool
};
Button.defaultProps = {
  primary: null,
  secondary: null,
  danger: null,
  small: null,
  large: null,
  block: false,
  icon: null,
  invert: false
};