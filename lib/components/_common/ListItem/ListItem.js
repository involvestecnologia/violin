"use strict";

exports.__esModule = true;
exports.ListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "icon"]);

  return _react["default"].createElement(_style.StyledItem, props, icon && _react["default"].createElement(_style.StyledIcon, {
    icon: icon
  }), children);
};

exports.ListItem = ListItem;
ListItem.propTypes = {
  /** Add an icon to left item */
  icon: _propTypes["default"].string,

  /** Change style to disabled */
  disabled: _propTypes["default"].bool
};
ListItem.defaultProps = {
  icon: null,
  disabled: false
};