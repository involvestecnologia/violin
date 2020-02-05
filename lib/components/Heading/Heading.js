"use strict";

exports.__esModule = true;
exports.Heading = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Heading = function Heading(props) {
  return _react["default"].createElement(_style.StyledHeading, props);
};

exports.Heading = Heading;
Heading.propTypes = {
  /** Defines style type */
  size: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
Heading.defaultProps = {
  size: 'h2'
};