import styled, { css } from 'styled-components';
import getFromTheme from '../../utils/getFromTheme';
import { Heading } from '../Heading';
import { Button } from '../Button';

const transition = css`
  transition: 'all 0.2 ease';
  transition-duration: .2s;
  visibility: hidden;
  opacity: 0;
`;

export const ModalWrapper = styled.div`
  z-index: ${getFromTheme('zIndex.z1')};
  position: fixed;
  top: 0;
  left: 0;
  background: ${getFromTheme('palette.misc.white')};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  ${transition}
  ${(props) => props.isOpen && css`visibility: visible; opacity: 1;`}

  @media(min-width: 540px) {
    width: 500px;
    max-height: calc(100vh - 20px);
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  }

  @media(min-width: 780px) {
    width: 700px;
  }
`;

export const ModalBackdrop = styled.div`
  z-index: ${getFromTheme('zIndex.z1')};
  position: fixed;
  top: 0;
  left: 0;
  background: ${getFromTheme('palette.black.500')};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${transition}
  ${(props) => props.isOpen && css`visibility: visible; opacity: 0.6;`}
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
`;

export const ModalTitle = styled(Heading)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  color: ${getFromTheme('palette.black.500')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
`;

export const ModalCloseButton = styled(Button)`
  color: ${getFromTheme('palette.black.500')};
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: auto;

  @media(min-width: 540px) {
    overflow: hidden;
  }
`;

export const ModalContent = styled.div`
  padding: 20px 20px 30px;

  @media(min-width: 540px) {
    overflow: auto;
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
    max-height: 70px;
    min-height: 70px;
    height: 70px;
    background-color: ${getFromTheme('palette.black.50')};
  }
`;
