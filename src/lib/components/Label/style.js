import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

export const StyledLabel = styled.label`
  display: block;
  font-size: ${getFromTheme('typography.fontSize.size2')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  color: ${ifProp(
    'disabled',
    getFromTheme('palette.default.regular'),
    getFromTheme('palette.system.dark')
  )};
`;

export const Description = styled.small`
  font-size: ${getFromTheme('typography.fontSize.size1')};
  font-style: italic;
  color: ${getFromTheme('palette.default.regular')};
  margin-left: 4px;
`;
