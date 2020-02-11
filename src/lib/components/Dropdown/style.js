import styled from 'styled-components';
import { withProp, prop, ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
import { Subtitle } from '../Subtitle';

export const StyledCard = styled.div`
  position: absolute;
  z-index: ${getFromTheme('zIndex.z6')};
  top: ${prop('position.top')}px;
  left: ${prop('position.left')}px;
  min-width: 160px;
  width: fit-content;
  opacity: ${ifProp('fadeIn', '1', '0')};
  border-radius: 4px;
  background-color: ${getFromTheme('palette.misc.white')};
  padding: 8px 0;
  box-shadow: 0 5px 10px ${withProp(getFromTheme('palette.black.900'), transparentize(0.8))};
  transition-property: opacity;
  transition-duration: .1s;
  transition-timing-function: ease;
`;

export const Trigger = styled.div`
  display: inline-block;
`;

export const Divider = styled.div`
  display: block;
  width: 100%;
  height: 0;
  border-top: 1px solid ${withProp(getFromTheme('palette.black.900'), transparentize(0.9))};
  margin: 8px 0; 
`;

export const StyledTitle = styled(Subtitle)`
  margin: 0;
  padding: 8px 16px 4px;
  color: ${getFromTheme('palette.black.400')};
`;
