import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

const overlineStyle = css`
  color: ${getFromTheme('palette.black.500')};
  font-size: ${getFromTheme('typography.fontSize.xsmall')};
  text-transform: uppercase;
`;

export const StyledSubtitle = styled.h2`
  margin: 0;
  font-size: ${ifProp('small', getFromTheme('typography.fontSize.body'), getFromTheme('typography.fontSize.large'))};
  line-height: ${getFromTheme('typography.lineHeight')};
  font-weight: ${getFromTheme('typography.fontWeight.bold')};
  color: ${getFromTheme('palette.black.900')};

  ${(props) => props.overline && overlineStyle}
`;
