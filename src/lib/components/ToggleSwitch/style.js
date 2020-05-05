import styled from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const Svg = styled.svg`
  position: relative;
  width: 48px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const Rect = styled.rect`
  width: 36px;
  height: 12px;
  fill: ${withProp(getFromTheme('palette.black.900'), transparentize(0.92))};
`;

export const Circle = styled.circle`
  fill: ${getFromTheme('palette.black.300')};
  transition: ${getFromTheme('common.transition')};
  cx: 10;
  cy: 12;
`;

export const LabelText = styled.span`
  margin-left: 6px;
  font-size: ${getFromTheme('typography.fontSize.body')};
  cursor: pointer;
`;

export const InputHidden = styled.input`
  opacity: 0;
  display: hidden;
  position: absolute;

  &:checked ~ ${Svg} {
    ${Circle} {
      fill: ${getFromTheme('palette.primary.500')};
      cx: 34;
    }
  }

  &:focus ~ ${Svg} {
    transition: ${getFromTheme('common.transition')};
    ${Circle} {
      stroke-width: 8;
    }
  }

  &:focus:checked ~ ${Svg} {
    ${Circle} {
      stroke: ${withProp(getFromTheme('palette.primary.500'), transparentize(0.8))};
    }
  }

  &:focus:not(:checked) ~ ${Svg} {
    ${Circle} {
      stroke: ${withProp(getFromTheme('palette.black.300'), transparentize(0.8))};
    }
  }

  &:disabled ~ ${Svg} {
    cursor: not-allowed;
    ${Rect} {
      fill: ${withProp(getFromTheme('palette.black.900'), transparentize(0.96))};
    }
    ${Circle} {
      fill: ${getFromTheme('palette.black.100')};
    }
  }

  &:disabled ~ ${LabelText} {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
