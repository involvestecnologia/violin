import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputStyled, CheckedIcon, IndeterminateIcon, Svg, Rect, Label } from './style';

export const Checkbox = ({ className, style, label, customLabel, ...props }) => (
  <Wrapper className={className} style={style}>
    <InputStyled type="checkbox" {...props} />
    <Svg viewBox="0 0 18 18" mlns="http://www.w3.org/2000/svg">
      <Rect strokeLocation="inside" x="1" y="1" rx="2" ry="2" strokeWidth="2" stroke="black" />
      <CheckedIcon d="M4 9L7 12L14 5" data-testid="checked-icon" />
      <IndeterminateIcon d="M5 9L15 9" />
    </Svg>
    {(label || customLabel)
      && (
        <Label>
          {label && label}
          {customLabel && customLabel}
        </Label>
      )}
  </Wrapper>
)

Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  customLabel: PropTypes.node
};

Checkbox.defaultProps = {
  label: null,
  customLabel: null
};
