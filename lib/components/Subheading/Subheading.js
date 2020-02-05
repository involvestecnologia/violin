"use strict";

exports.__esModule = true;
exports.Subheading = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Subheading = function Subheading(props) {
  return _react["default"].createElement(_style.StyledHeading, props);
};

exports.Subheading = Subheading;
Subheading.propTypes = {
  small: _propTypes["default"].bool,
  overline: _propTypes["default"].bool
};
Subheading.defaultProps = {
  small: false,
  overline: false
};