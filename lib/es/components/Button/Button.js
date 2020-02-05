function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledIcon } from './style';
export var Button = function Button(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "icon"]);

  return React.createElement(StyledButton, _extends({}, props, {
    iconOnly: !!icon && !children
  }), icon && React.createElement(StyledIcon, {
    icon: icon,
    hasChildren: !!children
  }), children);
};
Button.propTypes = {
  /** Apply primary style */
  primary: PropTypes.bool,

  /** Apply secondary style */
  secondary: PropTypes.bool,

  /** Apply danger style */
  danger: PropTypes.bool,

  /** Apply small size */
  small: PropTypes.bool,

  /** Apply large size */
  large: PropTypes.bool,

  /** Apply width 100% */
  block: PropTypes.bool,
  icon: PropTypes.string,
  invert: PropTypes.bool
};
Button.defaultProps = {
  primary: null,
  secondary: null,
  danger: null,
  small: null,
  large: null,
  block: false,
  icon: null,
  invert: false
};