function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledIcon } from './style';
export var Button = function Button(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      iconRight = _ref.iconRight,
      dropdownIcon = _ref.dropdownIcon,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "icon", "iconRight", "dropdownIcon"]);

  return React.createElement(StyledButton, _extends({}, props, {
    iconOnly: !!icon && !children
  }), icon && React.createElement(StyledIcon, {
    icon: icon,
    hasChildren: !!children
  }), children, children && iconRight && React.createElement(StyledIcon, {
    icon: iconRight,
    right: true,
    hasChildren: !!children
  }), children && dropdownIcon && React.createElement(StyledIcon, {
    icon: "arrow_drop_down",
    right: true,
    hasChildren: !!children
  }));
};
Button.propTypes = {
  /** Change to primary style */
  primary: PropTypes.bool,

  /** Change to secondary style */
  secondary: PropTypes.bool,

  /** Change to danger style */
  danger: PropTypes.bool,

  /** Change to small size */
  small: PropTypes.bool,

  /** Change to large size */
  large: PropTypes.bool,

  /** Change to width 100% */
  block: PropTypes.bool,

  /** Add icon to left button */
  icon: PropTypes.string,

  /** Add icon to right button */
  iconRight: PropTypes.string,

  /** Change to invert style */
  invert: PropTypes.bool,

  /** Add arrow icon for dropdown buttons */
  dropdownIcon: PropTypes.bool
};
Button.defaultProps = {
  primary: null,
  secondary: null,
  danger: null,
  small: null,
  large: null,
  block: false,
  icon: null,
  iconRight: null,
  invert: false,
  dropdownIcon: false
};