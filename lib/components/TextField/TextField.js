"use strict";

exports.__esModule = true;
exports.TextField = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../index");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextField = function TextField(_ref) {
  var label = _ref.label,
      helpLabel = _ref.helpLabel,
      helpText = _ref.helpText,
      id = _ref.id,
      error = _ref.error,
      disabled = _ref.disabled,
      tooltip = _ref.tooltip,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "helpLabel", "helpText", "id", "error", "disabled", "tooltip"]);

  return _react["default"].createElement("div", null, (label || helpLabel || tooltip) && _react["default"].createElement(_style.LabelContainer, null, _react["default"].createElement(_style.Label, {
    htmlFor: id
  }, _react["default"].createElement(_style.LabelText, {
    isDisabled: disabled
  }, label), helpLabel && _react["default"].createElement(_style.HelpLabel, null, helpLabel)), tooltip && _react["default"].createElement(_index.Tooltip, {
    placement: "topRight",
    content: tooltip
  }, _react["default"].createElement(_style.InfoIcon, {
    icon: "error_outline"
  }))), _react["default"].createElement(_style.Input, _extends({
    id: id,
    error: error,
    disabled: disabled
  }, props)), helpText && _react["default"].createElement(_style.HelpText, {
    error: error
  }, helpText));
};

exports.TextField = TextField;
TextField.propTypes = {
  label: _propTypes["default"].string,
  helpLabel: _propTypes["default"].string,
  helpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  placeholder: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(['text', 'email', 'number', 'password', 'tel', 'url', 'datetime-local', 'date', 'search', 'month', 'time', 'week', 'currency']),
  small: _propTypes["default"].bool,
  large: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,

  /** Shows an icon width tooltip info */
  tooltip: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
TextField.defaultProps = {
  label: null,
  helpLabel: null,
  helpText: null,
  placeholder: null,
  type: 'text',
  small: false,
  large: false,
  id: null,
  error: false,
  disabled: false,
  tooltip: null
};