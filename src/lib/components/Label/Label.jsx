import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel, Description } from './style';

export const Label = ({ children, description, ...props }) => (
  <StyledLabel {...props}>
    {children}
    {description && <Description> - { description }</Description>}
  </StyledLabel>
);

Label.propTypes = {
  /** Additional text label */
  description: PropTypes.string,
  disabled: PropTypes.bool
};

Label.defaultProps = {
  description: null,
  disabled: false
};
