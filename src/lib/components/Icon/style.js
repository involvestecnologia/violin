import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

export const WrapperIcon = styled.i`
  font-family: 'Material Icons Round', sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  font-size: inherit;
  cursor: ${ifProp('onClick', 'pointer')};
  color: inherit;
  transition: ${getFromTheme('common.transition')};
`;
