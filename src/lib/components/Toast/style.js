import styled from 'styled-components';
import { rem } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

const EDGE = 24;

export const StyledContainer = styled.div`
  position: fixed;
  z-index: ${getFromTheme('zIndex.z9')};
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  
  @media (min-width: 640px) {
    padding: ${EDGE}px;
    width: fit-content;
    max-width: calc(100% - ${EDGE * 2}px);
  }
`;

export const ToastItem = styled.div`
  padding: 16px;
  width: 100%;
  background-color: ${getFromTheme('palette.black.900')};
  color: white;
  font-size: ${rem(14)};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  box-sizing: border-box;
  margin-top: 10px;

  @media (min-width: 640px) {
    border-radius: 8px;
    width: fit-content;
  }
`;
