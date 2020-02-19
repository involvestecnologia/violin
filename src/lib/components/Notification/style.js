import styled, { css } from 'styled-components';
import getFromTheme from '../../utils/getFromTheme';
import { Icon } from '../Icon';
import { Button } from '../Button';

export const NotificationIcon = styled(Icon)`
  font-size: 25px;
  padding: 14px 10px 14px 14px;
`

export const NotificationContent = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`

const info = css`
  background-color: ${getFromTheme('palette.blue.100')};
  color: ${getFromTheme('palette.blue.800')};

  ${NotificationIcon} {
    color: ${getFromTheme('palette.blue.600')};
  }

  a {
    color: ${getFromTheme('palette.blue.800')};
    &:hover {
      color: ${getFromTheme('palette.blue.600')};
    }
  }
`

const warning = css`
  background-color: ${getFromTheme('palette.yellow.100')};
  color: ${getFromTheme('palette.yellow.800')};

  ${NotificationIcon} {
    color: ${getFromTheme('palette.yellow.600')};
  }

  a {
    color: ${getFromTheme('palette.yellow.800')};
    &:hover {
      color: ${getFromTheme('palette.yellow.600')};
    }
  }
`

const success = css`
  background-color: ${getFromTheme('palette.green.100')};
  color: ${getFromTheme('palette.green.800')};

  ${NotificationIcon} {
    color: ${getFromTheme('palette.green.700')};
  }

  a {
    color: ${getFromTheme('palette.green.800')};
    &:hover {
      color: ${getFromTheme('palette.green.500')};
    }
  }
`

const error = css`
  background-color: ${getFromTheme('palette.red.100')};
  color: ${getFromTheme('palette.red.700')};

  ${NotificationIcon} {
    color: ${getFromTheme('palette.red.700')};
  }

  a {
    color: ${getFromTheme('palette.red.800')};
    &:hover {
      color: ${getFromTheme('palette.red.500')};
    }
  }
`

export const NotificationWrapper = styled.div`
  ${(props) => props.type === 'info' && info}
  ${(props) => props.type === 'warning' && warning}
  ${(props) => props.type === 'success' && success}
  ${(props) => props.type === 'error' && error}

  font-size: ${getFromTheme('typography.fontSize.body')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  line-height: 21px;
  min-height: 52px;
  width: 100%;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 48px auto 62px;
`

export const NotificationCloseButton = styled(Button)`
  margin: 6px 6px 6px 16px;
`
export const NotificationFooter = styled.div`
  display: grid;
  grid-auto-columns: min-content;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  margin-top: 16px;
`
