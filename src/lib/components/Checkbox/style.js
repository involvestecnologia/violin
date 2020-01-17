import styled, { css } from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

export const Wrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const Rect = styled.rect`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 2px;
  stroke: ${getFromTheme('palette.black.400')};
`;

export const Svg = styled.svg`
  position: relative;
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:hover {
    ${Rect} {
      stroke: ${getFromTheme('palette.primary.500')};
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
  font-size: ${getFromTheme('typography.fontSize.body')};
  cursor: pointer;
`;

export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;

  &:checked ~ ${Svg},
  &:indeterminate ~ ${Svg} {
    ${Rect} {
      stroke: ${getFromTheme('palette.primary.500')};
      fill: ${getFromTheme('palette.primary.500')};
    }

    &:hover {
      ${Rect} {
        stroke: ${getFromTheme('palette.primary.700')};
        fill: ${getFromTheme('palette.primary.700')};
      }
    }
  }

  &:focus ~ ${Svg} {
    ${Rect} {
      stroke: ${getFromTheme('palette.primary.500')};
    }
  }

  &:focus:checked ~ ${Svg},
  &:focus:indeterminate ~ ${Svg} {
    ${Rect} {
      stroke: ${getFromTheme('palette.primary.700')};
      fill: ${getFromTheme('palette.primary.700')};
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
    stroke: ${withProp(getFromTheme('palette.misc.black'), transparentize(0.85))};
    cursor: not-allowed;
  }

  &:disabled:checked ~ ${Svg} > ${Rect},
  &:disabled:indeterminate ~ ${Svg} > ${Rect} {
    stroke: ${withProp(getFromTheme('palette.misc.black'), transparentize(0.85))};
    fill: ${withProp(getFromTheme('palette.misc.black'), transparentize(0.85))};
  }
  
  &:disabled ~ ${Label} {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:disabled ~ ${Svg} {
    cursor: not-allowed;
  }
`;
