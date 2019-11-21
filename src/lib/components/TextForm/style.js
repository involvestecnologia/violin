import styled from 'styled-components';
import { theme, switchProp } from 'styled-tools';
import { theme as involves } from '../../theme';

export const Text = styled.div`
  display: block;
  font-size: ${theme('typography.fontSize.size1', involves.typography.fontSize.size1)};
  color: ${switchProp('validate', {
    regular: theme('palette.default.dark', involves.palette.default.dark),
    alert: theme('palette.alert.regular', involves.palette.alert.regular),
    success: theme('palette.done.regular', involves.palette.done.regular),
    error: theme('palette.error.dark', involves.palette.error.dark)
  })};
`;
