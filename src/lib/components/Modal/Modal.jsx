import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  ModalWrapper,
  ModalCard,
  ModalBackdrop,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from './style';
import { Button } from '../Button';
import idgen from '../../utils/idgen';
import activeElement from '../../utils/activeElement';
import ownerDocument from '../../utils/ownerDocument';
import contains from '../../utils/contains';

const ModalWithPortal = ({
  open,
  onClose,
  children,
  actions,
  title,
  disableBackdropClick,
  disableEscapeKeyDown,
  zindex,
  ...props
}) => {
  const modalWrapperElement = useRef(null);
  const modalCardElement = useRef(null);
  const timerShow = useRef(null);
  const targetElement = useMemo(() => typeof window !== 'undefined' && window.document.querySelector('body'));
  const [triggerElement, setTriggerElement] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  const onEscPress = ({ key }) => {
    if (key === 'Escape') onClose()
  }

  const restoreLastFocus = () => {
    if (triggerElement) {
      triggerElement.focus();
      setTriggerElement(null)
    }
  }

  const autoFocus = () => {
    const currentActiveElement = activeElement(ownerDocument(this));
    if (modalWrapperElement && !contains(modalWrapperElement, currentActiveElement)) {
      setTriggerElement(currentActiveElement)
      modalCardElement.current.focus();
    }
  }

  const enableFadeIn = () => {
    timerShow.current = setTimeout(() => setFadeIn(true), 50);
  }

  const disableFadeIn = () => {
    clearTimeout(timerShow.current);
    setFadeIn(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    document.body.onkeydown = (open && !disableEscapeKeyDown) ? onEscPress : null;

    if (open) {
      autoFocus()
      enableFadeIn()
    } else {
      restoreLastFocus()
    }

    return () => disableFadeIn()
  }, [open]);

  const component = open && (
    <ModalWrapper ref={modalWrapperElement} fadeIn={fadeIn} zindex={zindex} data-testid="modal-wrapper">
      <ModalBackdrop
        onClick={onClose}
        disableBackdropClick={disableBackdropClick}
        data-testid="modal-backdrop"
      />
      <ModalCard ref={modalCardElement} tabIndex="0" data-testid="modal-card" {...props}>
        {title && (
          <ModalHeader>
            <ModalTitle size="h6">{title}</ModalTitle>
            <Button
              icon="close"
              secondary
              onClick={onClose}
              data-testid="modal-close-button"
            />
          </ModalHeader>
        )}
        <ModalContent>{children}</ModalContent>
        {actions && (
          <ModalFooter>{actions.map((action) => (
            <Fragment key={`modal-action-${idgen()}`}>{action}</Fragment>
          ))}
          </ModalFooter>
        )}
      </ModalCard>
    </ModalWrapper>
  );

  return typeof window !== 'undefined' && ReactDOM.createPortal(component, targetElement);
}

// this was necessary because docz doesn't understand
// the props of a component from ReactDOM.createPortal
// Ref: https://github.com/doczjs/docz/issues/942
export const Modal = (props) => <ModalWithPortal {...props} />

Modal.propTypes = {
  /** Makes modal visibile/hidden */
  open: PropTypes.bool,
  /** Updates modal state */
  onClose: PropTypes.func,
  /** Apply actions to modal footer */
  actions: PropTypes.arrayOf(PropTypes.element),
  /** Apply title to modal header */
  title: PropTypes.string,
  /** Prevent backdrop click from closing the modal */
  disableBackdropClick: PropTypes.bool,
  /** Prevent ESC key from closing the modal */
  disableEscapeKeyDown: PropTypes.bool,
  /** Apply z-index */
  zindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Modal.defaultProps = {
  open: false,
  onClose: null,
  actions: null,
  title: null,
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  zindex: null,
};
