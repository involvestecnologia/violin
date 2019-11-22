import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

export const Wrapper = styled.div`
  display: block;
  margin-bottom: ${ifProp(
    'noMargin',
    '0',
    getFromTheme('spacing.space4')
  )};
`;
