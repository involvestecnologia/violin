import styled, { keyframes } from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../../utils/getFromTheme';

export const SelectMenuContainer = styled.div`
  position: absolute;
  z-index: ${getFromTheme('zIndex.z8')};
  top: 100%;
  left: 0;
  margin-top: 2px;
  width: 100%;
  max-height: 256px;
  overflow: auto;
  background-color: ${getFromTheme('palette.misc.white')};
  border-radius: 4px;
  padding: 8px 0;
  box-shadow: 0 5px 10px ${withProp(getFromTheme('palette.black.900'), transparentize(0.8))};
  overscroll-behavior: contain;

  scrollbar-color: ${withProp(getFromTheme('palette.black.900'), transparentize(0.9))} white;
  scrollbar-width: 10px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${withProp(getFromTheme('palette.black.900'), transparentize(0.9))};
  }
`;

export const EmptyFilter = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: ${getFromTheme('typography.fontSize.small')};
  color: ${getFromTheme('palette.black.500')};
`;

const rotate = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &::before {
    content: "";
    height: 16px;
    width: 16px;
    border: 3px solid ${withProp(getFromTheme('palette.primary.500'), transparentize(0.4))};
    border-top-color: transparent;
    border-radius: 100%;
    animation: ${rotate} .25s linear infinite;
  }
`;
