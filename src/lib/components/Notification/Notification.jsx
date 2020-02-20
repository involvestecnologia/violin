import React, { Fragment, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
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
  const timerShow = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  const enableFadeIn = () => {
    timerShow.current = setTimeout(() => setFadeIn(true), 50);
  }

  const disableFadeIn = () => {
    clearTimeout(timerShow.current);
    setFadeIn(false);
  }

  useEffect(() => {
    if (open) enableFadeIn()
    return () => disableFadeIn()
  }, [open])

  const [icon, setIcon] = useState('info')
  useEffect(() => {
    if (type === 'warning' || type === 'error') {
      setIcon('report_problem')
    } else if (type === 'success') {
      setIcon('check_circle')
    }
  }, [type])

  return (open && (
    <NotificationWrapper type={type} fadeIn={fadeIn} {...rest}>
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
      <NotificationCloseButton secondary icon="close" onClick={onClose} />
    </NotificationWrapper>
  ))
}

Notification.propTypes = {
  /** Apply notification visibility */
  open: PropTypes.bool,
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error']),
  actions: PropTypes.arrayOf(PropTypes.element),
  onClose: PropTypes.func,
}

Notification.defaultProps = {
  open: false,
  type: 'info',
  actions: null,
  onClose: null,
}
