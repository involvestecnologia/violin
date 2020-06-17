import styled, { css } from 'styled-components';
import { withProp, ifProp } from 'styled-tools';
import { transparentize, rem } from 'polished';
import getFromTheme from '../../utils/getFromTheme';

const activeStyle = css`
  border-style: solid;
  border-color: ${getFromTheme('palette.primary.300')};
  background-color: ${getFromTheme('palette.primary.100')};
`;

export const DropArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  border: 2px dashed ${withProp(getFromTheme('palette.primary.900'), transparentize(0.7))};
  border-radius: 8px;
  padding: 20px;
  outline: none;
  transition: ${getFromTheme('common.transition')};
  box-sizing: border-box;

  ${({ isDisabled }) => isDisabled && css`opacity: 0.5;`}

  ${({ isDisabled }) => !isDisabled && css`
    &:hover,
    &:focus {
      border-color: ${getFromTheme('palette.primary.400')};
      background-color: ${getFromTheme('palette.primary.50')};
    }

    &:active {
      ${activeStyle}
    }
  `}

  ${({ isDragActive }) => isDragActive && css`
    ${activeStyle}
  `}
`;

export const WrapperAction = styled.div`
  max-width: 360px;
  font-size: ${ifProp('small', rem(13), rem(14))};
  margin-top: ${ifProp('small', '30px', '0')};
  text-align: center;
  color: ${getFromTheme('palette.black.400')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  user-select: none;
  cursor: default;

  > span {
    display: block;
    color: ${getFromTheme('palette.primary.600')};

    @media (min-width: 768px) {
      display: inline;
    }
  }
`;

export const PreviewFigure = styled.div`
  width: 144px;
  height: 144px;
  background-color: ${withProp(getFromTheme('palette.primary.700'), transparentize(0.9))};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 12px;


  > i {
    font-size: 40px;
    color: ${withProp(getFromTheme('palette.primary.700'), transparentize(0.7))};
  }

  > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ScrollView = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 200px;
  overflow: auto;
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

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${ifProp('isList', 'flex-start', 'center')};
  margin: ${ifProp('isList', '0', '0 0 4px')};
  width: 100%;
  max-width: ${ifProp('isList', 'calc(320px)', '360px')};
`;

export const FileInfoName = styled.span`
  font-size: ${rem(13)};
  color: ${getFromTheme('palette.black.900')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FileInfoSize = styled.span`
  flex-shrink: 0;
  font-size: ${rem(13)};
  color: ${getFromTheme('palette.black.400')};
  margin-left: 5px;
`;

export const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 360px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  padding-bottom: 5px;

  &:last-of-type {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const WrapperList = styled.div`
  width: 100%;
  max-width: 360px;
`;
