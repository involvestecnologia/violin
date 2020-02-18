"use strict";

exports.__esModule = true;
exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, ["icon"]);

  return _react["default"].createElement(_style.WrapperIcon, props, icon);
};

exports.Icon = Icon;
Icon.propTypes = {
  /** Icon name from [Material Icons](https://material.io/resources/icons/?style=round) library */
  icon: _propTypes["default"].string.isRequired
};