import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { withProp, ifProp } from 'styled-tools';
import { Icon } from '../../Icon';
import getFromTheme from '../../../utils/getFromTheme';

export const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  font-size: ${getFromTheme('typography.fontSize.body')};
  color: ${getFromTheme('palette.black.900')};
  text-decoration: none;
  opacity: ${ifProp('disabled', '0.2', '1')};
  cursor: ${ifProp('disabled', 'not-allowed', 'pointer')};

  &:hover {
    background-color: ${ifProp(
      'disabled',
      'none',
      withProp(getFromTheme('palette.black.900'), transparentize(0.92))
    )};
  }

  background: ${({ selectable, selected, highlighted }) => {
    if (!selectable) return 'none'

    if (selected && !highlighted) {
      return getFromTheme('palette.primary.100');
    }
    if (highlighted && !selected) {
      return withProp(getFromTheme('palette.black.900'), transparentize(0.92));
    }
    if (selected && highlighted) {
      return getFromTheme('palette.primary.200');
    }
    return 'none';
  }};
`;

export const StyledListItemIcon = styled(Icon)`
  margin-right: 10px;
  font-size: ${rem(24)};
  color: ${getFromTheme('palette.black.600')};
`;
