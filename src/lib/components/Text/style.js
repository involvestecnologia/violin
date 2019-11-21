import styled from 'styled-components';
import { theme, ifProp, switchProp } from 'styled-tools';
import { theme as involves } from '../../theme';
import switchPalette from '../../utils/switchPalette';

export const StyledText = styled.p`
  margin: 0;
  margin-bottom: ${ifProp(
    'margin',
    theme('spacing.space3', involves.spacing.space3)
  )};
  font-size: ${switchProp('size', {
    small: theme('typography.fontSize.size1', involves.typography.fontSize.size1),
    body: theme('typography.fontSize.size2', involves.typography.fontSize.size2),
    lead: theme('typography.fontSize.size3', involves.typography.fontSize.size3)
  })};
  font-weight: ${ifProp(
    'bold',
    theme('typography.fontWeight.bold', involves.typography.fontWeight.bold)
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
