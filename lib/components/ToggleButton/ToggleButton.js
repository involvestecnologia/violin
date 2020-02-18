"use strict";

exports.__esModule = true;
exports.ToggleButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ToggleButton = function ToggleButton(_ref) {
  var multiple = _ref.multiple,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["multiple", "style", "className", "children"]);

  return _react["default"].createElement(_style.Wrapper, {
    "data-testid": "wrapper"
  }, _react["default"].createElement(_style.HiddenInput, _extends({
    "data-testid": "hidden-input",
    type: multiple ? 'checkbox' : 'radio'
  }, props)), _react["default"].createElement(_style.StyledButton, {
    "data-testid": "styled-button",
    style: style,
    className: className
  }, children));
};

exports.ToggleButton = ToggleButton;
ToggleButton.propTypes = {
  /** Change to checkbox behavior */
  multiple: _propTypes["default"].bool,

  /** Change style button */
  style: _propTypes["default"].oneOfType([_propTypes["default"].object]),

  /** Add css class to change button style */
  className: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
};
ToggleButton.defaultProps = {
  multiple: false,
  style: null,
  className: null,
  checked: null,
  disabled: null
};