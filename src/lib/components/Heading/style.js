import styled from 'styled-components';
import getFromTheme from '../../utils/getFromTheme';

export const StyledHeading = styled.h2`
  margin: 0;
  font-size: ${({ size }) => getFromTheme(`typography.fontSize.${size}`)};
  line-height: ${({ size }) => ((size === 'h1' || size === 'h2' || size === 'h3') ? '1.2' : getFromTheme('typography.lineHeight'))};
  font-weight: ${getFromTheme('typography.fontWeight.bold')};
  color: ${getFromTheme('palette.black.900')};
`;
