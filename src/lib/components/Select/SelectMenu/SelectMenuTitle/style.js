import styled from 'styled-components';
import { rem } from 'polished';
import getFromTheme from '../../../../utils/getFromTheme';

export const StyledSelectMenuTitle = styled.h6`
  font-size: ${rem(11)};
  text-transform: uppercase;
  color: ${getFromTheme('palette.black.400')};
  padding: 10px 16px 4px 16px;
  margin: 0;
  cursor: default;
  user-select: none;
`;
