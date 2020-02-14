import styled, { css } from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

export const Wrapper = styled.label`
  display: inline-flex;
  align-items: flex-start;
`;

export const InputHidden = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const Svg = styled.svg`
  position: relative;
  width: 26px;
  height: 16px;
  flex-shrink: 0;
`;

export const Rect = styled.rect`
  fill: ${withProp(getFromTheme('palette.black.900'), transparentize(0.92))};
`;

export const Circle = styled.circle``;

export const LabelText = styled.span``;
