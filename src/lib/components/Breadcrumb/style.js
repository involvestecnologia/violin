import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { withProp, ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';
import { Icon } from '../Icon';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 50px;
  padding-right: 40px;
  box-sizing: border-box;
`;

export const Item = styled.span`
  flex-grow: 0;
  font-size: ${rem(14)};
  color: ${getFromTheme('palette.black.400')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  padding: 0 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: ${getFromTheme('common.transition')};
`;

export const ItemButton = styled(Item)`
  display: inline-flex;
  flex-shrink: ${ifProp('elipsis', '0', '1')};
  align-items: center;
  height: 30px;
  padding: 0 6px;
  border-radius: 4px;
  margin-right: -6px;
  box-sizing: border-box;
  cursor: pointer;
  
  > ${Item} {
    padding: 0;
  }

  &:hover {
    background-color: ${withProp(getFromTheme('palette.primary.900'), transparentize(0.92))};
    > ${Item} {
      color: ${getFromTheme('palette.primary.500')};
    }
  }
`;

export const Separator = styled(Icon)`
  font-size: ${rem(14)};
  color: ${getFromTheme('palette.black.200')};
  margin: 0 6px 0 12px;
  cursor: default;
`;
