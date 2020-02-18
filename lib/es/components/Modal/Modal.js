var _this = this;

import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalWrapper, ModalCard, ModalBackdrop, ModalHeader, ModalTitle, ModalContent, ModalFooter } from './style';
import { Button } from '../Button';
import idgen from '../../utils/idgen';
import activeElement from '../../utils/activeElement';
import ownerDocument from '../../utils/ownerDocument';
import contains from '../../utils/contains';

var ModalWithPortal = function ModalWithPortal(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      children = _ref.children,
      actions = _ref.actions,
      title = _ref.title,
      disableBackdropClick = _ref.disableBackdropClick,
      disableEscapeKeyDown = _ref.disableEscapeKeyDown;
  var modalWrapperElement = useRef(null);
  var modalCardElement = useRef(null);
  var timerShow = useRef(null);
  var targetElement = useMemo(function () {
    return document.querySelector('body');
  });

  var _useState = useState(null),
      triggerElement = _useState[0],
      setTriggerElement = _useState[1];

  var _useState2 = useState(false),
      fadeIn = _useState2[0],
      setFadeIn = _useState2[1];

  var onEscPress = function onEscPress(_ref2) {
    var key = _ref2.key;
    if (key === 'Escape') onClose();
  };

  var restoreLastFocus = function restoreLastFocus() {
    if (triggerElement) {
      triggerElement.focus();
      setTriggerElement(null);
    }
  };

  var autoFocus = function autoFocus() {
    var currentActiveElement = activeElement(ownerDocument(_this));

    if (modalWrapperElement && !contains(modalWrapperElement, currentActiveElement)) {
      setTriggerElement(currentActiveElement);
      modalCardElement.current.focus();
    }
  };

  var enableFadeIn = function enableFadeIn() {
    timerShow.current = setTimeout(function () {
      return setFadeIn(true);
    }, 50);
  };

  var disableFadeIn = function disableFadeIn() {
    clearTimeout(timerShow.current);
    setFadeIn(false);
  };

  useEffect(function () {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    document.body.onkeydown = open && !disableEscapeKeyDown ? onEscPress : null;

    if (open) {
      autoFocus();
      enableFadeIn();
    } else {
      restoreLastFocus();
    }

    return function () {
      return disableFadeIn();
    };
  }, [open]);
  var component = open && React.createElement(ModalWrapper, {
    ref: modalWrapperElement,
    fadeIn: fadeIn,
    "data-testid": "modal-wrapper"
  }, React.createElement(ModalBackdrop, {
    onClick: onClose,
    disableBackdropClick: disableBackdropClick,
    "data-testid": "modal-backdrop"
  }), React.createElement(ModalCard, {
    ref: modalCardElement,
    tabIndex: "0",
    "data-testid": "modal-card"
  }, title && React.createElement(ModalHeader, null, React.createElement(ModalTitle, {
    size: "h6"
  }, title), React.createElement(Button, {
    icon: "close",
    secondary: true,
    onClick: onClose,
    "data-testid": "modal-close-button"
  })), React.createElement(ModalContent, null, children), actions && React.createElement(ModalFooter, null, actions.map(function (action) {
    return React.createElement(Fragment, {
      key: "modal-action-" + idgen()
    }, action);
  }))));
  return ReactDOM.createPortal(component, targetElement);
}; // this was necessary because docz doesn't understand
// the props of a component from ReactDOM.createPortal
// Ref: https://github.com/doczjs/docz/issues/942


export var Modal = function Modal(props) {
  return React.createElement(ModalWithPortal, props);
};
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
  disableEscapeKeyDown: PropTypes.bool
};
Modal.defaultProps = {
  open: false,
  onClose: null,
  actions: null,
  title: null,
  disableBackdropClick: false,
  disableEscapeKeyDown: false
};