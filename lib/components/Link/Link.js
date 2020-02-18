"use strict";

exports.__esModule = true;
exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Link = function Link(props) {
  return _react["default"].createElement(_style.StyledLink, props);
};

exports.Link = Link;
Link.propTypes = {
  invert: _propTypes["default"].bool,
  target: _propTypes["default"].oneOf(['_blank', '_self', '_parent', '_top'])
};
Link.defaultProps = {
  invert: false,
  target: '_self'
};