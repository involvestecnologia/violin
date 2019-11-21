import styled from 'styled-components';
import { rem } from 'polished';
import { ifProp, switchProp } from 'styled-tools';
import switchPalette from '../../utils/switchPalette';
import getFromTheme from '../../utils/getFromTheme';

export const WrapperIcon = styled.i`
  font-family: 'Material Icons Round', sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  font-size: ${ifProp(
    'hasSize',
    (prop) => rem(prop.hasSize),
    'inherit'
  )};
  cursor: ${ifProp('onClick', 'pointer')};
  color: ${switchProp('hasColor', switchPalette())};
  transition: ${getFromTheme('common.transition')};

  &:hover {
    color: ${ifProp(
      'onClick',
      switchProp('hasColor', switchPalette('dark'))
    )};
  }
`;
