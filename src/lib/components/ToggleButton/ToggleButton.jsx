import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledButton, HiddenInput } from './style';

export const ToggleButton = ({ multiple, style, className, children, ...props }) => (
  <Wrapper data-testid="wrapper">
    <HiddenInput data-testid="hidden-input" type={multiple ? 'checkbox' : 'radio'} {...props} />
    <StyledButton data-testid="styled-button" style={style} className={className}>{children}</StyledButton>
  </Wrapper>
)

ToggleButton.propTypes = {
  /** Change to checkbox behavior */
  multiple: PropTypes.bool,
  /** Change style button */
  style: PropTypes.oneOfType([PropTypes.object]),
  /** Add css class to change button style */
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}

ToggleButton.defaultProps = {
  multiple: false,
  style: null,
  className: null,
  checked: null,
  disabled: null
}
