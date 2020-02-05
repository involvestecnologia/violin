function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { WrapperIcon } from './style';
export var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, ["icon"]);

  return React.createElement(WrapperIcon, props, icon);
};
Icon.propTypes = {
  /** Icon name from [Material Icons](https://material.io/resources/icons/?style=round) library */
  icon: PropTypes.string.isRequired
};