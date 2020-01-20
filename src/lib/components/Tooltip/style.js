import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Ballon = styled.div`
  position: absolute;
  background: black;
  color: white;
  padding: 20px;
  top: calc(${prop('position.top')}px + 30px);
  left: ${prop('position.left')}px;
  z-index: 9;
`;

export const Trigger = styled.span``;
