"use strict";

exports.__esModule = true;
exports.RadioButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RadioButton = function RadioButton(_ref) {
  var className = _ref.className,
      style = _ref.style,
      label = _ref.label,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "style", "label"]);

  return _react["default"].createElement(_style.Wrapper, {
    className: className,
    style: style
  }, _react["default"].createElement(_style.InputStyled, _extends({
    type: "radio"
  }, props)), _react["default"].createElement(_style.Svg, {
    viewBox: "0 0 18 18",
    mlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement(_style.Circle, {
    strokeLocation: "inside",
    cx: "9",
    cy: "9",
    r: "8"
  }), _react["default"].createElement(_style.CircleCheck, {
    cx: "9",
    cy: "9",
    r: "4",
    "data-testid": "checked-circle"
  })), label && _react["default"].createElement(_style.Label, null, label));
};

exports.RadioButton = RadioButton;
RadioButton.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
RadioButton.defaultProps = {
  label: null
};