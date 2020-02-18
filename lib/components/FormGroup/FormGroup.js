"use strict";

exports.__esModule = true;
exports.FormGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = require("../Tooltip");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormGroup = function FormGroup(_ref) {
  var htmlFor = _ref.htmlFor,
      disabled = _ref.disabled,
      label = _ref.label,
      helpLabel = _ref.helpLabel,
      tooltip = _ref.tooltip,
      helpText = _ref.helpText,
      error = _ref.error,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["htmlFor", "disabled", "label", "helpLabel", "tooltip", "helpText", "error", "children"]);

  return _react["default"].createElement(_style.Wrapper, _extends({
    "data-testid": "wrapper"
  }, props), _react["default"].createElement(_style.LabelContainer, {
    "data-testid": "label-container"
  }, _react["default"].createElement(_style.StyledLabel, {
    htmlFor: htmlFor
  }, label && _react["default"].createElement(_style.LabelText, {
    isDisabled: disabled,
    "data-testid": "label-text"
  }, label), helpLabel && _react["default"].createElement(_style.HelpLabel, {
    isDisabled: disabled,
    "data-testid": "help-label"
  }, helpLabel)), tooltip && _react["default"].createElement(_Tooltip.Tooltip, {
    placement: "topRight",
    content: tooltip
  }, _react["default"].createElement(_style.InfoIcon, {
    icon: "error_outline"
  }))), children, helpText && _react["default"].createElement(_style.HelpText, {
    error: error,
    "data-testid": "help-text"
  }, helpText));
};

exports.FormGroup = FormGroup;
FormGroup.propTypes = {
  /** Set focus to input with this id value */
  htmlFor: _propTypes["default"].string,

  /** Change style to disabled */
  disabled: _propTypes["default"].bool,

  /** Label text */
  label: _propTypes["default"].string,

  /** Label help text */
  helpLabel: _propTypes["default"].string,

  /** Display info icon with content to tooltip */
  tooltip: _propTypes["default"].string,

  /** Set text to the bottom field for help or error text */
  helpText: _propTypes["default"].string,

  /** Set error style on help text */
  error: _propTypes["default"].bool
};
FormGroup.defaultProps = {
  htmlFor: null,
  disabled: null,
  label: null,
  helpLabel: null,
  tooltip: null,
  helpText: null,
  error: false
};