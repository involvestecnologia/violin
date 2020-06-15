import React from 'react';
import PropTypes from 'prop-types';
import { StyledBar } from './style';

export const ProgressBar = ({ fixed, show, ...props }) => (
  <StyledBar fixed={fixed} show={show} {...props} data-testid="progressBar" />
)

ProgressBar.propTypes = {
  fixed: PropTypes.bool,
  show: PropTypes.bool
};

ProgressBar.defaultProps = {
  fixed: false,
  show: false
};
