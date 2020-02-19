import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import idgen from '../../utils/idgen';
import {
  NotificationWrapper,
  NotificationContent,
  NotificationIcon,
  NotificationCloseButton,
  NotificationFooter,
} from './style'

export const Notification = ({
  open,
  type,
  children,
  actions,
  ...rest
}) => {
  const [icon, setIcon] = useState('info')
  useEffect(() => {
    if (type === 'warning' || type === 'error') {
      setIcon('report_problem')
    } else if (type === 'success') {
      setIcon('check_circle')
    }
  }, [type])

  return (open && (
    <NotificationWrapper type={type} {...rest}>
      <NotificationIcon icon={icon} outlined />
      <NotificationContent>
        {children}
        {actions && (
          <NotificationFooter>{actions.map((action) => (
            <Fragment key={`notification-action-button-${idgen()}`}>{action}</Fragment>
          ))}
          </NotificationFooter>
        )}
      </NotificationContent>
      <NotificationCloseButton secondary small icon="close" />
    </NotificationWrapper>
  ))
}

Notification.propTypes = {
  /** Apply notification visibility */
  open: PropTypes.bool,
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error']),
  actions: PropTypes.arrayOf(PropTypes.element),
}

Notification.defaultProps = {
  open: false,
  type: 'info',
  actions: null,
}
