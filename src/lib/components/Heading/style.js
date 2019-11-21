import styled from 'styled-components';
import { theme, ifProp, switchProp } from 'styled-tools';
import { theme as involves } from '../../theme';

export const StyledHeading = styled.h2`
  margin: 0 0 ${ifProp(
    'noMargin',
    '0',
    theme('spacing.space3', involves.spacing.space3)
  )};
  font-size: ${switchProp('hasType', {
    title: theme('typography.fontSize.size5', involves.typography.fontSize.size5),
    sub: theme('typography.fontSize.size3', involves.typography.fontSize.size3),
    section: theme('typography.fontSize.size2', involves.typography.fontSize.size2)
  })};
  font-weight: ${switchProp('hasType', {
    title: theme('typography.fontWeight.bold', involves.typography.fontWeight.bold),
    sub: theme('typography.fontWeight.semiBold', involves.typography.fontWeight.semiBold),
    section: theme('typography.fontWeight.bold', involves.typography.fontWeight.bold)
  })};
  color: ${switchProp('hasType', {
    title: theme('palette.system.dark', involves.palette.system.dark),
    sub: theme('palette.default.dark', involves.palette.default.dark),
    section: theme('palette.system.dark', involves.palette.system.dark)
  })};
`;
