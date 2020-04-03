import styled from 'styled-components';
import { prop } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

export const Flexbox = styled.div`
  display: ${prop('display', 'flex')};
  flex-direction: ${prop('flexDirection', 'row')};
  flex-wrap: ${prop('flexWrap', 'nowrap')};
  justify-content: ${prop('justifyContent', 'flex-start')};
  align-items: ${prop('alignItems', 'stretch')};
  align-content: ${prop('alignContent', 'flex-start')};
  order: ${prop('order', '0')};
  flex-grow: ${prop('flexGrow', '0')};
  flex-shrink: ${prop('flexShrink', '1')};
  align-self: ${prop('alignSelf', 'flex-start')};
  ${({ flex }) => flex && `flex: ${flex};`}
`;

export const Div = styled.div`
  background: ${getFromTheme('palette.primary.200')};
  color: ${getFromTheme('palette.primary.800')};
  padding: 10px;
  margin: 5px;
  font-size: 14px;
  border-radius: 4px;
`;
