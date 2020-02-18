function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledIcon } from './style';
export var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "icon"]);

  return React.createElement(StyledItem, props, icon && React.createElement(StyledIcon, {
    icon: icon
  }), children);
};
ListItem.propTypes = {
  /** Add an icon to left item */
  icon: PropTypes.string,

  /** Change style to disabled */
  disabled: PropTypes.bool
};
ListItem.defaultProps = {
  icon: null,
  disabled: false
};