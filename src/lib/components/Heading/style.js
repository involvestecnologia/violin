import styled from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

export const StyledHeading = styled.h2`
  margin: 0 0 ${ifProp(
    'noMargin',
    '0',
    getFromTheme('spacing.space3')
  )};
  font-size: ${switchProp('hasType', {
    title: getFromTheme('typography.fontSize.size5'),
    sub: getFromTheme('typography.fontSize.size3'),
    section: getFromTheme('typography.fontSize.size2')
  })};
  font-weight: ${switchProp('hasType', {
    title: getFromTheme('typography.fontWeight.bold'),
    sub: getFromTheme('typography.fontWeight.semiBold'),
    section: getFromTheme('typography.fontWeight.bold')
  })};
  color: ${switchProp('hasType', {
    title: getFromTheme('palette.system.dark'),
    sub: getFromTheme('palette.default.dark'),
    section: getFromTheme('palette.system.dark')
  })};
`;
