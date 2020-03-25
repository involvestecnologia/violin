import styled, { css } from 'styled-components';
import { ifProp, withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

export const errorStyle = css`
  box-shadow: 0 0 0 2px ${getFromTheme('palette.red.600')};
  background-color: ${withProp(getFromTheme('palette.red.100'), transparentize(0.2))};

  &:focus {
    box-shadow: 0 0 0 2px ${getFromTheme('palette.red.600')};
    background-color: ${withProp(getFromTheme('palette.red.100'), transparentize(0.2))};
  }
`;

export const inputStyle = css`
  display: block;
  width: 100%;
  height: ${ifProp('small', '30px', ifProp('large', '52px', '40px'))};
  box-sizing: border-box;
  border: none;
  background-color: ${withProp(getFromTheme('palette.primary.900'), transparentize(0.9))};
  border-radius: 4px;
  padding: 0 ${ifProp('large', '16px', '10px')};
  outline: none;
  transition: ${getFromTheme('common.transition')};
  font-family: ${getFromTheme('typography.fontFamily')};
  font-size: ${ifProp('large', getFromTheme('typography.fontSize.subtitle'), ifProp('small', getFromTheme('typography.fontSize.small'), getFromTheme('typography.fontSize.body')))};
  color: ${getFromTheme('palette.black.900')};
  box-shadow: 0 0 0 transparent;
`;

export const inputStyleFocus = css`
  background-color: ${getFromTheme('palette.misc.white')};
  box-shadow: 0 0 0 2px ${getFromTheme('palette.primary.500')};
`;

export const inputStyleDisabled = css`
  background-color: ${withProp(getFromTheme('palette.misc.black'), transparentize(0.96))};
  color: ${withProp(getFromTheme('palette.black.900'), transparentize(0.75))};
  cursor: not-allowed;
`;

export const Input = styled.input`
  ${inputStyle}

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
