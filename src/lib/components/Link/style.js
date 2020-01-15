import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

export const StyledLink = styled.a`
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  text-decoration: ${ifProp('invert', 'underline', 'none')};
  cursor: pointer;
  transition: ${getFromTheme('common.transition')};
  color: ${ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primaryxpto.500'))};

  &:hover {
    text-decoration: ${ifProp('invert', 'none', 'underline')};
  }
`;
