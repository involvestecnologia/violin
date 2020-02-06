import styled from 'styled-components';
import { withProp, prop, ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

export const StyledCard = styled.div`
  position: absolute;
  z-index: ${getFromTheme('zIndex.z6')};
  top: ${prop('position.top')}px;
  left: ${prop('position.left')}px;
  max-width: 300px;
  width: fit-content;
  opacity: ${ifProp('fadeIn', '1', '0')};
  border-radius: 4px;
  background-color: ${getFromTheme('palette.misc.white')};
  padding: 4px 0;
  box-shadow: 0 2px 5px ${withProp(getFromTheme('palette.black.900'), transparentize(0.8))};
  margin-top: ${ifProp('fadeIn', '0', '-5px')};
  transition-property: opacity, margin-top;
  transition-duration: .2s;
  transition-timing-function: ease;
`;

export const Trigger = styled.div`
  display: inline-block;
`;

export const Divider = styled.div`
  display: block;
  width: 100%;
  height: 0;
  border-top: 1px solid ${getFromTheme('palette.black.100')};
  margin: 5px 0; 
`;
