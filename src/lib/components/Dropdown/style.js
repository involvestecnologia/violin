import styled, { css } from 'styled-components';
import { withProp, prop, ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

const bottomPosition = css`
  top: ${prop('triggerPosition.bottom')}px;
`;

const topPosition = css`
  top: ${prop('triggerPosition.top')}px;
  transform: translateY(-100%);
`;

export const StyledCard = styled.div`
  position: absolute;
  z-index: ${getFromTheme('zIndex.z6')};
  min-width: ${prop('triggerPosition.width')}px;
  max-width: 300px;
  width: fit-content;
  opacity: ${ifProp('fadeIn', '1', '0')};
  border-radius: 4px;
  background-color: ${getFromTheme('palette.misc.white')};
  padding: 4px 0;
  box-shadow: 0 2px 5px ${withProp(getFromTheme('palette.black.900'), transparentize(0.8))};
  ${(props) => props.placement.y === 'bottom' && bottomPosition}
  ${(props) => props.placement.y === 'top' && topPosition}
  left: ${prop('triggerPosition.left')}px;
  margin-top: ${ifProp('fadeIn', '0', '-5px')};
  transition-property: opacity, margin-top;
  transition-duration: .2s;
  transition-timing-function: ease;
`;

export const Trigger = styled.div`
  display: inline-block;
`;
