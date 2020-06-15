import styled, { css, keyframes } from 'styled-components';
import { withProp, ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

const fixedStyle = css`
  position: fixed;
  z-index: ${getFromTheme('zIndex.z8')};
  top: 0;
  left: 0;
`;

const relativeStyle = css`
  position: relative;
`;

const progressAnimation = keyframes`
  0%   { transform: scaleX(0) translate(-100%); }
  30%  { transform: scaleX(0.2) translate(15%); }
  50%  { transform: scaleX(0.4) translate(50%); }
  70%  { transform: scaleX(1) translate(70%); }
  100% { transform: scaleX(0.8) translate(150%); }
`;

export const StyledBar = styled.div`
  ${({ fixed }) => (fixed ? fixedStyle : relativeStyle)};
  width: 100%;
  height: ${ifProp('show', '3px', '0px')};
  visibility: ${ifProp('show', 'visible', 'hidden')};
  background-color: ${withProp(getFromTheme('palette.primary.500'), transparentize(0.7))};
  overflow: hidden;
  transition: ${getFromTheme('common.transition')};

  &::after {
    content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${getFromTheme('palette.primary.500')};
      transform-origin: 0 0;
      animation: 1.4s linear 0s infinite ${progressAnimation};
  }
`;
