import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './style';
export var Link = function Link(props) {
  return React.createElement(StyledLink, props);
};
Link.propTypes = {
  invert: PropTypes.bool,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
};
Link.defaultProps = {
  invert: false,
  target: '_self'
};