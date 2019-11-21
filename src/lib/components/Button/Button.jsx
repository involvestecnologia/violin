import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledIcon } from './style';

export const Button = ({ children, icon, color, ...props }) => (
  <StyledButton hasColor={color} {...props}>
    {icon && <StyledIcon icon={icon} />}
    {children}
  </StyledButton>
);

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'accent', 'done', 'error', 'alert', 'progress']),
  /** Apply width 100% */
  block: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  outline: PropTypes.bool,
  icon: PropTypes.string
};

Button.defaultProps = {
  color: 'default',
  block: false,
  size: 'normal',
  outline: false,
  icon: null
};
