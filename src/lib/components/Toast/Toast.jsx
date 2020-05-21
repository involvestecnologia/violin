import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { ToastItem as ToastItemStyled, ToastContent, ToastAction } from './style';

const Toast = ({ children, show, hide, action, customAction, closeButton, ...props }) => (
  <ToastItemStyled show={show} {...props}>
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
        <Button type="button" invert secondary small icon="close" onClick={hide} data-testid="toast-close-button" />
      </ToastAction>
    )}
  </ToastItemStyled>
);

export default Toast;

Toast.propTypes = {
  /** Show component if is true */
  show: PropTypes.bool,
  /** Hide component function */
  hide: PropTypes.func,
  /** Set label and function to action button */
  action: PropTypes.shape({
    label: PropTypes.string,
    method: PropTypes.func
  }),
  /** Set a custom component instead of the action */
  customAction: PropTypes.node,
  /** Show close button */
  closeButton: PropTypes.bool
}

Toast.defaultProps = {
  show: false,
  hide: null,
  action: null,
  customAction: null,
  closeButton: false
}
