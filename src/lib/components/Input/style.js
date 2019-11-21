import styled from 'styled-components';
import { ifProp, ifNotProp, switchProp } from 'styled-tools';
import { rem } from 'polished';
import { Icon } from '../Icon';
import getFromTheme from '../../utils/getFromTheme';

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
    getFromTheme('palette.error.regular'),
    getFromTheme('palette.default.dark')
  )};
  pointer-events: ${ifNotProp('onClick', 'none', 'auto')};
  transition: ${getFromTheme('common.transition')};
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
    getFromTheme('palette.error.white'),
    getFromTheme('palette.default.white')
  )};
  border-radius: ${getFromTheme('borderRadius.border1')};
  padding: 0 16px;
  transition: ${getFromTheme('common.transition')};
  outline: none;
  font-size: ${ifProp(
    { size: 'large' },
    getFromTheme('typography.fontSize.size3'),
    getFromTheme('typography.fontSize.size2'),
  )};
  color: ${getFromTheme('palette.system.dark')};
  box-shadow: inset ${ifProp(
    'error',
    getFromTheme('shadow.shadowBorder2')
  )} ${ifProp(
    'error',
    getFromTheme('palette.error.regular')
  )};

  &::placeholder {
    color: ${getFromTheme('palette.default.dark')};
  }

  &:focus {
    box-shadow: inset ${getFromTheme('shadow.shadowBorder2')} ${ifProp(
      'error',
      getFromTheme('palette.error.regular'),
      getFromTheme('palette.primary.regular')
    )};
    background-color: ${ifProp(
      'error',
      getFromTheme('palette.error.white'),
      getFromTheme('palette.system.white')
    )};
    ~ ${StyledIcon} {
      color: ${ifProp(
        'error',
        getFromTheme('palette.error.regular'),
        getFromTheme('palette.primary.regular')
      )};
    }
  }

  &:disabled {
    background-color: ${getFromTheme('palette.system.light')};
    color: ${getFromTheme('palette.default.regular')};
    cursor: not-allowed;

    &::placeholder {
      color: ${getFromTheme('palette.default.regular')};
    }
  }
`;
