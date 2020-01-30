import styled from 'styled-components';
import { withProp, prop, ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

export const StyledCard = styled.div`
  position: absolute;
  z-index: ${getFromTheme('zIndex.z6')};
  top: ${prop('triggerPosition.bottom')}px;
  left: ${prop('triggerPosition.left')}px;
  min-width: ${prop('triggerPosition.width')}px;
  opacity: ${ifProp('fadeIn', '1', '0')};
  margin-top: ${ifProp('fadeIn', '0', '-5px')};
  transition: opacity, margin-top;
  transition-duration: .2s;
  transition-timing-function: ease;
  border-radius: 4px;
  background-color: ${getFromTheme('palette.misc.white')};
  padding: 4px 0;
  box-shadow: 0 2px 5px ${withProp(getFromTheme('palette.black.900'), transparentize(0.8))};
`;
