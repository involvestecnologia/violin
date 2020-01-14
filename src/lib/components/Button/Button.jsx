import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledIcon } from './style';

export const Button = ({ children, icon, ...props }) => (
  <StyledButton {...props} iconOnly={!!icon && !children}>
    {icon && <StyledIcon icon={icon} hasChildren={!!children} />}
    {children}
  </StyledButton>
);

Button.propTypes = {
  /** Apply primary style */
  primary: PropTypes.bool,
  /** Apply secondary style */
  secondary: PropTypes.bool,
  /** Apply danger style */
  danger: PropTypes.bool,
  /** Apply small size */
  small: PropTypes.bool,
  /** Apply large size */
  large: PropTypes.bool,
  /** Apply width 100% */
  block: PropTypes.bool,
  icon: PropTypes.string,
  invert: PropTypes.bool
};

Button.defaultProps = {
  primary: null,
  secondary: null,
  danger: null,
  small: null,
  large: null,
  block: false,
  icon: null,
  invert: false
};
