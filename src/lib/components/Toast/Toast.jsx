import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { StyledToast, ToastContent, ToastAction } from './style';

const Toast = ({ children, show, onHide, action, customAction, closable, ...props }) => (
  <StyledToast show={show} {...props}>
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
    {closable && (
      <ToastAction>
        <Button type="button" invert secondary small icon="close" onClick={onHide} data-testid="toast-close-button" />
      </ToastAction>
    )}
  </StyledToast>
);

export default Toast;

Toast.propTypes = {
  /** Show component if is true */
  show: PropTypes.bool,
  /** Hide component function */
  onHide: PropTypes.func,
  /** Set label and function to action button */
  action: PropTypes.shape({
    label: PropTypes.string,
    method: PropTypes.func
  }),
  /** Set a custom component instead of the action */
  customAction: PropTypes.node,
  /** Show close button */
  closable: PropTypes.bool
}

Toast.defaultProps = {
  show: false,
  onHide: null,
  action: null,
  customAction: null,
  closable: false
}
