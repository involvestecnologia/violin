import styled from 'styled-components';
import { withProp, prop, ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../../utils/getFromTheme';

export const StyledListCard = styled.div`
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
