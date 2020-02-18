"use strict";

exports.__esModule = true;
exports.TextField = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextField = function TextField(_ref) {
  var id = _ref.id,
      error = _ref.error,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "error", "disabled"]);

  return _react["default"].createElement(_style.Input, _extends({
    id: id,
    error: error,
    disabled: disabled
  }, props));
};

exports.TextField = TextField;
TextField.propTypes = {
  placeholder: _propTypes["default"].string,

  /** Add native type attribute to input */
  type: _propTypes["default"].oneOf(['text', 'email', 'number', 'password', 'tel', 'url', 'datetime-local', 'date', 'search', 'month', 'time', 'week', 'currency']),

  /** Change size (height) input */
  small: _propTypes["default"].bool,

  /** Change size (height) input */
  large: _propTypes["default"].bool,

  /** Add native attribute id to input */
  id: _propTypes["default"].string,

  /** Set error style */
  error: _propTypes["default"].bool,

  /** Add a native attribute disabled and set disabled style */
  disabled: _propTypes["default"].bool
};
TextField.defaultProps = {
  placeholder: null,
  type: 'text',
  small: false,
  large: false,
  id: null,
  error: false,
  disabled: false
};