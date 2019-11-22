import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, Wrapper, StyledIcon } from './style';

export const Input = ({ className, style, size, icon, error, onClickIcon, ...props }) => (
  <Wrapper className={className} style={style}>
    <StyledInput error={error} size={size} {...props} />
    {icon && <StyledIcon icon={icon} isLarge={size === 'large'} error={error} onClick={onClickIcon} />}
  </Wrapper>
)

Input.propTypes = {
  error: PropTypes.bool,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  onClickIcon: PropTypes.func,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'tel', 'url'])
};

Input.defaultProps = {
  error: false,
  icon: '',
  size: 'normal',
  onClickIcon: null,
  type: 'text'
};
