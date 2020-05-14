import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { ToastItem, ToastContent, ToastAction } from './style';

function Toast({ children, remove, options }) {
  const [show, setShow] = useState(false);
  const removeRef = useRef(null);
  removeRef.current = remove;

  const { timeout, action, customAction } = options;

  useEffect(() => {
    const duration = timeout;
    const startAnimateRef = setTimeout(() => setShow(true), 0);
    const endAnimateRef = setTimeout(() => setShow(false), duration - 300);
    const removeToast = setTimeout(() => removeRef.current(), duration);

    return () => {
      clearTimeout(startAnimateRef);
      clearTimeout(endAnimateRef);
      clearTimeout(removeToast);
    }
  }, []);

  return (
    <ToastItem show={show}>
      <ToastContent>
        { children }
      </ToastContent>
      {customAction && customAction}
      {!customAction && action && action.label && action.fn && (
        <ToastAction>
          <Button type="button" invert secondary small onClick={action.fn}>{action.label}</Button>
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
    action: {
      label: PropTypes.string,
      fn: PropTypes.func
    },
    customAction: PropTypes.node
  })
}

Toast.defaultProps = {
  remove: null,
  options: {
    timeout: 2000,
    action: null,
    customAction: null
  },
}
