"use strict";

exports.__esModule = true;
exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Link = function Link(_ref) {
  var external = _ref.external,
      props = _objectWithoutPropertiesLoose(_ref, ["external"]);

  return _react["default"].createElement(_style.StyledLink, _extends({}, props, {
    target: external ? '_blank' : '_self'
  }));
};

exports.Link = Link;
Link.propTypes = {
  invert: _propTypes["default"].bool,
  external: _propTypes["default"].bool
};
Link.defaultProps = {
  invert: false,
  external: false
};