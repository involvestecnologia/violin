import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { theme as involves } from '../../theme';

export const Wrapper = styled.div`
  display: block;
  margin-bottom: ${ifProp(
    'noMargin',
    '0',
    theme('spacing.space4', involves.spacing.space4)
  )};
`;
