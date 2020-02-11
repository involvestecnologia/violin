import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledIcon } from './style';

export const Button = ({ children, icon, iconRight, dropdownIcon, ...props }) => (
  <StyledButton {...props} iconOnly={!!icon && !children}>
    {icon && <StyledIcon icon={icon} hasChildren={!!children} />}
    {children}
    {children && iconRight && <StyledIcon icon={iconRight} right hasChildren={!!children} />}
    {children && dropdownIcon && <StyledIcon icon="arrow_drop_down" right hasChildren={!!children} />}
  </StyledButton>
);

Button.propTypes = {
  /** Change to primary style */
  primary: PropTypes.bool,
  /** Change to secondary style */
  secondary: PropTypes.bool,
  /** Change to danger style */
  danger: PropTypes.bool,
  /** Change to small size */
  small: PropTypes.bool,
  /** Change to large size */
  large: PropTypes.bool,
  /** Change to width 100% */
  block: PropTypes.bool,
  /** Add icon to left button */
  icon: PropTypes.string,
  /** Add icon to right button */
  iconRight: PropTypes.string,
  /** Change to invert style */
  invert: PropTypes.bool,
  /** Add arrow icon for dropdown buttons */
  dropdownIcon: PropTypes.bool
};

Button.defaultProps = {
  primary: null,
  secondary: null,
  danger: null,
  small: null,
  large: null,
  block: false,
  icon: null,
  iconRight: null,
  invert: false,
  dropdownIcon: false
};
