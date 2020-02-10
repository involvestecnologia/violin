import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { withProp } from 'styled-tools';
import { Icon } from '../../Icon';
import getFromTheme from '../../../utils/getFromTheme';

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  font-size: ${getFromTheme('typography.fontSize.body')};
  color: ${getFromTheme('palette.black.900')};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${withProp(getFromTheme('palette.black.900'), transparentize(0.92))};
  }
`;

export const StyledIcon = styled(Icon)`
  margin-right: 10px;
  font-size: ${rem(24)};
`;
