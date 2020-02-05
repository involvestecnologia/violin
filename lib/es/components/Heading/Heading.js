import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './style';
export var Heading = function Heading(props) {
  return React.createElement(StyledHeading, props);
};
Heading.propTypes = {
  /** Defines style type */
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
Heading.defaultProps = {
  size: 'h2'
};