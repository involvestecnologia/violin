function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './style';
export var Link = function Link(_ref) {
  var external = _ref.external,
      props = _objectWithoutPropertiesLoose(_ref, ["external"]);

  return React.createElement(StyledLink, _extends({}, props, {
    target: external ? '_blank' : '_self'
  }));
};
Link.propTypes = {
  invert: PropTypes.bool,
  external: PropTypes.bool
};
Link.defaultProps = {
  invert: false,
  external: false
};