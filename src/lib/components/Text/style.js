import styled from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import switchPalette from '../../utils/switchPalette';
import getFromTheme from '../../utils/getFromTheme';

export const StyledText = styled.p`
  margin: 0;
  margin-bottom: ${ifProp(
    'margin',
    getFromTheme('spacing.space3')
  )};
  font-size: ${switchProp('size', {
    small: getFromTheme('typography.fontSize.size1'),
    body: getFromTheme('typography.fontSize.size2'),
    lead: getFromTheme('typography.fontSize.size3')
  })};
  font-weight: ${ifProp(
    'bold',
    getFromTheme('typography.fontWeight.bold')
  )};
  font-style: ${ifProp(
    'italic',
    'italic'
  )};
  color: ${ifProp(
    'hasColor',
    switchProp('hasColor', switchPalette())
  )};
  white-space: ${ifProp('isNowrap', 'nowrap')};
`;
