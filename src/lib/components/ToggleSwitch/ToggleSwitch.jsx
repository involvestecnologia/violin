import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  InputStyled,
  CheckedIcon,
  IndeterminateIcon,
  Svg,
  Rect,
  Label
} from './style';

export const ToggleSwitch = ({ className, style, label, disabled, ...props }) => (
  <Wrapper className={className} style={style} disabled={disabled}>
    <InputStyled type="checkbox" disabled={disabled} {...props} />
    <div>
      <svg width="43" height="22" viewBox="0 0 43 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.08" x="2" y="4" width="36" height="12" rx="6" fill="#1F0E3D" />
        <g filter="url(#filter0_d)">
          <circle cx="32" cy="10" r="8" fill="#4693F8" />
        </g>
        <defs>
          <filter id="filter0_d" x="21" y="0" width="22" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
      <CheckedIcon d="M4 9L7 12L14 5" data-testid="checked-icon" />
      <IndeterminateIcon d="M5 9L13 9" />
    </div>
    {label && (<Label>{label}</Label>)}
  </Wrapper>
)

ToggleSwitch.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool
};

ToggleSwitch.defaultProps = {
  label: null,
  disabled: false
};
