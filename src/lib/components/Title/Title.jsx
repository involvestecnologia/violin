import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './style';

export const Title = (props) => (
  <StyledTitle {...props} />
);

Title.propTypes = {
  /** Defines style type */
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Title.defaultProps = {
  size: 'h2'
};
