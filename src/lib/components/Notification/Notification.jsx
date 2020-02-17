import React from 'react'
import PropTypes from 'prop-types';
import {
  NotificationWrapper,
  NotificationContent,
  NotificationIcon,
  NotificationCloseButton,
} from './style'

export const Notification = ({
  open,
  inline,
  error,
  warning,
  success,
  children,
}) => {
  console.log('oioioi')
  return (open && (
    <NotificationWrapper>
      <NotificationContent>
        <NotificationIcon icon="info" />{children}
      </NotificationContent>
      <NotificationCloseButton secondary small invert icon="close" />
    </NotificationWrapper>
  ))
}


Notification.propTypes = {
  /** Apply notification visibility */
  open: PropTypes.bool,
  inline: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
}

Notification.defaultProps = {
  open: false,
  inline: false,
  error: false,
  warning: false,
  success: false,
}
