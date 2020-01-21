import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './style';

export const Subheading = (props) => (
  <StyledHeading {...props} />
);

Subheading.propTypes = {
  small: PropTypes.bool,
  overline: PropTypes.bool
};

Subheading.defaultProps = {
  small: false,
  overline: false
};
