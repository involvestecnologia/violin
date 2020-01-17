import styled from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

export const Wrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const Circle = styled.circle`
  fill: none;
  stroke-width: 2px;
  stroke: ${getFromTheme('palette.black.400')};
`;

export const CircleCheck = styled.circle`
  fill: ${getFromTheme('palette.primary.500')};
  opacity: 0;
`;

export const Svg = styled.svg`
  position: relative;
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:hover {
    ${Circle} {
      stroke: ${getFromTheme('palette.primary.500')};
    }
  }
`;

export const Label = styled.span`
  margin-left: 6px;
  font-size: ${getFromTheme('typography.fontSize.body')};
  cursor: pointer;
`;

export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;

  &:checked ~ ${Svg} {
    ${Circle} {
      stroke: ${getFromTheme('palette.primary.500')};
    }
    ${CircleCheck} {
      opacity: 1;
    }

    &:hover {
      ${Circle} {
        stroke: ${getFromTheme('palette.primary.700')};
      }
      ${CircleCheck} {
        fill: ${getFromTheme('palette.primary.700')};
      }
    }
  }

  &:focus {
    ~ ${Svg} {
      ${Circle} {
        stroke: ${getFromTheme('palette.primary.500')};
      }
    }

    &:checked {
      ~ ${Svg} {
        ${Circle} {
          stroke: ${getFromTheme('palette.primary.700')};
        }
        ${CircleCheck} {
          fill: ${getFromTheme('palette.primary.700')};
        }
      }
    } 
  }

  &:disabled {
    ~ ${Svg} {
      cursor: not-allowed;

      ${Circle} {
        stroke: ${withProp(getFromTheme('palette.misc.black'), transparentize(0.85))};
        cursor: not-allowed;
      }
    }

    ~ ${Label} {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &:checked {
      ~ ${Svg} {
        ${Circle} {
          stroke: ${withProp(getFromTheme('palette.misc.black'), transparentize(0.85))};
        }
        ${CircleCheck} {
          fill: ${withProp(getFromTheme('palette.misc.black'), transparentize(0.85))};
        }
      }
    }
  }
`;
