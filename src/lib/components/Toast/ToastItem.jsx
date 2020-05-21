import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Toast from './Toast';

const ToastItem = ({ children, remove, options }) => {
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

  const { timeout, ...restOptions } = defaultOptions;

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
    <Toast
      show={show}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      hide={onCloseToast}
      {...restOptions}
    >
      {children}
    </Toast>
  );
}

export default ToastItem;

ToastItem.propTypes = {
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

ToastItem.defaultProps = {
  remove: null,
  options: {
    timeout: 2000,
    action: null,
    customAction: null,
    closeButton: false
  },
}
