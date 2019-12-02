import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

export const Text = styled.div`
  display: block;
  font-size: ${getFromTheme('typography.fontSize.size1')};
  color: ${switchProp('validate', {
    regular: getFromTheme('palette.default.dark'),
    alert: getFromTheme('palette.alert.regular'),
    done: getFromTheme('palette.done.regular'),
    error: getFromTheme('palette.error.dark')
  })};
`;
