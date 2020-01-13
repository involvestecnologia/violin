import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

export const Wrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const Rect = styled.rect`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 2px;
  stroke: ${getFromTheme('palette.default.regular')};
`;

export const Svg = styled.svg`
  position: relative;
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:hover {
    ${Rect} {
      stroke: ${getFromTheme('palette.primary.regular')};
    }
  }
`;

const iconCheck = css`
  stroke-width: 2px;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  opacity: 0;
`;

export const CheckedIcon = styled.path`
  ${iconCheck}
`;

export const IndeterminateIcon = styled.path`
  ${iconCheck}
`;

export const Label = styled.span`
  margin-left: 6px;
`;

export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;

  &:checked ~ ${Svg},
  &:indeterminate ~ ${Svg} {
    ${Rect} {
      stroke: ${getFromTheme('palette.primary.regular')};
      fill: ${getFromTheme('palette.primary.regular')};
    }

    &:hover {
      ${Rect} {
        stroke: ${getFromTheme('palette.primary.dark')};
        fill: ${getFromTheme('palette.primary.dark')};
      }
    }
  }

  &:focus ~ ${Svg} {
    ${Rect} {
      stroke: ${getFromTheme('palette.primary.regular')};
    }
  }

  &:focus:checked ~ ${Svg},
  &:focus:indeterminate ~ ${Svg} {
    ${Rect} {
      stroke: ${getFromTheme('palette.primary.dark')};
      fill: ${getFromTheme('palette.primary.dark')};
    }
  }

  &:checked ~ ${Svg} {
    > ${CheckedIcon} {
      opacity: 1;
    }
    > ${IndeterminateIcon} {
      opacity: 0;
    }
  }

  &:indeterminate ~ ${Svg} {
    > ${CheckedIcon} {
      opacity: 0;
    }
    > ${IndeterminateIcon} {
      opacity: 1;
    }
  }

  &:disabled ~ ${Svg} > ${Rect},
  &:indeterminate ~ ${Svg} > ${Rect} {
    stroke: ${getFromTheme('palette.default.white')};
    cursor: not-allowed;
  }

  &:disabled:checked ~ ${Svg} > ${Rect},
  &:disabled:indeterminate ~ ${Svg} > ${Rect} {
    stroke: ${getFromTheme('palette.default.white')};
    fill: ${getFromTheme('palette.default.white')};
  }
  
  &:disabled ~ ${Label} {
    opacity: 0.3;
  }
`;
