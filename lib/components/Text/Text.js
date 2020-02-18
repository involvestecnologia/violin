"use strict";

exports.__esModule = true;
exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Text = function Text(props) {
  return _react["default"].createElement(_style.StyledText, props);
};

exports.Text = Text;
Text.propTypes = {
  small: _propTypes["default"].bool,
  caption: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  bold: _propTypes["default"].bool,
  italic: _propTypes["default"].bool
};
Text.defaultProps = {
  small: false,
  caption: false,
  disabled: false,
  error: false,
  bold: false,
  italic: false
};