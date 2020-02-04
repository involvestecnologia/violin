import React, { Fragment, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  ModalContainer,
  ModalWrapper,
  ModalBackdrop,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from './style';
import { Button } from '../Button';
import idgen from '../../utils/idgen';

export const Modal = ({
  isOpen,
  onClose,
  children,
  actions,
  title,
}) => {
  const onEscPress = ({ key }) => {
    if (key === 'Escape') onClose()
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    document.body.onkeydown = onEscPress
  }, [isOpen]);

  const targetElement = useMemo(() => document.querySelector('body'));

  const component = (
    <>
      <ModalBackdrop isOpen={isOpen} />
      <ModalContainer isOpen={isOpen} onClick={onClose}>
        <ModalWrapper isOpen={isOpen}>
          <ModalHeader>
            <ModalTitle size="h6">{title}</ModalTitle>
            <Button icon="close" secondary onClick={onClose} />
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
          {actions && (
            <ModalFooter>{actions.map((action) => (
              <Fragment key={`modal-action-${idgen()}`}>{action}</Fragment>
            ))}
            </ModalFooter>
          )}
        </ModalWrapper>
      </ModalContainer>
    </>
  );

  return ReactDOM.createPortal(component, targetElement);
}
