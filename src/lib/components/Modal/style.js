import styled, { css } from 'styled-components';
import getFromTheme from '../../utils/getFromTheme';
import { Heading } from '../Heading';
import { Button } from '../Button';

export const ModalWrapper = styled.div`
  z-index: ${getFromTheme('zIndex.z1')};
  position: absolute;
  top: 0;
  left: 0;
  background: ${getFromTheme('palette.misc.white')};
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 70px 1fr 1fr;
`;

export const ModalBackdrop = styled.div`
  z-index: ${getFromTheme('zIndex.z1')};
  position: absolute;
  top: 0;
  left: 0;
  background: #6F7390;
  opacity: 0.6;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-bottom-color: #E5E8EB;
`;

const ellipsisStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`;

export const ModalTitle = styled(Heading)`
  ${ellipsisStyle}
  color: ${getFromTheme('palette.black.500')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
`;

export const ModalCloseButton = styled(Button)`
  color: ${getFromTheme('palette.black.500')};
`;

export const ModalContent = styled.div`
  padding: 20px 30px 0 30px;
`;

export const ModalFooter = styled.footer`
  padding: 20px 16px 16px 16px;
`;
