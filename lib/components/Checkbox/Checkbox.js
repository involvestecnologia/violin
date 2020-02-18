"use strict";

exports.__esModule = true;
exports.Checkbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      style = _ref.style,
      label = _ref.label,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "style", "label", "disabled"]);

  return _react["default"].createElement(_style.Wrapper, {
    className: className,
    style: style,
    disabled: disabled
  }, _react["default"].createElement(_style.InputStyled, _extends({
    type: "checkbox",
    disabled: disabled
  }, props)), _react["default"].createElement(_style.Svg, {
    viewBox: "0 0 18 18",
    mlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement(_style.Rect, {
    strokeLocation: "inside",
    x: "1",
    y: "1",
    rx: "2",
    ry: "2",
    strokeWidth: "2"
  }), _react["default"].createElement(_style.CheckedIcon, {
    d: "M4 9L7 12L14 5",
    "data-testid": "checked-icon"
  }), _react["default"].createElement(_style.IndeterminateIcon, {
    d: "M5 9L13 9"
  })), label && _react["default"].createElement(_style.Label, null, label));
};

exports.Checkbox = Checkbox;
Checkbox.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool
};
Checkbox.defaultProps = {
  label: null,
  disabled: false
};