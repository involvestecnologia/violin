import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubtitle } from './style';

export const Subtitle = (props) => (
  <StyledSubtitle {...props} />
);

Subtitle.propTypes = {
  small: PropTypes.bool,
  overline: PropTypes.bool
};

Subtitle.defaultProps = {
  small: false,
  overline: false
};
