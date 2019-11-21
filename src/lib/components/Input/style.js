import styled from 'styled-components';
import { ifProp, ifNotProp, theme, switchProp } from 'styled-tools';
import { rem } from 'polished';
import { theme as involves } from '../../theme';
import { Icon } from '../Icon';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: ${ifProp(
    'isLarge',
    rem(32),
    rem(24)
  )};
  color: ${ifProp(
    'error',
    theme('palette.error.regular', involves.palette.error.regular),
    theme('palette.default.dark', involves.palette.default.regular)
  )};
  pointer-events: ${ifNotProp('onClick', 'none', 'auto')};
  transition: ${theme('common.transition', involves.common.transition)};
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  min-height: ${switchProp('size', {
    small: '32px',
    normal: '40px',
    large: '60px'
  }, '40px')};
  border: 0;
  box-sizing: border-box;
  background-color: ${ifProp(
    'error',
    theme('palette.error.white', involves.palette.error.white),
    theme('palette.default.white', involves.palette.default.white)
  )};
  border-radius: ${theme('borderRadius.border1', involves.borderRadius.border1)};
  padding: 0 16px;
  transition: ${theme('common.transition', involves.common.transition)};
  outline: none;
  font-size: ${ifProp(
    { size: 'large' },
    theme('typography.fontSize.size3', involves.typography.fontSize.size3),
    theme('typography.fontSize.size2', involves.typography.fontSize.size2),
  )};
  color: ${theme('palette.system.dark', involves.palette.system.dark)};
  box-shadow: inset ${ifProp(
    'error',
    theme('shadow.shadowBorder2', involves.shadow.shadowBorder2)
  )} ${ifProp(
    'error',
    theme('palette.error.regular', involves.palette.error.regular)
  )};

  &::placeholder {
    color: ${theme('palette.default.dark', involves.palette.default.dark)};
  }

  &:focus {
    box-shadow: inset ${theme('shadow.shadowBorder2', involves.shadow.shadowBorder2)} ${ifProp(
      'error',
      theme('palette.error.regular', involves.palette.error.regular),
      theme('palette.primary.regular', involves.palette.primary.regular)
    )};
    background-color: ${ifProp(
      'error',
      theme('palette.error.white', involves.palette.error.white),
      theme('palette.system.white', involves.palette.system.white)
    )};
    ~ ${StyledIcon} {
      color: ${ifProp(
        'error',
        theme('palette.error.regular', involves.palette.error.regular),
        theme('palette.primary.regular', involves.palette.primary.regular)
      )};
    }
  }

  &:disabled {
    background-color: ${theme('palette.system.light', involves.palette.system.light)};
    color: ${theme('palette.default.regular', involves.palette.default.regular)};
    cursor: not-allowed;

    &::placeholder {
      color: ${theme('palette.default.regular', involves.palette.default.regular)};
    }
  }
`;
