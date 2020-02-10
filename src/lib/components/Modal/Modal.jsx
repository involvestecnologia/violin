import React, { Fragment, useEffect, useMemo } from 'react';
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

const ModalWithPortal = ({
  open,
  onClose,
  children,
  actions,
  title,
}) => {
  const onEscPress = ({ key }) => {
    if (key === 'Escape') onClose()
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    document.body.onkeydown = open ? onEscPress : null;
  }, [open]);

  const targetElement = useMemo(() => document.querySelector('body'));

  const component = (
    <ModalWrapper open={open}>
      <ModalBackdrop onClick={onClose} data-testid="modal-backdrop" />
      <ModalCard>
        {title && (
          <ModalHeader>
            <ModalTitle size="h6">{title}</ModalTitle>
            <Button icon="close" secondary onClick={onClose} data-testid="modal-close-button" />
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

  return ReactDOM.createPortal(component, targetElement);
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
};

Modal.defaultProps = {
  open: false,
  onClose: null,
  actions: null,
  title: null,
};
