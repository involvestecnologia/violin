import styled from 'styled-components';
import { ifProp, ifNotProp, switchProp } from 'styled-tools';
import { rem } from 'polished';
import { Icon } from '../Icon';
import { theme as involves } from '../../theme';
import switchPalette from '../../utils/switchPalette';
import getFromTheme from '../../utils/getFromTheme';

const regularPalette = switchPalette('regular');
const darkPalette = switchPalette('dark');
const shadowPalette = switchPalette('shadow');

export const StyledButton = styled.button`
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  padding: 0 16px;
  outline: none;
  font-family: ${getFromTheme('typography.fontFamily')};
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
  transition: ${getFromTheme('common.transition')};
  border-radius: ${getFromTheme('borderRadius.border1')};
  height: ${switchProp('size', {
    small: '32px',
    normal: '40px',
    large: '60px'
  })};
  font-size: ${switchProp('size', {
    small: getFromTheme('typography.fontSize.size1'),
    normal: getFromTheme('typography.fontSize.size1'),
    large: getFromTheme('typography.fontSize.size3')
  })};
  display: ${ifProp('block', 'flex', 'inline-flex')};
  width: ${ifProp('block', '100%', 'auto')};
  min-width: ${ifProp({ size: 'large' }, '240px')};
  background-color: ${ifProp(
    'outline',
    'transparent',
    switchProp('hasColor', regularPalette)
  )};
  color: ${ifProp(
    'outline',
    switchProp('hasColor', regularPalette),
    involves.palette.system.white
  )};
  border: 0;
  --regular: ${ifProp(
    'outline',
    switchProp('hasColor', regularPalette),
    'transparent'
  )};
  --active: ${ifProp(
    'outline',
    switchProp('hasColor', darkPalette),
    'transparent'
  )};
  --outline: inset
    ${ifProp(
    'outline',
      ifProp(
        { size: 'large' },
        getFromTheme('shadow.shadowBorder2'),
        getFromTheme('shadow.shadowBorder1')
      ),
      '0 0 0 0'
    )};
  box-shadow: var(--outline) var(--regular);

  &:hover {
    box-shadow: var(--outline) var(--regular), ${getFromTheme('shadow.shadow12')} ${switchProp('hasColor', shadowPalette)};
  }

  &:active {
    box-shadow: var(--outline) var(--active), ${getFromTheme('shadow.shadow3')} ${switchProp('hasColor', shadowPalette)};
    background-color: ${ifNotProp(
      'outline',
      switchProp('hasColor', darkPalette)
    )};
    border-color: ${ifProp(
      'outline',
      switchProp('hasColor', darkPalette)
    )};
    color: ${ifProp(
      'outline',
      switchProp('hasColor', darkPalette)
    )};
  }

  &:disabled,
  &:disabled:hover {
    background-color: ${getFromTheme('palette.system.light')};
    color: ${getFromTheme('palette.default.light')};
    box-shadow: none;
    cursor: not-allowed;
  }
`;

export const StyledIcon = styled(Icon)`
  font-size: ${rem(24)};
  margin-right: 10px;
  cursor: inherit;
`;
