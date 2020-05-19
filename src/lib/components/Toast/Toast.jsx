import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { ToastItem, ToastContent, ToastAction } from './style';

const Toast = ({ children, remove, options }) => {
  const [show, setShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const removeRef = useRef(null);
  const removeTimerRef = useRef(null);
  const startAnimateRef = useRef(null);
  const endAnimateRef = useRef(null);
  removeRef.current = remove;

  const defaultOptions = {
    timeout: 2000,
    action: null,
    customAction: null,
    closeButton: false,
    ...options
  };

  const { timeout, action, customAction, closeButton } = defaultOptions;

  useEffect(() => {
    startAnimateRef.current = setTimeout(() => setShow(true), 0);
    return () => {
      clearTimeout(startAnimateRef.current);
    }
  }, []);

  useEffect(() => {
    if (isHovered) {
      clearTimeout(removeTimerRef.current);
      clearTimeout(endAnimateRef.current);
    } else {
      endAnimateRef.current = setTimeout(() => setShow(false), timeout - 300);
      removeTimerRef.current = setTimeout(() => removeRef.current(), timeout);
    }

    return () => {
      clearTimeout(removeTimerRef.current);
      clearTimeout(endAnimateRef.current);
    }
  }, [isHovered]);

  const onCloseToast = () => {
    setShow(false);
    setTimeout(() => {
      remove();
    }, 300);
  };

  const onHover = () => {
    setIsHovered(true);
    clearTimeout(removeTimerRef.current);
  }

  const onLeave = () => {
    setIsHovered(false);
  }

  return (
    <ToastItem show={show} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <ToastContent>
        { children }
      </ToastContent>
      {customAction && (
        <ToastAction>
          {customAction}
        </ToastAction>
      )}
      {!customAction && action && action.label && action.method && (
        <ToastAction>
          <Button type="button" invert secondary small onClick={action.method} data-testid="toast-action-button">{action.label}</Button>
        </ToastAction>
      )}
      {closeButton && (
        <ToastAction>
          <Button type="button" invert secondary small icon="close" onClick={onCloseToast} data-testid="toast-close-button" />
        </ToastAction>
      )}
    </ToastItem>
  );
}

export default Toast;

Toast.propTypes = {
  remove: PropTypes.func,
  options: PropTypes.shape({
    timeout: PropTypes.number,
    action: PropTypes.shape({
      label: PropTypes.string,
      method: PropTypes.func
    }),
    customAction: PropTypes.node,
    closeButton: PropTypes.bool
  })
}

Toast.defaultProps = {
  remove: null,
  options: {
    timeout: 2000,
    action: null,
    customAction: null,
    closeButton: false
  },
}
