import styled, { css } from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
import {
  inputStyleFocus,
  inputStyleDisabled,
  errorStyle
} from '../TextField/style'

export const rowHeight = 20
export const padding = 10

export const StyledTextArea = styled.textarea`
  resize: none;
  line-height: ${rowHeight}px;
  min-height: ${rowHeight}px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  background-color: ${withProp(getFromTheme('palette.primary.900'), transparentize(0.9))};
  border-radius: 4px;
  padding: ${padding}px;
  outline: none;
  transition: ${getFromTheme('common.transition')}, height 0s;
  font-family: ${getFromTheme('typography.fontFamily')};
  font-size: ${getFromTheme('typography.fontSize.body')};
  color: ${getFromTheme('palette.black.900')};
  box-shadow: 0 0 0 transparent;
  ${({ maxRow }) => maxRow && css`max-height: ${(maxRow * rowHeight) + (padding * 2)}px;`}

  &::placeholder {
    color: ${getFromTheme('palette.black.500')};
  }

  &:focus {
    ${inputStyleFocus}
  }

  &:disabled {
    ${inputStyleDisabled}

    &::placeholder {
      color: ${withProp(getFromTheme('palette.black.500'), transparentize(0.75))};
    }
  }

  ${(props) => props.error && errorStyle}
`;
