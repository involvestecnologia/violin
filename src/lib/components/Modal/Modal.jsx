import React from 'react';
import ReactDOM from 'react-dom';
import {
  ModalWrapper,
  ModalBackdrop,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from './style';
import { Button } from '../Button';

export const Modal = ({
  isOpen,
  onClose,
  children,
  actions,
  title,
}) => {
  const component = (
    <>
      {isOpen && (
        <>
          <ModalBackdrop onClick={onClose} />
          <ModalWrapper>
            <ModalHeader>
              <ModalTitle size="h6">{title}</ModalTitle>
              <Button icon="close" secondary onClick={onClose} />
            </ModalHeader>
            <ModalContent>
              {children}
            </ModalContent>
            <ModalFooter>
              {actions}
            </ModalFooter>
          </ModalWrapper>
        </>
      )}
    </>
  );

  return ReactDOM.createPortal(component, document.querySelector('body'));
}
