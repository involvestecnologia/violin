import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Transition } from '../_common/Transition';
import idgen from '../../utils/idgen';
import {
  NotificationWrapper,
  NotificationContent,
  NotificationIcon,
  NotificationCloseButton,
  NotificationFooter,
} from './style'
import { Text } from '../Text'

export const Notification = ({
  open,
  type,
  children,
  actions,
  onClose,
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

  return (
    <Transition show={open}>
      <NotificationWrapper type={type} {...rest}>
        <NotificationIcon icon={icon} outlined />
        <NotificationContent>
          <Text>{children}</Text>
          {(actions && actions.length > 0) && (
            <NotificationFooter>{actions.map((action) => (
              <Fragment key={`notification-action-button-${idgen()}`}>{action}</Fragment>
            ))}
            </NotificationFooter>
          )}
        </NotificationContent>
        {onClose && <NotificationCloseButton secondary icon="close" onClick={onClose} data-testid="notification-close-button" />}
      </NotificationWrapper>
    </Transition>
  )
}

Notification.propTypes = {
  /** Apply notification visibility */
  open: PropTypes.bool,
  /** Apply colors depending on type chosen */
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error']),
  /** Apply actions to modal footer */
  actions: PropTypes.arrayOf(PropTypes.element),
  /** Updates modal state */
  onClose: PropTypes.func,
}

Notification.defaultProps = {
  open: false,
  type: 'info',
  actions: null,
  onClose: null,
}
