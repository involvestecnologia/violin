import styled, { css } from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

export const Wrapper = styled.label`
  display: inline-block;
  position: relative;
`;

const hoverStyle = css`
  box-shadow: 0 4px 8px ${withProp(getFromTheme('palette.black.900'), transparentize(0.8))};
`;

const activeStyle = css`
  background-color: ${getFromTheme('palette.primary.50')};
  color: ${getFromTheme('palette.primary.500')};
  border-color: ${getFromTheme('palette.primary.500')};
`;

export const StyledButton = styled.div`
  display: inline-flex;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  padding: 0 16px;
  font-size: ${getFromTheme('typography.fontSize.body')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  border: 1px solid ${getFromTheme('palette.black.300')};
  background-color: ${getFromTheme('palette.black.50')};
  color: ${getFromTheme('palette.black.500')};
  cursor: pointer;
  transition: ${getFromTheme('common.transition')};

  &:hover,
  &:focus {
    ${hoverStyle}
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;

  &:focus ~ ${StyledButton} {
    ${hoverStyle}
  }
  &:checked ~ ${StyledButton} {
    ${activeStyle}
  }

  &:disabled ~ ${StyledButton} {
    background-color: ${getFromTheme('palette.black.200')};
    border-color: ${getFromTheme('palette.black.200')};
    color: ${getFromTheme('palette.black.900')};
    opacity: 0.18;
    cursor: not-allowed;
    &:hover {
      box-shadow: none;
    }
  }

  &:disabled:checked ~ ${StyledButton} {
    background-color: ${getFromTheme('palette.black.200')};
    border-color: ${getFromTheme('palette.primary.700')};
    color: ${getFromTheme('palette.primary.700')};
    opacity: 0.26;
  }
`;
