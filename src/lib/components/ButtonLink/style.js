import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import switchPalette from '../../utils/switchPalette';
import getFromTheme from '../../utils/getFromTheme';

export const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: ${getFromTheme('common.transition')};
  color: ${switchProp('hasColor', switchPalette())};

  &:hover {
    text-decoration: underline;
  }

  &:disabled,
  &:disabled:hover {
    color: ${getFromTheme('palette.default.light')};
    cursor: not-allowed;
  }
`;
