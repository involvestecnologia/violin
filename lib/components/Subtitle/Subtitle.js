"use strict";

exports.__esModule = true;
exports.Subtitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Subtitle = function Subtitle(props) {
  return _react["default"].createElement(_style.StyledSubtitle, props);
};

exports.Subtitle = Subtitle;
Subtitle.propTypes = {
  small: _propTypes["default"].bool,
  overline: _propTypes["default"].bool
};
Subtitle.defaultProps = {
  small: false,
  overline: false
};