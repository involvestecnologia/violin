import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

const captionStyle = css`
  color: ${getFromTheme('palette.black.400')};
  font-size: ${getFromTheme('typography.fontSize.small')};
`;

const disabledStyle = css`
  opacity: 0.25;
`;

const errorStyle = css`
  color: ${getFromTheme('palette.red.700')};
  font-size: ${getFromTheme('typography.fontSize.small')};
  font-weight: ${getFromTheme('typography.fontWeight.bold')};
`;

const smallStyle = css`
  font-size: ${getFromTheme('typography.fontSize.small')};
`;

export const StyledText = styled.p`
  margin: 0;
  font-size: ${getFromTheme('typography.fontSize.body')};
  font-weight: ${ifProp(
    'bold',
    getFromTheme('typography.fontWeight.bold')
  )};
  font-style: ${ifProp(
    'italic',
    'italic'
  )};
  ${(props) => props.caption && captionStyle}
  ${(props) => props.error && errorStyle}
  ${(props) => props.disabled && disabledStyle}
  ${(props) => props.small && smallStyle}
`;
