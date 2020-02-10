import styled, { css } from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
import { Heading } from '../Heading';

export const ModalCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 70px auto max-content;
  overflow: auto;
  background: ${getFromTheme('palette.misc.white')};

  @media(min-width: 540px) {
    top: 50%;
    left: 50%;
    height: auto;
    width: 500px;
    grid-template-rows: 70px 1fr;
    overflow: hidden;
    max-height: calc(100vh - 20px);
    transform: translate(-50%, -50%);
    border-radius: 8px;
    box-shadow: 0px 5px 10px ${withProp(getFromTheme('palette.black.900'), transparentize(0.8))};
  }

  @media(min-width: 780px) {
    width: 700px;
  }

  @media only screen and (min-width: 540px) and (max-height: 450px) {
    top: 0;
    max-height: fit-content;
    transform: translate(-50%, 0);
    margin: 10px 0;
  }
`;

export const ModalBackdrop = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${getFromTheme('palette.black.500')};
`;

export const ModalWrapper = styled.div`
  z-index: ${getFromTheme('zIndex.z1')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  ${(props) => props.open && css`visibility: visible; opacity: 1;`}

  ${ModalBackdrop} {
    transition: ${getFromTheme('common.transition')};
    transition-duration: .2s;
    visibility: hidden;
    opacity: 0;
    ${(props) => props.open && css`visibility: visible; opacity: 0.6;`}
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 20px;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-bottom-color: rgba(31, 14, 61, .1);
  height: 70px;
  min-height: 70px;
`;

export const ModalTitle = styled(Heading)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  color: ${getFromTheme('palette.black.500')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
`;

export const ModalContent = styled.div`
  padding: 20px 20px 30px;

  @media(min-width: 540px) {
    overflow: auto;
  }

  @media only screen and (min-width: 540px) and (max-height: 450px) {
    overflow: hidden;
  } 
`;

export const ModalFooter = styled.footer`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 10px;
  padding: 20px 16px 16px 16px;

  @media(min-width: 540px) {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 5px;
    grid-template-rows: 70px;
    padding: 0 16px 0 16px;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    max-height: 70px;
    min-height: 70px;
    background-color: ${getFromTheme('palette.black.50')};
  }
`;
