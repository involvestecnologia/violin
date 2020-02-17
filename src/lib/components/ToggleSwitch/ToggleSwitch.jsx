import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputHidden, Svg, Rect, Circle, LabelText } from './style';

export const ToggleSwitch = ({ label, style, className, ...props }) => (
  <Wrapper data-testid="wrapper" style={style} className={className}>
    <InputHidden data-testid="input-hidden" type="checkbox" {...props} />
    <Svg data-testid="svg" viewBox="0 0 44 24" mlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="switch-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="1" />
          <feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <Rect x="4" y="6" rx="6" ry="6" />
      <Circle r="8" filter="url(#switch-shadow)" />
    </Svg>
    {label && <LabelText data-testid="label">{label}</LabelText>}
  </Wrapper>
)

ToggleSwitch.propTypes = {
  /** Add text label to switch */
  label: PropTypes.string,
  /** Init checked (onChange is required) */
  checked: PropTypes.bool,
  /** Function to change state */
  onChange: PropTypes.func,
  /** Set style to container of component */
  style: PropTypes.oneOfType([PropTypes.object]),
  /** Set className to container of component */
  className: PropTypes.string
}

ToggleSwitch.defaultProps = {
  label: null,
  checked: null,
  onChange: null,
  style: null,
  className: null
}
