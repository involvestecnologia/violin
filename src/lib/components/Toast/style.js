import styled from 'styled-components';
import { rem } from 'polished';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

const EDGE = 24;

export const StyledContainer = styled.div`
  position: fixed;
  z-index: ${getFromTheme('zIndex.z9')};
  bottom: ${ifProp('show', '0', '-100%')};
  left: 0;
  box-sizing: border-box;
  width: 100%;
  transition: ${getFromTheme('common.transition')};
  
  @media (min-width: 640px) {
    padding: ${EDGE}px;
    width: fit-content;
    max-width: calc(100% - ${EDGE * 2}px);
  }
`;

export const ToastItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-top: 10px;
  width: 100%;
  background-color: ${getFromTheme('palette.black.900')};
  color: white;
  font-size: ${rem(14)};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  box-sizing: border-box;
  overflow: hidden;
  opacity: ${ifProp('show', '1', '0')};
  max-height: ${ifProp('show', '500px', '0')};
  transition: all 0.5s ease-in-out;

  @media (min-width: 640px) {
    border-radius: 8px;
    width: fit-content;
  }
`;

export const ToastContent = styled.div`
  flex: 1;
  padding: 16px 0;
`;

export const ToastAction = styled.div`
  margin-right: -8px;
  margin-left: 16px;
  flex-shrink: 0;
`;
