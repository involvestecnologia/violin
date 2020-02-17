import styled from 'styled-components';
import getFromTheme from '../../utils/getFromTheme';
import { Icon } from '../Icon';
import { Button } from '../Button';

export const NotificationWrapper = styled.div`
  background-color: ${getFromTheme('palette.black.500')};
  color: ${getFromTheme('palette.misc.white')};
  font-size: ${getFromTheme('typography.fontSize.body')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  height: 56px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: auto 36px;
`

export const NotificationContent = styled.div`
  display: flex;
  align-items: center;
`

export const NotificationIcon = styled(Icon)`
  color: ${getFromTheme('palette.misc.white')};
  font-size: 25px;
  padding-left: 18px;
  padding-right: 18px;
`

export const NotificationCloseButton = styled(Button)`
  align-self: center;
`
