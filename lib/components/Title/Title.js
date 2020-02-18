"use strict";

exports.__esModule = true;
exports.Title = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Title = function Title(props) {
  return _react["default"].createElement(_style.StyledTitle, props);
};

exports.Title = Title;
Title.propTypes = {
  /** Defines style type */
  size: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
Title.defaultProps = {
  size: 'h2'
};